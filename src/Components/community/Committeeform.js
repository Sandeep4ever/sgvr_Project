import styled from "styled-components";
import images from "../../Assets/Images/Images";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import axios from "axios";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";
import { useParams } from "react-router-dom";
import getData from "../ApiService/apiRelatedOperations";
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
    font-family: "Rubik", sans-serif;
    border: none;
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
  const state = useContext(Cardlistcontext);
  const [commiteeData, setCommiteeData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    description: "",
    city: "",
    address: "",
    images: "",
    // adminName: "",
    pincode: "",
  });

  const [isDataFetched, setIsDataFetched] = useState(false);

  let navigate = useNavigate();
  const imageref = useRef();
  const { id } = useParams();

  const UpdateData = () => {
    axios
      .get(
        `http://sgvr-server.herokuapp.com/api/community/community-id?id=${id}`,
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NjAyOTM1OSwiZXhwIjoxNjQ2MTE1NzU5fQ.Dec4gN2efLUqBfu7Y3kfqHfVfkipVkTjjKuJOBPXGpw",
          },
        }
      )
      .then((res) => {
        setCommiteeData(res.data.data);
        console.log("update", res.data.data);
        setIsDataFetched(true);
      })
      .catch((error) => console.log(error));
  };
  if (!id) {
    // toast.error("Data fetchinng error ");
  } else {
    console.log("id: ", id);
    if (!isDataFetched) {
      UpdateData();
    }
  }

  const handleChange = (e) => {
    imageref.current.src = window.URL.createObjectURL(e.target.files[0]);
    setCommiteeData({ [e.target.name]: e.target.files[0] });
  };
  const handleData = (e) => {
    setCommiteeData({ ...commiteeData, [e.target.name]: e.target.value });
  };
  const CreateData = () => {
    var formData = new FormData();
    formData.append("name", commiteeData.name);
    formData.append("email", commiteeData.email);
    formData.append("phone", commiteeData.phone);
    formData.append("description", commiteeData.description);
    formData.append("state", commiteeData.state);
    formData.append("city", commiteeData.city);
    formData.append("address", commiteeData.address);
    formData.append("images", commiteeData.images);
    formData.append("pincode", commiteeData.pincode);

    axios
      .post(
        "https://sgvr-server.herokuapp.com/api/community/community",
        formData,
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NjAyOTM1OSwiZXhwIjoxNjQ2MTE1NzU5fQ.Dec4gN2efLUqBfu7Y3kfqHfVfkipVkTjjKuJOBPXGpw",
          },
        }
      )
      .then((res) => {
        console.log("postdata", res.data);
        if (res.status === 200) {
          toast.success("data added successfully");
          alert("data added successfully");
          setCommiteeData({
            name: "",
            email: "",
            phone: "",
            state: "",
            description: "",
            city: "",
            address: "",
            images: "",
            // adminName: "",
            pinCode: "",
          });
          console.log(formData, "formdata");

          navigate(-1);
          const getData = async () => {
            let res = await axios(
              "https://sgvr-server.herokuapp.com/api/community/community",
              {
                headers: {
                  "x-access-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NjAyOTM1OSwiZXhwIjoxNjQ2MTE1NzU5fQ.Dec4gN2efLUqBfu7Y3kfqHfVfkipVkTjjKuJOBPXGpw",
                },
              }
            );
            return res;
          };
          getData().then((res) => {
            console.log(res.data);
          });
        }
      })
      .catch((err) => {
        if (err.message === "Network Error") {
          toast.error("check your internet connection");
        } else if (err.response.status === 203) {
          toast.error("Something Went Wrong");
        } else if (err.response.status === 204) {
          toast.error("community already exist in City");
        } else if (err.response.status === 404) {
          toast.error("Page Not Found");
        } else if (err.response.status === 400) {
          toast.error("Internal server Error");
        } else {
          toast.error(err.response.message);
        }
      });
  };

  const handleUpdatedData = (id) => {
    commiteeData["id"] = id;
    const {
      name,
      email,
      phone,
      state,
      description,
      city,
      address,
      images,
      pincode,
      // adminName,
    } = commiteeData;
    axios
      .patch(
        "http://sgvr-server.herokuapp.com/api/community/community",
        {
          name,
          email,
          phone,
          state,
          description,
          city,
          address,
          images,
          pincode,
          // adminName,
          id,
        },
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NjAyOTM1OSwiZXhwIjoxNjQ2MTE1NzU5fQ.Dec4gN2efLUqBfu7Y3kfqHfVfkipVkTjjKuJOBPXGpw",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          // console.log(res.data);
          console.log("updated data", res.data);
          toast("data Updated successfully");
        }
        if (res.status === 202) {
          alert("community not found");
        }
        if (res.status === 204) {
          alert("community already exist in city");
        }
        navigate(-1);
        getData();
      })
      .catch((err) => {
        if (err.message === "Network Error") {
          toast.error("check your internet connection");
        } else if (err.response?.status === 203) {
          toast.error("Something Went Wrong");
        } else if (err.response?.status === 204) {
          toast.error("community already exist in City");
        } else if (err.response?.status === 404) {
          toast.error("Page Not Found");
        } else if (err.response?.status === 400) {
          toast.error("Internal server Error");
        } else {
          toast.error(err.response?.message);
        }
      });
  };

  return (
    <>
      <StyledToastContainer draggable={false} transition={Zoom} />
      <Container>
        <img
          onClick={() => navigate("/community")}
          className="arrow"
          src={images.backarrow}
          alt="backarrowimg"
        />
        <Formcontainer>
          <h1>Committee Form</h1>
          <Imagediv>
            <Coverimg
              ref={imageref}
              src={`https://sgvr-server.herokuapp.com/api/get-images?key=${commiteeData.images[0]}`}
              //  src={images.Groomimg}
              alt="Groomimg"
            />
            <label htmlFor="images">
              <img className="edit" src={images.Edit} alt="editimg" />
            </label>
            <input
              onChange={(e) => handleChange(e)}
              accept="image/*"
              style={{ display: "none" }}
              type="file"
              id="images"
              name="images"
              // value={commiteeData.images[0]}
            />
          </Imagediv>
          <FormDiv>
            <article>
              <label htmlFor="Committe Name">Committee Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={commiteeData.name}
                onChange={handleData}
              />
            </article>
            <article>
              <label htmlFor="Phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={commiteeData.phone}
                onChange={handleData}
              />
            </article>
            <article>
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={commiteeData.email}
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
                value={commiteeData.address}
                onChange={handleData}
              />
            </article>
            <article>
              <label htmlFor="City">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={commiteeData.city}
                onChange={handleData}
              />
            </article>
            <article>
              <label htmlFor="State">State</label>
              <input
                type="text"
                name="state"
                id="state"
                value={commiteeData.state}
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
                value={commiteeData.pincode}
              />
            </article>
            <article>
              <label htmlFor="About Commite">Description</label>
              <textarea
                className="address"
                type="text"
                name="description"
                id="About_Commite"
                value={commiteeData.description}
                onChange={handleData}
              />
            </article>
            <article>
              <label htmlFor="Head of committee">Admin Name</label>
              <input
                type="text"
                name="adminName"
                id="adminName"
                value={commiteeData.adminName}
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
              {state.communityType === "Save" ? (
                <button onClick={CreateData}>{state.communityType}</button>
              ) : (
                <button onClick={() => handleUpdatedData(id)}>Update</button>
              )}
            </article>
          </FormDiv>
        </Formcontainer>
      </Container>
    </>
  );
};

export default Committeeform;
