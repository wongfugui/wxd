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

const utils = {
  formatTime,
  isEmptyObject,
  groupBy
}

export default utils
