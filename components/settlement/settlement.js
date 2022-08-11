// components/settlement/settlement.js
import {Pay} from '../../model/shopping';
import {addCart,checkAllItems,BatchDelete} from '../../common/addCart';
import {computedCart} from '../../common/checkCart';
import _ from '../../utils/navigate'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
      allPrice:{
        type:Number,
        value:0
      },
      allNum:{
        type:Number,
        value:0
      },
      checkBoxStatus:{
        type:Boolean,
        value:false
      },
      buttonStatus:{
        type:Boolean,
        value:false
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClickPay(){
      if(this.properties.allNum<=0){
        wx.showToast({
          title: '请选择需要结算的商品！',
          icon:'none'
        })
        return
      }
      wx.showLoading({
        title: '正在处理，请稍后！',
      })
      
      setTimeout(function () {
        wx.hideLoading()
        _.navigateTo('/pages/payOrder/payOrder')
      }, 1500)
      
    },
    handleBatchDelete(){
      wx.showModal({
        title: '提示',
        content: '您确认删除选中商品吗？',
        success :(res)=> {
          if (res.confirm) {
            BatchDelete();
      this.triggerEvent('Refresh');
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      
    },
    handleCheckboxChange(e){
      let status = (e.detail.value.join()-0)===1;
      checkAllItems(status)
      this.triggerEvent('Refresh')
    },
    setComputed(){
      const all =  computedCart()
      this.setData({
       allPrice:all.allPrice,
       allNum:all.allNum
      })
    },
    async cartAddButton(){
      wx.scanCode({
        onlyFromCamera: true,
         success: async (res)=>{
        const {success,result} = await Pay.getShopingInfo(res.result)
        if(success && result.length>0){
          addCart(result[0])
          this.triggerEvent('Refresh')
          this.setComputed()
        }else{
          wx.showToast({
            title: '抱歉，未查询到此商品信息！',
            icon:'none'
          })
        }
        }
      })
    }
  }
})
