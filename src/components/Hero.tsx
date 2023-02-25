import React from "react";
import styled from "styled-components";
import pic from "./ASSESTS/hero1.png";
import { BsSearch } from "react-icons/bs";

const Hero = () => {
  return (
    <div>
      <Container>
        <First>
          <TextHold>
            <Title>In this season find the best</Title>
            <Sub>Exclusive collection for everyone</Sub>
            <Hold>
              <Button>
                Explore now
                <Icn>
                  {" "}
                  <BsSearch />
                </Icn>
              </Button>
            </Hold>
          </TextHold>
        </First>
        <Second>
          <img src={pic} alt="" />
        </Second>
      </Container>
    </div>
  );
};

export default Hero;

const Hold = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const Icn = styled.div`
  margin-left: 8px;
  font-size: 15px;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: black;
  color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sub = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 30px;
`;

const TextHold = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  text-align: left;
`;

const Second = styled.div`
  width: 70%;
  margin-top: 50px;

  img {
    height: 500px;
    object-fit: cover;
  }
`;

const First = styled.div`
  /* width: 40%; */
  margin-left: 80px;
  margin-top: 50px;
`;

const Container = styled.div`
  width: 100%;
  /* height: 500px; */
  height: calc(100vh);
  background-color: #e3ffe6;
  display: flex;
  align-items: center;
  justify-content: center;
`;
