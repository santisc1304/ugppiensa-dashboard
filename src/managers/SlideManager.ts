import { getSlideContent } from '../data/slides-content';
import { ChartFactory } from '../charts/ChartFactory';
import { DataManager } from './DataManager';

export class SlideManager {
    private static overlay: HTMLDivElement | null = null;
    private static isSlideOpen: boolean = false;
    private static onCloseCallback: (() => void) | null = null;

    static initialize() {
        if (this.overlay) return;

        // Crear contenedor overlay
        this.overlay = document.createElement('div');
        this.overlay.className = 'slide-overlay';
        this.overlay.innerHTML = `
            <button class="slide-close">×</button>
            <div class="slide-content"></div>
        `;
        document.body.appendChild(this.overlay);

        // Event listener para cerrar
        this.overlay.querySelector('.slide-close')?.addEventListener('click', () => {
            this.close();
        });

        // Cerrar con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isSlideOpen) {
                this.close();
            }
        });
    }

    static async open(slideId: string, onClose?: () => void) {
        if (!this.overlay) this.initialize();
        if (!this.overlay) return;

        this.onCloseCallback = onClose || null;

        const liveData = await DataManager.fetchData();

        const contentDiv = this.overlay.querySelector('.slide-content');
        if (contentDiv) {
            const data = getSlideContent(slideId, liveData);
            contentDiv.innerHTML = data.html;

            // Si el slide necesita gráficas, las inicializamos aquí
            if (data.chartConfig) {
                setTimeout(() => {
                    ChartFactory.renderChart(slideId, data.chartConfig);
                }, 100);
            }
        }

        this.overlay.classList.add('active');
        this.isSlideOpen = true;
        
        // Despachar evento para que Phaser lo sepa si es necesario
        document.dispatchEvent(new CustomEvent('slideOpened'));
    }

    static close() {
        if (!this.overlay || !this.isSlideOpen) return;
        
        this.overlay.classList.remove('active');
        this.isSlideOpen = false;
        
        // Destruir instancias de chart si existen
        ChartFactory.destroyCurrentChart();

        if (this.onCloseCallback) {
            this.onCloseCallback();
        }

        document.dispatchEvent(new CustomEvent('slideClosed'));
    }

    static isOpen(): boolean {
        return this.isSlideOpen;
    }
}
