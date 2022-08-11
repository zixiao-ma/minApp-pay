import publicConfig from '../config/config'
class Storage {
  /**
   * 设置本地存储的数据
   * @param {*} key 
   * @param {*} value 
   */
  static set(key,value){
    wx.setStorageSync(key, value)
  }

  /**
   * 获取本地存储的数据
   * @param {*} key 
   */
  static get(key){
    return wx.getStorageSync(key) || ""
  }

  /**
   * 删除本地存储的数据
   * @param {*} key 
   */
  static remove(key){
    wx.removeStorageSync()
  }

  /**
   * 清空本地存储的数据
   */
  static removeAll(){
    wx.clearStorageSync()
  }

  /**
   * 存储token
   */
  static setToken(token){
    wx.setStorageSync(publicConfig.field.loginCredentials, token)
  }
  static getToken(){
    return wx.getStorageSync(publicConfig.field.loginCredentials)
  }
 /**
  * 存储用户信息
  */
 static setUserInfo(userInfo){
   wx.setStorageSync(publicConfig.field.userInfoKey, userInfo)
 }
}

export default Storage