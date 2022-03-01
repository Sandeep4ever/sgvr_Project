import React, { useState } from "react";
import styled from "styled-components";
import img from "../../../Assets/Images/Images";
import OnlySearchbar from "../../../Utils/OnlySearchbar";
import Pagination from "../../../Utils/Pagination";

const MainContainer = styled.div`
  padding: 35px 36px 35px 31px;
  width: 100%;
  height: 100%;
`;
const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SearchSec = styled.div``;
const DateDiv = styled.div`
  margin-left: 10px;
  input {
    /* width: 110px; */
    height: 38px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #747474;
    border-radius: 4px;
  }
`;
const CreateDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 603px;
  width: 112px;
  height: 38px;
  background: #d8ae251a 0% 0% no-repeat padding-box;
  border-radius: 8px;

  p {
    font: normal normal 500 14px/21px Poppins;
    color: #d8ae25;
  }
  span {
    margin-left: 17px;
  }
`;
// const DownloadImage = styled.div`
//   margin-left: 188px;

//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   color: #b3b3b3;
//   &:hover {
//     color: #3f546d;
//     background: #d4af371a 0% 0% no-repeat padding-box;
//   }
//   .MuiSvgIcon-root {
//     overflow: inherit;

//     color: #b3b3b3;
//   }
// `;
const TableContainer = styled.div`
  margin-top: 26px;
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 80%;
  }
  table {
    th {
      font: normal normal 500 14px/20px Rubik;
      color: #d4af37;
    }
  }
  th {
    background: #d4af371a 0% 0% no-repeat padding-box;
    height: 45px !important;
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
    &:hover {
      background: #f7f7f7 0% 0% no-repeat padding-box;
    }
  }
`;
const PaginationDiv = styled.div``;
const WrapContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Schedules = () => {
  const [donateData] = useState([
    {
      id: 0,
      date: "02/0202022",
      name: "Ajay kumar",
      poojaType: "Arthi",
      phone: "2894621866",
      timing: "11:00am",
    },
    {
      id: 1,
      date: "02/0202022",
      name: "Ajay kumar",
      poojaType: "Arthi",
      phone: "2894621866",
      timing: "11:00am",
    },
    {
      id: 2,
      date: "02/0202022",
      name: "Ajay kumar",
      poojaType: "Arthi",
      phone: "2894621866",
      timing: "11:00am",
    },
    {
      id: 3,
      date: "02/0202022",
      name: "Ajay kumar",
      poojaType: "Arthi",
      phone: "2894621866",
      timing: "11:00am",
    },
  ]);
  return (
    <>
      <WrapContainer>
        <MainContainer>
          <TopSection>
            <SearchSec>
              <OnlySearchbar />
            </SearchSec>
            <DateDiv>
              <input type="date" id="datefor" />
            </DateDiv>
            <CreateDiv>
              <p>
                Create{" "}
                <span>
                  <img src={img.plus} alt="plus" />
                </span>
              </p>
            </CreateDiv>
          </TopSection>
          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>

                  <th> Phone</th>
                  <th>Pooja Type</th>
                  <th>Timing</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {donateData.map((items, index) => (
                  <tr key={index}>
                    <td>{items.date}</td>
                    <td>{items.name}</td>
                    <td>{items.phone}</td>
                    <td>{items.poojaType}</td>

                    <td>{items.timing}</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableContainer>
        </MainContainer>
        <PaginationDiv>
          <Pagination />
        </PaginationDiv>
      </WrapContainer>
    </>
  );
};

export default Schedules;
