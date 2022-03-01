import styled from "styled-components";
import images from "../../Assets/Images/Images";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";

const Container = styled.div`
  width: 87%;
  height: 100%;
  margin: 0px auto;
  padding: 25px 0px;
  display: flex;
  flex-direction: row;

  .arrow {
    height: 50px;
    width: 50px;
    cursor: pointer;
  }
`;

const Formcontainer = styled.div`
  width: 100%;

  h1 {
    display: block;
    text-align: left;
    font-size: 20px;
    line-height: 50px;
    font-style: normal;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    letter-spacing: 0px;
    color: #202124;
    text-transform: capitalize;
    opacity: 1;
  }
`;

const Coverimg = styled.img`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  height: 140px;
  width: 140px;
  padding: 3px;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;

  label {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    font-family: "Rubik", sans-serif;
    font-style: normal;
    text-align: left;
    letter-spacing: 0px;
    color: #202124;
    text-transform: capitalize;
    opacity: 1;
    display: block;
    margin-bottom: 7px;
  }

  article {
    display: inline-block;
    margin-bottom: 20px;
    margin-right: 14px;
    min-width: 48.3%;
    max-height: 67px;
  }

  input {
    width: 100%;
    height: 43px;
    background: #f5f5f5 0% 0% no-repeat padding-box;
    border-radius: 4px;
    margin-bottom: 20px;
    border: none;
    padding-left: 8px;
    font-family: "Rubik", sans-serif;

    &:focus-visible {
      outline: none;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #d8ae25;
    }
  }

  button {
    line-height: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    font-style: normal;
    font-family: "Rubik", sans-serif;
    border: none;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
    width: 151px;
    height: 43px;
    background: #d8ae25 0% 0% no-repeat padding-box;
    border-radius: 4px;
    opacity: 1;
    cursor: pointer;
  }

  .address {
    width: 100%;
    height: 43px;
    background: #f5f5f5 0% 0% no-repeat padding-box;
    border-radius: 4px;
    margin-bottom: 20px;
    border: none;
    font-family: "Rubik", sans-serif;
    padding: 8px 8px;
    &:focus-visible {
      outline: none;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #d8ae25;
    }
    :focus {
      height: 133px;
      position: relative;
      z-index: 10;
    }
  }
`;

const Imagediv = styled.div`
  max-width: 140px;
  height: 140px;
  margin: 30px 0px;
  position: relative;

  .edit {
    height: 23px;
    width: 23px;
    position: absolute;
    z-index: 10;
    bottom: 5px;
    right: 5px;
  }
`;

const Committeeform = () => {
  const { commtteProfile, setCommtteProfile } = useContext(Cardlistcontext);
  const navigate = useNavigate();

  const handleData = (e) => {
    setCommtteProfile({ ...commtteProfile, [e.target.name]: e.target.value });
    console.log(e.target.name);

    console.log({ [e.target.name]: e.target.value });
  };

  const handleUpdatedData = (id) => {
    commtteProfile["id"] = id;
    const {
      name,
      email,
      phone,
      state,
      description,
      city,
      address,
      myFile,
      adminName,
      pincode,
    } = commtteProfile;
    axios
      .patch(
        "https://sgvr-server.herokuapp.com/api/community/community",
        {
          name,
          email,
          phone,
          state,
          description,
          city,
          address,
          myFile,
          adminName,
          pincode,
          id,
        },
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0MzMxMzE4MCwiZXhwIjoxNjQ1OTA1MTgwfQ.0V4351fmKI6KbNBrK7toFp_crLZQjTciUdjUubDELYg",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Data updated ");
          navigate(-1);
          axios
            .get(
              "https://sgvr-server.herokuapp.com/api/community/community-id?id=61e7e2b1e4403ea7b81a915d"
            )
            .then((res) => {});
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Container>
        <img
          onClick={() => navigate("/")}
          className="arrow"
          src={images.backarrow}
          alt="backarrowimg"
        />
        <Formcontainer>
          <h1>Committee Form</h1>
          <Imagediv>
            <Coverimg src={images.Groomimg} alt="Groomimg" />
            <label htmlFor="myFile">
              <img className="edit" src={images.Edit} alt="editimg" />
            </label>
            <input
              // onChange={(e) => handleChange(e)}
              accept="image/*"
              style={{ display: "none" }}
              type="file"
              id="myFile"
              name="myFile"
              // value={commiteeData.myFile}
            />
          </Imagediv>
          <FormDiv>
            <article>
              <label htmlFor="Committe Name">Committee Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={commtteProfile.name}
                onChange={handleData}
              />
            </article>
            <article>
              <label htmlFor="Phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={commtteProfile.phone}
                onChange={handleData}
              />
            </article>
            <article>
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={commtteProfile.email}
                onChange={handleData}
              />
            </article>
            <article>
              <label htmlFor="Address">Address</label>
              <textarea
                className="address"
                type="text"
                name="address"
                id="address"
                value={commtteProfile.address}
                onChange={handleData}
              />
            </article>
            <article>
              <label htmlFor="City">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={commtteProfile.city}
                onChange={handleData}
              />
            </article>
            <article>
              <label htmlFor="State">State</label>
              <input
                type="text"
                name="state"
                id="state"
                value={commtteProfile.state}
                onChange={handleData}
              />
            </article>
            <article>
              <label htmlFor="Pincode">Pincode</label>
              <input
                type="text"
                name="pincode"
                id="pincode"
                onChange={handleData}
                value={commtteProfile.pincode}
              />
            </article>
            <article>
              <label htmlFor="About Commite">Description</label>
              <textarea
                className="address"
                type="text"
                name="description"
                id="About_Commite"
                value={commtteProfile.description}
                onChange={handleData}
              />
            </article>
            <article>
              <label htmlFor="Head of committee">Admin Name</label>
              <input
                type="email"
                name="adminName"
                id="adminName"
                value={commtteProfile.adminName}
                onChange={handleData}
              />
            </article>
            <article
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "end",
              }}
            >
              <button onClick={() => handleUpdatedData(commtteProfile._id)}>
                Update
              </button>
            </article>
          </FormDiv>
        </Formcontainer>
      </Container>
    </>
  );
};

export default Committeeform;
