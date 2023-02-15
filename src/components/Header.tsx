import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo />
        </Wrapper>
        <NavHold>
          <Nav>Home</Nav>
          <Nav>Cart</Nav>
          <Nav>Products</Nav>
          <Nav>ViewAll</Nav>
        </NavHold>

        <IconHold>
          <Icon>Search</Icon>
          <Icon>Search</Icon>
          <Icon>Search</Icon>
        </IconHold>
      </Container>
    </div>
  );
};

export default Header;

const Icon = styled.div`
  margin-right: 10px;
`;

const IconHold = styled.div`
  margin-right: 20px;
  display: flex;
`;

const Nav = styled.div`
  margin-right: 10px;
  color: #000000e6;
  font-weight: 500;
`;

const NavHold = styled.div`
  display: flex;
`;

const Logo = styled.img``;

const Wrapper = styled.div`
  margin-left: 20px;
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #ffffffb2;
  box-shadow: 0px 0px 0.5px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
