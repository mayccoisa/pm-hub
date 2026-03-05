---
name: competitor-analysis
description: Use when asked to "analyze competitors", "track competitor updates", "compare features", "competitor landscape", or "what are our competitors doing". Helps Product Managers systematically track and analyze competitors' social media, websites, and feature updates based on specific criteria.
---

# Competitor Analysis Skill

## Objective
Perform a structured competitor analysis based on a local list of competitors defined within each project's folder. This skill helps Product Managers identify what competitors are doing, new feature launches, market positioning, and recent social media activity, outputting the results as a detailed analysis and a comparison table.

## When to use this skill
- you want to analyze the competitors for a specific product or project.
- you want to know what the competitors of a given project have launched recently.
- you want to compare specific criteria (e.g., pricing, target audience, key features) across the competitors listed for a project.

## Instructions

### 1. Enforce Folder Structure & Gather Information
When you invoke this skill, ensure that you follow this specific directory structure for the current product:
- **Identify the Product**: Ask the user or infer which product they are referring to (e.g., `WeON`, `plataforma_rh_ia`).
- **Setup Competitive Analysis Directory**: Ensure there is a folder at `docs/produtos/[NOME_PRODUTO]/analise_competitiva/`. If it doesn't exist, create it.
- **Maintain the Competitors List**: Inside that folder, locate or create `concorrentes.md`. This file MUST contain a table listing all the product's competitors, including:
  - Nome do Concorrente (Competitor Name)
  - URLs / Social Media Handles
  - Segmento de Atuação (The specific market segment they operate in)
- **Identify Analysis Goal**: Understand what needs to be analyzed (e.g., pricing model, latest features, recent marketing campaigns, or a general update on all competitors on the list).

### 2. Execution Steps
1. **Data Collection**:
   - Read the `concorrentes.md` file to identify the competitors and their specifics.
   - Use the `search_web` and `read_url_content` tools to find recent news, landing page updates, pricing changes, or social media activities for the targeted competitor(s).
2. **Analysis Validation**:
   - Evaluate the gathered data against any specific criteria the user requested or standard metrics (product positioning, new features, changes in narrative).
3. **Save Output Artifacts**:
   - Ensure the existence of `docs/produtos/[NOME_PRODUTO]/analise_competitiva/analises_realizadas/`.
   - Create a specific folder for the current analysis run using the current date: `docs/produtos/[NOME_PRODUTO]/analise_competitiva/analises_realizadas/[YYYY-MM-DD]/` (append a descriptive suffix if analyzing a specific competitor, e.g., `2026-03-05_competitorA`).
   - Save all detailed findings, raw data collected, and deep-dive comparisons as separate markdown files inside this date-specific folder.
4. **Generate Final Summary**:
   - At the end of the process, create a final summary document named `resumo_analise.md` inside the date-specific folder. This document should synthesize everything you found and analyzed in this run.

### 3. Output Format for Final Summary (`resumo_analise.md`)
The `resumo_analise.md` output **MUST** strictly follow this structure:

#### 1. Resumo Executivo (Executive Summary)
- 2-3 sentences summarizing the biggest moves or trends discovered during this specific analysis run.

#### 2. Tabela Comparativa (Comparative Table)
- A markdown table highlighting the key findings. Example columns: Competitor, Pricing Changes, Recent Launches, Positioning Shifts.

#### 3. Análise Detalhada (Detailed Analysis)
For each competitor analyzed in this run, provide a breakdown:
- **Foco / Posicionamento**: Current market positioning.
- **Atividade Recente**: Notable campaigns, news, or feature launches over the last few months.
- **Avaliação de Critérios**: Bullet points evaluating them against requested specific criteria.

#### 4. Recomendações Estratégicas (Strategic Recommendations)
- 2-3 actionable insights and recommendations for the Product Manager based on the current competitive analysis findings.
