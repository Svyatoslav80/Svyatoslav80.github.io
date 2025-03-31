import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Joseph Van Landuyt",
  description: "Relativity",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Page 1', link: '/page1' }
    ],

    sidebar: [
      {
        text: 'Onderwerp',
        items: [
          { text: 'Page 1', link: '/page1' },
          { text: 'Page 2', link: '/page2' }
        ]
      }
    ],

    // socialLinks: [
    //   //{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
