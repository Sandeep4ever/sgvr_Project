import React, { useContext } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react/cjs/react.development";
import styled from "styled-components";
import img from "../../../Assets/Images/Images";
import Cardlistcontext from "../../../ContextApi/Cardlistcontext";

const MainContainer = styled.div`
  display: flex;
  margin-left: 69px;
  margin-bottom: 214px;
  margin-top: 28px;
`;

const PhotoContainer = styled.div`
  width: 294px;
  height: 294px;
  background: #f7f7f74d 0% 0% no-repeat padding-box;
  border: 0.5px dashed #d8ae25;
  border-radius: 4px;
  input[type="file"] {
    display: none;
  }
`;
const Para = styled.p`
  margin-top: -25px;
  font: normal normal normal 14px/20px Rubik;
  color: #202124;
`;
const Image = styled.div`
  width: 294px;
  height: 294px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 34px;
    height: 26px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const FormContainer = styled.div`
  margin-left: 33px;
  label {
    margin-top: 10px;
  }
  input {
    width: 435px;
    height: 43px;
    margin-bottom: 15px;
    background: #f5f5f5 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border: none;
    font: normal normal normal 14px/20px Rubik;
    color: #747474;
    padding-left: 10px;
    &:focus-visible {
      outline: none;
    }
  }

  button {
    width: 151px;
    height: 43px;
    font-weight: 600;
    background: #d8ae25 0% 0% no-repeat padding-box;
    border-radius: 4px;
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
  }
  textarea {
    width: 435px;
    height: 120px;
    border: none;
    background: #f5f5f5 0% 0% no-repeat padding-box;
    border-radius: 4px;
    font: normal normal normal 14px/20px Rubik;
    color: #747474;
    padding: 10px 10px;

    margin-bottom: 15px;
    &:focus-visible {
      outline: none;
    }
  }
`;
const Header = styled.div`
  display: flex;
  margin-left: 55px;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  h1 {
    font: normal normal 500 20px/20px Poppins;
    color: #202124;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 57px;
`;

const TextArea = styled.div``;

const Advertisementform = () => {
  const closeFormState = useContext(Cardlistcontext);
  const usenavigate = useNavigate();
  const image1 = useRef();
  const [showImg, setshowImg] = useState(img.upload);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    image1.current.style.width = "200px";
    image1.current.style.height = "200px";
  }, [showImg]);

  useEffect(() => {
    image1.current.style.width = "34px";
    image1.current.style.height = "26px";
  }, []);

  const uploadpic = (e) => {
    if (e.target.files[0] === undefined) {
      // console.log(e.target.files[0])
    } else {
      setshowImg(URL.createObjectURL(e.target.files[0]));
    }
  };
  const closePostForm = () => {
    closeFormState.setCardlistClose(!closeFormState.cardlistClose);
  };
  return (
    <>
      <Wrap>
        <Header>
          <img
            src={img.backarrow}
            alt="backarrowimg"
            onClick={() => usenavigate("/Advertisement")}
          />
          <h1>Back</h1>
        </Header>

        <MainContainer>
          <PhotoContainer>
            <Para>Upload Photo</Para>
            <Image>
              <label htmlFor="file">
                <img ref={image1} id="blah" src={showImg} alt="img" />
              </label>
              <input
                type="file"
                accept="image/*"
                name="image"
                id="file"
                onChange={uploadpic}
              ></input>
            </Image>
          </PhotoContainer>
          <FormContainer>
            {/* <label>Name </label> <br/> */}
            <input type="text" placeholder="Name" /> <br />
            {/* <label>Main Heading </label> <br/> */}
            <input type="text" placeholder="Main Heading" /> <br />
            {/* <label>Discription </label> <br/> */}
            <TextArea>
              <textarea placeholder="Discription" />
            </TextArea>
            {/* </textarea>    */}
            {/* <input type='text' placeholder='Discription' /> <br/> */}
            {/* <label>Meeting Link </label> <br/> */}
            <input type="text" placeholder="Link" /> <br />
            <button onClick={closePostForm}>Submit</button>
          </FormContainer>
        </MainContainer>
      </Wrap>
    </>
  );
};


export default Advertisementform;