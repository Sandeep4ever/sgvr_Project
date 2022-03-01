// import React,{useState,useContext} from 'react';
// import styled from 'styled-components';
// import img from '../../Assets/Images/Images';
// import data from './Data';
// import Form from './Form';
// import Cardlistcontext from '../../ContextApi/Cardlistcontext';
// import SideNav from '../../Utils/SideNav';


// const CardList = () => {
//   const  state = useContext(Cardlistcontext);
 
//    const showForm=()=>{
//     state.setCardlistClose(!state.cardlistClose);
   
//    }
//     return (
//         <WrapContainer>
//                 <SideNav/>
//         <MainListContainer>
//         {state.cardlistClose &&
//  <>
//             <Header>
//                 Onboarding list
//             </Header>
//            <SearchContainer>
//                <SearchingPart>
//                <input type='text' placeholder='search..' />
//               <div> <img src={img.search} alt='image'/></div>
//               </SearchingPart>
//               <CreatePart>
//                  <p onClick={showForm}>Create</p>
//                  <img  src={img.plus} alt='image'/>
//               </CreatePart>
//            </SearchContainer>
//            <ForRow>
//            {data.map((items,index)=>{
//                return(
//                 <CardContainer key={index}>
//                 <Deleteicon>
//                     <img src={img.del} alt='delete'/>
//                 </Deleteicon>
//               <Head>
//                  {items.name}
//               </Head>
//               <Location>
//                   <div>
//                      <img src={img.location} alt='phone'/>
//                     <span>{items.city} </span>
//                 </div>
//                 <p>{items.address} </p>
//               </Location>
//               <Contact>
//                  <PhoneNo>
//                     <img src={img.phone} alt='phone'/>
//                      <p>{items.phone}</p>
//                  </PhoneNo>
//                  <Mail>
//                     <img src={img.mail} alt='mail'/>
//                     <p>{items.email}</p>
//                  </Mail>
//               </Contact>
//               <Text>
//                <div> <p>{items.Jevellery}  </p></div>
//                <div> <p>{items.Restaurants}</p></div>
//                <div> <p>{items.Restaurants} </p></div>
//               </Text>
//                  <Editbutton>
//                      Edit
//                  </Editbutton>
//             </CardContainer>
//                )
//            })
//            }
// </ForRow>      
//        </>
// }
//     { !state.cardlistClose &&
//     <Form/>
//     }
//         </MainListContainer>
//         </WrapContainer>
//     )
// }
// export default CardList;

// const WrapContainer=styled.div`
// display: flex;
// `
// const Adject=styled.div`
// position: absolute;
// top:100px;
// right: 0;
// `
// const MainListContainer=styled.div`
// width: 100%;
// padding-left: 31px;
// padding-right: 31px;
// padding-top:23px;
// `
// const Header=styled.header`
// /* font: normal normal medium 16px/25px Poppins; */
// font-family: 'Poppins', sans-serif;
//     font-size: 16px;
// color: #000000;
// `
// const SearchContainer=styled.div`
//     width:100%;
//     margin-top: 25px;
//     display: flex;
//    justify-content: space-between;
// `
// const SearchingPart =styled.div`
// display: flex;
// input{
//     width:204px;
//     height: 38px;
//     background: #F9F9F9 0% 0% no-repeat padding-box;
// border-radius: 0px 8px 8px 0px;
// border-style: none;
// border-radius: 8px;
// }
// img{
//     width: 20px;
// height: 20px;

// }
// div{
//     width: 38px;
//     height: 38px;
//     padding: 4px;
// background: #D8AE25 0% 0% no-repeat padding-box;
// border-radius: 0px 8px 8px 0px;
// }

// `
// const CreatePart =styled.div`
// width: 112px;
// height: 38px;
// background: #D8AE251A 0% 0% no-repeat padding-box;
// border-radius: 8px;
// display: flex;
// align-items: center;
// justify-content: center;
// p{
//     /* font: normal normal medium 14px/21px Poppins; */
//     font-family: 'Poppins', sans-serif;
//     font-size: 14px;
// color: #D8AE25;
// }
// img{
//   width: 16px;
//   height: 16px;
//   margin-left: 16px;
//   cursor: pointer;
// }
// `
// const CardContainer=styled.div`

// width: 350px;
// height: 197px;
// margin-top: 21px;
// padding: 13px 9px 14px 13px;
// background: #FFFFFF 0% 0% no-repeat padding-box;
// box-shadow: 0px 0px 6px #0000000F;
// `
// const Head=styled.header`
// margin-top: -12px;
// font: normal normal medium 16px/21px Roboto;
// font-family: 'Roboto', sans-serif;
//     font-size: 16px;
// color: #1A1616;
// `
// const Deleteicon =styled.div`
// display: flex;
// justify-content: flex-end;
// img{

// }
// `
// const Location=styled.div`
// display: flex;
// padding-top: 5px;

// div{
//     display: flex;

//     span{
//         margin-left: 3px;
//         font: normal normal medium 10px/13px Roboto;
//         font-family: 'Roboto', sans-serif;
//     font-size: 10px;
// color: #A0A0A0;
//     }
// }
// p{
//     font: normal normal medium 11px/15px Roboto;
//     font-family: 'Roboto', sans-serif;
//     font-size: 11px;
// color: #A0A0A0;
// padding-left: 9px;

// }

// `
// const Contact=styled.div`
// display: flex;
// padding-top:17px;

// `
// const PhoneNo=styled.div`
// display: flex;
// p{
//     padding-left: 5px;
//     font-family: 'Roboto', sans-serif;
//     font-size: 11px;
//     color: #8C8B9E;
// }
// `
// const Mail=styled.div`
// display: flex;
// padding-left: 20px;
// p{
//     padding-left: 5px;
//     /* font-family: normal normal medium 11px/15px Roboto; */
//     font-family: 'Roboto', sans-serif;
//     font-size: 11px;
//     color: #8C8B9E;
// }

// `
// const Text=styled.div`
// display: flex;
// justify-content: space-between;
// padding-top: 16px;

// div{
//     width: 87px;
//     height: 23px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background: #F2F2F2 0% 0% no-repeat padding-box;
// border-radius: 4px;
// p{
//     font: normal normal medium 11px/15px Roboto;
//     font-family: 'Roboto', sans-serif;
// color: #8C8B9E;
// font-size: 11px;
// }
// }
// `
// const Editbutton=styled.div`
// flex-grow:Editbutton;
// display: flex;
// align-items: center;
// justify-content: center;
// width: 328px;
// height: 37px;
// background: #F8EECD 0% 0% no-repeat padding-box;
// border: 1px solid #E0D7B9;
// border-radius: 4px;
// margin-top: 15px;
// font-family: poppins;
// font-size: 14px;
// color: #BF9D2C;
// `
// const ForRow =styled.div`
// display: flex;
// justify-content: space-between;
// flex-wrap: wrap;
// `