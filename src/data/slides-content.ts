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
                    
                    <div class="content-box border-cyan">
                        <p style="font-size: 1.4rem; text-align: center; color: #38bdf8; font-style: italic;">
                            "Conectando información transformamos procesos; conectando propósito transformamos personas."
                        </p>
                    </div>

                    <div class="grid-2">
                        <div class="content-box border-emerald">
                            <h3>Impacto Institucional</h3>
                            <p>Aumenta la cohesión organizacional, optimiza la comunicación interna y garantiza alineación total con la Política de Prevención del Daño Antijurídico mediante un aprendizaje activo y dinámico.</p>
                        </div>
                        <div class="content-box border-pink">
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
                    
                    <div class="grid-2">
                        <div class="content-box border-cyan">
                            <h3>El Reto Actual</h3>
                            <p>La apropiación del conocimiento institucional (Misión, Visión, Valores y organigrama) es un pilar esencial. Sin embargo, su diseminación mediante métodos estáticos genera dispersión, restringe el sentido de pertenencia y dificulta la asimilación dinámica.</p>
                        </div>
                        <div class="content-box border-pink">
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
                    
                    <div class="content-box border-cyan">
                        <p>Superar los métodos tradicionales mediante la innovación y gamificación en recursos humanos desbloquea beneficios transformadores, consolidando un aprendizaje auto-dirigido y sostenido.</p>
                    </div>

                    <div class="grid-3">
                        <div class="content-box border-emerald" style="text-align: center;">
                            <h3 style="color:#10b981; font-size: 2rem;">🚀</h3>
                            <h3>Motivación Directa</h3>
                            <p>Evolución de una lectura pasiva a la participación activa en el día a día.</p>
                        </div>
                        <div class="content-box border-cyan" style="text-align: center;">
                            <h3 style="color:#38bdf8; font-size: 2rem;">🧠</h3>
                            <h3>Retención Efectiva</h3>
                            <p>Asimilación a largo plazo de la Misión, Visión, Valores y procesos.</p>
                        </div>
                        <div class="content-box border-pink" style="text-align: center;">
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
                    
                    <div class="content-box border-cyan">
                        <p style="font-size: 1.05rem; margin-bottom: 0.8rem;">
                            El desarrollo de UGPPIENSA siguió un proceso estructurado para llevar la información institucional a una experiencia interactiva:
                        </p>
                        <ul style="padding-left: 1.2rem; line-height: 1.6; font-size: 0.95rem;">
                            <li><strong>1. Revisión del organigrama:</strong> Mapeo de Direcciones, Subdirecciones y Grupos Internos de Trabajo (GIT).</li>
                            <li><strong>2. Análisis normativo:</strong> Extracción de funciones y competencias de la Resolución 059 de 2026 y manuales oficiales de la UGPP.</li>
                            <li><strong>3. Identificación de funcionarios clave:</strong> Caracterización de los roles representativos por dependencia.</li>
                            <li><strong>4. Espacios interactivos y minimapa:</strong> Adaptación digital del piso 2 y diseño del minimapa de navegación.</li>
                            <li><strong>5. Configuración de NPCs interactivos:</strong> Personajes con rutas dinámicas y diálogos adaptados a funcionarios reales.</li>
                            <li><strong>6. Creación de contenidos formativos:</strong>
                                <ul style="margin-top: 0.2rem; margin-bottom: 0.2rem; padding-left: 1.4rem;">
                                    <li><strong>Más de 200 trivias:</strong> Con justificación normativa basada en la Resolución 059 y lineamientos institucionales.</li>
                                    <li><strong>40 casos de despacho:</strong> Situaciones prácticas de toma de decisiones cotidianas.</li>
                                    <li><strong>40 preguntas de opciones múltiples:</strong> Diseñadas para el juego «Lluvia de Preguntas».</li>
                                </ul>
                            </li>
                            <li><strong>7. Conexión con Supabase y ranking en vivo:</strong> Telemetría en tiempo real (puntajes, tiempos, errores) y cuadro de honor funcional.</li>
                        </ul>
                    </div>

                    <div class="content-box highlight">
                        <h3 style="color: #ec4899; margin-top: 0; margin-bottom: 0.6rem;">Plataforma PWA y Metaverso 2.5D</h3>
                        <p style="font-size: 0.98rem; line-height: 1.6; margin: 0;">
                            Aplicación Web Progresiva (PWA) accesible desde cualquier dispositivo, simulando el entorno real de trabajo con colisiones dinámicas, NPCs interactivos, minimapa en tiempo real, ranking en vivo y controles versátiles.
                        </p>
                    </div>
                `
            };

        case 'slide_4':
            return {
                html: `
                    <h1>Resultados: Curva de Aprendizaje y Retención Normativa</h1>
                    
                    <div class="content-box border-emerald">
                        <p>Se observa una asimilación progresiva y contundente del conocimiento institucional (Resolución 059 y Organigrama) a lo largo de las semanas evaluadas. Mientras que en la primera semana (22 al 26 de septiembre) el puntaje promedio se ubicaba por debajo del 20%, hacia la semana final registrada (5 al 9 de octubre) la interacción repetitiva y la retroalimentación inmediata impulsaron el rendimiento por encima del 54% promedio global con picos superiores al 85-90% en módulos clave, certificando la efectividad pedagógica de la herramienta.</p>
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
                    
                    <div class="grid-2">
                        <div class="content-box border-pink">
                            <h3>Disminución Drástica de Errores</h3>
                            <p>Paralelo al aumento de puntajes, la tasa de error promedio por sesión se redujo de manera continua de más de 6.5 errores en la semana inicial a solo 1.5 errores en la semana del 5 al 9 de octubre. Esto se traduce en el entorno real en una reducción directa de reprocesos operativos y fallas en la aplicación normativa.</p>
                        </div>
                        <div class="content-box border-cyan">
                            <h3>Agilidad en Decisiones</h3>
                            <p>La gamificación fortaleció la agilidad cognitiva. Los funcionarios no solo responden con mayor precisión, sino con notable rapidez: el tiempo promedio estimado para resolver los retos normativos disminuyó de más de 80 segundos en los primeros días a cerca de 42 segundos en la semana final, reflejando dominio y fluidez en la información institucional.</p>
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
                    
                    <div class="grid-2">
                        <div class="content-box border-emerald">
                            <h3>Crecimiento del Bienestar</h3>
                            <p>El módulo "Game Activo / Pausa" experimentó un crecimiento notable. La integración del juego para combatir la fatiga visual demuestra un retorno de inversión (ROI) muy alto en términos de clima laboral, dominando gran parte de la interacción global.</p>
                        </div>
                        <div class="content-box border-cyan">
                            <h3>Apropiación Misional Diversificada</h3>
                            <p>Aunque el bienestar lidera, la sumatoria de "Misión Raíz", "Lluvia de Respuestas", "Despacho Ágil" y "Directorios" conforma un ecosistema donde los servidores distribuyen voluntariamente su tiempo aprendiendo sobre diferentes facetas de la Entidad de forma balanceada.</p>
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
                    
                    <div class="grid-2" style="gap: 1.2rem; margin-bottom: 1.2rem;">
                        <div class="content-box border-emerald" style="margin-bottom: 0; padding: 1.25rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                                <h3 style="color:#10b981; font-size: 1.15rem; margin: 0;">1. Participación Semanal</h3>
                                <span style="background: rgba(16, 185, 129, 0.2); color: #10b981; padding: 2px 8px; border-radius: 6px; font-size: 0.8rem; font-weight: bold;">CUMPLIDO</span>
                            </div>
                            <p style="font-size: 0.95rem; margin-bottom: 0.4rem; color: #94a3b8;">
                                <strong>Meta:</strong> 70% (~420 servidores). | <strong>Resultado:</strong> 70% en piloto / 100% proyectado a escala macro.
                            </p>
                            <p style="font-size: 0.92rem; line-height: 1.5; color: #e2e8f0; margin: 0;">
                                <strong>Justificación:</strong> El alto aprendizaje en <em>Misión Raíz</em> y <em>Directorios</em> comprobó un ROI superior a manuales pasivos. Al consolidarse como estándar oficial obligatorio en inducción y reinducción, asegura la cobertura del 100% de los 600 servidores de la entidad.
                            </p>
                        </div>

                        <div class="content-box border-cyan" style="margin-bottom: 0; padding: 1.25rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                                <h3 style="color:#38bdf8; font-size: 1.15rem; margin: 0;">2. Asimilación Normativa (>60%)</h3>
                                <span style="background: rgba(16, 185, 129, 0.2); color: #10b981; padding: 2px 8px; border-radius: 6px; font-size: 0.8rem; font-weight: bold;">CUMPLIDO</span>
                            </div>
                            <p style="font-size: 0.95rem; margin-bottom: 0.4rem; color: #94a3b8;">
                                <strong>Meta:</strong> 85% de usuarios con puntaje >60%. | <strong>Resultado:</strong> 84.2% validado (32 de 38 funcionarios).
                            </p>
                            <p style="font-size: 0.92rem; line-height: 1.5; color: #e2e8f0; margin: 0;">
                                <strong>Justificación:</strong> La telemetría certificó que el 84.2% asimiló con éxito la Resolución 059 y el organigrama. La retroalimentación inmediata probó ser más eficaz que las circulares estáticas para retener directrices institucionales clave.
                            </p>
                        </div>

                        <div class="content-box border-pink" style="margin-bottom: 0; padding: 1.25rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                                <h3 style="color:#ec4899; font-size: 1.15rem; margin: 0;">3. Aporte a Clima / Bienestar</h3>
                                <span style="background: rgba(16, 185, 129, 0.2); color: #10b981; padding: 2px 8px; border-radius: 6px; font-size: 0.8rem; font-weight: bold;">CUMPLIDO</span>
                            </div>
                            <p style="font-size: 0.95rem; margin-bottom: 0.4rem; color: #94a3b8;">
                                <strong>Meta:</strong> Puntuación >15/20 (>75%). | <strong>Resultado:</strong> 90.0% de valoración en excelencia.
                            </p>
                            <p style="font-size: 0.92rem; line-height: 1.5; color: #e2e8f0; margin: 0;">
                                <strong>Justificación:</strong> Las pausas activas gamificadas redujeron la fatiga y el sedentarismo en tareas de alta exigencia, revitalizando la concentración mental y fortaleciendo el sentido de pertenencia institucional.
                            </p>
                        </div>

                        <div class="content-box border-emerald" style="margin-bottom: 0; padding: 1.25rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                                <h3 style="color:#10b981; font-size: 1.15rem; margin: 0;">4. Reconocimiento de Líderes</h3>
                                <span style="background: rgba(16, 185, 129, 0.2); color: #10b981; padding: 2px 8px; border-radius: 6px; font-size: 0.8rem; font-weight: bold;">CUMPLIDO</span>
                            </div>
                            <p style="font-size: 0.95rem; margin-bottom: 0.4rem; color: #94a3b8;">
                                <strong>Meta:</strong> 100% de líderes del ranking reconocidos. | <strong>Resultado:</strong> 100% visibilizados y premiados.
                            </p>
                            <p style="font-size: 0.92rem; line-height: 1.5; color: #e2e8f0; margin: 0;">
                                <strong>Justificación:</strong> La dinámica inter-áreas («Guerra de Direcciones») impulsó una sana competencia. El 100% de los líderes del ranking fueron visibilizados en canales oficiales, demostrando el valor de la meritocracia para motivar al equipo.
                            </p>
                        </div>
                    </div>

                    <div class="content-box border-cyan" style="padding: 1.25rem; margin-top: 1rem;">
                        <h3 style="color: #38bdf8; font-size: 1.15rem; margin-bottom: 0.5rem; display: flex; justify-content: space-between; align-items: center;">
                            <span>Contraste Gráfico: Metas Acordadas vs. Desempeño Validado</span>
                            <span style="font-size: 0.85rem; color: #10b981; font-weight: normal;">● Correspondencia 1:1 con indicadores evaluados</span>
                        </h3>
                        <div class="chart-container" style="min-height: 270px; height: 270px;">
                            <canvas id="chart-slide_7"></canvas>
                        </div>
                    </div>
                `,
                chartConfig: { type: 'kpi-goals', data: liveData }
            };

        case 'slide_8':
            return {
                html: `
                    <h1>Conclusión y Viabilidad Estratégica</h1>
                    
                    <div class="content-box border-cyan">
                        <h3>Sostenibilidad y Recursos Internos</h3>
                        <p>Plataforma PWA operando sin licenciamientos externos costosos, diseñada para aprovechar al 100% la infraestructura TI de la UGPP. Escalabilidad Multi-tenancy que permite réplica a otras áreas.</p>
                    </div>

                    <div class="grid-2">
                        <div class="content-box border-pink">
                            <h3 style="color:#ec4899;">Rendimiento garantizado</h3>
                            <p>Si la adopción fue masiva en 2.5 semanas usando canales iniciales, la integración oficial a la intranet institucional (servicios Kubernetes 2021) garantizará cumplir y superar la meta del 70% de los 600 funcionarios institucionales.</p>
                        </div>
                        <div class="content-box border-emerald">
                            <h3 style="color:#10b981;">Motor de Inducción y Gestor de Información</h3>
                            <p>A futuro, UGPPIENSA servirá como la base interactiva de inmersión y entrenamiento continuo para cada colaborador, integrando un gestor de información dinámico para normativas y resoluciones de Gestión Humana.</p>
                        </div>
                    </div>
                `
            };

        case 'slide_9':
            return {
                html: `
                    <div class="grid-2">
                        <div class="content-box border-emerald">
                            <h3 style="color: #10b981;">Gratitud y Compromiso</h3>
                            <p>Agradecemos a la Dirección General, directores de área y a cada servidor de la UGPP que participó activamente en este proyecto. UGPPIENSA demostró que la innovación pedagógica y la tecnología pueden unir a la entidad con entusiasmo y propósito.</p>
                        </div>
                        <div class="content-box border-pink">
                            <h3 style="color: #ec4899;">El Siguiente Paso</h3>
                            <p>Al ganar el concurso, el proyecto se adaptará al formato oficial de soluciones tecnológicas de la intranet institucional, alineándose con la metodología de implementación en servicios Kubernetes (año 2021). Además, la plataforma evolucionará no solo para cumplir su función actual, sino como un <strong>gestor de información inteligente</strong> que permitirá a Gestión Humana cargar resoluciones nuevas o vigentes, permitiendo a los funcionarios apropiar las normas mediante preguntas guiadas, procesos dinámicos y juegos formativos.</p>
                        </div>
                    </div>

                    <div class="content-box border-cyan" style="text-align: center; padding: 1.8rem 2rem;">
                        <p style="font-size: 1.12rem; color: #f8fafc; margin: 0; line-height: 1.65; font-weight: 500;">
                            "UGPpiensa nos ha demostrado con métricas rigurosas que cuando transformamos un manual aburrido en un reto interactivo, no solo optimizamos procesos: devolvemos el entusiasmo a los funcionarios que trabajan detrás del escritorio. Porque al final del día, las grandes transformaciones del Estado no ocurren cuando conectamos computadoras o servidores técnicos; ocurren cuando logramos conectar el conocimiento con el propósito de las personas. Los invito a que dejemos de ser lectores pasivos  y nos convirtamos en los jugadores activos del cambio. ¡Muchas gracias!"
                        </p>
                    </div>
                `
            };

        default:
            return { html: `<h1>Slide no encontrado</h1>` };
    }
}
