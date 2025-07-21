# 🎲 AluGames - Aluguel de Board Games

AluGames é um projeto de site responsivo e acessível para aluguel de board games, desenvolvido com foco em boas práticas de HTML semântico, CSS modular e acessibilidade digital.
---

## 💡 Sobre o Projeto

Este projeto foi criado com o objetivo de:

- Simular um painel de aluguel de jogos de tabuleiro
- Promover acessibilidade com uso adequado de elementos semânticos e atributos ARIA
- Garantir responsividade para diferentes dispositivos (desktop, tablet e mobile)

---

## 📸 Interface

A interface exibe os jogos disponíveis para aluguel, permitindo ao usuário alternar entre os estados "Alugar" e "Devolver" com feedback visual.

---

## 🧱 Tecnologias Utilizadas

- **HTML5 Semântico**
- **CSS3 Modular**
  - `main.css`
  - `responsive.css`
  - `_reset.css`
- **Google Fonts**
  - Chakra Petch
  - Inter
- **Responsividade com Media Queries**
- **Acessibilidade**
  - `role`, `aria-label`, uso correto de `button` em vez de `a`
  - Contraste de cores ajustado
  - Uso de landmarks (`<main>`, `<header>`)

---

## 🛠 Funcionalidade

- Os jogos possuem um botão de ação (Alugar/Devolver).
- O botão muda dinamicamente de cor e texto ao ser clicado.
- Um overlay escurece a imagem do jogo alugado, melhorando a percepção visual do estado.

---

## ♿ Acessibilidade

- Navegação por teclado testada com `Tab` e `Enter`
- Uso de `button` ao invés de `a` para ações interativas
- `aria-label` descritivo nos botões
- Contraste visual e feedback visual de ações

---

## 📱 Responsividade

- Layout adaptável para celulares, tablets e telas grandes (via `responsive.css`)
- Elementos redimensionáveis e empilhamento de colunas em telas menores




