# PRD: Motor de Nudges (Lembretes Inteligentes)

## 1. Problem Statement
**Situação Atual:** O maior desafio após a criação de um Plano de Desenvolvimento Individual (PDI) é a execução. Os colaboradores são engolidos pelo "Business As Usual" (rotina de trabalho diária) e acabam esquecendo completamente das tarefas de desenvolvimento que propuseram no ciclo de avaliação.
**Dores do Usuário:**
- "Eu criei meu PDI com o RH no mês passado, mas não tive tempo de olhar novamente para ele."
**Impacto no Negócio:** Baixo ROI nas ferramentas de RH, estagnação da curva de aprendizado interno da empresa. O RH perde o papel de impulsionador e passa a ser apenas um cobrador de preenchimento de sistema ao final do semestre.

## 2. Proposed Solution
**Visão Geral:** Um sistema automático em background (Motor de Nudges) que atua como um personal trainer da carreira. Ele lê o banco de dados de ações pendentes semanais de cada usuário e usa IA para gerar lembretes curtos e altamente contextualizados (Nudges), enviados diretamente no e-mail ou ferramenta de chat do colaborador.
**Histórias de Usuário:**
- **US02:** Como **Colaborador**, eu quero receber lembretes periódicos e encorajadores sobre o que devo fazer na semana relacionado ao meu PDI, sem que a mensagem pareça robótica ou apenas uma cobrança, de forma que eu me sinta lembrado do meu objetivo de longo prazo.
**Métricas de Sucesso:**
- Aumento de 40% nas ações de PDI marcadas como "Concluídas" mês a mês.
- Taxa de abertura dos e-mails de Nudge superior a 50%.

## 3. Requirements
**Requisitos Funcionais:**
- Script de varredura no banco de dados (`PdiAction`) buscando tarefas com a semana corrente como prazo e `isCompleted == false`.
- Envio de E-mail (ou mensagem no Slack/Teams na versão futura) com texto único gerado por Inteligência Artificial.
- O e-mail deve conter um botão "Marcar como Concluído" (Call to Action principal) que atualiza o banco sem exigir login complexo (magick link ou token JWT de ação única).
**Requisitos Técnicos:**
- **Motor de Execução:** Cron Job rotineiro. Pode ser hospedado usando `Vercel Cron Jobs` ou `Agenda.js` num servidor tradicional Node.
- **Integração de E-mail:** Serviço como Resend, SendGrid ou AWS SES.
- **Prompt da IA (Backend):** "Você é um mentor entusiasmado. Escreva um e-mail de no máximo 2 parágrafos de lembrete para a tarefa [Nome da Tarefa] relacionada ao objetivo [Objetivo Macro do Usuário]. Apele para o porquê essa tarefa ajudará o usuário em sua carreira. Finalize com uma frase de ação."
**Requisitos de Design:**
- Template de Email minimalista (HTML simples com tipografia clara e um botão central para Action).

## 4. Implementation
**Dependências:** 
- O Épico Macro 01 finalizado.
- A Feature de Assistente de PDI (Feature 02) precisa existir para popular o Banco de Dados com tarefas acionáveis (`PdiAction`).
**Estimativa de Cronograma:** 1 Sprint.
**Recursos Necessários:** Foco em Engenharia Backend (Integração de Email, Cron Jobs e Async Queue).

## 5. Risks and Mitigations
- **Risco:** O lembrete se tornar inconveniente / SPAM corporativo, irritando o colaborador.
  - **Mitigação 1:** Limitar estritamente a 1 nudge por semana (ex: Segundas às 09h).
  - **Mitigação 2:** Incluir a opção nativa de "Pausar Lembretes Inteligentes" nas configurações de Perfil do usuário.
- **Risco:** Gargalo da API da OpenAI ao rodar para milhares de usuários simultaneamente na Segunda-feira de manhã.
  - **Mitigação:** Processamento assíncrono com filas (Filas SQS, BullMQ ou Inngest) com paralelismo controlado para evitar Rate Limit e Timeouts da API de IA.
