import React, { useRef, useState } from "react";
import styled from "styled-components";
import img from "../../../Assets/Images/Images";
import { useNavigate } from "react-router-dom";

const FormContainer = styled.div`
  width: 100%;
  background: #fcfcfc 0% 0% no-repeat padding-box;
  padding-left: 128px;
  padding-top: 15px;
  padding-bottom: 40px;
`;
const TextContainer = styled.div`
  p {
    font: normal normal normal 14px/20px Rubik;
    color: #202124;
    margin-top: 10px;
  }
`;
const FormText = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  span {
    font: normal normal 500 18px/20px Rubik;
    color: #202124;
  }
`;
const Images = styled.div`
  display: flex;
  margin-top: 20px;
`;

const ImageDiv = styled.div`
  max-width: 55px;
  height: 55px;
  position: relative;
  .edit {
    height: 23px;
    width: 23px;
    position: absolute;
    z-index: 10;
    bottom: -6px;
    right: -6px;
  }
`;
const Coverimg = styled.img`
  border-radius: 50%;
  height: 55px;
  width: 55px;
`;

const CrossSec = styled.div`
  height: 55px;
  width: 55px;
  margin-left: 15px;
  position: relative;
`;
const CloseImg = styled.img`
  height: 23px;
  width: 23px;
  position: absolute;
  z-index: 10;
  bottom: -6px;
  right: -6px;
`;
const AddSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #d8ae251a 0% 0% no-repeat padding-box;
  border: 1px dashed #d8ae25;
  margin-left: 15px;
  img {
    width: 15px;
    height: 15px;
  }
`;
const FormSection = styled.div`
  margin-top: 40px;
  label {
    font: normal normal normal 14px/20px Rubik;
    color: #202124;
  }
  input {
    width: 435px;
    height: 43px;
    background: #f5f5f5 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border: none;
    margin-top: 5px;
    margin-bottom: 20px;
    padding-left: 8px;
    &:focus-visible {
      outline: none;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #d8ae25;
    }
  }
`;
const FirstDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const FirstName = styled.div`
  textarea {
    width: 435px;
    height: 43px;
    background: #f5f5f5 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border: none;
    margin-top: 5px;
    margin-bottom: 20px;
    &:focus-visible {
      outline: none;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #d8ae25;
    }
  }
`;

const LastName = styled.div`
  margin-left: 29px;
`;

const Daterange = styled.div`
  display: flex;
  input {
    width: 206px;
    height: 43px;
  }
  .second {
    margin-left: 24px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-right: 145px;
    padding: 13px 48px;
    background: #d8ae25 0% 0% no-repeat padding-box;
    border-radius: 4px;
    font: normal normal 600 14px/20px Rubik;
    color: #ffffff;
    border: none;
  }
`;

const CreateTempleEventForm = () => {
  let navigate = useNavigate();
  const [form, setform] = useState({
    file: [],
    eventName: "",
    date: "23-12-2021",
    organizer: "",
    starttime: "3-00",
    endtime: "4:00",
    startdate: "23-01-2021",
    enddate: "26-01-2021",
    location: "bangalore",
    description: "nafej",
    community: ["fuerh"],
  });

  const imageref = useRef();
  const BackPage = () => {
    navigate("/templeEvents");
  };

  const handleChange = (e) => {
    imageref.current.src = window.URL.createObjectURL(e.target.files[0]);
  };

  return (
    <FormContainer>
      <TextContainer>
        <FormText>
          <img onClick={BackPage} src={img.backarrow} alt="backpage_img" />
          <span>Event Form</span>
        </FormText>
        <p>Upload Photo</p>
        <Images>
          <ImageDiv>
            <Coverimg ref={imageref} src={img.hairpic} />
            <label htmlFor="myFile">
              <img className="edit" src={img.Edit} alt="editimg" />
            </label>
            <input
              onChange={(e) => handleChange(e)}
              accept="image/*"
              style={{ display: "none" }}
              type="file"
              id="myFile"
              name="myFile"
            />
          </ImageDiv>

          <CrossSec>
            <img src={img.hairpic} alt="hairpic" />

            <CloseImg src={img.cross} alt="hairpic" />
          </CrossSec>
          <AddSec>
            <img src={img.add} alt="hairpic" />
          </AddSec>
        </Images>
      </TextContainer>
      <FormSection>
        <FirstDiv>
          <FirstName>
            <label>Event Name</label> <br />
            <input
              onChange={(e) => {
                setform({ ...form, eventName: e.target.value });
              }}
              type="text"
            />
          </FirstName>
          <LastName>
            <label>Date</label>
            <br />
            <Daterange>
              <input
                type="date"
                onChange={(e) => console.log(e.target.value)}
              />
              {/* <input placeholder="Date" class="textbox-n" type="text" onfocus="(this.type='date')" id="date"></input> */}
              <input className="second" type="date" />
            </Daterange>
          </LastName>
        </FirstDiv>
        <FirstDiv>
          <FirstName>
            <label>Organizer Name</label> <br />
            <input
              type="text"
              onChange={(e) => {
                setform({ ...form, organizer: e.target.value });
                console.log(form);
              }}
            />
          </FirstName>
          <LastName>
            <label>Timing</label>
            <br />
            <Daterange>
              <input type="text" placeholder="From" />
              <input className="second" type="text" placeholder="To" />
            </Daterange>
          </LastName>
        </FirstDiv>
        <FirstDiv>
          <FirstName>
            <label>Organized Phone</label> <br />
            <input type="text" />
          </FirstName>
          <LastName>
            <label>Event Discription</label>
            <br />
            <input type="text" />
          </LastName>
        </FirstDiv>
        <FirstDiv>
          <FirstName>
            <label>Address/Value</label> <br />
            <textarea type="text" />
          </FirstName>
        </FirstDiv>
        <ButtonDiv>
          <button> Publish</button>
        </ButtonDiv>
      </FormSection>
    </FormContainer>
  );
};

export default CreateTempleEventForm;
