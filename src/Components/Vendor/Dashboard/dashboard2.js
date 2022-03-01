import styled from "styled-components";
import images from "../../../Assets/Images/Images";
import Donation from "./Donation graph";

const TotalWrap=styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction: column;
background: #FCFCFC 0% 0% no-repeat padding-box;
padding: 35px;

h1{
    text-align: left;
    font-size: 18px;
    line-height: 20px;
    font-family: rubik, sans-serif;
font-weight: 500;
font-style: normal;
letter-spacing: 0px;
color: #202124;
text-transform: capitalize;
margin-bottom: 19px;
}
`

const Detailsdiv=styled.div`
height: 282px;
width: 1076px;
padding: 20px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 0px 3px #0000001A;
display: flex;
flex-direction: row;
justify-content: flex-start;
margin-bottom: 15px;

img{
    width: 245px;
    height: 245px;
    margin-right: 50px;
}
`

const Detailstemple=styled.div`
width: 726px;
height: 100%;
position: relative;
display: flex;
flex-direction: column;
align-items: flex-start;
overflow:auto;
overflow-x: hidden;
::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #D3D3D3;
    border-radius: 5px;
  }

button{
    position: absolute;
    top: 0;
    right: 0;
height: 38px;
width: 76px;
background: #D8AE251A 0% 0% no-repeat padding-box;
border-radius: 8px;
border: none;
text-align: center;
font-weight: 500;
font-size: 14px;
line-height: 38px;
font-family: 'Poppins', sans-serif;
letter-spacing: 0px;
color: #D8AE25;
cursor: pointer;
}

img{
     height: 32px;
    width: 32px;
    margin-right: 10px;
    display: inline-block;
    /*
    border-radius: 50%;
    padding: 7px;
    background: #DFB93E1A 0% 0% no-repeat padding-box;
    margin-right: 18px;
    display: inline-block ; */
}
`

const TableDiv=styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
width:100%;

article{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 363px;
    
  h2{
      display: block;
        text-align: left;
        font-size:13px ;
        line-height: 20px;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
letter-spacing: 0px;
color: #D8AE25;
text-transform: capitalize;
margin-bottom: 23px;
    }
}
`
const Disc=styled.div`
height: 19px;
margin-right: 60px;
margin-bottom: 23px;
text-align: left;
font-size: 13px;
line-height: 20px;
font-weight: 500;
font-family: 'Poppins', sans-serif;
letter-spacing: 0px;
color: #232323;
text-transform: capitalize;
min-width: 100px;
`

const Content=styled.div`
margin-right: 50px;
text-align: left;
font-size: 13px;
line-height: 20px;
font-weight: 500;
font-family: 'Poppins', sans-serif;
letter-spacing: 0px;
color: #4D4D4D;
margin-bottom: 23px;
display: inline-block;
`

const Donations=styled.div`
height: 311px;
width: 1076px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 0px 3px #0000001A;
padding-top:32px;
padding-left: 40px;
padding-right: 32px;
`

const Heading=styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 25px;

button{
    background: #D8AE251A 0% 0% no-repeat padding-box;
border-radius: 4px;
text-align: center;
font-size: 16px;
line-height: 20px;
font-family: rubik, sans-serif;
font-weight: 400;
letter-spacing: 0px;
color: #747474;
text-transform: capitalize;
width: 107px;
height: 30px;
border: none;
}
`

const Expensandincome=styled.div`
display: flex;
flex-direction: column;
justify-content:start ;
width: 280px;


h2{
    text-align: left;
    font-size: 18px;
    line-height: 20px;
    font-family: rubik, sans-serif;
font-weight: 500;
letter-spacing: 0px;
color: #202124;
text-transform: capitalize;
margin-bottom: 56px;
}
`

const ControlDiv=styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
`
const Income=styled.div`
width: 140px;
display: flex;
flex-direction: column;
justify-content: flex-start;
font-family: 'Roboto', sans-serif;

h4{
    text-align: left;
    font-size:24px;
    line-height: 32px;
    font-weight: 500;
letter-spacing: 0px;
color: #02A343;
margin-bottom: 7px;
}

.expense{
    color: #D82525
}
p{
    text-align: left;
    font-size: 10px;
    line-height: 13px;
letter-spacing: 0px;
color: #0C2342;
    margin-bottom: 10.5px;
}
`

