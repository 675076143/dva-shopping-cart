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
    order:['Select','Lowest to highest','Highest to lowest']
  }

  componentDidMount() {
    //获取商品信息
    reqProducts().then(res=>{
      const {products} = res.data.data
      console.log(products);
      this.setState({products})
    })
  }

  /**
   * 排序
   * @param value
   */
  handleChange = value=> {
    console.log(`selected ${value}`);
    const products = [...this.state.products]
    switch (value) {
      case 'Select':
        products.sort((a,b)=>{
          return a.id-b.id
        });
        break;
      case "Lowest to highest":
        products.sort((a,b)=>{
          return a.price-b.price
        });
        break;
      case "Highest to lowest":
        products.sort((a,b)=>{
          return a.price-b.price
        }).reverse();
        break;
      default:
        break;
    }
    this.setState({
      products
    })
  }

  isInChecked(availableSizes){
    const {checkedSizes} = this.props.products
    //如果选中列表为空，代表全选
    if(checkedSizes.length === 0) return true;
    let result = false;
    //判断是否被选中
    for(let i of  availableSizes){
      if(checkedSizes.indexOf(i)!==-1){
        return true
      }
    }
    return false

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
            <Select defaultValue="Select" style={{ width: 150 }} onChange={this.handleChange}>
              {order.map(v=>(
                <Option value={v} key={v}>{v}</Option>
              ))}
            </Select>
          </div>
        </div>
        {products.map((v,k)=>(
          this.isInChecked(v.availableSizes)?<ProductItem data={v} key={k}/>:''
        ))}
      </div>
    )
  }
}

const mapStateToProps = state=>{
  return state
}
export default connect(mapStateToProps)(Products);
