import React from "react";
import  style from './products.css'
import {Button, Dropdown, Icon, Menu, message, Select} from "antd";
import {connect} from "dva";
import ProductItem from "../../components/productItem/productItem";
import {reqProducts} from "../../services/example";
const { Option } = Select;

class Products extends React.Component{

  state = {
    products:[],
    order:['Select','Lowest to highest','Highest to Lowest']
  }

  componentDidMount() {
    //获取商品信息
    reqProducts().then(res=>{
      const {products} = res.data.data
      console.log(products);
      this.setState({products})
    })
  }

  handleDelete =(id)=> {
    console.log("clicked")
    this.props.dispatch({
      type:'products/delete',
      payload:{
        name:"Robin"
      },
    })
  }

  handleChange = value=> {
    console.log(`selected ${value}`);
  }

  render() {
    const {products,order} = this.state;
    const num = products.length;

    return(
      <div className={style.products}>
        <div className={style.productsHeader}>
          <h4>{num} Product(s) found.</h4>
          <div>
            Order by &nbsp;
            <Select defaultValue="Select" style={{ width: 120 }} onChange={this.handleChange}>
              {order.map(v=>(
                <Option value={v}>{v}</Option>
              ))}
            </Select>
          </div>
        </div>
        {products.map((v,k)=>(
          <ProductItem data={v} key={k}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state=>{
  return state
}
export default connect(mapStateToProps)(Products);
