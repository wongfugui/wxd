const list = [{
    title: '1聚焦区块链应用，SegmentFault 黑客马拉松引爆珠三角',
    id: 1,
    text: '6月23日，SegmentFault 思否在广州未来社举办黑客马拉松，聚焦区块链应用 DApp 开发。活动吸引了来自珠三角的极客参与，现场也来自硅谷和6月23日，SegmentFault 思否在广州未来社举办黑客马拉松，聚焦区块链应用 DApp 开发。活动吸引了来自珠三角的极客参与，现场也来自硅谷和6月23日，SegmentFault 思否在广州未来社举办黑客马拉松，聚焦区块链应用 DApp 开发。活动吸引了来自珠三角的极客参与，现场也来自硅谷和6月23日，SegmentFault 思否在广州未来社举办黑客马拉松，聚焦区块链应用 DApp 开发。活动吸引了来自珠三角的极客参与，现场也来自硅谷和6月23日，SegmentFault 思否在广州未来社举办黑客马拉松，聚焦区块链应用 DApp 开发。活动吸引了来自珠三角的极客参与，现场也来自硅谷和6月23日，SegmentFault 思否在广州未来社举办黑客马拉松，聚焦区块链应用 DApp 开发。活动吸引了来自珠三角的极客参与，现场也来自硅谷和6月23日，SegmentFault 思否在广州未来社举办黑客马拉松，聚焦区块链应用 DApp 开发。活动吸引了来自珠三角的极客参与，现场也来自硅谷和',
    author: 'SegmentFault',
    date: '6月23日',
    count: 454,
    img: '../../images/sf.png'
  },
  {
    title: '2极客广州——EOS Asia郭达峰担任SegmentFault思否黑客马拉松技术顾问',
    id: 2,
    text: '近日备受关注的 EOS 投票率超过 15%，主网激活，已正式上线。EOS Asia 联合创始人郭达峰将担任 SegmentFault 思否区块链黑客马拉松广州站技近日备受关注的 EOS 投票率超过 15%，主网激活，已正式上线。EOS Asia 联合创始人郭达峰将担任 SegmentFault 思否区块链黑客马拉松广州站技近日备受关注的 EOS 投票率超过 15%，主网激活，已正式上线。EOS Asia 联合创始人郭达峰将担任 SegmentFault 思否区块链黑客马拉松广州站技近日备受关注的 EOS 投票率超过 15%，主网激活，已正式上线。EOS Asia 联合创始人郭达峰将担任 SegmentFault 思否区块链黑客马拉松广州站技近日备受关注的 EOS 投票率超过 15%，主网激活，已正式上线。EOS Asia 联合创始人郭达峰将担任 SegmentFault 思否区块链黑客马拉松广州站技近日备受关注的 EOS 投票率超过 15%，主网激活，已正式上线。EOS Asia 联合创始人郭达峰将担任 SegmentFault 思否区块链黑客马拉松广州站技',
    author: 'SegmentFault',
    date: '6月26日',
    count: 500,
    img: '../../images/sf.png'
  }
]

Page({
  onLoad: function(option) {
    const {id} = option
    const nullData = {
      title: `文章${id}标题xxxxxxxxx`,
      id,
      text: '近日备受关注的 EOS 投票率超过 15%，主网激活，已正式上线。EOS Asia 联合创始人郭达峰将担任 SegmentFault 思否区块链黑客马拉松广州站技近日备受关注的 EOS 投票率超过 15%，主网激活，已正式上线。EOS Asia 联合创始人郭达峰将担任 SegmentFault 思否区块链黑客马拉松广州站技近日备受关注的 EOS 投票率超过 15%，主网激活，已正式上线。EOS Asia 联合创始人郭达峰将担任 SegmentFault 思否区块链黑客马拉松广州站技近日备受关注的 EOS 投票率超过 15%，主网激活，已正式上线。EOS Asia 联合创始人郭达峰将担任 SegmentFault 思否区块链黑客马拉松广州站技近日备受关注的 EOS 投票率超过 15%，主网激活，已正式上线。EOS Asia 联合创始人郭达峰将担任 SegmentFault 思否区块链黑客马拉松广州站技近日备受关注的 EOS 投票率超过 15%，主网激活，已正式上线。EOS Asia 联合创始人郭达峰将担任 SegmentFault 思否区块链黑客马拉松广州站技',
      author: 'SegmentFault',
      date: '6月26日',
      count: 404,
      img: '../../images/sf.png'
    }
    //模拟请求数据
    wx.showLoading({
      title: 'loading',
    })
    setTimeout(() => {
      const data = list.find(item => item.id == id) || nullData
      this.setData({data})
      wx.hideToast()
    }, 500)
  },

  data: {
    data: {}
  }
})