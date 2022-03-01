import React from 'react';
import styled from 'styled-components';
import img from '../Assets/Images/Images';
import { NavLink } from 'react-router-dom';
import SvgIcon from "@material-ui/core/SvgIcon";

const MainNavContainer=styled.div`
background:#ffffff;
width: 100vw;
height: 10.41vh;
box-shadow: 0px 0px 11px #0000000F;
display: flex;
align-items: center;
justify-content:space-between;
padding:0 27px 0 27px;
`
const FirstContainer =styled.div`
display: flex;
`
const Logo=styled.div`
display:flex;
align-items:center;
img{
   width: 46px;
height: 44px;
}
p{
   font: normal normal normal 18px/23px Marcellus;
letter-spacing: 0.14px;
color: #B98C13;
margin-left:12px;
}
`
const SecondContainer=styled.div`
a{
   margin-left: 42px;
   font: normal normal 500 16px/25px Poppins;
   text-decoration: none;
   color: #000000;
  
   border-bottom: 3px solid transparent;
  
}
`
const Navbar = () => {
    return (
        <MainNavContainer>
           <FirstContainer>
              <Logo>
                 <img src={img.logo1} alt='logo1img'/>
                 <p>Daivajnya brahmin</p>
              </Logo>
           </FirstContainer>
           <SecondContainer>
           <NavLink to="/messages">
       <SvgIcon >
       <g id="Group_4969" data-name="Group 4969" transform="translate(0.772)">
    <g id="Group_4964" data-name="Group 4964" transform="translate(0 1)">
      <path id="_5402361_bubble_chat_message_notification_comment_icon" data-name="5402361_bubble_chat_message_notification_comment_icon" d="M12.5,3A9.51,9.51,0,0,0,3,12.5a9.39,9.39,0,0,0,2.44,6.35l-2.29,2.3a.47.47,0,0,0-.11.54A.5.5,0,0,0,3.5,22h9a9.5,9.5,0,0,0,0-19Z" transform="translate(-2.998 -3)" fill="none" stroke="#2c2c2c" strokeWidth="1.5"/>
      <circle id="Ellipse_311" data-name="Ellipse 311" cx="1" cy="1" r="1" transform="translate(4.481 9.5)" fill="#2c2c2c"/>
      <circle id="Ellipse_312" data-name="Ellipse 312" cx="1" cy="1" r="1" transform="translate(8.481 9.5)" fill="#2c2c2c"/>
      <circle id="Ellipse_313" data-name="Ellipse 313" cx="1" cy="1" r="1" transform="translate(12.481 9.5)" fill="#2c2c2c"/>
    </g>
    <g id="Ellipse_315" data-name="Ellipse 315" transform="translate(14.002)" fill="#d3161c" stroke="#fff" strokeWidth="1">
      <circle cx="5" cy="5" r="5" stroke="none"/>
      <circle cx="5" cy="5" r="4.5" fill="none"/>
    </g>
  </g>
    
       </SvgIcon>
       
       </NavLink>
          
           <NavLink   to="/notification">
              <SvgIcon>
           <g id="Icon_ionic-ios-notifications-outline" data-name="Icon ionic-ios-notifications-outline" transform="translate(0 0)">
    <path id="Path_23" data-name="Path 23" d="M19.134,28.336a.712.712,0,0,0-.7.561,1.378,1.378,0,0,1-.275.6,1.039,1.039,0,0,1-.885.324,1.057,1.057,0,0,1-.885-.324,1.378,1.378,0,0,1-.275-.6.712.712,0,0,0-.7-.561h0a.717.717,0,0,0-.7.874,2.457,2.457,0,0,0,2.557,2.04,2.452,2.452,0,0,0,2.557-2.04.72.72,0,0,0-.7-.874Z" transform="translate(-8.503 -9.25)"/>
    <path id="Path_24" data-name="Path 24" d="M24.131,20.223c-.847-1.116-2.513-1.771-2.513-6.769,0-5.13-2.265-7.192-4.377-7.687-.2-.049-.341-.115-.341-.324V5.283a1.349,1.349,0,0,0-1.32-1.353h-.033a1.349,1.349,0,0,0-1.32,1.353v.159c0,.2-.143.275-.341.324-2.117.5-4.377,2.557-4.377,7.687,0,5-1.666,5.647-2.513,6.769a1.091,1.091,0,0,0,.874,1.749h15.4A1.092,1.092,0,0,0,24.131,20.223Zm-2.144.319H9.164a.241.241,0,0,1-.181-.4A6.661,6.661,0,0,0,10.137,18.3a12.461,12.461,0,0,0,.786-4.85,8.433,8.433,0,0,1,1.149-4.773A3.528,3.528,0,0,1,14.2,7.164a1.927,1.927,0,0,0,1.023-.577.435.435,0,0,1,.654-.011,1.992,1.992,0,0,0,1.034.588,3.528,3.528,0,0,1,2.128,1.518,8.433,8.433,0,0,1,1.149,4.773,12.461,12.461,0,0,0,.786,4.85,6.737,6.737,0,0,0,1.182,1.864A.227.227,0,0,1,21.987,20.542Z" transform="translate(-6.775 -3.93)"/>
  </g>
  <g id="Ellipse_37" data-name="Ellipse 37" transform="translate(10.027 1)" fill="#d3161c" stroke="#fff" strokeWidth="1">
    <circle cx="5" cy="5" r="5" stroke="none"/>
    <circle cx="5" cy="5" r="4.5" fill="none"/>
  </g>
       </SvgIcon>
           </NavLink>
           </SecondContainer>
        </MainNavContainer>
    )
}
export default Navbar
