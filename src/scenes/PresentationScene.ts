import Phaser from 'phaser';
import * as EasyStar from 'easystarjs';
import { WAYPOINTS_CONFIG } from '../data/waypoints';
import { SlideManager } from '../managers/SlideManager';

const SLIDE_TITLES: Record<string, string> = {
    slide_0: '1. Proyecto UGPPIENSA',
    slide_1: '2. Desafío Organizacional y Oportunidad',
    slide_2: '3. Transformación y Beneficios',
    slide_3: '4. Metodología de Desarrollo',
    slide_4: '5. Curva de Aprendizaje y Retención',
    slide_5: '6. Disminución de Errores Operativos',
    slide_6: '7. Participación por Módulos y Juegos',
    slide_7: '8. Evaluación de Indicadores Acordados',
    slide_8: '9. Conclusión y Viabilidad Estratégica'
};

interface RoamingZone {
    char: 'empleado' | 'empleada';
    startX: number;
    startY: number;
    bounds: { minX: number; maxX: number; minY: number; maxY: number };
}

// Zonas 100% libres de colisión con las 72 rutas de navegación del jugador
const ROAMING_ZONES: RoamingZone[] = [
    {
        char: 'empleado',
        startX: 93,
        startY: 34,
        bounds: { minX: 91, maxX: 95, minY: 33, maxY: 36 } // Cubículos Este
    },
    {
        char: 'empleada',
        startX: 8,
        startY: 40,
        bounds: { minX: 6, maxX: 12, minY: 39, maxY: 41 } // Sala Suroeste
    },
    {
        char: 'empleada',
        startX: 65,
        startY: 51,
        bounds: { minX: 64, maxX: 67, minY: 49, maxY: 52 } // Recepción Derecha
    },
    {
        char: 'empleado',
        startX: 31,
        startY: 49,
        bounds: { minX: 28, maxX: 34, minY: 48, maxY: 50 } // Zona Sur Pasillo
    },
    {
        char: 'empleada',
        startX: 50,
        startY: 4,
        bounds: { minX: 48, maxX: 52, minY: 2, maxY: 5 } // Oficina Central Superior
    }
];

export class PresentationScene extends Phaser.Scene {
    private map!: Phaser.Tilemaps.Tilemap;
    private player!: Phaser.Physics.Arcade.Sprite;
    private npcs: Phaser.Physics.Arcade.Sprite[] = [];
    private roamingNPCs: Phaser.Physics.Arcade.Sprite[] = [];
    private currentWaypointIndex: number = 0;
    private isMoving: boolean = false;
    private easystar!: EasyStar.js;
    private grid: number[][] = [];

    constructor() {
        super('PresentationScene');
    }

