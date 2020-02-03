import React, {Fragment} from "react";
import {Badge, Button, Drawer, Icon, Radio} from "antd";
import  style from './cart.css'
import CartItem from "../cartItem/cartItem";
const RadioGroup = Radio.Group;
class Cart extends React.Component{
  state = { visible: false, placement: 'left' ,data:{
      "id": 12,
      "sku": 12064273040195392,
      "title": "Cat Tee Black T-Shirt",
      "description": "4 MSL",
      "availableSizes": ["S", "XS"],
      "style": "Black with custom print",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    }};

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

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };
  render() {
    return(
      <Fragment>
        <Button className={style.cartIcon} onClick={this.showDrawer} >
          <Badge count={5} style={{cursor:"pointer"}}>
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
          <CartItem data={this.state.data}/>
        </Drawer>
      </Fragment>

    )
  }


}

export default Cart
