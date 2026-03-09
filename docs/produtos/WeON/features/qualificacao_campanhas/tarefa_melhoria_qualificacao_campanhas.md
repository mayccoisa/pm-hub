# 📝 PRD (Melhoria): Visibilidade de Qualificações de Campanhas

**Contexto:** O cliente precisa entender o real impacto e desdobramento das campanhas (Voz e WhatsApp) importadas via CSV na plataforma WeON, medindo além dos status técnicos da telefonia ou mensageria.

---

## 1. Problem Statement (O Problema)
* **Situação Atual:** A interface de Resultados de Campanhas só exibe os retornos técnicos do fornecedor/broker (Ex: *Atendida, Não atendida, Máquina* para Voz; *Enviado, Falha, Respondido* para WhatsApp).
* **Dor do Usuário:** O cliente final / gestor da operação não consegue saber rapidamente, dentro da interface de campanhas, quantos contatos convertidos realmente geraram uma venda, um acordo, ou qual foi a tabulação (qualificação) dada pelo atendente humano ao finalizar a interação. Hoje, para obter esse dado, é necessário exportar relatórios pesados e cruzar bases no BI.
* **Impacto no Negócio:** Baixa percepção de valor na funcionalidade de Campanhas, aumento de tickets de suporte solicitando cruzamento de dados e fricção na análise de ROI das campanhas do cliente.

## 2. Proposed Solution (A Solução Proposta)
* **Visão Geral da Abordagem:** Adicionar uma nova camada analítica diretamente nas telas de acompanhamento de campanha e mailing. Esta nova visão consolidará dados a partir dos *atendimentos humanos encerrados* que foram originados por aquele disparador em específico.
* **Histórias de Usuário (User Stories):**
  * *Como Gestor de Operações*, eu quero visualizar quais qualificações foram dadas aos contatos de uma campanha específica, *para que eu possa* medir a eficiência de conversão (vendas/acordos) em tempo real sem precisar exportar dados.
  * *Como Coordenador*, eu quero visualizar a mesma métrica consolidada para todo o Mailing ativo, *para que eu possa* decidir se pauso ou acelero o fluxo da operação.
* **Métricas de Sucesso:**
  * **Adoção:** Quantidade de cliques/visualizações na nova aba "Qualificação".
  * **Retenção de Fluxo:** Redução de X% mensal nos downloads de relatórios de cruzamento brutos de campanhas.

## 3. Requirements (Requisitos)

### Requisitos Funcionais e de Design (UI/UX)
Baseado no protótipo validado:
1. **Nova Aba:** Incluir uma aba chamada `QUALIFICAÇÃO` ao lado das abas *OVERVIEW* e *HISTÓRICO*, no painel lateral direito "Resultados", visualizado ao clicar em uma campanha ativa.
2. **Cards de Qualificações:**
   * Mostrar os totais absolutos e o percentual relacional (Ex: `Falei com o cliente: 10 (50%)`).
   * **Regra do Percentual:** O cálculo base `(100%)` deve ser o somatório de todos os *atendimentos qualificados* oriundos da campanha em questão, e não o total bruto de clientes que estavam no arquivo CSV.
3. **Barras de Progresso (Sub-qualificação/Ações):**
   * Mostrar de forma visual (com barra preenchida) o desdobramento daquela qualificação (ex: "MANTER atendimento ativo").
4. **Empty State:** Se a campanha estiver rodando mas ainda não houver nenhum atendimento qualificado, os cards devem exibir os dados zerados baseando-se no template da campanha (ex: `0 (0%)`).

### Requisitos Técnicos
1. **Rastreabilidade (Back-end):** A API precisa ser capaz de filtrar os Tíquetes/Atendimentos encerrados buscando pela correlação com o `id_campanha` e/ou `id_mailing`. 
2. **Novos Endpoints (Sugestão):** 
   * `GET /api/v1/campaigns/{id_campanha}/qualifications`
   * `GET /api/v1/mailings/{id_mailing}/qualifications`
3. **Rastreamento Analítico (Front-end):** 
   * A aba/botão "QUALIFICAÇÃO" na interface precisa **obrigatoriamente** receber uma propriedade identificadora única, como `id="tab-campaign-qualifications"` ou `data-testid="tab-campaign-qualifications"`. Isso permitirá a configuração do evento de clique na nossa ferramenta de Analytics para medir a adoção da feature (Métrica de Sucesso 1).

## 4. Implementation (Implementação)
* **Dependências:** API de relatórios e atendimento precisarão expor os roteamentos da árvore de tabulação vinculando com os IDs disparadores.
* **Estimativa de Tempo (T-Shirt Size):** Média (M) - Envolve agregação complexa no banco de dados. 
* **Recursos Necessários:** 1 Back-end Pleno/Sênior, 1 Front-end Pleno.

> [!CAUTION]
> **[HUMAN-IN-THE-LOOP DECISION REQUIRED]**
> Antes de prosseguir para a fase de *Development*, o Tech Lead (ou Engenheiro Sênior) responsável pela demanda deverá decidir se é necessário criar um RFC/Tech Spec aprofundado específico para o Back-end detalhando a construção e performance da agregação de dados vinculados à tabela de Campanhas/Mailings e Atendimentos.
> * **[ ] SIM** (A engenharia deve mapear a nova entidade com os endpoints e as consultas pesadas de banco de dados e validar as estimativas em uma Documentação Técnica Complementar).
> * **[ ] NÃO** (Os requisitos presentes aqui neste documento e na validação do Protótipo são suficientes para o time executar o que está proposto).

## 5. Risks and Mitigations (Riscos e Mitigações)
* **Risco de Performance:** A query para agregar tabulações de dezenas de milhares de contatos pode ser custosa.
  * *Mitigação:* Implementar a totalização através de cache (Redis) ou criar rotinas de consolidação (materialized views/jobs assíncronos) caso o carregamento do painel supere 3 segundos.
* **Risco de Contexto:** Clientes importando campanhas de "Pesquisa Ativa" que não geram atendimento humano.
  * *Mitigação:* A aba permanecerá zerada para esses casos e o Empty State deve deixar claro que a métrica só capta interações diretas.
