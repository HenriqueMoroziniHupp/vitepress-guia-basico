# Configurar o tema

Crie um objeto `themeConfig` nele iremos configurar o tema

```js
export default {
  ..
  themeConfig: {
    ..
  }
}
```

## SocialLink

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

## NavBar

Dentro de `themeConfig` iremos adicionar um array [`nav`](https://vitepress.vuejs.org/guide/theme-nav) com objetos contendo a chave `text` e `link`, ambos string

```js
  nav: [
    { text: 'Inicio', link: '/' },
    { text: 'Vue', link: `https://vuejs.org/` },
    { text: 'Vitepress', link: 'https://vitepress.vuejs.org/' },
  ],
```

## SideBar

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

O `link` será a navegação entre o diretório para localizar os arquivos markdown, caso queira estruturar por pastas, deve adicionar pastas dentro do diretório raiz `docs`

O bloco de código a cima é a configuração de rotas desta documentação, está disponível no portefólio.

:::tip
Exemplo: para acessar `docs/guia/exemplo.md` será com `/guia/exemplo`
:::

## EditLink

Esta configuração leva o usuário direto para o arquivo markdown no github para edita-lo com novas sugestões e correção na documentação.

Dentro de `themeConfig` iremos adicionar um array [`editLink`](https://vitepress.vuejs.org/guide/theme-edit-link) com objetos contendo a chave `pattern` e `text`, ambos string

```js
  editLink: {
    pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    text: 'Edit this page on GitHub'
  },
```

## Last Updated

Esta configuração exibe a data de ultima atualização da documentação.

Dentro de `themeConfig` iremos adicionar uma chave [`lastUpdated`](https://vitepress.vuejs.org/guide/theme-last-updated) booleana

```js
  lastUpdated: true,
```
