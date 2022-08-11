import storage from '../utils/storage'
import publicConfig from '../config/config'
const cart_key = publicConfig.field.cart_key;

export const getOrderList = ()=>{
  const data = storage.get(cart_key)
  return data.filter(item=>item.isCheck)
}