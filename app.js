//app.js

const bmap = require('./lib/bmap-wx.js')

App({
  onLaunch: function() {
    const BMap = new bmap.BMapWX({
      ak: 'jc1dIcPqBa8nmKfDwx9u8lGS13cF35d4'
    })

    let success = data => console.log(data)
    BMap.weather({
      success: success
    }); 

    wx.getSystemInfo({
      success: (res) => {
        this.globalData.systeminfo = res
      },
    })
  },
  globalData: {
    // 是否保持常亮，离开小程序失效
    keepscreenon: false,
    systeminfo: {},
    ak: 'jc1dIcPqBa8nmKfDwx9u8lGS13cF35d4',
  }
})