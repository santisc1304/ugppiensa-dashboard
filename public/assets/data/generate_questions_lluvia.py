# -*- coding: utf-8 -*-
"""
Script para generar questions_lluvia.json con 40 preguntas temáticas de la UGPP.
Cada pregunta posee al menos 3 respuestas correctas (y varias incorrectas/distractoras,
total 6-8 opciones por pregunta), ideal para la mecánica de lluvia de círculos flotantes.
"""
import json
import os

questions = [
    # 1. Dirección Jurídica - General
    {
        "id": 1,
        "question": "¿Cuáles de las siguientes son funciones y responsabilidades de la Dirección Jurídica?",
        "allOptions": [
            {"text": "Representar judicialmente a la entidad", "correct": True},
            {"text": "Unificar criterios jurídicos institucionales", "correct": True},
            {"text": "Atender comités de conciliación y defensa", "correct": True},
            {"text": "Coordinar acciones de lesividad", "correct": True},
            {"text": "Liquidar la nómina de pensionados del FOPEP", "correct": False},
            {"text": "Administrar los inventarios y parque automotor", "correct": False},
            {"text": "Expedir el plan anual de adquisiciones", "correct": False}
        ]
    },
    # 2. Subdirección de Defensa Judicial Pensional
    {
        "id": 2,
        "question": "¿Qué trámites y procesos gestiona la Subdirección de Defensa Judicial Pensional?",
        "allOptions": [
            {"text": "Representación en acciones de tutela pensionales", "correct": True},
            {"text": "Defensa en demandas ordinarias pensionales", "correct": True},
            {"text": "Interposición de denuncias penales por fraude", "correct": True},
            {"text": "Atención a procesos ejecutivos pensionales", "correct": True},
            {"text": "Diseño de modelos econométricos de evasión", "correct": False},
            {"text": "Cobro coactivo de parafiscales en mora", "correct": False},
            {"text": "Gestión de la mesa de ayuda tecnológica", "correct": False}
        ]
    },
    # 3. Subdirección de Asesoría y Conceptualización Pensional
    {
        "id": 3,
        "question": "¿Qué actividades corresponden a la Subdirección de Asesoría y Conceptualización Pensional?",
        "allOptions": [
            {"text": "Emitir conceptos jurídicos pensionales", "correct": True},
            {"text": "Diseñar políticas de prevención del daño antijurídico", "correct": True},
            {"text": "Unificar doctrina y criterios de defensa judicial", "correct": True},
            {"text": "Sustanciar audiencias de conciliación y repetición", "correct": True},
            {"text": "Custodiar los archivos físicos en bodegas", "correct": False},
            {"text": "Liquidar viáticos y salarios de servidores", "correct": False},
            {"text": "Desarrollar código fuente de nuevos sistemas", "correct": False}
        ]
    },
    # 4. Subdirección Jurídica de Parafiscales
    {
        "id": 4,
        "question": "¿Cuáles de las siguientes labores corresponden a la Subdirección Jurídica de Parafiscales?",
        "allOptions": [
            {"text": "Resolver recursos de reconsideración parafiscales", "correct": True},
            {"text": "Representación judicial en demandas contra liquidaciones oficiales", "correct": True},
            {"text": "Emitir conceptos sobre normas del sistema de seguridad social", "correct": True},
            {"text": "Atender solicitudes sobre beneficios tributarios", "correct": True},
            {"text": "Revisar expedientes de cesantías docentes", "correct": False},
            {"text": "Administrar el servidor de correo institucional", "correct": False},
            {"text": "Realizar la compra de suministros de papelería", "correct": False}
        ]
    },
    # 5. Dirección de Parafiscales - General
    {
        "id": 5,
        "question": "¿Qué objetivos estratégicos persigue la Dirección de Parafiscales?",
        "allOptions": [
            {"text": "Fomentar la cultura de pago oportuno de aportes", "correct": True},
            {"text": "Detectar conductas de omisión, inexactitud y mora", "correct": True},
            {"text": "Determinar oficialmente las obligaciones de la protección social", "correct": True},
            {"text": "Controlar términos de recursos y facilidades de pago", "correct": True},
            {"text": "Reconocer pensiones de sobrevivientes a huérfanos", "correct": False},
            {"text": "Gestionar el ciclo laboral de los funcionarios", "correct": False},
            {"text": "Publicar comunicados de prensa en medios masivos", "correct": False}
        ]
    },
    # 6. Subdirección de Determinación de Obligaciones
    {
        "id": 6,
        "question": "¿Qué actos y etapas lidera la Subdirección de Determinación de Obligaciones?",
        "allOptions": [
            {"text": "Expedición de Requerimientos para Declarar o Corregir", "correct": True},
            {"text": "Expedición de Pliegos de Cargos y Resoluciones Sancionatorias", "correct": True},
            {"text": "Expedición de Liquidaciones Oficiales", "correct": True},
            {"text": "Verificación de completitud probatoria en fiscalización", "correct": True},
            {"text": "Inclusión de pensionados en nómina mensual", "correct": False},
            {"text": "Administración del presupuesto nacional asignado", "correct": False},
            {"text": "Calificación de origen de pérdida de capacidad laboral", "correct": False}
        ]
    },
    # 7. Subdirección de Integración del Sistema de Aportes Parafiscales
    {
        "id": 7,
        "question": "¿Qué funciones corresponden a la Subdirección de Integración de Aportes Parafiscales?",
        "allOptions": [
            {"text": "Tramitar denuncias ciudadanas por evasión", "correct": True},
            {"text": "Administrar inventarios de bases de datos y cruces PILA", "correct": True},
            {"text": "Ejecutar campañas de comunicaciones persuasivas", "correct": True},
            {"text": "Supervisar estándares de cobro de administradoras", "correct": True},
            {"text": "Elaborar la liquidación de sentencias judiciales pensionales", "correct": False},
            {"text": "Realizar mantenimiento locativo a las oficinas", "correct": False},
            {"text": "Emitir la nómina de viáticos de auditoría", "correct": False}
        ]
    },
    # 8. Subdirección de Cobranzas
    {
        "id": 8,
        "question": "¿Qué actuaciones son propias de la Subdirección de Cobranzas?",
        "allOptions": [
            {"text": "Orientación al deudor y acuerdos de pago", "correct": True},
            {"text": "Decreto de medidas cautelares y embargos bancarios", "correct": True},
            {"text": "Verificación y validación de pagos e intereses", "correct": True},
            {"text": "Intervención en procesos de insolvencia y liquidación", "correct": True},
            {"text": "Estudio de historias laborales pensionales", "correct": False},
            {"text": "Gestión del plan institucional de capacitación", "correct": False},
            {"text": "Administración del conmutador telefónico central", "correct": False}
        ]
    },
    # 9. Dirección de Pensiones - General
    {
        "id": 9,
        "question": "¿Cuáles son responsabilidades de la Dirección de Pensiones de la UGPP?",
        "allOptions": [
            {"text": "Reconocer derechos pensionales en el régimen de prima media", "correct": True},
            {"text": "Resolver recursos de apelación en segunda instancia pensional", "correct": True},
            {"text": "Gestionar la nómina de pensionados y novedades al FOPEP", "correct": True},
            {"text": "Normalizar y custodiar expedientes pensionales transferidos", "correct": True},
            {"text": "Fiscalizar a empresas que no pagan aportes parafiscales", "correct": False},
            {"text": "Elaborar contratos de vigilancia y aseo", "correct": False},
            {"text": "Definir las políticas de ciberseguridad en servidores", "correct": False}
        ]
    },
    # 10. Subdirección de Determinación de Derechos Pensionales
    {
        "id": 10,
        "question": "¿Qué actividades se ejecutan en la Subdirección de Determinación de Derechos Pensionales?",
        "allOptions": [
            {"text": "Sustanciación de solicitudes de reconocimiento pensional", "correct": True},
            {"text": "Revisión y control previo de legalidad de proyectos de fallo", "correct": True},
            {"text": "Cumplimiento de sentencias judiciales pensionales", "correct": True},
            {"text": "Análisis de tiempos cotizados e historia laboral", "correct": True},
            {"text": "Embargo de cuentas bancarias a morosos de aportes", "correct": False},
            {"text": "Capacitación a empleadores sobre el uso de PILA", "correct": False},
            {"text": "Elaboración de estados financieros para Contaduría", "correct": False}
        ]
    },
    # 11. Subdirección de Nómina de Pensionados
    {
        "id": 11,
        "question": "¿Qué tareas lidera la Subdirección de Nómina de Pensionados?",
        "allOptions": [
            {"text": "Liquidación y reporte mensual de novedades de nómina", "correct": True},
            {"text": "Validación de incorporaciones y sustituciones pensionales", "correct": True},
            {"text": "Cobro persuasivo y liquidación de cuotas partes pensionales", "correct": True},
            {"text": "Gestión de devoluciones de aportes y descuentos autorizados", "correct": True},
            {"text": "Investigación administrativa por inexactitud contable", "correct": False},
            {"text": "Administración del software de gestión documental", "correct": False},
            {"text": "Contratación de seguros de vida para funcionarios", "correct": False}
        ]
    },
    # 12. Subdirección de Gestión Humana
    {
        "id": 12,
        "question": "¿Cuáles son áreas de gestión de la Subdirección de Gestión Humana?",
        "allOptions": [
            {"text": "Selección, posesión y ciclo laboral de funcionarios", "correct": True},
            {"text": "Liquidación de nómina de servidores públicos de la entidad", "correct": True},
            {"text": "Programas de bienestar social, salud en el trabajo e incentivos", "correct": True},
            {"text": "Evaluación del desempeño laboral institucional", "correct": True},
            {"text": "Cobro de multas parafiscales a empresas sancionadas", "correct": False},
            {"text": "Atención presencial a ciudadanos sobre trámites pensionales", "correct": False},
            {"text": "Auditoría de ciberseguridad a las bases de datos", "correct": False}
        ]
    },
    # 13. Subdirección Financiera
    {
        "id": 13,
        "question": "¿Qué competencias corresponden a la Subdirección Financiera de la UGPP?",
        "allOptions": [
            {"text": "Ejecución y registro del presupuesto institucional (SIIF)", "correct": True},
            {"text": "Preparación de estados financieros y balances contables", "correct": True},
            {"text": "Administración del Programa Anual de Caja (PAC) y tesorería", "correct": True},
            {"text": "Cálculo y retención de descuentos tributarios a proveedores", "correct": True},
            {"text": "Defensa de tutelas interpuestas por la ciudadanía", "correct": False},
            {"text": "Diseño de campañas en redes sociales institucionales", "correct": False},
            {"text": "Emisión de autos sancionatorios a empleadores", "correct": False}
        ]
    },
    # 14. Subdirección Administrativa
    {
        "id": 14,
        "question": "¿Qué funciones realiza la Subdirección Administrativa?",
        "allOptions": [
            {"text": "Gestión contractual en etapas pre, contractual y liquidación", "correct": True},
            {"text": "Elaboración de estudios de mercado y sectoriales", "correct": True},
            {"text": "Administración de sedes físicas, inventarios y logística", "correct": True},
            {"text": "Supervisión de servicios de vigilancia, aseo y transporte", "correct": True},
            {"text": "Liquidación de mesadas pensionales de exempleados", "correct": False},
            {"text": "Fiscalización de aportes de trabajadores independientes", "correct": False},
            {"text": "Modelación de algoritmos de inteligencia artificial", "correct": False}
        ]
    },
    # 15. Subdirección de Gestión Documental
    {
        "id": 15,
        "question": "¿Cuáles son tareas fundamentales de la Subdirección de Gestión Documental?",
        "allOptions": [
            {"text": "Radicación y distribución de correspondencia oficial", "correct": True},
            {"text": "Digitalización y virtualización de expedientes físicos", "correct": True},
            {"text": "Custodia y administración de tablas de retención documental", "correct": True},
            {"text": "Atención de solicitudes de préstamo de expedientes de archivo", "correct": True},
            {"text": "Representación jurídica ante juzgados de circuito", "correct": False},
            {"text": "Auditoría de estados contables de aportantes", "correct": False},
            {"text": "Expedición de certificados de paz y salvo tributario", "correct": False}
        ]
    },
    # 16. Dirección de Gestión de Tecnologías de la Información (DTI)
    {
        "id": 16,
        "question": "¿Qué responsabilidades estratégicas lidera la Dirección de TI (DTI)?",
        "allOptions": [
            {"text": "Administración de infraestructura de servidores y redes", "correct": True},
            {"text": "Desarrollo y mantenimiento evolutivo de software institucional", "correct": True},
            {"text": "Atención a usuarios mediante la Mesa de Ayuda de TI", "correct": True},
            {"text": "Definición de lineamientos de arquitectura y datos", "correct": True},
            {"text": "Sustanciación de resoluciones de pensión de sobrevivientes", "correct": False},
            {"text": "Cobro coactivo de cartera morosa parafiscal", "correct": False},
            {"text": "Pago de nómina y prestaciones de funcionarios", "correct": False}
        ]
    },
    # 17. Dirección de Servicios Integrados de Atención (SIA)
    {
        "id": 17,
        "question": "¿Cuáles son los pilares de la Dirección de Servicios Integrados de Atención?",
        "allOptions": [
            {"text": "Gestión integral de canales presenciales, telefónicos y virtuales", "correct": True},
            {"text": "Tramitación y seguimiento a peticiones, quejas y reclamos (PQRSFD)", "correct": True},
            {"text": "Operación de back office para respuestas oportunas a la ciudadanía", "correct": True},
            {"text": "Medición constante de la satisfacción ciudadana con el servicio", "correct": True},
            {"text": "Investigación disciplinaria a empleados de la entidad", "correct": False},
            {"text": "Adelantar embargos preventivos en procesos de cobro", "correct": False},
            {"text": "Liquidación de cuotas partes pensionales entre entidades", "correct": False}
        ]
    },
    # 18. Dirección de Seguimiento y Mejoramiento de Procesos
    {
        "id": 18,
        "question": "¿Qué ámbitos corresponden a la Dirección de Seguimiento y Mejoramiento de Procesos?",
        "allOptions": [
            {"text": "Administración del Sistema de Gestión de Riesgos Institucionales", "correct": True},
            {"text": "Formulación de políticas de Seguridad de la Información", "correct": True},
            {"text": "Monitoreo y optimización continua de procesos institucionales", "correct": True},
            {"text": "Respuesta ante incidentes de ciberseguridad y fugas de datos", "correct": True},
            {"text": "Elaboración de minutas de contratos públicos", "correct": False},
            {"text": "Cálculo del subsidio de nómina a empresas beneficiarias", "correct": False},
            {"text": "Atención presencial en taquillas de orientación al usuario", "correct": False}
        ]
    },
    # 19. Dirección de Estrategia y Evaluación
    {
        "id": 19,
        "question": "¿Qué tareas clave desarrolla la Dirección de Estrategia y Evaluación?",
        "allOptions": [
            {"text": "Diseño del Plan Estratégico Institucional y metas de gestión", "correct": True},
            {"text": "Modelos estadísticos para caracterización y análisis de evasión", "correct": True},
            {"text": "Estrategia de comunicaciones institucionales y relaciones con medios", "correct": True},
            {"text": "Formulación y seguimiento a proyectos de inversión pública", "correct": True},
            {"text": "Tramitación de incidentes de desacato en juzgados", "correct": False},
            {"text": "Inspección contable in situ en sedes de empleadores", "correct": False},
            {"text": "Revisión documental de carpetas pensionales archivadas", "correct": False}
        ]
    },
    # 20. Resolución 0059 de 2026 - Principios y Criterios de GIT
    {
        "id": 20,
        "question": "¿Cuáles son disposiciones oficiales vigentes contenidas en la Resolución 0059 de 2026?",
        "allOptions": [
            {"text": "Integración mínima de cuatro (4) servidores por grupo interno", "correct": True},
            {"text": "Reconocimiento económico mensual del 20% a coordinadores", "correct": True},
            {"text": "Relevo de coordinación si la evaluación es igual o menor a 79% por 6 meses", "correct": True},
            {"text": "Derogatoria expresa de la anterior Resolución 328 de 2024", "correct": True},
            {"text": "Creación obligatoria de juzgados pensionales propios", "correct": False},
            {"text": "Exención de aportes a empresas con menos de 10 trabajadores", "correct": False},
            {"text": "Eliminación de la etapa de cobro coactivo", "correct": False}
        ]
    },
    # 21. Cobro Coactivo y Medidas Cautelares
    {
        "id": 21,
        "question": "¿Qué facultades y herramientas posee la UGPP durante el procedimiento de cobro coactivo?",
        "allOptions": [
            {"text": "Decretar embargos de cuentas bancarias y títulos financieros", "correct": True},
            {"text": "Librar mandamiento de pago al aportante deudor", "correct": True},
            {"text": "Registrar embargos de bienes inmuebles y vehículos en instrumentos públicos", "correct": True},
            {"text": "Suscribir facilidades de pago con garantías reales o personales", "correct": True},
            {"text": "Ordenar la detención privativa de la libertad del empleador", "correct": False},
            {"text": "Decretar la quiebra penal forzosa de la compañía", "correct": False},
            {"text": "Confiscar sin fórmula de juicio el inventario comercial", "correct": False}
        ]
    },
    # 22. Insumos y fuentes de cruce de datos en Parafiscales
    {
        "id": 22,
        "question": "¿Qué fuentes y sistemas de información consulta la UGPP para detectar evasión parafiscal?",
        "allOptions": [
            {"text": "Planilla Integrada de Liquidación de Aportes (PILA)", "correct": True},
            {"text": "Información exógena tributaria de la DIAN", "correct": True},
            {"text": "Registros de Cámaras de Comercio (RUES)", "correct": True},
            {"text": "Reportes de Administradoras de Fondos de Pensiones y EPS", "correct": True},
            {"text": "Historiales médicos reservados de pacientes", "correct": False},
            {"text": "Bases de datos de telecomunicaciones de llamadas privadas", "correct": False},
            {"text": "Registros consulares de votantes en el exterior", "correct": False}
        ]
    },
    # 23. Derechos de los ciudadanos ante la UGPP
    {
        "id": 23,
        "question": "¿Qué derechos asisten a los ciudadanos y aportantes en sus actuaciones ante la entidad?",
        "allOptions": [
            {"text": "Presentar peticiones, quejas y reclamos en términos respetuosos", "correct": True},
            {"text": "Interponer recursos de reconsideración en vía administrativa", "correct": True},
            {"text": "Acceder y conocer el estado de sus expedientes administrativos", "correct": True},
            {"text": "Recibir orientación técnica sobre la correcta liquidación de aportes", "correct": True},
            {"text": "Exigir que no se les apliquen leyes tributarias vigentes", "correct": False},
            {"text": "Condicionar el pago de aportes a la rentabilidad de su negocio", "correct": False},
            {"text": "Elegir arbitrariamente al funcionario sustanciador de su caso", "correct": False}
        ]
    },
    # 24. Conductas sancionables en parafiscales
    {
        "id": 24,
        "question": "¿Cuáles de las siguientes situaciones constituyen conductas legalmente sancionables por la UGPP?",
        "allOptions": [
            {"text": "Omisión en la afiliación al Sistema de la Protección Social", "correct": True},
            {"text": "Inexactitud en la declaración del Ingreso Base de Cotización (IBC)", "correct": True},
            {"text": "Mora injustificada en el pago de aportes retenidos", "correct": True},
            {"text": "No suministro oportuno de información contable requerida", "correct": True},
            {"text": "Pagar cumplidamente los aportes en la fecha de vencimiento PILA", "correct": False},
            {"text": "Presentar solicitudes de aclaración a la mesa de ayuda", "correct": False},
            {"text": "Afiliar a trabajadores conforme a su salario legal real", "correct": False}
        ]
    },
    # 25. Etapas de la Determinación Parafiscal
    {
        "id": 25,
        "question": "¿Cuáles de las siguientes corresponden a etapas y actos del proceso oficial de fiscalización?",
        "allOptions": [
            {"text": "Requerimiento de Información", "correct": True},
            {"text": "Requerimiento para Declarar o Corregir (RDC)", "correct": True},
            {"text": "Liquidación Oficial (LO)", "correct": True},
            {"text": "Resolución del Recurso de Reconsideración", "correct": True},
            {"text": "Sentencia de Casación Laboral", "correct": False},
            {"text": "Audiencia de Conciliación Prejudicial en Procuraduría", "correct": False},
            {"text": "Declaratoria de Interdicción Judicial", "correct": False}
        ]
    },
    # 26. Modalidades de pensión administradas
    {
        "id": 26,
        "question": "¿Qué tipos de prestaciones o derechos pensionales reconoce o gestiona la UGPP?",
        "allOptions": [
            {"text": "Pensión de vejez y jubilación de regímenes especiales en liquidación", "correct": True},
            {"text": "Pensión de sobrevivientes o sustitución pensional", "correct": True},
            {"text": "Pensión de invalidez de servidores de entidades liquidadas", "correct": True},
            {"text": "Indemnizaciones sustitutivas y cuotas partes pensionales", "correct": True},
            {"text": "Subsidio de desempleo administrado por Cajas de Compensación", "correct": False},
            {"text": "Seguro de cesantías comerciales a término fijo", "correct": False},
            {"text": "Créditos hipotecarios de vivienda de interés social", "correct": False}
        ]
    },
    # 27. Obligaciones en etapa persuasiva de aportes
    {
        "id": 27,
        "question": "¿Qué ventajas y objetivos tiene la etapa persuasiva en la UGPP?",
        "allOptions": [
            {"text": "Permite al aportante corregir sus autoliquidaciones voluntariamente", "correct": True},
            {"text": "Evita o reduce sanciones monetarias que se originan en la fiscalización formal", "correct": True},
            {"text": "Facilita la suscripción de acuerdos de pago sin medidas cautelares", "correct": True},
            {"text": "Incentiva el cumplimiento espontáneo antes del inicio de litigios", "correct": True},
            {"text": "Otorga condonación total automática del capital adeudado al sistema", "correct": False},
            {"text": "Exonera a la empresa de afiliar a sus futuros trabajadores", "correct": False},
            {"text": "Suspende permanentemente las leyes laborales colombianas", "correct": False}
        ]
    },
    # 28. Buenas prácticas de seguridad de la información
    {
        "id": 28,
        "question": "¿Cuáles son directrices obligatorias de ciberseguridad para servidores de la UGPP?",
        "allOptions": [
            {"text": "Proteger y no compartir contraseñas institucionales ni tokens", "correct": True},
            {"text": "Reportar correos y enlaces sospechosos de phishing al GIT de Seguridad", "correct": True},
            {"text": "Bloquear la estación de trabajo al retirarse del puesto de oficina", "correct": True},
            {"text": "Tratar los datos de pensionados y aportantes con reserva y confidencialidad", "correct": True},
            {"text": "Copiar bases de datos reservadas en memorias USB personales sin cifrado", "correct": False},
            {"text": "Instalar software no autorizado sin licencia corporativa", "correct": False},
            {"text": "Publicar credenciales de servidores en canales públicos de mensajería", "correct": False}
        ]
    },
    # 29. Canales oficiales de atención al ciudadano
    {
        "id": 29,
        "question": "¿Cuáles son canales oficiales habilitados por la UGPP para atención al usuario?",
        "allOptions": [
            {"text": "Puntos presenciales de atención al ciudadano y módulos itinerantes", "correct": True},
            {"text": "Línea telefónica nacional gratuita y PBX institucional", "correct": True},
            {"text": "Sede Electrónica y portal web oficial de trámites", "correct": True},
            {"text": "Ventanilla única de correspondencia y radicación virtual", "correct": True},
            {"text": "Cuentas bancarias personales de asesores de atención", "correct": False},
            {"text": "Foros anónimos de compraventa en redes sociales no verificadas", "correct": False},
            {"text": "Cajeros automáticos de entidades financieras privadas", "correct": False}
        ]
    },
    # 30. Funciones de la Dirección General
    {
        "id": 30,
        "question": "¿Qué atribuciones institucionales competen al Director General de la UGPP?",
        "allOptions": [
            {"text": "Dirigir, orientar y coordinar el funcionamiento general de la entidad", "correct": True},
            {"text": "Crear, organizar y conformar los Grupos Internos de Trabajo (GIT)", "correct": True},
            {"text": "Ejercer la representación legal y administrativa de la entidad", "correct": True},
            {"text": "Adoptar políticas y planes estratégicos del sector pensional y parafiscal", "correct": True},
            {"text": "Atender personalmente en ventanilla la correspondencia diaria", "correct": False},
            {"text": "Reparar fallas eléctricas en las estaciones de trabajo de las sedes", "correct": False},
            {"text": "Liquidar mes a mes las horas extras de vigilancia privada", "correct": False}
        ]
    },
    # 31. Gestión de Contratación Estatal
    {
        "id": 31,
        "question": "¿Qué etapas y principios rigen los procesos contractuales de la UGPP?",
        "allOptions": [
            {"text": "Elaboración de estudios previos y análisis del sector económico", "correct": True},
            {"text": "Publicación obligatoria de pliegos y ofertas en la plataforma SECOP", "correct": True},
            {"text": "Aplicación de principios de transparencia, economía y selección objetiva", "correct": True},
            {"text": "Supervisión o interventoría estricta de la ejecución contractual", "correct": True},
            {"text": "Adjudicación de contratos sin disponibilidad presupuestal previa", "correct": False},
            {"text": "Celebración de acuerdos verbales sin soporte documental formal", "correct": False},
            {"text": "Contratar con personas inhabilitadas por sanciones fiscales", "correct": False}
        ]
    },
    # 32. Trámite de Acciones de Tutela
    {
        "id": 32,
        "question": "¿Cómo debe responder la UGPP frente a una notificación de acción de tutela?",
        "allOptions": [
            {"text": "Remitirla con máxima prioridad al GIT de Tutelas correspondiente", "correct": True},
            {"text": "Contestar dentro del término perentorio fijado por el juez de tutela", "correct": True},
            {"text": "Aportar pruebas documentales del trámite brindado a la petición", "correct": True},
            {"text": "Cumplir de inmediato los fallos para evitar incidentes de desacato", "correct": True},
            {"text": "Ignorar la notificación si el demandante no asistió presencialmente", "correct": False},
            {"text": "Esperar 6 meses para evaluar si el caso es procedente o no", "correct": False},
            {"text": "Archivar la tutela sin presentar informe de contestación", "correct": False}
        ]
    },
    # 33. Ingreso Base de Cotización (IBC)
    {
        "id": 33,
        "question": "¿Cuáles son premisas legales para el cálculo del Ingreso Base de Cotización (IBC)?",
        "allOptions": [
            {"text": "En dependientes, no puede ser inferior a 1 Salario Mínimo Legal Vigente", "correct": True},
            {"text": "En dependientes, el tope máximo general equivale a 25 Salarios Mínimos", "correct": True},
            {"text": "En independientes por cuenta propia, se aplica la presunción de costos o esquema legal", "correct": True},
            {"text": "Deben sumarse los pagos salariales constitutivos de remuneración", "correct": True},
            {"text": "Los empleadores pueden fijar un IBC de $10.000 para ahorrar costos", "correct": False},
            {"text": "El IBC en Colombia es voluntario y negociable con el trabajador", "correct": False},
            {"text": "Las cotizaciones de salud y pensión pueden omitirse a voluntad", "correct": False}
        ]
    },
    # 34. Plan Anual de Gestión del Riesgo
    {
        "id": 34,
        "question": "¿Qué tipos de riesgos monitorea y gestiona la UGPP en su mapa institucional?",
        "allOptions": [
            {"text": "Riesgos de corrupción y conductas antitéticas", "correct": True},
            {"text": "Riesgos operativos y fallas en procesos o sistemas tecnológicos", "correct": True},
            {"text": "Riesgos jurídicos por litigios y demandas masivas", "correct": True},
            {"text": "Riesgos de seguridad de la información y fuga de datos", "correct": True},
            {"text": "Riesgo de fluctuación bursátil de criptomonedas especulativas", "correct": False},
            {"text": "Riesgo de devaluación en inversiones inmobiliarias privadas", "correct": False},
            {"text": "Riesgos meteorológicos espaciales sin impacto terrestre", "correct": False}
        ]
    },
    # 35. Comité de Conciliación Institucional
    {
        "id": 35,
        "question": "¿Qué atribuciones tiene el Comité de Conciliación de la UGPP?",
        "allOptions": [
            {"text": "Decidir sobre la procedencia de conciliar en litigios judiciales y extrajudiciales", "correct": True},
            {"text": "Determinar si procede iniciar acción de repetición contra exservidores", "correct": True},
            {"text": "Definir líneas y fórmulas de arreglo económico en controversias legales", "correct": True},
            {"text": "Aprobar las actas y decisiones de defensa del patrimonio público", "correct": True},
            {"text": "Expedir leyes tributarias reformando el estatuto del consumidor", "correct": False},
            {"text": "Aprobar el incremento del salario mínimo legal en el país", "correct": False},
            {"text": "Emitir fallos disciplinarios definitivos de destitución", "correct": False}
        ]
    },
    # 36. Gestión del Bienestar y Talento Humano
    {
        "id": 36,
        "question": "¿Qué programas componen la oferta de Bienestar y Desarrollo Organizacional?",
        "allOptions": [
            {"text": "Capacitación continua y competencias laborales para funcionarios", "correct": True},
            {"text": "Programas de pausas activas, ergonomía y salud física", "correct": True},
            {"text": "Actividades recreativas, culturales y de integración familiar", "correct": True},
            {"text": "Medición y planes de mejoramiento del clima organizacional", "correct": True},
            {"text": "Asignación discrecional de contratos estatales a familiares", "correct": False},
            {"text": "Condonación de deudas tributarias a servidores morosos", "correct": False},
            {"text": "Autorización para laborar sin registrar asistencia ni metas", "correct": False}
        ]
    },
    # 37. Trámite de Devolución de Aportes
    {
        "id": 37,
        "question": "¿Cuándo y cómo procede el trámite de devolución de aportes o sumas superiores?",
        "allOptions": [
            {"text": "Cuando se demuestra un pago en exceso o de lo no debido por el aportante", "correct": True},
            {"text": "Tras la revisión técnica y verificación de soportes en el GIT respectivo", "correct": True},
            {"text": "Mediante acto administrativo motivado expedido por la entidad", "correct": True},
            {"text": "Verificando que no existan deudas pendientes que compensar", "correct": True},
            {"text": "Cuando el aportante manifiesta que se arrepintió de cotizar al sistema", "correct": False},
            {"text": "Entregando dinero en efectivo en la recepción de la sede", "correct": False},
            {"text": "De forma anónima sin verificar la identidad del titular beneficiario", "correct": False}
        ]
    },
    # 38. Normalización de Archivos y Expedientes
    {
        "id": 38,
        "question": "¿Qué acciones comprende la custodia y normalización de expedientes pensionales?",
        "allOptions": [
            {"text": "Foliación secuencial y verificación de autenticidad documental", "correct": True},
            {"text": "Digitalización técnica con metadatos en el gestor documental", "correct": True},
            {"text": "Control de préstamo físico y devolución con acta formal", "correct": True},
            {"text": "Conservación preventiva para evitar deterioro de papel histórico", "correct": True},
            {"text": "Destrucción de expedientes activos para liberar espacio en bodegas", "correct": False},
            {"text": "Venta del papel reciclado de documentos con reserva legal", "correct": False},
            {"text": "Publicación abierta en internet de historias laborales reservadas", "correct": False}
        ]
    },
    # 39. Campañas de Cultura y Pedagogía Institucional
    {
        "id": 39,
        "question": "¿Qué propósitos cumplen los módulos pedagógicos gamificados como UGPpiensa?",
        "allOptions": [
            {"text": "Reforzar el conocimiento de la estructura orgánica y los GIT de la entidad", "correct": True},
            {"text": "Promover la asimilación ágil de funciones y responsabilidades directivas", "correct": True},
            {"text": "Sensibilizar sobre ergonomía, pausas activas y bienestar en el trabajo", "correct": True},
            {"text": "Fortalecer la cultura de calidad, servicio y compromiso institucional", "correct": True},
            {"text": "Sustituir los procesos disciplinarios por partidas de videojuegos", "correct": False},
            {"text": "Exonerar de capacitaciones obligatorias de ley sin evaluación", "correct": False},
            {"text": "Crear un ranking para penalizar económicamente a los jugadores", "correct": False}
        ]
    },
    # 40. Medición y Rendición de Cuentas
    {
        "id": 40,
        "question": "¿Cuáles son instrumentos oficiales de rendición de cuentas e indicadores en la UGPP?",
        "allOptions": [
            {"text": "Audiencia pública anual de rendición de cuentas a la ciudadanía", "correct": True},
            {"text": "Publicación del Informe de Gestión y Metas de Desempeño", "correct": True},
            {"text": "Reportes periódicos a organismos de control (Contraloría, Procuraduría)", "correct": True},
            {"text": "Monitoreo del Tablero de Indicadores del Plan Estratégico", "correct": True},
            {"text": "Ocultamiento de datos desfavorables de quejas ciudadanas", "correct": False},
            {"text": "Eliminación de registros contables con inconsistencias previas", "correct": False},
            {"text": "Modificación unilateral de metas vencidas sin justificación", "correct": False}
        ]
    }
]

print(f"Total preguntas estructuradas: {len(questions)}")
for q in questions:
    correct_count = sum(1 for opt in q["allOptions"] if opt["correct"])
    assert correct_count >= 3, f"Pregunta {q['id']} tiene menos de 3 respuestas correctas ({correct_count})"

output_path = "ugppiensa-game/public/assets/data/questions_lluvia.json"
os.makedirs(os.path.dirname(output_path), exist_ok=True)
with open(output_path, "w", encoding="utf-8") as f:
    json.dump({"questions": questions}, f, ensure_ascii=False, indent=2)

print(f"Archivo guardado correctamente: {output_path}")
