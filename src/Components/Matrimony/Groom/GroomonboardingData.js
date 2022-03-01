import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import img from "../../../Assets/Images/Images";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cardlistcontext from "../../../ContextApi/Cardlistcontext";

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
  width: 100%;
  padding-bottom: 30px;
`;

const HeaderDiv = styled.div`
  width: 100%;
  height: 167px;
  background: #faf5e2 0% 0% no-repeat padding-box;
  img {
    margin-left: 15px;
    cursor: pointer;
  }
  button {
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0px;
    font-weight: 500;
    float: right;
    margin-top: 84px;
    margin-right: 27px;
    border: none;
    color: #ffffff;
    background: #dfb93e 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 8px;
    opacity: 1;
    width: 116px;
    height: 40px;
    font-family: "Roboto", sans-serif;
  }
`;

const WrapContantDiv = styled.div`
  display: flex;
  hr {
    margin-left: 43px;
  }
`;
const GallaryDiv = styled.div`
  width: 230px;
  margin-left: 34px;
  h1 {
    font: normal normal 500 16px/25px Poppins;
    color: #dfb93e;
    margin-top: 39px;
  }
`;
const GroomImageDiv = styled.div`
  width: 230px;
  height: 230px;
  margin-top: -100px;
  padding: 4px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
`;
const GallaryImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 11px;
  gap: 11px;

  img {
    width: 107px;
    height: 107px;
  }
`;

const GroomContentDiv = styled.div`
  width: 273px;
  margin-left: 26px;
`;
const GroomDetailsDiv = styled.div``;
const GroomName = styled.div`
  margin-top: -93px;
  h3 {
    text-align: left;
    font-size: 24px;
    line-height: 32px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    letter-spacing: 0px;
    color: #dfb93e;
    opacity: 1;
    text-transform: capitalize;
  }
  p {
    text-align: left;
    text-transform: capitalize;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 0px;
    color: #515151;
    opacity: 1;
  }
`;
const GroomPersonalDetailsDiv = styled.div`
  margin-top: 49px;
  div {
    display: flex;
    margin-top: 10px;
    img {
      width: 32px;
      height: 32px;
    }
    p {
      font: normal normal normal 13px/20px Poppins;
      color: #4d4d4d;
      margin-left: 18px;
      margin-top: 7px;
      text-transform: capitalize;
    }
  }
  .rashi {
    div {
      display: flex;

      margin-top: 22px;
    }
    p {
      margin-top: 0px;
      width: 70px;
      font: normal normal 500 13px/20px Poppins;
      color: #232323;
    }
    span {
      font: normal normal normal 13px/20px Poppins;
      color: #4d4d4d;
    }
  }
`;
const SiblingDetails = styled.div`
  margin-top: 52px;
  h3 {
    font: normal normal 500 18px/27px Poppins;
    color: #d8ae25;
  }
`;
const SiblingPersonalDetails = styled.div`
  div {
    display: flex;

    margin-top: 22px;
  }
  p {
    width: 95px;
    font: normal normal 500 13px/20px Poppins;
    color: #232323;
  }
  span {
    font: normal normal normal 13px/20px Poppins;
    color: #4d4d4d;
    margin-left: 49px;
  }
`;
const FatherAndMotherDetailsDiv = styled.div`
  margin-left: 43px;
`;
const FatherDetailsDiv = styled.div`
  margin-top: 10px;
  h3 {
    font: normal normal 500 18px/27px Poppins;
    color: #d8ae25;
  }
`;
const FatherPersonalDetails = styled.div`
  margin-top: 22px;
  div {
    display: flex;
    margin-top: 22px;
  }
  p {
    width: 78px;
    font: normal normal 500 13px/20px Poppins;
    color: #232323;
  }
  span {
    width: 223px;
    font: normal normal normal 13px/20px Poppins;
    color: #4d4d4d;
    margin-left: 63px;
  }
`;
const MotherDetailsDiv = styled(FatherDetailsDiv)`
  margin-top: 54px;
`;
const MotherPersonalDetails = styled(FatherPersonalDetails)``;

