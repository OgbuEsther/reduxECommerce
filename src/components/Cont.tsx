import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
const Cont = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [Subject, setSubject] = useState("");
  // const [userData , setUserData] = useState();

  const Fetch = async (e: any) => {
    e.preventDefault();
    await axios
      .post(`https://uniabuja.onrender.com/api/postmessage`, {
        email,
        name,
        title,
        Subject,
      })
      .then((res) => {
        //   setUserData(res.data.data.createData)
      });
  };
  return (
    <Container>
      <Wrapper>
        <Top>
          <h1>Get in Touch</h1>
        </Top>
        <Hold>
          <Left>
            <Up>
              <h3>Contact us</h3>
            </Up>
            <p>
              Don't hesitate to reach out to us. We'll respond as soon as
              possible
            </p>
            <a href="cur@uniabuja.edu.ng">cur@uniabuja.edu.ng</a>
            <Prof>
              <h4>Professor Taibat Adebukola Atoyebi</h4>
              <a href="taibat.atoyebi@uniabuja.edu.ng">
                taibat.atoyebi@uniabuja.edu.ng
              </a>
            </Prof>
            <Prof>
              <h4>Dr. Dike Ojji</h4>
              <a href="dike.ojji@uniabuja.ed.ng">dike.ojji@uniabuja.ed.ng</a>
            </Prof>
          </Left>
          <Right onSubmit={Fetch}>
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
            />
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
            <Input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Subject"
            />
            <Box
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              placeholder="Message"
            />
            <Button type="submit">Submit</Button>
          </Right>
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default Cont;
const Prof = styled.div`
  display: flex;
  flex-direction: column;
  a {
    margin-top: -13px;
  }
`;
const Button = styled.button`
  height: 50px;
  width: 150px;
  background-color: #00a85a;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 350ms;
  font-weight: bold;
  margin-top: 15px;
  color: white;
  :hover {
    transform: scale(0.9);
    background-color: #f5f5f5;
    color: #00a85a;
    border: 1px solid #00a85a;
  }
`;
const Box = styled.textarea`
  /* width: 200px; */
  display: flex;
  padding-left: 15px;
  padding-top: 20px;
  height: 90px;
  border: 1px solid #ced4da;
  outline: none;
  resize: none;
  ::placeholder {
    font-size: 17px;
  }
`;
const Input = styled.input`
  /* width: 100%; */
  height: 45px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  border: 1px solid #ced4da;
  margin-bottom: 10px;
  ::placeholder {
    font-size: 17px;
  }
`;
const Right = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  /* align-items: center;
    justify-content: center; */
  /* background-color: red; */
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
  }
`;
const Up = styled.div`
  h3 {
    font-size: 23px;
    margin: 0;
  }
`;
const Left = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 40px;
  p {
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Hold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 50px;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Top = styled.div`
  h1 {
    font-size: 35px;
    color: #00a85a;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  /* background-color: red; */
  margin-top: 80px;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 70px;
`;
