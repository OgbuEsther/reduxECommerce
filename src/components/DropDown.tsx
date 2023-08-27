import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const DropDown : React.FC = () =>{
    return (
        <div>
            <Container>
            <DivTwo>
            <NavBars style={{textDecoration : "none" , color: "black"}}>
              <Link style={{textDecoration : "none" ,color: "black"}}  to="/">
               <h4>Home</h4>
              </Link>
              <Link style={{textDecoration : "none" ,color: "black"}} to="/catalog">
                <h4>Catalog</h4>
              </Link>
              <Link style={{textDecoration : "none" ,color: "black"}} to="/contact">
                <h4>Contact</h4>
              </Link>
            </NavBars>
          </DivTwo>
          <DivThree>
          <Button bg = "white" bd = "1px solid black" col = "black" bgh = " #00b7ff" colh = "white" to = "/signup">Sign Up</Button>
          <Button bg = "black" bd = "1px solid black" col = "white" bgh = "gray" colh = "black"  to = "/signin">Sign in</Button>
          </DivThree>
            </Container>
        </div>
    )
}

export default DropDown

const Container = styled.div`
width: 100%;
height: calc(100vh);
background-color: #ffffffae;
position: absolute;
position : fixed;
z-index: 1;
left: 0;
top: 50px;

backdrop-filter: blur(5px);


display: none;

@media screen and (max-width: 500px) {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

`

const DivFour = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`


const Button = styled(Link)<{bg : string , bd : string , col: string , bgh: string , colh : string}>`
  cursor: pointer;
  transition: all 400ms ease-in-out;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background-color: ${(props) => props.bg};
  border: ${(props)=> props.bd};
  color : ${(props) => props.col};
  margin-right: 10px;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

z-index: 999999;

  :hover {
    background-color: ${(props) => props.bgh};
    color:  ${(props)=> props.colh};
  }

`


const NavBars = styled.div`
display: flex;
justify-content: space-between;
width: 250px;
text-decoration: none;
z-index: 999999;
h4{
  color: black;
cursor: pointer;
transition: all 400ms ease-in-out;


:hover{
  transform: scale(0.99);
  color: #00b7ff;
}
}

@media screen and (max-width: 500px) {
  display: block;
}

`

const DivThree = styled.div`
display: flex;
@media screen and (max-width: 500px) {
  display: none;
}

`


const DivTwo = styled.div`
display: flex;

`