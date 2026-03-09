# Register Life - Arquitetura e Mapa de Funcionalidades

## 1. Visão Geral do Produto
O **Register Life** (codigo-fonte localizado em `C:\proj\study-streak-tracker-vue`) é uma aplicação web construída para documentar, registrar e guiar a vida do usuário. Ele atua como um grande banco de informações pessoais, ajudando a monitorar progresso, gerenciar finanças e organizar tarefas.

### 1.1 Stack Tecnológica
*   **Framework Frontend:** React (Apesar do nome da pasta sugerir Vue, o projeto usa React)
*   **Build Tool:** Vite
*   **Roteamento:** React Router DOM
*   **Estilização:** Tailwind CSS + Componentes UI (presumivelmente Radix/Shadcn via `@/components/ui`)
*   **Gerenciamento de Estado/Cache:** React Query (`@tanstack/react-query`) e contextos React (`AuthContext`).

## 2. Estrutura de Diretórios (`src/`)
A arquitetura do projeto web segue um padrão modular clássico de aplicações React:

*   `components/`: Componentes visuais reutilizáveis (UI) e fragmentos de páginas.
*   `contexts/`: Provedores de estado global (ex: `AuthContext`).
*   `hooks/`: Custom hooks em React para lógica de componentes.
*   `integrations/`: Possíveis integrações com APIs ou serviços externos.
*   `lib/`: Funções utilitárias e configurações de bibliotecas.
*   `models/`: Definições de tipos (TypeScript) e estruturas de dados.
*   `pages/`: Componentes de páginas de alto nível (Views), que correspondem a rotas específicas.
*   `providers/`: Componentes que englobam a aplicação para prover contexto (ex: `AppProviders`).
*   `routes/`: Configuração de roteamento (ex: `AppRoutes.tsx`).
*   `services/`: Lógica de comunicação com o backend/APIs.
*   `stores/`: Gerenciamento de estado complexo (se houver, ex: Zustand ou Redux).
*   `theme/`: Configurações visuais globais.
*   `utils/`: Funções auxiliares gerais.

## 3. Mapa de Funcionalidades (Módulos Baseados nas Rotas)

O produto é estruturado em vários módulos (páginas), todas protegidas por autenticação. Abaixo um mapa das principais áreas da aplicação, deduzidas pelas rotas:

### 3.1 Core & Autenticação
*   `/auth`: Página de Login/Cadastro (`Auth.tsx`).
*   `/profile`: Perfil do usuário com abas (`ProfileWithTabs.tsx`), gestão de conta.
*   `/settings` (via componentes): Configurações gerais da aplicação.

### 3.2 Produtividade & Organização
*   `/`: Dashboard principal (`Index.tsx`), resumo geral.
*   `/tasks`: Gestão de tarefas diárias/gerais (`Tasks.tsx`).
*   `/projects`: Lista e gestão de projetos maiores (`Projects.tsx`).
*   `/projects/:projectId`: Detalhes de um projeto específico (`ProjectDetail.tsx`).
*   `/calendar`: Visão de calendário consolidada (`Calendar.tsx`).

### 3.3 Estudos & Conhecimento
*   `/subjects`: Lista de disciplinas ou matérias de estudo (`StudySubjects.tsx`).
*   `/subjects/:subjectId`: Detalhes de uma disciplina (`SubjectDetail.tsx`).
*   `/subjects/:subjectId/resource/:resourceId`: Visualização de um recurso de estudo específico (`ResourceView.tsx`).
*   `/sessions`: Sessões ou logs de estudo (`StudySessions.tsx`).
*   `/pomodoro`: Timer e fluxo de estudo pomodoro (`Pomodoro.tsx`).
*   `/pomodoro-history`: Histórico de sessões pomodoro concluídas (`PomodoroHistory.tsx`).
*   `/knowledge`: Base de conhecimento pessoal / wikis (`Knowledge.tsx`).

### 3.4 Estilo de Vida & Planejamento
*   **`/finance`:** Módulo de finanças para acompanhamento de gastos, receitas e saúde financeira (`Finance.tsx`). *← (Foco atual de melhoria)*
*   `/workouts`: Módulo de acompanhamento de treinos/exercícios (`Workouts.tsx`).
*   `/entertainment`: Gestão de filmes, livros, jogos consumidos (`Entertainment.tsx`).
*   `/wishlist`: Lista de desejos ou objetivos materiais (`Wishlist.tsx`).
*   `/planning`: Visões de planejamento macro (médio/longo prazo) (`Planning.tsx`).

### 3.5 Gamificação & Inteligência Artificial
*   `/achievements`: Sistema de conquistas e progresso do usuário (`Achievements.tsx`).
*   `/agents`: Interação com agentes de IA dentro da plataforma (`AIAgents.tsx`).
*   *(Oculto)*: Existe um `FloatingChatWidget` global para assistência de IA em qualquer página.

## 4. Próximos Passos (Foco no Módulo Financeiro)
A arquitetura revela que o módulo financeiro reside principalmente em `src/pages/Finance.tsx` e possivelmente em componentes específicos dentro de `src/components/`. A próxima fase envolverá a análise do PRD/Wireframe para a modernização deste módulo.
