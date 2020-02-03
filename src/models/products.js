export default {
  namespace:'products',
  state:{},
  reducers:{
    'delete'(state,payload){
      console.log("product.reducters=>delete")
      console.log(payload)
      return state
    }
  }
}
