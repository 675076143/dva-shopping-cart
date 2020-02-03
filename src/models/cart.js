export  default {
  namespace:'cart',
  state:{
    shoppingCartItems:[]
  },

  reducers:{
    /**
     * 向购物车中添加商品
     * 判断购物车中是否已存在: id和size一致的商品
     * 如果存在，则商品数值+1
     * 否则新增
     * @param state
     * @param action
     */
    'add'(state,action){
      let isExist = false;
      for(let i=0; i<state.shoppingCartItems.length; i++){
        if(state.shoppingCartItems[i].id===action.payload.id&&state.shoppingCartItems[i].size===action.payload.size){
          // 存在，数值++
          state.shoppingCartItems[i].num++;
          isExist = true;
          console.log('存在')
          // return false
        }
      }
      // 不存在，新增商品
      if(!isExist){
        console.log('不存在')
        state.shoppingCartItems.push(action.payload)
      }
      return {...state,...action.payload}
    },
    /**
     * 根据传进来的是increase还是decrease来判断增加或者减少
     * @param state
     * @param action
     */
    'changeNum'(state,action){
      console.log(action.payload)
      for(let i=0; i<state.shoppingCartItems.length; i++){
        if(state.shoppingCartItems[i].id===action.payload.id&&state.shoppingCartItems[i].size===action.payload.size){
          if(action.payload.option === 'increase'){//增加
            state.shoppingCartItems[i].num++;
          }else {//减少
            state.shoppingCartItems[i].num--;
          }
        }
      }
      return {...state,...action.payload}
    },
    'deleteProduct'(state,action){
      for(let i=0; i<state.shoppingCartItems.length; i++){
        if(state.shoppingCartItems[i].id===action.payload.id&&state.shoppingCartItems[i].size===action.payload.size){
          //删除对象
          state.shoppingCartItems.splice(i,1)
        }
      }
      return {...state,...action.payload}
    }
  }
}
