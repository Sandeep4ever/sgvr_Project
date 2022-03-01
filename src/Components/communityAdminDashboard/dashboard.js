import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";
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

const MainSection = styled.section`
  overflow: hidden;
  padding: 43px 36px 0 32px;
`;
const Header = styled.header`
  h1 {
    font: normal normal 500 18px/20px Rubik;
    color: #202124;
  }
`;
const Carddiv = styled.div`
  margin-top: 34px;
  display: flex;
  width: 251px;
  height: 85px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 3px #0000001a;
  hr {
    width: 6px;
    height: 84px;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background: #dfb93e 0% 0% no-repeat padding-box;
    border: none;
  }
  article {
    width: 251px;
    padding: 13px 14px 13px 18px;
    p {
      font: normal normal normal 15px/23px Poppins;
      color: #7786aa;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      span {
        margin-top: 5px;
        font: normal normal 500 24px/35px Poppins;
        color: #000000;
      }
      figure {
        display: flex;
        flex-wrap: wrap-reverse;
        .p1 {
          margin-left: 1.5px;
          width: 5px;
          height: 7px;
          background: #00b543 0% 0% no-repeat padding-box;
        }
        .p2 {
          margin-left: 1.5px;
          width: 5px;
          height: 17px;
          background: #00b543 0% 0% no-repeat padding-box;
        }
        .p3 {
          margin-left: 1.5px;

          width: 5px;
          height: 12px;
          background: #00b543 0% 0% no-repeat padding-box;
        }
      }
    }
  }
`;
const WrapCard = styled.div`
  display: flex;
  gap: 17px;
`;
const CommiteProfile = styled.div`
  margin-top: 40px;
`;
const CommiteHeader = styled.header`
  h1 {
    font: normal normal 500 18px/20px Rubik;
    color: #202124;
  }
`;

const Contentdiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 1076px;
  height: 282px;
  margin-top: 19px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 3px #0000001a;
  padding: 19px;
  figure {
    width: 230px;
    height: 230px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 4px;
    padding: 4px;
    img {
      width: 222px;
      height: 222px;
    }
  }
  .article1 {
    margin-left: 51px;
    margin-top: 25px;
    P {
      margin-bottom: 23px;
      font: normal normal 500 13px/20px Poppins;
      color: #232323;
    }
  }
  .article2 {
    margin-left: 110px;
    margin-top: 25px;

    p {
      margin-bottom: 23px;
      font: normal normal normal 13px/20px Poppins;
      color: #4d4d4d;
    }
  }
  .article3 {
    margin-top: 25px;
    margin-left: 74px;
    h3 {
      font: normal normal 500 13px/20px Poppins;
      color: #232323;
    }
    p {
      width: 270px;
      margin-bottom: 9px;
      font: normal normal normal 13px/20px Poppins;
      color: #4d4d4d;
    }
  }
`;
const Button = styled.div`
  position: relative;
  top: 20px;
  left: 28px;
  height: 282px;
  margin-top: -23px;
  button {
    width: 76px;
    height: 38px;
    background: #d8ae251a 0% 0% no-repeat padding-box;
    border-radius: 8px;
    font: normal normal medium 14px/21px Poppins;
    color: #d8ae25;
    border: none;
    cursor: pointer;
  }
