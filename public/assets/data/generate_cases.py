# -*- coding: utf-8 -*-
"""
Script para generar cases_despacho.json, questions_lluvia.json y casos_y_preguntas.md
"""
import json
import os

cases = [
    # --- DIRECCIÓN JURÍDICA (7 casos) ---
    {
        "id": 1,
        "situation": "Un ciudadano interpone una acción de tutela alegando mora excesiva e injustificada en la reliquidación de su pensión.",
        "direction": "Jurídica",
        "subdirection": "Defensa Judicial Pensional",
        "git": "GIT Tutelas",
        "decoys_directions": ["Pensiones", "Parafiscales", "Dirección General"],
        "decoys_subdirections": ["Asesoría y Conceptualización Pensional", "Jurídica de Parafiscales", "Determinación de Derechos Pensionales"],
        "decoys_gits": ["GIT Penales", "GIT Defensa Judicial", "GIT Fallos Judiciales y Sustanciación"],
        "explanation": "La defensa y atención judicial en acciones de tutela relacionadas con derechos pensionales le corresponde al GIT Tutelas de la Subdirección de Defensa Judicial Pensional."
    },
    {
        "id": 2,
        "situation": "Se detectó la presunta falsedad material en un certificado de semanas cotizadas aportado por un solicitante para obtener pensión.",
        "direction": "Jurídica",
        "subdirection": "Defensa Judicial Pensional",
        "git": "GIT Penales",
        "decoys_directions": ["Pensiones", "Soporte y Desarrollo Organizacional", "Seguimiento y Mejoramiento de Procesos"],
        "decoys_subdirections": ["Defensa Judicial Pensional", "Asesoría y Conceptualización Pensional", "Normalización de Expedientes Pensionales"],
        "decoys_gits": ["GIT Tutelas", "GIT Acciones de Lesividad", "GIT Control Interno Disciplinario"],
        "explanation": "La formulación de denuncias penales por fraude o falsedad en trámites pensionales y la representación de la entidad ante fiscalías corresponde al GIT Penales."
    },
    {
        "id": 3,
        "situation": "Un juzgado laboral notificó a la UGPP sobre una demanda ordinaria pensional interpuesta por un exservidor público.",
        "direction": "Jurídica",
        "subdirection": "Defensa Judicial Pensional",
        "git": "GIT Defensa Judicial",
        "decoys_directions": ["Pensiones", "Parafiscales", "Servicios Integrados de Atención"],
        "decoys_subdirections": ["Defensa Judicial Pensional", "Jurídica de Parafiscales", "Determinación de Derechos Pensionales"],
        "decoys_gits": ["GIT Tutelas", "GIT Ejecutivos", "GIT Conciliaciones Judiciales, Extrajudiciales y Acciones de Repetición"],
        "explanation": "La representación judicial y extrajudicial en procesos ordinarios y contenciosos pensionales es función del GIT Defensa Judicial de dicha Subdirección."
    },
    {
        "id": 4,
        "situation": "Se identificó un acto administrativo que reconoció una mesada pensional con cuantía irregular contraria a la ley y se requiere demandar el propio acto.",
        "direction": "Jurídica",
        "subdirection": "Defensa Judicial Pensional",
        "git": "GIT Acciones de Lesividad",
        "decoys_directions": ["Pensiones", "Dirección General", "Parafiscales"],
        "decoys_subdirections": ["Defensa Judicial Pensional", "Asesoría y Conceptualización Pensional", "Determinación de Derechos Pensionales"],
        "decoys_gits": ["GIT Defensa Judicial", "GIT Tutelas", "GIT Doctrina y Unificación de Criterios"],
        "explanation": "Interponer demandas de lesividad para revocar actos administrativos que reconocieron pensiones de forma ilegal o fraudulenta es competencia del GIT Acciones de Lesividad."
    },
    {
        "id": 5,
        "situation": "Un despacho judicial libra mandamiento de pago ejecutivo en contra de la UGPP por costas procesales y sumas derivadas de un fallo pensional.",
        "direction": "Jurídica",
        "subdirection": "Defensa Judicial Pensional",
        "git": "GIT Ejecutivos",
        "decoys_directions": ["Soporte y Desarrollo Organizacional", "Pensiones", "Parafiscales"],
        "decoys_subdirections": ["Defensa Judicial Pensional", "Financiera", "Cobranzas"],
        "decoys_gits": ["GIT Defensa Judicial", "GIT Gestión Coactiva", "GIT Tesorería"],
        "explanation": "El estudio, interposición de excepciones y seguimiento a procesos ejecutivos y mandamientos de pago contra la entidad en materia pensional corresponde al GIT Ejecutivos."
    },
    {
        "id": 6,
        "situation": "La Dirección de Pensiones solicita unificar el criterio institucional ante un vacío hermenéutico en el régimen de transición de la Ley 33 de 1985.",
        "direction": "Jurídica",
        "subdirection": "Asesoría y Conceptualización Pensional",
        "git": "GIT Doctrina y Unificación de Criterios",
        "decoys_directions": ["Pensiones", "Estrategia y Evaluación", "Dirección General"],
        "decoys_subdirections": ["Asesoría y Conceptualización Pensional", "Defensa Judicial Pensional", "Jurídica de Parafiscales"],
        "decoys_gits": ["GIT Análisis y Sustento Jurídico Pensional", "GIT Gestión Jurídica", "GIT Tutelas"],
        "explanation": "La unificación de criterios, emisión de directrices de doctrina y prevención del daño antijurídico pensional corresponde al GIT Doctrina y Unificación de Criterios."
    },
    {
        "id": 7,
        "situation": "Un aportante interpuso recurso de reconsideración contra una Liquidación Oficial emitida por la Dirección de Parafiscales.",
        "direction": "Jurídica",
        "subdirection": "Jurídica de Parafiscales",
        "git": "GIT Actos Administrativos (1)",
        "decoys_directions": ["Parafiscales", "Pensiones", "Dirección General"],
        "decoys_subdirections": ["Jurídica de Parafiscales", "Determinación de Obligaciones", "Cobranzas"],
        "decoys_gits": ["GIT Actos Administrativos (2)", "GIT Defensa Judicial", "GIT Requerimiento"],
        "explanation": "La sustanciación y resolución en segunda instancia de los recursos de reconsideración contra liquidaciones oficiales parafiscales corresponde a los GIT de Actos Administrativos de la Subdirección Jurídica de Parafiscales."
    },

    # --- DIRECCIÓN DE PARAFISCALES (8 casos) ---
    {
        "id": 8,
        "situation": "Un trabajador independiente interpone una denuncia anónima aportando planillas donde su empleador presuntamente evade aportes al Sistema de Seguridad Social.",
        "direction": "Parafiscales",
        "subdirection": "Integración del Sistema de Aportes Parafiscales",
        "git": "GIT Denuncias",
        "decoys_directions": ["Jurídica", "Pensiones", "Servicios Integrados de Atención"],
        "decoys_subdirections": ["Integración del Sistema de Aportes Parafiscales", "Determinación de Obligaciones", "Cobranzas"],
        "decoys_gits": ["GIT Comunicaciones Persuasivas", "GIT Requerimiento", "GIT Relacionamiento y Gestión Transversal"],
        "explanation": "Gestionar, filtrar y tramitar denuncias ciudadanas y quejas sobre presunta omisión o evasión de aportes parafiscales le compete al GIT Denuncias de la Subdirección de Integración."
    },
    {
        "id": 9,
        "situation": "Se identificó un lote de 5.000 trabajadores independientes omisos y se requiere enviarles un mensaje masivo invitándolos a regularizar sus aportes voluntariamente.",
        "direction": "Parafiscales",
        "subdirection": "Integración del Sistema de Aportes Parafiscales",
        "git": "GIT Comunicaciones Persuasivas",
        "decoys_directions": ["Estrategia y Evaluación", "Servicios Integrados de Atención", "Soporte y Desarrollo Organizacional"],
        "decoys_subdirections": ["Integración del Sistema de Aportes Parafiscales", "Cobranzas", "Determinación de Obligaciones"],
        "decoys_gits": ["GIT Gestión de Datos", "GIT Orientación al Deudor y Gestión de Títulos", "GIT Comunicaciones"],
        "explanation": "Diseñar e implementar acciones persuasivas masivas antes de la etapa fiscalizadora es labor del GIT Comunicaciones Persuasivas."
    },
    {
        "id": 10,
        "situation": "Se detectaron omisiones reiteradas en una empresa y se decide iniciar el proceso formal de fiscalización expidiendo el pliego probatorio inicial.",
        "direction": "Parafiscales",
        "subdirection": "Determinación de Obligaciones",
        "git": "GIT Requerimiento",
        "decoys_directions": ["Jurídica", "Pensiones", "Dirección General"],
        "decoys_subdirections": ["Determinación de Obligaciones", "Cobranzas", "Integración del Sistema de Aportes Parafiscales"],
        "decoys_gits": ["GIT Liquidaciones", "GIT Sanciones", "GIT Verificación de Pagos"],
        "explanation": "Analizar pruebas y expedir el Requerimiento para Declarar o Corregir (o autos de archivo) corresponde al GIT Requerimiento de Determinación de Obligaciones."
    },
    {
        "id": 11,
        "situation": "Un aportante no suministró la información contable solicitada dentro del término legal exigido en una fiscalización.",
        "direction": "Parafiscales",
        "subdirection": "Determinación de Obligaciones",
        "git": "GIT Sanciones",
        "decoys_directions": ["Jurídica", "Soporte y Desarrollo Organizacional", "Pensiones"],
        "decoys_subdirections": ["Determinación de Obligaciones", "Cobranzas", "Jurídica de Parafiscales"],
        "decoys_gits": ["GIT Requerimiento", "GIT Liquidaciones", "GIT Gestión Coactiva"],
        "explanation": "Adelantar investigaciones sancionatorias por no envío de información y expedir pliegos de cargos sancionatorios le corresponde al GIT Sanciones."
    },
    {
        "id": 12,
        "situation": "Venció el plazo legal tras el requerimiento especial sin que el aportante corrigiera sus autoliquidaciones, por lo que procede tasar la deuda oficial.",
        "direction": "Parafiscales",
        "subdirection": "Determinación de Obligaciones",
        "git": "GIT Liquidaciones",
        "decoys_directions": ["Jurídica", "Soporte y Desarrollo Organizacional", "Pensiones"],
        "decoys_subdirections": ["Determinación de Obligaciones", "Cobranzas", "Financiera"],
        "decoys_gits": ["GIT Requerimiento", "GIT Completitud", "GIT Central de Cuentas"],
        "explanation": "La elaboración y expedición de Liquidaciones Oficiales determinando la deuda de aportes corresponde al GIT Liquidaciones."
    },
    {
        "id": 13,
        "situation": "Un deudor moroso solicita suscribir una facilidad de pago a 24 cuotas para ponerse al día con sus obligaciones parafiscales en mora.",
        "direction": "Parafiscales",
        "subdirection": "Cobranzas",
        "git": "GIT Orientación al Deudor y Gestión de Títulos",
        "decoys_directions": ["Jurídica", "Soporte y Desarrollo Organizacional", "Pensiones"],
        "decoys_subdirections": ["Cobranzas", "Determinación de Obligaciones", "Financiera"],
        "decoys_gits": ["GIT Gestión Coactiva", "GIT Verificación de Pagos", "GIT Seguimiento y Apoyo a la Gestión"],
        "explanation": "Atender al deudor moroso, estructurar acuerdos y gestionar facilidades de pago en etapa persuasiva es función del GIT Orientación al Deudor y Gestión de Títulos."
    },
    {
        "id": 14,
        "situation": "Un deudor que tiene título ejecutivo ejecutoriado no pagó ni suscribió acuerdo, por lo que se debe embargar sus cuentas bancarias.",
        "direction": "Parafiscales",
        "subdirection": "Cobranzas",
        "git": "GIT Gestión Coactiva",
        "decoys_directions": ["Jurídica", "Pensiones", "Soporte y Desarrollo Organizacional"],
        "decoys_subdirections": ["Cobranzas", "Determinación de Obligaciones", "Financiera"],
        "decoys_gits": ["GIT Orientación al Deudor y Gestión de Títulos", "GIT Verificación de Pagos", "GIT Ejecutivos"],
        "explanation": "El decreto y práctica de medidas cautelares (embargos) y el trámite del procedimiento administrativo coactivo corresponde al GIT Gestión Coactiva."
    },
    {
        "id": 15,
        "situation": "Un gremio empresarial solicita una jornada de capacitación técnica para entender el IBC de independientes y la Ley de Alivios Parafiscales.",
        "direction": "Parafiscales",
        "subdirection": "Despacho Dirección",
        "git": "GIT Capacitación",
        "decoys_directions": ["Servicios Integrados de Atención", "Estrategia y Evaluación", "Soporte y Desarrollo Organizacional"],
        "decoys_subdirections": ["Despacho Dirección", "Integración del Sistema de Aportes Parafiscales", "Gestión Humana"],
        "decoys_gits": ["GIT Seguimiento y Apoyo a la Gestión", "GIT Comunicaciones", "GIT Desarrollo y Satisfacción del Talento Humano"],
        "explanation": "El diseño y ejecución de capacitaciones externas a la ciudadanía y gremios sobre la cultura de aportes parafiscales está a cargo del GIT Capacitación de Parafiscales."
    },

    # --- DIRECCIÓN DE PENSIONES (8 casos) ---
    {
        "id": 16,
        "situation": "Un ciudadano solicita el reconocimiento y pago por primera vez de su pensión de vejez bajo el régimen de prima media administrado por UGPP.",
        "direction": "Pensiones",
        "subdirection": "Determinación de Derechos Pensionales",
        "git": "GIT Sustanciadores",
        "decoys_directions": ["Jurídica", "Parafiscales", "Soporte y Desarrollo Organizacional"],
        "decoys_subdirections": ["Determinación de Derechos Pensionales", "Nómina de Pensionados", "Normalización de Expedientes Pensionales"],
        "decoys_gits": ["GIT Revisores", "GIT Transversales", "GIT Instancia Superior, Sumas Superiores y Derechos de Petición"],
        "explanation": "El análisis de fondo y la sustanciación de actos administrativos de reconocimiento pensional en primera instancia corresponde al GIT Sustanciadores."
    },
    {
        "id": 17,
        "situation": "Se elaboró el proyecto de resolución pensional y se requiere el control previo de legalidad y calidad formal antes de pasarlo a firma.",
        "direction": "Pensiones",
        "subdirection": "Determinación de Derechos Pensionales",
        "git": "GIT Revisores",
        "decoys_directions": ["Jurídica", "Parafiscales", "Seguimiento y Mejoramiento de Procesos"],
        "decoys_subdirections": ["Determinación de Derechos Pensionales", "Normalización de Expedientes Pensionales", "Nómina de Pensionados"],
        "decoys_gits": ["GIT Sustanciadores", "GIT Fallos Judiciales y Sustanciación", "GIT Gestión Jurídica"],
        "explanation": "El control de legalidad, calidad y validación de proyectos de actos administrativos pensionales es función del GIT Revisores."
    },
    {
        "id": 18,
        "situation": "Llegó una sentencia judicial ejecutoriada que ordena reliquidar la pensión de jubilación de un extrabajador de una entidad pública liquidada.",
        "direction": "Pensiones",
        "subdirection": "Determinación de Derechos Pensionales",
        "git": "GIT Fallos Judiciales y Sustanciación",
        "decoys_directions": ["Jurídica", "Parafiscales", "Soporte y Desarrollo Organizacional"],
        "decoys_subdirections": ["Determinación de Derechos Pensionales", "Defensa Judicial Pensional", "Nómina de Pensionados"],
        "decoys_gits": ["GIT Sustanciadores", "GIT Tutelas", "GIT Defensa Judicial"],
        "explanation": "El cumplimiento y sustanciación de actos derivados de sentencias judiciales ejecutoriadas pensionales le compete al GIT Fallos Judiciales y Sustanciación."
    },
    {
        "id": 19,
        "situation": "Un solicitante apela en segunda instancia la resolución que le negó su solicitud pensional o reclama cuantías superiores al tope ordinario.",
        "direction": "Pensiones",
        "subdirection": "Despacho Dirección",
        "git": "GIT Instancia Superior, Sumas Superiores y Derechos de Petición",
        "decoys_directions": ["Jurídica", "Parafiscales", "Dirección General"],
        "decoys_subdirections": ["Despacho Dirección", "Determinación de Derechos Pensionales", "Defensa Judicial Pensional"],
        "decoys_gits": ["GIT Sustanciadores", "GIT Revisores", "GIT Doctrina y Unificación de Criterios"],
        "explanation": "Resolver apelaciones en segunda instancia y casos de sumas superiores corresponde a este GIT adscrito al Despacho de la Dirección de Pensiones."
    },
    {
        "id": 20,
        "situation": "Un pensionado falleció y su cónyuge solicita la sustitución pensional; se debe registrar la novedad de ingreso y calcular la nómina mensual.",
        "direction": "Pensiones",
        "subdirection": "Nómina de Pensionados",
        "git": "GIT Liquidación y Trámite de Novedades",
        "decoys_directions": ["Soporte y Desarrollo Organizacional", "Jurídica", "Parafiscales"],
        "decoys_subdirections": ["Nómina de Pensionados", "Determinación de Derechos Pensionales", "Financiera"],
        "decoys_gits": ["GIT Revisión y Trámite de Incorporaciones y Novedades", "GIT Gestión Post-Nómina y Obligaciones Pensionales", "GIT Central de Cuentas"],
        "explanation": "Ejecutar la liquidación de la nómina de pensionados y procesar novedades mensuales le corresponde al GIT Liquidación y Trámite de Novedades."
    },
    {
        "id": 21,
        "situation": "Se requiere enviar los archivos validados de la nómina pensional mensual al pagador (FOPEP) tras verificar la autenticidad de incorporaciones.",
        "direction": "Pensiones",
        "subdirection": "Nómina de Pensionados",
        "git": "GIT Revisión y Trámite de Incorporaciones y Novedades",
        "decoys_directions": ["Soporte y Desarrollo Organizacional", "Gestión de Tecnologías de la Información", "Parafiscales"],
        "decoys_subdirections": ["Nómina de Pensionados", "Financiera", "Determinación de Derechos Pensionales"],
        "decoys_gits": ["GIT Liquidación y Trámite de Novedades", "GIT Tesorería", "GIT Sistemas de Información"],
        "explanation": "Verificar la consistencia y procedencia de las incorporaciones y novedades antes de remitirlas al FOPEP le compete a este GIT."
    },
    {
        "id": 22,
        "situation": "La UGPP debe cobrar a otra entidad de previsión social la cuota parte pensional que le corresponde pagar por un pensionado compartido.",
        "direction": "Pensiones",
        "subdirection": "Nómina de Pensionados",
        "git": "GIT Gestión Post-Nómina y Obligaciones Pensionales",
        "decoys_directions": ["Parafiscales", "Soporte y Desarrollo Organizacional", "Jurídica"],
        "decoys_subdirections": ["Nómina de Pensionados", "Cobranzas", "Financiera"],
        "decoys_gits": ["GIT Liquidación y Trámite de Novedades", "GIT Verificación de Pagos", "GIT Contabilidad"],
        "explanation": "La gestión de cuotas partes pensionales y cobro persuasivo de obligaciones post-nómina corresponde al GIT Gestión Post-Nómina."
    },
    {
        "id": 23,
        "situation": "Un expediente pensional presenta folios faltantes o inconsistencias de archivo físico que deben subsanarse antes de emitir resolución.",
        "direction": "Pensiones",
        "subdirection": "Normalización de Expedientes Pensionales",
        "git": "GIT Aseguramiento de Operaciones",
        "decoys_directions": ["Soporte y Desarrollo Organizacional", "Jurídica", "Servicios Integrados de Atención"],
        "decoys_subdirections": ["Normalización de Expedientes Pensionales", "Gestión Documental", "Determinación de Derechos Pensionales"],
        "decoys_gits": ["GIT Sustanciadores", "GIT Abastecimiento", "GIT Operaciones"],
        "explanation": "Supervisar la completitud documental de expedientes y asegurar la operación de archivo pensional le compete al GIT Aseguramiento de Operaciones."
    },

    # --- DIRECCIÓN DE SOPORTE Y DESARROLLO ORGANIZACIONAL (7 casos) ---
    {
        "id": 24,
        "situation": "Se requiere elaborar la convocatoria de concurso interno o nombramiento provisional para cubrir una vacante en la planta de personal.",
        "direction": "Soporte y Desarrollo Organizacional",
        "subdirection": "Gestión Humana",
        "git": "GIT Ciclo Laboral",
        "decoys_directions": ["Dirección General", "Seguimiento y Mejoramiento de Procesos", "Jurídica"],
        "decoys_subdirections": ["Gestión Humana", "Administrativa", "Financiera"],
        "decoys_gits": ["GIT Desarrollo y Satisfacción del Talento Humano", "GIT Administraciónde Servicios al Personal", "GIT Contratos"],
        "explanation": "La vinculación, provisión de empleos, planta de personal y trámites de ingreso y retiro de funcionarios corresponde al GIT Ciclo Laboral."
    },
    {
        "id": 25,
        "situation": "Llegó fin de mes y se deben liquidar los salarios, primas legales y aportes a seguridad social de los servidores públicos de la entidad.",
        "direction": "Soporte y Desarrollo Organizacional",
        "subdirection": "Gestión Humana",
        "git": "GIT Administración de Servicios al Personal",
        "decoys_directions": ["Pensiones", "Parafiscales", "Seguimiento y Mejoramiento de Procesos"],
        "decoys_subdirections": ["Gestión Humana", "Financiera", "Nómina de Pensionados"],
        "decoys_gits": ["GIT Ciclo Laboral", "GIT Liquidación y Trámite de Novedades", "GIT Tesorería"],
        "explanation": "La liquidación de nómina de los funcionarios internos de la UGPP y sus prestaciones corresponde al GIT Administración de Servicios al Personal."
    },
    {
        "id": 26,
        "situation": "Se planea la semana del bienestar laboral, los talleres de clima organizacional y el plan de capacitación institucional anual.",
        "direction": "Soporte y Desarrollo Organizacional",
        "subdirection": "Gestión Humana",
        "git": "GIT Desarrollo y Satisfacción del Talento Humano",
        "decoys_directions": ["Estrategia y Evaluación", "Seguimiento y Mejoramiento de Procesos", "Servicios Integrados de Atención"],
        "decoys_subdirections": ["Gestión Humana", "Administrativa", "Despacho Dirección"],
        "decoys_gits": ["GIT Ciclo Laboral", "GIT Comunicaciones", "GIT Recursos Físicos"],
        "explanation": "Los planes de capacitación interna, bienestar e incentivos y seguridad y salud en el trabajo corresponden a este GIT de Gestión Humana."
    },
    {
        "id": 27,
        "situation": "Se va a abrir una licitación pública para contratar el servicio integral de vigilancia y aseo en las sedes de la UGPP a nivel nacional.",
        "direction": "Soporte y Desarrollo Organizacional",
        "subdirection": "Administrativa",
        "git": "GIT Contratos",
        "decoys_directions": ["Jurídica", "Seguimiento y Mejoramiento de Procesos", "Dirección General"],
        "decoys_subdirections": ["Administrativa", "Financiera", "Gestión Humana"],
        "decoys_gits": ["GIT Estudios de Mercado", "GIT Recursos Físicos", "GIT Presupuesto"],
        "explanation": "La estructuración de pliegos, minutas y trámites precontractuales y contractuales de la entidad compete al GIT Contratos."
    },
    {
        "id": 28,
        "situation": "Previo a abrir una contratación, se debe analizar los precios del sector y sondear cotizaciones con posibles proveedores para calcular el presupuesto oficial.",
        "direction": "Soporte y Desarrollo Organizacional",
        "subdirection": "Administrativa",
        "git": "GIT Estudios de Mercado",
        "decoys_directions": ["Estrategia y Evaluación", "Financiera", "Seguimiento y Mejoramiento de Procesos"],
        "decoys_subdirections": ["Administrativa", "Financiera", "Planeación y Proyectos"],
        "decoys_gits": ["GIT Contratos", "GIT Presupuesto", "GIT Recursos Físicos"],
        "explanation": "Elaborar los estudios del sector, análisis de mercado y seguimiento al Plan Anual de Adquisiciones corresponde al GIT Estudios de Mercado."
    },
    {
        "id": 29,
        "situation": "Se requiere expedir un Certificado de Disponibilidad Presupuestal (CDP) para respaldar un proyecto de inversión tecnológica.",
        "direction": "Soporte y Desarrollo Organizacional",
        "subdirection": "Financiera",
        "git": "GIT Presupuesto",
        "decoys_directions": ["Gestión de Tecnologías de la Información", "Estrategia y Evaluación", "Dirección General"],
        "decoys_subdirections": ["Financiera", "Administrativa", "Despacho Dirección"],
        "decoys_gits": ["GIT Contabilidad", "GIT Tesorería", "GIT Central de Cuentas"],
        "explanation": "El control de apropiaciones presupuestales, expedición de CDP y registros presupuestales es competencia del GIT Presupuesto."
    },
    {
        "id": 30,
        "situation": "Se presenta una queja disciplinaria contra un funcionario por presunto abandono del cargo e incumplimiento reiterado de su horario de trabajo.",
        "direction": "Soporte y Desarrollo Organizacional",
        "subdirection": "Despacho Dirección",
        "git": "GIT Control Interno Disciplinario",
        "decoys_directions": ["Jurídica", "Dirección General", "Seguimiento y Mejoramiento de Procesos"],
        "decoys_subdirections": ["Despacho Dirección", "Gestión Humana", "Defensa Judicial Pensional"],
        "decoys_gits": ["GIT Ciclo Laboral", "GIT Penales", "GIT Gestión Jurídica"],
        "explanation": "Adelantar la indagación e instrucción de procesos disciplinarios internos contra funcionarios corresponde al GIT Control Interno Disciplinario."
    },

    # --- DIRECCIÓN DE GESTIÓN DE TECNOLOGÍAS DE LA INFORMACIÓN (3 casos) ---
    {
        "id": 31,
        "situation": "Se cayó el enlace de fibra óptica y los servidores de base de datos de producción; la Mesa de Ayuda reporta imposibilidad de conexión a internet.",
        "direction": "Gestión de Tecnologías de la Información",
        "subdirection": "Despacho Dirección",
        "git": "GIT Infraestructura de Tecnología",
        "decoys_directions": ["Seguimiento y Mejoramiento de Procesos", "Soporte y Desarrollo Organizacional", "Servicios Integrados de Atención"],
        "decoys_subdirections": ["Despacho Dirección", "Administrativa", "Gestión Documental"],
        "decoys_gits": ["GIT Sistemas de Información", "GIT Arquitectura de Soluciones de TI", "GIT Seguridad de la Información"],
        "explanation": "Administrar la infraestructura de servidores, redes, comunicaciones y la Mesa de Ayuda es responsabilidad del GIT Infraestructura de Tecnología."
    },
    {
        "id": 32,
        "situation": "Se requiere desarrollar un nuevo módulo web interactivo en el portal institucional para consultar liquidaciones de parafiscales en tiempo real.",
        "direction": "Gestión de Tecnologías de la Información",
        "subdirection": "Despacho Dirección",
        "git": "GIT Sistemas de Información",
        "decoys_directions": ["Parafiscales", "Estrategia y Evaluación", "Servicios Integrados de Atención"],
        "decoys_subdirections": ["Despacho Dirección", "Integración del Sistema de Aportes Parafiscales", "Gestión de Canales de Atención"],
        "decoys_gits": ["GIT Arquitectura de Soluciones de TI", "GIT Infraestructura de Tecnología", "GIT Gestión de Datos"],
        "explanation": "El desarrollo, pruebas, mantenimiento y soporte a los aplicativos de software institucionales corresponde al GIT Sistemas de Información."
    },
    {
        "id": 33,
        "situation": "Se debe definir el estándar de microservicios en la nube y el esquema de interoperabilidad entre los sistemas de la UGPP y el Ministerio de Hacienda.",
        "direction": "Gestión de Tecnologías de la Información",
        "subdirection": "Despacho Dirección",
        "git": "GIT Arquitectura de Soluciones de TI",
        "decoys_directions": ["Seguimiento y Mejoramiento de Procesos", "Estrategia y Evaluación", "Soporte y Desarrollo Organizacional"],
        "decoys_subdirections": ["Despacho Dirección", "Planeación y Proyectos", "Seguridad de la Información"],
        "decoys_gits": ["GIT Sistemas de Información", "GIT Infraestructura de Tecnología", "GIT Seguridad de la Información"],
        "explanation": "La definición de lineamientos arquitectónicos, interoperabilidad y diseño de soluciones de TI es función del GIT Arquitectura de Soluciones de TI."
    },

    # --- DIRECCIÓN DE SERVICIOS INTEGRADOS DE ATENCIÓN (3 casos) ---
    {
        "id": 34,
        "situation": "Se identificaron largas filas en el punto de atención presencial de Bogotá y problemas de cola en el conmutador telefónico PBX.",
        "direction": "Servicios Integrados de Atención",
        "subdirection": "Despacho Dirección",
        "git": "GIT Gestión de Canales de Atención",
        "decoys_directions": ["Soporte y Desarrollo Organizacional", "Parafiscales", "Pensiones"],
        "decoys_subdirections": ["Despacho Dirección", "Administrativa", "Relacionamiento y Gestión Transversal"],
        "decoys_gits": ["GIT Relacionamiento y Gestión Transversal", "GIT Gestión de Back Office", "GIT Recursos Físicos"],
        "explanation": "La administración y operación de los canales de atención al ciudadano (presencial, telefónico, virtual) corresponde al GIT Gestión de Canales de Atención."
    },
    {
        "id": 35,
        "situation": "Un ciudadano radicó una petición manifestando inconformidad con el trato recibido y solicitando orientación general sobre trámites institucionales.",
        "direction": "Servicios Integrados de Atención",
        "subdirection": "Despacho Dirección",
        "git": "GIT Relacionamiento y Gestión Transversal",
        "decoys_directions": ["Jurídica", "Dirección General", "Parafiscales"],
        "decoys_subdirections": ["Despacho Dirección", "Gestión Jurídica", "Derechos de Petición"],
        "decoys_gits": ["GIT Gestión de Canales de Atención", "GIT Gestión de Back Office", "GIT Derechos de Petición"],
        "explanation": "Liderar la gestión de peticiones, quejas, reclamos y la medición de la satisfacción ciudadana corresponde a este GIT."
    },
    {
        "id": 36,
        "situation": "Se requiere coordinar el back office para dar salida expedita a las respuestas de solicitudes radicadas que requieren articulación con áreas misionales.",
        "direction": "Servicios Integrados de Atención",
        "subdirection": "Despacho Dirección",
        "git": "GIT Gestión de Back Office",
        "decoys_directions": ["Soporte y Desarrollo Organizacional", "Pensiones", "Parafiscales"],
        "decoys_subdirections": ["Despacho Dirección", "Gestión Documental", "Operaciones"],
        "decoys_gits": ["GIT Gestión de Canales de Atención", "GIT Operaciones", "GIT Abastecimiento"],
        "explanation": "Supervisar los procesos internos de respuesta a solicitudes de cara al ciudadano y articulación operativa es rol del GIT Gestión de Back Office."
    },

    # --- DIRECCIÓN DE SEGUIMIENTO Y MEJORAMIENTO DE PROCESOS (2 casos) ---
    {
        "id": 37,
        "situation": "El equipo de ciberseguridad detectó un intento de ataque de phishing masivo dirigido a capturar credenciales de acceso de servidores públicos.",
        "direction": "Seguimiento y Mejoramiento de Procesos",
        "subdirection": "Despacho Dirección",
        "git": "GIT Seguridad de la Información",
        "decoys_directions": ["Gestión de Tecnologías de la Información", "Soporte y Desarrollo Organizacional", "Dirección General"],
        "decoys_subdirections": ["Despacho Dirección", "Infraestructura de Tecnología", "Control Interno Disciplinario"],
        "decoys_gits": ["GIT Infraestructura de Tecnología", "GIT Gestión de Procesos y Riesgos", "GIT Sistemas de Información"],
        "explanation": "Monitorear riesgos de seguridad digital, emitir políticas de protección y responder a incidentes de ciberseguridad es tarea del GIT Seguridad de la Información."
    },
    {
        "id": 38,
        "situation": "Se requiere actualizar la matriz de riesgos operacionales y el mapa de procesos de la Subdirección de Cobranzas tras la expedición de una nueva ley.",
        "direction": "Seguimiento y Mejoramiento de Procesos",
        "subdirection": "Despacho Dirección",
        "git": "GIT Gestión de Procesos y Riesgos",
        "decoys_directions": ["Estrategia y Evaluación", "Parafiscales", "Dirección General"],
        "decoys_subdirections": ["Despacho Dirección", "Planeación y Proyectos", "Cobranzas"],
        "decoys_gits": ["GIT Seguridad de la Información", "GIT Planeación y Proyectos", "GIT Control y Gestión de Datos"],
        "explanation": "Administrar el sistema de gestión de riesgos, valoración de controles y mejora continua de procesos le compete al GIT Gestión de Procesos y Riesgos."
    },

    # --- DIRECCIÓN DE ESTRATEGIA Y EVALUACIÓN (2 casos) ---
    {
        "id": 39,
        "situation": "Se debe estructurar el boletín institucional de prensa y gestionar una rueda de medios con el Director General sobre los logros de recaudo anual.",
        "direction": "Estrategia y Evaluación",
        "subdirection": "Despacho Dirección",
        "git": "GIT Comunicaciones",
        "decoys_directions": ["Servicios Integrados de Atención", "Dirección General", "Soporte y Desarrollo Organizacional"],
        "decoys_subdirections": ["Despacho Dirección", "Gestión de Canales de Atención", "Relacionamiento y Gestión Transversal"],
        "decoys_gits": ["GIT Planeación y Proyectos", "GIT Caracterización y Análisis de la Evasión", "GIT Comunicaciones Persuasivas"],
        "explanation": "La gestión de relaciones con medios, publicaciones oficiales y comunicación estratégica interna y externa le compete al GIT Comunicaciones."
    },
    {
        "id": 40,
        "situation": "Se va a construir un modelo analítico de Machine Learning y econometría para predecir qué sectores económicos presentarán mayor evasión en 2027.",
        "direction": "Estrategia y Evaluación",
        "subdirection": "Despacho Dirección",
        "git": "GIT Caracterización y Análisis de la Evasión",
        "decoys_directions": ["Parafiscales", "Gestión de Tecnologías de la Información", "Seguimiento y Mejoramiento de Procesos"],
        "decoys_subdirections": ["Despacho Dirección", "Integración del Sistema de Aportes Parafiscales", "Gestión de Datos"],
        "decoys_gits": ["GIT Gestión de Datos", "GIT Planeación y Proyectos", "GIT Sistemas de Información"],
        "explanation": "El desarrollo de modelos estadísticos para caracterizar la evasión y focalizar la fiscalización le corresponde al GIT Caracterización y Análisis de la Evasión."
    }
]

print(f"Total casos estructurados: {len(cases)}")

# Guardar cases_despacho.json
output_cases_path = "ugppiensa-game/public/assets/data/cases_despacho.json"
os.makedirs(os.path.dirname(output_cases_path), exist_ok=True)
with open(output_cases_path, "w", encoding="utf-8") as f:
    json.dump({"cases": cases}, f, ensure_ascii=False, indent=2)

print(f"Archivo guardado: {output_cases_path}")
