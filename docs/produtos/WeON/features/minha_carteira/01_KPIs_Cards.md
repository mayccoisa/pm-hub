# IT Módulo 01 - KPIs e Visão Geral (Cards)

## IT-01.1: Validação do Card "Contatos Totais"
**Objetivo:** Garantir a precisão da contagem e exibição do total de contatos da carteira do usuário.
**Pré-condições:** O usuário logado deve possuir contatos atribuídos à sua carteira. Dados históricos do mês anterior devem existir para cálculo de comparação.
**Passos:**
1. Acessar a tela "Minha Carteira".
2. Visualizar o card "Contatos Totais".
**Resultados Esperados:**
- O número de contatos totais deve exibir a soma correta (ex: 160).
- A sub-métrica com ícone de "empresa" (ex: 80) deve representar corretamente a divisão ou o tipo de conta (B2B).
- O indicador de variação percentual (ex: "+3 comparado ao mês anterior") deve possuir cor verde para positivo e vermelha para negativo, refletindo o cálculo correto do crescimento/queda (no caso do design aprovado, está exibindo +3 unidades em verde).

## IT-01.2: Validação do Card "Contatos Ativos"
**Objetivo:** Verificar a contagem de contatos com atividade recente e seus sub-status.
**Passos:**
1. Visualizar o card "Contatos Ativos".
**Resultados Esperados:**
- O número total de contatos ativos (ex: 30) deve refletir exata correspondência no banco de dados.
- As tags com contagens de status específicos ("12 em andamento", "18 qualificados") devem somar o total de contatos ativos (12 + 18 = 30) e exibir os ícones correspondentes (balão de fala, fogo).
- O indicador percentual (ex: "+20% comparado ao mês anterior") deve estar com a cor correta dependendo do viés do número.

## IT-01.3: Validação do Card "Avaliação Média"
**Objetivo:** Validar o cálculo e visualização das estrelas de avaliação.
**Passos:**
1. Visualizar o card "Avaliação Média".
**Resultados Esperados:**
- A média ponderada/aritmética deve preencher visualmente as estrelas de 1 a 5 corretamente (ex: 4 estrelas cheias e 1 vazia para a média atual).
- O texto de apoio deve indicar a base de dados do cálculo (ex: "(18 avaliações)").
- Se não houver avaliações, o estado "Empty State" deve ser tratado adequadamente (ex: "Sem avaliações").

## IT-01.4: Validação do Card "Valor Total"
**Objetivo:** Validar a formatação financeira e o acúmulo financeiro da carteira.
**Passos:**
1. Visualizar o card "Valor Total".
**Resultados Esperados:**
- O valor absoluto deve seguir o padrão da moeda local com separador de milhares e vírgula de centavos em tamanho menor (Ex: "R$ 999.999**,00**").
- O comparativo temporal de mês (Ex: "+5%") deve seguir o cálculo de aumento ou declínio da carteira e aplicar coloração apropriada verde/vermelho.

## IT-01.5: Filtro de Período de Atividade
**Objetivo:** Testar se a mudança do filtro de período recalcula os KPIs.
**Passos:**
1. No canto superior direito da seção, localizar o Select "Período de Atividade" (Padrão: "Este Mês").
2. Alterar para outro valor (ex: "Últimos 30 dias", "Mês Passado").
**Resultados Esperados:**
- As informações nos 4 cards de KPI devem ser carregadas e atualizadas na interface sem quebrar o layout, recarregando apenas os dados pertinentes ao período.
