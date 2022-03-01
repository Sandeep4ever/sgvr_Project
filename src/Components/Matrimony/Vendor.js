import styled from "styled-components";
import React, { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
import images from "../../Assets/Images/Images";
import img from "../../Assets/Images/Images";
import OnlySearchbar from "../../Utils/OnlySearchbar";
import SvgIcon from "@material-ui/core/SvgIcon";
import Dropdown from "./Dropdown";
import VendorDetails from "./VendorDetails";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";

const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  /* .toast is passed to toastClassName */
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

let ml = [];
let categoriesall = [];
export const Vendor = () => {
  const { setloader } = useContext(Cardlistcontext);
  const [popup, popview] = useState(false);
  const [vendorData, setVendorData] = useState([]);
  const [showdetails, setdetails] = useState(false);
  const [idfor, setid] = useState("");
  const [Catogories, SetCatogories] = useState([]);
  const [search] = useState("");
  const [stats, setstats] = useState("Filter");
  const [categoriesSelected, setSelected] = useState([]);

  useEffect(() => {
    const getVendorDetails = async () => {
      const res = await axios.all([
        axios.get("https://sgvr-server.herokuapp.com/api/vendor/vendor", {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NjAyOTM1OSwiZXhwIjoxNjQ2MTE1NzU5fQ.Dec4gN2efLUqBfu7Y3kfqHfVfkipVkTjjKuJOBPXGpw",
          },
        }),
        axios.get("https://sgvr-server.herokuapp.com/api/vendor/categories", {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NjAyOTM1OSwiZXhwIjoxNjQ2MTE1NzU5fQ.Dec4gN2efLUqBfu7Y3kfqHfVfkipVkTjjKuJOBPXGpw",
          },
        }),
      ]);
      return res;
    };
    getVendorDetails()
      .then((res) => {
        if (res[0].status === 200) {
          categoriesall = res[1].data.data;
          console.log("category", res[1].data);

          console.log("category", res[1].data.data);
          console.log(
            "category2",
            res[1].data.data.map((item) => item)
          );

          SetCatogories(res[1].data.data.map((item) => item));
          setVendorData(res[0].data.data);
          ml = res[0].data.data;
          console.log(ml);
          setloader(false);
        } else {
          throw Error("Some Error occured while Fetching");
        }
      })
      .catch((err) => {
        if (err.message === "Network Error") {
          toast.error("check your internet connection");
        } else if (err.response.status === 404) {
          toast.error("Page Not Found");
        } else if (err.response.status === 400) {
          toast.error("Internal server Error");
        } else {
          toast.error(err.response.message);
        }
      });
  }, [setloader]);
  console.log("vendordat", vendorData);
  // console.log("catogories", Catogories);

  const setStatus = async (e, _id) => {
    let grant = e.target.innerHTML === "Approve" ? "accepted" : "rejected";
    const setst = await axios.patch(
      "https://sgvr-server.herokuapp.com/api/vendor/vendor",
      { id: _id, status: grant },
      {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NjAyOTM1OSwiZXhwIjoxNjQ2MTE1NzU5fQ.Dec4gN2efLUqBfu7Y3kfqHfVfkipVkTjjKuJOBPXGpw",
        },
      }
    );
    return setst;
  };

  const searchData = useCallback(
    async (e) => {
      console.log(e.target.value, "input");
      const vendor = await axios.get(
        `https://sgvr-server.herokuapp.com/api/vendor/search=${search}&status=${
          stats === "Filter" ? "" : stats
        }&category=${categoriesSelected.toString()}`,
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NjAyOTM1OSwiZXhwIjoxNjQ2MTE1NzU5fQ.Dec4gN2efLUqBfu7Y3kfqHfVfkipVkTjjKuJOBPXGpw",
          },
        }
      );
      return vendor;
    },
    [categoriesSelected, search, stats]
  );

  useEffect(() => {
    searchData()
      .then((res) => {
        console.log(res.data, "search");

        if (res.status === 200) {
          console.log(res);
          if (search === "") {
            setVendorData(ml);
          } else {
            res.data.msg === "Data not found"
              ? setVendorData([])
              : setVendorData(res.data.data);
          }
        } else {
          throw Error("Some Error occured while Fetching");
        }
      })
      .catch((err) => {
        if (err.message === "Network Error") {
          toast.error("check your internet connection");
        } else if (err.response?.status === 404) {
          toast.error("Page Not Found");
        } else if (err.response?.status === 400) {
          toast.error("Internal server Error");
        } else {
          toast.error(err.response?.message);
        }
      });
  }, [search, searchData]);

  return (
    <>
      <StyledToastContainer draggable={false} transition={Zoom} />
      {showdetails && <VendorDetails setdetails={setdetails} idfor={idfor} />}
      <SearchContainer>
        <OnlySearchbar search={search} searchData={searchData} />
        <SelectMenu>
          <img
            alt="filter"
            onChange={() => popview(!popup)}
            className="fil"
            src={images.filtericon}
          />
          <span onClick={() => popview(!popup)}>{stats}</span>
          <img
            alt="arrow"
            onChange={() => popview(!popup)}
            className="down"
            src={images.dropdown}
          />
          {popup && (
            <div className="pop">
              <article>
                <input
                  onChange={(e) => setstats(e.target.id)}
                  type="checkbox"
                  id="Filter"
                  name="Filter"
                  value="Filter"
                  checked={stats === "Filter" && "checked"}
                />
                <label htmlFor="Filter">Clear All</label>
              </article>
              <article>
                <input
                  onChange={(e) => setstats(e.target.id)}
                  type="checkbox"
                  id="accepted"
                  name="accepted"
                  value="accepted"
                  checked={stats === "accepted" && "checked"}
                />
                <label htmlFor="accepted">Approved</label>
              </article>
              <article>
                <input
                  onChange={(e) => setstats(e.target.id)}
                  type="checkbox"
                  id="rejected"
                  name="rejected"
                  value="rejected"
                  checked={stats === "rejected" && "checked"}
                />
                <label htmlFor="rejected">Rejected</label>
              </article>
              <article>
                <input
                  onChange={(e) => setstats(e.target.id)}
                  type="checkbox"
                  id="pending"
                  name="pending"
                  value="pending"
                  checked={stats === "pending" && "checked"}
                />
                <label htmlFor="pending">Pending</label>
              </article>
            </div>
          )}
        </SelectMenu>
        <Dropdown
          catogories={Catogories}
          catogoriesall={categoriesall}
          setSelected={setSelected}
        />
      </SearchContainer>
      <WrapCardConta>
        {" "}
        {vendorData &&
          vendorData.length > 0 &&
          vendorData.map((items, index) => (
            <CardContainer key={index}>
              <ViewIconDiv
                onClick={() => {
                  setid(items._id);
                  setdetails(true);
                }}
              >
                <SvgIcon>
                  <path
                    id="Path_8127"
                    data-name="Path 8127"
                    d="M7.366,4C2.491,4-.012,8.915-.012,8.915A8.076,8.076,0,0,0,7.366,13.83c4.971,0,7.377-4.9,7.377-4.9S12.317,4,7.366,4Zm.011,7.987A3,3,0,0,1,4.306,8.915,3,3,0,0,1,7.377,5.843a3,3,0,0,1,3.071,3.072A3,3,0,0,1,7.377,11.987Zm0-4.915A1.843,1.843,0,1,0,9.219,8.915,1.864,1.864,0,0,0,7.377,7.072Z"
                    transform="translate(0.012 -4)"
                  />
                </SvgIcon>
              </ViewIconDiv>
              <Head>{items.owner}</Head>

              <Location>
                <div>
                  <img src={img.location} alt="phone" />
                  <p>{items.city} </p>
                </div>
                <p>
                  {items.address[0]}, {items.address[1]}{" "}
                </p>
              </Location>
              <Contact>
                <PhoneNo>
                  <img src={img.phone} alt="phone" />
                  <p>{items.contactNo}</p>
                </PhoneNo>
                <Mail>
                  <img src={img.mail} alt="mail" />
                  <p>{items.emailId}</p>
                </Mail>
              </Contact>
              <div style={{ marginTop: "16px" }}>
                {items.status !== "pending" && (
                  <StatusAlert stat={items.status}>{items.status}</StatusAlert>
                )}
                <Text>
                  {items.productcategory && items.productcategory.name}.
                </Text>
              </div>
              <ButtonDiv>
                {items.status === "rejected" && (
                  <button
                    onClick={(e) => {
                      setStatus(e, items._id).then((res) =>
                        window.location.reload()
                      );
                    }}
                    className="Approve"
                  >
                    Approve
                  </button>
                )}
                {items.status === "accepted" && (
                  <button
                    onClick={(e) => {
                      setStatus(e, items._id).then((res) =>
                        window.location.reload()
                      );
                    }}
                    className="reject"
                  >
                    Reject
                  </button>
                )}
                {items.status === "pending" && (
                  <>
                    <Approve
                      key="approve"
                      onClick={(e) => {
                        setStatus(e, items._id).then((res) =>
                          window.location.reload()
                        );
                      }}
                    >
                      Approve
                    </Approve>
                    <Reject
                      key="reject"
                      onClick={(e) =>
                        setStatus(e, items._id).then((res) =>
                          window.location.reload()
                        )
                      }
                    >
                      Reject
                    </Reject>
                  </>
                )}
              </ButtonDiv>
            </CardContainer>
          ))}
      </WrapCardConta>
    </>
  );
};

