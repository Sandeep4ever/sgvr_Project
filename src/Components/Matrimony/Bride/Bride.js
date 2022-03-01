import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import SvgIcon from "@material-ui/core/SvgIcon";
import { useNavigate } from "react-router-dom";
import OnlySearchbar from "../../../Utils/OnlySearchbar";
import images from "../../../Assets/Images/Images";
import axios from "axios";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cardlistcontext from "../../../ContextApi/Cardlistcontext";

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

const SearchContainer = styled.div`
  display: flex;
`;

const TableContainer = styled.div`
  overflow: auto;
  height: 350px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d8ae25;
    border-radius: 5px;
  }
  margin-top: 27px;
  padding-bottom: 30px;
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
const SvgIconsDiv = styled.div`
  display: flex;
  padding-top: 7px;
  justify-content: left;
  color: #b3b3b3;
  cursor: pointer;
  &:hover {
    color: #d8ae25;
  }
`;

// let brides = [];
const Bride = () => {
  const { setloader } = useContext(Cardlistcontext);
  const [status, setstatus] = useState("SelectStatus");
  const [search, setsearch] = useState("");
  const [popup, popview] = useState(false);
  const [bridelist, setbridelist] = useState([]);
  const navigater = useNavigate();

  useEffect(() => {
    const getBrideList = async () => {
      const res = await axios(
        "https://sgvr-server.herokuapp.com/api/admin/profile?gender=female"
      );
      return res;
    };

    getBrideList()
      .then((res) => {
        if (res.status === 200) {
          // brides = res.data.data;
          setbridelist(res.data.data);
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

  useEffect(() => {
    const getBrideList = async () => {
      const res = await axios.get(
        `https://sgvr-server.herokuapp.com/api/matrimony/search?gender=female&keyword=${search}&status=${
          status === "SelectStatus" ? "" : status === "Active" ? true : false
        }`
      );
      return res;
    };

    getBrideList()
      .then((res) => {
        if (res.status === 200) {
          res.data.data === undefined
            ? setbridelist([])
            : setbridelist(res.data.data);
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
  }, [status, search]);

  let dateMonth = (dob) => {
    var d = new Date(dob);
    return (
      d.getUTCDate() +
      "/" +
      (d.getUTCMonth() + 1 >= 10
        ? d.getUTCMonth() + 1
        : "0" + (d.getUTCMonth() + 1)) +
      "/" +
      d.getUTCFullYear()
    );
  };

  // const setFilter = (g) => {
  //   if (g === "Active") {
  //     setbridelist(
  //       brides.filter((its) => {
  //         return its.isActive === true;
  //       })
  //     );
  //   } else {
  //     setbridelist(
  //       brides.filter((its) => {
  //         return its.isActive === false;
  //       })
  //     );
  //   }
  //   popview(!popup);
  // };

  return (
    <>
      <StyledToastContainer draggable={false} transition={Zoom} />
      <SearchContainer>
        <OnlySearchbar search={search} setsearch={setsearch} />
        <SelectMenu>
          <span onClick={() => popview(!popup)}>{status}</span>
          <img
            alt="arrow"
            onClick={() => popview(!popup)}
            className="down"
            src={images.dropdown}
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
      </SearchContainer>
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Date of Join</th>
              <th>Bride Name</th>
              <th>Age</th>
              <th>Profession</th>
              <th>Father Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bridelist.map((items, index) => (
              <tr key={index}>
                <td>{dateMonth(items.dob)}</td>
                <td>{items.fname}</td>
                <td>{items.age}</td>
                <td>{items.jobType}</td>
                <td>Some name</td>
                {items.isActive === true ? (
                  <td style={{ color: "green" }}>Active</td>
                ) : (
                  <td style={{ color: "red" }}>Deactive</td>
                )}
                <td>
                  <SvgIconsDiv
                    onClick={() =>
                      navigater(`/matrimonylist/bride/${items._id}`)
                    }
                  >
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </>
  );
};

export default Bride;
