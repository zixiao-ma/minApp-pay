// components/cartList/cartList.js
import {changeShopNum,deleteGoodsById,changeCheckboxById} from '../../common/addCart';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'商品标题'
    },
    desc:{
      type:String,
      value:'商品规格描述'
    },
    num:{
      type:Number,
      value:0
    },
    price:{
      type:String,
      value:'0'
    },
    shopid:{
      type:String,
      value:''
    },
    isCheck:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    touchstart:0,
    touchend:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCheckboxChange(e){
      let status = (e.detail.value.join()-0)===1;
      changeCheckboxById(this.properties.shopid,status)
      this.triggerEvent('Refresh')
    },
    touchstart(e){
      this.setData({
        touchstart:e.timeStamp
      })
    },
   
   touchend(e){
      this.setData({
        touchend:e.timeStamp
      })
      if((this.data.touchend-this.data.touchstart)>=500){  /*长按两秒*/
          this.handleDeleteShop() //响应事件
      }
    },
    handleDeleteShop(){
      wx.showModal({
        title: '提示',
        content: `您确定要删除${this.properties.title}吗？`,
        success: (res)=> {
          if (res.confirm) {
           const isDone =  deleteGoodsById(this.properties.shopid)
           if(isDone){
             wx.showToast({
               title: '删除成功！',
             })
            this.triggerEvent('Refresh')
           }else{
            wx.showToast({
              title: '删除失败！',
            })
           }
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    changeNum(e){
     let flag = e.currentTarget.dataset.flag
      changeShopNum(this.properties.shopid,flag)
      this.triggerEvent('Refresh')
    }
  }
})
