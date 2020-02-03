import React from 'react';
import style from './size.css'
import {Button} from "antd";
const Size = () => {
  const sizes = ['XS','S','M','ML','L','XL','XXL']
  return (
    <div className={style.size}>
      <h2>Sizes:</h2>
      {sizes.map((v=>(
        <Button size='large' shape='circle' key={v}>{v}</Button>
      )))}
    </div>
  );
};

Size.propTypes = {
};

export default Size;
