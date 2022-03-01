import styled from "styled-components";
import img from "../../Assets/Images/Images.js";
import { useState } from "react";

const MainSection = styled.section`
  padding: 32px 39px;
  width: 100%;
  flex-wrap: wrap;
`;
const Header = styled.header`
  h1 {
    font: normal normal 500 16px/25px Poppins;
    color: #dfb93e;
  }
`;
const GalleryDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 15px;
`;
const ShowData = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
`;
const Createimg = styled.div`
  display: flex;
  flex-direction: row;
  width: 107px;
  height: 107px;
  background: #cea51e1a 0% 0% no-repeat padding-box;
  border: 1px dashed #cea51e;
  border-radius: 4px;
  label {
    width: 107px;
    height: 107px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Commiteegalary = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const handleImages = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      // console.log(fileArray);
      setSelectedImages((prevImages) => prevImages.concat(fileArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
    console.log("slected", selectedImages);
  };

  const renderPhots = (source) => {
    console.log("img", source);
    return source.map((photo) => {
      return (
        <img
          style={{ width: 107, height: 107 }}
          src={photo}
          key={photo}
          alt="img"
        />
      );
    });
  };
  return (
    <MainSection>
      <Header>
        <h1>Gallery</h1>
      </Header>
      <GalleryDiv>
        <Createimg>
          <input
            style={{ display: "none" }}
            multiple
            type="file"
            id="file"
            name="img"
            accept="image/*"
            onChange={handleImages}
          />
          <label htmlFor="file">
            <img src={img.addphoto} alt="addphoto" />
          </label>
        </Createimg>
        <ShowData>{renderPhots(selectedImages)}</ShowData>
      </GalleryDiv>
    </MainSection>
  );
};

export default Commiteegalary;
