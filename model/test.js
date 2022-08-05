import {Http} from '../utils/http'
export class Pay extends Http {
  static getNav() {
    return Http.request({
      url: "/nav",
      method: "GET"
    })
  }
  static getBanner() {
    return Http.request({
      url: "/banner",
      method: "GET"
    })
  }
  static getCourse() {
    return Http.request({
      url: "/recommend/appIndex",
      method: "GET"
    })
  }
}