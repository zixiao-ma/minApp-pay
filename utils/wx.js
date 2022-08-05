export function wxToPromise(method='request',options={}){
  return new Promise((resolve,reject)=>{
    options.success = resolve;
    options.fail = reject
    wx[method](options)
  })
}