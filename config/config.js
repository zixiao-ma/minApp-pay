const ApiConfig  = {
 'api':{
  baseUrl:'https://admin.hxwendeng.com/api/app'
 },
 'api2':{
   baseUrl:'http://weixin.itying.com'
 }
}
const pathWhiteList = [
  "/login",
  "/404", 
  "/401", 
  "/settings"
]

const field = {
  loginCredentials : 'scanCodeMinApp_token',
  userInfoKey : 'scanCodeMinApp_userInfo',
  cart_key:'scanCodeMinApp_Cart'
}
export default {
  ApiConfig,
  pathWhiteList,
  field
}