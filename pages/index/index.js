//index.js
//获取应用实例
const app = getApp()

const globalData = getApp().globalData
const bmap = require('../../lib/bmap-wx.js')

Page({
  data: {
    bcgColor: '#40a7e7',
    weatherData: {},
    temp: '',
  },
  onLoad: function() {
    this.getWeather()
  },

  onShow: function() {

  },

  onPullDownRefresh(res) {
    this.getWeather()
  },

  getWeather: function(location) {
    const BMap = new bmap.BMapWX({
      ak: globalData.ak
    })
    const success = (data) => {
      const weatherData = data.originalData.results[0]
      const temp = weatherData.weather_data[0].date.match(/\d+/g)[2]
      const weather = weatherData.weather_data[0].weather
      this.setData({
        weatherData,
        temp,
        weather
      })
      console.log(weatherData)
    }
    BMap.weather({
      location,
      success
    });
  }


})