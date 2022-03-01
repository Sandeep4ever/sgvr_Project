import styled from "styled-components";
import Searchbar from "../../Utils/OnlySearchbar";
import img from "../../Assets/Images/Images";
import React, { useContext, useState, useEffect } from "react";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";
import SvgIcon from "@material-ui/core/SvgIcon";
import Pageination from "../../Utils/Pagination";
import Details from "./Details";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCallback } from "react";
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
const Midpan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const SearchWrap = styled.div`
  max-width: 100%;
  margin-left: 16px;
  margin-right: 46px;
  margin-top: 26px;
  margin-bottom: 21px;
  display: flex;
  flex-direction: row;
`;

const CreatePart = styled.div`
  margin-left: auto;
  display: inline-block;
  width: 112px;
  height: 38px;
  background: #d8ae251a 0% 0% no-repeat padding-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
const CardWrap = styled.div`
  overflow: auto;
  margin-left: 8px;
  display: flex;
  flex-wrap: wrap;
  background: #fcfcfc 0% 0% no-repeat padding-box;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d8ae25;
    border-radius: 5px;
  }
`;

const CommunityDashboard = () => {
  const { getCommunityData, setGetCommunityData, setCommunityType } =
    useContext(Cardlistcontext);
  const [details, setdetails] = useState(false);
  const [search] = useState("");

  let navigate = useNavigate();
  const [currentId, setCurrentId] = useState();

  const fetchDataforcommunity = useCallback(() => {
    axios
      .get("https://sgvr-server.herokuapp.com/api/community/community", {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NjAyOTM1OSwiZXhwIjoxNjQ2MTE1NzU5fQ.Dec4gN2efLUqBfu7Y3kfqHfVfkipVkTjjKuJOBPXGpw",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("communityId1", res.data.data);
          setGetCommunityData(res.data.data);
        } else {
          throw Error("Some Error occured while Fetching");
        }
      })
      .catch((err) => {
        if (err.message === "Network Error") {
          toast.error("check your internet connection");
        } else if (err.response.status === 404) {
          toast.error("Page Not Found");
        } else if (err.response.status === 202) {
          toast.error("communities not found");
        } else if (err.response.status === 400) {
          toast.error("Internal server Error");
        } else {
          toast.error(err.response.message);
        }
      });
  }, [setGetCommunityData]);

  useEffect(() => {
    fetchDataforcommunity();
  }, [fetchDataforcommunity]);

  const searchData = (e) => {
    let url;
    if (e.target.value.length > 3) {
      url = `https://sgvr-server.herokuapp.com/api/community/search-community?keyword=${e.target.value}`;
    } else if (e.target.value.length === 0) {
      fetchDataforcommunity();
      return;
    } else {
      console.log("less than 3");
      return;
    }
    axios
      .get(url, {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NjAyOTM1OSwiZXhwIjoxNjQ2MTE1NzU5fQ.Dec4gN2efLUqBfu7Y3kfqHfVfkipVkTjjKuJOBPXGpw",
        },
      })
      .then((resp) => {
        console.log("seacrhapi", resp.status);
        if (resp.data.data && resp.data.data.length === 0) {
          setGetCommunityData(resp.data.data);

          toast.error("No data match");
        } else if (resp.data.data && resp.data.data.length > 0) {
          setGetCommunityData(resp.data.data);
        } else {
          throw Error("Some Error occured while Fetching");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.message === "Network Error") {
          toast.error("check your internet connection");
        } else if (err.response.status === 404) {
          toast.error("Page Not Found");
        } else if (err.response.status === 202) {
          toast.error("communities not found");
        } else if (err.response.status === 400) {
          toast.error("Internal server Error");
        } else {
          toast.error(err.response.message);
        }
      });
  };

  const showCommiteeDetails = (_id) => {
    setdetails(!details);
    setCurrentId(_id);
  };
  const openCreateForm = () => {
    setCommunityType("Save");
    navigate("/community/createvender");
  };

  const handleUpdate = (id) => {
    setCommunityType("update");
    navigate(`/community/updatecommitteeform/${id}`);
  };

  // const [setstatus] = useState({
  //   isActive: "",
  // });
  const handleStatus = (id) => {
    // setstatus["id"] = id;
    // setstatus["isActive"] = status;
    // console.log("status", status);
    // const { isActive } = status;
    // isActive = status;
    // console.log("isactivestatus", isActive);
    axios
      .patch(
        "http://sgvr-server.herokuapp.com/api/community/community",
        {
          id: id,
          isActive: "false",
        },
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NjAyOTM1OSwiZXhwIjoxNjQ2MTE1NzU5fQ.Dec4gN2efLUqBfu7Y3kfqHfVfkipVkTjjKuJOBPXGpw",
          },
        }
      )
      .then((res) => {
        console.log("deactivate data", res);

        if (res.status === 200) {
          // setforactive(res.data);
          // fetchDataforcommunity();
          console.log("deactivate 200", res.data);
        }
      });

    setGetCommunityData(
      getCommunityData.map((el) => {
        if (el._id === id) {
          console.log("fordeactivate", el.isActive);
          el["isActive"] = !el.isActive;
          return el;
        }
        return el;
      })
    );
    console.log(getCommunityData);
  };

  return (
    <>
      <StyledToastContainer draggable={false} transition={Zoom} />
      {details && (
        <Details
          details={details}
          setdetails={setdetails}
          getCommunityData={getCommunityData}
          _id={currentId}
        />
      )}
      <Midpan>
        <SearchWrap>
          <Searchbar search={search} searchData={searchData} />
          <CreatePart onClick={openCreateForm}>
            <p>Create</p>
            <img src={img.plus} alt="plusimg" />
          </CreatePart>
        </SearchWrap>
        <CardWrap>
          {getCommunityData &&
            getCommunityData.map((items, _id) => (
              <CardContainer key={items._id}>
                <ViewIconDiv onClick={() => showCommiteeDetails(items._id)}>
                  <SvgIcon>
                    <path
                      id="Path_8127"
                      data-name="Path 8127"
                      d="M7.366,4C2.491,4-.012,8.915-.012,8.915A8.076,8.076,0,0,0,7.366,13.83c4.971,0,7.377-4.9,7.377-4.9S12.317,4,7.366,4Zm.011,7.987A3,3,0,0,1,4.306,8.915,3,3,0,0,1,7.377,5.843a3,3,0,0,1,3.071,3.072A3,3,0,0,1,7.377,11.987Zm0-4.915A1.843,1.843,0,1,0,9.219,8.915,1.864,1.864,0,0,0,7.377,7.072Z"
                      transform="translate(0.012 -4)"
                    />
                  </SvgIcon>
                </ViewIconDiv>
                <Head>{items.name}</Head>
                <Location>
                  <div>
                    <img src={img.location} alt="phone" />
                    <span>{items.city} </span>
                  </div>
                  <p>{items.address} </p>
                </Location>
                <Contact>
                  <PhoneNo>
                    <img src={img.phone} alt="phone" />
                    <p>{items.phone}</p>
                  </PhoneNo>
                  <Mail>
                    <img src={img.mail} alt="mail" />
                    <p>{items.email}</p>
                  </Mail>
                </Contact>
                <Text>
                  <div
                    onClick={() =>
                      navigate(`/community/members/comittemembers/${items._id}`)
                    }
                    style={{ cursor: "pointer" }}
                  >
                    {" "}
                    <p>
                      {/* {state.countMember} */}
                      {items.members?.length}
                      Members
                    </p>
                  </div>
                </Text>
                <ButtonDiv>
                  <Approve onClick={() => handleUpdate(items._id)}>
                    Edit
                  </Approve>
                  {/* ref={buttonEle} */}

                  <Reject onClick={() => handleStatus(items._id)}>
                    {items.isActive ? "Deactivate" : "Activate"}
                  </Reject>
                </ButtonDiv>
              </CardContainer>
            ))}
        </CardWrap>
        <Pgdiv>
          <Pageination />
        </Pgdiv>
      </Midpan>
    </>
  );
};

