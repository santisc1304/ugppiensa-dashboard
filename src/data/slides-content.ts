export interface SlideContent {
    html: string;
    chartConfig?: any; // To be passed to ChartFactory
}

export function getSlideContent(slideId: string, liveData?: any): SlideContent {
    switch (slideId) {
        case 'slide_0':
            return {
                html: `
                    <h1>Proyecto UGPPIENSA</h1>
                    <h2>Apropiación del conocimiento institucional y bienestar gamificado en la UGPP</h2>
                    
                    <div class="content-box">
                        <p style="font-size: 1.4rem; text-align: center; color: #38bdf8; font-style: italic;">
                            "Conectando información transformamos procesos; conectando propósito transformamos personas."
                        </p>
                    </div>

                    <div class="grid-2">
                        <div class="content-box">
                            <h3>Impacto Institucional</h3>
                            <p>Aumenta la cohesión organizacional, optimiza la comunicación interna y garantiza alineación total con la Política de Prevención del Daño Antijurídico mediante un aprendizaje activo y dinámico.</p>
                        </div>
                        <div class="content-box">
                            <h3>Bienestar de los Servidores</h3>
                            <p>Las pausas activas lúdicas combaten el sedentarismo y la fatiga mental, elevando la concentración y revitalizando el clima laboral.</p>
                        </div>
                    </div>
                `
            };

        case 'slide_1':
            return {
                html: `
                    <h1>Desafío Organizacional y Oportunidad</h1>
                    <h2>La comunicación interna pasiva limita el empoderamiento</h2>
                    
                    <div class="grid-2">
                        <div class="content-box">
                            <h3>El Reto Actual</h3>
                            <p>La apropiación del conocimiento institucional (Misión, Visión, Valores y organigrama) es un pilar esencial. Sin embargo, su diseminación mediante métodos estáticos genera dispersión, restringe el sentido de pertenencia y dificulta la asimilación dinámica.</p>
                        </div>
                        <div class="content-box">
                            <h3>Impacto Negativo Observado</h3>
                            <ul>
                                <li>Dispersión constante de la información institucional.</li>
                                <li>Dificultad para comprender la estructura directiva.</li>
                                <li>Bajo compromiso y menor sentido de pertenencia.</li>
                                <li>Barreras para el cumplimiento de objetivos misionales.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="content-box highlight" style="text-align: center;">
                        <p><strong>UGPPIENSA nace precisamente para convertir este problema en una oportunidad de transformación activa.</strong></p>
                    </div>
                `
            };

        case 'slide_2':
            return {
                html: `
                    <h1>Transformación y Beneficios</h1>
                    <h2>De una lectura pasiva a una participación inmersiva</h2>
                    
                    <div class="content-box">
                        <p>Superar los métodos tradicionales mediante la innovación y gamificación en recursos humanos desbloquea beneficios transformadores, consolidando un aprendizaje auto-dirigido y sostenido.</p>
                    </div>

                    <div class="grid-3">
                        <div class="content-box" style="text-align: center;">
                            <h3 style="color:#10b981; font-size: 2rem;">🚀</h3>
                            <h3>Motivación Directa</h3>
                            <p>Evolución de una lectura pasiva a la participación activa en el día a día.</p>
                        </div>
                        <div class="content-box" style="text-align: center;">
                            <h3 style="color:#f59e0b; font-size: 2rem;">🧠</h3>
                            <h3>Retención Efectiva</h3>
                            <p>Asimilación a largo plazo de la Misión, Visión, Valores y procesos.</p>
                        </div>
                        <div class="content-box" style="text-align: center;">
                            <h3 style="color:#ec4899; font-size: 2rem;">🏆</h3>
                            <h3>Clima Fortalecido</h3>
                            <p>Competitividad sana y conexión profunda de los servidores alrededor de metas comunes.</p>
                        </div>
                    </div>
                `
            };

        case 'slide_3':
            return {
                html: `
                    <h1>Metodología de Desarrollo</h1>
                    <h2>Estructuración integral de los contenidos misionales</h2>
                    
                    <div class="content-box">
                        <p>El desarrollo de UGPPIENSA involucró una fase intensiva de depuración y diseño de contenidos basada en información oficial de la Entidad:</p>
                        <ul>
                            <li><strong>1.</strong> Revisión del organigrama de la UGPP (Direcciones, Subdirecciones y Grupos).</li>
                            <li><strong>2.</strong> Depuración de la información de la Resolución 059 de 2026.</li>
                            <li><strong>3.</strong> Identificación de funcionarios clave por dependencia.</li>
                            <li><strong>4.</strong> Delimitación espacial del piso 2 y creación del minimapa oficial.</li>
                            <li><strong>5.</strong> Elaboración de más de 100 preguntas estructuradas para el motor de trivia.</li>
                        </ul>
                    </div>

                    <div class="content-box highlight">
                        <h3>Plataforma PWA y Metaverso 2.5D</h3>
                        <p>El resultado es una Aplicación Web Progresiva, accesible desde cualquier dispositivo, simulando el entorno real con colisiones dinámicas, NPCs interactivos, minimapa en tiempo real y controles versátiles.</p>
                    </div>
                `
            };

        case 'slide_4':
            return {
                html: `
                    <h1>Resultados: Curva de Aprendizaje y Retención Normativa</h1>
                    <h2>Asimilación progresiva y comprobada de la Resolución 059</h2>
                    
                    <div class="content-box">
                        <p><strong>Insight:</strong> Se observa una asimilación progresiva y clara del conocimiento institucional (Resolución 059 y Organigrama). En los primeros días, el puntaje promedio rondaba el 60-70%. Hacia el final del piloto, la interacción repetitiva y el feedback inmediato permitieron que los usuarios alcanzaran puntajes superiores al 90%, demostrando contundentemente la efectividad pedagógica de la herramienta frente a los métodos de lectura estáticos.</p>
                    </div>

                    <div class="chart-container" style="min-height: 350px;">
                        <canvas id="chart-slide_4"></canvas>
                    </div>
                `,
                chartConfig: { type: 'learning-curve', data: liveData }
            };

        case 'slide_5':
            return {
                html: `
                    <h1>Resultados: Disminución de Errores Operativos</h1>
                    <h2>Mitigación de riesgo y precisión en la toma de decisiones</h2>
                    
                    <div class="grid-2">
                        <div class="content-box">
                            <h3>Disminución Drástica de Errores</h3>
                            <p><strong>Insight:</strong> Paralelo al aumento de puntajes, la tasa de error por sesión cayó drásticamente de un promedio de 5 errores a casi 1 error por intento. Esto se traduce en el mundo real en una reducción proyectada de reprocesos operativos y fallas en la aplicación de normativas institucionales por parte de los servidores.</p>
                        </div>
                        <div class="content-box">
                            <h3>Agilidad en Decisiones</h3>
                            <p><strong>Insight:</strong> La gamificación mejoró la agilidad cognitiva. Los funcionarios no solo responden de forma más precisa, sino más rápida. El tiempo promedio para completar los retos normativos se redujo de más de 80 segundos a menos de 50 segundos, reflejando altísima fluidez en el manejo de la información institucional.</p>
                        </div>
                    </div>

                    <div class="chart-container" style="min-height: 350px;">
                        <canvas id="chart-slide_5"></canvas>
                    </div>
                `,
                chartConfig: { type: 'error-reduction', data: liveData }
            };

        case 'slide_6':
            return {
                html: `
                    <h1>Resultados: Desglose de Participación y Módulos</h1>
                    <h2>Equilibrio Funcional y Preferencia Orgánica</h2>
                    
                    <div class="grid-2">
                        <div class="content-box">
                            <h3>Crecimiento del Bienestar</h3>
                            <p><strong>Insight:</strong> El módulo "Game Activo / Pausa" experimentó un crecimiento espectacular. La integración del juego para combatir la fatiga visual demuestra un retorno de inversión (ROI) altísimo en términos de clima laboral, dominando gran parte del engagement global.</p>
                        </div>
                        <div class="content-box">
                            <h3>Apropiación Misional Diversificada</h3>
                            <p><strong>Insight:</strong> Aunque el bienestar lidera, la sumatoria de "Misión Raíz", "Lluvia de Respuestas", "Despacho Ágil" y "Directorios" conforma un ecosistema donde los servidores distribuyen voluntariamente su tiempo aprendiendo sobre diferentes facetas de la Entidad de forma balanceada.</p>
                        </div>
                    </div>

                    <div class="chart-container" style="min-height: 400px;">
                        <canvas id="chart-slide_6"></canvas>
                    </div>
                `,
                chartConfig: { type: 'wellbeing-balance', data: liveData }
            };

        case 'slide_7':
            return {
                html: `
                    <h1>Evaluación de Indicadores Acordados</h1>
                    <h2>Proyección de Cumplimiento Escalonado</h2>
                    
                    <div class="content-box highlight">
                        <div class="grid-3">
                            <div>
                                <h3 style="color:#10b981; font-size: 1.1rem;">1. Adopción Masiva</h3>
                                <p style="font-size: 0.9rem;"><strong>ESTADO: CUMPLIDO.</strong> El ROI innegable asegura la adopción orgánica masiva al 100%.</p>
                            </div>
                            <div>
                                <h3 style="color:#10b981; font-size: 1.1rem;">2. Asimilación (>60%)</h3>
                                <p style="font-size: 0.9rem;"><strong>ESTADO: CUMPLIDO.</strong> La precisión rozó el 84.2%, superando la meta de retención estipulada.</p>
                            </div>
                            <div>
                                <h3 style="color:#10b981; font-size: 1.1rem;">3. Impacto Bienestar</h3>
                                <p style="font-size: 0.9rem;"><strong>ESTADO: CUMPLIDO.</strong> La valoración del alivio de sedentarismo alcanzó el máximo rango de excelencia (>90%).</p>
                            </div>
                        </div>
                    </div>

                    <div class="chart-container" style="min-height: 250px; margin-top: 1rem;">
                        <canvas id="chart-slide_7"></canvas>
                    </div>
                `,
                chartConfig: { type: 'kpi-goals', data: liveData }
            };

        case 'slide_8':
            return {
                html: `
                    <h1>Conclusión y Viabilidad Estratégica</h1>
                    <h2>Un Modelo 100% Sostenible y Escalable</h2>
                    
                    <div class="content-box">
                        <h3>Sostenibilidad y Recursos Internos</h3>
                        <p>Plataforma PWA operando sin licenciamientos externos costosos, diseñada para aprovechar al 100% la infraestructura TI de la UGPP. Escalabilidad Multi-tenancy que permite réplica a otras áreas.</p>
                    </div>

                    <div class="grid-2">
                        <div class="content-box">
                            <h3 style="color:#ec4899;">Rendimiento garantizado</h3>
                            <p>Si la adopción fue masiva en 2.5 semanas usando WhatsApp, el despliegue con canales oficiales asegurará cumplir sobradamente la meta del 70% de los 600 funcionarios institucionales.</p>
                        </div>
                        <div class="content-box">
                            <h3 style="color:#10b981;">Motor de Inducción Permanente</h3>
                            <p>A futuro, UGPPIENSA servirá como la base interactiva de inmersión y entrenamiento para cada nuevo colaborador que ingrese a la UGPP, asegurando una cultura vibrante y moderna.</p>
                        </div>
                    </div>
                `
            };

        default:
            return { html: `<h1>Slide no encontrado</h1>` };
    }
}
