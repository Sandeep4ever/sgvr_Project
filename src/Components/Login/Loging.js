import React, { useState } from "react";
import styled from "styled-components";

const TotalWrap = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: #ffffff 0% 0% no-repeat padding-box;
  background-image: url("Mask Group 138.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    position: absolute;
    top: 36px;
    left: 48px;
  }
`;
const CenterDiv = styled.div`
  padding: 80.3px 63.5px 106.3px 63.5px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 10px #0000000d;
  margin: auto;
  min-width: 466px;
  display: inline-block;

  h1 {
    text-align: left;
    font-size: 26px;
    line-height: 30px;
    font-family: "Product Sans", sans-serif;
    font-weight: bold;
    letter-spacing: 0px;
    color: #b98c13;
    margin-bottom: 8px;
  }

  h2 {
    text-align: left;
    font-size: 16px;
    line-height: 30px;
    font-family: "Product Sans";
    font-weight: normal;
    letter-spacing: 0px;
    color: #b98c13;
    margin-bottom: 30.45px;
  }

  input {
    display: block;
    padding: 0px 9px;
    height: 48px;
    width: 339px;
    text-align: left;
    font-weight: 200;
    font-size: 14px;
    line-height: 30px;
    font-family: "Product Sans", sans-serif;
    letter-spacing: 0px;
    color: #9b9b9b;
    text-transform: capitalize;
    background: #f0f0f0 0% 0% no-repeat padding-box;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    &:focus-visible {
      font-weight: normal;
      outline: none;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #d8ae25;
    }
  }

  p {
    text-align: right;
    text-decoration: underline;
    font-size: 14px;
    line-height: 19px;
    font-family: "Product Sans", sans-serif;
    font-weight: normal;
    letter-spacing: 0px;
    color: #b98c13;
    margin-bottom: 53px;
  }

  button {
    text-align: center;
    height: 54px;
    width: 339px;
    background: #d4af37 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    line-height: 30px;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0px;
    color: #ffffff;
  }
`;

const Login = () => {
  const [formdata, setFormdata] = useState({
    username: "",
    password: ""
  })

  const onHandlechange = (e) => {
    const value = e.target.value

    setFormdata(
      ...formdata
      [e.target.name] = value
    )
  }

  const onHandlesubmit = () => {
    console.log(formdata, "Prateek");
    alert(formdata)
  }
  return (
    <TotalWrap>
      <CenterDiv>
        <h1>Login</h1>
        <h2>Please sign in to continue</h2>
        <input
          style={{ marginBottom: "24px" }}
          type="text"
          placeholder="Email/Phone No."
          name="username"
          value={formdata.username}
          onChange={onHandlechange}
        />
        <input
          style={{ marginBottom: "14px" }}
          type="text"
          placeholder="Password"
          name="password"
          value={formdata.password}
          onChange={onHandlechange}
        />
        <p>Forget Password?</p>
        <button onClick={onHandlesubmit}>Login</button>
      </CenterDiv>
    </TotalWrap>
  );
};

export default Login;
