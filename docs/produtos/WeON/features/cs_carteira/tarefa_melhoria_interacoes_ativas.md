# 📝 Tarefa (Melhoria): Indicador de Atendimentos em Andamento na Carteira

**Contexto:** Conforme mapeamento da gestora de CS (Elaine), a atual tela de "Minha Carteira" exibe apenas o status/qualificação resultante da *última interação encerrada* com aquele contato ou empresa. Isso oculta a visão de esforço "em tempo real" da operação e gera atritos.

---

## 1. Problem Statement (O Problema)
* **Situação Atual:** A tabela lista contatos inativos visualmente baseando-se no fato do último *ticket* ter sido fechado (ex: há 12 dias), mesmo que naquele exato milissegundo um novo ticket do cliente esteja sendo atendido por um analista de Suporte ou por um Bot WeON.
* **Dor do Usuário:** O profissional de CS entra na sua carteira, enxerga um contato como "Adormecido" e inicia uma nova prospecção ativa via WhatsApp, gerando atrito e insatisfação no cliente que já está "na linha" reclamando com o suporte na mesma plataforma.
* **Impacto no Negócio:** Abordagens sobrepostas, risco de cancelamento (Churn) acelerado por comunicação inoportuna, e a falsa sensação de que "a carteira está abandonada" aos olhos de um coordenador de CS validando os indicadores do painel.

## 2. Proposed Solution (A Solução Proposta)
* **Visão Geral da Abordagem:** Injetar flags de "Tempo Real" no carregamento da tela do painel e tabela. Se houver conversas não-finalizadas na base de dados (Aguardando Atendente, Bot ou Em Atendimento Humano), a linha do contato correspondente deve sinalizar essa condição.
* **Histórias de Usuário (User Stories):**
  * *Como profissional de Customer Success*, eu quero ver um indicador na listagem da minha carteira sinalizando se um contato (ou empresa) possui um atendimento em andamento, *para que eu saiba* se devo adiar uma abordagem ativa de prospecção/cobrança.
  * *Como analista de Relacionamento*, eu quero poder filtrar rapidamente (através de uma aba) quais clientes da minha carteira estão ativos *neste momento*, *para que eu possa* priorizar o acompanhamento ou auxílio em reuniões on-line que ocorrem agora.
* **Métricas de Sucesso:**
  * **Zero Colisão:** Redução próxima a 100% dos eventos de envio de Template "Frio" sobrepondo sessões ativas do cliente nos últimos 15 min.

## 3. Requirements (Requisitos)

### Requisitos Funcionais e de Design (UI/UX)
Baseado no novo fluxo validado de interfaces:
1. **Nova Aba "ATIVOS":**
   * Adicionar no menu de segmentação (junto com *SEM INTERAÇÕES, RISCO*) a aba `ATIVOS`.
   * Essa aba filtra e exibe na tabela *apenas* os registros (Contatos ou Empresas) que possuam tickets não finalizados.
2. **Novo Indicador na Célula:**
   * Na coluna genérica "Última Qualificação" da listagem (tabela principal), o texto estático deve ser substituído por um *badge* visual temporário indicando a atividade atual (Exemplo visual: Bolinha verde pulsante seguida do texto `Em Atendimento` ou `No Bot`).
3. **Comportamento Opcional (Deep Link):**
   * Clicar sobre esse *Badge* redireciona (em nova guia) o CS diretamente para a tela de monitoramento/tela do ticket vigente no WeON.

### Requisitos Técnicos
1. **Flag de Atendimento Ativo no Payload (Back-end):** 
   * A entidade na listagem (Contact/Company) deve retornar do banco com um novo parâmetro, por exemplo: `has_active_interaction: boolean`.
   * Opcionalmente, retornar: `current_ticket_id: string` (para alimentar o link de redirecionamento) e `current_status: string` ("bot", "agent", "waiting").

## 4. Implementation (Implementação)
* **Dependências:** Integração da Controller de Portfólio com a Controller de Atendimentos.
* **Estimativa de Tempo (T-Shirt Size):** Grande (L) - Risco de impacto arquitetural para carregar o payload.
* **Recursos Necessários:** 1 PM, 1 Product Designer, 1 Front-end Pleno, 1 Back-end Sênior.

> [!CAUTION]
> **[HUMAN-IN-THE-LOOP DECISION REQUIRED]**
> A consulta para rastrear "Atendimentos Ativos/Em Andamento" cruzando dados transacionais (conversas de chat volumosas) com dezenas de referências (a Paginação da carteira) pode gerar Lock/Overhead de leitura no BD.
> 
> O Tech Lead da vertical deve analisar e aprovar o modelo:
> * **[ ] VIA HTTP GET COMUM** (A query possui JOIN simples e rápido, com índices nas colunas de status de ticket. É performático para o MVP).
> * **[ ] VIA CACHE REATIVO** (Necessário redesenhar a feature para que o status "em andamento" venha via GraphQL Subscriptions / Redis, tirando peso do SQL principal da carteira).

## 5. Risks and Mitigations (Riscos e Mitigações)
* **Risco Visual B2B:** Em visão "Empresa", a empresa X pode ter o diretor *A* offline e a recepcionista *B* falando no suporte. 
  * *Mitigação:* A "Empresa X" entra com Badge `Em atendimento` e, via sub-lista, tooltip ou clique, deixamos claro que quem está conversando é a pessoa `B`.
