import React, { useContext } from "react";
import styled from "styled-components";
import OnlySearchbar from "../../Utils/OnlySearchbar";
import img from "../../Assets/Images/Images";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";
import Pagination from "../../Utils/Pagination";
import SvgIcon from "@material-ui/core/SvgIcon";
import PaymentDetails from "./PaymentDetails";

const MainPaymentContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 89.5vh;
`;
const WrapPaymentStatus = styled.div`
  width: 100%;
  padding: 26px 36px 0 42px;
`;
const FirstContainer = styled.div`
  width: 100%;
`;
const Header = styled.h6`
  font: normal normal 500 18px/20px Rubik;
  color: #202124;
`;
const SearchSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SearchAndCategory = styled.div`
  display: flex;
  margin-top: 23px;
  select {
    margin-left: 18px;
    width: 145px;
    height: 38px;
    font: normal normal normal 12px/20px Poppins;
    color: #747474;
    border: none;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #747474;
    border-radius: 4px;
    &:focus-visible {
      outline: none;
    }
  }
`;
const Datediv = styled.div`
  margin-left: 5px;
  input {
    width: 145px;
    height: 38px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #747474;
    border-radius: 4px;
    &:focus-visible {
      outline: none;
    }
  }
`;
const DownloadImg = styled.div``;
const TableContainer = styled.div`
  overflow: auto;
  height: 335px;
  margin-top: 27px;
  padding-bottom: 20px;
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
    position: sticky;
    top: 0;
    background: #f5f0de 0% 0% no-repeat padding-box;
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
  }
  tr:nth-child(odd) {
    background: #f7f7f7 0% 0% no-repeat padding-box;
  }
`;

const SvgIconsDiv = styled.div`
  width: 28px;
  height: 28px;
  padding-top: 7px;
  color: #b3b3b3;
  cursor: pointer;
  &:hover {
    color: #d8ae25;
  }
`;

const PaginationContainer = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  background-color: #ffffff;
`;

const PaymentStatus = () => {
  const paymentstate = useContext(Cardlistcontext);
  const openPaymentDetails = () => {
    paymentstate.setopenpaymentDetails(!paymentstate.openpaymentDetails);
  };
  return (
    <>
      <MainPaymentContainer>
        {paymentstate.openpaymentDetails && <PaymentDetails />}
        <WrapPaymentStatus>
          <FirstContainer>
            <Header>Activities</Header>
            <SearchSection>
              <SearchAndCategory>
                <OnlySearchbar />
                <Datediv>
                  <input type="date" id="dates" name="date" />
                </Datediv>
              </SearchAndCategory>
              <DownloadImg>
                <img src={img.downloadImg2} alt="Img" />
              </DownloadImg>
            </SearchSection>
          </FirstContainer>
          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Plan</th>
                  <th>Payment Amount</th>
                  <th>Payment Mode</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {paymentstate.paymentlistData.map((items, index) => (
                  <tr key={index}>
                    <td>{items.date}</td>
                    <td>{items.shopname}</td>
                    <td>{items.shopcategory}</td>
                    <td>{items.productname}</td>
                    <td style={{ color: "green" }}>{items.paymentamount}</td>
                    <td>{items.paymentmode}</td>
                    <td>
                      <SvgIconsDiv onClick={openPaymentDetails}>
                        <SvgIcon>
                          <g id="Group_5000" data-name="Group 5000">
                            <path
                              id="Path_8127"
                              data-name="Path 8127"
                              d="M7.366,4C2.491,4-.012,8.915-.012,8.915A8.076,8.076,0,0,0,7.366,13.83c4.971,0,7.377-4.9,7.377-4.9S12.317,4,7.366,4Zm.011,7.987A3,3,0,0,1,4.306,8.915,3,3,0,0,1,7.377,5.843a3,3,0,0,1,3.071,3.072A3,3,0,0,1,7.377,11.987Zm0-4.915A1.843,1.843,0,1,0,9.219,8.915,1.864,1.864,0,0,0,7.377,7.072Z"
                              transform="translate(0.012 -4)"
                            />
                          </g>
                        </SvgIcon>
                      </SvgIconsDiv>
                      {/* <img src={img.view2} alt="view" /> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableContainer>
        </WrapPaymentStatus>
      </MainPaymentContainer>
      <PaginationContainer>
        <Pagination />
      </PaginationContainer>
    </>
  );
};
export default PaymentStatus;
