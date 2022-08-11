import storage from '../utils/storage'
import publicConfig from '../config/config'
const cart_key = publicConfig.field.cart_key;
function findShopIndex(arr, data) {
  return arr.findIndex(item => {
    return item._id === data._id
  })
}
function findIndexByid(arr, id) {
  return arr.findIndex(item => item._id === id)
}
export const addCart = (data) => {
  const locaData = storage.get(cart_key) || []
  const cart = [].concat(locaData);
  const index = findShopIndex(cart, data)
  if (-1 === index) {
    data.num = 1;
    data.isCheck = true;
    cart.unshift(data)
  } else {
    cart[index].isCheck = true;
    cart[index].num++
  }
  storage.set(cart_key, cart);
}
export const changeShopNum = (id, flag) => {
  const locaData = storage.get(cart_key)
  const index = findIndexByid(locaData, id)
  switch (flag) {
    case 'plus':
      locaData[index].num += 1;
      break;
    case 'reduce':
      if (locaData[index].num <= 1) {
        wx.showToast({
          title: '请最少选择一件商品！',
          icon: 'none'
        })
        return false
      }
      locaData[index].num -= 1;
      break;
    default:
      console.log(id);
  }
  storage.set(cart_key, locaData);
}
export const deleteGoodsById = (id) => {
  const locaData = storage.get(cart_key)
  const index = findIndexByid(locaData, id)
  locaData.splice(index, 1)
  storage.set(cart_key, locaData);
  return true
}
export const changeCheckboxById = (id, status) => {
  const locaData = storage.get(cart_key)
  const index = findIndexByid(locaData, id)
  locaData[index].isCheck = status
  storage.set(cart_key, locaData);
}
export const checkAllItems = (status) => {
  const locaData = storage.get(cart_key);
  locaData.forEach(item => {
    item.isCheck = status
  })
  storage.set(cart_key, locaData);
}
export const BatchDelete = ()=>{
  const locaData = storage.get(cart_key);
 const newData = locaData.filter(item=>!item.isCheck);
  storage.set(cart_key, newData);
}

export const clearCart = ()=>{
  storage.set(cart_key, []);
}