export default Vendor;

const StatusAlert = styled.div`
  width: 104px;
  height: 23px;
  background: ${(props) =>
    props.stat === "rejected" ? "#DA13131A" : "#00B5431A"};
  border-radius: 4px;
  text-align: center;
  line-height: 23px;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0px;
  color: ${(props) => (props.stat === "rejected" ? "#DA1313" : "#00B543")};
  display: inline-block;
  margin-right: 10px;
  text-transform: capitalize;
`;

const SelectMenu = styled.div`
  cursor: pointer;
  position: relative;
  width: 120px;
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

  .fil {
    display: inline-block;
  }

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

const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  height: 197px;
  width: 350px;
  padding: 13px 9px 14px 13px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #0000000f;
`;

const Head = styled.header`
  margin-top: 5px;
  font: normal normal 500 16px/21px Roboto;
  color: #1a1616;
`;

const ViewIconDiv = styled.div`
  width: 15px;
  height: 10px;
  float: right;
  cursor: pointer;
  .MuiSvgIcon-root {
    color: #c5c5c5;
    transition: 0.2s ease-in;
    &:hover {
      color: #d8ae25;
    }
  }
`;

const Location = styled.div`
  display: flex;
  padding-top: 5px;
  div {
    display: flex;
    span {
      margin-left: 3px;
      font: normal normal 500 10px/13px Roboto;
      font-family: "Roboto", sans-serif;
      font-size: 10px;
      color: #a0a0a0;
    }
  }
  p {
    font: normal normal 500 11px/15px Roboto;
    font-family: "Roboto", sans-serif;
    font-size: 11px;
    color: #a0a0a0;
    padding-left: 9px;
  }
`;

