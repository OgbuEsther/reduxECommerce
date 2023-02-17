import React from "react";
import styled from "styled-components";
import pic from "../ASSESTS/det.jpg";
import { AiFillStar } from "react-icons/ai";

const Details = () => {
  return (
    <div>
      <Container>
        <DivOne>
          <img src={pic} alt="" />
        </DivOne>
        <DivTwo>
          <h1>Heavy Weight Shoes</h1>
          <Features>
            <Price>$112.00</Price>
            <Line></Line>
            <Rate>
              <Icn>
                <AiFillStar />{" "}
              </Icn>
              4.9
            </Rate>
            <Reviews>142 reviews</Reviews>
            <NewIn>New in</NewIn>
          </Features>

          <Content>
            <Counter></Counter>
            <Add>Add to cart</Add>
          </Content>
        </DivTwo>
      </Container>
    </div>
  );
};

export default Details;

const Add = styled.div``;

const Counter = styled.div``;

const Content = styled.div`
  width: 500px;
  height: 100px;
  background-color: yellow;
`;

const Line = styled.div`
  width: 1px;
  height: 30px;
  background-color: darkgray;
  margin-left: 10px;
  margin-right: 20px;
`;

const Icn = styled.div`
  color: #facc15;
  margin-right: 9px;
`;

const NewIn = styled.div`
  width: 70px;
  height: 30px;
  font-size: 14px;
  margin-left: 9px;
  margin-top: 5px;
`;

const Reviews = styled.div`
  width: 90px;
  height: 30px;
  text-decoration: underline;
  font-size: 13px;
  margin-top: 5px;
  cursor: pointer;
`;

const Rate = styled.div`
  width: 70px;
  height: 30px;
  display: flex;
  font-size: 14px;
  margin-top: 5px;
  cursor: pointer;

  /* align-items: center; */
`;

const Price = styled.div`
  width: 70px;
  height: 30px;
  color: lightgreen;
  font-weight: bold;
  border: 2px solid lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const Features = styled.div`
  display: flex;
  width: 300px;
  height: 50px;
  align-items: center;
  font-weight: 600;
`;

const DivTwo = styled.div`
  width: 50%;
  /* background-color: blue; */
  text-align: left;
  margin-right: 10px;
`;

const DivOne = styled.div`
  width: 45%;
  margin-left: 30px;
  /* background-color: red; */

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 30px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: aliceblue; */
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
