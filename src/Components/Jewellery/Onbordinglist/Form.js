import React,{useContext} from 'react';
import styled from 'styled-components';
import img from '../../../Assets/Images/Images';
import Cardlistcontext from '../../../ContextApi/Cardlistcontext';

const FormContainer=styled.div`
width: 100%;
background: #FCFCFC 0% 0% no-repeat padding-box;
padding-left: 110px;
padding-top: 27px;
padding-bottom:103px;
`
const TextContainer=styled.div`
p{
    font: normal normal normal 14px/20px Rubik;
color: #202124;
margin-top: 25px;
}
`
const FormText=styled.div`
font: normal normal medium 20px/20px Poppins;
letter-spacing: 0px;
color: #202124;
`
const Images=styled.div`
display: flex;
margin-top: 28px;
img{
   border-radius: 50%;;
}
`
const EditSec=styled.div`
`
const Editadust= styled.div`
    position: absolute;
    width: 55px;
    margin-left:5px;
    margin-top: -22px;
    img{
    float: right;
    }
`
const CrossSec=styled.div`
margin-left: 15px;
`
const Crossadjust =styled(Editadust)`
`
const AddSec=styled.div`
display: flex;
align-items: center;
justify-content: center;
width:55px;
height:55px;
border-radius:50%;
background: #D8AE251A 0% 0% no-repeat padding-box;
border: 1px dashed #D8AE25;
margin-left:15px;
img{
   width: 15px;
   height:15px;
}
`
const FormSection =styled.div`
margin-top:50px;
label{
    font: normal normal normal 14px/20px Rubik;
color: #202124;
}
input{
    width:435px;
    height:43px;
    background: #F5F5F5 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border:none;
    margin-top:5px;
    margin-bottom:20px;
}
`
const FirstDiv=styled.div`

display: flex;
flex-wrap:wrap;
`
const FirstName=styled.div`

`
const Dropdown =styled.div`
  width: 435px;
  height:43px;
  background: #F5F5F5 0% 0% no-repeat padding-box;
  margin-top:5px;
  margin-bottom:20px;

select{
    border: 0 none;
  font-size: 20px;
  padding: 2px 10px;
  width: 435px;
  *width: 350px;
  height:43px;
  *height:43px;
  background: #F5F5F5 0% 0% no-repeat padding-box;
  font: normal normal normal 13px/20px Helvetica;
color: #7A7D81;
}
/* img{
    float: right;
    position:absolute;
    margin-top:17px;
    margin-left:-30px;   
} */
`
const LastName=styled.div`
margin-left: 29px;
`
const Button=styled.div`
width: 435px;
margin-left: 29px;
margin-top:22px;
span{
 width: 151px;
height:43px;
display:flex;
align-items:center;
justify-content:center;
background: #D8AE25 0% 0% no-repeat padding-box;
border-radius: 4px;
    float: right;
    font: normal normal 600 14px/20px Rubik;
    color:#ffffff;
    cursor: pointer;
}
`
const Form = () => {

    const state=useContext(Cardlistcontext);

    const closeForm=()=>{
        state.setCardlistClose(!state.cardlistClose)
    }

    return (
        <FormContainer>
         <TextContainer>
             <FormText>
                 Form
             </FormText>
             <p>Add Photos</p>
             <Images>
                <EditSec>
                 <img src={img.hairpic} alt='hairpic'/>
                 <Editadust>
                 <img src={img.edit} alt='hairpic'/>
                 </Editadust>
                 </EditSec>
                 <CrossSec>
                 <img src={img.hairpic} alt='hairpic'/>
                 <Crossadjust>
                 <img src={img.cross} alt='hairpic'/>
                 </Crossadjust>
                 </CrossSec>
                <AddSec>
                 <img src={img.add} alt='hairpic'/>
                 </AddSec>
             </Images>                
         </TextContainer>
         <FormSection>
          <FirstDiv>
             <FirstName>
                 <label>
                     First Name
                 </label> <br/>
                 <input type='texe'/>
             </FirstName>
             <LastName>
                 <label>
                     Last Name
                 </label><br/>
                 <input type='texe'/>
             </LastName>
          </FirstDiv>
          <FirstDiv>
             <FirstName>
                 <label>
                     Email
                 </label> <br/>
                 <input type='texe'/>
             </FirstName>
             <LastName>
                 <label>
                    Phone
                 </label><br/>
                 <input type='texe'/>
             </LastName>
          </FirstDiv>
          <FirstDiv>
             <FirstName>
                 <label>
                   Category
                 </label> <br/>
                 {/* <input type='texe'/> */}
             <Dropdown>
                 <select name='select..' required> 
                 <option value='' disabled selected hidden> select.. </option>
                     <option value='option1'> option1 </option>
                     <option> option2 </option>
                     <option> option3 </option>
                 </select>
                 {/* <img src={img.dropdown}/>  */}
             </Dropdown>
             </FirstName>
             <LastName>
                 <label>
                    Shop Name
                 </label><br/>
                 <input type='texe'/>
             </LastName>
          </FirstDiv>
          <FirstDiv>
             <FirstName>
                 <label>
                  Shop Type
                 </label> <br/>
                 {/* <input type='texe'/> */}
                 <Dropdown>
                 <select name='select..' required> 
                 <option value='' disabled selected hidden> select.. </option>
                     <option value='option1'> option1 </option>
                     <option> option2 </option>
                     <option> option3 </option>
                 </select>
                 {/* <img src={img.dropdown}/>  */}
             </Dropdown>
             </FirstName>
             <Button>
               <span onClick={closeForm}> Save </span> 
             </Button>
          </FirstDiv>
         </FormSection>
        </FormContainer>
    )
}
export default Form
