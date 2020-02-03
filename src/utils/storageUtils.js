/*
* 存储User的Storage工具
* 登录持久化
* 使用localStorage(对旧版本的浏览器不支持)
* 改用storage库
* */
import store from 'store'

const CART_KEY='cart_key'


export default {
    //保存购物车
    setCart(user){
        store.set(CART_KEY,user)
    },
    //获取购物车
    getCart() {
      return store.get(CART_KEY) || []
    },
    //删除购物车
    removeCart(){
        store.remove(CART_KEY)
    }
}