const GroomonboardingData = () => {
  const [datad, setdatad] = useState({});
  const state = useContext(Cardlistcontext);
  const { id } = useParams();
  const usenavigate = useNavigate();

  useEffect(() => {
    const fetchGroom = async () => {
      const res = await axios.get(
        `https://sgvr-server.herokuapp.com/api/matrimony/one-profile?id=${id}`,
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NTg1NjAyNywiZXhwIjoxNjQ1OTQyNDI3fQ.mw9mlEK5fFjONAMYpWj4FevASCESAkwxhf3SdgU_TKA",
          },
        }
      );
      return res;
    };
    fetchGroom()
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.data);
          setdatad(res.data.data);
          state.setloader(false);
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
  }, [id, state]);

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

  const statusChange = async () => {
    const call = await axios.patch(
      datad.isActive
        ? "https://sgvr-server.herokuapp.com/api/matrimony/deactivate"
        : "https://sgvr-server.herokuapp.com/api/matrimony/activate",
      { id: datad.createdBy },
      {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NTg1NjAyNywiZXhwIjoxNjQ1OTQyNDI3fQ.mw9mlEK5fFjONAMYpWj4FevASCESAkwxhf3SdgU_TKA",
        },
      }
    );
    return call;
  };

  return (
    <MainContainer>
      <StyledToastContainer draggable={false} transition={Zoom} />
      <HeaderDiv>
        <img src={img.backarrow} alt="img" onClick={() => usenavigate(-1)} />
        <button
          onClick={() => {
            statusChange()
              .then((res) => {
                console.log(res);
                window.location.reload();
              })
              .catch((err) => console.log(err));
          }}
        >
          {datad.isActive ? "Deactivate" : "Activate"}
        </button>
      </HeaderDiv>

      <WrapContantDiv>
        <GallaryDiv>
          <GroomImageDiv>
            <img
              width="100%"
              height="100%"
              src={`https://sgvr-server.herokuapp.com/api/get-images?key=${
                datad.photos && datad.photos[0]
              }`}
              alt="groomimg"
            />
          </GroomImageDiv>
          <h1>Gallery</h1>
          <GallaryImages>
            <img src={img.groom1} alt="groom1img" />
            <img src={img.groom2} alt="groom2" />
            <img src={img.groom3} alt="groom3" />
            <img src={img.groom4} alt="groom4" />
          </GallaryImages>
        </GallaryDiv>

        <GroomContentDiv>
          <GroomDetailsDiv>
            <GroomName>
              <h3>
                {datad.fname},<span> {datad.age}</span>
              </h3>
              <p>{datad.job}</p>
            </GroomName>
            <GroomPersonalDetailsDiv>
              <div>
                <img src={img.calendar} alt="calendar" />
                <p>dob : {dateMonth(datad.dob)}</p>
              </div>
              <div>
                <img src={img.degree} alt="degreeimg" />
                <p>{datad.education}</p>
              </div>
              <div>
                <img src={img.emailimg} alt="emailimg" />
                <p>{datad.email}</p>
              </div>
              <div>
                <img src={img.phoneno} alt="phoneno" />
                <p>{datad.phone}</p>
              </div>
              <div>
                <img src={img.city} alt="cityimg" />
                <p>
                  {datad.city}, {datad.state}
                </p>
              </div>
              <div>
                <img src={img.location2} alt="location2img" />
                <p>Birth place : {datad.birthPlace}</p>
              </div>
              <span className="rashi">
                <div>
                  <p>Rashi</p>
                  <span>{datad.rashi}</span>
                </div>
                <div>
                  <p>Gotra</p>
                  <span>{datad.gottra}</span>
                </div>
                <div>
                  <p>Intrest</p>
                  <span>{datad.hobbies}</span>
                </div>
              </span>
            </GroomPersonalDetailsDiv>
          </GroomDetailsDiv>
          <SiblingDetails>
            <h3>Sibling Details</h3>
            <SiblingPersonalDetails>
              {datad.siblings &&
                datad.siblings.map((items, index) => (
                  <>
                    <div>
                      <p>{index + 1}) Name</p>
                      <span>{items.name}</span>
                    </div>
                    <div>
                      <p>Job</p>
                      <span>{items.job}</span>
                    </div>
                    <div>
                      <p>Age</p>
                      <span>{items.age}</span>
                    </div>
                    <div>
                      <p>Marital Status</p>
                      <span>{items.maritalStatus}</span>
                    </div>
                    <br />
                  </>
                ))}
            </SiblingPersonalDetails>
          </SiblingDetails>
        </GroomContentDiv>
        <hr />
        <FatherAndMotherDetailsDiv>
          <FatherDetailsDiv>
            <h3>Father Details</h3>
            <FatherPersonalDetails>
              <div>
                <p>Name</p>
                <span>{datad.father ? datad.father.name : ""}</span>
              </div>
              <div>
                <p>Phone NO.</p>
                <span>{datad.father ? datad.father.email : ""}</span>
              </div>
              <div>
                <p>Email</p>
                <span>{datad.father ? datad.father.email : ""}</span>
              </div>
              <div>
                <p>Occupation</p>
                <span>{datad.father ? datad.father.occupation : ""}</span>
              </div>
              <div>
                <p>Birth Place</p>
                <span>{datad.father ? datad.father.birthPlace : ""}</span>
              </div>
            </FatherPersonalDetails>
          </FatherDetailsDiv>
          <MotherDetailsDiv>
            <h3>Mother Details</h3>
            <MotherPersonalDetails>
              <div>
                <p>Name</p>
                <span>{datad.mother ? datad.mother.name : ""}</span>
              </div>
              <div>
                <p>Phone NO.</p>
                <span>+91 5147561485</span>
              </div>
              <div>
                <p>Email</p>
                <span>{datad.mother ? datad.mother.email : ""}</span>
              </div>
              <div>
                <p>Occupation</p>
                <span>{datad.mother ? datad.mother.occupation : ""}</span>
              </div>
            </MotherPersonalDetails>
          </MotherDetailsDiv>
        </FatherAndMotherDetailsDiv>
      </WrapContantDiv>
    </MainContainer>
  );
};

export default GroomonboardingData;
