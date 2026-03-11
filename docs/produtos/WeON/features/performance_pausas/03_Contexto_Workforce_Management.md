# Contexto de Workforce Management (WFM)

O Workforce Management (WFM) é o processo de equilibrar de forma otimizada a carga de trabalho (demanda de chamadas) com os recursos disponíveis (agentes). No WeON, as funcionalidades de "Performance e Pausas" são ferramentas críticas de diagnóstico para gestores de WFM.

## 🎯 Por que correlacionar Pausas com Performance?

No WFM, o planejamento é baseado em modelos como o **Erlang C**, que prevê a necessidade de pessoal para atingir um determinado Nível de Serviço. Quando aglutinamos pausas de forma desordenada, quebramos a premissa de "dimensionamento ideal".

### Pilares Fundamentais:

1.  **Aderência (Adherence):** 
    - Mede o quanto os agentes estão seguindo seus horários previstos de pausa. 
    - **No WeON:** O gráfico de "Distribuição de Pausas" ajuda a identificar se há excesso de pessoas em pausa simultaneamente fora do planejado (ex: muitos agentes em 'NR17' ao mesmo tempo).

2.  **Ocupação (Occupancy):**
    - A porcentagem de tempo que os agentes logados estão realmente lidando com contatos ou fazendo pausas de trabalho.
    - **No WeON:** O gráfico de "Análise de Correlação" mostra o momento em que a ocupação atinge um limite crítico, forçando o aumento do TME.

3.  **Dimensionamento vs. Demanda (Shrinkage):**
    - Todo call center prevê uma margem de ausência (pausas, treinamentos, férias).
    - **Gargalo:** Se o volume de pausas excede o *shrinkage* planejado, ocorre o **Estrangulamento Operacional**.

## 📊 O Papel dos Gráficos WeON no WFM

### 1. Análise de Correlação como Sensor de SL
O gráfico de correlação funciona como um sistema de alerta antecipado. Quando a linha de TME descola da base e sobe paralelamente ao volume de pausas, o gestor de WFM identifica que o SL (Nível de Serviço) está sendo comprometido por falha de aderência ou dimensionamento insuficiente para aquele pico de atendimento.

### 2. Distribuição de Pausas para Ajuste de Escala
Ao analisar a distribuição, o gestor pode concluir que determinados tipos de pausa (como Feedback ou Treinamento) estão sendo realizados em horários de pico, permitindo o reajuste das janelas de WFM para os próximos dias.

---
*Este documento serve como guia estratégico para a utilização das ferramentas de performance do WeON sob a ótica de gestão de força de trabalho.*
