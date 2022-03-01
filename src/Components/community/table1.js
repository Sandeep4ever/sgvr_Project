import React, { useState, useEffect, useContext, useCallback } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";
import MemberDetails from "./MemberDetails";

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
  const { setCommittememberData, committememberData, setCountMember } =
    useContext(Cardlistcontext);
  const [currentId, setcurrentId] = useState();
  const { id } = useParams();
  const [memberDetails, setmemberDetails] = useState(false);

  const fetchData = useCallback(() => {
    axios
      .get(
        `https://sgvr-server.herokuapp.com/api/community/members?communityId=${id}`,
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NjAyOTM1OSwiZXhwIjoxNjQ2MTE1NzU5fQ.Dec4gN2efLUqBfu7Y3kfqHfVfkipVkTjjKuJOBPXGpw",
          },
        }
      )
      .then((res) => {
        console.log("memberdata", res.data.data);
        res.data.data.map((el) => {
          return (el.updatedAt = el.updatedAt
            .split("T")[0]
            .split("-")
            .reverse()
            .join("-"));
        });
        setCommittememberData(res.data.data);
        setCountMember(res.data.data.length);
      });
  }, [id, setCommittememberData, setCountMember]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const showMemberDetails = (id) => {
    console.log("memberIdwhenclick", id);
    setmemberDetails(!memberDetails);
    setcurrentId(id);
  };

  const removemember = (Idformember) => {
    console.log(Idformember);
    axios
      .patch(
        "https://sgvr-server.herokuapp.com/api/community/remove",
        { id: Idformember },
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NjAyOTM1OSwiZXhwIjoxNjQ2MTE1NzU5fQ.Dec4gN2efLUqBfu7Y3kfqHfVfkipVkTjjKuJOBPXGpw",
          },
        }
      )
      .then((res) => {
        fetchData();
        console.log("clickremovebtn", res.status);
        console.log(res.data);
        console.log(res);
      });
  };
  return (
    <>
      {memberDetails && (
        <MemberDetails
          memberDetails={memberDetails}
          setmemberDetails={setmemberDetails}
          committememberData={committememberData}
          setCommittememberData={setCommittememberData}
          id={currentId}
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
          <tbody>
            {committememberData.map((items, _id) => (
              <tr key={items._id}>
                <td>{items.updatedAt.split("T")[0]}</td>
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
            ))}
          </tbody>
        </table>
      </TableContainer>
    </>
  );
};

export default Tabfs;
