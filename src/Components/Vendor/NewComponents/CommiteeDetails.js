import React from "react";
import styled from "styled-components";
import img from "../../../Assets/Images/Images";

const Sournding = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: +10;
  top: 0;
  right: 0;
  background: #2c2c2c20 0% 0% no-repeat padding-box;
`;
const MainContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  width: 349px;
  height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 8px #00000029;
`;
const CloseDiv = styled.div`
  padding: 11px 13px 0px 0px;
  float: right;
  img {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;
const ImageDiv = styled.div`
  img {
    width: 298px;
    height: 140px;
  }
`;
const VendorDetailsDiv = styled.div`
  padding: 30px 26px 0px 25px;
  height: 100%;
  button {
    width: 302px;
    height: 43px;
    background: #f0f0f0 0% 0% no-repeat padding-box;
    border: 1px solid #00000045;
    border-radius: 4px;
    margin-top: 94px;
  }
`;
const Header = styled.h6`
  font: normal normal 500 20px/20px Roboto;
  color: #d4af37;
  margin-bottom: 33px;
`;
const PlanNameDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 21px;
  margin-bottom: 20px;

  p {
    width: 126px;
    font: normal normal 500 13px/20px Poppins;
    color: #232323;
  }
  span {
    font: normal normal normal 13px/20px roboto;
    color: #4d4d4d;
    margin-left: 40px;
  }
`;
const PrizeDiv = styled(PlanNameDiv)``;
const ValidityDiv = styled(PlanNameDiv)``;
const AddDiscountDiv = styled(PlanNameDiv)``;
const Discription = styled.div`
  width: 270px;
  P {
    font: normal normal 500 13px/20px Poppins;
    color: #232323;
    margin-top: 20px;
    margin-bottom: 8px;
  }
  span {
    font: normal normal normal 13px/20px Poppins;
    color: #4d4d4d;
  }
`;
const AboutEventDiv = styled(Discription)`
  p {
    margin-bottom: 8px;
  }
  span {
  }
`;

const CommiteeDetails = (props) => {
  const closeDetails = () => {
    props.setShowcommiteDetails(!props.showcommiteDetails);
  };

  return (
    <Sournding>
      <MainContainer>
        <CloseDiv>
          <img onClick={closeDetails} src={img.close} alt="img" />
        </CloseDiv>

        <VendorDetailsDiv>
          <Header>Event Details</Header>
          <ImageDiv>
            <img src={img.ganesh} alt="ganesh_img" />
          </ImageDiv>

          <PlanNameDiv>
            <p>Event Name</p>
            <span>ganesh chaturthi</span>
          </PlanNameDiv>
          <PrizeDiv>
            <p>Organizer Name</p>
            <span>mahesh shinde</span>
          </PrizeDiv>
          <ValidityDiv>
            <p>Event Date</p>
            <span>24/02/2022</span>
          </ValidityDiv>
          <AddDiscountDiv>
            <p>Timing</p>
            <span>8am</span>
          </AddDiscountDiv>
          <AboutEventDiv>
            <p>About Event</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
              ipsam error? Commodi facere aliquid incidunt. Blanditiis, et.
            </span>
          </AboutEventDiv>
          <Discription>
            <p>Address 1</p>
            <span>akdsfjiefka</span>
          </Discription>
          <button>Deactivate</button>
        </VendorDetailsDiv>
      </MainContainer>
    </Sournding>
  );
};
export default CommiteeDetails;
