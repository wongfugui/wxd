//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    slider: [
      {
        url: '../../images/s1.png',
        title: '了解一些额外知识，让开发锦上添花',
        summary: '',
      },
      {
        url: '../../images/s2.png',
        title: 'RESETful API 设计规范',
        summary: '',
      },
      {
        url: '../../images/s3.png',
        title: '160行代码仿Vue实现极简双向绑定',
        summary: '附详细注释',
      },
      {
        url: '../../images/s4.png',
        title: 'React性能优化',
        summary: '虚拟Dom原理浅析',
      },
    ]
  },
  onLoad: function () {
  },
})
