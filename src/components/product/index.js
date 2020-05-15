import React, { Component } from "react";
import styled from "styled-components";

const Content = styled.div`
  text-align: center;
  padding: 50px 0px;
  min-height: 50px;
  flex: 0 0 33.33%;
`;

const ImageContainter = styled.div`
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  padding: 0 15px;
  max-height: 180px;
`;

const ProductTitle = styled.h3`
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 6px;
  color: #000;
`;

const Price = styled.p`
  font-size: 16px;
  color: #000;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const AddToCartBtn = styled.div`
  background-color: #4b5548;
  color: #fff;
  padding: 15px 12px;
  border: 0.5px solid #4b5548;
  width: calc(50% - 5px);
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`;

const A = styled.a`
  text-decoration: none;
`;

class Product extends Component {
  addToCart = (product) => {
    console.log(`${product.title} has been added to the cart`);
  };

  render() {
    const { image_url, price, title } = this.props.product;
    return (
      <Content>
        <ImageContainter>
          <a href="/">
            <Image src={image_url} />
          </a>
        </ImageContainter>
        <A href="/">
          <ProductTitle>{title}</ProductTitle>
        </A>
        <Price>From ${price}</Price>
        <ButtonContainer>
          <AddToCartBtn onClick={() => this.addToCart(this.props.product)}>
            Add to Cart
          </AddToCartBtn>
        </ButtonContainer>
      </Content>
    );
  }
}

export default Product;
