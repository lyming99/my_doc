import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-checkbox'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "温知文档",
  description: "温知文档,温知笔记,欢迎使用温知系列产品！",
  markdown: {
    config: (md) => {
      md.use(taskLists)
    }
  },
  head:[
    [
      'meta',
      {
        'name':'meta-name',
        'conent':'meta-content'
      }
    ], 
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{"text":"首页","link":"/"},{"text":"技术文档","items":[{"text":"第一个文档","link":"/vitepress/0db39820-c5de-11ef-8ecd-bb885d28bca0/1652c730-c5de-11ef-8ecd-bb885d28bca0"}]}],
    sidebar: [{"text":"首页","link":"/"},{"text":"技术文档","items":[{"text":"第一个文档","link":"/vitepress/0db39820-c5de-11ef-8ecd-bb885d28bca0/1652c730-c5de-11ef-8ecd-bb885d28bca0"}]}],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lyming99/wenzdoc_web' }
    ],
    //页脚
    footer: {
      message: '',
      copyright: 'Copyright ©WenzDoc 2024 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">xxxx</a>',  
    },
  }
})
