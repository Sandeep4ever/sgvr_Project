import styled from "styled-components";
import images from "../../Assets/Images/Images";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Totalwrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 120px;
  padding-top: 16px;
  padding-bottom: 60px;

  h2 {
    text-align: left;
    font-size: 16px;
    line-height: 20px;
    font-family: rubik, sans-serif;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0px;
    color: #202124;
    margin-bottom: 20px;
  }

  h3 {
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    font-family: rubik, sans-serif;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0px;
    font-size: 14px;
    line-height: 20px;
    color: #202124;
    text-transform: capitalize;
    display: block;
    text-align: left;
    margin-bottom: 28px;
  }
`;

const HeadingDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  height: 50px;
  margin-bottom: 14px;

  img {
    position: absolute;
    left: -50px;
  }

  h1 {
    text-align: left;
    font-size: 20px;
    line-height: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    letter-spacing: 0px;
    color: #202124;
    text-transform: capitalize;
  }
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 40px;

  .profile {
    height: 55px;
    width: 55px;
    display: inline-block;
    position: relative;
    margin-right: 15px;
  }

  .extra {
    width: 55px;
    height: 55px;
  }

  .plusdiv {
    width: 55px;
    height: 55px;
    background-color: #d8ae251a;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed #d8ae25;
  }

  div {
    position: relative;
    display: inline-block;
    height: 55px;
    width: 55px;
    margin-right: 15px;

    .imgph {
      border-radius: 50%;
      height: 55px;
      width: 55px;
    }
    .symbol {
      position: absolute;
      bottom: 0px;
      right: 0px;
    }
  }
  input {
    display: none;
  }
`;

const DetailsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  article {
    display: inline-block;
    width: 435px;
    margin-bottom: 20px;
    margin-right: 32px;

    button {
      margin-bottom: 0px;
      margin-top: auto;
      height: 43px;
      width: 151px;
      background: #d8ae25 0% 0% no-repeat padding-box;
      border-radius: 4px;
      text-align: center;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0px;
      color: #ffffff;
      font-family: rubik, sans-serif;
      font-weight: 500;
      border: none;
      margin-right: 0px;
      margin-left: auto;
      cursor: pointer;
    }

    label {
      text-align: left;
      font-size: 14px;
      line-height: 20px;
      font-family: rubik, sans-serif;
      font-weight: 300;
      font-style: normal;
      letter-spacing: 0px;
      color: #747474;
      text-transform: capitalize;
      display: block;
      margin-bottom: 7px;
    }

    input {
      width: 100%;
      height: 43px;
      border: none;
      background: #f5f5f5 0% 0% no-repeat padding-box;
      border-radius: 4px;
      &:focus-visible {
        outline: none;
        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #d8ae25;
      }
    }
  }
`;

const PopWrap = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: #2c2c2c20 0% 0% no-repeat padding-box;
  z-index: 20;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div {
    width: 500px;
    height: 100px;
    background-color: white;
  }
`;

const VendorRegistration = () => {
  const imgs = useRef();
  const [imgarray, setimgarray] = useState([]);
  const [rerender, setRerender] = useState(false);
  const input1 = useRef();
  const [forpopup, setpopup] = useState(false);
  const usenavigate = useNavigate();

  const handle = (im) => {
    var imt = imgarray;
    imt.push(URL.createObjectURL(im));
    setimgarray(imt);
    console.log(imgarray);
    setRerender(!rerender);
  };

  const remove = (ind) => {
    let imt = imgarray;
    imt.splice(ind, 1);
    setimgarray(imt);
    setRerender(!rerender);
  };

  return (
    <>
      {forpopup && (
        <PopWrap>
          <div>
            <button
              onClick={() => {
                imgs.current.src = images.profile;
                setpopup(false);
              }}
            >
              Remove
            </button>
            <button
              onClick={() => {
                input1.current.click();
                setpopup(false);
              }}
            >
              Add
            </button>
          </div>
        </PopWrap>
      )}
      <Totalwrap>
        <HeadingDiv>
          <img
            src={images.back2}
            onClick={() => usenavigate("/Profile")}
            alt="backimage"
          />
          <h1>Vendor Registration</h1>
        </HeadingDiv>
        <h3>Add Photos</h3>
        <ImageDiv>
          <div className="profile">
            <img
              ref={imgs}
              className="imgph"
              alt="uploaded"
              src={images.profile}
            />
            <img
              onClick={() => setpopup(true)}
              className="symbol"
              alt="symbol"
              src={images.edit}
            />
            <input
              onChange={(e) =>
                (imgs.current.src = URL.createObjectURL(e.target.files[0]))
              }
              ref={input1}
              id="profileClick"
              type="file"
            />
          </div>
          {imgarray.map((val, ind) => (
            <div className="profile">
              <img className="imgph" alt="uploaded" src={val} />
              <img
                onClick={() => remove(ind)}
                className="symbol"
                alt="symbol"
                src={images.clos}
              />
            </div>
          ))}
          <div className="plusdiv">
            <label htmlFor="myFile">
              <img
                htmlFor="filename"
                className="plus"
                alt="uploaded"
                src={images.plus}
              />
            </label>
          </div>
          <input
            type="file"
            id="myFile"
            name="filename"
            onChange={(e) => handle(e.target.files[0])}
          />
        </ImageDiv>
        <DetailsDiv>
          <article>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </article>
          <article>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />
          </article>
          <article>
            <label htmlFor="company">Company/Business Name</label>
            <input type="text" id="company" name="company" />
          </article>
          <article>
            <label htmlFor="serviceName">Service name</label>
            <input type="text" id="serviceName" name="serviceName" />
          </article>
          <article>
            <label htmlFor="about">About</label>
            <input type="text" id="about" name="about" />
          </article>
        </DetailsDiv>
        <h2>Add Address</h2>
        <DetailsDiv>
          <article>
            <label htmlFor="state">State</label>
            <input type="text" id="state" name="state" />
          </article>
          <article>
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" />
          </article>
          <article>
            <label htmlFor="pinCode">Pin code</label>
            <input type="text" id="pinCode" name="pinCode" />
          </article>
          <article>
            <label htmlFor="Address">Address</label>
            <input type="text" id="Address" name="Address" />
          </article>
          <article>
            <label htmlFor="phone">Phone no.</label>
            <input type="text" id="phone" name="phone" />
          </article>
          <article style={{ display: "flex" }}>
            <button>Save</button>
          </article>
        </DetailsDiv>
      </Totalwrap>
    </>
  );
};

export default VendorRegistration;
