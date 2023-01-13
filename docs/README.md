# Getting Started

Essa é a página inicial `index.md`

Criaremos documentação de forma simples utilizando arquivos markdown

## 1 - Apresentar estrutura inicial

Esta estrutura é a criada no [Getting Started](https://vitepress.vuejs.org/guide/getting-started), documentação do `Vitepress`

## 2 - Adicionar o config.js

Devemos adicionar dentro do diretório `docs/.vitepress` um arquivo nomeado de config.js`

### 2.1 - Adicionar instruções no `config.js`

As instruções dessa secção será para configurar o `config.js`

Adicionar um `export default`, as instruções estarão dentro desse export,

```js
export default {
  ...
}
```

Iremos configurar:

- [Navbar](https://vitepress.vuejs.org/guide/theme-nav)
- [SocialLink](https://vitepress.vuejs.org/config/theme-configs#sociallinks)
- [Sidebar](https://vitepress.vuejs.org/guide/theme-sidebar)
- [Edit Link](https://vitepress.vuejs.org/guide/theme-edit-link)
- [Last Updated](https://vitepress.vuejs.org/guide/theme-last-updated)



### 2.2 Titulo e descrição

Aqui passaremos a adicionar as configurações dentro do `export default`

```js
  title: "Exemplo Vitepress",
  description: "Projeto para demonstrar o Vitepress para o time",
```

## 3 - Configurar o tema

Criaremos um objeto `themeConfig` nele iremos configurar o tema

```js
themeConfig: {
  ...
  }
```

### 3.1 SocialLink

Dentro de `themeConfig` iremos adicionar um array [`socialLinks`](https://vitepress.vuejs.org/config/theme-configs#sociallinks) com objetos contendo a chave `icon` e `link`

```js
  socialLinks: [
    { 
      icon: "github", 
      link: "https://github.com/HenriqueMoroziniHupp" 
    },
    { 
      icon: "linkedin", 
      link: "https://br.linkedin.com/in/henrique-morozini-hupp" 
    }
  ],
```

### 3.2 NavBar

Dentro de `themeConfig` iremos adicionar um array [`nav`](https://vitepress.vuejs.org/guide/theme-nav) com objetos contendo a chave `text` e `link`

```js
  nav: [
    { text: 'Inicio', link: '/' },
    { text: 'Vue', link: `https://vuejs.org/` },
    { text: 'Vitepress', link: 'https://vitepress.vuejs.org/' },
  ],
```

### 3.3 SideBar

A configuração da `Sidebar` é um pouco diferente das anteriores, possui algumas configurações extras, como os subitens e se a secção poderá expandir/fechar

Dentro de `themeConfig` iremos adicionar um array [`sidebar`](https://vitepress.vuejs.org/guide/theme-sidebar) com objetos contendo a chave `text` (string, obrigatório), `collapsible` (boolean, opcional), um array `items` (array, obrigatório) com objetos contendo a chave `text` (string, obrigatório) e `link` (string, obrigatório).

```js
    sidebar: [
      {
        text: "Primeiros Passos",
        collapsible: true,
        items: [{ text: "Estrutura Inicial", link: "" }],
      },
      {
        text: "Config.js",
        collapsible: true,
        items: [
          { text: "Criar Config.js", link: "/guide/confgjs" },
          { text: "Título", link: "/guide/title" },
          { text: "Tema", link: "/guide/theme" },
        ],
      },
    ],
```

O `link` será a navegação entre o diretório, caso queira estruturar por pastas, deve adicionar pastas dentro do diretório raiz `docs`

ex: `docs/guia/index.md`

### 3.4 EditLink
Esta configuração leva o usuário direto para o arquivo markdown no github para edita-lo com novas sugestões e correção na documentação.

Dentro de `themeConfig` iremos adicionar um array [`editLink`](https://vitepress.vuejs.org/guide/theme-edit-link) com objetos contendo a chave `pattern` e `text`, ambos string

```js
  editLink: {
    pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    text: 'Edit this page on GitHub'
  },
```


### 3.5 Last Updated

Esta configuração exibe a data de ultima atualização da  documentação

Dentro de `themeConfig` iremos adicionar uma chave [`lastUpdated`](https://vitepress.vuejs.org/guide/theme-last-updated) booleana

```js
  lastUpdated: true,
```

