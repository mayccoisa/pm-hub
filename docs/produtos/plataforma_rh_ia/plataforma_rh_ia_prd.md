# 📝 Product Requirements Document (PRD) - MVP: Plataforma de RH Inovadora com IA

## 1. Visão Geral e Declaração do Problema (Problem Statement)
**Situação Atual:** As ferramentas de RH clássicas focam excessivamente em ciclos semestrais de avaliação (PDI, 360) e dependem quase 100% da proatividade do usuário (colaborador ou gestor) para gerar valor. Isso resulta em ferramentas que são apenas repositórios de textos mortos.
**Dores do Usuário:**
* **Colaborador:** Não sabe como quebrar grandes metas de PDI em ações práticas do dia a dia. Recebe feedbacks que não sabe como transformar em aprendizado acionável.
* **Gestor:** Sente que redigir bons OKRs e Feedbacks demanda uma energia criativa que ele não tem na rotina atribulada. Além disso, falta braço para fazer coaching semanal.
* **RH:** Sofre para provar o ROI da área porque os colaboradores só acessam o sistema no fechamento do ciclo. Carecem de dados diários de engajamento e clima.

**A Solução (O "Wow" Factor):** Uma plataforma de gestão de pessoas onde o "backend" inteligente não apenas guarda dados, mas usa LLMs para *ler, interpretar e agir* proativamente. A plataforma envia "nudges" inteligentes, corrige tom de mensagens e cria planos de ação sem depender do preenchimento de forms complexos pelo usuário.

---

## 2. Escopo do MVP (Minimum Viable Product)
O objetivo deste MVP é validar a viabilidade técnica e o valor percebido das 3 *Core Features* baseadas em Inteligência Artificial, limitando inicialmente as interações complexas de interface de usuário apenas ao sistema Web (deixando integrações via bot de Slack/Teams para v2).

### 2.1. Funcionalidades In Scope
1. **Assistente de PDI Fracionado:** Uma interface de chat web onde a IA entende o objetivo de longo prazo do colaborador e quebra em até 3 marcos mensais e X tarefas semanais.
2. **Motor de *Nudges* (Lembretes Inteligentes):** Sistema de cron/jobs que dispara e-mails semanais contendo um lembrete criativo gerado por IA sobre a tarefa da semana do PDI.
3. **Validador de Tom de Feedback (Copilot do Gestor):** Um componente na tela de redação de feedback onde a IA reescreve o texto com base em CNV (Comunicação Não-Violenta) e o gestor pode aceitar o Diff.
4. **Resolução de Feedback em PDI:** Um botão que, ao lado de um feedback corretivo recebido, gera instantaneamente um plano de ação sugerido (3 steps).

### 2.2. Out of Scope (Para v2+)
* Integração nativa de bot com Slack, MS Teams ou Discord.
* Módulos de Avaliação 360 ou 9-Box complexos.
* App Mobile Nativo.
* Configurações dinâmicas de RH sobre ciclos de permissões complexas (usaremos roles fixas no MVP).

---

## 3. Histórias de Usuário Essenciais e Critérios de Aceite (Acceptance Criteria)

