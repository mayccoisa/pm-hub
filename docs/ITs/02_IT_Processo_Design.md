# Instrução de Trabalho (IT) - Design Product Process

## Objetivos
Definir o padrão de qualidade e o fluxo das entregas de Design no projeto PM-Hub. O Design não deve ser apenas "deixar bonito" de forma acidental, e sim resolver atritos, prever fluxos de erro (Edge Cases) e facilitar a entrega para a Engenharia ter certeza do que codificar.

## Escopo
Todo entregável de design de interface (UI/UX) para as Web e Mobile Apps (MVP ou Continuidade).

---

## 🛑 Passo a Passo (Workflow)

### 1. Pesquisa de Interface e Referências (UI/UX Research)
**Objetivo:** Não reinventar a roda desnecessariamente, mas ter consistência visual alinhada às expectativas do mercado (SaaS B2B Moderno).
* [ ] **Leitura do PRD:** O designer deve ler todo o _Problem Statement_ e os _Critérios de Aceite_ gerados pelo PM (veja [01_IT_Processo_PM.md](./01_IT_Processo_PM.md)).
* [ ] **Análise de Competidores Similares:** Buscar padrões de usabilidade existentes (Notion, Linear, Figma, Hubspot).
* [ ] **Criação de Moodboard:** Adicionar "screenshots" e anotações num Frame (ex. FigJam).

### 2. Rabiscos em Baixa Fidelidade (Wireframes / Lo-Fi)
**Objetivo:** Aprovar fluxo cognitivo e organização em tela ANTES de gastar tempo com estética e tokens (Design System).
* [ ] Desenhe as telas de estado **Feliz (Happy Path)**.
* [ ] Documente o "esqueleto" e navegação macro do fluxo de usuário previsto na Feature, usando caixas e fluxogramas textuais.
* [ ] **Alinhamento do Protótipo (Lo-Fi Sign-off):** Reunião rápida (15 min) com o PM e 1 Tech Lead para apontarem ajustes de regras de negócio ou limites viáveis de tecnologia antes do refino.

### 3. Design em Alta Fidelidade (Hi-Fi) e Componentização
**Objetivo:** Transformar o layout aprovado em telas "prontas para código", usando tokens rigorosos.
* [ ] Aplicar as paletas de cores globais (Brand Colors) e Escalas Tipográficas (TailwindCSS Defaults, se for o caso).
* [ ] Componentizar padrões (Botões Primários/Secundários, Modais, Tooltips, Cards).
* [ ] Variantes: Aplicar estados em botões/inputs (Hover, Focus, Disabled).
* [ ] Criar no mínimo o protótipo clicável Macro da User Story.

### 4. Cobertura de Estados e Edge Cases (Crucial)
**Objetivo:** Os desenvolvedores não devem ter que "adivinhar" o que acontece quando a API cai ou como informar o usuário sobre uma ação.
* [ ] **Skeleton / Loading States:** Desenhe a tela de carregamento do componente de dados.
* [ ] **Empty States:** O que aparece quando a tabela/lista está vazia?
* [ ] **Error States & Feedback:** Documente e mapeie a interação de erro. Qual é a resposta visual se falhar? (Toasts de Erro vermelhos, Fallback UI, modais explicativos).
* [ ] **Success States:** O feedback visual após a ação da US ser bem sucedida (Toasts de Sucesso verdes, Confetti, etc).
* [ ] **Micro-interações:** Garanta que todas as micro-operações (ex: favoritar, copiar link, deletar card) tenham um fluxo mapeado no arquivo.
* [ ] **Tooltips e Helper Texts:** Valide se todas as interfaces que precisam de explicação extra (ícones ambíguos, formulários complexos) possuem *Tooltips*, e se o texto condiz com a ajuda necessária.

### 5. Revisão Final e Validação (Pre-Handoff)
**Objetivo:** Último check antes do código, garantindo que nenhum buraco de UX ficou para o dev resolver.
* [ ] Revisar as interações de Erro mapeadas no passo anterior.
* [ ] Conferir se todas as micro-interações necessárias estão explícitas.
* [ ] Conferir os textos de todas as tooltips desenhadas.
* [ ] Validar a jornada ponta a ponta com um PM ou Stakeholder (Sign-off Final).

### 6. Handoff de Design da Feature
**Objetivo:** Passagem de bastão documentada para a esteira da engenharia.
* [ ] Adicionar notas flutuantes no Figma/Miro ao lado da tela (Explicando animações CSS não óbvias, ou regras condicionais "Este botão só aparece se X").
* [ ] Entregar o Link do Protótipo final no Card/Ticket da respectiva Tarefa (Jira/Linear).
* [ ] Finalizar marcando o épico do lado de Design como `Done` e passando a bola para a Sprint de Code.

## 🚨 Regras de Ouro de Acessibilidade (Golden Rules)
1. **Contraste:** Não faça textos em contraste abaixo do aceitável WCAG (Verde claro com texto branco, ex). O Design deve ser usável por todos.
2. **Hitboxes (Área de Toque):** Botões primários mobile nunca terão menos de 44x44px.
