import React, { useRef, useState, useContext, useEffect } from "react";
import styled from "styled-components";
import img from "../../../Assets/Images/Images";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cardlistcontext from "../../../ContextApi/Cardlistcontext";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
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
// const Coverimg = styled.img`
//   border-radius: 50%;
//   height: 55px;
//   width: 55px;
// `;

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
  cursor: pointer;
  img {
    width: 15px;
    height: 15px;
    cursor: pointer;
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
  flex-direction: row;
  gap: 20px;
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
    font: normal normal normal 14px/20px Rubik;
    color: #202124;
    padding: 8px;
    &:focus-visible {
      outline: none;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #d8ae25;
    }
  }
`;

const LastName = styled.div``;
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
  justify-content: flex-end;
  width: 435px;
  margin-top: 22px;
  button {
    float: right;
    padding: 13px 48px;
    background: #d8ae25 0% 0% no-repeat padding-box;
    border-radius: 4px;
    font: normal normal 600 14px/20px Rubik;
    color: #ffffff;
    border: none;
  }
`;

const CreateEventForm = () => {
  const { EventType } = useContext(Cardlistcontext);
  const { id } = useParams();
  let navigate = useNavigate();
  console.log("eventid", id);
  const imageref = useRef();
  const BackPage = () => {
    navigate("/events");
  };
  const [selectedImages, setSelectedImages] = useState([]);

  const [createEventData, setcreateEventData] = useState({
    file: "",
    eventName: "",
    organizer: "",
    starttime: "",
    endtime: "",
    startdate: "",
    enddate: "",
    location: "",
    description: "",
    organizerPhone: "",
  });
  const handleData = (e) => {
    setcreateEventData({ ...createEventData, [e.target.name]: e.target.value });
  };

  const handleImages = (e) => {
    // console.log(e.target.files[0]);
    if (e.target.files) {
      console.log(Array.from(e.target.files));
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      // console.log(fileArray);
      setSelectedImages((prevImages) => prevImages.concat(fileArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };
  const renderPhots = (source) => {
    return source.map((photo) => {
      return (
        <img
          style={{ width: 55, height: 55, borderRadius: "50%" }}
          src={photo}
          key={photo}
          alt="img"
        />
      );
    });
  };

  const createEvent = () => {
    axios
      .post(
        "https://sgvr-server.herokuapp.com/api/events/events",
        { createEventData },
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0MzMxMzE4MCwiZXhwIjoxNjQ1OTA1MTgwfQ.0V4351fmKI6KbNBrK7toFp_crLZQjTciUdjUubDELYg",
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          toast.success("Event Created Successfully");
          navigate("/events");
        } else {
          toast.error("Event Creation Failed");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          toast.error("Please Login First");
        } else {
          toast.error("Event Creation Failed");
        }
      });
  };

  // const createEvent = async () => {
  //   let res = await axios.post(
  //     "https://sgvr-server.herokuapp.com/api/events/events",
  //     {},
  //     {
  //       headers: {
  //         "x-access-token":
  //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0MzMxMzE4MCwiZXhwIjoxNjQ1OTA1MTgwfQ.0V4351fmKI6KbNBrK7toFp_crLZQjTciUdjUubDELYg",
  //       },
  //     }
  //   );
  // };
  // createEvent();

  const handleChange = (e) => {
    imageref.current.src = window.URL.createObjectURL(e.target.files[0]);
  };
  useEffect(() => {
    axios
      .get(
        `https://sgvr-server.herokuapp.com/api/events/event-id?eventId=${id}&communityId=61f77eb591ce9bd27044e8a7`,
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIwY2ZkY2I4OTIyODY2ZjI1ZjE1OThmIiwidXNlclR5cGUiOiJDQSIsImlhdCI6MTY0NTQ0NjM1NSwiZXhwIjoxNjQ1NTMyNzU1fQ.GMLzdhSMrCNKItPJj51pQ-YMdwtz_sTJoe9892Q0umE",
          },
        }
      )
      .then((res) => {
        setcreateEventData(res.data.event);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [id]);
  const UpdatedData = (id) => {
    console.log(id);
    createEventData["id"] = id;
    const {
      eventName,
      organizer,
      starttime,
      endtime,
      startdate,
      enddate,
      location,
      description,
      organizerPhone,
    } = createEventData;
    axios
      .patch(
        "https://sgvr-server.herokuapp.com/api/events/events",
        {
          eventName,
          organizer,
          starttime,
          endtime,
          startdate,
          enddate,
          location,
          description,
          organizerPhone,
          id,
        },
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIwY2ZkY2I4OTIyODY2ZjI1ZjE1OThmIiwidXNlclR5cGUiOiJDQSIsImlhdCI6MTY0NTQ0NzE5MSwiZXhwIjoxNjQ1NTMzNTkxfQ.fKrIV3k14lRtTO59O7mo2pISARlQta7OmuEAjgiYmGE",
          },
        }
      )
      .then((res) => {
        console.log("patchapi", res.status);
        console.log("patchapi", res.data);

        if (res.status === 200) {
          alert("Event Updated Successfully");
          toast.success("Event Updated Successfully");
          navigate("/events");

          console.log("Data updated");
          console.log("postapi", res.status);
        } else {
          console.log("api fetching error");
        }
      })
      .catch((err) => {
        // console.log(err);
        if (err.response.status === 400) {
          toast.error("Internal server error");
        } else if (err.response.status === 404) {
          toast.error("Page Not Found");
        } else {
          toast.error("please login first");
        }
      });
  };
  console.log("changesclick", createEventData);

  return (
    <>
      <StyledToastContainer draggable={false} transition={Zoom} />

      <FormContainer>
        <TextContainer>
          <FormText>
            <img onClick={BackPage} src={img.backarrow} alt="backpage_img" />
            <span>Event Form</span>
          </FormText>
          <p>Upload Photo</p>
          <Images>
            <ImageDiv>
              {/* <Coverimg ref={imageref} 
            src={img.hairpic} 
              
            /> */}
              {renderPhots(selectedImages)}
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
              {/* <img src={img.hairpic} alt="hairpic" /> */}
              {renderPhots(selectedImages)}

              <CloseImg src={img.cross} alt="hairpic" />
            </CrossSec>

            <AddSec>
              {/* {renderPhots(selectedImages)} */}
              <input
                style={{ display: "none" }}
                multiple
                type="file"
                id="file"
                name="file"
                accept="image/*"
                // value={createEventData.file}
                onChange={handleImages}
              />
              <label htmlFor="file">
                <img src={img.add} alt="hairpic" />
              </label>
            </AddSec>
            {/* <img src={img.add} alt="hairpic" />
            
          </AddSec> */}
          </Images>
        </TextContainer>
        <FormSection>
          <FirstDiv>
            <FirstName>
              <label>Event Name</label> <br />
              <input
                type="text"
                name="eventName"
                id="eventName"
                value={createEventData?.eventName}
                onChange={handleData}
              />
            </FirstName>
            <LastName>
              <label>Date</label>
              <br />
              <Daterange>
                <input
                  type="date"
                  name="startdate"
                  id="startdate"
                  value={`${new Date(
                    createEventData?.startdate
                  ).getFullYear()}-${
                    new Date(createEventData?.startdate).getMonth() + 1 <= 9
                      ? "0" +
                        (new Date(createEventData?.startdate).getMonth() + 1)
                      : new Date(createEventData?.startdate).getMonth() + 1
                  }-${
                    new Date(createEventData?.startdate).getDate() <= 9
                      ? "0" + new Date(createEventData?.startdate).getDate()
                      : new Date(createEventData?.startdate).getDate()
                  }`}
                  onChange={handleData}
                />
                {/* <input placeholder="Date" class="textbox-n" type="text" onfocus="(this.type='date')" id="date"></input> */}
                <input
                  className="second"
                  type="date"
                  name="enddate"
                  id="enddate"
                  value={`${new Date(createEventData?.enddate).getFullYear()}-${
                    new Date(createEventData?.enddate).getMonth() + 1 <= 9
                      ? "0" +
                        (new Date(createEventData?.enddate).getMonth() + 1)
                      : new Date(createEventData?.enddate).getMonth() + 1
                  }-${
                    new Date(createEventData?.enddate).getDate() <= 9
                      ? "0" + new Date(createEventData?.enddate).getDate()
                      : new Date(createEventData?.enddate).getDate()
                  }`}
                  onChange={handleData}
                />
              </Daterange>
            </LastName>
          </FirstDiv>
          <FirstDiv>
            <FirstName>
              <label>Organizer Name</label> <br />
              <input
                type="text"
                name="organizer"
                id="organizer"
                value={createEventData?.organizer}
                onChange={handleData}
              />
            </FirstName>
            <LastName>
              <label>Timing</label>
              <br />
              <Daterange>
                <input
                  type="text"
                  placeholder="From"
                  name="starttime"
                  id="starttime"
                  value={createEventData?.starttime}
                  onChange={handleData}
                />
                <input
                  className="second"
                  type="text"
                  placeholder="To"
                  name="endtime"
                  id="endtime"
                  value={createEventData?.endtime}
                  onChange={handleData}
                />
              </Daterange>
            </LastName>
          </FirstDiv>
          <FirstDiv>
            <FirstName>
              <label>Organized Phone</label> <br />
              <input
                type="text"
                name="organizerPhone"
                id="organizerPhone"
                value={createEventData?.organizerPhone}
                onChange={handleData}
              />
            </FirstName>
            <LastName>
              <label>Event Description</label>
              <br />
              <input
                type="text"
                name="description"
                id="description"
                value={createEventData?.description}
                onChange={handleData}
              />
            </LastName>
          </FirstDiv>
          <FirstDiv>
            <FirstName>
              <label>Full Address</label> <br />
              <textarea
                className="fulladdress"
                type="text"
                placeholder="City/State/Pin"
                name="location"
                id="location"
                value={createEventData?.location}
                onChange={handleData}
              />
            </FirstName>
            <ButtonDiv>
              {EventType === "Publish" ? (
                <button onClick={createEvent}>{EventType}</button>
              ) : (
                <button onClick={() => UpdatedData(id)}>Update</button>
              )}
            </ButtonDiv>
          </FirstDiv>
        </FormSection>
      </FormContainer>
    </>
  );
};
export default CreateEventForm;
