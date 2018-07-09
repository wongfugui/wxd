//index.js
//获取应用实例
const app = getApp()

const dataList1 = [{
    author: 'SegmentFault',
    title: '1聚焦区块链应用，SegmentFault 黑客马拉松引爆珠三角',
    summary: '6月23日，SegmentFault 思否在广州未来社举办黑客马拉松，聚焦区块链应用 DApp 开发。活动吸引了来自珠三角的极客参与，现场也来自硅谷和',
    date: '6月26日',
    zan: '10',
    img: '../../images/1.jpg',
  },
  {
    author: 'SegmentFault',
    title: '2极客广州——EOS Asia郭达峰担任SegmentFault思否黑客马拉松技术顾问2',
    summary: '近日备受关注的 EOS 投票率超过 15%，主网激活，已正式上线。EOS Asia 联合创始人郭达峰将担任 SegmentFault 思否区块链黑客马拉松广州站技',
    date: '6月26日',
    zan: '323',
    img: '../../images/2.jpg',
  },
  {
    author: 'SegmentFault',
    title: '3区块链游戏 Dapp 获得思否黑客马拉松北京站冠军3',
    summary: '上周末，来自硅谷团队的游戏作品“Crypto Bird - An Implement of NabBoard”获得 SegmentFault 思否区块链黑客马拉松北京站冠军。本次黑客',
    date: '6月26日',
    zan: '22',
    img: '../../images/1.jpg',
  },
  {
    author: 'SegmentFault',
    title: '4SegmentFault 在杭成功举办黑客马拉松，发布区块链创新基金4',
    summary: '上周，SegmentFault 在杭州欧美金融城 G5 创投中心启动全球黑客马拉松，本次活动吸引了众多长三角开发者的关注，有多位嘉宾出席活动进行项目交流',
    date: '6月26日',
    zan: '123',
    img: '../../images/1.jpg',
  },
  {
    author: 'SegmentFault',
    title: '5聚焦区块链应用，SegmentFault 黑客马拉松引爆珠三角5',
    summary: '6月23日，SegmentFault 思否在广州未来社举办黑客马拉松，聚焦区块链应用 DApp 开发。活动吸引了来自珠三角的极客参与，现场也来自硅谷和',
    date: '6月26日',
    zan: '23',
    img: '../../images/2.jpg',
  },
]

const dataList2 = [{
    author: 'SegmentFault',
    title: '6极客广州——EOS Asia郭达峰担任SegmentFault思否黑客马拉松技术顾问6',
    summary: '近日备受关注的 EOS 投票率超过 15%，主网激活，已正式上线。EOS Asia 联合创始人郭达峰将担任 SegmentFault 思否区块链黑客马拉松广州站技',
    date: '6月26日',
    zan: '43',
    img: '../../images/2.jpg',
  },
  {
    author: 'SegmentFault',
    title: '7区块链游戏 Dapp 获得思否黑客马拉松北京站冠军7',
    summary: '上周末，来自硅谷团队的游戏作品“Crypto Bird - An Implement of NabBoard”获得 SegmentFault 思否区块链黑客马拉松北京站冠军。本次黑客',
    date: '6月26日',
    zan: '54',
    img: '../../images/1.jpg',
  },
  {
    author: 'SegmentFault',
    title: '8SegmentFault 在杭成功举办黑客马拉松，发布区块链创新基金8',
    summary: '上周，SegmentFault 在杭州欧美金融城 G5 创投中心启动全球黑客马拉松，本次活动吸引了众多长三角开发者的关注，有多位嘉宾出席活动进行项目交流',
    date: '6月26日',
    zan: '6',
    img: '../../images/2.jpg',
  },
  {
    author: 'SegmentFault',
    title: '9聚焦区块链应用，SegmentFault 黑客马拉松引爆珠三角9',
    summary: '6月23日，SegmentFault 思否在广州未来社举办黑客马拉松，聚焦区块链应用 DApp 开发。活动吸引了来自珠三角的极客参与，现场也来自硅谷和',
    date: '6月26日',
    zan: '55',
    img: '../../images/1.jpg',
  },
  {
    author: 'SegmentFault',
    title: '10极客广州——EOS Asia郭达峰担任SegmentFault思否黑客马拉松技术顾问10',
    summary: '近日备受关注的 EOS 投票率超过 15%，主网激活，已正式上线。EOS Asia 联合创始人郭达峰将担任 SegmentFault 思否区块链黑客马拉松广州站技',
    date: '6月26日',
    zan: '66',
    img: '../../images/2.jpg',
  },
]

const dataList3 = [{
    author: 'SegmentFault',
    title: '11区块链游戏 Dapp 获得思否黑客马拉松北京站冠军11',
    summary: '上周末，来自硅谷团队的游戏作品“Crypto Bird - An Implement of NabBoard”获得 SegmentFault 思否区块链黑客马拉松北京站冠军。本次黑客',
    date: '6月26日',
    zan: '551',
    img: '../../images/1.jpg',
  },
  {
    author: 'SegmentFault',
    title: '12SegmentFault 在杭成功举办黑客马拉松，发布区块链创新基金12',
    summary: '上周，SegmentFault 在杭州欧美金融城 G5 创投中心启动全球黑客马拉松，本次活动吸引了众多长三角开发者的关注，有多位嘉宾出席活动进行项目交流',
    date: '6月26日',
    zan: '222',
    img: '../../images/1.jpg',
  },
]

Page({
  data: {
    tabs: ['我的订阅', '近期热门', '最新内容', '技术频道'],
    curTab: 0,
    slider: [{
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
    articles: [...dataList1]
  },
  onLoad: function() {

  },

  onPullDownRefresh: function() {
    setTimeout(()=>{
      if (this.data.articles.length < 10){
        this.setData({ articles: dataList2.concat(this.data.articles)})
        wx.stopPullDownRefresh()
        return
      }
      if (this.data.articles.length < 12) {
        this.setData({ articles: dataList3.concat(this.data.articles) })
        wx.stopPullDownRefresh()
        return
      }
      wx.stopPullDownRefresh()
    }, 1000)
  },

  onReachBottom: function() {
    wx.showToast({
      title: '没有更多啦！',
      icon: 'none'
    })
  },

  switchTab: function(e){
    this.setData({
      curTab: e.currentTarget.dataset.index
    });
  }
})