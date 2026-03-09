# 📝 Tarefa (Melhoria): Visão B2B (Múltiplas Empresas) na Carteira

**Contexto:** Após a consolidação do módulo "Minha Carteira" na operação diária dos analistas de CS (Mapeamento inicial `visao_geral_modulo_carteira.md`), recebemos a validação da gestora Elaine de que a visualização atual (centrada exclusivamente no indivíduo/CPF) não é escalável para operações B2B, onde o CS gerencia grandes contas/empresas com dezenas de contatos subjacentes.

---

## 1. Problem Statement (O Problema)
* **Situação Atual:** A tabela da "Minha Carteira" empilha linhas de contatos isolados (ex: 10 pessoas fictícias que pertencem a empresa X ocupam 10 linhas) e os totalizadores (cards superiores) somam todos os CPFs do analista (ex: `100 contatos na carteira`).
* **Dor do Usuário:** Para empresas B2B, o esforço e a saúde da carteira se baseiam no CNPJ/Empresa e não no contato solto. Um CS que cuida de 10 grandes empresas pode hoje abrir o dashboard e achar irreal a métrica de "100 contatos sob responsabilidade", dificultando o foco no acompanhamento das contas que realmente importam.
* **Impacto no Negócio:** Baixa adoção da ferramenta por parceiros e operações com perfil Business-to-Business, obrigando o time de relacionamento WeON a usar planilhas externas para medir a cobertura de sua própria carteira.

## 2. Proposed Solution (A Solução Proposta)
* **Visão Geral da Abordagem:** Introduzir um seletor visual (Toggle/Tab) que reestruture todas as métricas da página e o agrupamento da listagem para a entidade "Empresas".
* **Histórias de Usuário (User Stories):**
  * *Como profissional de Customer Success (B2B)*, eu quero poder alternar a interface da minha carteira para a visualização "Por Empresas", *para que eu possa* ver os indicadores macros de adoção e a listagem agrupada pelas contas atreladas a mim.
  * *Como Coordenador*, eu quero que os "Cards de Adoção" reflitam o número absoluto de empresas, *para que eu possa* saber rapidamente se aquele CS está acompanhando suas contas chave.
* **Métricas de Sucesso:**
  * **Uso (Toggle Usage):** Acionamento do botão `Alternar Visão > Empresas` (Através de rastreio de Analytics). Tracker ID sugerido: `id="toggle-portfolio-company-view"`.

## 3. Requirements (Requisitos)

### Requisitos Funcionais e de Design (UI/UX)
Baseado no novo fluxo validado de interfaces:
1. **Controle de Visualização:** Adicionar switch no topo do escopo da tabela informando: `[🟢] Visão por contatos | [⚪] Visão por empresas` (ou UI similar aprovada pelo Design).
2. **Atualização do Dashboard Agregado (Topo):** Ao acionar a "Visão por Empresas", os cards devem:
   * **Total da Carteira:** Mudar de "XYZ *Contatos*" para "XYZ *Empresas*".
   * **Contatos Conversados:** Exibir a proporção de contas ativadas: "X de Y *Empresas Abordadas* (%)". 
3. **Agrupamento da Datatable (A Tabela):**
   * A coluna "Nome do contato / Entidade" passa a listar as Empresas atreladas ao CS.
   * **Tags:** Mesclar deduplicando as tags relativas aos contatos que formam a empresa, **ou** (regra a definir via card com o usuário) listar apenas a TAG atrelada ao cadastro B2B.
   * **Última qualificação:** Exibir a qualificação com *Timestamp* mais recente dentre todos os contatos filhos daquela empresa Mestre.
   * **Risco de Churn / Avaliação:** Agregar e exibir as notas globais da Empresa baseada nos clientes (ex: Media de estrelas de todos os colaboradores da empresa X).

### Requisitos Técnicos
1. **APIs e Filtros (Back-end):**
   * Os Endpoints atuais de carteira (Dashboard totalizador e Tabela) precisam obrigatoriamente aceitar um novo "query_param": `?entity_mode=company`.
   * Quando o backend receber `company`, o repositório/ORM deve agrupar (GROUP BY) baseando-se no parentesco do contato (`company_id`). O cálculo relacional para 'última interação' passa a ser uma varredura nas entidades filhas.

### Critérios de Aceite
1. **Seletor de Visão:** O usuário deve conseguir visualizar e interagir com um seletor no topo da tabela para alternar entre "Visão por contatos" e "Visão por empresas".
2. **Atualização de Cards (Totalizadores):** Ao ativar a "Visão por empresas", os indicadores de topo devem atualizar para mostrar o "Total de Empresas" e a "Proporção de Empresas Abordadas".
3. **Agrupamento na Tabela:** A listagem principal deve refletir a Empresa na coluna de nome em vez do contato individual.
4. **Agregação de Colunas:** A coluna "Última qualificação", "Tags" e "Avaliação/Risco" devem consolidar de maneira precisa as informações dos contatos vinculados àquela respectiva Empresa.
5. **Integração Back-end:** A listagem deve funcionar perfeitamente requisitando o endpoint com o parâmetro `?entity_mode=company`.
6. **Performance (SLA):** O carregamento da visão agrupada (Empresas) deve respeitar o limite de 3 segundos de resposta no load dos dados.

## 4. Implementation (Implementação)
* **Dependências:** Modelagem correta das Foreign Keys (Contatos x Empresas) populadas no banco para as instâncias B2B.
* **Estimativa de Tempo (T-Shirt Size):** Grande (L) - Criação de cálculos agrupados e alteração de componentes globais do Front.
* **Recursos Necessários:** 1 Back-end Pleno, 1 Front-end Pleno.
* **Analytics Tracking:** `id="toggle-portfolio-company-view"`.

## 5. Risks and Mitigations (Riscos e Mitigações)
* **Performance / Paginação:** A rotina de "agrupar avaliações baseada em filhos de CNPJ" para exibir o "Risco e Qualificação mais recente" da Empresa pode comprometer o Response Time da requisição.
  * *Mitigação:* Se o Load ultrapassar 3s de *Execution Time* no banco, o time deve paralisar a *Feature* e redesenhar a tabela para possuir contadores de Materialized View disparados em *Background Jobs*.
