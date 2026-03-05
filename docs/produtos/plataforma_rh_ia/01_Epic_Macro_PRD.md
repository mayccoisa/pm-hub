# PRD: Épico Macro - Estrutura Base (Plataforma de RH IA)

## 1. Problem Statement
**Situação Atual:** As ferramentas de Recursos Humanos tradicionais funcionam como repositórios estáticos (como Culture Rocks, Feedz). Elas focam em ciclos semestrais de avaliação e dependem exclusivamente da proatividade do colaborador e gestor, gerando baixo engajamento contínuo.
**Dores do Usuário:**
- A necessidade de criar uma fundação sólida de sistema que suporte funcionalidades complexas de IA, garantindo segurança de dados, escalabilidade e uma arquitetura limpa desde o dia 1.
- Os desenvolvedores precisam de um escopo claro de tecnologias, estruturação de banco de dados e fluxos de autenticação para iniciar o projeto sem retrabalho futuro.
**Impacto no Negócio:** Sem uma estrutura macro bem definida, o lançamento das features-chave do MVP ("Wow Factor") será atrasado e o sistema poderá enfrentar sérios problemas de segurança com dados sensíveis (LGPD) ou latência de IA.

## 2. Proposed Solution
**Visão Geral:** O Épico Macro consiste na criação da estrutura de base (fundação) da aplicação Web B2B (Módulo de RH IA). Isso inclui a configuração do repositório, CI/CD, infraestrutura de banco de dados, camada de autenticação, e a arquitetura para chamadas seguras para a OpenAI API. Este épico não finaliza features de IA, mas entrega a "pista" para que as features pousem.
**Histórias de Usuário / Épico:**
1. Como Desenvolvedor, eu quero estruturar o repositório base com Next.js/Vite e TailwindCSS para garantir produtividade na criação de interfaces.
2. Como Desenvolvedor, eu quero configurar o banco de dados PostgreSQL com Prisma ORM e modelar as enditades iniciais (User, Pdi, Feedback) para centralizar os dados.
3. Como Admin de RH, eu quero que o sistema possua um controle de acesso (RBAC) com permissões claras (RH_ADMIN, MANAGER, EMPLOYEE) para proteger dados sensíveis.
**Métricas de Sucesso:**
- Repositório rodando localmente sem erros na primeira semana de Sprint.
- Pipeline de deploy (ex: Vercel ou AWS) configurado e realizando push das alterações.
- Banco de dados provisionado e tabelas iniciais criadas (`User`, `Pdi`, `PdiAction`, `Feedback`).

## 3. Requirements
**Requisitos Funcionais:**
- Sistema de Autenticação (Login/Senha) usando Supabase Auth ou NextAuth.
- Controle de acesso baseado em Roles (RBAC).
- Layout Base do Sistema (Sidebar, Navbar, Theme Provider para Dark/Light mode).
**Requisitos Técnicos:**
- **Frontend / Fullstack Framework:** Next.js (App Router) ou Vite + React.
- **Estilização:** TailwindCSS. Uso de biblioteca de componentes como Shadcn/UI (ou similar, focando em visual clean/premium).
- **Backend / ORM:** Node.js, Prisma ORM conectando a um PostgreSQL (Neon/Supabase).
- **Integração IA:** Setup seguro para chaves de API da OpenAI (arquivos `.env` protegidos, chamadas feitas exclusivamente pelo Server/Backend para não expor a Key).
**Requisitos de Design:**
- Estética SaaS B2B Moderna (referências: Linear, Notion).
- Padronização de tokens de cor, tipografia e espaçamento logo no setup (`tailwind.config.ts`).

## 4. Implementation
**Dependências:**
- Criação e aprovação de contas/chaves API (OpenAI, Supabase/Neon, Vercel).
- Definição do design system inicial.
**Estimativa de Cronograma:** 1 Sprint (Aprox. 1 a 2 semanas).
**Recursos Necessários:** Time Full-Stack (`Frontend + Backend`).

## 5. Risks and Mitigations
- **Risco:** Vasamento de API Key da OpenAI no client-side.
  - **Mitigação:** Arquitetar todas as integrações de LLM via Server Actions (Next.js) ou rotas de API seguras, validando autenticação do usuário antes de repassar prompts à OpenAI.
- **Risco:** Modelagem de DB rígida dificultando as futuras features.
  - **Mitigação:** Usar Prisma Migrations desde o dia 1 e manter as entidades o mais genéricas possível inicialmente, focando apenas no necessário para o MVP.
- **Risco:** Segurança de Dados e LGPD.
  - **Mitigação:** Assegurar que os UUIDs são usados primariamente. Não treinar modelos próprios com os dados dos clientes inicialmente. Garantir Termos de Serviço adequados no uso de sub-processadores (OpenAI).
