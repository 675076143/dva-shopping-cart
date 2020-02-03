import React, {Fragment} from "react";
import {Badge, Button, Drawer, Icon, message, Radio} from "antd";
import  style from './cart.css'
import CartItem from "../cartItem/cartItem";
import {connect} from "dva";
const RadioGroup = Radio.Group;
class Cart extends React.Component{
  state = { visible: false};
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  total = ()=>{
    let result = 0;
   this.props.cart.shoppingCartItems.map(v=>{
     result += v.num*v.price
   })
    return result;
  }
  render() {
    return(
      <Fragment>
        <Button className={style.cartIcon} onClick={this.showDrawer} >
          <Badge count={this.props.cart.shoppingCartItems.length} style={{cursor:"pointer"}}>
            <Icon type="shopping-cart" style={{fontSize:'30px'}}/>
          </Badge>
        </Button>
        <Drawer className={style.cartDrawer}
          width={400}
          title="Cart"
          placement='right'
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          {
            //取出购物车中的数据动态生成节点
            this.props.cart.shoppingCartItems.map(v=>(
              <CartItem key={v.id+v.size} data={v}/>
            ))
            // console.log(this.props)
          }
          <div className={style.cartBottom}>
            <div>
              <h2>SUBTOTAL</h2>
              <div>
                <h1>{"$ "+this.total().toFixed(2)}</h1>
              </div>
            </div>
            <Button onClick={()=>{message.info("total: $"+this.total())}}>CHECKOUT</Button>
          </div>
        </Drawer>
      </Fragment>

    )
  }
}

const mapStateToProps = state=>{
  return state
}
export default connect(mapStateToProps)(Cart);
