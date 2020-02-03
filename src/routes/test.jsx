import React,{Component} from "react";
import {reqProducts} from "../services/example";

export  default  class Test extends Component{
  componentDidMount() {
    reqProducts().then(res=>{
      console.log(res);
})
}

  render() {
    return(
      <div className="test">
        this is test
      </div>
    )
  }
}
