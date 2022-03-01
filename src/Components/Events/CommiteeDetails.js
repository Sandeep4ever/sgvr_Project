import React, { useContext } from "react";
import styled from "styled-components";
import img from "../../Assets/Images/Images";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";

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
    min-width: 100%;
    min-height: 140px;
    max-height: 140px;
  }
`;
const VendorDetailsDiv = styled.div`
  padding: 30px 26px 0px 25px;
  height: 100%;
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
// const ForScrollbar =styled.div`
// overflow: auto;
// height: 500px;
// ::-webkit-scrollbar{
//   width: 3px;
// height: 3px;

// }
// ::-webkit-scrollbar-thumb {
// background: #4D4D4D;
// border-radius: 10px;
// }
// `
const CommiteeDetails = ({ details }) => {
  const state = useContext(Cardlistcontext);
  const closeCommiteeDetails = () => {
    state.setOpenCommiteeDetails(!state.openCommiteeDetails);
  };
  console.log(details);
  let dateMonth = (dob) => {
    var d = new Date(dob);
    return (
      d.getUTCDate() +
      "/" +
      (d.getUTCMonth() + 1 >= 10
        ? d.getUTCMonth() + 1
        : "0" + (d.getUTCMonth() + 1)) +
      "/" +
      d.getUTCFullYear()
    );
  };

  return (
    <MainContainer>
      <CloseDiv>
        <img onClick={closeCommiteeDetails} src={img.close} alt="img" />
      </CloseDiv>

      <VendorDetailsDiv>
        <Header>Committee Details</Header>
        <ImageDiv>
          <img
            src={`https://sgvr-server.herokuapp.com/api/get-images?key=${details.images[0]}`}
            alt="ganesh_img"
          />
        </ImageDiv>

        <PlanNameDiv>
          <p>Event Name</p>
          <span>{details.eventName}</span>
        </PlanNameDiv>
        <PrizeDiv>
          <p>Organizer Name</p>
          <span>{details.organizer}</span>
        </PrizeDiv>
        <ValidityDiv>
          <p>Event Date</p>
          <span>{dateMonth(details.enddate)}</span>
        </ValidityDiv>
        <AddDiscountDiv>
          <p>Timing</p>
          <span>{details.starttime}</span>
        </AddDiscountDiv>
        <AboutEventDiv>
          <p>About Event</p>
          <span>{details.description}</span>
        </AboutEventDiv>
        <Discription>
          <p>Address 1</p>
          <span>{details.location}</span>
        </Discription>
      </VendorDetailsDiv>
    </MainContainer>
  );
};
export default CommiteeDetails;
