# PRD: Resolução de Feedback em PDI (Plano de Ação Inteligente)

## 1. Problem Statement
**Situação Atual:** A maioria das avaliações de desempenho ou de ciclos de feedback 360 aponta os "Gaps" (lacunas) do colaborador (ex: "Precisa melhorar a comunicação em público" ou "Falta visão sistêmica"). O problema é que o feedback termina aí. O colaborador o recebe passivamente e não sabe o que fazer com aquilo na segunda-feira de manhã.
**Dores do Usuário (Colaborador):**
- "Ok, meu gestor disse que eu preciso ser mais analítico. Mas o que eu faço na prática para demonstrar isso?"
**Impacto no Negócio:** Ciclos de Feedback são vistos como punitivos ou teóricos. O colaborador repete o erro no próximo ciclo porque não teve a capacidade de tangibilizar a melhoria.

## 2. Proposed Solution
**Visão Geral:** Um botão acionável ao lado de cada feedback do tipo "Pontos a Melhorar". Ao clicar nele, a Inteligência Artificial entra como um Coach, lendo o feedback recebido e propondo diretamente um Mini Plano de Ação (3 passos) para resolver aquele Gap. Esse plano pode ser enviado diretamente para o PDI do usuário.
**Histórias de Usuário:**
- **US04:** Como **Colaborador**, ao receber um feedback restritivo ou sobre pontos de melhoria, quero que o sistema me sugira 3 ações/micro-tarefas claras para iniciar a mudança daquele comportamento, podendo adicioná-las diretamente às metas do meu PDI.
**Métricas de Sucesso:**
- Taxa de conversão: % de Feedbacks Restritivos lidos que se transformaram em pelo menos 1 tarefa no PDI do usuário.
- Feedback de Qualidade: Usuários marcando "Útil" nas sugestões da IA.

## 3. Requirements
**Requisitos Funcionais:**
- Na tela de navegação de "Feedbacks Recebidos", se a categoria do feedback for `IMPROVEMENT` (Melhoria), exibir botão `💡 Como melhorar isso?` ou `Criar Plano de Ação`.
- Ao clicar, o sistema deve apresentar estado de *Loading* (Skeleton ou Spinner).
- A IA retorna uma lista delimitada de exatas 3 tarefas curtas, objetivas e práticas aplicáveis à rotina de trabalho.
- Cada item retornado pela IA tem um checkbox ou um botão secundário: `[+] Adicionar ao meu PDI` (se conectando com as rotas criadas na Feature 02).
**Requisitos Técnicos:**
- API Route `/api/feedback/action-plan` (POST).
- **Prompt da IA (Backend):** O prompt deve receber a String do Feedback. "Analise o seguinte feedback corretivo. Retorne 3 tarefas muito práticas, curtas (até 10 palavras), de nível tático, que uma pessoa no contexto corporativo pode fazer amanhã para começar a melhorar esse ponto. Responda em formato estruturado (JSON array de strings)."
- Conexão com a funcionalidade de PDI para inserção atrelada ao `user_id`.
**Requisitos de Design:**
- UI de expansão em `Accordion` logo abaixo do card do Feedback, não sobrepondo a tela inteira, para manter o contexto visual da leitura do feedback.

## 4. Implementation
**Dependências:** 
- Entidades do DB (Feedback e PDI) concluídas pelo Épico Macro 01.
- Assistente de PDI (Feature 02) criado, pois aproveita a mesma lógica de gravação no PDI.
**Estimativa de Cronograma:** 1 Sprint. (Foco em conectar a saída do Feedback com a entrada do PDI).
**Recursos Necessários:** Time Full-Stack.

## 5. Risks and Mitigations
- **Risco:** Latência. Se o feedback for muito longo, a estruturação de ações pela IA pode demorar acima de 5 segundos.
  - **Mitigação:** Como não é um Chat, pode-se usar animações de "IA Pensando" na UI para segurar a ansiedade do usuário. Otimizar a chamada para modelos mais rápidos, como o `gpt-4o-mini`, pois a tarefa de fracionar tarefas é simples e não demanda o raciocínio complexo profundo do modelo maior.
- **Risco:** O colaborador tentar gerar plano de ação a partir de Feedbacks tóxicos (que apenas xingam ou que não tem pontuação profissional objetiva, caso fujam da moderação). A IA não terá material base.
  - **Mitigação:** Incluir no prompt base caso o texto seja ininteligível ou puramente vazio de contexto profissional: "Desculpe, este feedback é muito vago para gerar um plano. Sugerimos marcar um 1:1 com seu gestor para alinhar.".
