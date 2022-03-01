import React from "react";
import styled from "styled-components";
import img from "../Assets/Images/Images";
import { NavLink } from "react-router-dom";

const MainNavContainer = styled.div`
  min-width: 16.25vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  background-color: #d8ae25;
  padding: 0px 18px;
`;

const Logo = styled.header`
  display: flex;
  align-items: center;
  margin-top: 29px;
  padding-left: 19px;
  img {
    border-radius: 50%;
  }
  span {
    font: normal normal 500 16px/24px Roboto;
    color: #ffffff;
    padding-left: 9px;
  }
`;

const Contant = styled.div`
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  div {
    min-width: 170px;
    height: 46px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    &:hover {
      background: #bf9d2c 0% 0% no-repeat padding-box;
    }
  }
  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    color: #ffffff;
    padding-left: 19px;
    border-radius: 8px;
    font: normal normal normal 16px/19px Rubik;
  }
`;

const SideNav = ({sideNavdata}) => {
  return (
    <>
      <MainNavContainer>
        <Logo>
          <img src={img.admin} alt="img" />
          <span>Admin Team</span>
        </Logo>
        <Contant>
          {sideNavdata.map((val,ind)=><div key={ind}>
            <NavLink
              to={val.to}
              style={({ isActive }) => ({
                color: isActive ? "white" : "#fff",
                background: isActive && "#BF9D2C",
                lineHeight: "46px",
              })}>
              {val.title}
            </NavLink>
          </div>)}
        </Contant>
      </MainNavContainer>
      {/* </ForColumn> */}
    </>
  );
};

export default SideNav;