export default CommunityDashboard;

const CardContainer = styled.div`
  height: 197px;
  margin: 0px 5px;
  margin-bottom: 17px;
  padding: 13px 9px 14px 13px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #0000000f;
`;

const Head = styled.header`
  margin-top: 5px;
  font: normal normal 500 16px/21px Roboto;
  color: #1a1616;
`;
const ViewIconDiv = styled.div`
  width: 15px;
  height: 10px;
  float: right;
  cursor: pointer;
  .MuiSvgIcon-root {
    color: #c5c5c5;
    transition: 0.2s ease-in;
    &:hover {
      color: #d8ae25;
    }
  }
`;
const Location = styled.div`
  display: flex;
  padding-top: 5px;
  div {
    display: flex;
    span {
      margin-left: 3px;
      font: normal normal 500 10px/13px Roboto;
      font-family: "Roboto", sans-serif;
      font-size: 10px;
      color: #a0a0a0;
    }
  }
  p {
    font: normal normal 500 11px/15px Roboto;
    font-family: "Roboto", sans-serif;
    font-size: 11px;
    color: #a0a0a0;
    padding-left: 9px;
  }
`;

const Contact = styled.div`
  display: flex;
  margin-top: 17px;
`;

const PhoneNo = styled.div`
  display: flex;
  align-items: center;
  p {
    padding-left: 5px;
    font-family: "Roboto", sans-serif;
    font-size: 11px;
    color: #8c8b9e;
  }
`;

const Mail = styled.div`
  display: flex;
  align-items: center;

  padding-left: 20px;
  p {
    padding-left: 5px;
    font-family: "Roboto", sans-serif;
    font-size: 11px;
    color: #8c8b9e;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;

  div {
    width: 87px;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #dfb93e0d 0% 0% no-repeat padding-box;
    border-radius: 4px;
    cursor: pointer;
    p {
      font: normal normal medium 11px/15px Roboto;
      font-family: "Roboto", sans-serif;
      color: #dfb93e;
      font-size: 11px;
    }
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  margin-top: 15px;
`;

const Approve = styled.button`
  /* padding: 9px 52px; */
  width: 164px;
  height: 37px;
  background: #d8ae25 0% 0% no-repeat padding-box;
  border-radius: 4px;
  font: normal normal medium 14px/21px Poppins;
  color: #ffffff;
  border: none;
  cursor: pointer;
  &:hover {
    background: #cda830 0% 0% no-repeat padding-box;
  }
`;

const Reject = styled.button`
  background: #e1e1e119 0% 0% no-repeat padding-box;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  /* padding: 9px 60px; */
  width: 164px;
  height: 37px;
  margin-left: 6px;
  font: normal normal medium 14px/21px Poppins;
  color: #c5c5c5;
  transition: 0.3s ease-in;
  cursor: pointer;

  &:hover {
    background: #d8ae25 0% 0% no-repeat padding-box;
    color: #ffffff;
  }
`;

const Pgdiv = styled.div`
  width: 100%;
  margin-bottom: 0px;
  margin-top: auto;
`;
