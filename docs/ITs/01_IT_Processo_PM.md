# Instrução de Trabalho (IT) - Processo Cíclico do Product Manager (PM)

## Objetivos
Fornecer um passo a passo estruturado para a concepção, priorização, e documentação de novos produtos e features dentro do PM-Hub. Ao seguir esta IT, o PM garante o alinhamento de negócio (Business Case) e de Produto (Product Discovery) antes de enviar para o Design e para a Engenharia.

## Escopo
Aplica-se a qualquer épico ou funcionalidade de produto (macro ou feature) a ser desenvolvida do zero ou refatorada de maneira profunda.

---

## 🛑 Passo a Passo (Workflow)

### 1. Descoberta de Produto (Product Discovery)
**Objetivo:** Entender qual é o problema e se ele vale a pena ser resolvido.
* [ ] **Avaliação do Problema:** Aplique o framework de _Jobs-to-be-Done (JTBD)_. Qual trabalho o usuário está tentando fazer que não consegue hoje com as ferramentas disponíveis?
* [ ] **Entrevistas/Validação UX:** Valide a dor com pelo menos 5 usuários-alvo da base de dados (se houver). Documente os aprendizados na raiz da documentação (`docs/produtos/[nomedoproduto]/00_Discovery.md`).
* [ ] **Análise de Competitividade:** Use o *Positioning Canvas* ou *7 Powers* (disponíveis nas Skills) para entender as alternativas concorrentes.

### 2. Priorização e Roadmap
**Objetivo:** Decidir quando (e se) algo entra na esteira de desenvolvimento.
* [ ] **Pontuação RICE:** Calcular _Reach, Impact, Confidence_ e _Effort_ da solução sugerida.
* [ ] **Impacto no OKR Maior:** Relacione a iniciativa com o _North Star Metric_ do trimestre (ex: Redução de Churn, Aumento de Receita Recorrente, Engajamento Retido).
* [ ] **Formalização:** Inserir a iniciativa na backlog (Board do Jira, Linear ou Trello) com status `To Do` / `Discovery Concluído`.

### 3. Escrita de Requisitos (Product Requirements Document - PRD)
**Objetivo:** Refinar a solução em formato legível tanto para Negócios, Design, quanto Engenharia.
* [ ] Clone o arquivo base `docs/produtos/_template.md` ou use a skill de **PRD Writer** da Inteligência Artificial do repositório.
* [ ] Assegurar a presença das seções obrigatórias:
   - *Problem Statement* & *Proposed Solution*
   - *Histórias de Usuário*
   - *Critérios de Aceite (Acceptance Criteria)*
   - *Requisitos Técnicos e de Design (Wireframing Handoff)*
   - *Métricas de Sucesso (como você saberá se deu certo?)*

### 4. Alinhamento Multidisciplinar (Kickoff / Refinamento)
**Objetivo:** Apresentar o documento gerado para o Designer e Tech Leads.
* [ ] Realizar a Cerimônia de Refinamento / Estimativa (Planning Poker).
* [ ] Quebrar o Épico (PRD) em _Tickets_ atômicos no board da Engenharia.
* [ ] Iniciar a fase de Hand-off do Design (veja [02_IT_Processo_Design.md](./02_IT_Processo_Design.md)).

## 🚨 Regra de Ouro (Golden Rule)
O PM nunca deve prescrever a tecnologia "no detalhe" (como os Devs devem programar) a menos que tenha contexto arquitetural forte, nem prescrever os pixels que o Designer vai desenhar em tela. **O papel do PM é prescrever COM CLAREZA O "O QUÊ" e "POR QUÊ", deixando o "COMO" para os líderes técnicos e designers.**
