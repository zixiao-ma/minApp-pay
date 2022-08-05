import {wxToPromise} from './wx'
import ApiConfig from '../config/config'
import exceptionMessage from '../config/exceptionMessage '
export class Http {
  static async request(options){
    let serviceUrl = options.baseUrl || 'api'
    options.url = ApiConfig[serviceUrl].baseUrl+ options.url 
    wx.showLoading({
      title: '努力加载中...' 
    })
    try {
        const response = await wxToPromise('request',{
        ...options
        })
        const {statusCode,data} = response
        if(statusCode<400){
          wx.hideLoading()
          return data
        }
        if(statusCode===401){
          wx.hideLoading()
          //token超时
          return
        }
        Http._showError(response.data.code,response.data.msg)
        return response
    } catch (error) {
      wx.hideLoading()
     Http._showError(1)
     console.log(error);
    }
  }
  static _showError(code,msg){
    let title = exceptionMessage[code]||msg || '发送未知错误'
      wx.showToast({
        title,
        icon:'none',
        duration:3000
      })
  }
}