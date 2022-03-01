import styled from "styled-components";
import Pagination from "../../Utils/Pagination";
import {NavLink,Outlet } from "react-router-dom";

const Matrimony = () => {
  return (
      <WrapPaginationandMainList>
        <MainListContainer>
          <Header>Onboarding list</Header>
          <Section>
          <NavLink style={({ isActive }) => ({
                     color: isActive ? '#DFB93E' : '#606060',
                     border: isActive && '1px solid #DFB93E',
                     borderRadius:isActive && '8px',
                     backgroundColor:isActive && '#DFB93E0D'
                  })}
                  to="/matrimonylist/vendor">Vendors</NavLink>
            <NavLink style={({ isActive }) => ({
                    color: isActive ? '#DFB93E' : '#606060',
                    border: isActive && '1px solid #DFB93E',
                    borderRadius:isActive && '8px',
                    backgroundColor:isActive && '#DFB93E0D'
                    
                  })} to="/matrimonylist/groom">Groom</NavLink>
                   <NavLink style={({ isActive }) => ({
                    color: isActive ? '#DFB93E' : '#606060',
                    border: isActive && '1px solid #DFB93E',
                    borderRadius:isActive && '8px',
                    backgroundColor:isActive && '#DFB93E0D'
                  })} to="/matrimonylist/bride">Bride</NavLink>
          </Section>
          <Outlet/>
        </MainListContainer>
        <Pagdiv>
          <Pagination/>
          </Pagdiv>
      </WrapPaginationandMainList>
  );
};
export default Matrimony;

const Pagdiv=styled.div`
width: 100%;
`

const WrapPaginationandMainList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`

const MainListContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 100%;
padding:0px 25px;
  padding-top: 23px;
  padding-bottom: 11px;
  overflow: auto;
  
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d8ae25;
    border-radius: 5px;
  }
`

const Header = styled.h1`
  text-align: left;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 25px;
  font-weight: 500;
  font-style: normal;
letter-spacing: 0px;
color: #000000;
`

const Section = styled.div`
  height: 38px;
  display: flex;
  flex-direction: row;
  margin:31px 0px;

  a{
    border: none;
    border-radius:none;
    background-color:none;
    text-decoration:none;
    width:108px;
    height:100%;
    color: #A3A3A3;
    text-align: center;
    font-size:16px;
    font-weight: 500;
    font-style: normal;
    font-family: 'Poppins', sans-serif;
letter-spacing: 0px;
color: #606060;
    line-height: 38px;
  }
`