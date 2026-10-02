import Phaser from 'phaser';

export class StartScene extends Phaser.Scene {
    constructor() {
        super('StartScene');
    }

    create() {
        // Mostrar la imagen de inicio cubriendo toda la pantalla
        const bg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'inicio_bg');
        bg.setDisplaySize(this.cameras.main.width, this.cameras.main.height);

        // Mensaje de toca para comenzar
        const text = this.add.text(this.cameras.main.width / 2, this.cameras.main.height - 100, 'Toca para comenzar', {
            fontSize: '32px',
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            stroke: '#000000',
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
