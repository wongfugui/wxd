//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    slider: [
      {
        url: '../../images/s1.png',
        title: '了解一些额外知识，让开发锦上添花',
      },
      {
        url: '../../images/s2.png',
        title: 'RESETful API 设计规范',
      },
      {
        url: '../../images/s3.png',
        title: '160行代码仿Vue实现极简双向绑定',
      },
      {
        url: '../../images/s4.png',
        title: 'React性能优化',
      },
    ],
    articles: [
      {
        author: 'SegmentFault',
        title: '聚焦区块链应用，SegmentFault 黑客马拉松引爆珠三角',
        summary: '6月23日，SegmentFault 思否在广州未来社举办黑客马拉松，聚焦区块链应用 DApp 开发。活动吸引了来自珠三角的极客参与，现场也来自硅谷和',
        date: '6月26日',
        zan: '10',
        img: '../../images/1.jpg',
      },
      {
        author: 'SegmentFault',
        title: '极客广州——EOS Asia郭达峰担任SegmentFault思否黑客马拉松技术顾问',
        summary: '近日备受关注的 EOS 投票率超过 15%，主网激活，已正式上线。EOS Asia 联合创始人郭达峰将担任 SegmentFault 思否区块链黑客马拉松广州站技',
        date: '6月26日',
        zan: '323',
        img: '../../images/2.jpg',
      },
      {
        author: 'SegmentFault',
        title: '区块链游戏 Dapp 获得思否黑客马拉松北京站冠军',
        summary: '上周末，来自硅谷团队的游戏作品“Crypto Bird - An Implement of NabBoard”获得 SegmentFault 思否区块链黑客马拉松北京站冠军。本次黑客',
        date: '6月26日',
        zan: '22',
        img: '../../images/1.jpg',
      },
      {
        author: 'SegmentFault',
        title: 'SegmentFault 在杭成功举办黑客马拉松，发布区块链创新基金',
        summary: '上周，SegmentFault 在杭州欧美金融城 G5 创投中心启动全球黑客马拉松，本次活动吸引了众多长三角开发者的关注，有多位嘉宾出席活动进行项目交流',
        date: '6月26日',
        zan: '123',
        img: '../../images/1.jpg',
      },
      {
        author: 'SegmentFault',
        title: '聚焦区块链应用，SegmentFault 黑客马拉松引爆珠三角',
        summary: '6月23日，SegmentFault 思否在广州未来社举办黑客马拉松，聚焦区块链应用 DApp 开发。活动吸引了来自珠三角的极客参与，现场也来自硅谷和',
        date: '6月26日',
        zan: '23',
        img: '../../images/2.jpg',
      },
      {
        author: 'SegmentFault',
        title: '极客广州——EOS Asia郭达峰担任SegmentFault思否黑客马拉松技术顾问',
        summary: '近日备受关注的 EOS 投票率超过 15%，主网激活，已正式上线。EOS Asia 联合创始人郭达峰将担任 SegmentFault 思否区块链黑客马拉松广州站技',
        date: '6月26日',
        zan: '43',
        img: '../../images/2.jpg',
      },
      {
        author: 'SegmentFault',
        title: '区块链游戏 Dapp 获得思否黑客马拉松北京站冠军',
        summary: '上周末，来自硅谷团队的游戏作品“Crypto Bird - An Implement of NabBoard”获得 SegmentFault 思否区块链黑客马拉松北京站冠军。本次黑客',
        date: '6月26日',
        zan: '54',
        img: '../../images/1.jpg',
      },
      {
        author: 'SegmentFault',
        title: 'SegmentFault 在杭成功举办黑客马拉松，发布区块链创新基金',
        summary: '上周，SegmentFault 在杭州欧美金融城 G5 创投中心启动全球黑客马拉松，本次活动吸引了众多长三角开发者的关注，有多位嘉宾出席活动进行项目交流',
        date: '6月26日',
        zan: '6',
        img: '../../images/2.jpg',
      },
      {
        author: 'SegmentFault',
        title: '聚焦区块链应用，SegmentFault 黑客马拉松引爆珠三角',
        summary: '6月23日，SegmentFault 思否在广州未来社举办黑客马拉松，聚焦区块链应用 DApp 开发。活动吸引了来自珠三角的极客参与，现场也来自硅谷和',
        date: '6月26日',
        zan: '55',
        img: '../../images/1.jpg',
      },
      {
        author: 'SegmentFault',
        title: '极客广州——EOS Asia郭达峰担任SegmentFault思否黑客马拉松技术顾问',
        summary: '近日备受关注的 EOS 投票率超过 15%，主网激活，已正式上线。EOS Asia 联合创始人郭达峰将担任 SegmentFault 思否区块链黑客马拉松广州站技',
        date: '6月26日',
        zan: '66',
        img: '../../images/2.jpg',
      },
      {
        author: 'SegmentFault',
        title: '区块链游戏 Dapp 获得思否黑客马拉松北京站冠军',
        summary: '上周末，来自硅谷团队的游戏作品“Crypto Bird - An Implement of NabBoard”获得 SegmentFault 思否区块链黑客马拉松北京站冠军。本次黑客',
        date: '6月26日',
        zan: '551',
        img: '../../images/1.jpg',
      },
      {
        author: 'SegmentFault',
        title: 'SegmentFault 在杭成功举办黑客马拉松，发布区块链创新基金',
        summary: '上周，SegmentFault 在杭州欧美金融城 G5 创投中心启动全球黑客马拉松，本次活动吸引了众多长三角开发者的关注，有多位嘉宾出席活动进行项目交流',
        date: '6月26日',
        zan: '222',
        img: '../../images/1.jpg',
      },
    ]
  },
  onLoad: function () {
  },
})
