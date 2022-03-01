import React,{useContext} from 'react';
import styled from 'styled-components';
import img from '../../Assets/Images/Images';
import Cardlistcontext from '../../ContextApi/Cardlistcontext';

const MainContainer =styled.div`

`
const UploadContainer =styled.div`
width: 274px;
height: 332px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000029;
border-radius: 10px;
padding: 15px 14px 23px 16px;

`
const Imagediv =styled.div`

img{
   float: right;
   margin-top:-5px;
   cursor: pointer;
}
`
const Header =styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
h6{
    font: normal normal normal 16px/25px Poppins;
letter-spacing: 0px;
color: #B79421;
}
hr{
    width: 84px;
    border: 1px solid #E4E4E4;
}
`
const BrowseFile =styled.div`
width: 242px;
height: 38px;
background: #F7F7F7 0% 0% no-repeat padding-box;
border-radius: 8px;
margin-top:21px;
label{
 display: flex;
 align-items:center;
 justify-content:space-between;
 p{
     margin-left:15px;
     font: normal normal normal 13px/20px Poppins;
    color: #B3B3B3;
 }
 img{
 
}
}

input{
    display: none;
}

`
const Line=styled.div`
width: 242px;
border: 1px solid #E4E4E4;
margin-top:12px;
`
const FileDownloding =styled.div`
margin-top:14px;
`
const Para =styled.p`
font: normal normal normal 13px/20px Poppins;
color: #1E3653;
`

const Upload = () => {
    const closeupload =useContext(Cardlistcontext);
    const closeuploadFile=()=>{
        closeupload.setUploadFile(!closeupload.uploadFile);
    }
    return (
        <MainContainer>
            <UploadContainer>
                <Imagediv onClick={closeuploadFile}><img src={img.close} alt='close'/> </Imagediv>
                <Header>
                   <h6>Upload file</h6>
                      <hr/>
                 </Header>

                 <BrowseFile>

                  <label htmlFor='input' >
                 <p> Browse file </p>
                  <img src={img.uploadImg} alt='uploadImg'/>
                  </label>
                    <input type='file' id='input' multiple/>
                 </BrowseFile>
                 <Line> </Line>

                 <FileDownloding>
                      <Para>
                         File Downloding
                      </Para>

                 </FileDownloding>

            </UploadContainer>

        </MainContainer>
    )
}
export default Upload
