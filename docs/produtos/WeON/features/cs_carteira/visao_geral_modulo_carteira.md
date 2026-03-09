# 📊 Visão Geral: Módulo "Minha Carteira" (Customer Success)

Este documento descreve a finalidade, a estrutura e o comportamento geral de interface do módulo **"Minha Carteira"** dentro do WeON. As melhorias e novas funcionalidades atreladas a esta tela serão desmembradas em tarefas (PRDs) específicas.

## 🎯 Objetivo da Tela
O módulo "Minha Carteira" é o espaço de trabalho focado no profissional de Relacionamento e Customer Success (CS). Ele tem como objetivo agrupar e organizar todos os contatos que estão sob a responsabilidade (carteira) de um atendente ou gestor específico, permitindo uma gestão ativa e o acompanhamento do ciclo de vida desse cliente.

## 🧩 Estrutura da Interface

A tela é dividida logicamente em três seções principais:

### 1. Painel de Indicadores (Dashboard Sintético)
Localizado no topo da tela, exibe 3 Totalizadores (Cards) focados nas métricas-chave gerais do profissional:
* **Carteira de contatos:** Mostra o volume absoluto de entidades sob responsabilidade do usuário, comparando com o período anterior (ex: semana anterior).
* **Contatos conversados:** Exibe a taxa de penetração da carteira (Quantos foram abordados / Total da base), em números absolutos e em porcentagem.
* **Avaliação da carteira:** Um termômetro de qualidade (rating de 1 a 5 estrelas) referente às notas de CSAT (Customer Satisfaction Score) da base daquele analista.

### 2. Abas de Segmentação (Filtros Rápidos)
Abaixo dos indicadores, há um menu de navegação em abas para que o usuário alterne rapidamente o foco do seu trabalho diário:
* **MEUS CONTATOS:** Listagem *default* agrupando todos os registros pertencentes à carteira.
* **SEM INTERAÇÕES:** (Adormecidos) Filtro focado em registros onde não há histórico de troca de mensagens recente ou agendamentos. Usado para reengajamento.
* **RISCO:** (Alto Risco) Filtro inteligente que agrupa usuários com probabilidade matemática de Churn (avaliações negativas, longo período sem contato, etc.).
* **ATIVOS:** (Novo - Melhoria) Aba dedicada a listar exclusivamente as entidades que estão com *atendimentos em andamento* no exato momento da visualização.

### 3. Listagem de Registros (A Tabela)
A área de dados exibe os registros paginados com as seguintes colunas chave de contexto:
* **Nome / Entidade:** O nome do contato ou da empresa.
* **Tags:** Etiquetas visuais (labels coloridas) atribuídas ao registro (Ex: "Lead Morno", "Atenção").
* **Último contato:** Temporalidade da última mensagem trocada (Ex: "há 12 dias").
* **Última qualificação:** Traz o *caminho* da tabulação dada ao encerrar o atendimento mais recente (Ex: `FALEI com o cliente > Produto`). Se houver um atendimento *ativo*, a célula indicará essa condição *Em Andamento*.
* **Avaliação:** O rating (estrelas) dado individualmente por aquele cliente na última pesquisa CSAT.
* **Risco de Churn:** Um indicador visual (gráfico de barras ou gradiente de cores) escalonando o nível de insatisfação/risco de perda da conta.

---

## 🛠️ Desdobramento de Funcionalidades
Para as próximas Sprints, a evolução deste módulo será dividida nas seguintes tarefas de implementação:

1. **[Tarefa 1 B2B] Visão por Empresas:** Permitir o agrupamento da listagem e dos indicadores usando a Empresa (CNPJ) como entidade centralizadora (B2B), em vez do Contato (Pessoa Física).
2. **[Tarefa 2 Real-Time] Interações em Andamento:** Adição da aba "Ativos" e indicadores visuais nas linhas da tabela para mapear quando há tickets com troca de mensagens ocorrendo simultaneamente à análise do CS.
