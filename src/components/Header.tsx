import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import pic from "./ASSESTS/TWO.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { UseAppDispatch, useAppSelector } from "./Global/Store";
import { clearCart, logoutUser } from "./Global/ReduxState";

const Header = () => {
  const userData = useAppSelector((state) => state.myReducer.cart);

  const userName = useAppSelector((state) => state.myReducer.currentUser);
  const dispatch = UseAppDispatch();

  const readCartQuantity = useAppSelector(
    (state) => state.myReducer.totalQuantity
  );

  return (
    <div>
      <Hold>
        <Container>
          <Wrapper>
            <Logo src={pic} />
          </Wrapper>
          <NavHold>
            <Nav to="/">Home</Nav>
            <Nav to="/about">About</Nav>
            <Nav to="/product">Products</Nav>
            <Nav to="/services">Services</Nav>
          </NavHold>

          <IconHold>
            <Icon>
              <BsSearch />
            </Icon>
            <Icon1 to="/cart">
              <AiOutlineShoppingCart />
              <Count> {readCartQuantity}</Count>
            </Icon1>
            {/* <Icon></Icon> */}
            {userName?.name ? (
              <>
                <Link
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                  to="/home"
                >
                  <Button>LogOut</Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/register">
                  <Button>Get Started</Button>
                </Link>
              </>
            )}

            {/* 	{userData?.name ? (
					<NavLink
						onClick={() => {
							dispatch(logoutUser());
						}}
						to='/'>
						<Button>Logout</Button>
					</NavLink>
				) : (
					<NavLink to='/register'>
						<Button>Get Started</Button>
					</NavLink>
				)} */}
          </IconHold>
        </Container>
      </Hold>
    </div>
  );
};

export default Header;

const Count = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: lightblue;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

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
  margin-left: 10px;
  color: #000000e6;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
`;

const Icon1 = styled(Link)`
  margin-right: 10px;
  color: #000000e6;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
  text-decoration: none;
`;

const IconHold = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled(NavLink)`
  margin-right: 10px;
  margin-left: 10px;
  color: #000000e6;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
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