    create() {
        SlideManager.initialize();

        this.map = this.make.tilemap({ key: 'mapa_oficina' });
        
        const tileset = this.map.addTilesetImage('assets_office', 'assets_office');
        const tilesets = [tileset].filter(t => t !== null) as Phaser.Tilemaps.Tileset[];

        // Crear todas las capas
        const layers: any[] = [];
        this.map.layers.forEach(layerData => {
            const layer = this.map.createLayer(layerData.name, tilesets, 0, 0);
            if (layer) layers.push(layer);
        });

        // Configurar EasyStar para Pathfinding
        this.easystar = new EasyStar.js();
        this.grid = [];
        
        for (let y = 0; y < this.map.height; y++) {
            const row: number[] = [];
            for (let x = 0; x < this.map.width; x++) {
                let isObstacle = false;
                layers.forEach(layer => {
                    // Ignorar la capa de piso base, asumimos que se llama "Alfombra"
                    if (layer.layer.name !== 'Alfombra' && layer.layer.name !== 'Suelo') {
                        const tile = layer.getTileAt(x, y, true);
                        if (tile && tile.index !== -1) {
                            isObstacle = true;
                        }
                    }
                });
                row.push(isObstacle ? 1 : 0);
            }
            this.grid.push(row);
        }
        
        this.easystar.setGrid(this.grid);
        this.easystar.setAcceptableTiles([0]);
        this.easystar.enableDiagonals();
        this.easystar.disableCornerCutting();

        const startWp = WAYPOINTS_CONFIG[0];
        const tileWidth = this.map.tileWidth;
        const tileHeight = this.map.tileHeight;

        // JUGADOR: usamos empleado1 y escala 2 como el juego original
        this.player = this.physics.add.sprite(
            startWp.tileX * tileWidth + tileWidth / 2,
            startWp.tileY * tileHeight + tileHeight / 2,
            'empleado_idle_down'
        );
        this.player.setDepth(10);
        this.player.setScale(2);

        // NPCs de interacción en cada estación
        WAYPOINTS_CONFIG.forEach((wp, index) => {
            if (index === 0) return;
            
            const npc = this.physics.add.sprite(
                wp.tileX * tileWidth + tileWidth / 2,
                (wp.tileY - 1) * tileHeight + tileHeight / 2, 
                'empleada_idle_down'
            );
            npc.setDepth(9);
            npc.setScale(2);
            this.npcs.push(npc);
        });

        // NPCs caminando por zonas seguras de la oficina
        this.setupRoamingNPCs(tileWidth, tileHeight);

        this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
        this.cameras.main.setZoom(1.5); // Ajustado para ver mejor el entorno escalado

        // Mostrar HUD
        const hud = document.getElementById('hud');
        if (hud) hud.style.display = 'flex';

        this.input.keyboard?.on('keydown-RIGHT', () => this.advance());
        this.input.keyboard?.on('keydown-LEFT', () => this.retreat());
        this.input.keyboard?.on('keydown-SPACE', () => this.toggleSlide());
        
        document.getElementById('btn-next')?.addEventListener('click', () => this.advance());
        document.getElementById('btn-prev')?.addEventListener('click', () => this.retreat());
        document.getElementById('btn-action')?.addEventListener('click', () => this.toggleSlide());
        
        // Logica para Modal de Índice con títulos claros de cada sección
        const btnIndex = document.getElementById('btn-index');
        const modalIndex = document.getElementById('index-modal');
        const closeIndex = document.getElementById('close-index');
        const indexList = document.getElementById('index-list');

        if (btnIndex && modalIndex && closeIndex && indexList && indexList.children.length === 0) {
            btnIndex.addEventListener('click', () => {
                if (this.isMoving) return;
                modalIndex.classList.add('active');
            });

            closeIndex.addEventListener('click', () => {
                modalIndex.classList.remove('active');
            });

            WAYPOINTS_CONFIG.forEach((wp, idx) => {
                const btn = document.createElement('button');
                btn.className = 'index-item-btn';
                const titleText = SLIDE_TITLES[wp.slideId] || `${idx + 1}. Sección ${idx + 1}`;
                btn.innerHTML = `<span>${titleText}</span><span style="opacity: 0.6; font-size: 0.9rem;">Ir →</span>`;
                btn.onclick = () => {
                    modalIndex.classList.remove('active');
                    if (this.currentWaypointIndex !== idx) {
                        this.currentWaypointIndex = idx;
                        this.moveToWaypoint(WAYPOINTS_CONFIG[this.currentWaypointIndex]);
                    }
                };
                indexList.appendChild(btn);
            });
        }
    }

    private toggleSlide() {
        if (this.isMoving) return;
        if (SlideManager.isOpen()) {
            SlideManager.close();
        } else {
            SlideManager.open(WAYPOINTS_CONFIG[this.currentWaypointIndex].slideId);
        }
    }

    private advance() {
        if (this.isMoving || SlideManager.isOpen()) return;
        if (this.currentWaypointIndex >= WAYPOINTS_CONFIG.length - 1) {
            this.currentWaypointIndex = 0;
        } else {
            this.currentWaypointIndex++;
        }
        this.moveToWaypoint(WAYPOINTS_CONFIG[this.currentWaypointIndex]);
    }

    private retreat() {
        if (this.isMoving || SlideManager.isOpen()) return;
        if (this.currentWaypointIndex <= 0) {
            this.currentWaypointIndex = WAYPOINTS_CONFIG.length - 1;
        } else {
            this.currentWaypointIndex--;
        }
        this.moveToWaypoint(WAYPOINTS_CONFIG[this.currentWaypointIndex]);
    }

    private moveToWaypoint(wp: any) {
        this.isMoving = true;
        
        const startX = Math.floor(this.player.x / this.map.tileWidth);
        const startY = Math.floor(this.player.y / this.map.tileHeight);
        
        // Ensure within bounds
        if (startY < 0 || startY >= this.grid.length || startX < 0 || startX >= this.grid[0].length) {
            this.executeDirectTween(wp);
            return;
        }

        // Temporarily force start and end to be walkable
        const origStart = this.grid[startY][startX];
        const origEnd = this.grid[wp.tileY][wp.tileX];
        this.grid[startY][startX] = 0;
        this.grid[wp.tileY][wp.tileX] = 0;
        this.easystar.setGrid(this.grid);

        this.easystar.findPath(startX, startY, wp.tileX, wp.tileY, (path) => {
            // Restore grid
            this.grid[startY][startX] = origStart;
            this.grid[wp.tileY][wp.tileX] = origEnd;
            this.easystar.setGrid(this.grid);

            if (!path || path.length === 0) {
                console.warn('No se encontró ruta, saltando directo');
                // Fallback a movimiento directo si el pathfinding falla
                this.executeDirectTween(wp);
            } else {
                this.executePath(path, wp);
            }
        });
        this.easystar.calculate();
    }

