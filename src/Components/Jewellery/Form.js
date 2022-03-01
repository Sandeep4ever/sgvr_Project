import React,{useContext} from 'react';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components'
import Cardlistcontext from '../../ContextApi/Cardlistcontext';
import data from './Data';


const FormContainer =styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
`
const Header =styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Formdata =styled.div`

padding: 20px;
label{
   
}
input{
    width: 500px;
    padding: 10px;
    margin-bottom: 8px;

}
div{
    input{
    background-color: darkred;
    color: white;

    }
}
p{
    color: red;
}
`
const Form = () => {
    const state = useContext(Cardlistcontext) 
    
  const  [formData,setformData]=useState({
      datafield:{
        name:"",
        password:"",
        email:"",
        number:'',
      },
      error:{},
    })

    const inputData =(e)=>{  
        formData.datafield[e.target.name] = e.target.value;
        setformData({...formData})
        // console.log(formData);
        if(formData.error[e.target.name]){
             formData.error[e.target.name]= '';
        }
    }

    const datasubmit=()=>{
       if(Validate()){
           data.push(formData.datafield)
           console.log(data)
           alert ("data submitted successfully !");

        state.setCardlistClose(!state.cardlistClose);

       }

      
    }

    const Validate=() =>{
        let datafield =formData.datafield;
        // console.log(datafield);
        let error ={};
        let formIsValid =true;
        if(!datafield["name"]){
            formIsValid =false;
            error["name"] ="*Please enter your name.";
        }
        if(datafield["name"] !==''){
            if(!datafield["name"].match(/^[a-zA-Z\s]{3,}/)){
                formIsValid =false;
                error["name"]="please enter valid name.";
            }
        }

        if(!datafield["password"]){
            formIsValid =false;
            error["password"] ="*Please enter password.";
        }
        if(datafield["password"] !==''){
            if(!datafield["password"].match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
                formIsValid =false;
                error["password"]="*please Enter valid password min 6 length.(like as alphanumeric,specialchar @#$& etc.) ";
            }
        }

        if(!datafield["email"]){
            formIsValid =false;
            error["email"] ="*Please enter email.";
        }
        if(datafield["email"] !==''){
            if(!datafield["email"].match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                formIsValid =false;
                error["email"]="*please enter valid email ";

            }
        }

        if(!datafield["number"]){
            formIsValid =false;
            error["number"] ="*Please enter mobile number.";
        }
        if(datafield["number"] !==''){
            if(!datafield["number"].match(/^[7-9][0-9]{9}$/)){
                formIsValid =false;
                error["number"]="*please Enter valid mobile number (start 7,8,9 ) ";
            }
        }

        formData.error =error;
        setformData({ ...formData });
        return formIsValid;

    }

    return (
           <FormContainer>             
              <Header>
                 <h2> Validation Form </h2>
              </Header>
              <Formdata>           
                <label>   Name </label><br/>
                <input 
                type='text' 
                name='name'
               
                onChange={inputData}
                />
                <p>
                    {formData.error.name}
                </p> 
                <br/>
                <label> Password </label><br/>
                <input 
                type='password'
                name='password'
                onChange={inputData}
                />
                 <p>
                    {formData.error.password}
                </p> 
                <br/>
                <label>  Email </label><br/>
                <input 
                type='email'
                name='email'
                onChange={inputData}
                />
                 <p>
                    {formData.error.email}
                </p> 
                <br/>
                <label> Phone NO. </label><br/>
                <input
                 type='number'
                 name='number'
                onChange={inputData}
                 />
                  <p>
                    {formData.error.number}
                </p> 
                 <br/>
               <div>
                <input type='submit' value='submit' onClick={datasubmit} />
               </div>
              </Formdata>
        </FormContainer>
    )
}

export default Form
