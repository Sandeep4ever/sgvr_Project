import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import OnlySearchbar from "../../Utils/OnlySearchbar";
import img from "../../Assets/Images/Images";
import Pagination from "../../Utils/Pagination";
import axios from "axios";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AreaChart from "./Areachart";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";

const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  .toast {
    background-color: #ff3131;
    color: white;
  }
  .Toastify__progress-bar--error {
    background-color: white;
  }
  .Toastify__toast-icon {
    background-color: white;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: 100%;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d8ae25;
    border-radius: 5px;
  }
`;

const StatusAndActivitySectin = styled.div`
  padding-top: 30px;
  padding-bottom: 10px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d8ae25;
    border-radius: 5px;
  }
`;
const MainStatusDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 23px;
`;

const Head = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  font: normal normal 500 18px/20px Rubik;
  color: #202124;
`;
const StatusDiv = styled.div`
  padding: 17px 9px 17px 12px;
  width: 163px;
  height: 85px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 3px #0000001a;
  border-radius: 4px;
  p {
    font: normal normal normal 14px/17px Rubik;
    color: #7786aa;
  }
`;
const Number = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  p {
    font: normal normal 500 24px/35px Poppins;
    color: #000000;
  }
  div {
    img {
    }
    span {
      width: 16px;
      height: 9px;
      color: #3dd598;
    }
  }
`;

const ActivityDiv = styled.div`
  padding: 33px 25px;
  width: 100%;
  height: 403px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #0000000d;
  border-radius: 4px;
  margin-top: 31px;
`;
const ProfileSection = styled.div`
  padding: 19px 12px 0px 16px;
  width: 325px;
  height: 100%;
  overflow: auto;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 3px #0000001a;
  border-radius: 4px;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-x: hidden;
`;

const Header = styled.header`
  h1 {
    font: normal normal 500 18px/20px Rubik;
    color: #202124;
  }
`;
const SearchDiv = styled.div`
  margin-top: 14px;
  display: flex;
`;

const CountDiv = styled.div`
  padding: 10px;
  margin-left: 8px;
  background: #dfb93e1a 0% 0% no-repeat padding-box;
  border-radius: 4px;
  cursor: pointer;
  span {
    font: normal normal normal 13px/20px Poppins;
    color: #dfb93e;
  }
`;
const ChatPeoplesSection = styled.div`
  overflow-x: hidden;
  margin-top: 10px;
  height: 85%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d8ae25;
    border-radius: 5px;
  }
`;

const PeoplesDiv = styled.div`
  width: 280px;
  height: 55px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding-left: 12px;
  cursor: pointer;

  &:hover {
    background: #dfb93e1a 0% 0% no-repeat padding-box;
  }
`;
const Imagediv = styled.div`
  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
`;
const ContentDiv = styled.div`
  padding-left: 13px;
  h6 {
    font: normal normal normal 14px/20px Rubik;
    color: #202124;
  }
  p {
    font: normal normal normal 9px/13px Poppins;
    color: #7e84a3;
  }
`;

const WrapContainer = styled.div`
  background-color: #fcfcfc;
  padding: 10px 50px;
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: 100%;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d8ae25;
    border-radius: 5px;
  }
`;

const Paginationdiv = styled.div`
  width: 100%;
`;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h3 {
    display: inline-block;
    text-align: left;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    font-family: "Rubik", sans-serif;
    letter-spacing: 0px;
    color: #202124;
    text-transform: capitalize;
    opacity: 1;
  }

  div {
    width: 79px;
    height: 28px;
    text-align: center;
    font-size: 11px;
    line-height: 28px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0px;
    color: #565656;
    background: #c5c5c52e 0% 0% no-repeat padding-box;
    opacity: 1;
  }
`;

const Graphic = styled.div`
  width: 100%;
  height: 100%;
