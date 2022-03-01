import React, { useContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import img from "../../Assets/Images/Images";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";
// import axios from "axios";

const Surrounding = styled.section`
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
const VendorDetailsDiv = styled.div`
  padding: 35px 14px 0px 28px;
  height: 100%;
`;
const Header = styled.h6`
  font: normal normal 500 20px/20px Roboto;
  color: #d4af37;
  margin-bottom: 24px;
`;
const PlanNameDiv = styled.div`
  display: flex;
  flex-direction: row;
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
const DiscountDiv = styled(PlanNameDiv)``;
const Discription = styled.div`
  width: 270px;
  P {
    font: normal normal 500 13px/20px Poppins;
    color: #232323;
    margin-bottom: 20px;
  }
  span {
    font: normal normal normal 13px/20px Poppins;
    color: #4d4d4d;
    margin-top: 20px;
    margin-top: 8px;
  }
`;
const DeleteButton = styled.div`
  margin-top: 26px;
  background: #d8ae25 0% 0% no-repeat padding-box;
  border-radius: 4px;
  font: normal normal 600 14px/20px Rubik;
  color: #ffffff;
  padding: 13px 128px;
  cursor: pointer;
`;
const AddDiscount = (props) => {
  const state = useContext(Cardlistcontext);
  const [renderValue, setRenderValue] = useState([{}]);

  useEffect(() => {
    props.subscriptionData.filter((elem) => {
      if (elem._id === props.id) {
        console.log(elem);
        setRenderValue(elem);
      }
      return elem;
    });
  }, [props.id, props.subscriptionData]);

  const closediscount = () => {
    state.setshowGroomDetails(!state.showGroomDetails);
  };
  const handleData = () => {
    //  ["id"] =id;
    //   const { status } = ;
    //   axios.patch("https://sgvr-server.herokuapp.com/api/admin/subscription");
    //
    //
    //       if (el._id === id) {
    //         console.log("fordeactivate", el.isActive);
    //         el["isActive"] = !el.isActive;
    //         return el;
    //       }
    //
    //
    //
    //
  };
  return (
    <Surrounding>
      <MainContainer>
        <CloseDiv>
          <img onClick={closediscount} src={img.close} alt="closeimg" />
        </CloseDiv>

        <VendorDetailsDiv>
          <Header>Subscription Plan Details</Header>
          <PlanNameDiv>
            <p>Plan Name</p>
            <span>{renderValue?.planName}</span>
          </PlanNameDiv>
          <PrizeDiv>
            <p>Prize</p>
            <span>₹ {renderValue?.price}</span>
          </PrizeDiv>
          <ValidityDiv>
            <p>Validity</p>
            <span>{renderValue?.validity}</span>
          </ValidityDiv>
          <AddDiscountDiv>
            <p>Add Discount</p>
            <span></span>
          </AddDiscountDiv>
          <DiscountDiv>
            <p>Prize After Discount</p>
            <p>
              <span>₹</span>
            </p>
          </DiscountDiv>
          <Discription>
            <p>Discription</p>
            <span>{renderValue?.description}</span>
          </Discription>

          <DeleteButton onClick={handleData}>Deactivate</DeleteButton>
        </VendorDetailsDiv>
      </MainContainer>
    </Surrounding>
  );
};

export default AddDiscount;
