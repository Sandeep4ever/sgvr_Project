import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import img from "../../Assets/Images/Images";
import Cardlistcontext from "../../ContextApi/Cardlistcontext";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FormContainer = styled.div`
  padding: 26px 82px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
  }
  p {
    font: normal normal 500 20px/20px Poppins;
    color: #202124;
  }
`;
const FormData = styled.div`
  display: flex;
  margin-top: 25px;
  margin-left: 41px;
`;
const FirstDiv = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font: normal normal normal 14px/20px Rubik;
    color: #202124;
    margin-bottom: 7px;
  }
  input {
    width: 435px;
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
`;
const SecondDiv = styled(FirstDiv)`
  margin-left: 29px;
  textarea {
    height: 43px;
    border: none;
    padding-left: 8px;
    padding-top: 5px;
    background: #f5f5f5 0% 0% no-repeat padding-box;
    border-radius: 4px;
    margin-bottom: 20px;
    &:focus-visible {
      outline: none;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #d8ae25;
    }
  }
`;
const ButtonDiv = styled.div`
  button {
    width: 151px;
    height: 43px;
    background: #d8ae25 0% 0% no-repeat padding-box;
    border-radius: 4px;
    padding: 13px 59px;
    font: normal normal 600 14px/20px Rubik;
    color: #ffffff;
    border: none;
    float: right;
    cursor: pointer;
  }
`;
const SubscriptionForm = (props) => {
  const state = useContext(Cardlistcontext);
  const { id } = useParams();
  const UseNavigate = useNavigate();
  console.log(id);
  const [createsubscriptionPlan, setcreatesubscriptionPlan] = useState({
    planName: "",
    validity: "",
    price: "",
    description: "",
  });
  useEffect(() => {
    axios
      .get(
        `https://sgvr-server.herokuapp.com/api/admin/subscription-id?id=${id}`,
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NTcwMzM2OSwiZXhwIjoxNjQ1Nzg5NzY5fQ.Izd-xsnzkX-kzUJ8RvC2heekpvVGJrWjYu7Q7yauPzM",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setcreatesubscriptionPlan(res.data);
      });
  }, [id]);
  const closeSubscriptonForm = () => {
    if (props.type !== "save") {
      UseNavigate("/subscriptionplane");
    } else {
      state.setShowSubscriptionForm(!state.showSubscriptionForm);
    }
  };

  const handleData = (e) => {
    setcreatesubscriptionPlan({
      ...createsubscriptionPlan,
      [e.target.name]: e.target.value,
    });
  };
  // fetch api for create Subscription plan
  const CreateData = () => {
    axios
      .post(
        "https://sgvr-server.herokuapp.com/api/admin/subscription",
        createsubscriptionPlan,
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NTcwMzM2OSwiZXhwIjoxNjQ1Nzg5NzY5fQ.Izd-xsnzkX-kzUJ8RvC2heekpvVGJrWjYu7Q7yauPzM",
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          alert("Data created successfully");
          console.log(res.data);
          state.setShowSubscriptionForm(!state.showSubscriptionForm);
          props.FetchData();
        }
        if (res.status === 200) {
          alert("Data already exits");
        }
      });
  };
  // fetch api for when update Data
  const handleUpdateData = (id) => {
    createsubscriptionPlan["id"] = id;
    const { planName, validity, price, description } = createsubscriptionPlan;
    axios
      .patch(
        "https://sgvr-server.herokuapp.com/api/admin/subscription",
        {
          planName,
          validity,
          price,
          description,
          id,
        },
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NTcwMzM2OSwiZXhwIjoxNjQ1Nzg5NzY5fQ.Izd-xsnzkX-kzUJ8RvC2heekpvVGJrWjYu7Q7yauPzM",
          },
        }
      )
      .then((res) => {
        console.log("updateddata", res.data);

        console.log("status", res.status);
        //  props.FetchData();
        UseNavigate("/subscriptionplane");
        //  state.setShowSubscriptionForm(!state.showSubscriptionForm)
      });
  };
  return (
    <FormContainer>
      <Header>
        <img
          onClick={closeSubscriptonForm}
          src={img.backarrow}
          alt="backarrowimg"
        />
        <p>Subscription Plan Form</p>
      </Header>
      <FormData>
        <FirstDiv>
          <label>Plane Name</label>
          <input
            type="text"
            name="planName"
            value={createsubscriptionPlan.planName}
            onChange={handleData}
          />

          <label>Validity</label>
          <input
            type="text"
            name="validity"
            onChange={handleData}
            value={createsubscriptionPlan.validity}
          />

          <label>Prize After Discount</label>
          <input type="text" name="prizeAfterDiscount" onChange={handleData} />
        </FirstDiv>
        <SecondDiv>
          <label>Prize</label>
          <input
            type="text"
            name="price"
            value={createsubscriptionPlan.price}
            onChange={handleData}
          />

          <label>Add Discount</label>
          <input type="text" name="addDiscount" onChange={handleData} />

          <label>Discription</label>
          <textarea
            type="text"
            name="description"
            value={createsubscriptionPlan.description}
            onChange={handleData}
          />
          <ButtonDiv>
            {props.type === "save" ? (
              <button type="submit" onClick={CreateData}>
                {props.type}
              </button>
            ) : (
              <button type="submit" onClick={() => handleUpdateData(id)}>
                Update
              </button>
            )}
          </ButtonDiv>
        </SecondDiv>
      </FormData>
    </FormContainer>
  );
};

export default SubscriptionForm;
