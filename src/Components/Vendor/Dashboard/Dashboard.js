import { useEffect, useState } from "react";
import styled from "styled-components";
import img from "../../../Assets/Images/Images";
import axios from "axios";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

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

const WholeWrap = styled.div`
  width: 100%;
  margin: 35px;
`;

const Discription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-family: "Roboto", sans-serif;
  font-weight: 500;

  button {
    height: 40px;
    width: 116px;
    text-align: center;
    background: #dfb93e 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 8px;
    border: none;
    font-size: 18px;
    line-height: 40px;
    letter-spacing: 0px;
    color: #ffffff;
    cursor: pointer;
  }
`;

const ImageProfile = styled.img`
  width: 230px;
  height: 230px;
  padding: 4px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
`;

const DisDiv = styled.div`
  margin: 22px;
  max-width: 650px;
  margin-right: 60px;

  h1 {
    text-align: left;
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
    letter-spacing: 0px;
    color: #d8ae25;
    margin-bottom: 7px;
    opacity: 1;
  }

  .p1 {
    text-align: left;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0px;
    color: #7e7e7e;
    opacity: 1;
    margin-bottom: 26px;
  }

  h2 {
    text-align: left;
    font-size: 18px;
    line-height: 27px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0px;
    color: #1f1f1f;
    text-transform: capitalize;
    opacity: 1;
    margin-bottom: 7px;
  }

  .p2 {
    text-align: left;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0px;
    color: #7e7e7e;
    max-width: 646px;
  }
`;

const Imgdisc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 26px;
  width: 100%;
  margin-bottom: 11px;

  div {
    display: inline-block;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 15px;
    margin-right: 30px;
  }

  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    padding: 7px;
    background: #dfb93e1a 0% 0% no-repeat padding-box;
    margin-right: 18px;
    display: inline-block;
  }

  p {
    margin-top: 8px;
    text-align: left;
    font-size: 13px;
    font-weight: 20px;
    font-weight: 400;
    letter-spacing: 0px;
    color: #4d4d4d;
    display: inline-block;
    font-family: "Poppins", sans-serif;
    max-width: 223px;
  }
`;

const Images = styled.div`
  width: 605px;
  border-top: 0.5px solid #a3a3a3;
  font-family: "Roboto", sans-serif;

  h3 {
    text-align: left;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0px;
    color: #dfb93e;
    text-transform: capitalize;
    margin-top: 21px;
    margin-bottom: 21px;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    img {
      height: 107px;
      width: 107px;
      margin-bottom: 7px;
    }
  }
`;

const Dashboard = () => {
  const usenavigate = useNavigate();
  const [data, setdata] = useState();

  useEffect(() => {
    const fetchView = () => {
      const res = axios.get(
        "https://sgvr-server.herokuapp.com/api/vendor/vendor?id=620ba94879f3d23a065bb053",
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIwYmE5NDg3OWYzZDIzYTA2NWJiMDUzIiwidXNlclR5cGUiOiJWIiwiaWF0IjoxNjQ1NTI3MzkzLCJleHAiOjE2NDU2MTM3OTN9.O37SaGshpA1TVJUxhMpVBISoui7ifrlG5buZgam9TFQ",
          },
        }
      );
      return res;
    };
    fetchView()
      .then((res) => {
        if (res.status === 200) {
          setdata(res.data.data);
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
  }, []);

  return (
    <WholeWrap>
      <StyledToastContainer draggable={false} transition={Zoom} />
      <Discription>
        <ImageProfile
          src={`https://sgvr-server.herokuapp.com/api/get-images?key=${
            data !== undefined && data.images[0]
          }`}
        />
        <DisDiv>
          <h1>{data !== undefined && data.name}</h1>
          <p className="p1">{data !== undefined && data.services}</p>
          <h2>About Us</h2>
          <p className="p2">{data !== undefined && data.about}</p>
          <Imgdisc>
            <div>
              <img src={img.mail} alt="mail" />
              <p>{data !== undefined && data.emailId}</p>
            </div>
            <div>
              <img src={img.phone} alt="mail" />
              <p>{data !== undefined && data.contactNo}</p>
            </div>
            <div>
              <img src={img.location2} alt="mail" />
              <p>
                {data !== undefined && data.address},{" "}
                {data !== undefined && data.city}
              </p>
            </div>
          </Imgdisc>
          <Images>
            <h3>Gallery</h3>
            <div>
              {data !== undefined &&
                data.images.map((value, index) => {
                  if (index !== 0) {
                    return (
                      <img
                        key={index}
                        src={`https://sgvr-server.herokuapp.com/api/get-images?key=${value}`}
                        alt="DP"
                      />
                    );
                  } else {
                    return null;
                  }
                })}
            </div>
          </Images>
        </DisDiv>
        <button onClick={() => usenavigate("/Profile/EditProfile")}>
          Edit
        </button>
      </Discription>
    </WholeWrap>
  );
};

export default Dashboard;
