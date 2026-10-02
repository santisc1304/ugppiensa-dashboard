import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        // Cargar el tileset real y mapa Tiled
        this.load.image('office_tileset_real', '/assets/images/office_tileset.png');
        this.load.image('inicio_bg', '/assets/images/Inicio.png');
        this.load.image('assets_office', '/assets/images/Patrones_mapa.png');
        this.load.tilemapTiledJSON('mapa_oficina', '/assets/data/mapa_ultimo.json');

        // Cargar frames de personajes (solo jugador necesario, tal vez NPCs)
        const characters = ['player', 'empleado', 'empleada'];
        characters.forEach(char => {
            for (let i = 0; i < 4; i++) {
                this.load.image(`${char}_down_${i}`, `/assets/images/characters/${char}_down_${i}.png`);
                this.load.image(`${char}_up_${i}`, `/assets/images/characters/${char}_up_${i}.png`);
                this.load.image(`${char}_right_${i}`, `/assets/images/characters/${char}_right_${i}.png`);
                this.load.image(`${char}_left_${i}`, `/assets/images/characters/${char}_left_${i}.png`);
            }
            this.load.image(`${char}_idle_down`, `/assets/images/characters/${char}_idle_down.png`);
            this.load.image(`${char}_idle_up`, `/assets/images/characters/${char}_idle_up.png`);
            this.load.image(`${char}_idle_right`, `/assets/images/characters/${char}_idle_right.png`);
            this.load.image(`${char}_idle_left`, `/assets/images/characters/${char}_idle_left.png`);
        });
    }

    create() {
        this.defineRealFrames();
        this.createPlayerAnimations();

        const pixelArtKeys = ['assets_office'];
        const characters = ['player', 'empleado', 'empleada'];
        characters.forEach(char => {
            pixelArtKeys.push(`${char}_idle_down`, `${char}_idle_up`, `${char}_idle_right`, `${char}_idle_left`);
            for (const dir of ['down', 'up', 'right', 'left']) {
                for (let i = 0; i < 4; i++) {
                    pixelArtKeys.push(`${char}_${dir}_${i}`);
                }
            }
        });

        pixelArtKeys.forEach(k => {
            if (this.textures.exists(k)) {
                this.textures.get(k).setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        });

        this.generatePlaceholders();

        this.scene.start('StartScene');
    }

    private generatePlaceholders() {
        const tilesGraphics = this.make.graphics({ x: 0, y: 0 }, false);
        
        // Bloque 1: Suelo (Gris claro)
        tilesGraphics.fillStyle(0x475569, 1);
        tilesGraphics.fillRect(0, 0, 32, 32);
        tilesGraphics.lineStyle(1, 0x334155, 1);
        tilesGraphics.strokeRect(0, 0, 32, 32);

        // Bloque 2: Muro / Pared (Azul pizarra oscuro - Bloquea paso)
        tilesGraphics.fillStyle(0x1e293b, 1);
        tilesGraphics.fillRect(32, 0, 32, 32);
        tilesGraphics.fillStyle(0x334155, 1);
        tilesGraphics.fillRect(32, 0, 32, 8); // Borde superior de pared

        // Bloque 3: Escritorio/Archivador (Marrón - Bloquea paso)
        tilesGraphics.fillStyle(0xb45309, 1);
        tilesGraphics.fillRect(64, 4, 32, 24);

        // Bloque 4: Ascensor / Lobby (Portal Trivia Misión Raíz)
        tilesGraphics.fillStyle(0x1e1b4b, 1);
        tilesGraphics.fillRect(96, 0, 32, 32);
        tilesGraphics.fillStyle(0xd97706, 1); // Puertas doradas
        tilesGraphics.fillRect(100, 4, 10, 24);
        tilesGraphics.fillRect(114, 4, 10, 24);

        // Bloque 5: Cafetería / Mesa de descanso (Pausa Activa)
        tilesGraphics.fillStyle(0x064e3b, 1);
        tilesGraphics.fillRect(128, 0, 32, 32);
        tilesGraphics.fillStyle(0x10b981, 1);
        tilesGraphics.fillRect(136, 8, 16, 16); // Mesa verde

        // Bloque 6: Oficina Director / Boss (Trivia Directorios Ágiles)
        tilesGraphics.fillStyle(0x581c87, 1);
        tilesGraphics.fillRect(160, 0, 32, 32);
        tilesGraphics.fillStyle(0xc084fc, 1);
        tilesGraphics.fillRect(164, 4, 24, 24); // Alfombra morada

        tilesGraphics.generateTexture('office_tileset', 192, 32);
    }

    private defineRealFrames() {
        const texture = this.textures.get('office_tileset_real');
        if (!texture) return;
        texture.add('floor_carpet', 0, 12, 12, 38, 38);
        texture.add('elevator_closed', 0, 12, 267, 80, 120);
        texture.add('elevator_open', 0, 105, 267, 80, 120);
        texture.add('desk_single', 0, 164, 12, 64, 52);
        texture.add('desk_double', 0, 164, 85, 110, 52);
        texture.add('desk_quad', 0, 410, 12, 94, 105);
        texture.add('meeting_table', 0, 365, 140, 105, 52);
        texture.add('plant_pot', 0, 424, 210, 20, 38);
        texture.add('water_dispenser', 0, 530, 12, 20, 50);
        texture.add('sofa_black', 0, 214, 355, 50, 32);
        texture.add('glass_wall', 0, 12, 150, 80, 44);
        texture.add('glass_door', 0, 131, 208, 36, 44);
        texture.add('office_door', 0, 197, 268, 36, 62);
    }

    private createPlayerAnimations() {
        const dirs = ['down', 'up', 'right', 'left'];
        const characters = ['player', 'empleado', 'empleada'];
        characters.forEach(char => {
            dirs.forEach(dir => {
                const frames = [];
                for (let i = 0; i < 4; i++) {
                    frames.push({ key: `${char}_${dir}_${i}` });
                }
                const animKey = `walk_${char}_${dir}`;
                if (!this.anims.exists(animKey)) {
                    this.anims.create({
                        key: animKey,
                        frames: frames,
                        frameRate: 8,
                        repeat: -1
                    });
                }
            });
        });
    }
}
