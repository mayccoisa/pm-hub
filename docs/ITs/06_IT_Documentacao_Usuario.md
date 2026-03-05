# Instrução de Trabalho (IT) - Criação de Documentação para o Usuário Final (Help Center)

## Objetivos
Garantir que toda nova funcionalidade ou épico entregue venha acompanhado de uma documentação clara, visual e acessível para o *cliente final*. O objetivo não é apenas explicar o que o sistema faz, mas *como* o usuário pode tirar proveito dele, reduzindo a carga de tickets no time de Suporte/Customer Success (CS).

## Escopo
Aplica-se a qualquer lançamento de feature voltada para o usuário final (End-User) que altere fluxos de navegação ou introduza novos conceitos na plataforma.

---

## 🛑 Passo a Passo (Workflow)

### 1. Estrutura do Artigo
**Objetivo:** Manter um padrão de leitura escaneável. Ninguém lê manuais gigantes; os usuários buscam respostas rápidas.
* [ ] **Título Claro e Orientado a Ação:** Ex: "Como criar o seu PDI usando IA" em vez de "Módulo PDI - Nova Versão".
* [ ] **Visão Geral (O que é e por que usar?):** 1 a 2 parágrafos explicando o benefício da funcionalidade antes de explicar como clicar.
* [ ] **Caminho de Acesso (Breadcrumbs):** Diga exatamente onde o usuário deve clicar para chegar lá. Ex: *Menu Lateral > Desenvolvimento > Meu PDI*.

### 2. Passo a Passo Visual (Guias de Uso)
**Objetivo:** Mostrar, não apenas contar. As pessoas têm curva de aprendizado visual.
* [ ] **Lista Numerada:** Descreva o fluxo de "happy path" em passos curtos (1., 2., 3.).
* [ ] **[ INSERIR SCREENSHOT DA TELA AQUI ]**: Adicionar print de tela focando no formulário ou botão em questão. *Dica: Use marcações (setas quadradas, contornos vermelhos) para chamar a atenção para a área de foco.*
* [ ] **[ INSERIR GIF QUE DEMONSTRE TAL COMPORTAMENTO AQUI ]**: Se houver uma micro-interação complexa (ex: arrastar e soltar cards, preenchimento dinâmico de IA), grave um GIF de no máximo 5 a 10 segundos.

### 3. Regras de Negócio Traduzidas
**Objetivo:** O usuário não precisa saber como o código funciona, ele só precisa saber os limites do sistema.
* [ ] **Alertas e Limitações:** Use Caixas de Dica (Callouts/Tips). Ex: *⚠️ Atenção: Você não pode alterar as ações do PDI após serem aprovadas pelo seu gestor.*
* [ ] **Permissões necessárias:** Fica claro quem pode fazer isso? "Apenas usuários com perfil de Gestor conseguem visualizar esta aba".

### 4. FAQ (Frequently Asked Questions) e Resolução de Problemas
**Objetivo:** Antecipar as dúvidas e erros comuns que a QA ou Pesquisa já detectou.
* [ ] Criar no mínimo 3 perguntas comuns. (Ex: "E se eu não receber o e-mail do meu Nudge semanal?").
* [ ] Para erros conhecidos, mapeie a saída. Ex: "Se aparecer a mensagem 'Feedback muito curto', tente escrever pelo menos 30 caracteres."

---

## 🚨 Regra de Ouro (Golden Rule)
A documentação do usuário deve ser escrita em linguagem simples e empática, sem jargões técnicos. Nunca escreva "O endpoint retorna erro 500". Escreva: "Se o sistema ficar indisponível, tente recarregar a página." 

O rascunho dessa documentação deve ser criado ou revisado pelo Product Manager / Product Marketing Manager **durante a Sprint de Dev/QA**, e não semanas depois do lançamento.
