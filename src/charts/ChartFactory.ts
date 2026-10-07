import Chart from 'chart.js/auto';

export class ChartFactory {
    private static currentChart: Chart | null = null;

    static renderChart(slideId: string, config: any) {
        const canvas = document.getElementById(`chart-${slideId}`) as HTMLCanvasElement;
        if (!canvas) return;

        this.destroyCurrentChart();

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        Chart.defaults.color = '#cbd5e1';
        Chart.defaults.font.family = "'Plus Jakarta Sans', sans-serif";
        Chart.defaults.font.size = 14;

        const liveData = config.data;
        if (!liveData) {
            console.warn("No live data available for charts.");
            return;
        }

        switch (config.type) {
            case 'learning-curve': {
                const labels = liveData.timeline.map((t: any) => new Date(t.fecha).toLocaleDateString());
                const puntajes = liveData.timeline.map((t: any) => t.puntaje);
                
                this.currentChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Puntaje Promedio Normativo (%)',
                            data: puntajes,
                            borderColor: '#10b981',
                            backgroundColor: 'rgba(16, 185, 129, 0.2)',
                            borderWidth: 3,
                            fill: true,
                            tension: 0.4,
                            pointRadius: 5,
                            pointBackgroundColor: '#10b981'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { position: 'top' },
                            tooltip: { mode: 'index', intersect: false }
                        },
                        scales: {
                            y: { beginAtZero: true, max: 100, title: { display: true, text: 'Puntaje (%)' } }
                        }
                    }
                });
                break;
            }

            case 'error-reduction': {
                const labels = liveData.timeline.map((t: any) => new Date(t.fecha).toLocaleDateString());
                const errores = liveData.timeline.map((t: any) => t.errores);

                this.currentChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Errores Promedio por Sesión',
                                data: errores,
                                backgroundColor: 'rgba(239, 68, 68, 0.8)',
                                borderRadius: 6
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { position: 'top' }
                        },
                        scales: {
                            y: { 
                                beginAtZero: true,
                                title: { display: true, text: 'Cantidad de Errores' }
                            }
                        }
                    }
                });
                break;
            }

            case 'wellbeing-balance': {
                const modulos = liveData.modulos || {};
                let pausas = 0;
                let trivias = 0;
                Object.keys(modulos).forEach(k => {
                    if (k.toLowerCase().includes('pausa')) pausas += modulos[k];
                    else trivias += modulos[k];
                });

                this.currentChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Módulos de Bienestar (Pausas)', 'Módulos Normativos (Trivias)'],
                        datasets: [{
                            data: [pausas, trivias],
                            backgroundColor: [
                                'rgba(56, 189, 248, 0.8)',
                                'rgba(236, 72, 153, 0.8)'
                            ],
                            borderColor: ['#0a0f1e', '#0a0f1e'],
                            borderWidth: 2,
                            hoverOffset: 10
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { position: 'right' }
                        },
                        cutout: '70%'
                    }
                });
                break;
            }
        }
    }

    static destroyCurrentChart() {
        if (this.currentChart) {
            this.currentChart.destroy();
            this.currentChart = null;
        }
    }
}
