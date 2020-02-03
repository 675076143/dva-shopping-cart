import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Products from "../pages/products/products";
import Cart from "../components/cart/cart";
import GitHubCorner from "../components/gitHubCorner/githubCorner";
import Size from "../components/size/size";

function IndexPage() {
  return (
    <main>
      <Size/>
      <Products/>
      <Cart/>
      <GitHubCorner/>
    </main>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
