# Instrução de Trabalho (IT) - Processo do Product Owner (PO) e Tipagem de Tarefas

## Objetivos
Padronizar como o Product Owner (PO) divide, estrutura e documenta o trabalho que chega para o time de Engenharia e Design. Uma taxonomia clara evita que o time se perca sobre o impacto e o tamanho do que está sendo construído.

## Escopo
Aplica-se a toda criação e refinamento de tickets no board (Jira, Linear, Trello, etc.) que envolvam o ciclo de desenvolvimento de software.

---

## 🛑 Tipagem de Tarefas e Hierarquia

Todo o trabalho deve ser categorizado primariamente em um dos três níveis abaixo. O PO é o guardião dessa estrutura.

### 1. Épico (Epic)
**O que é:** O agrupador macro de uma nova funcionalidade ou grande iniciativa. Um épico é grande demais para ser entregue em uma única Sprint e deve ser quebrado em Features ou User Stories menores.
**Objetivo do Épico:** Dar o norte estratégico e o contexto de negócio da iniciativa.
**O que deve conter na descrição:**
* **Objetivo de Negócio:** O que queremos alcançar resolvendo esse épico? (Ex: Aumentar conversão).
* **Personas Alvo:** Quem vai usar essa funcionalidade macro? (Ex: Usuário Final, Administrador).
* **Métricas de Sucesso / Uso:** Como saberemos que o épico teve sucesso após lançado? (Ex: 10% da base utilizando ativamente por semana).
* **Escopo Macro (In/Out):** O que faz e o que *não* faz parte da entrega final.

### 2. Funcionalidade (Feature / Story)
**O que é:** Uma tarefa que entrega um pedaço tangível de uma nova funcionalidade de ponta a ponta (UI + Backend). Deve caber dentro de uma Sprint e geralmente pertence a um Épico pai.
**Objetivo da Feature:** Entregar valor utilizável para o usuário. 
**O que deve conter na descrição:**
* **Contexto Rápido:** Uma linha ligando esta tarefa ao épico maior.
* **User Story:** "Como [persona], eu quero [ação] para que [motivo]".
* **Critérios de Aceite (Acceptance Criteria):** Regras de negócio claras. Uma bullet list do que precisa funcionar para a tarefa ser considerada `Done`. Ex: "A senha deve ter no mínimo 8 caracteres".
* **Design Handoff:** Link para o Figma ou protótipo da tela correspondente (após o *Done* do Design).

### 3. Melhoria (Enhancement)
**O que é:** Esta tarefa é usada quando queremos melhorar ou otimizar uma área de produto já existente. Ela nasce a partir de feedbacks de usuários, métricas de observabilidade, ou necessidade técnica pontual detectada. 
**Objetivo da Melhoria:** Evoluir algo que já está em produção, sem criar algo 100% novo do zero. Geralmente atrelado ao épico original da funcionalidade, ou a um épico contínuo de "Melhorias de Usabilidade".
**O que deve conter na descrição:**
* **O Contexto do Feedback/Observabilidade:** Explicar *por que* estamos fazendo isso. "O desenvolvedor deve entender o motivo da mudança." Ex: "Notamos via Hotjar que os usuários estão esbarrando no botão 'X' sem querer".
* **O Comportamento Atual:** O que acontece hoje.
* **O Comportamento Desejado:** O que deve acontecer após a melhoria.

---

## 🚨 Regra de Ouro (Golden Rule)
Nenhum ticket entra para `Ready for Dev` (pronto para desenvolvimento) se não tiver **Critérios de Aceite** bem definidos pelo PO. O desenvolvedor não deve ter que adivinhar a regra de negócio; ele deve codificar a regra descrita.
