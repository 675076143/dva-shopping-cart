export default {
  namespace:'products',
  state:{
    checkedSizes:[]
  },
  reducers:{
    'checkedSizes'(state,action){
      state.checkedSizes = action.payload;
      return {...state,...action.payload}
    }
  }
}
