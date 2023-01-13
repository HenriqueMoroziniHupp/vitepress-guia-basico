export default {
  title: "Guia VitePress",
  description: "Guia simples e direto",
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/HenriqueMoroziniHupp/vitepress-guia-basico/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/HenriqueMoroziniHupp",
      },
      {
        icon: "linkedin",
        link: "https://br.linkedin.com/in/henrique-morozini-hupp",
      },
    ],
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Vue", link: `https://vuejs.org/` },
      { text: "Vitepress", link: "https://vitepress.vuejs.org/" },
    ],
    sidebar: [
      {
        text: "Primeiros Passos",
        collapsible: true,
        items: [{ text: "Estrutura Inicial", link: "/started/started" }],
      },
      {
        text: "Arquivo de configuração",
        collapsible: true,
        items: [
          { text: "Criar Config.js", link: "/guide/confgjs" },
          { text: "Título", link: "/guide/title" },
          { text: "Tema", link: "/guide/theme" },
        ],
      },
    ],
  },
};
