# Wireframe: Dashboard Financeiro (Register Life)

**Objetivo (JTBD):** "Preciso bater o olho e saber se a saúde financeira da casa está positiva ou negativa este mês, e rapidamente identificar onde estou gastando além do planejado para poder cortar."

---

## Estrutura da Tela (Layout Proposto)

### 1. Header & Filtro Global (Linha 1)

**[ Finanças ]** - Acompanhe seus gastos, receitas e saúde financeira.
`< Março 2026 >` | `[ Exportar CSV ]` | `[ + Nova Transação ]`

*Filtros (Abas Toggle):*
`[ Visão Geral (Casa) ]` | `[ Maycon ]` | `V[ Mariana ]`

---

### 2. Visão Macro: O Bolso (Linha 2)

*Esta seção dá a resposta imediata de "Estou no vermelho ou azul?" consolidando as informações.*

| SALDO ATUAL DO MÊS (Receitas - Despesas Realizadas) |
| :--- |
| **🟢 R$ +1.200,00** *(Cor muda para vermelho se negativo)* |
| Previsto para fechar o mês: **R$ +450,00** |

*Sub-blocos visuais menores lado a lado:*
*   **🔹 Entradas Totais:** R$ 5.000,00
*   **🔴 Saídas Totais:** R$ 3.800,00
*   **🐷 Reservas Guardadas:** R$ 500,00

---

### 3. Visão de "Vazamento": Onde estou gastando muito? (Linha 3)

*Esta é a área de ação. Substitui o gráfico de rosca pelo conceito de "Orçamento vs Realizado" em barras lineares.*

**Análise de Despesas e Orçamentos** `[ Este Mês v ]`

*Exibição em lista com Barras de Progresso Horizontais*:

1.  **Transporte** (Orçamento: R$ 500,00)
    `[██████████████████████████] 123%` 🔴 **R$ 616,80** *(Estourou o limite!)*
2.  **Moradia** (Orçamento: R$ 1.500,00)
    `[████████████████........] 66%` 🟢 **R$ 993,00**
3.  **Alimentação** (Orçamento: R$ 1.200,00)
    `[███████.................] 25%` 🟢 **R$ 300,00**

👉 *Botão:* `[ Ajustar Limites de Orçamento ]`

---

### 4. Visão de Previsibilidade (Linha 4 - Dividida em duas colunas)

*Para evitar sustos ao longo do mês.*

**Coluna A: Cartões de Crédito**
*(A visão deve focar na fatura, não como categoria de gasto)*

*   **💳 Itaú** - Fatura Aberta (Vence dia 10)
    `[████████████........] 62% do limite global` -> **R$ 616,80**
*   **💳 Nubank** - Fatura Fechada (Vence dia 15)
    **R$ 265,50** ⚠️ *(Atenção, pagamento próximo)*

**Coluna B: Compromissos Futuros (Boleto/Assinatura)**
*O que falta pagar no mês atual para o gráfico "Previsto para fechar" não ter erros.*

*   **⚡ Luz:** R$ 150,00 (Vence dia 20)
*   **🌐 Internet:** R$ 100,00 (Vence dia 25)
*   **🎬 Netflix:** R$ 55,90 (Vence dia 28)

---

## 💡 Principais Mudanças vs Tela Atual
1.  **Fim da Duplicação:** As caixas separadas para Maycon e Mariana foram consolidadas. O filtro no topo permite ver o detalhe de cada um sem poluir a visão principal.
2.  **Adoção de Orçamento (Budget):** O gráfico de rosca (que só mostra distribuição) foi trocado por barras de progresso contra um limite predefinido. Isso gera urgência de ação (ex: "Estourou 123% do limite de transporte").
3.  **Cartão de Crédito tratado como Fatura:** Retiramos o cartão de crédito da lista de "Despesas" e o colocamos na área de previsibilidade. O gasto do almoço no cartão agora entra na barra de orçamento de "Alimentação".
