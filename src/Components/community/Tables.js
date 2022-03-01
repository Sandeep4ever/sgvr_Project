import React, { useContext, useState } from "react";
import styled from "styled-components";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";
import TablesMemberDetails from "./TablesMemberDetails";
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
  const state = useContext(Cardlistcontext);
  const today = new Date();
  const todayDate = today.getDate();
  let renderData = state.committememberData.filter((el) => {
    if (todayDate - el.updatedAt.split("-")[0] <= 15) {
      return el;
    }
    return el;
  });
  console.log(renderData);

  const showMemberDetails = (id) => {
    setNewMemberDetails(!newMemberDetails);
    setcurrentid(id);
  };

  return (
    <>
      {newMemberDetails && (
        <TablesMemberDetails
          newMemberDetails={newMemberDetails}
          setNewMemberDetails={setNewMemberDetails}
          renderData={renderData}
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
            {renderData &&
              renderData.length &&
              renderData.map((items, _id) => (
                <tr key={items._id}>
                  <td>{items.updatedAt}</td>
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
