import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";
import TablesMemberDetails from "./TablesMemberDetails";
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
const TableContainer = styled.div`
  overflow: auto;
  max-height: 448px;
  margin-top: 27px;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    img {
      margin-left: 15px;
      cursor: pointer;
    }
  }
  th {
    background: #faf5e2 0% 0% no-repeat padding-box;
    height: 45px;
    color: #d4af37;
  }
  td {
    color: #3f546d;
  }
  td,
  th {
    text-align: left;
    padding: 8px;
    height: 55px;
    font: normal normal normal 13px/20px Poppins;
  }
  tr:nth-child(odd) {
    background: #f7f7f7 0% 0% no-repeat padding-box;
  }

  .view {
    display: inline-block;
    background: #dfb93e1a 0% 0% no-repeat padding-box;
    height: 33px;
    border: 1px solid #dfb93e;
    border-radius: 4px;
    text-align: center;
    font: normal normal normal 13px/20px Roboto;
    line-height: 33px;
    letter-spacing: 0px;
    color: #dfb93e;
    text-transform: capitalize;
    width: 74px;
    cursor: pointer;
  }
  .hed {
    color: #d4af37;
  }
`;

const Tabfs = () => {
  const [currentid, setcurrentid] = useState();
  const [newMemberDetails, setNewMemberDetails] = useState(false);
  const { setloader } = useContext(Cardlistcontext);
  const [newcommitteMemberData, setNewcommitteMemberData] = useState([{}]);

  const showMemberDetails = (id) => {
    setNewMemberDetails(!newMemberDetails);
    setcurrentid(id);
  };

  useEffect(() => {
    const fetchNewmemberData = () => {
      axios
        .get(
          "https://sgvr-server.herokuapp.com/api/community/viewmembers?communityId=61f77eb591ce9bd27044e8a6&status=pending",
          {
            headers: {
              "x-access-token":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIwY2ZkY2I4OTIyODY2ZjI1ZjE1OThmIiwidXNlclR5cGUiOiJDQSIsImlhdCI6MTY0NTQ1Mzg3NCwiZXhwIjoxNjQ1NTQwMjc0fQ.gK3UYBtuVA15m-oTbUYRjPr8zDxWV2uNpbbeplPFBxo",
            },
          }
        )
        .then((res) => {
          console.log("memberdata", res.data.data);
          if (res.status === 200) {
            setNewcommitteMemberData(res.data.data);
            setloader(false);
          } else {
            setloader(false);
            throw Error("Some Error occured while Fetching");
          }
        })
        .catch((error) => {
          console.log(error);
          setloader(false);
          if (error.response?.status === 404) {
            toast.error("Page Not Found");
          } else if (error.response?.status === 400) {
            toast.error("Internal server error");
          }
        });
    };

    fetchNewmemberData();
  }, [setloader]);

  return (
    <>
      <StyledToastContainer draggable={false} transition={Zoom} />

      {newMemberDetails && (
        <TablesMemberDetails
          newMemberDetails={newMemberDetails}
          setNewMemberDetails={setNewMemberDetails}
          newcommitteMemberData={newcommitteMemberData}
          Id={currentid}
        />
      )}
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Date of Join</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {newcommitteMemberData &&
              newcommitteMemberData.length &&
              newcommitteMemberData.map((items, index) => (
                <tr key={index}>
                  <td>{items.updatedAt?.split("T")[0]}</td>
                  <td>{items.name}</td>
                  <td>{items.emailId}</td>
                  <td>{items.mobile}</td>
                  <td style={{ color: "#00B543" }}>New Member</td>
                  <td>
                    <div
                      className="view"
                      onClick={() => showMemberDetails(items._id)}
                    >
                      View
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </TableContainer>
    </>
  );
};

export default Tabfs;
