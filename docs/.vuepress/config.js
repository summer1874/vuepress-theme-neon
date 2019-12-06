const path = require('path')

module.exports = {
  title: 'vuepress-theme-neon',

  description: '当我沉默的时候，我觉得很充实，当我开口说话，就感到了空虚。',

  locales: {
    '/': {
      lang: 'en-US',
    },
  },

  evergreen: true,

  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vssue)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all',
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all',
          },
        },
      })
    }
  },

  theme: path.resolve(__dirname, '../../lib'),

  themeConfig: {
    lang: 'en-US',

    personalInfo: {
      // 昵称
      nickname: 'summer1874',

      // 个人简介
      description: 'That which does not kill us <br /> makes us stronger.',

      // 电子邮箱
      email: ' summer19941126@gmail.com',

      // 所在地
      location: 'ChangSha City, China',

      // 组织
      organization: 'wangoon',

      // 头像
      // 设置为外部链接
      avatar: '/assets/img/avatar.jpg',
      // 或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
      // avatar: '/img/avatar.jpg',


      // 社交平台帐号信息
      sns: {
        // Github 帐号和链接
        github: {
          account: 'summer',
          link: 'https://github.com/summer1874',
        },
      },
    },

    header: {
      background: {
        // url: '/assets/img/header-image-01.jpg',
        useGeo: true,
      },
      showTitle: true,
    },

    footer: {
      poweredBy: true,
      poweredByTheme: true,
      custom: 'Copyright 2019-present <a href="https://github.com/neon" target="_blank">summer1874</a> | MIT License',
    },

    infoCard: {
      headerBackground: {
        url: [
          'https://yz.lol.qq.com/v1/assets/images/mttargon-solari-prayer-shrine.jpg',
          'https://yz.lol.qq.com/v1/assets/images/mttargon-temple-of-the-solstice.jpg',
          'https://yz.lol.qq.com/v1/assets/images/mttargon-test-of-the-mountain.jpg',
          'https://yz.lol.qq.com/v1/assets/images/bilgewater-bilgewater-bay.jpg',
          'https://yz.lol.qq.com/v1/assets/images/bilgewater-the-slaughter-docks.jpg',
          'https://yz.lol.qq.com/v1/assets/images/bilgewater_serpentisles_03.jpg',
          'https://yz.lol.qq.com/v1/assets/images/bilgewater-high-and-dry.jpg',
          'https://yz.lol.qq.com/v1/assets/images/yordle_portal_03.jpg',
          'https://yz.lol.qq.com/v1/assets/images/yordle_portal_01.jpg',
          'https://yz.lol.qq.com/v1/assets/images/factions/image-gallery/piltover-entrancetreasury.jpg',
          'https://yz.lol.qq.com/v1/assets/images/piltover_environment_01.jpg',
          'https://yz.lol.qq.com/v1/assets/images/factions/image-gallery/zaun-depths.jpg',
          'https://yz.lol.qq.com/v1/assets/images/factions/image-gallery/zaun-breatherstation.jpg',
          'https://yz.lol.qq.com/v1/assets/images/ionia-the-first-lands.jpg',
          'https://yz.lol.qq.com/v1/assets/images/ionia-life-as-one.jpg',
          'https://yz.lol.qq.com/v1/assets/images/ionia-an-ancient-and-respected-history.jpg',
          'https://yz.lol.qq.com/v1/assets/images/ionia-the-great-monasteries.jpg',
          'https://yz.lol.qq.com/v1/assets/images/void-the-touch-of-the-void.jpg',
          'https://yz.lol.qq.com/v1/assets/images/void-the-fall-of-icathia.jpg',
          'https://yz.lol.qq.com/v1/assets/images/void-an-unknowable-power.jpg',
          'https://yz.lol.qq.com/v1/assets/images/highlights/noxus-bastion.jpg',
          'https://yz.lol.qq.com/v1/assets/images/noxus-life-is-a-battle.jpg',
          'https://yz.lol.qq.com/v1/assets/images/noxus-and-magic.jpg',
          'https://yz.lol.qq.com/v1/assets/images/factions/image-gallery/shurima-hierophant.jpg',
          'https://yz.lol.qq.com/v1/assets/images/shurima_marrowmark_01.jpg',
          'https://yz.lol.qq.com/v1/assets/images/shurima_cascade_01.jpg',
          'https://yz.lol.qq.com/v1/assets/images/factions/image-gallery/shadow-isles-vaults.jpg',
          'https://yz.lol.qq.com/v1/assets/images/shadow_isles_environment_06.jpg',
          'https://yz.lol.qq.com/v1/assets/images/shadow_isles_entities_07.jpg',
          'https://yz.lol.qq.com/v1/assets/images/factions/image-gallery/freljord-rakelstake.jpg',
          'https://yz.lol.qq.com/v1/assets/images/factions/image-gallery/freljord-glaserport.jpg',
          'https://yz.lol.qq.com/v1/assets/images/factions/image-gallery/demacia-templelightbringers.jpg',
          'https://yz.lol.qq.com/v1/assets/images/factions/image-gallery/demacia-grandplaza.jpg',
        ],
        useGeo: true,  // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
      },
    },

    lastUpdated: true,

    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'github', link: 'https://github.com/summer1874', exact: false },
    ],
    pagination: {
      perPage: 5,
    },
    comments: false
  },
}
