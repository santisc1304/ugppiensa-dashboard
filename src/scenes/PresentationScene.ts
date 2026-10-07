import Phaser from 'phaser';
import * as EasyStar from 'easystarjs';
import { WAYPOINTS_CONFIG } from '../data/waypoints';
import { SlideManager } from '../managers/SlideManager';

export class PresentationScene extends Phaser.Scene {
    private map!: Phaser.Tilemaps.Tilemap;
    private player!: Phaser.Physics.Arcade.Sprite;
    private npcs: Phaser.Physics.Arcade.Sprite[] = [];
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
        
        // Logica para Modal de Índice
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
                btn.className = 'nav-btn';
                btn.style.width = '100%';
                btn.style.textAlign = 'left';
                btn.innerText = `${idx + 1}. ${wp.slideId.replace('slide_', 'Sección ')}`;
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

    private finishMovement() {
        this.player.stop();
        this.player.setTexture('empleado_idle_down');
        this.isMoving = false;
        const npc = this.npcs[this.currentWaypointIndex - 1]; 
        if (npc) {
            npc.setTexture('empleada_idle_up'); 
        }
    }
}