const Contact = styled.div`
  display: flex;
  margin-top: 17px;
`;

const PhoneNo = styled.div`
  display: flex;
  align-items: center;
  p {
    padding-left: 5px;
    font-family: "Roboto", sans-serif;
    font-size: 11px;
    color: #8c8b9e;
  }
`;

const Mail = styled.div`
  display: flex;
  align-items: center;

  padding-left: 20px;
  p {
    padding-left: 5px;
    font-family: "Roboto", sans-serif;
    font-size: 11px;
    color: #8c8b9e;
  }
`;

const Text = styled.div`
  width: 104px;
  height: 23px;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 4px;
  text-align: center;
  line-height: 23px;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0px;
  color: #8c8b9e;
  display: inline-block;
`;

const ButtonDiv = styled.div`
  display: flex;
  margin-top: 15px;

  .Approve {
    width: 100%;
    height: 37px;
    background: #e1e1e119 0% 0% no-repeat padding-box;
    border-radius: 4px;
    text-align: center;
    font-size: 14px;
    line-height: 21px;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0px;
    font-weight: 500;
    color: #c5c5c5;
    border: none;
    cursor: pointer;

    :hover {
      background-color: #00b5431a;
      color: #00b543;
    }
  }

  .reject {
    width: 100%;
    height: 37px;
    background: #e1e1e119 0% 0% no-repeat padding-box;
    border-radius: 4px;
    text-align: center;
    font-size: 14px;
    line-height: 21px;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0px;
    font-weight: 500;
    color: #c5c5c5;
    border: none;
    cursor: pointer;

    :hover {
      background-color: #da13131a;
      color: #da1313;
    }
  }
`;

const Approve = styled.button`
  padding: 9px 52px;
  background: #d8ae25 0% 0% no-repeat padding-box;
  border-radius: 4px;
  font: normal normal medium 14px/21px Poppins;
  color: #ffffff;
  border: none;
  cursor: pointer;
  &:hover {
    background: #cda830 0% 0% no-repeat padding-box;
  }
`;

const Reject = styled.button`
  background: #e1e1e119 0% 0% no-repeat padding-box;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  padding: 9px 60px;
  margin-left: 6px;
  font: normal normal medium 14px/21px Poppins;
  color: #c5c5c5;
  transition: 0.3s ease-in;
  cursor: pointer;

  &:hover {
    background: #d8ae25 0% 0% no-repeat padding-box;
    color: #ffffff;
  }
`;

const WrapCardConta = styled.div`
  overflow: auto;
  max-height: 100%;
  display: flex;
  gap: 17px;
  flex-wrap: wrap;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #d8ae25;
    border-radius: 5px;
  }
`;
