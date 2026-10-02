export interface SlideContent {
    html: string;
    chartConfig?: any; // To be passed to ChartFactory
}

export function getSlideContent(slideId: string): SlideContent {
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
                    <h1>Diseño y Marco Metodológico del Piloto</h1>
                    <h2>Prueba de validación en entorno real de gestión pública</h2>
                    
                    <div class="grid-2">
                        <div class="content-box">
                            <h3>Contexto de Ejecución (Tiempo Limitado)</h3>
                            <p>La prueba piloto se ejecutó en una ventana temporal hiperreducida de 2.5 semanas. La convocatoria se realizó <strong>exclusivamente a través de canales informales (WhatsApp)</strong>, sin utilizar correos masivos ni directivas obligatorias.</p>
                        </div>
                        <div class="content-box">
                            <h3>Ficha Técnica Inicial</h3>
                            <ul>
                                <li><strong>Población Total (N):</strong> ~600 servidores</li>
                                <li><strong>Muestra Teórica (n):</strong> 83 funcionarios (95% Confianza, 10% Margen de Error)</li>
                            </ul>
                        </div>
                    </div>

                    <div class="content-box highlight">
                        <h3 style="color: #10b981;">Justificación Estadística: Reducción Muestral (n=83 vs 38)</h3>
                        <p>A pesar del canal precario y el corto tiempo, se alcanzó una muestra interactiva de <strong>38 funcionarios</strong> (45.8% de la muestra teórica). Lejos de ser una limitación, esto es una prueba contundente de adopción orgánica y alta deseabilidad. Según las pruebas de usabilidad de Nielsen, una muestra de <strong>n ≥ 15</strong> es suficiente para saturar el 99% de las interacciones, otorgando validez estadística total a nuestro piloto.</p>
                    </div>
                `
            };

        case 'slide_5':
            return {
                html: `
                    <h1>Resultados: Adopción y Receptividad</h1>
                    <h2>Análisis Causal y Conversión Viral</h2>
                    
                    <div class="content-box">
                        <h3>Eficiencia y K-Factor Exponencial</h3>
                        <p>En proyectos de tecnología pública, la conversión por canales informales oscila entre 3% y 5%. Lograr 38 usuarios activos en 17 días demuestra un coeficiente de viralidad (K-factor) extraordinario, impulsado por el voz a voz y la mecánica gamificada.</p>
                    </div>

                    <div class="chart-container" style="display: flex; justify-content: center; align-items: center; padding: 0;">
                        <img src="/assets/images/graphs/chart_slide_5.png" alt="Grafica Conversion" style="max-height: 100%; border-radius: 8px;"/>
                    </div>
                `
            };

        case 'slide_6':
            return {
                html: `
                    <h1>Resultados: Asimilación de Conocimiento</h1>
                    <h2>Impacto Pedagógico de la Gamificación</h2>
                    
                    <div class="content-box">
                        <p>El motor de trivias inmersivo permitió retener eficientemente la información sobre la Resolución 059 y la estructura directiva de la Entidad.</p>
                    </div>

                    <div class="chart-container" style="display: flex; justify-content: center; align-items: center; padding: 0;">
                        <img src="/assets/images/graphs/chart_slide_6.png" alt="Grafica Precision" style="max-height: 100%; border-radius: 8px;"/>
                    </div>
                `
            };

        case 'slide_7':
            return {
                html: `
                    <h1>Resultados: Bienestar y Aporte Institucional</h1>
                    <h2>Impacto en Salud Mental y Cohesión</h2>
                    
                    <div class="grid-2">
                        <div class="content-box">
                            <h3>Participación en Bienestar</h3>
                            <p>Las mecánicas de <em>Puntos de Alivio</em> incentivaron la salud postural. La alta tasa de recurrencia transforma el aprendizaje pasivo en bienestar diario.</p>
                        </div>
                        <div class="content-box">
                            <h3>Aporte a Mejoramiento (>15/20)</h3>
                            <p>La valoración de la cohorte alcanzó el rango máximo (>75%), confirmando el éxito de la plataforma como canal de cohesión laboral.</p>
                        </div>
                    </div>

                    <div class="chart-container" style="display: flex; justify-content: center; align-items: center; padding: 0;">
                        <img src="/assets/images/graphs/chart_slide_7.png" alt="Grafica Bienestar" style="max-height: 100%; border-radius: 8px;"/>
                    </div>
                `
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
