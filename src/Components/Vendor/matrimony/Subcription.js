import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import img from "../../../Assets/Images/Images";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  /* .toast is passed to toastClassName */
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

const MainContainer = styled.div`
overflow: auto;
  padding: 44px 78px 44px 54px;
`;
const Header = styled.h2`
  font: normal normal 500 18px/20px Poppins;
  color: #d8ae25;
`;
const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 11px;
  height: 111px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  .article1 {
    h3 {
      font: normal normal 500 22px/29px Roboto;
      color: #4d4d4d;
    }
    p {
      margin-top: 11px;
      font: normal normal normal 13px/18px Roboto;
      color: #d8ae25;
      span {
        font: normal normal 500 24px/35px Poppins;
        color: #d8ae25;
      }
    }
  }
  .parent {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-content: space-around; */
    gap: 16px;

    .child1 {
      display: flex;
      gap: 45px;

      article {
        width: 165px;

        display: flex;
        p {
          margin-left: 13px;
          font: normal normal normal 14px/21px Poppins;
          color: #aaaaaa;
        }
      }
    }
    .child2 {
      display: flex;
      gap: 45px;

      article {
        width: 165px;

        display: flex;
        p {
          margin-left: 13px;
          font: normal normal normal 14px/21px Poppins;
          color: #aaaaaa;
        }
      }
    }
  }
  button {
    width: 136px;
    height: 38px;
    background: #d8ae25 0% 0% no-repeat padding-box;
    border-radius: 100px;
    font: normal normal normal 14px/21px Poppins;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
`;
const SecondContainer = styled.div`
  /* width: 100%; */
  text-align: center;
  margin-top: 44px;
  h1 {
    font: normal normal 500 24px/20px Roboto;
    color: #d8ae25;
  }
  p {
    margin-top: 13px;
    font: normal normal normal 16px/20px Roboto;
    color: #a0a0a0;
  }
`;
const ThirdContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin-top: 43px;
`;
const SilverPlanDiv = styled.div`
  width: 241px;
  height: 421px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 3px #f0f0f08a;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  .article1 {
    text-align: center;
    margin-top: 30px;
    h1 {
      font: normal normal 500 22px/29px Roboto;
      color: #4d4d4d;
    }
    span {
      font: normal normal 500 24px/35px Poppins;
      color: #d8ae25;
    }
    p {
      font: normal normal normal 13px/18px Roboto;
      color: #d8ae25;
    }
  }
  .content {
    margin-left: 36px;
    margin-top: 33px;
    gap: 15px;
    article {
      margin-top: 15px;

      display: flex;
      img {
      }
      p {
        margin-left: 13px;
        font: normal normal normal 14px/21px Poppins;
        color: #aaaaaa;
      }
    }
  }
  button {
    width: 136px;
    height: 38px;
    background: #d8ae25 0% 0% no-repeat padding-box;
    border-radius: 100px;
    font: normal normal normal 14px/21px Poppins;
    color: #ffffff;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    margin-left: 55px;
  }
`;

const Subscription = () => {
  const [fetchSubscriptionData, setfetchSubscriptionData] = useState([{}]);
  useEffect(() => {
    axios
      .get("https://sgvr-server.herokuapp.com/api/admin/subscription", {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIwYmE5NDg3OWYzZDIzYTA2NWJiMDUzIiwidXNlclR5cGUiOiJWIiwiaWF0IjoxNjQ1NTI0NDcwLCJleHAiOjE2NDU2MTA4NzB9.0mWeAfLcbSJVJrqfls81GdsufITVo7TzhsCuKOxRuZQ",
        },
      })
      .then((res) => {
        console.log(res.data.data);
      if (res.status === 200) {
        setfetchSubscriptionData(res.data.data);
        }else {
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
  }, []);

  return (
    <MainContainer>
             <StyledToastContainer draggable={false} transition={Zoom} />
      <Header>Subscribed Plan</Header>
      <FirstContainer>
        <div className="article1">
          <h3>Silver Plan</h3>
          <p>
            {" "}
            <span>₹250</span> /Monthly
          </p>
        </div>
        <div className="parent">
          <div className="child1">
            <article>
              <span>
                <img src={img.checkicon} alt="checkiconimg" />
              </span>
              <p> Social Access</p>
            </article>
            <article>
              <span>
                <img src={img.checkicon} alt="checkiconimgg" />
              </span>
              <p> Committee Access</p>
            </article>
            <article>
              <span>
                <img src={img.checkicon} alt="checkiconimg" />
              </span>
              <p> Career & Talents</p>
            </article>
          </div>
          <div className="child2">
            <article>
              <span>
                <img src={img.checkicon} alt="checkiconimg" />
              </span>
              <p> Matrimony Access</p>
            </article>
            <article>
              <span>
                <img src={img.checkicon} alt="checkiconimg" />
              </span>
              <p> Jewellery Access</p>
            </article>
            <article>
              <span>
                <img src={img.checkicon} alt="checkiconimg" />
              </span>
              <p> B2B Access</p>
            </article>
          </div>
        </div>
        <button>Repeat Plan</button>
      </FirstContainer>
      <SecondContainer>
        <h1>Subscription Plans</h1>
        <p>
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry.
        </p>
      </SecondContainer>

      <ThirdContainer>
        {fetchSubscriptionData.map((data, index) =>
            <SilverPlanDiv key={index}>
              <article className="article1">
                <h1>{data?.planName}</h1>
                <span>₹{data?.price}</span>
                <p>/Monthly</p>
              </article>
              <div className="content">
                <article>
                  <img src={img.checkicon} alt="checkiconimg" />
                  <p>Socila Access</p>
                </article>
                <article>
                  <img src={img.checkicon} alt="checkiconimg" />
                  <p>Matrimony Access</p>
                </article>
                <article>
                  <img src={img.checkicon} alt="checkiconimg" />
                  <p>B2B Access</p>
                </article>
                <article>
                  <img src={img.checkicon} alt="checkiconimg" />
                  <p>Socila Access</p>
                </article>
                <article>
                  <img src={img.checkicon} alt="checkiconimg" />
                  <p>Committee Access</p>
                </article>
                <article>
                  <img src={img.checkicon} alt="checkiconimg" />
                  <p>Socila Access</p>
                </article>
              </div>
              <button>Subscribe</button>
            </SilverPlanDiv>)}
      </ThirdContainer>
    </MainContainer>
  );
};

export default Subscription;