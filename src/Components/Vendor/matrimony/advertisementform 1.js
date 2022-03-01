import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Searchbar from "../../../Utils/Searchbar";
import img from "../../../Assets/Images/Images";
// import Cardlistcontext from "../../../ContextApi/Cardlistcontext";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../Utils/Pagination";
import { useEffect } from "react";
import axios from "axios";

const MainPostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  position: relative;
  height: 100%;
  overflow: auto;
`;

const PostCard = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #0000000f;
  border-radius: 4px;
  margin-top: 20px;
  margin-right: 16px;
`;

const Image = styled.div`
  img {
    cursor: pointer;
    width: 298px;
    height: 141px;
  }
`;

const TextContainer = styled.div`
  padding: 11px;
  p {
    font: normal normal medium 11px/15px Roboto;
    color: #a0a0a0;
  }
`;

const Users = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  p {
    font-size: 16px;
    line-height: 21px;
    font-family: "Roboto", sans-serif;
    color: #2c2c2c;
  }
  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const ButtonSec = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 7px;
`;

const Firstsec = styled.div`
  width: 136px;
  height: 37px;
  background: ${(props) => (props.stats ? "#C5C5C51A" : "#DFB93E")};
  border-radius: 4px;
  border: none;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 37px;
  letter-spacing: 0px;
  font-family: "Poppins", sans-serif;
  color: ${(props) => (props.stats ? "#A3A3A3" : "#FFFFFF")};
  cursor: pointer;
`;

const Secbutton = styled(Firstsec)`
  width: 136px;
  height: 37px;
  background: #c5c5c51a 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: none;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 37px;
  letter-spacing: 0px;
  font-family: "Poppins", sans-serif;
  color: #a3a3a3;
  cursor: pointer;
`;

const ForRowCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 34px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d8ae25;
    border-radius: 5px;
  }
`;

const Popup = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background: #2c2c2c20 0% 0% no-repeat padding-box;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  article {
    position: relative;

    .close {
      position: absolute;
      top: 19px;
      right: 19px;
    }

    .items {
      padding: 10px;
      background-color: #ffffff;
    }
  }
`;

var t;
const Advertisement = () => {
  const [data, setdata] = useState();
  const [popup, setpopup] = useState(false);
  // const PData = useContext(Cardlistcontext);
  const [search, setsearch] = useState();
  const usenavigate = useNavigate();
  // let actualData = PData.PostData;
  const openForm = () => {
    // PData.setCardlistClose(!PData.cardlistClose);
    usenavigate("Advertisement_form");
  };

  useEffect(() => {
    const statusChange = async () => {
      const call = await axios.get("http://localhost:2311/api/ad/ad", {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIwYmE5NDg3OWYzZDIzYTA2NWJiMDUzIiwidXNlclR5cGUiOiJWIiwiaWF0IjoxNjQ1MTI0Nzk3LCJleHAiOjE2NDUxMjgzOTd9.WPRxh9XH0mIIzOaI32SpYbZkLTAgdwR6vt3v1KsNiO4",
        },
      });
      return call;
    };
    statusChange()
      .then((res) => {
        t = res.data.ads;
      })
      .catch((re) => console.log(re));
  }, []);

  const searcher = useCallback(async () => {
    const rest = await axios.get(
      `https://sgvr-server.herokuapp.com/api/ad/search-ad?keyword=${search}`,
      {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIwYmE5NDg3OWYzZDIzYTA2NWJiMDUzIiwidXNlclR5cGUiOiJWIiwiaWF0IjoxNjQ1MTI0Nzk2LCJleHAiOjE2NDUxMjgzOTZ9.yTOIzuut0CEnw3AC7Sw9s4UtHP3x1WSwB-iFfSavvHA",
        },
      }
    );
    return rest;
  }, [search]);

  useEffect(() => {
    searcher().then((res) =>
      setdata(res.data.msg === "Keyword not available" ? t : res.data.ads)
    );
  }, [searcher]);
  useEffect(() => {
    setdata(t);
  }, []);

  const dateparse = (dat) => {
    var t = new Date(dat);
    return `${t.getDay()}/${t.getMonth()}/${t.getFullYear()}`;
  };

  const publish = async (_id) => {
    const dir = await axios.patch(
      "http://localhost:2311/api/ad/ad-status",
      {
        adId: _id,
      },
      {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIwYmE5NDg3OWYzZDIzYTA2NWJiMDUzIiwidXNlclR5cGUiOiJWIiwiaWF0IjoxNjQ1MTI0Nzk3LCJleHAiOjE2NDUxMjgzOTd9.WPRxh9XH0mIIzOaI32SpYbZkLTAgdwR6vt3v1KsNiO4",
        },
      }
    );
    return dir;
  };

  return (
    <>
      {popup && (
        <Popup>
          <article>
            <img src={img.Showcase} className="items" alt="schowcase" />
            <img
              onClick={() => setpopup(false)}
              src={img.close3}
              alt="dsfs"
              className="close"
            />
          </article>
        </Popup>
      )}
      <MainPostContainer>
        <Searchbar search={search} setsearch={setsearch} openForm={openForm} />
        <ForRowCard>
          {data !== undefined &&
            data.map((items, index) => (
              <PostCard key={index}>
                <Image>
                  <img
                    onClick={() => setpopup(true)}
                    src={`https://sgvr-server.herokuapp.com/api/get-images?key=${items.images}`}
                    alt="img"
                  />
                </Image>
                <TextContainer>
                  <Users>
                    <p>{items.name}</p>
                  </Users>
                  <p>{dateparse(items.createdAt)}</p>
                  <ButtonSec>
                    <Firstsec
                      onClick={() => {
                        publish(items._id);
                        window.location.reload(false);
                      }}
                      stats={items.isActive}
                    >
                      {items.isActive ? "Published" : "Publish"}
                    </Firstsec>
                    <Secbutton
                      onClick={() => {
                        usenavigate(`/Advertisement/${items._id}`);
                      }}
                    >
                      Edit
                    </Secbutton>
                  </ButtonSec>
                </TextContainer>
              </PostCard>
            ))}
        </ForRowCard>
        <Pagination />
      </MainPostContainer>
    </>
  );
};

export default Advertisement;
