import React, { useState } from "react";
import styled from "styled-components";
import { SvgIcon } from "@material-ui/core";

import OnlySearchbar from "../../../Utils/OnlySearchbar";
import Pagination from "../../../Utils/Pagination";

const MainContainer = styled.div`
padding:35px 36px 35px; 31px;
width: 100%; 
 height:100%;
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
const TotalAmount = styled.div`
  display: flex;
  align-items: center;
  margin-left: 284px;
  p {
    font: normal normal 500 14px/21px Poppins;
    color: #515151;
  }
  span {
    background: #dfb93e0d 0% 0% no-repeat padding-box;
    border: 1px solid #dfb93e80;
    font: normal normal 500 14px/19px Roboto;
    color: #dfb93e;
    margin-left: 15px;
    padding: 10px 17px;
    border-radius: 5px;
  }
`;
const DownloadImage = styled.div`
  margin-left: 188px;

  width: 38px;
  height: 38px;
  border-radius: 50%;
  color: #b3b3b3;
  &:hover {
    color: #3f546d;
    background: #d4af371a 0% 0% no-repeat padding-box;
  }
  .MuiSvgIcon-root {
    overflow: inherit;

    color: #b3b3b3;
  }
`;
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
const Donate = () => {
  const [donateData] = useState([
    {
      id: 0,
      date: "02/0202022",
      name: "Ajay kumar",
      email: "Ajay1@Gmail.Com",
      phone: "2894621866",
      Transaction_ID: "64995",
      Prize: "₹12,000",
    },
    {
      id: 1,
      date: "02/0202022",
      name: "Ajay kumar",
      email: "Ajay1@Gmail.Com",
      phone: "2894621866",
      Transaction_ID: "64995",
      Prize: "₹12,000",
    },
    {
      id: 2,
      date: "02/0202022",
      name: "Ajay kumar",
      email: "Ajay1@Gmail.Com",
      phone: "2894621866",
      Transaction_ID: "64995",
      Prize: "₹12,000",
    },
    {
      id: 3,
      date: "02/0202022",
      name: "Ajay kumar",
      email: "Ajay1@Gmail.Com",
      phone: "2894621866",
      Transaction_ID: "64995",
      Prize: "₹12,000",
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
            <TotalAmount>
              <p>Total Amount</p>
              <span>₹ 50,000/-</span>
            </TotalAmount>
            <DownloadImage>
              <SvgIcon>
                <circle
                  id="Ellipse_307"
                  data-name="Ellipse 307"
                  cx="19"
                  cy="19"
                  r="19"
                  fill="rgba(216,174,37,0.08)"
                />
                <g
                  id="_3325114_download_icon"
                  data-name="3325114_download_icon"
                  transform="translate(7 7)"
                >
                  <path
                    id="Path_3753"
                    data-name="Path 3753"
                    d="M21,15v4a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V15"
                    fill="none"
                    stroke="#b79421"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    id="Path_3754"
                    data-name="Path 3754"
                    d="M7,10l5,5,5-5"
                    fill="none"
                    stroke="#b79421"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <line
                    id="Line_74"
                    data-name="Line 74"
                    y1="12"
                    transform="translate(12 3)"
                    fill="none"
                    stroke="#b79421"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </SvgIcon>
            </DownloadImage>
          </TopSection>
          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th> Phone</th>
                  <th>Transaction ID</th>
                  <th>Prize</th>
                </tr>
              </thead>
              <tbody>
                {donateData.map((items, index) => (
                  <tr key={index}>
                    <td>{items.date}</td>
                    <td>{items.name}</td>
                    <td>{items.email}</td>
                    <td>{items.phone}</td>
                    <td>{items.Transaction_ID}</td>
                    <td>{items.Prize}</td>
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

export default Donate;
