//index.js
//获取应用实例
const app = getApp()

const globalData = getApp().globalData
const bmap = require('../../lib/bmap-wx.js')
const utils = require('../../utils/util')

Page({
  data: {
    bcgColor: '#40a7e7',
    weatherData: {},
    temp: '',
    pmLv: '',
    date: '',
    // 是否切换了城市
    cityChanged: false,
    // 需要查询的城市
    searchCity: '--',
  },
  onLoad: function() {
    this.getWeather()
    console.log('llload')
  },

  onShow: function() {
    if (this.data.cityChanged){
      this.geocoder(this.data.searchCity, this.getWeather)
    }
  },

  onPullDownRefresh(res) {
    if (this.data.searchCity === '--'){
      this.getWeather()
    }else{
      this.geocoder(this.data.searchCity, this.getWeather)
    }
    
  },

  getWeather: function(location) {
    const BMap = new bmap.BMapWX({
      ak: globalData.ak
    })
    const success = (data) => {
      wx.stopPullDownRefresh()
      const now = new Date()
      const weatherData = data.originalData.results[0]
      const temp = weatherData.weather_data[0].date.match(/\d+/g)[2]
      const weather = weatherData.weather_data[0].weather
      this.setData({
        weatherData,
        swiper1: weatherData.weather_data.slice(0,2),
        swiper2: weatherData.weather_data.slice(2),
        temp,
        searchCity: weatherData.currentCity,
        date: utils.formatTime(now),
        weather,
        pmLv: this.formatPM(weatherData.pm25)
      })
    }
    BMap.weather({
      location,
      success
    });
  },

  formatPM: pm =>{
    if (pm > 0 && pm <= 35){
      return '优'
    }else if(pm > 35 && pm <= 75){
      return '良'
    }else if(pm > 75 && pm <= 115){
      return '轻度污染'
    }else if(pm > 115 && pm <= 150){
      return '中度污染'
    }else if(pm > 150 && pm <= 250){
      return '重度污染'
    }else if (pm > 250){
      return '严重污染'
    }
  },

  tapCity: () => {
    wx.navigateTo({
      url: '../cities/cities',
    })
  },

  // 地理位置编码
  geocoder: (address, success) => {
    wx.request({
      url: getApp().setGeocoderUrl(address),
      success(res) {
        let data = res.data || {}
        if (!data.status) {
          location = (data.result || {}).location || {} // location结构 = {lng, lat}
          success && success([location.lng, location.lat].join())
        } else {
          wx.showToast({
            title: data.msg || '网络不给力，请稍后再试',
            icon: 'none',
          })
        }
      },
      fail(res) {
        wx.showToast({
          title: res.errMsg || '网络不给力，请稍后再试',
          icon: 'none',
        })
      },
      complete() {

      },
    })
  },

})