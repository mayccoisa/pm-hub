# Funcionalidade 02 - Análise de Correlação (Pausas vs. Métricas Operacionais)

## 🎯 Objetivo
Permitir que os gestores cruzem os dados de pausa com os tempos de atendimento e de espera para identificar "pontos de estrangulamento" operacionais, correlacionando comportamento de pausas com **Nível de Serviço (SL)** e **Ocupação**.

> [!NOTE]
> Veja o [Contexto de WFM](03_Contexto_Workforce_Management.md) para entender como este gráfico diagnostica falhas de dimensionamento.

## 📋 Requisitos

### 1. Requisitos Funcionais
* **Visualização Sobreposta/Dividida:** Capacidade de visualizar o gráfico de Pausas em paralelo ou sobreposto com:
    * **Tempo Médio de Espera:** Identificar se picos de tempo de espera ocorrem quando o volume de pausas é alto.
    * **Tempo Médio de Atendimento:** Identificar se interações longas estão acontecendo enquanto uma equipe reduzida está ativa.
* **Filtragem Sincronizada:** Atua como o controlador primário dos filtros de Data e Hora. A mudança nestes parâmetros deve atualizar instantaneamente tanto este gráfico quanto o de 'Distribuição de Pausas' posicionado abaixo.
* **Detecção de Picos:** Destacar as horas onde tanto o "Volume de Pausas" quanto o "Tempo de Espera" excedem a média diária.
* **Análise Comparativa Temporal:** Permitir a comparação direta do fluxo de hoje com o de períodos anteriores (ex: 'Mesmo dia na semana passada') para identificar se picos de espera recorrentes são causados por padrões excessivos de pausa.

### 2. Requisitos de Layout
* **Posicionamento:** Este deve ser o gráfico principal da seção, aparecendo no **topo** do dashboard de performance (antes da distribuição por tipo de pausa).

### 2. Lógica de Implementação
* **Cruzamento de Dados:** O sistema deve escanear o log de `pausas` e o log de `chamadas/interações` para os mesmos intervalos UTC.
* **Indicador Visual:** Um "Indicador de Correlação" (ex: um badge ou alerta simples) quando mais de X% dos agentes estiverem em pausa durante um período de alto tráfego.

## 🖼️ Wireframe (Média Fidelidade - Dashboard Unificado)
![Wireframe Unificado de Performance e Pausas](assets/wireframe_unificado.png)
*Nota: Este é o gráfico de topo que controla o filtro sincronizado para a 'Distribuição de Pausas'.*

## 🧪 Critérios de Aceite
- [ ] O gestor consegue ver facilmente se o pico de tempo de espera das 10:00 correlaciona com um alto número de agentes em pausa.
- [ ] O dashboard fornece um "Mapa de Calor" ou resumo similar mostrando a relação entre pausas e performance.