`;

const Status = () => {
  const { setloader } = useContext(Cardlistcontext);
  const [users, setusers] = useState([]);
  const [profiles, setprofiles] = useState([]);

  useEffect(() => {
    const dashboard = async () => {
      const res = await axios.all([
        axios.get("https://sgvr-server.herokuapp.com/api/admin/dashstats", {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NTg1NjAyNywiZXhwIjoxNjQ1OTQyNDI3fQ.mw9mlEK5fFjONAMYpWj4FevASCESAkwxhf3SdgU_TKA",
          },
        }),
        axios.get(
          "https://sgvr-server.herokuapp.com/api/admin/userlist?page=page&size=size",
          {
            headers: {
              "x-access-token":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NTg1NjAyNywiZXhwIjoxNjQ1OTQyNDI3fQ.mw9mlEK5fFjONAMYpWj4FevASCESAkwxhf3SdgU_TKA",
            },
          }
        ),
      ]);
      return res;
    };
    dashboard()
      .then((res) => {
        console.log(res[0], res[1]);

        if (res[0].status === 200) {
          setusers(res[0].data.data);
          setprofiles(res[1].data.userlist);
          setloader(false);
        } else {
          throw Error("Some Error occured while Fetching");
        }
      })
      .catch((err) => {
        if (err.message === "Network Error") {
          toast.error("check your internet connection");
        } else if (err.response.status === 404) {
          toast.error("Page Not Found");
        } else if (err.response.status === 400) {
          toast.error("Internal server Error");
        } else {
          toast.error(err.response.message);
        }
      });
  }, [setloader]);

  //    useEffect(() => {
  //   const dashboard = async () => {
  //     const res = await axios.get("https://sgvr-server.herokuapp.com/api/matrimony/one-profile?id=61e79faa438d59c5689d4a2b", {},{
  //       headers:  {
  //         "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFlMTU0NjAwNmE1OTRjMjRiOTM4NWY1IiwidXNlclR5cGUiOiJVIiwiaWF0IjoxNjQyNjc5NTU0LCJleHAiOjE2NDUyNzE1NTR9.GpwVNKYB_ga9FmaCkgmZ4MQzy0iZZbDffN7-jFR9K20"}`
  //       }
  //      });
  //     return res;
  //   };
  //   dashboard().then(res=>{
  //     console.log(res);
  //     if(res.status[0]===200){

  //     }
  //   else{
  //     throw Error("Some Error occured while Fetching");
  //   }
  // }
  //   ).catch(err=>{if(err.message==="Network Error"){
  //     toast.error("check your internet connection");
  //   }
  //   else if(err.response.status===404){
  //     toast.error("Page Not Found");
  //   }
  //   else if(err.response.status===400){
  //     toast.error("Internal server Error");
  //   }
  //   else{
  //     toast.error(err.response.message);
  //   }
  // });
  // },[]);

  return (
    <MainSection>
      <StyledToastContainer draggable={false} transition={Zoom} />
      <WrapContainer>
        <StatusAndActivitySectin>
          <Head>Status</Head>
          <MainStatusDiv>
            <StatusDiv>
              <p>No.of Users</p>
              <Number>
                <p>{users.userInfo}</p>
                <div>
                  <img src={img.uparrow} alt="img" />
                  <span>2.3%</span>
                </div>
              </Number>
            </StatusDiv>
            <StatusDiv>
              <p>User Subscribed</p>
              <Number>
                <p>{users.activeSubscription}</p>
                <div>
                  <img src={img.uparrow} alt="img" />
                  <span>2.3%</span>
                </div>
              </Number>
            </StatusDiv>
            <StatusDiv>
              <p>Users Unsubscribed</p>
              <Number>
                <p>{users.userInfo - users.activeSubscription}</p>
                <div>
                  <img src={img.uparrow} alt="img" />
                  <span>2.3%</span>
                </div>
              </Number>
            </StatusDiv>
            <StatusDiv>
              <p>No.of Users</p>
              <Number>
                <p>{users.userInfo}</p>
                <div>
                  <img src={img.uparrow} alt="img" />
                  <span>2.3%</span>
                </div>
              </Number>
            </StatusDiv>
          </MainStatusDiv>
          <ActivityDiv>
            <HeadingContainer>
              <h3>Activity</h3>
              <div>Hours</div>
            </HeadingContainer>
            <Graphic>
              <AreaChart />
            </Graphic>
          </ActivityDiv>
        </StatusAndActivitySectin>
        <ProfileSection>
          <Header>
            <h1>Profile User</h1>
          </Header>
          <SearchDiv>
            <OnlySearchbar />
            <CountDiv>
              <span>500</span>
            </CountDiv>
          </SearchDiv>
          <ChatPeoplesSection>
            {profiles.map((items, index) => (
              <PeoplesDiv key={index}>
                <Imagediv>
                  <img src={img.people} alt="backicon" />
                </Imagediv>
                <ContentDiv>
                  <h6>
                    {items.fname} {items.lname}
                  </h6>
                  <p>{items.email} </p>
                </ContentDiv>
              </PeoplesDiv>
            ))}
          </ChatPeoplesSection>
        </ProfileSection>
      </WrapContainer>
      <Paginationdiv>
        <Pagination />
      </Paginationdiv>
    </MainSection>
  );
};

export default Status;