### Épico 1: Criação e Gestão de PDI Conversacional
* #### **US01:** Como **Colaborador**, eu quero interagir com uma IA através de uma interface de chat na Web para criar meu PDI, de forma que eu obtenha tarefas tangíveis mensais sem precisar planejar sozinho.
  * **AC1:** O usuário deve ver uma tela de chat onde pode dar um input de texto livre com seu objetivo de carreira.
  * **AC2:** A IA deve retornar uma sugestão estruturada com: 1 Objetivo Macro, 3 Resultados Chave (KR's) e 1 Lista de Tarefas Semanais Sugeridas.
  * **AC3:** O usuário deve poder clicar em "Adicionar ao meu PDI", salvando a estrutura no Banco de Dados atrelada ao seu `user_id`.

* #### **US02:** Como **Colaborador**, eu quero receber lembretes periódicos e encorajadores sobre o que devo fazer na semana relacionado ao meu PDI.
  * **AC1:** O sistema deve executar um Job semanal (ex: Segunda-feira 08:00).
  * **AC2:** O Job deve buscar a tarefa pendente daquela semana no PDI do usuário.
  * **AC3:** O Job deve gerar um texto motivacional único via LLM focado naquela métrica e o enviar via e-mail corporativo do usuário.

### Épico 2: Feedback Apoiado por IA
* #### **US03:** Como **Gestor**, eu quero que a plataforma analise o feedback que acabei de redigir e sugira um texto mais brando/construtivo usando CNV, para evitar atritos.
  * **AC1:** Na tela de criar feedback, deve existir o botão "Melhorar Tom com IA".
  * **AC2:** Ao clicar, o sistema deve mostrar uma visualização "Before/After" do texto ou um painel de sugestão lateral.
  * **AC3:** O gestor pode optar por usar o texto modificado da IA ou o texto original antes de clicar em "Enviar Feedback".

* #### **US04:** Como **Colaborador**, ao receber um feedback sobre pontos de melhoria, quero que o sistema me sugira 3 ações para eu começar a mudar aquele comportamento.
  * **AC1:** Na visualização do feedback recebido, se a categoria for "Pontos a Melhorar", deve aparecer um botão "Criar Plano de Ação".
  * **AC2:** O clique chama a IA, passando a string do feedback recebido no prompt, e retorna uma bullet-list de ações sugeridas.
  * **AC3:** O usuário pode clicar em "Adicionar essas ações ao PDI Pessoal".

---

## 4. Requisitos Técnicos e Arquitetura do MVP (Instruções para a IA Desenvolvedora)

Para garantir que a construção do MVP seja fluida, rápida e coesa, a *stack* técnica deve seguir:

* **Frontend:** React (Next.js ou Vite), utilizando TailwindCSS para estilização de uma interface *Premium* e *Clean* (estilo SaaS B2B moderno como Notion / Linear). Focar na responsividade mínima para telas de desktop. Componentes pré-fabricados como Shadcn/UI ou TailwindUI são recomendados para velocidade.
* **Backend:** Node.js (Express ou NestJS) ou API Routes do Next.js.
* **Database:** PostgreSQL (pode rodar via Supabase ou Neon para facilitar). ORM sugerido: Prisma.
* **Integração de IA:** OpenAI API (GPT-4o / GPT-4o-mini). Prompts devem ser estritamente controlados via System Messages predefinidas no backend.
* **Autenticação:** Sistema simples de Login baseado em e-mail/senha (pode usar Supabase Auth ou NextAuth). Três níveis lógicos básicos de Roles: `RH_ADMIN`, `MANAGER` e `EMPLOYEE`.

### 4.1. Definição Base de Dados (Esboço Entidades de Domínio)
* `User`: {id, name, email, role, managerId (fk)}
* `Pdi`: {id, userId (fk), goalTitle, status}
* `PdiAction`: {id, pdiId (fk), description, isCompleted, recommendedDate}
* `Feedback`: {id, authorId (fk), targetId (fk), category, content, createdAt, isAiGenerated/Edited (boolean)}

### 4.2. Estratégia de Prompts (Prompt Engineering)
A assertividade do MVP reside na qualidade das chamadas LLM. O(s) desenvolvedor(es) devem encapsular o contexto em **System Prompts robustos** no Backend. Exemplo de *System Prompt* para o Validador de Tom (US03):
```text
"Você é um especialista em RH e coach executivo treinado em Comunicação Não-Violenta (CNV). 
Receba o texto bruto de um feedback escrito por um gestor. Sua tarefa é reescrever o texto mantendo o ponto central construtivo (a crítica), mas removendo tons acusatórios, usando a empatia e focando em fatos e evolução contínua. 
Retorne APENAS o texto reescrito. Seja sucinto."
```

## 5. Cronograma e Entregas Estimadas
Para construir essa prova de conceito funcional (PoC/MVP), estimamos 3 a 4 "Sprints" focadas (ex: usando IA code generation):

* **Sprint 1 (Fundamento):** Setup do Repo, Next.js, Auth básico, Estruturas de DB Prisma (Users, Feedbacks).
* **Sprint 2 (Feedbacks):** Tela de Feedbacks, integração da API do GPT e botão "Validador de Tom com IA". Integração "Criar Plano de Ação".
* **Sprint 3 (PDI):** UX em formato Chat para a elaboração do PDI guiada pelo modelo de linguagem, gravação dessas etapas no banco.
* **Sprint 4 (Nudges):** Motor de *Cron Job* para leitura das tarefas com notificação (via *Pusher/Webhooks* ou *Nodemailer* para testes de email).

---

## 6. Riscos
* **Confidencialidade (LGPD/GDPR):** Feedbacks enviados pela API da OpenAI.
    * *Resolução:* No plano Enterprise da OpenAI os dados não são usados para treinar os modelos globais. Devemos assegurar que dados mais sensíveis (ex. CPF) não entrem no contexto.
* **Latência de IA comprometer UX:** O tempo de espera enquanto o plano de ação é gerado pode demorar de 3 a 8 segundos.
    * *Resolução:* Usar UI *Skeleton Loaders* ou Stream de resposta de texto (como o ChatGPT faz) para manter a ilusão de rapidez.
