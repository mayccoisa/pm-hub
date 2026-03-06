# IT Módulo 02 - Gráficos Analíticos

## IT-02.1: Validação do Gráfico "Risco vs. Valor"
**Objetivo:** Assegurar que os contatos estão sendo alocados corretamente nas faixas de risco de acordo com o valor financeiro associado.
**Pré-condições:** Filtro principal estar setado para carregar contatos visíveis na carteira.
**Passos:**
1. Acessar "Minha Carteira" e descer até a seção de gráficos.
2. Identificar o gráfico de barras verticais com subtítulo: "Concentração de valores da carteira por risco de churn".
3. Verificar a correspondência das colunas e passar o cursor do mouse sobre uma das barras (Hover).
**Resultados Esperados:**
- O Eixo X deve ordenar os níveis de risco sequencialmente: "Não medido", "Muito baixo", "Baixo", "Médio", "Alto", "Crítico", "Adormecido".
- O Eixo Y deve exibir valores financeiros formatados proporcionalmente (Ex: 1.000, 2.500, 5.000, 7.500, 10.000).
- Cada barra deve ter uma cor semântica fixa designada no Layout (Cinza claro, Verde musgo, Azul, Laranja, Laranja forte, Vermelho, Cinza chumbo).
- O tooltip, em caso de interação de hover, deve revelar o montante total financeiro alocado na respectiva categoria.

## IT-02.2: Validação do Gráfico "Engajamento vs. Valor"
**Objetivo:** Verificar a distribuição dos contatos segundo a régua de categorização de engajamento do cliente.
**Passos:**
1. Identificar o gráfico "Engajamento vs. Valor" (Concentração de valores da carteira por categorização de engajamento).
2. Comparar as categorias listadas.
**Resultados Esperados:**
- O Eixo X deve apresentar os níveis de engajamento: "Inerte", "Passivo", "Ativo", "Engajado", "Promotor".
- As barras devem refletir graficamente a gradação de cores aprovada (Azul claro evoluindo para um Azul marinho/Escuro).
- O gráfico deve atualizar em tempo real quando as métricas da carteira forem filtradas por outro período geral.
- Nenhum dado de contato categorizado de forma inválida deve romper (quebrar) a renderização do frontend (Ex: NaN ou dados não mapeados omitidos adequadamente da renderização).
