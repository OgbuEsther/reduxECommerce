import React from "react";
import styled from "styled-components";

const New = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <h1>
            New Arrivals. <span>REY backpacks & bags</span>
          </h1>
        </Wrapper>
      </Container>
    </div>
  );
};

export default New;

const Wrapper = styled.div`
  width: 90%;

  h1 {
    color: black;
    text-align: left;
    margin-top: 80px;
    margin-bottom: 60px;

    span {
      color: darkgray;
    }
  }
`;

const Container = styled.div`
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;
