# Instrução de Trabalho (IT) - Processo do Product Analyst (Métricas e Trackeamento)

## Objetivos
Garantir que absolutamente nenhuma funcionalidade ("Feature") ou melhoria ("Enhancement") vá para Produção sem estar devidamente instrumentada. O papel do Product Analyst (PA) é definir *como* o sucesso será medido através de dados quantitativos, mapeando interações-chave (botões, tempo de tela, cliques) e transformando isso em relatórios acionáveis que provem o valor da entrega.

## Escopo
Aplica-se a qualquer ticket do tipo **Epic**, **Feature** ou **Enhancement** que possua uma interface de usuário interagível ou um fluxo crítico no backend.

---

## 🛑 Passo a Passo (Workflow)

### 1. Definição do Plano de Mensuração (Measurement Plan)
**Objetivo:** Começar com o fim em mente. Saber o que o Produto/PO quer alcançar (Métrica de Sucesso) e traduzir isso em "Quais dados precisamos coletar?".
* [ ] **Leitura do PRD / Ticket (PO):** O PA deve entender os Critérios de Aceite e as Métricas de Sucesso estipuladas no Épico/Feature. Ex: *O Épico quer aumentar a criação de PDIs.*
* [ ] **Elaboração de Perguntas de Negócio:** Quais perguntas o dashboard final precisará responder? (Ex: "Quantos usuários chegam na tela inicial mas não clicam em 'Criar PDI'?", "Qual o tempo médio que o usuário gasta na tela do chat com IA?").
* [ ] **Análise de Funil Macro:** Definir os passos críticos do funil de retenção ou conversão (Ex: `Visualizou Tela` -> `Interagiu com Botão Principal` -> `Aguardou API de IA` -> `Salvou PDI com Sucesso`).

### 2. Mapeamento de Eventos (Event Taxonomy & Tracking Plan)
**Objetivo:** Dizer exatamente para o Desenvolvedor (Dev) o *que* precisa disparar um evento analítico (Ex: Amplitude, Mixpanel, Google Analytics 4, PostHog), *onde* colocar esse gatilho e *como* nomear, para não virar bagunça.
* [ ] **Criação do Plano de Tracking (Planilha ou Seção no Jira):** Documentar os eventos seguindo um padrão rigoroso. Padrão Sugerido: `[Objeto] + [Ação]`.
* [ ] **Eventos Comuns:**
    - `page_view` (Tempo de tela: Medido na abertura vs. fechamento).
    - `button_clicked` (Ações diretas).
    - `form_submitted` / `process_completed` (Sucesso).
    - `error_displayed` (Mapear a fricção).
* [ ] **Mapeamento de Propriedades (Properties/Context):** O que deve ir junto com o evento para dar contexto analítico? (Ex: No evento `button_clicked`, deve passar a propriedade `button_name: 'Adicionar PDI'` e `user_role: 'manager'`).
* [ ] **Handoff Analítico:** Vincular o documento de Tracking Plan no ticket da Feature de Engenharia **antes** do Dev começar a codar.

### 3. Homologação Analítica (Analytics QA)
**Objetivo:** Garantir que o tracking foi implementado certo antes de ir para produção. Dados sujos ou duplicados são piores que nenhum dado.
* [ ] **Validação em Staging (Ambiente de Teste):** Assim como o QA de Qualidade valida a interface, o PA valida o "Network/Console".
* [ ] **Event Debugging:** Simular a jornada do usuário final e acompanhar a ferramenta de Debug (ex: Amplitude Extension, Mixpanel Live View) verificando se os Eventos e Propriedades estão disparando e populando corretamente.

### 4. Construção de Dashboards e Mostragem de Valor
**Objetivo:** Transformar logs de eventos brutos (1s e 0s) em histórias que mostram o ROI (Return on Investment) da Sprint passada.
* [ ] **Criação/Atualização do Dashboard (Pós-Deploy):** Montar visualizações gráficas focadas nas *Perguntas de Negócio* feitas no Passo 1.
* [ ] **Acompanhamento de Prazos Constantes (Time-to-Value):** 
    - Analisar adoção primária (7 dias após deploy): "Alguém clicou no botão novo?"
    - Analisar Retenção da Feature (14~30 dias): "Eles usaram e voltaram a usar, ou foi só curiosidade?"
* [ ] **Fechamento de Ciclo (Report para o PO):** Apresentar (Slack, Email ou Reunião) um mini-relatório mostrando se a Métrica de Sucesso (lá do Épico) foi atingida ou refutada pelos dados, gerando insumo para a próxima priorização (Retroalimentação).

---

## 🚨 Regras de Ouro (Golden Rules)
1. **Nomeclatura Casing:** Todos os eventos devem usar um único padrão de sintaxe (ex: `snake_case` -> `button_clicked_add_pdi`). Nada de misturar `CamelCase` com `kebab-case`. PADRONIZAÇÃO é a vida do analista.
2. **If You Can't Measure It, Don't Build It:** Se os desenvolvedores afirmarem que é "tecnicamente impossível" trackear uma feature crucial, o PO e o Tech Lead devem reavaliar o desenho arquitetural. Pousar às cegas num MVP é desperdício de recurso.
