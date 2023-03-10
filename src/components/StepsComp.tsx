import React from "react";
import styled from "styled-components";
import Steps from "./Steps";
import one from "./ASSESTS/step1.png";
import two from "./ASSESTS/step2.png";
import three from "./ASSESTS/step3.png";
import four from "./ASSESTS/step4.png";

const StepsComp = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Steps
            col="#FEE2E2"
            bg="#FEE2E2"
            img={one}
            title="Filter & Discover"
            sub="Smart filtering and suggestions make it easy to find"
            step="step1"
          />
          <Steps
            col="#E0E7FF"
            bg="#E0E7FF"
            img={two}
            title="Add to bag"
            sub="Easily select the correct items and add them to the cart"
            step="step2"
          />
          <Steps
            col="#FEF9C3"
            bg="#FEF9C3"
            img={three}
            title="Fast shipping"
            sub="The carrier will confirm and ship quickly to you"
            step="step3"
          />
          <Steps
            col="#F3E8FF"
            bg="#F3E8FF"
            img={four}
            title="Enjoy the product"
            sub="Have fun and enjoy your 5-star quality products"
            step="step4"
          />
        </Wrapper>
      </Container>
    </div>
  );
};

export default StepsComp;

const Wrapper = styled.div`
  display: flex;
  width: 90%;

  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  /* height: 500px; */
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
