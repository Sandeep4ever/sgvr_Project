import styled from "styled-components";
import SvgIcon from "@material-ui/core/SvgIcon";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";

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

const Wrap = styled.section`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: +10;
  top: 0;
  right: 0;
  background: #2c2c2c20 0% 0% no-repeat padding-box;
  padding-bottom: 43px;
`;

const Maincontainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 349px;
  height: 100vh;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 8px #00000029;

  button {
    height: 43px;
    width: 100%;
    background: #d8ae25 0% 0% no-repeat padding-box;
    border: none;
    border-radius: 4px;
    opacity: 1;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    font-style: normal;
    font-family: "Rubik", sans-serif;
    letter-spacing: 0px;
    color: #ffffff;
    cursor: pointer;
    margin-top: auto;
  }
`;
const CloseImageDiv = styled.div`
  float: right;
  margin-top: 13px;
  color: #363636;
  cursor: pointer;
  .MuiSvgIcon-root {
    font-size: 30px;
  }
`;
const VendorDetailsDiv = styled.div`
  padding: 30px 16px 0px 24px;
`;
const Header = styled.h6`
  font: normal normal 500 20px/20px Roboto;
  color: #d4af37;
`;
const BusinessNameDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 23px;

  h6 {
    width: 107px;
    font: normal normal 500 13px/20px Poppins;
    color: #232323;
  }
  span {
    font: normal normal normal 13px/20px Poppins;
    color: #4d4d4d;
    margin-left: 40px;
  }
`;

const OwnerNameDiv = styled(BusinessNameDiv)``;
const EmailDiv = styled(BusinessNameDiv)``;
const PhoneDiv = styled(BusinessNameDiv)``;
const ServiceProvidesDiv = styled(BusinessNameDiv)``;
const StateDiv = styled(BusinessNameDiv)``;
const CityDiv = styled(BusinessNameDiv)``;
const Address1Div = styled.div`
  margin-top: 21px;
  h6 {
    font: normal normal 500 13px/20px Poppins;
    color: #232323;
    margin-bottom: 9px;
  }
  span {
    font: normal normal normal 13px/20px Poppins;
    color: #4d4d4d;
  }
`;
const ForScrolling = styled.div`
  padding-bottom: 30px;
  overflow: auto;
  height: 90vh;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d8ae25;
    border-radius: 5px;
  }
`;
const Address2Div = styled(Address1Div)``;
const AboutBusinessDiv = styled(Address1Div)``;

const VendorDetails = ({ setdetails, idfor }) => {
  const state = useContext(Cardlistcontext);
  const [details, setdet] = useState([]);
  console.log(idfor);

  useEffect(() => {
    const getVendorData = async () => {
      const res = await axios(
        `https://sgvr-server.herokuapp.com/api/vendor/vendor?id=${idfor}`,
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NjAyOTM1OSwiZXhwIjoxNjQ2MTE1NzU5fQ.Dec4gN2efLUqBfu7Y3kfqHfVfkipVkTjjKuJOBPXGpw",
          },
        }
      );
      return res;
    };
    getVendorData()
      .then((res) => {
        if (res.status === 200) {
          setdet(res.data.data);
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
  }, [idfor, state]);

  return (
    <Wrap>
      <StyledToastContainer draggable={false} transition={Zoom} />
      <Maincontainer>
        <CloseImageDiv onClick={() => setdetails(false)}>
          <SvgIcon>
            <path
              id="_7787567_wrong_delete_remove_trash_minus_icon"
              data-name="7787567_wrong_delete_remove_trash_minus_icon"
              d="M39.071,38.2l3.049-3.049a.616.616,0,1,0-.871-.871L38.2,37.329,35.151,34.28a.616.616,0,1,0-.871.871L37.329,38.2,34.28,41.249a.616.616,0,1,0,.871.871L38.2,39.071l3.049,3.049a.616.616,0,1,0,.871-.871Z"
              transform="translate(-34.1 -34.1)"
            />
          </SvgIcon>
        </CloseImageDiv>
        <VendorDetailsDiv>
          <Header>Vendor Details</Header>
          <ForScrolling>
            <BusinessNameDiv>
              <h6>Business Name</h6>
              <span>{details.name}</span>
            </BusinessNameDiv>
            <OwnerNameDiv>
              <h6>Owner Name</h6>
              <span>{details.owner}</span>
            </OwnerNameDiv>
            <EmailDiv>
              <h6>Email</h6>
              <span>{details.emailId}</span>
            </EmailDiv>
            <PhoneDiv>
              <h6>Phone</h6>
              <span>{details.contactNo}</span>
            </PhoneDiv>
            <ServiceProvidesDiv>
              <h6>Service Provides</h6>
              <span>{details.services}</span>
            </ServiceProvidesDiv>
            <StateDiv>
              <h6>State</h6>
              <span>{details.state}</span>
            </StateDiv>
            <CityDiv>
              <h6>City</h6>
              <span>{details.city}</span>
            </CityDiv>
            <Address1Div>
              <h6>Address 1</h6>
              <span>{details.address}</span>
            </Address1Div>

            <Address2Div>
              <h6>Address 2</h6>
              <span>{details.address}</span>
            </Address2Div>
            <AboutBusinessDiv>
              <h6>About Business</h6>
              <span>{details.about}</span>
            </AboutBusinessDiv>
          </ForScrolling>
          <button>Deactivate</button>
        </VendorDetailsDiv>
      </Maincontainer>
    </Wrap>
  );
};

export default VendorDetails;
