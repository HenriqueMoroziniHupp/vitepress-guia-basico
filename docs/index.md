# Getting Started

Bem vindo a um guia não oficial do VitePress.

Essa é a página inicial é um clone do `README.md`.
O que você vê aqui nesta página é exatamente o mesmo que você verá na pagina inicial do repositório desta doc.

Com a ajuda deste guia, você irá aprender construir um site de documentação bem organizada como a própria documentação do [Vue](https://vuejs.org/), ou organizar um `README.md` longo e extenso em um portal web intuitivo, que é o que foi feito neste exemplo. Toda esta página estará organizada por secção nas próximas páginas.

Criaremos documentação de forma simples utilizando arquivos markdown, [inicie por aqui](/started/started)

## Estrutura inicial

Para começar, acesse [Getting Started](https://vitepress.vuejs.org/guide/getting-started), documentação própria do `VitePress` e crie a estrutura inicial seguindo o passos a passo fornecido pela ferramenta.
O resultado será um site semelhante a este com apenas a [pagina inicial](/).

Na próxima secção iremos adicionar novas funcionalidades como header e sidebar.

:::tip
Siga o passo a passo oficial sem medo, ler documentação é algo que o desenvolvedor **deve** fazer sempre.
:::

:::warning
Este guia foi construído con a versão [1.0.0-alpha.35](https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md#100-alpha35-2023-01-03), qualquer problema consulte a [documentação oficial](https://vitepress.vuejs.org/).
:::

## Arquivo de configuração

As instruções a partir dessa secção será para criar e configurar o `config.js`

### Criar o config.js

Devemos criar dentro do diretório `docs/.vitepress` um arquivo nomeado de `config.js`.
Este arquivo é responsável por configurar as funcionalidades do VitePress.

### Adicionar instruções no `config.js`

No arquivo `config.js`, crie um `export default`, as instruções serão inseridas dentro desse export:

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

### Titulo e descrição

Aqui passaremos a adicionar as configurações dentro do `export default`, teremos chave e valor do titulo e descrição.

```js
export default {
  title: "Exemplo Vitepress",
  description: "Projeto para aprender o básico de VitePress",
};
```

## Configurar o tema

Crie um objeto `themeConfig` nele iremos configurar o tema

```js
export default {
  ..
  themeConfig: {
    ..
  }
}
```

### SocialLink

Social link é um ícone de alguma rede social que fica no final do cabeçalho.

Dentro de `themeConfig` iremos adicionar um array [`socialLinks`](https://vitepress.vuejs.org/config/theme-configs#sociallinks) com objetos contendo a chave `icon` e `link`, ambos string

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

### NavBar

Dentro de `themeConfig` iremos adicionar um array [`nav`](https://vitepress.vuejs.org/guide/theme-nav) com objetos contendo a chave `text` e `link`, ambos string

```js
  nav: [
    { text: 'Inicio', link: '/' },
    { text: 'Vue', link: `https://vuejs.org/` },
    { text: 'Vitepress', link: 'https://vitepress.vuejs.org/' },
  ],
```

### SideBar

A configuração da `Sidebar` é um pouco diferente das anteriores, possui algumas configurações extras, como os subitens e se a secção poderá expandir/fechar

Dentro de `themeConfig` iremos adicionar um array [`sidebar`](https://vitepress.vuejs.org/guide/theme-sidebar), com objetos contendo a chave `text` (string, obrigatório), `collapsible` (boolean, opcional), um array `items` (array, obrigatório) com objetos contendo a chave `text` (string, obrigatório) e `link` (string, obrigatório).

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

O `link` será a navegação entre o diretório para localizar os arquivos markdown, caso queira estruturar por pastas, deve adicionar pastas dentro do diretório raiz `docs`.

O bloco de código a cima é a configuração de rotas desta documentação, está disponível no portefólio.

:::tip
Exemplo: para acessar `docs/guia/exemplo.md` será com `/guia/exemplo`
:::

### EditLink

Esta configuração leva o usuário direto para o arquivo markdown no github para edita-lo com novas sugestões e correção na documentação.

Dentro de `themeConfig` iremos adicionar um array [`editLink`](https://vitepress.vuejs.org/guide/theme-edit-link) com objetos contendo a chave `pattern` e `text`, ambos string

```js
  editLink: {
    pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    text: 'Edit this page on GitHub'
  },
```

### Last Updated

Esta configuração exibe a data de ultima atualização da documentação.

Dentro de `themeConfig` iremos adicionar uma chave [`lastUpdated`](https://vitepress.vuejs.org/guide/theme-last-updated) booleana

```js
  lastUpdated: true,
```
