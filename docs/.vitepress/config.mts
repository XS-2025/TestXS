import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/TestXS/', // 注意：地址应改为自己的repo仓库地址
  title: "Design Studio",
  description: "Design",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', 
        items: [
          { text: 'Markdown Examples', link: '/PM/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]

       }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
