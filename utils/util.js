const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const isEmptyObject = (obj) => {
  for (let i in obj) {
    return false
  }
  return true
}

const groupBy = (array, f) => {
  let groups = {};
  array.forEach(function (o) {
    let group = f(o);
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });
  return groups
}

const wxRequest = ({ url, data, method }) => {
  const pro = new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: method || 'GET',
      data: data,
      success: (res) => {
        if (res && res.statusCode == 200) {
          resolve(res.data)
        } else {
          reject(res)
        }
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
  return pro
}

const utils = {
  formatTime,
  isEmptyObject,
  groupBy,
  wxRequest,
}

export default utils
