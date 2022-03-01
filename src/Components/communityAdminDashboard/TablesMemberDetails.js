import styled from "styled-components";
import img from "../../Assets/Images/Images";
import { useEffect, useState } from "react";
import axios from "axios";

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
  .rejectbtn {
    margin-top: 18px;
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
  width: 113px;
  height: 114px;
  min-width: 50%;
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

const TablesMemberDetails = (props) => {
  const [newmembDetails, setnewmembDetails] = useState();

  useEffect(() => {
    props.newcommitteMemberData.forEach((ele) => {
      if (ele._id === props.Id) {
        setnewmembDetails(ele);
      }
    });
  }, [props.Id, props.newcommitteMemberData]);
  // create toggle function to update the status in the database
  const newMemberapprove = (id) => {
    console.log("id", id);
    axios
      .patch(
        "https://sgvr-server.herokuapp.com/api/community/community-member",
        {
          id: id,
          status: "accepted",
        },
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIwY2ZkY2I4OTIyODY2ZjI1ZjE1OThmIiwidXNlclR5cGUiOiJDQSIsImlhdCI6MTY0NTI3ODQxNCwiZXhwIjoxNjQ1MjgyMDE0fQ.Ypkq9_lFVDveyPc4bIKVn7bIqofBSEH4dGaV3tA38wo",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          props.getNewMemberData(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Surrounding>
      <Aside>
        <img
          className="cross"
          onClick={() => props.setNewMemberDetails(false)}
          src={img.cancel}
          alt="cancelimg"
        />
        <h1>New Member Details</h1>
        <Content>
          <DP
            src={`https://sgvr-server.herokuapp.com/api/get-images?key=temp/images/${newmembDetails?.images}`}
          />
          <table>
            <tbody>
              <tr>
                <td className="key">Name</td>
                <td className="value">{newmembDetails?.name}</td>
              </tr>
              <tr>
                <td className="key">Email</td>
                <td className="value">{newmembDetails?.emailId}</td>
              </tr>
              <tr>
                <td className="key">Phone</td>
                <td className="value">+91 {newmembDetails?.mobile} </td>
              </tr>
              <tr>
                <td className="key">State</td>
                <td className="value">{newmembDetails?.state}</td>
              </tr>
              <tr>
                <td className="key">City</td>
                <td className="value">{newmembDetails?.city}</td>
              </tr>
            </tbody>
          </table>
          <article>
            <h2>Address 1</h2>
            <p>{newmembDetails?.address}</p>
          </article>
          <article>
            <h2>About</h2>
            <p>{newmembDetails?.about}</p>
          </article>
          <button onClick={() => newMemberapprove(newmembDetails?._id)}>
            {newmembDetails?.status === "pending" ? "Approve" : "Reject"}
          </button>
        </Content>
      </Aside>
    </Surrounding>
  );
};

export default TablesMemberDetails;
