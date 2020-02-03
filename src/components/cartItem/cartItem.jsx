import React,{Component} from "react";
import style from './cartItem.css'
import {Avatar, Button, Card, Icon} from "antd";
import {connect} from "dva";
const { Meta } = Card;
class CartItem extends Component{

  /**
   * 变更数量
   * @param option 增加or减少
   */
  changeNum = option=>{
    this.props.dispatch({
      type:'cart/changeNum',
      payload:{
        option,
        size:this.props.data.size,
        id:this.props.data.id
      }
    })
  }
  deleteProduct =()=>{
    this.props.dispatch({
      type:'cart/deleteProduct',
      payload: {
        size:this.props.data.size,
        id:this.props.data.id
      }
    })
  }


  render() {
    const {title,isFreeShipping,price,currencyFormat,sku,size,num} = this.props.data;
    const productStyle = this.props.data.style;
    const description = ()=>
      <span>{size} | {productStyle}<br/>
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
          <Icon type="close" style={{cursor:'pointer'}} onClick={this.deleteProduct} />
          <h3>{currencyFormat} {price*num}</h3>
          <Button onClick={()=>{this.changeNum('decrease')}} disabled={num<=1?true:false}><Icon type="minus" /></Button>
          <Button onClick={()=>{this.changeNum('increase')}}><Icon type="plus" /></Button>
        </div>
      </Card>
    )
  }

}
const mapStateToProps = state=>{
  return state
}
export default connect(mapStateToProps)(CartItem);
