import React from "react";
import styled from "styled-components";
import Arrivals from "./Arrivals";
import Categories from "./Categories/Categories";
import Discover from "./Discover";

import Hero from "./Hero";

import StepsComp from "./StepsComp";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <br />
      <br />
      <br />
      <Discover />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Arrivals />
      <br />
      <br />
      <br />
      <Hold>
        <hr />
      </Hold>

      <br />
      <br />
      <StepsComp />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Categories />
    </div>
  );
};

export default HomeScreen;

const Hold = styled.div`
  height: 1px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
