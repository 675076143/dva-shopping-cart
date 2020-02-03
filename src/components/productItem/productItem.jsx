import React, {Component, Fragment} from "react";
import  style from './productItem.css'
import {Button, Icon, Modal} from "antd";
import {Card,Radio} from "antd";
import {connect} from "dva";
const { Meta } = Card;

class ProductItem extends Component{
  state = { visible: false ,size:""};
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  /**
   * 更改size
   * @param e
   */
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      size: e.target.value,
    });
  };

  /**
   * 添加商品到购物车
   * @param product
   */
  handleAddToCart = () =>{
    this.hideModal();
    const {size} = this.state;
    this.props.dispatch({
      type:'cart/add',
      payload:{...this.props.data,size,num:1}
    })
    console.log(this.props)
  }
  render() {
    const {title,isFreeShipping,price,currencyFormat,sku,availableSizes} = this.props.data
    return(
      <Fragment>
      <Card
        className={style.productItem}
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={require(`../../static/products/${sku}_1.jpg`)} />}
        actions={[
          <div><Icon type="plus" key="plus"/> Add to Cart</div>,
        ]}
        onClick={this.showModal}
      >
        <Meta title={title} description={isFreeShipping?"Free shipping":"Charge "} />
        <h2 className={style.price}>{currencyFormat+price}</h2>
      </Card>
      <Modal
        title="Modal"
        visible={this.state.visible}
        onOk={this.handleAddToCart}
        onCancel={this.hideModal}
        okText="Confirm"
        cancelText="Cancel"
      >
        <Radio.Group buttonStyle="solid" onChange={this.onChange} value={this.state.size}>
          {availableSizes.map(v=>(
            <Radio style={{margin:'5px'}} shape='circle' key={v} value={v}>{v}</Radio>
          ))}
        </Radio.Group>
      </Modal>

      </Fragment>
    )
  }
}
const mapStateToProps = state=>{
  return state
}
export default connect(mapStateToProps)(ProductItem);
