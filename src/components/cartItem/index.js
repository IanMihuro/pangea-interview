import React, { Component } from "react";
import styled from "styled-components";

const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justift-content: space-between;
  position: relative;
  background: #fff;
  margin-bottom: 15px;
`;

const CartItemContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProductTitle = styled.h6`
  color: #1e2d2b;
  font-size: 13px;
  line-height: 1.5;
  padding: 0px 10px;
`;

const RemoveBtn = styled.span`
  font-size: 14px;
  margin: 0 10px;
  opacity: 0.7;
  cursor: pointer;
  color: #000;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #fdfdfd;
  margin-right: 25px;
  margin-bottom: 25px;
`;

const ProductImg = styled.img`
  max-height: 150px;
  max-width: 150px;
`;

const QuantityContainer = styled.div`
display: flex;
flex: direction: row;
justify-content: space-between;
align-items: center;
max-width: 60%;
padding: 10px 10px;
`;

const QuantitySelector = styled.div`
  border: 0.5px solid #BCBCBC;
  padding 7px 7px;
  width: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DecresseBtn = styled.span`
  cursor: pointer;
  color: #000;
  font-size: 15px;
`;

const Quantity = styled.span`
  padding: 0 10px;
  font-size: 13px;
`;

const IncreaseBtn = styled.span`
  cursor: pointer;
  color: #000;
  font-size: 15px;
`;

const Price = styled.div`
  padding: 0 10px;
  font-size: 13px;
  letter-spacing: 0.03px;
`;

class CartItem extends Component {
  render() {
    // const { title, price, image_url } = this.props.product;
    const title = "Test";
    const image_url =
      "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/classic-maintenance.png";
    const price = 20;
    return (
      <CartItemContainer>
        <CartItemContainerTop>
          <ProductTitle>{title}</ProductTitle>
          <RemoveBtn>x</RemoveBtn>
        </CartItemContainerTop>
        <ImageContainer>
          <ProductImg src={image_url} alt="product image" />
        </ImageContainer>
        <QuantityContainer>
          <QuantitySelector>
            <DecresseBtn>-</DecresseBtn>
            <Quantity> 1 </Quantity>
            <IncreaseBtn>+</IncreaseBtn>
          </QuantitySelector>
          <Price>${price}</Price>
        </QuantityContainer>
      </CartItemContainer>
    );
  }
}

export default CartItem;
