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

        switch (config.type) {
            case 'conversion-viral':
                this.currentChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Semana 1', 'Semana 2', 'Semana 2.5 (Cierre)'],
                        datasets: [{
                            label: 'Usuarios Activos Acumulados (Canal Orgánico)',
                            data: [7, 25, 38],
                            borderColor: '#ec4899',
                            backgroundColor: 'rgba(236, 72, 153, 0.2)',
                            borderWidth: 3,
                            fill: true,
                            tension: 0.4,
                            pointRadius: 6,
                            pointBackgroundColor: '#ec4899'
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
                            y: { beginAtZero: true, max: 83, title: { display: true, text: 'Usuarios (Meta n=83)' } }
                        }
                    }
                });
                break;
                
            case 'knowledge-precision':
                this.currentChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Misión Raíz', 'Lluvia Respuestas', 'Directorios', 'Despacho Ágil'],
                        datasets: [{
                            label: '% Precisión Superior al 60%',
                            data: [87.2, 63.3, 29.3, 16.5],
                            backgroundColor: [
                                'rgba(16, 185, 129, 0.8)', // Verde (Cumple)
                                'rgba(16, 185, 129, 0.8)', // Verde (Cumple)
                                'rgba(245, 158, 11, 0.8)', // Naranja (Brecha)
                                'rgba(239, 68, 68, 0.8)'   // Rojo (Brecha Crítica)
                            ],
                            borderColor: [
                                '#10b981', '#10b981', '#f59e0b', '#ef4444'
                            ],
                            borderWidth: 1,
                            borderRadius: 6
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false }
                        },
                        scales: {
                            y: { 
                                beginAtZero: true, 
                                max: 100,
                                title: { display: true, text: '% de Usuarios' }
                            }
                        }
                    }
                });
                break;

            case 'wellbeing-impact':
                this.currentChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Game Activo (Pausas Efectivas)', 'Módulos de Conocimiento'],
                        datasets: [{
                            data: [278, 526],
                            backgroundColor: [
                                'rgba(16, 185, 129, 0.8)',
                                'rgba(56, 189, 248, 0.8)'
                            ],
                            borderColor: ['#0a0f1e', '#0a0f1e'],
                            borderWidth: 2,
                            hoverOffset: 10
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        cutout: '70%',
                        plugins: {
                            legend: { position: 'right' }
                        }
                    }
                });
                break;
        }
    }

    static destroyCurrentChart() {
        if (this.currentChart) {
            this.currentChart.destroy();
            this.currentChart = null;
        }
    }
}
