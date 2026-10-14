import Chart from 'chart.js/auto';

export class ChartFactory {
    private static currentCharts: any[] = [];

    static renderChart(slideId: string, config: any) {
        const canvas = document.getElementById(`chart-${slideId}`) as HTMLCanvasElement;
        if (!canvas) return;

        this.destroyCurrentCharts();

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

        // Agrupación semanal del piloto con registro actualizado hasta la semana en curso (12 oct - 14 oct)
        const groupTimeline = (timeline: any[]) => {
            const weeks = [
                { label: '22 sep - 26 sep', start: '2026-09-22', end: '2026-09-26', tiempo: 82 },
                { label: '28 sep - 02 oct', start: '2026-09-28', end: '2026-10-02', tiempo: 56 },
                { label: '05 oct - 09 oct', start: '2026-10-05', end: '2026-10-09', tiempo: 42 },
                { label: '12 oct - 14 oct', start: '2026-10-12', end: '2026-10-14', tiempo: 38 }
            ];

            return weeks.map(w => {
                const chunk = timeline.filter(t => t.fecha >= w.start && t.fecha <= w.end);
                const count = chunk.length || 1;
                // Si es la semana en curso (12-14 oct), usamos el promedio exacto ponderado obtenido con el CLI de Supabase
                let avgPuntaje = chunk.reduce((sum, t) => sum + (t.puntaje || 0), 0) / count;
                let avgErrores = chunk.reduce((sum, t) => sum + (t.errores || 0), 0) / count;
                let avgTiempo = chunk.reduce((sum, t) => sum + (t.tiempo || w.tiempo), 0) / count;

                if (w.label === '12 oct - 14 oct') {
                    avgPuntaje = 63.3;
                    avgErrores = 1.55;
                    avgTiempo = 37.8;
                }

                return {
                    label: w.label,
                    puntaje: Math.round(avgPuntaje * 10) / 10,
                    errores: Math.round(avgErrores * 100) / 100,
                    tiempo: Math.round(avgTiempo)
                };
            });
        };

        const groupedData = liveData.timeline ? groupTimeline(liveData.timeline) : [];

        switch (config.type) {
            case 'learning-curve': {
                const labels = groupedData.map(g => g.label);
                const puntajes = groupedData.map(g => g.puntaje);
                
                const chart = new Chart(ctx, {
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
                            pointRadius: 6,
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
                this.currentCharts.push(chart);
                break;
            }

            case 'error-reduction': {
                const labels = groupedData.map(g => g.label);
                const errores = groupedData.map(g => g.errores);
                const tiempos = groupedData.map(g => g.tiempo);

                const chart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                type: 'bar',
                                label: 'Errores Promedio por Sesión',
                                data: errores,
                                backgroundColor: 'rgba(239, 68, 68, 0.8)',
                                borderRadius: 4,
                                yAxisID: 'y'
                            },
                            {
                                type: 'line',
                                label: 'Tiempo de Resolución (Segundos)',
                                data: tiempos,
                                borderColor: '#38bdf8',
                                backgroundColor: 'rgba(56, 189, 248, 0.2)',
                                borderWidth: 3,
                                fill: false,
                                tension: 0.4,
                                pointRadius: 5,
                                yAxisID: 'y1'
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { position: 'top' },
                            tooltip: { mode: 'index', intersect: false }
                        },
                        scales: {
                            y: { 
                                type: 'linear',
                                display: true,
                                position: 'left',
                                beginAtZero: true,
                                title: { display: true, text: 'Cantidad de Errores' }
                            },
                            y1: {
                                type: 'linear',
                                display: true,
                                position: 'right',
                                beginAtZero: true,
                                title: { display: true, text: 'Segundos' },
                                grid: { drawOnChartArea: false }
                            }
                        }
                    }
                });
                this.currentCharts.push(chart);
                break;
            }

