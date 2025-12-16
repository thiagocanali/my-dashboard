# My Dashboard

Um dashboard moderno construído com **Vue 3** e **Vite**, contendo diversas páginas de gerenciamento de usuários, produtos e configurações, pronto para ser hospedado em GitHub Pages.

---

## 📂 Estrutura de Páginas

O projeto possui as seguintes páginas:

### 1. **Dashboard**
- Página principal do sistema.
- Mostra indicadores resumidos, estatísticas e atalhos para outras páginas.
- Página inicial após login.

### 2. **Profile**
- Página de perfil do usuário.
- Exibe informações do usuário e permite atualização de dados pessoais.

### 3. **Product**
- Página de produtos detalhada.
- Funcionalidades:
  - Galeria de imagens do produto.
  - Seleção de quantidade.
  - Visualização de preço, desconto e estoque.
  - Avaliações de clientes.
  - Abas de descrição, especificações e avaliações.
  - Botão de adicionar ao carrinho.
- Layout responsivo e interativo.

### 4. **Contact**
- Página de contato.
- Formulário para envio de mensagens.
- Pode ser integrada com backend ou serviço de email.

### 5. **Customer**
- Página de clientes.
- Lista de clientes cadastrados.
- Possibilidade de buscar, filtrar e visualizar detalhes de cada cliente.

### 6. **Activation**
- Página de ativação de contas ou funcionalidades.
- Permite gerenciar estados de ativação.

### 7. **Settings**
- Página de configurações gerais do sistema.
- Permite alterar preferências do usuário e configurações globais do dashboard.

---

## ⚡ Funcionalidades do Projeto

- **Vue 3 + Vite**: setup moderno para desenvolvimento rápido.
- **Vue Router**: navegação SPA com lazy loading.
- **Componentização**: páginas e elementos reutilizáveis.
- **Responsividade**: design adaptado para desktop e mobile.
- **Interatividade**: manipulação de dados, galeria de imagens, abas, carrinho de produtos e quantidade.
- **Fácil deploy**: pronto para GitHub Pages com `createWebHashHistory()`.