import React, { useState } from "react";
import styled from "styled-components";
import OnlySearchbar from "../../../Utils/OnlySearchbar";
import img from "../../../Assets/Images/Images";
// import Cardlistcontext from "../../ContextApi/Cardlistcontext";
import SvgIcon from "@material-ui/core/SvgIcon";
import Pagination from "../../../Utils/Pagination";
// import CommiteeDetails from "./CommiteeDetails";
import { useNavigate } from "react-router-dom";
import CommiteeDetails from "./CommiteeDetails";

const MainContainer = styled.div`
  overflow-y: auto;
  margin-bottom: auto;
  width: 100%;
  padding: 23px 36px 23px 26px;
  padding-bottom: 40px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d8ae25;
    border-radius: 5px;
  }
`;
const Header = styled.p`
  font: normal normal 500 16px/25px Poppins;
  color: #000000;
`;
const SearchContainer = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;
const CreatePart = styled.div`
  width: 112px;
  height: 38px;
  background: #d8ae251a 0% 0% no-repeat padding-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    color: #d8ae25;
    cursor: pointer;
  }
  img {
    width: 16px;
    height: 16px;
    margin-left: 16px;
    cursor: pointer;
  }
`;
const ForRowCard = styled.div`
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
`;
const PostCard = styled.div`
  width: 350px;
  height: 248px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #0000000f;
  padding: 11px 9px;
`;
const Image = styled.div`
  img {
    min-width: 332px;
    min-height: 123px;
    max-width: 332px;
    max-height: 123px;
    border-radius: 4px;
  }
`;
const TextContainer = styled.div`
  p {
    font: normal normal medium 11px/15px Roboto;
    color: #a0a0a0;
  }
`;

const Users = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  h2 {
    font: normal normal 500 16px/21px Roboto;
    color: #1a1616;
  }
`;

const SvgIconsDiv = styled.div`
  width: 28px;
  height: 28px;
  padding-top: 7px;
  color: #b3b3b3;
  cursor: pointer;
  &:hover {
    color: #d8ae25;
  }
`;

const Location = styled.div`
  display: flex;
  p {
    margin-left: 2px;
    font: normal normal 500 10px/13px Roboto;
    color: #a0a0a0;
    span {
      font: normal normal 500 11px/15px Roboto;
      color: #a0a0a0;
      margin-left: 8px;
    }
  }
`;

const ButtonSec = styled.div`
  display: flex;
  margin-top: 13px;
`;

const Firstsec = styled.button`
  width: 160px;
  height: 37px;
  background: #f8eecd 0% 0% no-repeat padding-box;
  border: 1px solid #e0d7b9;
  border-radius: 4px;
  font: normal normal 500 14px/21px Poppins;
  color: #bf9d2c;
  cursor: pointer;
`;

const Secbutton = styled.button`
  width: 160px;
  height: 37px;
  margin-left: 12px;
  background: #c5c5c524 0% 0% no-repeat padding-box;
  border: 1px solid #c5c5c5;
  font: normal normal medium 14px/21px Poppins;
  color: #c5c5c5;
  border-radius: 4px;
  cursor: pointer;
`;

const PaginationDiv = styled.div`
  width: 100%;
`;

const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const TempleEvents = () => {
  const navigate = useNavigate();
  const [showcommiteDetails, setShowcommiteDetails] = useState(false);
  const [TempleEvents] = useState([
    {
      name: "Ganesh Chathurthi",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      image: `${img.ganesh}`,
    },
    {
      name: "Dhurga Puja",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      image: `${img.jaydurga}`,
    },
    {
      name: "Dhurga Puja",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      image: `${img.football}`,
    },
    {
      name: "Ganesh Chathurthi",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      image: `${img.ganesh}`,
    },
    {
      name: "Dhurga Puja",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      image: `${img.jaydurga}`,
    },
    {
      name: "Dhurga Puja",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      image: `${img.football}`,
    },
  ]);
  return (
    <ContainerWrap>
      {showcommiteDetails && (
        <CommiteeDetails
          showcommiteDetails={showcommiteDetails}
          setShowcommiteDetails={setShowcommiteDetails}
        />
      )}

      <MainContainer>
        <Header>Onboarding Events list</Header>
        <SearchContainer>
          <OnlySearchbar />
          <CreatePart
            onClick={() => {
              navigate("/templeEvents/createtempleeventform");
            }}
          >
            <p>Create</p>
            <img src={img.plus} alt="plusimg" />
          </CreatePart>
        </SearchContainer>
        <ForRowCard>
          {TempleEvents.map((items, index) => (
            <PostCard key={index}>
              <Image>
                <img src={items.image} alt="eventphoto" />
              </Image>
              <TextContainer>
                <Users>
                  <h2>{items.name}</h2>
                  <SvgIconsDiv
                    onClick={() => setShowcommiteDetails(!showcommiteDetails)}
                  >
                    <SvgIcon>
                      <g id="Group_5000" data-name="Group 5000">
                        <path
                          id="Path_8127"
                          data-name="Path 8127"
                          d="M7.366,4C2.491,4-.012,8.915-.012,8.915A8.076,8.076,0,0,0,7.366,13.83c4.971,0,7.377-4.9,7.377-4.9S12.317,4,7.366,4Zm.011,7.987A3,3,0,0,1,4.306,8.915,3,3,0,0,1,7.377,5.843a3,3,0,0,1,3.071,3.072A3,3,0,0,1,7.377,11.987Zm0-4.915A1.843,1.843,0,1,0,9.219,8.915,1.864,1.864,0,0,0,7.377,7.072Z"
                          transform="translate(0.012 -4)"
                        />
                      </g>
                    </SvgIcon>
                  </SvgIconsDiv>
                </Users>
                <Location>
                  <img src={img.location} alt="locationimg" />
                  <p>
                    {items.city}
                    <span>{items.location}</span>
                  </p>
                </Location>
                <ButtonSec>
                  <Firstsec
                  // onClick={() =>
                  //   navigate(`/onboardingeventslist/editform/${items._id}`)
                  // }
                  >
                    Edit
                  </Firstsec>
                  <Secbutton>Delete</Secbutton>
                </ButtonSec>
              </TextContainer>
            </PostCard>
          ))}
        </ForRowCard>
      </MainContainer>
      <PaginationDiv>
        <Pagination />
      </PaginationDiv>
    </ContainerWrap>
  );
};

export default TempleEvents;