`;

const Dashboard = () => {
  const {
    setdashboradCurrentId,
    commtteProfile,
    setCommtteProfile,
    setloader,
  } = useContext(Cardlistcontext);
  const [countuser, setCountuser] = useState({});
  const [acceptedCount, setAcceptedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setAcceptedCount(0);
    setPendingCount(0);
    axios
      .get(
        "https://sgvr-server.herokuapp.com/api/community/community-id?id=6203716096d1fbf8d6056803",
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0MzMxMzE4MCwiZXhwIjoxNjQ1OTA1MTgwfQ.0V4351fmKI6KbNBrK7toFp_crLZQjTciUdjUubDELYg",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setCommtteProfile(res.data.data);
          setloader(false);
        } else {
          throw Error("Some Error occured while Fetching");
        }
      })
      .catch((error) => {
        if (error.message === "Network Error") {
          toast.error("check your internet connection");
        } else if (error.response.status === 404) {
          toast.error("Page Not Found");
        } else if (error.response.status === 202) {
          toast.error("communities not found");
        } else if (error.response.status === 400) {
          toast.error("Internal server Error");
        } else {
          toast.error(error.response.message);
        }
      });
    // this api for count of no of accepted and pending and total event and upcomming events
    axios
      .get(
        "https://sgvr-server.herokuapp.com/api/admin/community-info?communityId=61f77eb591ce9bd27044e8a6",
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0MzMxMzE4MCwiZXhwIjoxNjQ1OTA1MTgwfQ.0V4351fmKI6KbNBrK7toFp_crLZQjTciUdjUubDELYg",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          if (res.data) {
            console.log(res.data);
            setCountuser(res.data);
            setloader(false);
          }
          res?.data?.user &&
            res.data.user.length > 0 &&
            res.data.user.forEach((el) => {
              if (el.status && el.status === "accepted") {
                setAcceptedCount((prev) => prev + 1);
              }
              if (el.status && el.status === "pending") {
                setPendingCount((prev) => prev + 1);
              }
            });
        } else {
          console.log("Some Error occured while Fetching");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "Network Error") {
          console.log("check your internet connection");
        } else if (error.response.status === 404) {
          console.log("Page Not Found");
        } else if (error.response.status === 400) {
          console.log("something went wrong.Please try again..");
        } else {
          console.log(error.response.message);
        }
      });
  }, [setCommtteProfile, setloader]);
  const showEditForm = (id) => {
    navigate(`/commiteeform/${id}`);
    setdashboradCurrentId(id);
  };

  return (
    <>
      <StyledToastContainer draggable={false} transition={Zoom} />

      <MainSection>
        <Header>
          <h1>Status</h1>
        </Header>
        <WrapCard>
          <Carddiv>
            <hr></hr>
            <article>
              <p>No.of Accepted Users</p>
              <div>
                <span>{acceptedCount}</span>
                <figure>
                  <div className="p1"></div>
                  <div className="p2"></div>
                  <div className="p3"></div>
                </figure>
              </div>
            </article>
          </Carddiv>
          <Carddiv>
            <hr></hr>
            <article>
              <p>No.of Pending Users</p>
              <div>
                <span>{pendingCount}</span>
                <figure>
                  <div className="p1"></div>
                  <div className="p2"></div>
                  <div className="p3"></div>
                </figure>
              </div>
            </article>
          </Carddiv>
          <Carddiv>
            <hr></hr>
            <article>
              <p>No.of All Events</p>
              <div>
                <span>
                  {countuser.allEvents && countuser.allEvents.length
                    ? countuser.allEvents.length
                    : 0}
                </span>
                <figure>
                  <div className="p1"></div>
                  <div className="p2"></div>
                  <div className="p3"></div>
                </figure>
              </div>
            </article>
          </Carddiv>
          <Carddiv>
            <hr></hr>
            <article>
              <p>No.of Upcomming Events</p>
              <div>
                <span>
                  {countuser.upcomingEvents && countuser.upcomingEvents.length
                    ? countuser.upcomingEvents.length
                    : 0}
                </span>
                <figure>
                  <div className="p1"></div>
                  <div className="p2"></div>
                  <div className="p3"></div>
                </figure>
              </div>
            </article>
          </Carddiv>
        </WrapCard>
        <CommiteProfile>
          <CommiteHeader>
            <h1>Committee Profile</h1>
          </CommiteHeader>
          <Contentdiv>
            <figure>
              <img
                src={`https://sgvr-server.herokuapp.com/api/get-images?key=temp/images/community-61f77eb591ce9bd27044e8a6-0`}
                alt="groomimg"
              />
            </figure>
            <article className="article1">
              <p>Name</p>
              <p>Email</p>
              <p>Phone</p>
              <p>State</p>
              <p>City</p>
            </article>
            <article className="article2">
              <p>{commtteProfile?.name}</p>
              <p>{commtteProfile?.email}</p>
              <p>+91 {commtteProfile?.phone}</p>
              <p>{commtteProfile?.state}</p>
              <p>{commtteProfile?.city}</p>
            </article>
            <article className="article3">
              <h3>Address</h3>
              <p>{commtteProfile?.address}</p>
              <h3 style={{ marginTop: "17px" }}>About</h3>
              <p>{commtteProfile?.description}</p>
            </article>
            <Button>
              <button onClick={() => showEditForm(commtteProfile._id)}>
                Edit
              </button>
            </Button>
          </Contentdiv>
        </CommiteProfile>
      </MainSection>
    </>
  );
};

export default Dashboard;
