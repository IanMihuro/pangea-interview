import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "react-flexbox-grid";
import { connect } from "react-redux";
import { hideCart } from "../../redux/actions/cartActions";
import { compose } from "redux";

import BackIcon from "../../assets/SVG/shogun.svg";
import CartItem from "../cartItem";
import Loader from "../spinner";
import Error from "../product";

//Graph Query
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { withApollo } from "@apollo/react-hoc";

const ALL_CURRENCY_QUERY = gql`
  {
    currency
  }
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1005;
  overflow-x: hidden;
  transition: 0.5s;
  padding 0px;
`;

const LeftOverlay = styled.div`
  height: 100%;
  width: 100%;
  z-index:-10;
  position: fixed;
  background-color: rgba(110, 123, 112, 0.38);
  transition: 0.5s;
  padding 0px;
`;

const CartContainer = styled.div`
  width: 100%;
  float: right;
  z-index: 1004;
  background-color: #f2f3f0;
  transition: 0.5s;
  padding 0px;
  max-width: 550px;
  
`;

const CartHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: inherit;
  justify-content: space-between;
  position: relative;
`;

const H1 = styled.h1`
  color: #696969;
  font-weight: normal;
  letter-spacing: 1px;
  font-style: normal;
  font-size: 10px;
  text-align: center;
  margin-top: 25px;
`;

const CartBackBtn = styled.div`
  position: absolute;
  z-index: 5;
`;

const CloseCartOverlay = styled.div`
  border-style: solid;
  margin: 20px;
  border-width: 1px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  border-color: #c6ccc7;
`;

const IconWrapper = styled.div`
  text-align: center;
  cursor: pointer;
`;

const BackIconDiv = styled.div`
  padding: 4px;
`;

const CurrencyDiv = styled.div`
  width: 70px;
  margin-left: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const CurrencySelect = styled.select`
  background: #fff
    url(https://cdn.shopify.com/s/files/1/2960/5204/t/4/assets/select.png?5997012569058552034)
    no-repeat right center;
  cursor: pointer;
  background-size: 17px 5px;
`;

const CartBody = styled.div`
  margin-left: 25px;
  margin-right: 25px;
`;

const CartItemList = styled.div`
  overflow-y: scroll;
  margin-bottom: 220px;
`;

const CartEmptyMsg = styled.p`
  color: #000;
  text-align: center;
  font-size: 120%;
  margin-top: 20px;
  font-size: inherit;
`;

const CartFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 525px;
  background: #f2f3f0;
  padding-left: 20px;
  padding-right: 20px;
  min-height: 50px;
`;

const CartSubTotal = styled.div`
  border-style: solid;
  margin-top: 10px;
  margin-bottom: 10px;
  border-top-width: 0.5px;
  border-left-width: 0px;
  border-bottom-width: 0px;
  border-right-width: 0px;
  border-color: #6e7b70;
  padding-top: 15px;
`;

const SubTotalPrice = styled.div`
  color: #000;
  padding 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  letter-spacing: 0.03px;
`;

const CartCheckout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
  min-height: 120px;
`;

const SubscriptionBtn = styled.a`
  color: #4b5548;
  border: 1px solid #4b5548;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: normal;
  font-style: normal;
  padding: 16px 20px;
  text-align: center;
  background-color: #fff;
  text-decoration: none;
  cursor: pointer;
`;
const CheckoutBtn = styled.a`
  color: #fff;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: normal;
  font-style: normal;
  padding: 16px 20px;
  text-align: center;
  background-color: #4b5548;
  text-decoration: none;
  cursor: pointer;
`;

class Cart extends Component {
  state = {
    currency: "",
    alternativePricingData: [],
  };
  CloseCart = () => {
    this.props.hideCart();
  };

  ChangeCurrency = (event) => {
    this.setState({ currency: event.target.value }, async () => {
      console.log("state: ", this.state.currency);
      const CHANGE_CURRENCY_QUERY = gql`
      {
        products {
          price(currency: ${this.state.currency})
          id
          title
          image_url
        }
      }
    `;
      const { data } = await this.props.client.query({
        query: CHANGE_CURRENCY_QUERY,
      });

      this.setState({
        alternativePricingData: data.products,
      });
      console.log("data: ", data);
    });
  };

  render() {
    return (
      <Overlay>
        <LeftOverlay />
        <CartContainer>
          <CartHeader>
            <Col xs={4} sm={4} md={12} lg={4}>
              <CartBackBtn>
                <CloseCartOverlay>
                  <IconWrapper onClick={this.CloseCart}>
                    <BackIconDiv>
                      <img src={BackIcon} alt="back button" />
                    </BackIconDiv>
                  </IconWrapper>
                </CloseCartOverlay>
              </CartBackBtn>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <H1>YOUR CART</H1>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}></Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <CurrencyDiv>
                <Query query={ALL_CURRENCY_QUERY}>
                  {({ loading, error, data }) => {
                    if (loading)
                      return (
                        <h4>
                          <Loader />
                        </h4>
                      );
                    if (error)
                      return (
                        <h4>
                          {" "}
                          <Error error={error} />
                        </h4>
                      );
                    return (
                      <CurrencySelect
                        style={{
                          padding: "8px 15px 6px 10px",
                          backgroundPosition: "47px center",
                        }}
                        onChange={this.ChangeCurrency}
                        value={this.state.currency}
                      >
                        {data.currency.map((currency, index) => (
                          <option key={index} value={currency}>
                            {currency}
                          </option>
                        ))}
                      </CurrencySelect>
                    );
                  }}
                </Query>
              </CurrencyDiv>
            </Col>
          </CartHeader>
          <CartBody>
            <CartItemList>
              {this.props.cart.cart.length === 0 ? (
                <CartEmptyMsg>There are no items in your cart</CartEmptyMsg>
              ) : (
                this.props.cart.cart.map((product) => {
                  if (this.state.alternativePricingData.length > 0) {
                    const item = this.state.alternativePricingData.find(
                      (item) => item.id === product.id
                    );
                    return (
                      <CartItem
                        key={product.id}
                        product={product}
                        altPrice={item.price}
                      />
                    );
                  }

                  return (
                    <CartItem
                      key={product.id}
                      product={product}
                      altPrice={null}
                    />
                  );
                })
              )}
            </CartItemList>
          </CartBody>
          <CartFooter>
            <div>
              <CartSubTotal>
                <SubTotalPrice>
                  <span>Subtotal</span>
                  <span>${this.props.cart.totalAmount}</span>
                </SubTotalPrice>
              </CartSubTotal>
              <CartCheckout>
                <SubscriptionBtn>
                  MAKE THIS A SUBSCRIPTION (SAVE 20%)
                </SubscriptionBtn>
                <CheckoutBtn>PROCEED TO CHECKOUT</CheckoutBtn>
              </CartCheckout>
            </div>
          </CartFooter>
        </CartContainer>
      </Overlay>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default compose(
  withApollo,
  connect(mapStateToProps, { hideCart })
)(Cart);
