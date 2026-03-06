# IT Módulo 03 - Tabela de Contatos e Filtros

## IT-03.1: Validação da Navegação por Abas
**Objetivo:** Garantir a transição e a filtragem rápida pelas abas de topo da listagem.
**Passos:**
1. Descer até a área da lista de contatos.
2. Clicar entre as abas disponíveis: "Todos", "Adormecidos", "Alto Risco", "Ativos".
**Resultados Esperados:**
- A aba selecionada deve ter seu "Active State" ativado (linha azul em sublinhado).
- A tabela logo abaixo deve recarregar exibir APENAS os contatos correspondentes à condição da aba clicada. Ex: Ao clicar em "Alto Risco", apenas os contatos com risco "Alto" ou "Crítico" devem aparecer (validar a regra de negócio com o(a) PM responsável).
- O contador de paginação deve ser ajustado para o novo total filtrado por essas abas.

## IT-03.2: Validação da Pesquisa Livre (Caixa "Pesquisar")
**Objetivo:** Validar busca textual de usuário na tabela.
**Passos:**
1. Digitar um nome (ex: "Ofélia") na caixa com ícone de lupa "Pesquisar".
2. Acionar Enter ou aguardar o *debounce* da busca.
**Resultados Esperados:**
- A tabela deve retornar linhas que correspondam ao termo procurado por nome do Contato ou pela Empresa atrelada a ele.
- Caso não retorne resultados, exibir "Empty State" de tabela amigável (ex: "Nenhum resultado encontrado").

## IT-03.3: Validação dos Botões de Ação
**Objetivo:** Testar caminhos para nova funcionalidade e filtros avançados.
**Passos:**
1. Clicar no botão "Filtrar".
2. Clicar no botão "+ Novo Contato" (Azul, botão principal).
**Resultados Esperados:**
- O botão "Filtrar" deve acionar a abertura de um Modal, Popover ou gaveta (Drawer) com opções avançadas de filtros.
- O botão "+ Novo Contato" deve direcionar o usuário para o fluxo de cadastro ou disparar um modal compatível.
- Ícone do Megafone (Ações em massa) deve ter estado habilitado ou desabilitado a depender da seleção das checkboxes das linhas.

## IT-03.4: Colunas de Resumo de Cada Contato (Listagem)
**Objetivo:** Conferir consistência dos dados, cores e tipografia de cada linha listada.
**Passos:**
1. Avaliar uma linha completa da tabela de listagem de contatos.
**Resultados Esperados para cada coluna:**
- **Checkbox:** Selecionável de forma individual e de forma global (header).
- **Contato:** Exibição do Nome completo na primeira linha, e Subtítulo (Nome da Empresa) na linha inferior, em menor tamanho/cor suavizada.
- **Tags:** Rendering arredondado contendo o texto, com base nas categorias cadastradas (Ex: "Recorrente" em verde, "Alto retorno" em rosa, "Cliente difícil" em roxo, sem tag com texto placeholder "Sem tag" vazado).
- **Última Atividade:** Ícone contextual (telefone, e-mail, wpp, instagram/câmera) e o timing formatado (ex: "Há 7 dias", ou com badge em vermelho "Em andamento - 10 dias").
- **Última Atualização:** Ícone secundário (fogo, engrenagem) da origem seguido do resumo de data e tipo de rotina (Ex: "00/00/00 - Dúvida..."). Deve aplicar os "três pontinhos" (ellipsis) se ultrapassar o limite de caracteres.
- **Valor:** Valor exibido no padrão (R$ ###.###,##).
- **Avaliação:** Número da nota (ex: 10.0, 8.5) precedido do ícone de estrela preenchido.
- **Risco de Churn:** Exibição do smiley icon, Label correspondente (Ex: "Muito baixo") alinhados; e o gráfico de barra em pílula tracejadas correspondente (preenchido com a cor de periculosidade: Verde, Azul, Amarelo, Vermelho).

## IT-03.5: Paginação e Controle de Quantidade
**Objetivo:** Validar volume de dados transitados e layout da estrutura de divisão em páginas.
**Passos:**
1. Fazer scroll até o fim da tabela.
2. Trocar o "Mostrar [10] por página" para 20 ou 50.
3. Usar os *Controls* (Setas < > e link de Ver Mais/Carregar).
**Resultados Esperados:**
- O texto dinâmico (Ex: "Mostrando 1-10 de 160 resultados") deve ser preciso baseado na busca atual.
- Ao alterar itens p/ página, o grid preencherá o número solicitado de linhas ou exibirá loader limitando as requisições, melhorando a performance de FrontEnd.
