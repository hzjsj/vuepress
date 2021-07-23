module.exports = {
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
  
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
      navbar: [
        { text: "首页", link: "/" },
        { text: "指南", link: "/guides/" },
      ],
    },
    dest:'dist',
}