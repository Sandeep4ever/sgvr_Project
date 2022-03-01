import React, { useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import img from "../../Assets/Images/Images";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
const CreateEventForm = () => {
  let navigate = useNavigate();
  const [form, setform] = useState({});

  const fetchEvent = useCallback(async () => {
    const data = await axios.get(
      "https://sgvr-server.herokuapp.com/api/events/events",
      {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NTg1NjAyNywiZXhwIjoxNjQ1OTQyNDI3fQ.mw9mlEK5fFjONAMYpWj4FevASCESAkwxhf3SdgU_TKA",
        },
      }
    );
    return data;
  }, []);

  useEffect(() => {
    fetchEvent().then((res) => {
      console.log("eventedit", res.data);

      console.log("status", res.data[0]);
      setform(res.data[0]);
    });
  }, [fetchEvent]);

  const imageref = useRef();

  const BackPage = () => {
    navigate("/onboardingeventslist");
  };

  const handleChange = (e) => {
    imageref.current.src = window.URL.createObjectURL(e.target.files[0]);
  };

  let dateMonth = (dob) => {
    var d = new Date(dob);
    return (
      d.getUTCFullYear() +
      "-" +
      (d.getUTCMonth() + 1 >= 10
        ? d.getUTCMonth() + 1
        : "0" + (d.getUTCMonth() + 1)) +
      "-" +
      d.getUTCDate()
    );
  };

  const handlechange = (e) => {
    setform({ ...form, [e.target.id]: e.target.value });
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
            <Coverimg
              ref={imageref}
              src={`https://sgvr-server.herokuapp.com/api/get-images?key=${
                form.images && form.images[0]
              }`}
            />
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
            <label htmlFor="eventName">Event Name</label> <br />
            <input
              onChange={(e) => handlechange(e)}
              id="eventName"
              name="eventName"
              value={form.eventName}
              type="text"
            />
          </FirstName>
          <LastName>
            <label htmlFor="startdate">Date</label>
            <br />
            <Daterange>
              <input
                type="date"
                name="startdate"
                id="startdate"
                value={dateMonth(form.startdate)}
                onChange={(e) => handlechange(e)}
              />
              {/* <input placeholder="Date" class="textbox-n" type="text" onfocus="(this.type='date')" id="date"></input> */}
              <input
                name="enddate"
                id="enddate"
                // value={dateMonth(form.enddate)}
                className="second"
                type="date"
              />
            </Daterange>
          </LastName>
        </FirstDiv>
        <FirstDiv>
          <FirstName>
            <label htmlFor="organizer">Organizer Name</label> <br />
            <input
              type="text"
              name="organizer"
              id="organizer"
              value={form.organizer}
              onChange={(e) => handlechange(e)}
            />
          </FirstName>
          <LastName>
            <label htmlFor="starttime">Timing</label>
            <br />
            <Daterange>
              <input
                onChange={(e) => handlechange(e)}
                id="starttime"
                name="starttime"
                value={form.starttime}
                type="time"
                placeholder="From"
              />
              <input
                onChange={(e) => handlechange(e)}
                id="endtime"
                name="endtime"
                value={form.endtime}
                className="second"
                type="time"
                placeholder="To"
              />
            </Daterange>
          </LastName>
        </FirstDiv>
        <FirstDiv>
          <FirstName>
            <label htmlFor="organizerPhone">Organized Phone</label> <br />
            <input
              onChange={(e) => handlechange(e)}
              id="organizerPhone"
              name="organizerPhone"
              value={form.organizerPhone}
              type="text"
            />
          </FirstName>
          <LastName>
            <label htmlFor="description">Event Discription</label>
            <br />
            <input
              onChange={(e) => handlechange(e)}
              name="description"
              id="description"
              value={form.description}
              type="text"
            />
          </LastName>
        </FirstDiv>
        <FirstDiv>
          <FirstName>
            <label htmlFor="location">Address/Value</label> <br />
            <textarea
              onChange={(e) => handlechange(e)}
              style={{ padding: "12px" }}
              id="location"
              name="location"
              value={form.location}
              type="text"
            />
          </FirstName>
          <LastName>
            <label htmlFor="community">Invite Committee</label> <br />
            <input
              onChange={(e) => handlechange(e)}
              id="community"
              name="community"
              value={form.community && form.community.toString()}
              type="text"
            />
          </LastName>
        </FirstDiv>
        <ButtonDiv>
          <button> Publish</button>
        </ButtonDiv>
      </FormSection>
    </FormContainer>
  );
};

export default CreateEventForm;
