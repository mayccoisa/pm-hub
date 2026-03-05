# PRD: Validador de Tom de Feedback (Copilot do Gestor)

## 1. Problem Statement
**Situação Atual:** Dar feedback corretivo ou focado em melhoria é uma das tarefas mais estressantes para a liderança média (Middle Management). Muitas vezes, pela correria do dia a dia, o texto sai agressivo, mal interpretado ou focado puramente na falha, sem apontamento construtivo.
**Dores do Usuário (Gestor):**
- "Eu sei o que o colaborador fez de errado, mas não sei como colocar em palavras sem desmotivá-lo."
- O medo de atrito leva gestores a evitarem registrar feedbacks no sistema, deixando o RH cego.
**Impacto no Negócio:** Ciclos de avaliação geram ansiedade e potenciais desligamentos por má comunicação. RH perde tempo mediando conflitos que nasceram puramente de ruídos de comunicação escrita.

## 2. Proposed Solution
**Visão Geral:** Um assistente integrado à tela de redação de feedback (um "Copilot" ou semelhante ao Grammarly) que atua como um Validador de Tom. O gestor pode literalmente vomitar as ideias num rascunho e pedir para a IA reescrevê-lo utilizando os princípios da Comunicação Não-Violenta (CNV), focando em fatos, sentimentos, necessidades e pedidos.
**Histórias de Usuário:**
- **US03:** Como **Gestor**, eu quero que a plataforma analise o rascunho do feedback que acabei de escrever e me sugira uma versão reescrita usando um tom mais empático e focado na evolução, para que a mensagem corretiva seja absorvida de forma positiva pelo colaborador liderado.
**Métricas de Sucesso:**
- Taxa de adoção: 60% dos feedbacks "Para Melhorar" usando a funcionalidade pelo menos uma vez antes do envio.
- Queda nas reclamações de "clima pesado" baseadas no formulário pós-feedback (Pulse Survey).

## 3. Requirements
**Requisitos Funcionais:**
- Na tela de criação de Feedback, inserir um botão flutuante ou abaixo do textarea do tipo `✨ Melhorar Tom com IA`.
- Ao clicar, um overlay (Modal ou Painel Lateral) apresenta o texto *Original* versus o *Texto Sugerido pela IA*.
- O gestor pode: "Aceitar a Sugestão" (substituindo o texto no campo), "Recusar", ou editar manualmente em cima da sugestão da IA.
**Requisitos Técnicos:**
- API Route `/api/feedback/improve-tone` (POST).
- **Integração IA:** A IA recebe a `string` bruta. 
- **Prompt da IA (Backend):** "Você é um especialista em RH e coach executivo treinado em Comunicação Não-Violenta (CNV)... Receba o texto bruto. Reescreva o texto mantendo o ponto central construtivo (a crítica), mas removendo tons acusatórios, usando a empatia e focando em fatos e evolução contínua... Retorne APENAS o texto reescrito. Seja direto e não invente fatos que não estão no texto original."
**Requisitos de Design:**
- UI de visualização de diferenças (Diff View). O texto não pode sumir e ser trocado do nada, a fim de não assustar o usuário. Deve haver transparência no que a IA alterou.

## 4. Implementation
**Dependências:** 
- Entidade `Feedback` mapeada no banco de dados.
- CRUD básico de Feedbacks pronto.
**Estimativa de Cronograma:** 1 Sprint. (Maior esforço no UI/UX do DiffViewer e Prompt Tuning).
**Recursos Necessários:** Engenheiro Frontend e Engenheiro Backend.

## 5. Risks and Mitigations
- **Risco:** A IA alterar o real significado da crítica, omitindo o comportamento problemático apenas para ser "legal". O feedback perde o valor corretivo ("Toxic Positivity").
  - **Mitigação 1:** Afinar severamente o prompt base para enfatizar que a crítica e o apontamento ao erro devem *permanecer claros*.
  - **Mitigação 2:** O gestor deve ser forçado a revisar (UI requer ação explícita de `Substituir o meu texto`). A responsabilidade do clique final é e deve ser mantida com o humano.
