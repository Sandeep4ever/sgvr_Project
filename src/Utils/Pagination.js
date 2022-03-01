import React from 'react';
import styled from 'styled-components';

const Pagination = () => {
    return (
        <PaginationContainer>    
        <FirstSection>
          <Previous> Previous</Previous>
          <Number>
            <span style={{background:"#D8AE25",color:"white"}}> 1</span>
            <span> 2</span>
            <span> 3</span>
            <span> 4</span>
            <span> 5</span>
            <span>....</span>
            <span>50</span>
          </Number>
          <Next> Next</Next>
        </FirstSection>
        <SecondSection>
         
          <Para2>
           <p>Showing 1 to 10 of 20 </p>
           <div>
             7
           </div>
          </Para2>
          <Button>
          Go 
          </Button>
        </SecondSection>
     </PaginationContainer>
    )
}
export default Pagination;

const PaginationContainer =styled.div`
margin-top: auto;
height: 61px;
display: flex;
align-items:center;
justify-content:space-between;
border-top:1px solid #BF9D2C;
border-bottom:1px solid #0000001F;
padding-left:42px;
padding-right:42px;
`
const FirstSection =styled.div`
display:flex;
`
const Previous =styled.p`
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #C3C3C3;
border-radius: 2px;
font: normal normal normal 13px/20px Poppins;
color: #B3B3B3;
padding:2px 10px;
`
const Number =styled.div`
display: flex;
align-items:center;
margin-left:10px;
span{
  width: 26px;
height: 24px;
/* background:#D8AE25; */
font: normal normal 600 13px/20px Poppins;
color: #3F546D;
padding:3px 9px;
border-radius:2px;
}
`
const Next =styled.p`
background: #D4AF371A 0% 0% no-repeat padding-box;
border: 1px solid #D4AF37;
border-radius: 2px;
font: normal normal normal 13px/20px Poppins;
color: #D4AF37;
padding:2px 19px;
margin-left:10px;
`
const SecondSection =styled.div`
display:flex;
`

const Para2 =styled.div`
display: flex;
align-items:center;
margin-left:25px;
p{
  font: normal normal normal 13px/20px Poppins;
color: #B3B3B3;

}
div{
  padding:3px 12px;
  background:#F7F7F7;
  width: 31px;
  margin-left:10px;
  font: normal normal 600 13px/20px Poppins;
color: #3F546D;

}
`
const Button =styled.button`
background:#D4AF37 ;
color: white;
padding:3px 7px;
border: none;
margin-left:15px;
border-radius: 2px;
`
