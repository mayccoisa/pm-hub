# 📦 Documentação Técnica: Resultado de Qualificação de Campanhas

## 🎯 Visão Geral
* **O que é:** Melhoria na visibilidade das informações de resultados das campanhas (Voz e WhatsApp) importadas via CSV no WeON. A funcionalidade adiciona uma nova camada de métricas baseada na **Qualificação** do atendimento, ou seja, o desfecho final atribuído pela interação humana (atendente) no fechamento do contato.
* **Estágio Atual:** Especificação Técnica / Documentação

## 💔 O Problema
Atualmente, a visão de resultados de campanhas exibe apenas o status de entrega técnico provido pelos fornecedores de telecomunicação ou mensageria:
* **Campanhas de Voz:** Status da ligação do broker (ex: Atendida, Não atendida, Máquina, etc.).
* **Campanhas de WhatsApp:** Status de envio da META (ex: Falha, Enviado, Respondido, etc.).

**A Dor:** Esses dados técnicos não são suficientes para medir a *efetividade real* e *qualitativa* da campanha. O cliente não consegue saber rapidamente, dentro da interface de campanhas, quantos contatos convertidos realmente geraram uma venda, um acordo, ou se o número era inválido após a triagem de um humano.

## ⭐ A Solução
Adicionar uma visão quantitativa das métricas de negócio geradas após a interação humana. Iremos exibir quais **qualificações** (tabulações) foram atribuídas ao final dos atendimentos que foram originados por aquela campanha específica. 

Essa informação será disponibilizada de duas formas:
1. **Resultado da Campanha:** Aba específica na interface de acompanhamento da campanha.
2. **Resultado de Mailing:** Visão global considerando o compilado do mailing.

---

## 💻 Requisitos de Interface (UI/UX)
Com base no protótipo validado, a interface no módulo de Campanhas (Menu lateral > Campanhas) deve se comportar da seguinte maneira:

### 1. Painel de Resultados da Campanha
Ao selecionar uma campanha específica na lista central (ex: "CampanhaWhats3(63).csv"), o painel lateral direito de **Resultados** passará a ter uma nova tab/aba:

* **Abas Existentes:** `OVERVIEW` | `HISTÓRICO`
* **Nova Aba:** `QUALIFICAÇÃO`
* **Rastreabilidade de Analytics (Botão):** O botão/aba de "QUALIFICAÇÃO" deve obrigatoriamente conter um identificador único de UI (ex: atributo `id="tab-campaign-qualifications"` ou `data-testid="tab-campaign-qualifications"`) para permitir o tagueamento de métricas no sistema de Analytics (Google Analytics, Mixpanel, etc.). Isso garantirá a capacidade de rastrear a quantidade exata de cliques e o índice de uso dessa aba.

### 2. Conteúdo da Aba "Qualificação"
Dentro da aba ativada, o sistema deve renderizar o bloco **"Qualificações"**, contendo:

1. **Cards de Resumo de Qualificações:**
   * Lista em grid apresentando as qualificações utilizadas nos atendimentos originados por aquela campanha.
   * **Estrutura do Card:**
     * Título da qualificação empregada (Ex: "Falei com o cliente", "WhatsApp Inativo").
     * Contagem absoluta de ocorrências junto a um ícone representativo (ex: ícone de pessoas ou ícone de bloqueio).
     * Porcentagem representativa em relação ao total de atendimentos qualificados relativos à campanha, no formato `X (Y%)` (Ex: `1 (100%)`, `0 (0%)`).
2. **Barras de Progresso por Classificação/Sub-qualificação:**
   * Imediatamente abaixo dos cards, exibir barras horizontais detalhando ações ou desdobramentos atrelados às qualificações.
   * **Estrutura da Barra:**
     * Rótulo descritivo (Ex: "MANTER atendimento ativo").
     * Contagem absoluta justificada à direita.
     * Barra de preenchimento visual proporcional (cor verde/adequada ao tema dark-mode da interface WeON).

---

## ⚙️ Regras de Negócio e Requisitos Técnicos

### Regra 1: Rastreabilidade Origem-Campanha x Atendimento
Para que seja possível contabilizar a qualificação, o back-end precisa garantir o vínculo (rastreabilidade) de que um Atendimento Humano (Ticket) originou-se de um disparo de campanha ativo. 
* O sistema deve filtrar todos os atendimentos encerrados cuja origem/trigger (ID de disparo) pertença ao ID da Campanha atual ou ID do Mailing.

### Regra 2: Processamento e Atualização dos Status
* **Cálculo de Porcentagens:** O percentual `(%)` demonstrado nos cards de Qualificação deve ser relativo ao **total de atendimentos encerrados e qualificados** daquela campanha, e não sobre o volume total da base importada no CSV.
  * *Exemplo:* Se o CSV tinha 100 contatos, 20 responderam e geraram atendimento humano. Destes 20, 10 foram fechados como "Venda Feita". O card "Venda Feita" mostrará `10 (50%)`.

### Regra 3: Contextos de Exibição
1. **Contexto de Campanha:**
   * A busca deve filtrar os dados de qualificação usando o `id_campanha`.
   * Endpoint sugerido a ser desenvolvido/adaptado: `GET /api/v1/campaigns/{id_campanha}/qualifications`
2. **Contexto de Mailing:**
   * A busca deve filtrar os dados de qualificação agregando todas as disparadas relacionadas a um arquivo base (Mailing).
   * Endpoint sugerido a ser desenvolvido/adaptado: `GET /api/v1/mailings/{id_mailing}/qualifications`

### Regra 4: Tratamento de Dados Vazios
* Caso não haja *nenhum* atendimento finalizado/qualificado daquela campanha no momento da consulta, a aba deve exibir os cards zerados (`0 (0%)`) baseando-se nas qualificações cadastradas no template da campanha, ou alternativamente (se a campanha for de qualificação livre), um Empty State: *"Ainda não há qualificações registradas para os atendimentos desta campanha."*

---

## 📊 Métricas de Acompanhamento (Para PMs e Analistas)
Para medir o sucesso do lançamento dessa feature, devemos rastrear ativamente os seguintes pontos via ferramenta de Analytics:
1. **Adoção (Tracking de Evento):** Quantidade de cliques na aba "QUALIFICAÇÃO" capturados pelo ID do componente na UI (ex: `tab-campaign-qualifications`).
2. **Engajamento:** Tempo de permanência visualizando a aba para tomada de decisão no acompanhamento ativo da campanha.
3. **Redução de Carga no DB/BI:** Queda na quantidade de exportações de relatórios complexos apenas para cruzar dados de Campanha x Qualificações.

