---
name: analise-competitiva-template-anselmo
description: Use when asked to run a competitive analysis based on Anselmo's template. Helps research a competitor's recent activities and format them into a structured, actionable report in Portuguese.
---

# Análise Competitiva - Template Anselmo

**Purpose**: This skill instructs the agent to perform an in-depth, structured competitive analysis following the "Carreira em (R)evolução" workflow. It researches a specific competitor, extracts relevant business intelligence, and generates a structured report in Brazilian Portuguese.

## Inputs
Before starting the analysis, you must know:
1. **Companhia Cliente (Sua Empresa)**: A empresa para a qual a análise está sendo feita (ex: empresa atual do projeto). Essa informação serve apenas de contexto para a análise de impacto.
2. **Competidor**: O concorrente específico a ser pesquisado.

## Workflow Execution

### Passo 1: Deep Research (Pesquisa Profunda)
Use the `search_web` and related tools to conduct thorough research focusing **EXCLUSIVELY** on the competitor. 
Search for the most recent and relevant news articles, press releases, financial reports, and social media posts (like LinkedIn) related to the competitor.

Focus on information that could potentially impact the client company, such as:
- Lançamentos de produtos ou anúncios (New product launches)
- Fusões, aquisições ou parcerias (Mergers, acquisitions, or partnerships)
- Mudanças na liderança ou estrutura (Changes in leadership)
- Desempenho financeiro e share de mercado (Financial performance)
- Questões regulatórias ou legais (Regulatory issues)
- Avanços tecnológicos ou inovações (Technological advancements)
- Campanhas de marketing ou rebranding (Marketing campaigns)
- Expansão para novos mercados (Expansion into new markets)

> **Regra de Honestidade**: Se você não encontrar informações relevantes sobre o competidor, não invente fatos. Aja com honestidade e reporte a falta de informações atualizadas.

### Passo 2: Avaliação e Geração do Relatório
Compile the findings into a highly structured report. The output must strictly follow these rules:
- **Tone**: Neutral, factual, and professional. Avoid alarmist language, hyperbole, or emotional terms.
- **Impact Evaluation**: Connect the competitor's actions to potential impacts on the client company factually. Consider both challenges and opportunities.
- **Language**: The entire report **must** be in **Brazilian Portuguese**.

## Estrutura do Relatório (Output Format)
Generate your response following this exact structure and formatting:

`Análise das Atividades Recentes da empresa [NOME DO COMPETIDOR]`

**1. Resumo Executivo**
Forneça uma visão geral factual e neutra das atividades recentes observadas do competidor. Limite-se apenas ao que foi realmente observado, sem julgamentos sobre níveis de ameaça. Mantenha breve, factual e equilibrado. Se nenhuma informação foi encontrada, declare explicitamente.

**2. Principais Desenvolvimentos**
Liste e descreva os eventos ou mudanças recentes mais importantes do competidor, organizados por categoria (ex: Lançamentos de Produto, Desempenho Financeiro, Parcerias). Utilize bullet points (•).

**3. Impactos Potenciais**
Para cada desenvolvimento chave, forneça uma análise equilibrada de como isso se relaciona ao cenário de mercado. Inclua tanto desafios potenciais quanto oportunidades para a **[SUA EMPRESA]** sem exagerar nas ameaças.

**4. Recomendações**
Sugira ações potenciais ou estratégias que a **[SUA EMPRESA]** poderia considerar, focando em passos construtivos em vez de reações puramente defensivas.

**5. Fontes**
Liste os links e fontes de informação utilizados na sua pesquisa de forma clara e organizada.

---

**Agent Instructions for running this skill**:
When invoked to use this template, follow the steps above. If the user hasn't specified the competitor or the client company, politely ask for them first. 
Once the data is analyzed, you must:
1. Deliver the final report directly in the chat using the required structure.
2. Save this final report as a markdown file inside the product's competitive analysis history folder (e.g., `docs/produtos/[NOME_PRODUTO]/analise_competitiva/analises_realizadas/[YYYY-MM-DD_competitor]/resumo_anselmo.md`). Make sure to create the required folders if they don't exist yet.
