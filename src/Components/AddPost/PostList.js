import React, { useContext } from "react";
import styled from "styled-components";
import Searchbar from "../../Utils/Searchbar";
import img from "../../Assets/Images/Images";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";
import { useNavigate } from "react-router-dom";

const MainPostContainer = styled.div`
  width: 100%;
  display: flex;
`;
const PostCard = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #0000000f;
  border-radius: 4px;
  margin-top: 20px;
  margin-left: 20px;
`;
const Image = styled.div`
  img {
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
  p {
    font: normal normal 500 16px/21px Roboto;
    color: #2c2c2c;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;
const ButtonSec = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 7px;
`;
const Firstsec = styled.div`
  width: 136px;
  height: 37px;
  font: normal normal 500 14px/21px Poppins;
  color: #bf9d2c;
  background: #f8eecd 0% 0% no-repeat padding-box;
  border: 1px solid #e0d7b9;
  border-radius: 4px;
  padding: 9px 55px;
`;
const Secbutton = styled(Firstsec)`
  padding: 9px 33px;
  margin-left: 4px;
`;
const Combinetwo = styled.div`
  width: 100%;
`;
const ForRowCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 21px;
  padding-bottom: 20px;
`;
const SearchSec = styled.div`
  margin-top: -30px;
`;
const PostList = () => {
  const PData = useContext(Cardlistcontext);
  const usenavigate = useNavigate();
  let actualData = PData.PostData;
  const openForm = () => {
    // PData.setCardlistClose(!PData.cardlistClose);
    usenavigate("/postlist/postform");
  };

  return (
    <MainPostContainer>
      {/* <SideNav/> */}
      <Combinetwo>
        <SearchSec>
          <Searchbar openForm={openForm} />
        </SearchSec>
        <ForRowCard>
          {actualData.map((items, index) => (
            <PostCard key={index}>
              <Image>
                <img src={items.image} alt="img" />
              </Image>
              <TextContainer>
                <Users>
                  <p>{items.Jevellery} </p>
                  <img src={img.deleteicon} alt="" />
                </Users>

                <p>{items.date}</p>
                <ButtonSec>
                  <Firstsec>Edit</Firstsec>
                  <Secbutton>Republish</Secbutton>
                </ButtonSec>
              </TextContainer>
            </PostCard>
          ))}
        </ForRowCard>
      </Combinetwo>
      {/* {!PData.cardlistClose && <PostForm />} */}
    </MainPostContainer>
  );
};

export default PostList;
