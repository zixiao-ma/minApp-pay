// pages/payOrder/payOrder.js
import {getOrderList as getPayList} from '../../common/getCartData';
import {computedCart} from '../../common/checkCart';
import {clearCart} from '../../common/addCart';
Page({
  getOrderList(){
    const arr = getPayList()
    this.setData({
      orderList:arr,
      showList:arr.slice(0,1)
    })
  },
  handleClickShowAll(){
    if(this.data.orderList.length===this.data.showList.length){
      this.setData({
        showList:this.data.orderList.slice(0,1),
        btnstr:'展开'
      })

    }else{
      this.setData({
        showList:this.data.orderList,
        btnstr:'收起'
      })
    }
      
  },
  /**
   * 页面的初始数据
   */
  data: {
    orderList:[],
    showList:[],
    btnstr:'展开',
    balance:4,
    allPrice:0,
    showBalance:true,
    actual:0,
    Switch:true,
    computedBalance:0
  },
  actualPayment(){
    if(this.data.allPrice - this.data.balance<0){
      this.setData({
        showBalance:false,
        Switch:false
      })
    }
    if(this.data.Switch){
      this.setData({
        actual:(this.data.allPrice - this.data.balance).toFixed(2),
        computedBalance:this.data.balance
      })
    }else{
      this.setData({
        actual:this.data.allPrice,
        computedBalance:0
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  handleSwitchChange(event){
    this.setData({
      Switch:event.detail.value
    })
    this.actualPayment()
  },
  onLoad(options) {
    this.getOrderList()
    const all = computedCart()
    this.setData({
      allPrice:all.allPrice
    })
    this.actualPayment()
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

  },
  handlePayButtonClick(){
    wx.showLoading({
      title: '微信免密支付中...',
    })
    
    setTimeout(function () {
      wx.hideLoading()
      clearCart()
      wx.navigateTo({
        url: '/pages/paySuccess/paySuccess',
      })
    }, 1500)
    
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