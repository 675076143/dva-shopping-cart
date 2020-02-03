import React,{Component} from "react";
import style from './cartItem.css'
import {Avatar, Button, Card, Icon} from "antd";
const { Meta } = Card;
export default class CartItem extends Component{
  state = {
    num:1
  }
  render() {
    const {title,isFreeShipping,price,currencyFormat,sku} = this.props.data;
    const {num} = this.state
    const productStyle = this.props.data.style;
    const description = ()=>
      <span>{productStyle}<br/>
        Quantity: {num}
      </span>;
    return(
      <Card className={style.cartItem}>
        <Meta
          avatar={
            <Avatar shape='square' src={require(`../../static/products/${sku}_2.jpg`)} className={style.avatar} size={80} />
          }
          title={title}
          description={description()}
        />
        <div className={style.cartItemHandle}>
          <Icon type="close" style={{cursor:'pointer'}} />
          <h3>{currencyFormat} {price*num}</h3>
          <Button onClick={()=>{this.setState({num: num-1})}} disabled={num<=1?true:false}><Icon type="minus" /></Button>
          <Button onClick={()=>{this.setState({num: num+1})}}><Icon type="plus" /></Button>
        </div>
      </Card>
    )
  }

}
