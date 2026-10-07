import Phaser from 'phaser';

export class StartScene extends Phaser.Scene {
    constructor() {
        super('StartScene');
    }

    create() {
        const { width, height } = this.cameras.main;

        // Mostrar la imagen de inicio cubriendo toda la pantalla
        const bg = this.add.image(width / 2, height / 2, 'inicio_bg');
        bg.setDisplaySize(width, height);

        // Cuadro oscuro (card contenedora) para que el logo y slogan no se difuminen con el fondo
        const cardWidth = Math.min(width * 0.88, 980);
        const cardHeight = 290;
        const cardX = width / 2 - cardWidth / 2;
        const cardY = height / 2 - cardHeight / 2 - 40;

        const cardGraphics = this.add.graphics();
        
        // Sombra suave de la tarjeta
        cardGraphics.fillStyle(0x000000, 0.7);
        cardGraphics.fillRoundedRect(cardX + 6, cardY + 8, cardWidth, cardHeight, 24);
        
        // Fondo oscuro semitransparente premium
        cardGraphics.fillStyle(0x0b1120, 0.88);
        cardGraphics.fillRoundedRect(cardX, cardY, cardWidth, cardHeight, 24);
        
        // Borde elegante con acento esmeralda
        cardGraphics.lineStyle(2, 0x10b981, 0.8);
        cardGraphics.strokeRoundedRect(cardX, cardY, cardWidth, cardHeight, 24);

        // Título Principal (Logo UGPPIENSA)
        this.add.text(width / 2, cardY + 85, 'UGPPIENSA', {
            fontSize: '92px',
            color: '#10b981',
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'bold',
            stroke: '#052e16',
            strokeThickness: 8,
            shadow: { offsetX: 0, offsetY: 4, color: '#000', blur: 12, fill: true }
        }).setOrigin(0.5);

        // Línea divisoria decorativa sutil
        const lineGraphics = this.add.graphics();
        lineGraphics.lineStyle(2, 0x38bdf8, 0.4);
        lineGraphics.lineBetween(width / 2 - 160, cardY + 145, width / 2 + 160, cardY + 145);

        // Slogan
        this.add.text(width / 2, cardY + 205, '«Conectando información transformamos procesos;\nconectando propósito transformamos personas»', {
            fontSize: '26px',
            color: '#38bdf8',
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'italic',
            align: 'center',
            stroke: '#0a0f1e',
            strokeThickness: 3,
            lineSpacing: 8,
            shadow: { offsetX: 0, offsetY: 2, color: '#000000', blur: 6, fill: true }
        }).setOrigin(0.5);

        // Mensaje de toca para comenzar
        const text = this.add.text(width / 2, height - 70, 'Toca la pantalla o presiona SPACE para comenzar', {
            fontSize: '22px',
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
