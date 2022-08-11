import Storage from './storage'
const navigateTo = (url) => {
  wx.navigateTo({
    url
  })
}

const navigateAuthTo = (url) => {
  const token = Storage.getToken()
  if (token) {
    wx.navigateTo({
      url
    })
  } else {
    wx.navigateTo({
      url: 'pages/login/login',
    })
  }
}
export default {
  navigateTo,
  navigateAuthTo
}