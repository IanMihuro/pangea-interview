import React from "react";
import styled from "styled-components";

const Nav = styled.section`
  height: 250px;
  width: 98%;
  padding: 25px 25px;
`;
const InnerNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 250px;
  margin-left: 250px;
`;

const H2 = styled.h2`
  font-size: 48px;
  letter-spacing: 0px;
  font-family: "Libre Baskerville", serif;
  text-transform: none;
  color: #000;
  margin-bottom: 25px;
`;

const P = styled.p`
  font-size: 16px;
  letter-spacing: 0.03px;
  color: #000;
  margin-bottom: 35px;
`;

const Select = styled.select`
  width: 25%;
  height: 50px;
  border: 1px solid #cdd1ce;
  background-color: transparent;
  padding: 20px;
  font-size: 13px;
  letter-spacing: 0.03px;
  color: #000;
`;

const SubHeader = () => {
  return (
    <Nav>
      <InnerNav>
        <H2>All Products</H2>
      </InnerNav>
      <InnerNav>
        <P>A 360° look at lumin</P>
        <Select>
          <option defaultValue>Filter By</option>
        </Select>
      </InnerNav>
    </Nav>
  );
};

export default SubHeader;
