// pages/shopping.js
import {Pay} from '../../model/shopping'
import _ from '../../utils/navigate'
import {addCart} from '../../common/addCart'
import {checkCart} from '../../common/checkCart'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      swiperList:[],
      showCart:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getBanner();
    this.setShowCart()
  },
  setShowCart(){
    this.setData({
      showCart:checkCart()
    })
  },
  getBanner(){
    Pay.getBanner().then(res=>{
      console.log(res.data,'banner');
      this.setData({
        swiperList:res.data
      })
    })
  },
  async getShopCode({detail}){
    const {success,result} = await Pay.getShopingInfo(detail)
    if(success && result.length>0){
      addCart(result[0])
      _.navigateTo('/pages/cart/cart')
    }else{
      wx.showToast({
        title: '抱歉，未查询到此商品信息！',
        icon:'none'
      })
    }
   
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setShowCart()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})