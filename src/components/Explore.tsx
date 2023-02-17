import React from "react";
import styled from "styled-components";

const Explore = () => {
  return (
    <div>
      <Container>
        <h1>Start exploring.</h1>
        <Oval>
          <Women>Women</Women>
          <Man>Man</Man>
          <Kids>Kids</Kids>
          <Sports>Sports</Sports>
          <Beauty>Beauty</Beauty>
        </Oval>
        <Wrapper></Wrapper>
      </Container>
    </div>
  );
};

export default Explore;

const Beauty = styled.div`
  margin-right: 15px;
`;

const Sports = styled.div``;

const Kids = styled.div``;

const Man = styled.div`
  width: 80px;
  height: 25px;
  background-color: #000000dd;
  color: white;
  border-radius: 30px;
`;

const Women = styled.div`
  margin-left: 15px;
`;

const Oval = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  height: 30px;
  background-color: #ffff;
  border-radius: 30px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Wrapper = styled.div``;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
