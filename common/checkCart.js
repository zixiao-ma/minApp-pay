import storage from '../utils/storage'
import publicConfig from '../config/config'
const cart_key = publicConfig.field.cart_key;

export const checkCart = () => {
  const data = storage.get(cart_key)
  return data.length
}
export const computedCart = ()=>{
  const data = storage.get(cart_key)
  console.log(data,'data');
  let [allPrice,allNum] = [0,0];
  data.forEach(item=>{
    if(item.isCheck){
      allPrice+=(item.price-0)*item.num;
    allNum += item.num
    }
  })
 return {allPrice:allPrice.toFixed(2),allNum}
}

export const checkAllCheckbox = ()=>{
  const data = storage.get(cart_key)
  return data.every(item=>item.isCheck)
}
export const checkDelButton = ()=>{
  const data = storage.get(cart_key)
  return data.some(item=>item.isCheck)
}
