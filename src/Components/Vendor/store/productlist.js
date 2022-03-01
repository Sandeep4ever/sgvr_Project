import styled from "styled-components";
import Searchbar from "../../../Utils/OnlySearchbar";
import img from "../../../Assets/Images/Images";
import React, { useContext, useState, useEffect } from "react";
import Cardlistcontext from "../../../ContextApi/Cardlistcontext";
import Pageination from "../../../Utils/Pagination";
import { useNavigate } from "react-router-dom";
import getData from "../../ApiService/apiRelatedOperations";
import images from "../../../Assets/Images/Images";

const Midpan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  width: 100%;
  height: 100%;
  overflow: auto;

  h1 {
    margin-top: 23px;
    margin-left: 33px;
    text-align: left;
    font-size: 16px;
    line-height: 25px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0px;
    color: #000000;
  }
`;

const SearchWrap = styled.div`
  margin-top: 25px;
  max-width: 100%;
  margin-left: 33px;
  margin-right: 33px;
  margin-bottom: 26px;
  display: flex;
  flex-direction: row;
`;

const CreatePart = styled.div`
  margin-left: auto;
  display: inline-block;
  width: 112px;
  height: 38px;
  background: #d8ae251a 0% 0% no-repeat padding-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    color: #d8ae25;
    cursor: pointer;
  }

  img {
    width: 16px;
    height: 16px;
    margin-left: 16px;
    cursor: pointer;
  }
`;
const CardWrap = styled.div`
  overflow: auto;
  margin-left: 33px;
  display: flex;
  flex-wrap: wrap;
  background: #fcfcfc 0% 0% no-repeat padding-box;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d8ae25;
    border-radius: 5px;
  }

  button {
    cursor: pointer;
    width: 100%;
    height: 37px;
    text-align: center;
    background: #f8eecd 0% 0% no-repeat padding-box;
    border: 1px solid #e0d7b9;
    border-radius: 4px;
    border: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0px;
    color: #bf9d2c;
    font-family: "Poppins", sans-serif;

    :hover {
      background: #d8ae25 0% 0% no-repeat padding-box;
      color: #ffffff;
    }
  }
