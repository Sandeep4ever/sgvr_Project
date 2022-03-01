import React from 'react';
import styled from 'styled-components';
import img from '../Assets/Images/Images';
import OnlySearchbar from './OnlySearchbar';

const MainContainer=styled.div`
width: 100%;
padding-left: 31px;
padding-right: 31px;
padding-top:23px;
`
const Header=styled.p`
font: normal normal 500 16px/25px Poppins;
color: #000000;
`
const SearchContainer=styled.div`
    width:100%;
    margin-top: 25px;
    display: flex;
   justify-content: space-between;
`
const CreatePart =styled.div`
width: 112px;
height: 38px;
background: #D8AE251A 0% 0% no-repeat padding-box;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
p{
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
color: #D8AE25;
cursor: pointer;

}
img{
  width: 16px;
  height: 16px;
  margin-left: 16px;
  cursor: pointer;
}
`
const Searchbar = ({openForm , title,search,setsearch}) => {
    return (
        <MainContainer >
            <Header>
                {title}
            </Header>
           <SearchContainer>
              <OnlySearchbar search={search} setsearch={setsearch} />
              <CreatePart  onClick={openForm}>
                 <p>Create</p>
                 <img  src={img.plus} alt='plusimg'/>
              </CreatePart>
           </SearchContainer>
        </MainContainer>
    )
}

export default Searchbar;