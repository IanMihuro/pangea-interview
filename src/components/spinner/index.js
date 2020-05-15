import React from "react";
import styled from "styled-components";

import Loader from "../../assets/SVG/loader.svg";

const Content = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`;

const LoaderImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -20px;
  margin-left: -25px;
  text-align: center;
  font-size: 10px;
  background-color: transparent;
`;

function Spinner() {
  return (
    <Content>
      <LoaderImg src={Loader} alt="loader" />
    </Content>
  );
}

export default Spinner;
