import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OnlySearchbar from "../../Utils/OnlySearchbar";
import Pagination from "../../Utils/Pagination";
import axios from "axios";

const WrapContainer = styled.div`
  position: relative;
  height: 89.6vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const MainContainer = styled.div`
  width: 100%;
  padding-top: 26px;
`;
const WrapSearchandDrop = styled.div`
  padding-left: 30px;
  display: flex;
`;
const DropdownDiv = styled.div`
  margin-left: 22px;
`;
const TableContainer = styled.div`
  overflow-y: scroll;
  // &::-webkit-scrollbar {
  //     width: 10px;
  //   }
  &::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: red;
    border-radius: 10px;
  }
  // &::-webkit-slider-thumb {
  //     -webkit-appearance: none;
  //    background:red;
  //     border:1px solid black;

  //  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
  padding: 27px 23px 0px 30px;
  // margin-top:27px;
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
    background: #d4af371a 0% 0% no-repeat padding-box;
    height: 45px !important;
    font: normal normal normal 14px/20px Rubik;
    color: #d4af37;
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
const PaginationDiv = styled.div`
  width: 100%;
  background: #ffffff;
  position: absolute;
  bottom: 0;
`;

const Subscribed = () => {
  const [subscribedDataList, setsubscribedDataList] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://sgvr-server.herokuapp.com/api/admin/userSubscription", {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NTcwMzM2OSwiZXhwIjoxNjQ1Nzg5NzY5fQ.Izd-xsnzkX-kzUJ8RvC2heekpvVGJrWjYu7Q7yauPzM",
          },
        })
        .then((res) => {
          console.log(res.data.data);
          setsubscribedDataList(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [setsubscribedDataList]);

  return (
    <WrapContainer>
      <MainContainer>
        <WrapSearchandDrop>
          <OnlySearchbar />
          <DropdownDiv>{/* <Dropdown /> */}</DropdownDiv>
        </WrapSearchandDrop>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Date of Join</th>
                <th> Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Plan Name</th>
                <th>Expire Day</th>
              </tr>
            </thead>
            <tbody>
              {subscribedDataList &&
                subscribedDataList.map((items, index) => (
                  <tr key={index}>
                    <td>{items.dateofjoin}</td>
                    <td>{items.name}</td>
                    <td>{items.email}</td>
                    <td>{items.phone}</td>
                    <td>{items.planname}</td>
                    <td style={{ color: "green" }}>{items.expireday}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </TableContainer>
        <PaginationDiv>
          <Pagination />
        </PaginationDiv>
      </MainContainer>
    </WrapContainer>
  );
};

export default Subscribed;
