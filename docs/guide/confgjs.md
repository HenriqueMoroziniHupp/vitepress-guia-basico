# Arquivo de configuração

As instruções a partir dessa secção será para criar e configurar o `config.js`

## Criar o config.js

Devemos criar dentro do diretório `docs/.vitepress` um novo arquivo nomeado de `config.js`.
Este arquivo é responsável por configurar as funcionalidades do VitePress.

## Adicionar instruções no `config.js`

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
