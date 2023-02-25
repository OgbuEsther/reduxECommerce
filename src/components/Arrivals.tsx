import React from "react";
import styled from "styled-components";
import hher from "./ASSESTS/11.png";
import pic from "./ASSESTS/1.png";
import pix from "./ASSESTS/2.png";
import pics from "./ASSESTS/3.jpg";
import { AiFillStar } from "react-icons/ai";

const Arrivals = () => {
  return (
    <Container>
      <Wrapper>
        <Up>
          New Arrivals.
          <span style={{ color: "rgb(107,114,128)", marginLeft: "10px" }}>
            REY backpacks & bags
          </span>
        </Up>
        <Down>
          <Box>
            <img src={hher} alt="" />
            <Write>
              <Txt>
                Leather Gloves
                <span
                  style={{
                    color: "rgba(39, 40, 41, 0.849)",
                    marginTop: "10px",
                  }}
                >
                  Perfect Black
                </span>
              </Txt>
              <Below>
                <Price>$42.00</Price>
                <Ratings>
                  <AiFillStar style={{ color: "#fbbf24" }} />
                  4.2 (36 reviews)
                </Ratings>
              </Below>
            </Write>
          </Box>
          <Box>
            <img src={pic} alt="" />
            <Write>
              <Txt>
                Long Sleeves
                <span
                  style={{
                    color: "rgba(39, 40, 41, 0.849)",
                    marginTop: "10px",
                  }}
                >
                  Perfect mint green
                </span>
              </Txt>
              <Below>
                <Price>$42.00</Price>
                <Ratings>
                  <AiFillStar style={{ color: "#fbbf24" }} />
                  4.2 (36 reviews)
                </Ratings>
              </Below>
            </Write>
          </Box>
          <Box>
            <img src={pix} alt="" />
            <Write>
              <Txt>
                Shorts
                <span
                  style={{
                    color: "rgba(39, 40, 41, 0.849)",
                    marginTop: "10px",
                  }}
                >
                  Perfect lilac shorts
                </span>
              </Txt>
              <Below>
                <Price>$42.00</Price>
                <Ratings>
                  <AiFillStar style={{ color: "#fbbf24" }} />
                  4.2 (36 reviews)
                </Ratings>
              </Below>
            </Write>
          </Box>
          <Box>
            <img src={pics} alt="" />
            <Write>
              <Txt>
                sneakers
                <span
                  style={{
                    color: "rgba(39, 40, 41, 0.849)",
                    marginTop: "10px",
                  }}
                >
                  Perfect white
                </span>
              </Txt>
              <Below>
                <Price>$42.00</Price>
                <Ratings>
                  <AiFillStar style={{ color: "#fbbf24" }} />
                  4.2 (36 reviews)
                </Ratings>
              </Below>
            </Write>
          </Box>
        </Down>
      </Wrapper>
    </Container>
  );
};

export default Arrivals;

const Container = styled.div`
  width: 100vw;
  /* height: 600px; */
  color: black;
  /* background-color: blue; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 100vw;
  /* height: 550px; */
  /* background-color: red; */
  margin-left: 5vw;
  margin-right: 5vw;
`;

const Up = styled.div`
  font-weight: 20px;
  margin-bottom: 30px;
  color: rgb(17, 24, 39);
  font-size: 35px;
  font-weight: bold;
`;

const Down = styled.div`
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* background-color: red; */
`;

const Box = styled.div`
  width: 290px;
  height: 450px;

  /* background-color: blue; */
  border-radius: 15px;

  img {
    object-fit: cover;
    height: 300px;
    width: 100%;
    background-color: #f8fafc;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    /* background-color: red; */
  }
`;

const Write = styled.div`
  /* background-color: aliceblue; */
  height: 150px;
`;

const Txt = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: bold;
  margin-left: 20px;
  color: rgb(28, 28, 29);
  margin-top: 25px;
  span {
    color: rgb(28, 28, 29);
  }
`;
const Below = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Price = styled.div`
  border: 2px solid green;
  height: 30px;
  width: 80px;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  color: rgb(15, 15, 15);
`;
const Ratings = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #161515;
`;
