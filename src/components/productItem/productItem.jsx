import React,{Component} from "react";
import  style from './productItem.css'
import {Button, Icon} from "antd";
import {Card} from "antd";
const { Meta } = Card;

export default class ProductItem extends Component{
  render() {
    const {title,isFreeShipping,price,currencyFormat,sku} = this.props.data
    return(
      <Card
        className={style.productItem}
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={require(`../../static/products/${sku}_1.jpg`)} />}
        actions={[
          <div><Icon type="plus" key="plus" /> Add to Cart</div>,
        ]}
      >
        <Meta title={title} description={isFreeShipping?"Free shipping":"Charge "} />
        <h2 className={style.price}>{currencyFormat+price}</h2>
      </Card>

    )
  }
}
