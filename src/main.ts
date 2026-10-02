import './style.css';
import Phaser from 'phaser';
import { BootScene } from './scenes/BootScene';
import { StartScene } from './scenes/StartScene';
import { PresentationScene } from './scenes/PresentationScene';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'app',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0, x: 0 },
            debug: false
        }
    },
    scene: [BootScene, StartScene, PresentationScene]
};

const game = new Phaser.Game(config);

window.addEventListener('resize', () => {
    game.scale.resize(window.innerWidth, window.innerHeight);
});
