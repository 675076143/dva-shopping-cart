import React from 'react';
import style from './size.css'
import {Button} from "antd";
import {connect} from "dva";
class Size extends React.Component{

  state = {
    checkedSizes:[]
  }

  /**
   * 修改该size的选中状态
   * @param size
   */
  handleChange(size){
    const checkedSizes = [...this.state.checkedSizes]
    if(this.state.checkedSizes.indexOf(size)!==-1){
      checkedSizes.splice(checkedSizes.indexOf(size),1)
      console.log("存在")
    }else {
      console.log("不存在")
      checkedSizes.push(size)
    }
    this.setState({checkedSizes})
    this.props.dispatch({
      type:'products/checkedSizes',
      payload:checkedSizes
    })
  }

  render() {
    const sizes = ['XS','S','M','ML','L','XL','XXL']
    const {checkedSizes} = this.state
    return (
      <div className={style.size}>
        <h2>Sizes:</h2>
        {sizes.map((v=>(
          <Button size='large' shape='circle' key={v}
                  type={checkedSizes.indexOf(v)!==-1?'primary':'default'}
                  onClick={()=>{this.handleChange(v)}}>{v}</Button>
        )))}
      </div>
    );
  }
};

const mapStateToProps = state=>{
  return state
}
export default connect(mapStateToProps)(Size);
