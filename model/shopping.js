import {Http} from '../utils/http'
export class Pay extends Http {
  static getShopingInfo(qcode) {
    return Http.request({
      url: "/api/getProduct",
      method: "GET",
      baseUrl:'api2',
      data:{
        qcode
      }
    })
  }
  static getBanner() {
    return Http.request({
      url: "/banner",
      method: "GET",
      header : {
        devicetype : 'H5'
      }
    })
  }
  static getCourse() {
    return Http.request({
      url: "/recommend/appIndex",
      method: "GET"
    })
  }
}