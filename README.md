# Overwatch Heroes — wsFrontend-Fabrica26.2

Projeto Final da Fábrica de Software da Unipê. Uma aplicação web que consome a [OverFast API](https://overfast-api.tekrop.fr/) para exibir os heróis de Overwatch, com busca por nome e paginação.

## ✨ Funcionalidades

- Listagem de todos os heróis do jogo, com imagem, nome e role (função)
- Busca de heróis por nome em tempo real
- Paginação dos resultados (6 heróis por página)
- Layout responsivo com Tailwind CSS

## 🛠️ Tecnologias

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Axios](https://axios-http.com/) para consumo da API
- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) para lint

## 📁 Estrutura do projeto

```
src/
├── assets/              # Imagens estáticas
├── components/
│   ├── HeroCard.jsx     # Card individual de um herói
│   ├── HeroList.jsx     # Grid com a lista de heróis da página atual
│   ├── HeroSection.jsx  # Seção de título/apresentação
│   ├── Pagination.jsx   # Controles de paginação (anterior/próxima)
│   └── SearchInput.jsx  # Campo de busca por nome
├── App.jsx              # Componente principal: busca os dados, filtra e pagina
├── App.css
├── index.css
└── main.jsx             # Ponto de entrada da aplicação
```

## 🚀 Como rodar o projeto

Pré-requisitos: [Node.js](https://nodejs.org/) instalado.

```bash
# Instalar as dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Gerar build de produção
npm run build

# Rodar o lint
npm run lint

# Pré-visualizar a build de produção
npm run preview
```

Depois de rodar `npm run dev`, acesse o endereço mostrado no terminal (por padrão `http://localhost:5173`).

## 🔌 API utilizada

Os dados dos heróis são obtidos do endpoint:

```
GET https://overfast-api.tekrop.fr/heroes
```

Cada herói retorna informações como `name`, `role` e `portrait`, usadas para montar os cards exibidos na tela.

## 📄 Sobre

Projeto desenvolvido como parte do nível **Intermediário** da Fábrica de Software da Unipê (React, Tailwind CSS, filtro de pesquisa e paginação).

## Autor

José Edgar Ferriera de Araujo Neto.