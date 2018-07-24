//app.js

App({
  onLaunch: function() {
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
  },
})