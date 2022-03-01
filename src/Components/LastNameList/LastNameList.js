import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import img from "../../Assets/Images/Images";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";
import AddLastNamepopup from "./AddLastNamepopup";
import Upload from "./upload";
import axios from "axios";
import OnlySearchbar from "../../Utils/OnlySearchbar";
// import { SvgIcon } from "@material-ui/core";

const MainContainer = styled.div`
  overflow-y: auto;
  height: 100%;
  width: 100%;
  display: flex;
`;
const NameListContainer = styled.div`
  width: 100%;
  padding: 14px 42px;
`;
const Header = styled.h4`
  font: normal normal 500 18px/20px Rubik;
  color: #202124;
`;
const SearchContainer = styled.div`
  display: flex;
  margin-top: 24px;
`;
// const Images = styled.div`
//   display: flex;
//   margin-left: 93px;
// `;
// const SvgIconDiv = styled.div`
//   width: 35px;
//   height: 35px;
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
  padding-bottom: 35px;
  margin-top: 35px;
  .btn {
    width: 74px;
    height: 33px;
    background: #dfb93e1a 0% 0% no-repeat padding-box;
    border: 1px solid #dfb93e;
    border-radius: 4px;
    font: normal normal normal 13px/20px Roboto;
    color: #dfb93e;
    cursor: pointer;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 466px;
    height: 45px;
    img {
      margin-left: 15px;
      cursor: pointer;
    }
  }
  th {
    background: #faf5e2 0% 0% no-repeat padding-box;
    font: normal normal 500 14px/20px Rubik;
    color: #d8ae25;
    height: 55px;
  }
  td,
  th {
    text-align: left;
    padding: 8px;
  }
  tr:nth-child(odd) {
    background: #f7f7f7 0% 0% no-repeat padding-box;
  }
`;
const AddIcon = styled.div`
  position: fixed;
  bottom: 56px;
  right: 56px;
  margin-right: 57px;
  margin-bottom: 10px;
  margin-top: 121px;
  float: right;
  margin-right: 15px;
  img {
    width: 58px;
    height: 58px;
    cursor: pointer;
  }
`;
const PopupCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: +100;
  top: 0;
  min-width: 100vw;
  height: 100%;
  background: rgb(0, 0, 0, 0.2);
`;
const LastNameList = () => {
  const state = useContext(Cardlistcontext);
  const uploadfile = useContext(Cardlistcontext);
  const [getApiData, setGetApiData] = useState([]);
  const [search] = useState("");

  const showLastName = () => {
    state.setCardlistClose(!state.cardlistClose);
  };

  const ActiveandDeactive = (_id) => {
    axios
      .patch("/api/lastname/lastname", {
        id: _id,
      })
      .then((response) => {
        console.log(response.data);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchData = (e) => {
    if (e.target.value === "") {
      fetchData();
      return;
    }
    axios
      .get("/api/lastname/search?keyword=" + e.target.value)
      .then((response) => {
        if (response.status === 200) {
          setGetApiData(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("lastnameget", getApiData);

  const fetchData = () => {
    axios
      .get("/api/lastname/lastname")
      .then((response) => {
        if (response.status === 200) {
          setGetApiData(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainContainer>
      {!state.cardlistClose && (
        <PopupCenter>
          <AddLastNamepopup fetchData={fetchData} />{" "}
        </PopupCenter>
      )}
      {!uploadfile.uploadFile && (
        <PopupCenter>
          {" "}
          <Upload />{" "}
        </PopupCenter>
      )}

      <NameListContainer>
        <Header>Last Name List </Header>
        <SearchContainer>
          <OnlySearchbar search={search} searchData={searchData} />
        </SearchContainer>
        <TableContainer>
          {search}
          <table>
            <thead>
              <tr>
                <th>Last Name</th>
                <th>Created Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {getApiData &&
                getApiData.length > 0 &&
                getApiData.map((items) => (
                  <tr key={items._id}>
                    <td>{items.lastname}</td>
                    <td>{items.createdAt.split("T")[0]}</td>
                    <td>
                      {items.isActive ? (
                        <button
                          className="btn"
                          onClick={() => {
                            ActiveandDeactive(items._id);
                          }}
                        >
                          Deactivate
                        </button>
                      ) : (
                        <button
                          className="btn"
                          onClick={() => {
                            ActiveandDeactive(items._id);
                          }}
                        >
                          Activate
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </TableContainer>
        {/* <p>Data Not Found</p> */}

        <AddIcon>
          <img src={img.addicon} alt="addicon" onClick={showLastName} />
        </AddIcon>
      </NameListContainer>
    </MainContainer>
  );
};
export default LastNameList;
