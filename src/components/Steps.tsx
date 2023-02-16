import React from "react";
import styled from "styled-components";

interface iProps {
  img: string;
  step: string;
  title: string;
  sub: string;
  bg: string;
}

const Steps: React.FC<iProps> = ({ img, step, title, sub, bg }) => {
  return (
    <div>
      <CardDetails>
        <Card>
          <img src={img} alt="" />
        </Card>
        <TextHold>
          <Step bg={bg}>{step} </Step>
          <Title>{title} </Title>
          <Sub>{sub} </Sub>
        </TextHold>
      </CardDetails>
    </div>
  );
};

export default Steps;

const Step = styled.button<{ bg: string }>`
  width: 70px;
  height: 30px;
  border-radius: 30px;
  border: none;
  outline: none;
  margin-bottom: 20px;
  background-color: ${(props) => props.bg};
`;

const Sub = styled.div`
  margin-bottom: 20px;
  font-size: 13px;
  color: #000000ca;
  width: 200px;
  text-align: center;
  font-weight: 500;
`;

const Title = styled.div`
  margin-bottom: 20px;
  font-weight: 700;
  color: #000000df;
`;

const TextHold = styled.div``;

const Card = styled.div`
  width: 150px;
  height: 150px;
  margin-bottom: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardDetails = styled.div`
  width: 300px;
  /* height: 400px; */
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
