import styled from "styled-components";
import img from "../../Assets/Images/Images";
import { useEffect, useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
const Surrounding = styled.section`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: +10;
  top: 0;
  right: 0;
  background: #2c2c2c20 0% 0% no-repeat padding-box;
`;

const Aside = styled.div`
  height: 100vh;
  max-width: 350px;
  min-width: 350px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 8px #00000029;
  opacity: 1;
  position: absolute;
  right: 0;
  top: 0;
  padding: 13px 25px;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;

  .cross {
    display: block;
    margin-left: auto;
    cursor: pointer;
  }

  h1 {
    text-align: left;
    line-height: 20px;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-style: normal;
    font: normal normal medium 20px/20px Roboto;
    letter-spacing: 0px;
    color: #d4af37;
    text-transform: capitalize;
    opacity: 1;
    margin-bottom: 33px;
    margin-top: 0px;
  }

  div {
    height: 150px;
  }

  article {
    margin-bottom: 25px;
    h2 {
      text-align: left;
      margin-bottom: 8px;
      line-height: 20px;
      font-size: 13px;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-style: normal;
      letter-spacing: 0px;
      color: #232323;
      opacity: 1;
    }
    p {
      text-align: left;
      font-size: 13px;
      line-height: 20px;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-style: normal;
      letter-spacing: 0px;
      color: #4d4d4d;
      opacity: 1;
    }
  }

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
    margin-bottom: 5px;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0px 23px;

    td {
      width: 50%;
    }
  }

  .key {
    text-align: left;
    margin-bottom: 8px;
    line-height: 20px;
    font-size: 13px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0px;
    color: #232323;
    opacity: 1;
  }

  .value {
    text-align: left;
    font-size: 13px;
    line-height: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0px;
    color: #4d4d4d;
    opacity: 1;
  }
`;

const DP = styled.img`
  width: 200px;
  height: 200px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  padding: 3px;
  margin-right: auto;
  margin-left: 0px;
`;

const Content = styled.div`
  overflow: auto;
  flex-grow: 1;
  margin-bottom: 10px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }
`;

const Details = ({ details, setdetails, getCommunityData, _id }) => {
  const [cardData, setCardData] = useState({});
  const [currentImg, setcurrentImg] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    console.log("id in details:  ", _id);
    getCommunityData.forEach((element) => {
      if (element && element._id === _id) {
        // console.log(element);
        // console.log("imag", element.images[0]);
        setcurrentImg(element.images[0]);
        setCardData(element);
        console.log("detail", element._id);
      }
    });
  }, [_id, getCommunityData]);
  const showcommitemember = () => {
    navigate(`/community/members/comittemembers/${cardData._id}`);
  };
  return (
    <Surrounding>
      <Aside>
        <img
          className="cross"
          onClick={() => setdetails(!details)}
          src={img.cancel}
          alt="cancelimg"
        />
        <h1>Committee Details</h1>
        <Content>
          <DP
            src={`https://sgvr-server.herokuapp.com/api/get-images?key=${currentImg}`}
            alt="image"
          />

          <table>
            <tbody>
              <tr>
                <td className="key">Name</td>
                <td className="value">{cardData.name}</td>
              </tr>

              <tr>
                <td className="key">Email</td>
                <td className="value">{cardData.email}</td>
              </tr>

              <tr>
                <td className="key">Phone</td>
                <td className="value">+91 {cardData.phone}</td>
              </tr>
              <tr>
                <td className="key">State</td>
                <td className="value">{cardData.state}</td>
              </tr>
              <tr>
                <td className="key">City</td>
                <td className="value">{cardData.city}</td>
              </tr>
              <tr>
                <td className="key">PinCode</td>
                <td className="value">{cardData.pincode}</td>
              </tr>
            </tbody>
          </table>
          <article>
            <h2>Address </h2>
            <p>{cardData.address}</p>
          </article>
          <article>
            <h2>About</h2>
            <p>{cardData.description}</p>
          </article>
        </Content>
        <button onClick={showcommitemember}>Show Committee Members</button>
      </Aside>
    </Surrounding>
  );
};

export default Details;
