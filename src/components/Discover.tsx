import React from "react";
import styled from "styled-components";
import one from "./ASSESTS/imgOne.png";
import two from "./ASSESTS/imgTwo.png";
import three from "./ASSESTS/4.png";
const Discover = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <h1>
            Discover more. <span>Good things are waiting for you</span>
          </h1>
          <Holder>
            <Card>
              <One>
                <DivOne>
                  <p>Explore new arrivals</p>
                  <h2>Shop the latest from top brands</h2>
                </DivOne>
                <DivTwo>
                  <Button>Show me all</Button>
                </DivTwo>
              </One>
              <Two>
                <img src={one} alt="" />
              </Two>
            </Card>
            <Card1>
              <One>
                <DivOne>
                  <p>Explore new arrivals</p>
                  <h2>Shop the latest from top brands</h2>
                </DivOne>
                <DivTwo>
                  <Button>Show me all</Button>
                </DivTwo>
              </One>
              <Two>
                <img src={two} alt="" />
              </Two>
            </Card1>
            <Card2>
              <One>
                <DivOne>
                  <p>Explore new arrivals</p>
                  <h2>Shop the latest from top brands</h2>
                </DivOne>
                <DivTwo>
                  <Button>Show me all</Button>
                </DivTwo>
              </One>
              <Two>
                <img src={three} alt="" />
              </Two>
            </Card2>
            {/* <Card3>
            <One>
              <DivOne>
                <p>Explore new arrivals</p>
                <h2>Shop the latest from top brands</h2>
              </DivOne>
              <DivTwo>
                <Button>Show me all</Button>
              </DivTwo>
            </One>
            <Two></Two>
          </Card3> */}
          </Holder>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Discover;

const Holder = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
`;

const Card3 = styled.div`
  width: 450px;
  height: 250px;
  background-color: #ffff0021;
  border-radius: 10px;
  display: flex;
  padding-bottom: 10px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

const Card2 = styled.div`
  width: 400px;
  height: 250px;
  background-color: lightblue;
  border-radius: 10px;
  display: flex;
  padding-bottom: 10px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Card1 = styled.div`
  width: 400px;
  height: 250px;
  background-color: lightpink;
  border-radius: 10px;
  display: flex;
  padding-bottom: 10px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Two = styled.div`
  width: 180px;
  height: 200px;
  /* background-color: lightgray; */
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: white;
  color: black;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 35px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const DivTwo = styled.div``;

const DivOne = styled.div`
  text-align: left;
  padding-left: 35px;
`;

const One = styled.div`
  width: 50%;
`;

const Card = styled.div`
  width: 400px;
  height: 250px;
  background-color: #ffff0021;
  border-radius: 10px;
  display: flex;
  padding-bottom: 10px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-right: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

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
`;
