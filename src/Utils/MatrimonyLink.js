import React from 'react';
import styled from 'styled-components';
import OnlySearchbar from './OnlySearchbar';
import {NavLink} from 'react-router-dom';

const MainListContainer=styled.div`
`
const Header=styled.header`
font: normal normal 500 16px/25px Poppins;
color: #000000;
`
const Section =styled.div`
display:flex;
flex-direction:row;
margin-top:31px;
`
const VendorsDiv =styled.div`
width: 108px;
height: 38px;
display: flex;
align-items:center;
justify-content: center;
cursor: pointer;
font: normal normal 500 16px/25px Poppins;
a{
    text-decoration:none;
    color: #606060;
}
&:active{
    background: #DFB93E0D 0% 0% no-repeat padding-box;
border: 1px solid #DFB93E;
border-radius: 8px;
color: #DFB93E;
}
`
const SearchContainer =styled.div`

`
const GroomDiv =styled(VendorsDiv)`

`
const BrideDiv =styled(VendorsDiv)`

`

const MatrimonyLink = () => {
    return (
        <MainListContainer>
            <Header>
                Onboarding list
            </Header>
            <Section>
                <VendorsDiv>
                     <NavLink to="/about"> Vendors</NavLink>
                 </VendorsDiv> 
                <GroomDiv>
                <NavLink to="/about">Groom</NavLink>
                    </GroomDiv>
               <BrideDiv>
                  <NavLink to="/about"> Bride</NavLink>
               </BrideDiv>
            </Section>
           <SearchContainer>
              <OnlySearchbar/>
           </SearchContainer>
           </MainListContainer>
    )
}

export default MatrimonyLink
