import React from "react";
import styled from "styled-components";

const Discover = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <h1>
            Discover more. <span>Good things are waiting for you</span>
          </h1>
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
            <Two></Two>
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Discover;

const Two = styled.div``;

const Button = styled.button``;

const DivTwo = styled.div``;

const DivOne = styled.div``;

const One = styled.div``;

const Card = styled.div``;

const Wrapper = styled.div``;

const Container = styled.div``;
