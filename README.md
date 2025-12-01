# 🍣 OnMenu - Cardápio Digital Interativo

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

> **Link do Projeto Online:** [https://on-menu-phi.vercel.app/](https://on-menu-phi.vercel.app/)

O **OnMenu** é uma Single Page Application (SPA) desenvolvida como projeto acadêmico para demonstrar conceitos de desenvolvimento Frontend com React. O sistema simula a experiência completa de um consumidor em um restaurante japonês, desde a escolha dos pratos até a finalização do pedido, com foco em UI/UX responsivo e navegação fluida.

---

## 📚 Conceitos Acadêmicos Implementados

Este projeto foi construído para atender aos requisitos de implementação do **React Router DOM v6**. Abaixo está o mapeamento de onde cada conceito foi aplicado no código:

| Conceito | Arquivo Principal | Descrição da Implementação |
|----------|-------------------|----------------------------|
| **1. Configuração de Rotas** | `src/App.jsx` | Utilização do `BrowserRouter` e `Routes` para definir a estrutura de navegação da aplicação. |
| **2. Rotas Aninhadas (Nested Routes)** | `src/layouts/MainLayout.jsx` | Criação de um layout base que mantém o Carrinho acessível globalmente, utilizando `<Outlet />` para renderizar as páginas filhas. |
| **3. Parâmetros de Rota (Dynamic Routes)** | `src/pages/ProductDetails.jsx` | Uso do hook `useParams` para capturar o ID do produto na URL (`/produto/:id`) e renderizar os detalhes correspondentes. |
| **4. Navegação Programática** | `src/pages/Checkout.jsx` | Uso do hook `useNavigate` para redirecionar o usuário automaticamente para a Home caso o carrinho esteja vazio ou para a tela de Sucesso após o pedido. |
| **5. Tratamento de Erro (404)** | `src/pages/NotFound.jsx` | Implementação de uma rota coringa (`path="*"`) para capturar URLs inválidas e mostrar uma página amigável de "Prato não encontrado". |

---

## 🚀 Funcionalidades do Projeto

Além dos requisitos de roteamento, o projeto conta com funcionalidades de uma aplicação real:

* **📱 Design Responsivo Mobile-First:** Interface adaptável que funciona como um app nativo no celular e expande para grid no desktop.
* **🛒 Carrinho Persistente:** Utilização do `localStorage` e `useEffect` para salvar os itens do carrinho. O usuário pode fechar o navegador e voltar que o pedido continua lá.
* **🔢 Lógica Blindada:** Sistema de adição/remoção que impede erros matemáticos ou duplicação visual de itens.
* **✅ Fluxo de Checkout:** Formulário dinâmico que altera os campos baseado na escolha de "Retirada" ou "Entrega".
* **🎨 UI/UX Polido:** Feedback visual nos botões, animações de hover e transições de tela.

---

## 🛠️ Tecnologias Utilizadas

* **React JS:** Biblioteca principal para construção da interface.
* **Vite:** Build tool para desenvolvimento rápido e otimizado.
* **React Router DOM:** Gerenciamento de rotas e navegação SPA.
* **Lucide React:** Biblioteca de ícones leves e modernos.
* **CSS Modules/Scoped:** Estilização organizada e responsiva.
* **Vercel:** Plataforma de deploy contínuo.



