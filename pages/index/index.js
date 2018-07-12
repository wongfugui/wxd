//index.js
//获取应用实例
const app = getApp()

const globalData = getApp().globalData
const bmap = require('../../lib/bmap-wx.js')

Page({
  data: {
    bcgColor: '#40a7e7',
  },
  onLoad: function() {

  },

  onShow: function (){
    this.getWeather()
  },

  onPullDownRefresh(res) {
    this.getWeather()
  },

  getWeather: function(location){
    const BMap = new bmap.BMapWX({
      ak: globalData.ak
    })
    const success = (data) => {
      console.log(data)
    }
    BMap.weather({
      location,
      success
    }); 
  }


})