import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { showCart } from "../../redux/actions/cartActions";

import Logo from "../../assets/PNG/lumin_logo.png";
import ShoppingCart from "../../assets/PNG/shopping_cart.png";
//Component
import Cart from "../cart";

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  padding: 15px 30px;
`;

const LogoImg = styled.img`
  height: 30px;
  width: 180px;
  margin-right: 50px;
`;

const InnerNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const A = styled.a`
  text-decoration: none;
  padding-right: 30px;
  color: #000;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const ShoppingCartImg = styled.img`
  height: 30px;
  width: 30px;
`;
//TODO convert to Use Hook
class Heder extends Component {
  showCart = () => {
    this.props.showCart();
  };

  render() {
    return (
      <>
        {this.props.cart.showCart && <Cart />}

        <Nav>
          <InnerNav>
            <LogoImg src={Logo} alt="logo" />
            <A href="/">Shop</A>
            <A href="/">Learn</A>
          </InnerNav>

          <InnerNav>
            <A href="/">Account</A>
            <Button onClick={this.showCart}>
              <ShoppingCartImg src={ShoppingCart} alt="shopping cart" />
            </Button>
            <p>{this.props.cart.totalQuantity}</p>
          </InnerNav>
        </Nav>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { showCart })(Heder);