`;

const SelectMenu = styled.div`
  cursor: pointer;
  position: relative;
  width: 145px;
  height: 38px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #a3a3a3;
  border-radius: 4px;
  margin-left: 15px;
  font: normal normal normal 12px/20px Poppins;
  letter-spacing: 0px;
  color: #979797;
  text-transform: capitalize;
  line-height: 38px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .down {
    height: 7.25px;
    width: 12.68px;
    display: inline-block;
  }

  div {
    box-shadow: 5px 10px 50px #0000000f;
    position: absolute;
    top: 43px;
    left: 0;
    width: 145px;
    background: #ffffff 0% 0% no-repeat padding-box;
    text-align: left;
    font: normal normal normal 12px/20px Poppins;
    letter-spacing: 0px;
    color: #c3c3c3;
    text-transform: capitalize;

    article {
      line-height: 41px;
      padding-left: 15px;
      width: 100%;
      display: flex;
      align-items: center;
    }
    input[type="checkbox"] {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
`;

const ProductList = () => {
  const { getCommunityData, setGetCommunityData, setCommunityType } =
    useContext(Cardlistcontext);
  // const [details, setdetails] = useState(false);
  const [status, setstatus] = useState("Select Category");
  const [popup, popview] = useState(false);
  let navigate = useNavigate();
  // const [setCurrentId] = useState();

  useEffect(() => {
    // const getData = async () => {
    //   let res = await axios(
    //     "https://sgvr-server.herokuapp.com/api/community/community"
    //   );
    //   console.log(res.data.data);
    //   setGetCommunityData(res.data.data);
    // };
    // getData();
    //for card data get method
    const Commiteeurl =
      "https://sgvr-server.herokuapp.com/api/community/community";
    getData(Commiteeurl)
      .then((data) => {
        const response = data.data;
        setGetCommunityData(response);
        console.log("memberlengthindash", data?.data?.member?.length);
      })
      .catch((error) => console.error("got error", error));
    // for Images hit get method
    // let Imagesurl =
    //   "https://sgvr-server.herokuapp.com/api/get-images?key=temp/images/post-61caf3c7c995f96594cd521c-0";
    // getData(Imagesurl).then((data) => console.log(data));
  }, [setGetCommunityData]);

  // const showCommiteeDetails = (_id) => {
  //   setdetails(!details);
  //   setCurrentId(_id);
  // };
  const openCreateForm = () => {
    setCommunityType("Save");
    navigate("/community/createvender");
  };

  // const handleUpdate = (id) => {
  //   setCommunityType("update");
  //   navigate(`/community/updatecommitteeform/${id}`);
  // };
  // const handleStatus = (id) => {
  //   setGetCommunityData(
  //     getCommunityData.map((el) => {
  //       if (el._id === id) {
  //         el["status"] = !el.status;
  //         return el;
  //       }
  //       return el;
  //     })
  //   );
  // };

  return (
    <Midpan>
      <h1>Onboarding Product list</h1>
      <SearchWrap>
        <Searchbar />
        <SelectMenu>
          <span onClick={() => popview(!popup)}>{status}</span>
          <img
            alt="arrow"
            onClick={() => popview(!popup)}
            className="down"
            src={img.dropdown}
          />
          {popup && (
            <div className="pop">
              <article>
                <input
                  onClick={(e) => setstatus(e.target.id)}
                  type="checkbox"
                  id="SelectStatus"
                  name="SelectStatus"
                  value="SelectStatus"
                  checked={status === "SelectStatus" && "checked"}
                />
                <label htmlFor="SelectStatus">Clear All</label>
              </article>
              <article>
                <input
                  onClick={(e) => setstatus(e.target.id)}
                  type="checkbox"
                  id="Active"
                  name="Active"
                  value="Active"
                  checked={status === "Active" && "checked"}
                />
                <label htmlFor="accepted">Active</label>
              </article>
              <article>
                <input
                  onClick={(e) => setstatus(e.target.id)}
                  type="checkbox"
                  id="Deactive"
                  name="Deactive"
                  value="Deactive"
                  checked={status === "Deactive" && "checked"}
                />
                <label htmlFor="active">Deactive</label>
              </article>
            </div>
          )}
        </SelectMenu>
        <CreatePart onClick={openCreateForm}>
          <p>Create</p>
          <img src={img.plus} alt="plusimg" />
        </CreatePart>
      </SearchWrap>
      <CardWrap>
        {getCommunityData &&
          getCommunityData.map((items, _id) => (
            <CardContainer key={items._id}>
              <ContenDiv>
                <img src={img.avatar} alt="product" />
                <Container>
                  {/* <ViewIconDiv onClick={() => showCommiteeDetails(items._id)}>
                  <SvgIcon>
                    <path
                      id="Path_8127"
                      data-name="Path 8127"
                      d="M7.366,4C2.491,4-.012,8.915-.012,8.915A8.076,8.076,0,0,0,7.366,13.83c4.971,0,7.377-4.9,7.377-4.9S12.317,4,7.366,4Zm.011,7.987A3,3,0,0,1,4.306,8.915,3,3,0,0,1,7.377,5.843a3,3,0,0,1,3.071,3.072A3,3,0,0,1,7.377,11.987Zm0-4.915A1.843,1.843,0,1,0,9.219,8.915,1.864,1.864,0,0,0,7.377,7.072Z"
                      transform="translate(0.012 -4)"
                    />
                  </SvgIcon>
                </ViewIconDiv> */}
                  <img src={images.trash} alt="trash_img" />
                  <h2>Chetmani jewellers</h2>
                  <h3>Gold Neckless</h3>
                  <span>₹ 12,000</span>
                  <div>
                    <p className="phno">546865561</p>
                    <p className="stocks">10 Stock</p>
                  </div>
                </Container>
              </ContenDiv>
              <button>Edit</button>
            </CardContainer>
          ))}
      </CardWrap>
      <Pgdiv>
        <Pageination />
      </Pgdiv>
    </Midpan>
  );
};

export default ProductList;

const ContenDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;

  img {
    border-radius: 8px;
    height: 102px;
    width: 102px;
    margin-right: 13px;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  div {
  }

  h2 {
    text-align: left;
    font-size: 16px;
    line-height: 21px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0px;
    color: #1a1616;
    margin-bottom: 4px;
  }

  h3 {
    text-align: left;
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0px;
    color: #cea51e;
    margin-bottom: 8px;
  }

  span {
    display: block;
    text-align: left;
    line-height: 15px;
    font-size: 11px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0px;
    color: #02a343;
    margin-bottom: 10px;
  }

  .phno {
    padding-left: 14px;
    padding-right: 14px;
    height: 23px;
    width: 83px;
    display: inline-block;
    background: #f2f2f2 0% 0% no-repeat padding-box;
    border-radius: 4px;
    text-align: center;
    font-weight: 500;
    font-size: 11px;
    line-height: 23px;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0px;
    color: #8c8b9e;
    opacity: 1;
    margin-right: 8px;
  }

  .stocks {
    height: 23px;
    width: 65px;
    display: inline-block;
    background: #d8ae251a 0% 0% no-repeat padding-box;
    border-radius: 4px;
    text-align: center;
    font-size: 11px;
    line-height: 23px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    letter-spacing: 0px;
    color: #d8ae25;
  }
  img {
    position: absolute;
    top: 0px;
    right: 0px;
    height: 15.11px;
    width: 13.6px;
  }
`;

const CardContainer = styled.div`
  width: 350px;
  height: 183px;
  margin: 0px 8px;
  margin-bottom: 16px;
  padding: 15px 10px 13px 11px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #0000000f;
`;

// const Head = styled.header`
//   margin-top: 5px;
//   font: normal normal 500 16px/21px Roboto;
//   color: #1a1616;
// `;
// const ViewIconDiv = styled.div`
//   width: 15px;
//   height: 10px;
//   float: right;
//   cursor: pointer;
//   .MuiSvgIcon-root {
//     color: #c5c5c5;
//     transition: 0.2s ease-in;
//     &:hover {
//       color: #d8ae25;
//     }
//   }
// `;
// const Location = styled.div`
//   display: flex;
//   padding-top: 5px;
//   div {
//     display: flex;
//     span {
//       margin-left: 3px;
//       font-weight: 500;
//       font-family: "Roboto", sans-serif;
//       font-size: 10px;
//       color: #a0a0a0;
//     }
//   }
//   p {
//     font: normal normal 500 11px/15px Roboto;
//     font-family: "Roboto", sans-serif;
//     font-size: 11px;
//     color: #a0a0a0;
//     padding-left: 9px;
//   }
// `;

// const Contact = styled.div`
//   display: flex;
//   margin-top: 17px;
// `;

// const PhoneNo = styled.div`
//   display: flex;
//   align-items: center;
//   p {
//     padding-left: 5px;
//     font-family: "Roboto", sans-serif;
//     font-size: 11px;
//     color: #8c8b9e;
//   }
// `;

// const Mail = styled.div`
//   display: flex;
//   align-items: center;

//   padding-left: 20px;
//   p {
//     padding-left: 5px;
//     font-family: "Roboto", sans-serif;
//     font-size: 11px;
//     color: #8c8b9e;
//   }
// `;

// const Text = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding-top: 16px;

//   div {
//     width: 87px;
//     height: 23px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background: #dfb93e0d 0% 0% no-repeat padding-box;
//     border-radius: 4px;
//     cursor: pointer;
//     p {
//       font: normal normal medium 11px/15px Roboto;
//       font-family: "Roboto", sans-serif;
//       color: #dfb93e;
//       font-size: 11px;
//     }
//   }
// `;

// const ButtonDiv = styled.div`
//   display: flex;
//   margin-top: 15px;
// `;

// const Approve = styled.button`
//   /* padding: 9px 52px; */
//   width: 164px;
//   height: 37px;
//   background: #d8ae25 0% 0% no-repeat padding-box;
//   border-radius: 4px;
//   font: normal normal medium 14px/21px Poppins;
//   color: #ffffff;
//   border: none;
//   cursor: pointer;
//   &:hover {
//     background: #cda830 0% 0% no-repeat padding-box;
//   }
// `;

// const Reject = styled.button`
//   background: #e1e1e119 0% 0% no-repeat padding-box;
//   border: 1px solid #e1e1e1;
//   border-radius: 4px;
//   /* padding: 9px 60px; */
//   width: 164px;
//   height: 37px;
//   margin-left: 6px;
//   font: normal normal medium 14px/21px Poppins;
//   color: #c5c5c5;
//   transition: 0.3s ease-in;
//   cursor: pointer;

//   &:hover {
//     background: #d8ae25 0% 0% no-repeat padding-box;
//     color: #ffffff;
//   }
// `;

const Pgdiv = styled.div`
  width: 100%;
  margin-bottom: 0px;
  margin-top: auto;
`;
