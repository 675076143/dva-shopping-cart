export default {
  namespace:'products',
  state:{},
  reducers:{
    'delete'(state,payload){
      console.log("product.reducers=>delete")
      console.log(payload)
      return state
    }
  }
}
