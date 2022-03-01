import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import OnlySearchbar from "../../../Utils/OnlySearchbar";
import img from "../../../Assets/Images/Images";
import Cardlistcontext from "../../../ContextApi/Cardlistcontext";
import SvgIcon from "@material-ui/core/SvgIcon";
import Pagination from "../../../Utils/Pagination";
import CommiteeDetails from "./CommiteeDetails";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const MainContainer = styled.div`
  padding: 23px 10px 23px 30px;
  padding-bottom: 40px;
  width: 100%;

  margin-bottom: auto;
  overflow: auto;
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
  max-width: 100%;
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
  margin-right: 30px;
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
    width: 332px;
    height: 123px;
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

const EventsList = () => {
  const {
    openCommiteeDetails,
    setOpenCommiteeDetails,
    setloader,
    setEventType,
  } = useContext(Cardlistcontext);
  const [getEventData, setgetEventData] = useState([{}]);
  const [currentId, setcurrentId] = useState();
  const [search] = useState("");

  const navigate = useNavigate();
  const openCommitteedetails = (id) => {
    setcurrentId(id);
    setOpenCommiteeDetails(!openCommiteeDetails);
  };
  const fetchData = async () => {
    let response = await axios.get(
      "https://sgvr-server.herokuapp.com/api/events/event?id=61f77eb591ce9bd27044e8a7&eventOf=community",
      {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0MzMxMzE4MCwiZXhwIjoxNjQ1OTA1MTgwfQ.0V4351fmKI6KbNBrK7toFp_crLZQjTciUdjUubDELYg",
        },
      }
    );
    return response;
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        if (res.status === 200) {
          setgetEventData(res.data.events);
          setloader(false);
        } else {
          setloader(false);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.message === "Network Error") {
          toast.error("check your internet connection");
        } else if (err.response.status === 404) {
          toast.error("Page Not Found");
        } else if (err.response.status === 1) {
          toast.error("something went wrong");
        } else if (err.response.status === 400) {
          toast.error("Internal server Error");
        } else {
          toast.error(err.response.message);
        }
      });
  }, [setloader]);

  const openCreateForm = () => {
    setEventType("Publish");
    navigate("/events/onboardingList");
  };
  const searchData = (e) => {
    let url;
    if (e.target.value.length > 3) {
      url = `https://sgvr-server.herokuapp.com/api/events/events-search?keyword=${e.target.value}`;
    } else if (e.target.value.length === 0) {
      return;
    } else {
      console.log("less than 3");
      return;
    }
    axios
      .get(url, {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0MzMxMzE4MCwiZXhwIjoxNjQ1OTA1MTgwfQ.0V4351fmKI6KbNBrK7toFp_crLZQjTciUdjUubDELYg",
        },
      })
      .then((resp) => {
        if (resp.data.data && resp.data.data.length === 0) {
          getEventData(resp.data.data);

          toast.error("No data match");
        } else if (resp.data.data && resp.data.data.length > 0) {
          console.log("search");
          getEventData(resp.data.data);
        } else {
          throw Error("Some Error occured while Fetching");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.message === "Network Error") {
          toast.error("check your internet connection");
        } else if (err.response?.status === 1) {
          toast.error("Data not found");
        } else if (err.response?.status === 400) {
          toast.error("Internal server Error");
        } else {
          toast.error(err.response?.message);
        }
      });
  };
  const deleteData = (id) => {
    console.log("deleteid", id);
    axios
      .delete(
        "https://sgvr-server.herokuapp.com/api/events/events",
        { id: id },

        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIwY2ZkY2I4OTIyODY2ZjI1ZjE1OThmIiwidXNlclR5cGUiOiJDQSIsImlhdCI6MTY0NTUxNDgzMCwiZXhwIjoxNjQ1NjAxMjMwfQ.VyXtOUifcifi3YOiUUV9rLEtZiyjDlH2BqbgMAsAmHM",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setloader(false);
          console.log("delete", res.data);
          toast.success("Event Deleted Successfully");
          fetchData();
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.message === "Network Error") {
          toast.error("check your internet connection");
        } else if (err.response?.status === 404) {
          toast.error("Page not found");
        } else if (err.response?.status === 400) {
          toast.error("Internal server Error");
        } else {
          toast.error(err.response?.message);
        }
      });
  };
  const updateData = (id) => {
    setEventType("Update");
    navigate(`/events/updateList/${id}`);
  };

  return (
    <>
      <StyledToastContainer draggable={false} transition={Zoom} />

      {openCommiteeDetails && (
        <CommiteeDetails getEventData={getEventData} id={currentId} />
      )}

      <WrapContainer>
        <MainContainer>
          <Header>Onboarding Events list</Header>
          <SearchContainer>
            <OnlySearchbar search={search} searchData={searchData} />
            <CreatePart onClick={openCreateForm}>
              <p>Create</p>
              <img src={img.plus} alt="plusimg" />
            </CreatePart>
          </SearchContainer>
          <ForRowCard>
            {getEventData &&
              getEventData.map((items, index) => (
                <PostCard key={index}>
                  <Image>
                    <img
                      src={`https://sgvr-server.herokuapp.com/api/get-images?key=${items?.images}`}
                      alt="ganesimg"
                    />
                  </Image>
                  <TextContainer>
                    <Users>
                      <h2>{items.eventName}</h2>
                      <SvgIconsDiv
                        onClick={() => openCommitteedetails(items._id)}
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
                        {items.location}
                        {/* <span>HSR Layout sector 7</span> */}
                      </p>
                    </Location>
                    <ButtonSec>
                      <Firstsec onClick={() => updateData(items._id)}>
                        Edit
                      </Firstsec>
                      <Secbutton onClick={() => deleteData(items._id)}>
                        Delete
                      </Secbutton>
                    </ButtonSec>
                  </TextContainer>
                </PostCard>
              ))}
          </ForRowCard>
        </MainContainer>
        <PaginationDiv>
          <Pagination />
        </PaginationDiv>
      </WrapContainer>
    </>
  );
};

export default EventsList;