const Bars=styled.div`
width: 105px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: baseline;

div{
    border-radius: 3px solid #A0A0A0;
    background-color: #A0A0A0;
    width: 3px;
}
`

const GraphDiv=styled.div`
width: 690px;
height: 241px;
overflow:hidden ;
`

const Dashboard2=()=>{
    return(
        <TotalWrap>
            <h1>Temple Profile</h1>
            <Detailsdiv>
              <img alt="temple" src={images.temple}/>
        <Detailstemple>
            <button>Edit</button>
                <TableDiv>
                    <article>
                <h2>
                Temple Details
                </h2>
                <table>
                <tr>
    <td><Disc>Temple Name</Disc>
    </td>
    <td><Content>Aryan Samaj</Content></td>
  </tr>
  <tr>
    <td><Disc>Timing</Disc></td>
    <td><Content>Asha.Sing1@gmail.com</Content></td>
  </tr>
  <tr>
    <td><Disc>State</Disc></td>
    <td><Content>Karnataka</Content></td>
  </tr>
  <tr>
    <td><Disc>City</Disc></td>
    <td><Content>Bangalore</Content></td>
  </tr>
  <tr>
    <td><Disc>Pin Code</Disc></td>
    <td><Content>562218</Content></td>
  </tr>
  </table>
  </article>
  <article>
                <h2>
                Owner Details
                </h2>
                <table>
                <tr>
    <td><Disc>Temple Name</Disc>
    </td>
    <td><Content>Aryan Samaj</Content></td>
  </tr>
  <tr>
    <td><Disc>Email</Disc></td>
    <td><Content>Asha.Sing1@gmail.com</Content></td>
  </tr>
  <tr>
    <td><Disc>Phone</Disc></td>
    <td><Content>+91 8451686256</Content></td>
  </tr>
  </table>
        </article>
    </TableDiv>
<Disc>About</Disc>
<Content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus</Content>
<div style={{marginBottom:"23px",display:"flex"}}>
<img src={images.phoneno} alt="mail"/>
<Content>4:00Am-12:00pm</Content>
</div>
<div style={{marginBottom:"23px",display:"flex"}}>
<img src={images.location2} alt="mail"/>
<Content>sdfsdn asdknaskdnk jashdasjd jadskds</Content>
</div>
<div style={{marginBottom:"23px",display:"flex"}}>
<img src={images.phoneno} alt="mail"/>
<Content>+91 9663201008</Content>
</div>
</Detailstemple>
 </Detailsdiv>
 <Donations>
<Heading>
<h1>Donation</h1>
<button>Month</button>
</Heading>
<div style={{display:"flex",flexDirection:"row"}}>
<GraphDiv>
<Donation/>
</GraphDiv>
<Expensandincome>
<h2>Donation Status</h2>
<ControlDiv>
    <Income style={{marginRight:"30px"}}>
        <h4>₹ 2,52,695</h4>
        <p>
        Income
        </p>
        <Bars>
           <div style={{height:"19px"}}/>
           <div style={{height:"40px"}}/>
           <div style={{height:"19px"}}/>
           <div style={{height:"26px"}}/> 
           <div style={{height:"12px"}}/>
           <div style={{height:"31px"}}/>
           <div style={{height:"17px"}}/>
           <div style={{height:"6px"}}/>
        </Bars>
    </Income>
    <Income>
    <h4 className="expense">₹ 2,52,695</h4>
    <p>
    Expenses
        </p>
        <Bars>
           <div style={{height:"19px"}}/>
           <div style={{height:"40px"}}/>
           <div style={{height:"19px"}}/>
           <div style={{height:"26px"}}/> 
           <div style={{height:"12px"}}/>
           <div style={{height:"31px"}}/>
           <div style={{height:"17px"}}/>
           <div style={{height:"6px"}}/>
        </Bars>
    </Income>
</ControlDiv>
</Expensandincome>
</div>
 </Donations>
        </TotalWrap>
    );
}

export default Dashboard2;