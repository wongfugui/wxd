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

  //百度开放平台根据地址获取经纬度api
  setGeocoderUrl(address) {
    return `https://api.map.baidu.com/geocoder/v2/?address=${address}&output=json&ak=${this.globalData.ak}`
  },
})