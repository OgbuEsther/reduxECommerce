import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import pic from "./ASSESTS/TWO.png";

const Header = () => {
  return (
    <div>
      <Hold>
        <Container>
          <Wrapper>
            <Logo src={pic} />
          </Wrapper>
          <NavHold>
            <Nav>Home</Nav>
            <Nav>About</Nav>
            <Nav>Products</Nav>
            <Nav>Services</Nav>
          </NavHold>

          <IconHold>
            <Icon>
              <BsSearch />
            </Icon>
            <Icon>
              <AiOutlineShoppingCart />
            </Icon>
            {/* <Icon></Icon> */}
            <Button>Get Started</Button>
          </IconHold>
        </Container>
      </Hold>
    </div>
  );
};

export default Header;

const Button = styled.button`
  width: 120px;
  height: 50px;
  background-color: rebeccapurple;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  :hover {
    background-color: white;
    color: black;
    transform: scale(0.99);
    box-shadow: 0px 0px 0.5px 1px rgba(0, 0, 0, 0.1);
  }
`;

const Icon = styled.div`
  margin-right: 10px;
  color: #000000e6;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
`;

const IconHold = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.div`
  margin-right: 10px;
  color: #000000e6;
  font-weight: 500;
  cursor: pointer;
`;

const NavHold = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Wrapper = styled.div`
  width: 150px;
  height: 50px;
  /* background-color: indigo; */
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Hold = styled.div`
  width: 100%;
  height: 70px;
  background-color: #ffffffb2;
  box-shadow: 0px 0px 0.5px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;
