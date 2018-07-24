//index.js
//获取应用实例
const app = getApp()

const globalData = getApp().globalData
import bmap from '../../lib/bmap-wx.js'
import utils from '../../utils/util'

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

  },

  onShow: function() {
    if (this.data.cityChanged) {
      this.geocoder(this.data.searchCity)
    }
  },

  onPullDownRefresh(res) {
    if (this.data.searchCity === '--') {
      this.getWeather()
    } else {
      this.geocoder(this.data.searchCity)
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
        swiper1: weatherData.weather_data.slice(0, 2),
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

  formatPM: pm => {
    if (pm > 0 && pm <= 35) {
      return '优'
    } else if (pm > 35 && pm <= 75) {
      return '良'
    } else if (pm > 75 && pm <= 115) {
      return '轻度污染'
    } else if (pm > 115 && pm <= 150) {
      return '中度污染'
    } else if (pm > 150 && pm <= 250) {
      return '重度污染'
    } else if (pm > 250) {
      return '严重污染'
    }
  },

  tapCity: () => {
    wx.navigateTo({
      url: '../cities/cities',
    })
  },

  // 地理位置编码
  geocoder: function(address) {
    const param = {
      ////百度开放平台根据地址获取经纬度api
      url: 'https://api.map.baidu.com/geocoder/v2/',
      data: {
        address,
        output: 'json',
        ak: globalData.ak
      }
    }
    utils.wxRequest(param)
      .then(res => {
        if (!res.status) {
          const { location } = res.result // location结构 = {lng, lat}
          this.getWeather([location.lng, location.lat].join())
        }
      })
      .catch(e => {
        wx.showToast({
          title: '网络不给力，请稍后再试',
          icon: 'none',
        })
      })
  },

})