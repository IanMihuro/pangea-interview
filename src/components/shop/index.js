import React, { Component } from "react";
import styled from "styled-components";
//Components
import Product from "../product";
import Error from "../product";
import Loader from "../spinner";
import SubHeader from "../SubHeader";
//Graph Query
import gql from "graphql-tag";
import { Query } from "react-apollo";

const ALL_PRODUCTS_QUERY = gql`
  query {
    products {
      price(currency: USD)
      id
      title
      image_url
    }
    currency
  }
`;

const Content = styled.section`
  padding: 25px;
  background-color: #e2e6e3;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

class Shop extends Component {
  render() {
    return (
      <div>
        <SubHeader />
        <Content>
          <Query query={ALL_PRODUCTS_QUERY}>
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
              return data.products.map((product) => (
                <Product key={product.id} product={product} />
              ));
            }}
          </Query>
        </Content>
      </div>
    );
  }
}

export default Shop;
