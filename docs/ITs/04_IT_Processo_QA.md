# Instrução de Trabalho (IT) - Processo de Quality Assurance (QA)

## Objetivos
Garantir que as entregas de software pela Engenharia estejam alinhadas não apenas com as regras de negócio escritas pelo PO, mas também que não introduzam novos problemas (*regressões*) e que a interface (UI/UX) bata com o que o Design projetou. 

## Escopo
Aplica-se a todos os tickets (Features e Enhancements) desenvolvidos antes de irem para o ambiente de Produção.

---

## 🛑 Passo a Passo (Workflow)

### 1. Entendimento e Cenários de Teste (Shift-Left Testing)
**Objetivo:** O trabalho do QA começa *antes* do código ficar pronto, lendo os requisitos e prevendo onde as coisas podem quebrar.
* [ ] **Análise do PRD / Task:** O QA deve ler a tarefa e os Critérios de Aceite (do PO) assim que a tarefa entrar na Sprint.
* [ ] **Levantamento de Casos de Borda (Edge Cases):** Identificar cenários não mapeados. O que acontece se o usuário submeter o formulário enviando *null*? E se enviar *10.000 caracteres*?
* [ ] **Escrita de Test Cases (Opcional, mas recomendado para Épicos Críticos):** Documentar o que será testado no formato *Given-When-Then* (Dado X, Quando Y acontecer, Então Z deve ser o resultado).

### 2. QA Funcional (Caixa Preta)
**Objetivo:** Validar se a tarefa faz o que foi prometido nos Critérios de Aceite da User Story ou do Enhancement.
* [ ] **Happy Path (Caminho Feliz):** Executar o fluxo ideal mapeado na tarefa. Tudo funciona do início ao fim?
* [ ] **Negative Path (Caminhos de Erro):** Forçar erros (dados inválidos, timeouts de rede) e verificar se o sistema lida com o erro graciosamente sem "tela branca da morte" (White Screen of Death).
* [ ] **Verificação de Regras de Negócio:** Validar restrições (ex: "Se usuário for Admin, botão X aparece; se não, some").

### 3. QA Visual / UI (Design QA)
**Objetivo:** Garantir que o produto final construído se parece com o protótipo de Design estabelecido e atende boas práticas.
* [ ] **Pixel Parity:** A tela desenvolvida segue os espaçamentos, tipografia e cores do link do Figma entregue na tarefa?
* [ ] **Responsividade:** A tela quebra ou fica ilegível em tamanhos menores (Mobile/Tablet) ou quando sofre *zoom* nativo do navegador?
* [ ] **Micro-interações:** Validar se os Skeletons (Loadings), Empty States e Tooltips mapeados pelo Design (IT-02) foram implementados (e não apenas o layout "feliz").

### 4. Relato de Bugs (Bug Reporting)
**Objetivo:** Comunicar falhas aos desenvolvedores de forma clara e ágil, para não gerar atrito ("na minha máquina funciona").
* [ ] **Evidências Claras:** Um ticket de bug retornado pelo QA DEVE ter Print/Screenshot ou Gravação de Tela (ex: Loom / Gif).
* [ ] **Passos de Reprodução (Steps to Reproduce):** Instruções de 1..2..3 para o Dev recriar o problema no ambiente local/Staging.
* [ ] **Comportamento Esperado vs. Atual:** Explicitar o que ocorreu diferente do Acordo/Requisito.

## 🚨 Regras de Ouro (Golden Rules)
1. **Zero Achismo:** Se a regra não estiver escrita na tarefa (PO) nem desenhada no Figma (Design), o QA deve parar tudo, chamar ambos e alinhar antes de reabrir o ticket para os Devs.
2. **O QA é o advogado do Usuário Final, não do Código.** Sua missão não é validar se o código é bonito, mas se o usuário vai ter frustrações utilizando a Feature entregue.
