import React from "react";
import styled from "styled-components";
import Arrivals from "./Arrivals";
import Discover from "./Discover";
import Explore from "./Explore";
import Hero from "./Hero";
import New from "./New";
import Prod from "./Prod";
import Steps from "./Steps";
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
      {/* <Prod /> */}
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
      <Explore />
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
