import styled from "styled-components";

const TotalWrap = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: #ffffff 0% 0% no-repeat padding-box;
  background-image: url("Mask Group 138.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    position: absolute;
    top: 36px;
    left: 48px;
  }
`;
const CenterDiv = styled.div`
  padding: 114px 64px 113px 64px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 10px #0000000d;
  margin: auto;
  min-width: 466px;
  display: inline-block;

  h1 {
    text-align: left;
    font-size: 26px;
    line-height: 30px;
    font-family: "Product Sans", sans-serif;
    font-weight: bold;
    letter-spacing: 0px;
    color: #b98c13;
    margin-bottom: 8px;
  }

  h2 {
    text-align: left;
    font-size: 16px;
    line-height: 30px;
    font-family: "Product Sans";
    font-weight: normal;
    letter-spacing: 0px;
    color: #b98c13;
    margin-bottom: 30.45px;
  }

  input {
    display: block;
    padding: 0px 9px;
    height: 48px;
    width: 339px;
    text-align: left;
    font-weight: 200;
    font-size: 14px;
    line-height: 30px;
    font-family: "Product Sans", sans-serif;
    letter-spacing: 0px;
    color: #9b9b9b;
    text-transform: capitalize;
    background: #f0f0f0 0% 0% no-repeat padding-box;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    &:focus-visible {
      font-weight: normal;
      outline: none;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #d8ae25;
    }
  }

  button {
    text-align: center;
    height: 54px;
    width: 339px;
    background: #d4af37 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    line-height: 30px;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0px;
    color: #ffffff;
  }
`;

const Reset = () => {
  return (
    <TotalWrap>
      <CenterDiv>
        <h1>Reset Password</h1>
        <h2>Create a New Password</h2>
        <input
          style={{ marginBottom: "24px" }}
          type="text"
          placeholder="New Password"
        />
        <input
          style={{ marginBottom: "45.55px" }}
          type="text"
          placeholder="Conform Password"
        />
        <button>Save</button>
      </CenterDiv>
    </TotalWrap>
  );
};

export default Reset;