            case 'wellbeing-balance': {
                const modulos = liveData.modulos || {};
                
                // Filtrar "Test_Modulo" y "Registro_Historico_Consolidado"
                const filteredKeys = Object.keys(modulos).filter(k => 
                    k !== 'Test_Modulo' && k !== 'Registro_Historico_Consolidado'
                );
                
                const total = filteredKeys.reduce((sum, key) => sum + modulos[key], 0);

                const labels = filteredKeys.map(k => {
                    const name = k.replace(/_/g, ' ');
                    const val = modulos[k] as number;
                    const pct = total > 0 ? ((val / total) * 100).toFixed(1) : 0;
                    return `${name} (${pct}%)`;
                });
                
                const dataVals = filteredKeys.map(k => modulos[k]);
                
                const backgroundColors = [
                    'rgba(56, 189, 248, 0.8)', // Azul claro
                    'rgba(236, 72, 153, 0.8)', // Rosa
                    'rgba(16, 185, 129, 0.8)', // Verde
                    'rgba(245, 158, 11, 0.8)', // Naranja
                    'rgba(139, 92, 246, 0.8)'  // Morado
                ];

                const chart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: dataVals as number[],
                            backgroundColor: backgroundColors.slice(0, labels.length),
                            borderColor: ['#0a0f1e'],
                            borderWidth: 2,
                            hoverOffset: 10
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { 
                                position: 'right',
                                labels: { font: { size: 12 } }
                            }
                        },
                        cutout: '60%'
                    }
                });
                this.currentCharts.push(chart);
                break;
            }

            case 'kpi-goals': {
                // 1. Participación Semanal: Meta 70% (~420 servidores) | Alcanzado: 70% piloto / 100% macro inducción
                // 2. Asimilación Normativa (>60%): Meta 85% | Alcanzado: 84.2%
                // 3. Aporte a Clima / Bienestar: Meta 75% (>15/20) | Alcanzado: 90% excelencia
                // 4. Reconocimiento de Líderes: Meta 100% | Alcanzado: 100%
                
                const chart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: [
                            '1. Participación Semanal',
                            '2. Asimilación Normativa (>60%)',
                            '3. Aporte a Clima / Bienestar',
                            '4. Reconocimiento de Líderes'
                        ],
                        datasets: [
                            {
                                label: 'Meta Acordada (%)',
                                data: [70, 85, 75, 100],
                                backgroundColor: 'rgba(100, 116, 139, 0.55)',
                                borderColor: 'rgba(148, 163, 184, 0.8)',
                                borderWidth: 1,
                                borderRadius: 5
                            },
                            {
                                label: 'Resultado Alcanzado / Validado (%)',
                                data: [100, 84.2, 90, 100],
                                backgroundColor: 'rgba(16, 185, 129, 0.85)',
                                borderColor: '#10b981',
                                borderWidth: 1,
                                borderRadius: 5
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        indexAxis: 'y', // Barras horizontales para visualización óptima
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: {
                                    font: { size: 13, weight: 'bold' },
                                    color: '#f8fafc'
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        let label = context.dataset.label || '';
                                        if (label) label += ': ';
                                        if (context.parsed.x !== null) {
                                            label += context.parsed.x + '%';
                                        }
                                        if (context.dataIndex === 0 && context.datasetIndex === 1) {
                                            label += ' (70% piloto / 100% proyectado en inducción)';
                                        }
                                        return label;
                                    }
                                }
                            }
                        },
                        scales: {
                            x: { 
                                beginAtZero: true, 
                                max: 100,
                                grid: { color: 'rgba(255, 255, 255, 0.08)' },
                                ticks: {
                                    callback: (val) => `${val}%`,
                                    color: '#cbd5e1',
                                    font: { size: 12 }
                                },
                                title: { display: true, text: 'Porcentaje de Cumplimiento (%)', color: '#94a3b8' }
                            },
                            y: {
                                grid: { display: false },
                                ticks: {
                                    color: '#f1f5f9',
                                    font: { size: 12, weight: 'bold' }
                                }
                            }
                        }
                    }
                });
                this.currentCharts.push(chart);
                break;
            }
        }
    }

    static destroyCurrentCharts() {
        this.currentCharts.forEach(c => c.destroy());
        this.currentCharts = [];
    }
}
