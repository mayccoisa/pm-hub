# Funcionalidade 02 - Análise de Correlação (Pausas vs. Métricas Operacionais)

## 🎯 Objetivo
Permitir que os gestores cruzem os dados de pausa com os tempos de atendimento e de espera para identificar "pontos de estrangulamento" operacionais.

## 📋 Requisitos

### 1. Requisitos Funcionais
* **Visualização Sobreposta/Dividida:** Capacidade de visualizar o gráfico de Pausas em paralelo ou sobreposto com:
    * **Tempo Médio de Espera:** Identificar se picos de tempo de espera ocorrem quando o volume de pausas é alto.
    * **Tempo Médio de Atendimento:** Identificar se interações longas estão acontecendo enquanto uma equipe reduzida está ativa.
* **Detecção de Picos:** Destacar as horas onde tanto o "Volume de Pausas" quanto o "Tempo de Espera" excedem a média diária.

### 2. Lógica de Implementação
* **Cruzamento de Dados:** O sistema deve escanear o log de `pausas` e o log de `chamadas/interações` para os mesmos intervalos UTC.
* **Indicador Visual:** Um "Indicador de Correlação" (ex: um badge ou alerta simples) quando mais de X% dos agentes estiverem em pausa durante um período de alto tráfego.

## 🧪 Critérios de Aceite
- [ ] O gestor consegue ver facilmente se o pico de tempo de espera das 10:00 correlaciona com um alto número de agentes em pausa.
- [ ] O dashboard fornece um "Mapa de Calor" ou resumo similar mostrando a relação entre pausas e performance.
