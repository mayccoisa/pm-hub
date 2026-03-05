# PRD: Assistente de PDI Fracionado (Feature PDI Conversacional)

## 1. Problem Statement
**Situação Atual:** A maioria das plataformas de RH exige que o colaborador preencha blocos de texto enormes e complexos ao criar um Plano de Desenvolvimento Individual (PDI).
**Dores do Usuário:**
- O colaborador geralmente trava ao tentar traduzir o seu "Objetivo Maior" em metas mensuráveis (OKRs) e mais ainda ao tentar definir as ações práticas diárias/semanais (fracionar o PDI). Acaba se tornando um documento conceitual e não acionável.
**Impacto no Negócio:** A falta de engajamento no PDI resulta em colaboradores estagnados, avaliações de desempenho que focam apenas em "tapar buracos" em vez de evoluir carreiras, e a sensação de que o ciclo de avaliação do RH não tem valor real.

## 2. Proposed Solution
**Visão Geral:** O "Assistente de PDI Fracionado" resolve isso através de uma interface baseada em Chat, guiada por uma Inteligência Artificial. Em vez de preencher formulários com dezenas de campos, o colaborador interage como se estivesse com um Mentor / HR Business Partner.
**Histórias de Usuário:**
- **US01:** Como **Colaborador**, eu quero interagir com uma IA através de uma interface de chat na Web para criar meu PDI, informando apenas onde quero chegar (livre texto), para que eu obtenha marcos (KRs) mensuráveis e tarefas tangíveis mensais sem precisar planejar sozinho.
**Métricas de Sucesso:**
- Redução no tempo médio de preenchimento/criação de um ciclo de PDI de >2h para <15 min.
- Aumento de 30% na taxa de "PDIs Criados e Salvos" ao fim do ciclo de planejamento na plataforma.

## 3. Requirements
**Requisitos Funcionais:**
- Tela com um Canvas Principal de Chat (estilo janela interativa).
- Input de texto onde o usuário digita seu objetivo livre. Ex: "Quero me tornar Senior Fullstack e aprender arquitetura Serverless".
- A saída (output) da IA deve ser formatada estruturada, e não apenas corrida (ex: Retornar estruturado em JSON para o Front exibir cards).
  - 1 Objetivo Macro
  - 3 Resultados Chave (KR's)
  - Lista de Tarefas Semanais Sugeridas
- Um botão "Adicionar ao meu PDI" nas respostas, que então salva esses dados no banco atrelados ao usuário logado.
**Requisitos Técnicos:**
- **Prompting:** O System Prompt do backend deve forçar o modelo da OpenAI a responder em formato JSON delimitado garantindo previsibilidade. Prompt Base (Contexto): "Você é um Career Coach Expert, quebre metas vagas em OKRs estruturados da seguinte forma...".
- **Backend:** Rota `/api/chat/pdi` com stream (Server-Sent Events) ou espera convencional caso seja processamento em background.
**Requisitos de Design:**
- UI não intimidatória. Visual inspirado no Notion AI ou ChatGPT.
- Respostas da IA devem apresentar os "Cards de PDI" e não apenas um blocão de texto Markdown para garantir maior usabilidade.

## 4. Implementation
**Dependências:** 
- A fundação do projeto (Épico Macro 01) deve estar estruturada.
- Integração da API da OpenAI já configurada no backend para uso na Rota.
**Estimativa de Cronograma:** 1 Sprint ativa (Design da UI de chat + Integração de LangChain/API de LLM + Escrita no BD Prisma).
**Recursos Necessários:** Time Full-Stack e acesso API OpenAI.

## 5. Risks and Mitigations
- **Risco:** Alucinação no LLM estruturando metas impossíveis ou retornando um JSON quebrado (o Frontend daria erro ao tentar ler).
  - **Mitigação:** Usar ferramentas de *schema validation* na requisição à OpenAI (ex: Function Calling / Structured Outputs - usando a feature oficial da OpenAI de `response_format: json_object` ou JSON Schema). Adicionar o Zod no backend para validar o retorno.
- **Risco:** O colaborador refutar totalmente a meta gerada.
  - **Mitigação:** Permitir que o Chat seja interativo. O colaborador pode dizer "Não gostei dessa tarefa 2, pode trocar por algo mais simples?" antes de clicar em "Adicionar ao meu PDI".
