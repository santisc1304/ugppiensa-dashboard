# -*- coding: utf-8 -*-
"""
Script para generar casos_y_preguntas.md con la totalidad de los 40 casos y 40 preguntas
para revisión y validación de viabilidad por parte del usuario.
"""
import json

with open("ugppiensa-game/public/assets/data/cases_despacho.json", "r", encoding="utf-8") as f:
    cases_data = json.load(f)["cases"]

with open("ugppiensa-game/public/assets/data/questions_lluvia.json", "r", encoding="utf-8") as f:
    questions_data = json.load(f)["questions"]

md_lines = []
md_lines.append("# Catálogo Oficial de Casos y Preguntas Institucionales — UGPpiensa")
md_lines.append("## Módulos: Despacho Ágil (Ruteo) y Lluvia de Respuestas (Círculos Flotantes)")
md_lines.append("")
md_lines.append("> **Propósito:** Documento de revisión técnica y de viabilidad temática. Contiene 40 casos de ruteo institucional paso a paso (Dirección ➔ Subdirección ➔ GIT) y 40 preguntas multi-respuesta con mínimo 3 o más respuestas correctas cada una, basadas en la estructura orgánica de la UGPP y la Resolución 0059 del 28 de enero de 2026.")
md_lines.append("")
md_lines.append("---")
md_lines.append("")
md_lines.append("## Parte 1: Banco de 40 Casos para 'Despacho Ágil' (Simulador de Ruteo)")
md_lines.append("")
md_lines.append("En este minijuego, al jugador le llega una situación ciudadana o requerimiento institucional y debe rutearlo correctamente en 3 pasos sucesivos contra reloj: **1. Dirección** ➔ **2. Subdirección** ➔ **3. Grupo Interno de Trabajo (GIT)**.")
md_lines.append("")

for c in cases_data:
    md_lines.append(f"### Caso #{c['id']:02d}: {c['situation']}")
    md_lines.append(f"- **Dirección Correcta:** `{c['direction']}`")
    md_lines.append(f"- **Subdirección Correcta:** `{c['subdirection']}`")
    md_lines.append(f"- **GIT Asignado:** `{c['git']}`")
    md_lines.append(f"- **Opciones Señuelo de Dirección:** {', '.join(c.get('decoys_directions', []))}")
    md_lines.append(f"- **Opciones Señuelo de Subdirección:** {', '.join(c.get('decoys_subdirections', []))}")
    md_lines.append(f"- **Opciones Señuelo de GIT:** {', '.join(c.get('decoys_gits', []))}")
    md_lines.append(f"- **Justificación Técnico-Operativa:** {c['explanation']}")
    md_lines.append("")

md_lines.append("---")
md_lines.append("")
md_lines.append("## Parte 2: Banco de 40 Preguntas para 'Lluvia de Respuestas'")
md_lines.append("")
md_lines.append("En este minijuego, aparece una pregunta institucional en pantalla y flotan círculos interactivos con respuestas correctas e incorrectas. **Cada pregunta posee 3 o más respuestas correctas**. El jugador debe tocar únicamente las respuestas correctas antes de que desaparezcan (7 segundos en pantalla).")
md_lines.append("")

for q in questions_data:
    md_lines.append(f"### Pregunta #{q['id']:02d}: {q['question']}")
    md_lines.append("#### Opciones:")
    for opt in q["allOptions"]:
        icon = "✅ **(CORRECTA)**" if opt["correct"] else "❌ *(Incorrecta / Distractor)*"
        md_lines.append(f"- {icon} {opt['text']}")
    md_lines.append("")

output_md = "casos_y_preguntas.md"
with open(output_md, "w", encoding="utf-8") as f:
    f.write("\n".join(md_lines))

print(f"Archivo markdown generado exitosamente: {output_md}")
