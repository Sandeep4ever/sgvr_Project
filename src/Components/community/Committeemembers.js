import styled from "styled-components";
import Pagination from "../../Utils/Pagination";
import OnlySearchbar from "../../Utils/OnlySearchbar";
import { NavLink, Outlet, useParams } from "react-router-dom";
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

const Committemembers = () => {
  const state = useContext(Cardlistcontext);
  const [currentCommeteeId, setcurrentCommeteeId] = useState();
  const [search, setsearch] = useState("");
  const { id } = useParams();
  if (currentCommeteeId === undefined) {
    setcurrentCommeteeId(id);
  } else {
    console.log("id fetching error");
  }

  const searchData = (e) => {
    setsearch(e.target.value);
    const url = `https://sgvr-server.herokuapp.com/api/community/search-members?keyword=${e.target.value}&communityId=${id}&limit=1&page=1`;
    axios
      .get(url, {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NjAyOTM1OSwiZXhwIjoxNjQ2MTE1NzU5fQ.Dec4gN2efLUqBfu7Y3kfqHfVfkipVkTjjKuJOBPXGpw",
        },
      })
      .then((resp) => {
        console.log("seacrhapi", resp.status);
        if (resp.data.data && resp.data.data.length === 0) {
          state.setCommittememberData(resp.data.data);
        } else if (resp.data.data && resp.data.data.length > 0) {
          state.setCommittememberData(resp.data.data);
        } else {
          throw Error("Some Error occured while Fetching");
        }
      })
      .catch((err) => {
        // if (err.message === "Network Error") {
        //   toast.error("check your internet connection");
        // } else if (err.response.status === 404) {
        //   toast.error("Page Not Found");
        // } else if (err.response.status === 202) {
        //   toast.error("communities not found");
        // } else if (err.response.status === 400) {
        //   toast.error("Internal server Error");
        // } else {
        //   toast.error(err.response.message);
        // }
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
            to="/community/members/newmembers"
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
            to={`/community/members/comittemembers/${currentCommeteeId}`}
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

export default Committemembers;
