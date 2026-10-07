import Phaser from 'phaser';

export class StartScene extends Phaser.Scene {
    constructor() {
        super('StartScene');
    }

    create() {
        // Mostrar la imagen de inicio cubriendo toda la pantalla
        const bg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'inicio_bg');
        bg.setDisplaySize(this.cameras.main.width, this.cameras.main.height);

        // Título Principal
        this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2 - 80, 'UGPPIENSA', {
            fontSize: '96px',
            color: '#10b981',
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'bold',
            stroke: '#0a0f1e',
            strokeThickness: 8,
            shadow: { offsetX: 0, offsetY: 4, color: '#000', blur: 10, fill: true }
        }).setOrigin(0.5);

        // Slogan
        this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2 + 20, 'Conectando información transformamos procesos;\nconectando propósito transformamos personas.', {
            fontSize: '28px',
            color: '#38bdf8',
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'italic',
            align: 'center',
            stroke: '#0a0f1e',
            strokeThickness: 4
        }).setOrigin(0.5);

        // Mensaje de toca para comenzar
        const text = this.add.text(this.cameras.main.width / 2, this.cameras.main.height - 80, 'Toca la pantalla o presiona SPACE para comenzar', {
            fontSize: '24px',
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            stroke: '#0a0f1e',
            strokeThickness: 4
        }).setOrigin(0.5);

        // Efecto de parpadeo
        this.tweens.add({
            targets: text,
            alpha: 0.2,
            duration: 800,
            yoyo: true,
            repeat: -1
        });

        const startPresentation = () => {
            this.scene.start('PresentationScene');
        };

        // Evento para avanzar
        this.input.on('pointerdown', startPresentation);
        this.input.keyboard?.on('keydown-SPACE', startPresentation);
        this.input.keyboard?.on('keydown-ENTER', startPresentation);
        this.input.keyboard?.on('keydown-RIGHT', startPresentation);
    }
}
