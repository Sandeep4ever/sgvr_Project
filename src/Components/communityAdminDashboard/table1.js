import axios from "axios";
import React, { useState, useContext } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import MemberDetails from "./MemberDetails";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";
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
    color: #3f546d;
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
    margin-right: 10px;
    cursor: pointer;
  }
  .remove {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #a3a3a3;
    display: inline-block;
    height: 33px;
    border-radius: 4px;
    color: #a3a3a3;
    text-transform: capitalize;
    text-align: center;
    font: normal normal normal 13px/20px Roboto;
    line-height: 33px;
    letter-spacing: 0px;
    text-transform: capitalize;
    width: 74px;
    cursor: pointer;
  }

  .hed {
    color: #d4af37;
  }
`;

const Tabfs = () => {
  const { committeMemberData, setcommitteMemberData, setloader } =
    useContext(Cardlistcontext);
  const [handleMemberDetails, setHandleMemberDetails] = useState(false);
  const [currentId, setCurrentId] = useState();
  const showMemberDetails = (id) => {
    setHandleMemberDetails(!handleMemberDetails);
    setCurrentId(id);
  };

  const fetchData = useCallback(() => {
    axios
      .get(
        "https://sgvr-server.herokuapp.com/api/community/viewmembers?communityId=61f77eb591ce9bd27044e8a6&status=accepted",
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
          setcommitteMemberData(res.data.data);
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
          toast.error("page not found");
        } else if (error.response?.status === 400) {
          toast.error("Internal server error");
        }
      });
  }, [setcommitteMemberData, setloader]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const removemember = (Idformember) => {
    axios
      .patch(
        "https://sgvr-server.herokuapp.com/api/community/remove",
        { id: Idformember },
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0MzMxMzE4MCwiZXhwIjoxNjQ1OTA1MTgwfQ.0V4351fmKI6KbNBrK7toFp_crLZQjTciUdjUubDELYg",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          toast.success("Member Removed");
          fetchData();
        } else {
          toast.error("Some Error occured while removing");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response?.status === 1) {
          toast.error("invalid input");
        } else if (error.response?.status === 2) {
          toast.error("community not found");
        } else if (error.response?.status === 3) {
          toast.error("something went wrong");
        } else if (error.response?.status === 400) {
          toast.error("Internal server error");
        }
      });
  };

  return (
    <>
      <StyledToastContainer draggable={false} transition={Zoom} />

      {handleMemberDetails && (
        <MemberDetails
          handleMemberDetails={handleMemberDetails}
          setHandleMemberDetails={setHandleMemberDetails}
          id={currentId}
          committeMemberData={committeMemberData}
          fun={removemember}
        />
      )}
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th className="hed">Date of Join</th>
              <th className="hed">Name</th>
              <th className="hed">Email</th>
              <th className="hed">Phone</th>
              <th className="hed">Position</th>
              <th className="hed">Action</th>
            </tr>
          </thead>

          {committeMemberData &&
            committeMemberData.map((items, index) => (
              <tbody key={index}>
                <tr>
                  <td>{items.createdAt?.split("T")[0]}</td>
                  <td>{items.name}</td>
                  <td>{items.emailId}</td>
                  <td>{items.mobile}</td>
                  <td>{items.workDone}</td>
                  <td>
                    <div
                      className="view"
                      onClick={() => showMemberDetails(items._id)}
                    >
                      View
                    </div>
                    <div
                      className="remove"
                      onClick={() => removemember(items._id)}
                    >
                      Remove
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </TableContainer>
    </>
  );
};

export default Tabfs;
