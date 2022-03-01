import styled from "styled-components";
import img from "../Assets/Images/Images";
import { DebounceInput } from "react-debounce-input";

const MainContainer = styled.div`
  display: flex;
`;
const Inputdiv = styled.div`
  input {
    width: 204px;
    height: 38px;
    color: #b3b3b3;
    background: #f9f9f9 0% 0% no-repeat padding-box;
    border: none;
    border-radius: 8px 0px 0px 8px;
    padding-left: 10px;
    font: normal normal normal 13px/20px Poppins;
    &:focus-visible {
      outline: none;
    }
  }
`;

const Imgdiv = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d8ae25 0% 0% no-repeat padding-box;
  border-radius: 0px 8px 8px 0px;
  cursor: pointer;
`;

const OnlySearchbar = ({ search, searchData }) => {
  return (
    <MainContainer>
      <Inputdiv>
        <DebounceInput
          // minLength={3}
          debounceTimeout={500}
          value={search}
          onChange={searchData}
        />
      </Inputdiv>
      <Imgdiv>
        <img src={img.search} alt="search" />
      </Imgdiv>
    </MainContainer>
  );
};
export default OnlySearchbar;
