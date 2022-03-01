import styled from "styled-components";
import Pagination from "../../Utils/Pagination";
import OnlySearchbar from "../../Utils/OnlySearchbar";
import { NavLink, Outlet } from "react-router-dom";
import { useState, useContext } from "react";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";
import axios from "axios";

const Contentdiv = styled.div`
  flex-grow: 1;
  margin: 25px 25px;
  margin-bottom: 0px;
`;

const Wrapperdiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SearchWrap = styled.div`
  height: 38px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  a {
    text-decoration: none;
    width: 140px;
    height: 100%;
    color: #a3a3a3;
    text-align: center;
    border-bottom: solid 3px #c5c5c5;
    line-height: 38px;
  }
`;

const CommiteMembers = () => {
  const { setcommitteMemberData } = useContext(Cardlistcontext);
  const [search, setsearch] = useState("");

  const searchData = (e) => {
    let url;
    if (e.target.value.length > 3) {
      url = `https://sgvr-server.herokuapp.com/api/community/search-members?keyword=${e.target.value}&communityId=61f77eb591ce9bd27044e8a6&limit=1&page=1`;
    } else if (e.target.value.length === 0) {
      url = `https://sgvr-server.herokuapp.com/api/community/search-members?keyword=${e.target.value}&communityId=61f77eb591ce9bd27044e8a6&limit=1&page=1`;

      return;
    } else {
      // console.log("character less then 3 not fetching data");
      return;
    }
    setsearch(e.target.value);
    axios
      .get(url)
      .then((resp) => {
        console.log("seacrhapi", resp.status);
        console.log("seacrhdata", resp.data);

        if (resp.data.data && resp.data.data.length === 0) {
          setcommitteMemberData(resp.data.data);
        } else if (resp.data.data && resp.data.data.length > 0) {
          setcommitteMemberData(resp.data.data);
        } else {
          throw Error("Some Error occured while Fetching");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrapperdiv>
      <Contentdiv>
        <SearchWrap>
          <div style={{ marginRight: "21.5px" }}>
            <OnlySearchbar
              style={{ paddingRight: "21px" }}
              searchData={searchData}
              search={search}
            />
          </div>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#DFB93E" : "#C5C5C5",
              borderBottom: isActive
                ? "solid 3px #DFB93E"
                : "solid 3px #C5C5C5",
            })}
            to="/communityAdminDashboard/members/newmembers"
          >
            New Members
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#DFB93E" : "#C5C5C5",
              borderBottom: isActive
                ? "solid 3px #DFB93E"
                : "solid 3px #C5C5C5",
            })}
            to="/communityAdminDashboard/members/comittemembers"
          >
            Comittee Members
          </NavLink>
        </SearchWrap>
        <Outlet />
      </Contentdiv>
      <Pagination />
    </Wrapperdiv>
  );
};

export default CommiteMembers;
