# CineVault

CineVault é uma plataforma web moderna para exploração de filmes, séries e conteúdos do universo cinematográfico. O projeto foi desenvolvido com foco em experiência de usuário, interface interativa e organização de dados do entretenimento, permitindo navegar por títulos, descobrir celebridades, acompanhar notícias e interagir com avaliações e listas pessoais.

O sistema possui navegação dinâmica, páginas detalhadas de conteúdo, filtros de exploração e recursos de interação do usuário como avaliações, favoritos e reviews.

Repositório oficial:
https://github.com/joaodorast/cine-vault

---

# Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando tecnologias modernas do ecossistema frontend.

* React
* Next.js
* Vite
* TypeScript
* TailwindCSS
* Framer Motion

Essas ferramentas foram escolhidas para garantir desempenho, escalabilidade, tipagem segura e uma experiência visual moderna.

---

# Funcionalidades

## Conteúdo Expandido

A plataforma conta com uma base de dados rica com diferentes tipos de conteúdo do cinema.

* Mais de 20 títulos entre filmes, séries, documentários e animações
* 4 séries completas
* 2 documentários
* 8 celebridades com biografia e filmografia
* 5 notícias do mundo do cinema

Cada item possui dados detalhados como:

* País de produção
* Idioma original
* Estúdio
* Orçamento
* Bilheteria
* Prêmios
* Classificação

---

# Páginas e Rotas

A aplicação possui múltiplas rotas para navegação e exploração de conteúdo.

| Rota         | Descrição                                                    |
| ------------ | ------------------------------------------------------------ |
| /explorar    | Exploração com filtros por tipo, gênero, país e ordenação    |
| /rankings    | Rankings de filmes mais bem avaliados, premiados e populares |
| /pessoas     | Catálogo de atores e diretores                               |
| /pessoa/:id  | Perfil completo com biografia e filmografia                  |
| /noticias    | Feed de notícias sobre cinema                                |
| /noticia/:id | Página completa da notícia                                   |
| /serie/:id   | Página de série com temporadas e episódios                   |

---

# Funcionalidades de Usuário

O CineVault possui recursos de interação para melhorar a experiência do usuário.

* Favoritar filmes e séries
* Criar uma watchlist pessoal
* Avaliar conteúdos de 1 a 10
* Sistema de estrelas interativas
* Escrever reviews com texto livre
* Busca em tempo real no navbar com resultados instantâneos

---

# Homepage

A página inicial foi projetada para facilitar a descoberta de conteúdo.

Seções disponíveis:

* Carrossel de séries
* Trending
* Top 10
* Categorias por gênero
* Celebridades
* Notícias recentes

A homepage também possui um footer completo com links de navegação para todas as seções da plataforma.

---

# Navegação

A barra de navegação inclui acesso rápido às principais áreas do sistema.

Links disponíveis:

* Explorar
* Rankings
* Celebridades
* Notícias

Também inclui um sistema de busca com resultados instantâneos exibidos diretamente no dropdown.

---

# Como Executar o Projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/joaodorast/cine-vault.git
```

## 2. Entrar na pasta do projeto

```bash
cd cine-vault
```

## 3. Instalar dependências

```bash
npm install
```

ou

```bash
yarn install
```

## 4. Rodar o projeto em ambiente de desenvolvimento

```bash
npm run dev
```

Após iniciar o servidor, abra no navegador:

```
http://localhost:5173
```

---

# Estrutura Geral do Projeto

```
cine-vault
 ├── src
 │   ├── components
 │   ├── pages
 │   ├── data
 │   ├── hooks
 │   ├── types
 │   ├── styles
 │   └── utils
 ├── public
 ├── package.json
 └── vite.config.ts
```

---

# Objetivo do Projeto

O CineVault foi desenvolvido como um projeto de estudo e prática para desenvolvimento frontend moderno, explorando conceitos como:

* Arquitetura de aplicações React
* Organização de componentes
* Gerenciamento de estado
* Animações com Framer Motion
* Interfaces responsivas com TailwindCSS
* Estruturação de dados para aplicações de conteúdo
