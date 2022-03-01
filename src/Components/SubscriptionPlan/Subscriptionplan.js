import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import img from "../../Assets/Images/Images";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";
import SvgIcon from "@material-ui/core/SvgIcon";
import Pagination from "../../Utils/Pagination";
import AddDiscount from "./AddDiscount";
import SubscriptionForm from "./SubscriptionForm";
import axios from "axios";
import { NavLink } from "react-router-dom";

const WrapContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  align-content: center;
  justify-content: flex-start;
`;
const MainSubscriptionContainer = styled.div`
  width: 100%;
`;
const Header = styled.div`
  font: normal normal 500 18px/20px Rubik;
  color: #202124;
`;
const CreateButton = styled.div`
  width: 144px;
  height: 38px;
  display: flex;
  cursor: pointer;
  background: #d8ae25 0% 0% no-repeat padding-box;
  border-radius: 8px;
  padding: 9px 12px;
  margin-top: 25px;
  p {
    font: normal normal 500 14px/21px Poppins;
    color: #ffffff;
  }
  span {
    padding-top: 2px;
    img {
      width: 16px;
      height: 16px;
      margin-left: 10px;
    }
  }
`;
const TableContainer = styled.div`
  /* overflow: auto; */
  height: 400px;
  margin-top: 25px;
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    img {
      margin-left: 15px;
      cursor: pointer;
    }
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
const SvgIconsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #b3b3b3;
  cursor: pointer;
  a {
    color: #b3b3b3;
  }
  div {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    &:hover {
      color: #d8ae25;
      background: #d4af371a 0% 0% no-repeat padding-box;
    }
  }

  .MuiSvgIcon-root {
    overflow: inherit;
  }
`;

const PaginationDiv = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  background: white;
`;

const Wrapcreateandlist = styled.div`
  width: 769px;
  padding: 37px 42px;
`;

const WrapSubscription = styled.div`
  // width:100%;
`;

const Subscriptionplan = () => {
  const [subscriptionData, setsubscriptionData] = useState([{}]);
  const [currentId, setcurrentId] = useState();

  const state = useContext(Cardlistcontext);
  const showDiscountpage = (id) => {
    state.setshowGroomDetails(!state.showGroomDetails);
    setcurrentId(id);
    console.log("showDiscountpage");
  };

  const openSubscriptionForm = () => {
    state.setShowSubscriptionForm(!state.showSubscriptionForm);
  };

  const FetchData = () => {
    axios
      .get("https://sgvr-server.herokuapp.com/api/admin/subscription", {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NTcwMzM2OSwiZXhwIjoxNjQ1Nzg5NzY5fQ.Izd-xsnzkX-kzUJ8RvC2heekpvVGJrWjYu7Q7yauPzM",
        },
      })
      .then((response) => {
        console.log("subscription", response.status);

        console.log("subscription", response.data.data);
        setsubscriptionData(response.data.data);
      });
  };

  useEffect(() => {
    FetchData();
  }, []);

  const SubscriptionFormtype = "save";
  return (
    <WrapContainer>
      {state.showGroomDetails && (
        <AddDiscount id={currentId} subscriptionData={subscriptionData} />
      )}
      {state.showSubscriptionForm && (
        <WrapSubscription>
          {" "}
          <SubscriptionForm
            FetchData={FetchData}
            type={SubscriptionFormtype}
          />{" "}
        </WrapSubscription>
      )}

      {!state.showSubscriptionForm && (
        <MainSubscriptionContainer>
          <Wrapcreateandlist>
            <Header>Subscription Plane</Header>
            <CreateButton onClick={openSubscriptionForm}>
              <p>Create Plane</p>
              <span>
                <img src={img.plusicon} alt="addimage" />
              </span>
            </CreateButton>
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>Plane Name</th>
                    <th>Plane Prize</th>
                    <th>Validity</th>
                    <th> Current Discount</th>
                    <th> Discount Prize</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {subscriptionData.map((items, index) => (
                    <tr key={index}>
                      <td>{items.planName}</td>
                      <td>{items.price}</td>
                      <td>{items.validity}</td>
                      <td>{items.validity}</td>
                      <td>{items.description}</td>
                      <td>
                        <SvgIconsDiv>
                          <NavLink to={`/editsubscriptionForm/${items._id}`}>
                            <div>
                              <SvgIcon>
                                <path
                                  id="Icon_awesome-edit"
                                  data-name="Icon awesome-edit"
                                  d="M12.516,2.59l2.8,2.8a.3.3,0,0,1,0,.429L8.53,12.613l-2.885.32a.6.6,0,0,1-.668-.668L5.3,9.38,12.087,2.59A.3.3,0,0,1,12.516,2.59Zm5.036-.712L16.035.361a1.216,1.216,0,0,0-1.716,0l-1.1,1.1a.3.3,0,0,0,0,.429l2.8,2.8a.3.3,0,0,0,.429,0l1.1-1.1a1.216,1.216,0,0,0,0-1.716Zm-5.614,8.888v3.165H1.99V3.983H9.133A.382.382,0,0,0,9.4,3.874l1.243-1.243a.373.373,0,0,0-.264-.637H1.492A1.493,1.493,0,0,0,0,3.486V14.428a1.493,1.493,0,0,0,1.492,1.492H12.435a1.493,1.493,0,0,0,1.492-1.492V9.523a.374.374,0,0,0-.637-.264L12.046,10.5A.382.382,0,0,0,11.938,10.766Z"
                                  transform="translate(8.472 9.523)"
                                />
                              </SvgIcon>
                            </div>
                          </NavLink>

                          <div onClick={() => showDiscountpage(items._id)}>
                            <SvgIcon>
                              <g
                                id="_103177_see_watch_view_eye_icon_1_"
                                data-name="103177_see_watch_view_eye_icon (1)"
                                transform="translate(7 11)"
                              >
                                <g id="Group_5000" data-name="Group 5000">
                                  <path
                                    id="Path_8127"
                                    data-name="Path 8127"
                                    d="M10,4C3.384,4-.012,10.67-.012,10.67A10.96,10.96,0,0,0,10,17.34c6.745,0,10.011-6.644,10.011-6.644S16.719,4,10,4Zm.015,10.838A4.07,4.07,0,0,1,5.847,10.67,4.07,4.07,0,0,1,10.015,6.5a4.07,4.07,0,0,1,4.167,4.169A4.07,4.07,0,0,1,10.015,14.838Zm0-6.67a2.5,2.5,0,1,0,2.5,2.5A2.529,2.529,0,0,0,10.015,8.169Z"
                                    transform="translate(0.012 -4)"
                                  />
                                </g>
                              </g>
                            </SvgIcon>
                          </div>
                        </SvgIconsDiv>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableContainer>
          </Wrapcreateandlist>
          <PaginationDiv>
            <Pagination />
          </PaginationDiv>
        </MainSubscriptionContainer>
      )}
    </WrapContainer>
  );
};
export default Subscriptionplan;