    private executePath(path: {x: number, y: number}[], finalWp: any) {
        const tweens: any[] = [];

        // Reducimos la duración total basada en el path
        const timePerTile = finalWp.travelTime / path.length;

        path.forEach((point) => {
            const px = point.x * this.map.tileWidth + this.map.tileWidth / 2;
            const py = point.y * this.map.tileHeight + this.map.tileHeight / 2;

            tweens.push({
                x: px,
                y: py,
                duration: timePerTile,
                ease: 'Linear',
                onStart: () => {
                    // Update animation direction
                    const dx = px - this.player.x;
                    const dy = py - this.player.y;
                    if (Math.abs(dx) > Math.abs(dy)) {
                        this.player.play(dx > 0 ? 'walk_empleado_right' : 'walk_empleado_left', true);
                    } else if (Math.abs(dy) > 0) {
                        this.player.play(dy > 0 ? 'walk_empleado_down' : 'walk_empleado_up', true);
                    }
                }
            });
        });

        this.tweens.chain({
            targets: this.player,
            tweens: tweens,
            onComplete: () => {
                this.finishMovement();
            }
        });
    }

    private executeDirectTween(wp: any) {
        const targetX = wp.tileX * this.map.tileWidth + this.map.tileWidth / 2;
        const targetY = wp.tileY * this.map.tileHeight + this.map.tileHeight / 2;
        const dx = targetX - this.player.x;
        const dy = targetY - this.player.y;
        
        if (Math.abs(dx) > Math.abs(dy)) {
            this.player.play(dx > 0 ? 'walk_empleado_right' : 'walk_empleado_left', true);
        } else {
            this.player.play(dy > 0 ? 'walk_empleado_down' : 'walk_empleado_up', true);
        }

        this.tweens.add({
            targets: this.player,
            x: targetX,
            y: targetY,
            duration: wp.travelTime,
            ease: 'Linear',
            onComplete: () => this.finishMovement()
        });
    }

    private setupRoamingNPCs(tileWidth: number, tileHeight: number) {
        ROAMING_ZONES.forEach((zone) => {
            const startPx = zone.startX * tileWidth + tileWidth / 2;
            const startPy = zone.startY * tileHeight + tileHeight / 2;
            const npc = this.physics.add.sprite(startPx, startPy, `${zone.char}_idle_down`);
            npc.setDepth(9);
            npc.setScale(2);
            this.roamingNPCs.push(npc);

            this.scheduleRoam(npc, zone, tileWidth, tileHeight);
        });
    }

    private scheduleRoam(npc: Phaser.Physics.Arcade.Sprite, zone: RoamingZone, tileWidth: number, tileHeight: number) {
        // Pausa aleatoria antes del próximo movimiento para simular ritmo natural
        const delay = Phaser.Math.Between(2500, 5500);
        this.time.delayedCall(delay, () => {
            if (!this.scene.isActive()) return;

            // Elegir una casilla dentro de los límites seguros
            const targetX = Phaser.Math.Between(zone.bounds.minX, zone.bounds.maxX);
            const targetY = Phaser.Math.Between(zone.bounds.minY, zone.bounds.maxY);

            const px = targetX * tileWidth + tileWidth / 2;
            const py = targetY * tileHeight + tileHeight / 2;

            const dx = px - npc.x;
            const dy = py - npc.y;
            const dist = Phaser.Math.Distance.Between(npc.x, npc.y, px, py);

            if (dist < 15) {
                this.scheduleRoam(npc, zone, tileWidth, tileHeight);
                return;
            }

            // Velocidad de caminata tranquila (aprox 45 px/s)
            const duration = (dist / 45) * 1000;

            let animDir = 'down';
            if (Math.abs(dx) > Math.abs(dy)) {
                animDir = dx > 0 ? 'right' : 'left';
            } else {
                animDir = dy > 0 ? 'down' : 'up';
            }

            npc.play(`walk_${zone.char}_${animDir}`, true);

            this.tweens.add({
                targets: npc,
                x: px,
                y: py,
                duration: duration,
                ease: 'Linear',
                onComplete: () => {
                    npc.stop();
                    npc.setTexture(`${zone.char}_idle_${animDir}`);
                    this.scheduleRoam(npc, zone, tileWidth, tileHeight);
                }
            });
        });
    }

    private finishMovement() {
        this.player.stop();
        this.isMoving = false;

        if (this.currentWaypointIndex > 0) {
            // El jugador queda de espaldas mirando hacia el NPC/escritorio (norte)
            this.player.setTexture('empleado_idle_up');

            const npc = this.npcs[this.currentWaypointIndex - 1]; 
            if (npc) {
                npc.stop();
                // El NPC queda de frente mirando al jugador y la cámara (sur)
                npc.setTexture('empleada_idle_down'); 
            }
        } else {
            // En el inicio (slide 0 / spawn) el jugador mira hacia el frente
            this.player.setTexture('empleado_idle_down');
        }
    }
}
