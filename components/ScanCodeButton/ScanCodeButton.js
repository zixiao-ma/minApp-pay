// components/ScanCodeButton/ScanCodeButton.js
import _ from '../../utils/navigate'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showCart:{
      type:Boolean,
      value:false
    },
    count:{
      type:Number,
      value:0
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
    handleScanCode(){
      if(this.properties.showCart){
          _.navigateTo('/pages/cart/cart')
          return false
      }
     wx.scanCode({
       onlyFromCamera: true,
       success:(res)=>{
        this.triggerEvent('getResult',res.result)
       },
       fail:(err)=>{
         console.log(err);
       }
     })
    }
  }
})
