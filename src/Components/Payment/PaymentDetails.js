import React,{useContext} from 'react';
import styled from 'styled-components';
import img from '../../Assets/Images/Images';
import Cardlistcontext from '../../ContextApi/Cardlistcontext';

const MainContainer=styled.div`
overflow-y: auto;
position:fixed;
top:0;
right:0;
z-index:100;
width: 349px;
height:100%;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 1px 8px #00000029;
`
const CloseDiv=styled.div`

padding:11px 13px 0px 0px;
float:right;
img{
    width: 16px;
    height: 16px;
    cursor:pointer;
}
`
const VendorDetailsDiv=styled.div`
padding:35px 14px 0px 28px;
height:100%;
`
const Header=styled.h6`
font: normal normal 500 20px/20px Roboto;
color: #D4AF37;
margin-bottom:24px;

`
const PlanNameDiv=styled.div`
display:flex;
flex-direction:row;
margin-bottom:20px;

p{
    width:126px;
    font: normal normal 500 13px/20px Poppins;
    color: #232323
}
span{
    font: normal normal normal 13px/20px roboto;
    color: #4D4D4D;
    margin-left:40px;

}
`
const PrizeDiv=styled(PlanNameDiv)`
`
const ValidityDiv=styled(PlanNameDiv)`
`
const Discription=styled.div`
width:270px;
P{
    font: normal normal 500 13px/20px Poppins;
    color: #232323;
    margin-bottom:20px;
}
span{
    font: normal normal normal 13px/20px Poppins;
    color: #4D4D4D;
margin-top:20px;
margin-top:8px;
}
`
const CustomerDetails =styled.div`
margin-top:29px;
padding-bottom:10px;

`
const CustomerHeader =styled(Header)``
const CustomerNameDiv=styled(PlanNameDiv)`

`
const CustEmailDiv=styled(PlanNameDiv)``
const CustContentDiv=styled(PlanNameDiv)``
const CustDate=styled(PlanNameDiv)`

`
const AddDiscountDiv=styled(PlanNameDiv)``

const PaymentDetails = () => {
    const  state =useContext(Cardlistcontext);
    const closePaymentDetails=()=>{
        state.setopenpaymentDetails(!state.openpaymentDetails)
    }
    return (
        <MainContainer>
            <CloseDiv>
                <img onClick={closePaymentDetails} src={img.close} alt='closeimg'/>
            </CloseDiv>

             <VendorDetailsDiv>
                <Header>
                   Plan Details
                </Header>
                     <PlanNameDiv>
                         <p>Plan Name</p>
                         <span>Silver Plan</span>
                     </PlanNameDiv>
                     <PrizeDiv>
                         <p>Validity</p>
                         <span>2 month</span>
                     </PrizeDiv>
                     <ValidityDiv>
                         <p>Discount Added</p>
                         <span>24 Dec 2022</span>
                     </ValidityDiv>
                     <AddDiscountDiv>
                         <p>Discount Prize</p>
                         <span>10 %</span>
                     </AddDiscountDiv>
                    
                     <Discription>
                         <p>Discription</p>
                         <span>Lorem Ipsum is simply dummy text 
                             of the printing and typesetting industry. 
                            </span>
                     </Discription> 

<CustomerDetails>
              <CustomerHeader>
              Customer Details
                </CustomerHeader>
                     <CustomerNameDiv>
                         <p>Name</p>
                         <span>Saumya Singh</span>
                     </CustomerNameDiv>
                     <CustEmailDiv>
                         <p>Email</p>
                         <span>Saumya@verzeo.com</span>
                     </CustEmailDiv>
                     <CustContentDiv>
                         <p>Contact</p>
                         <span>+91 8587934867</span>
                     </CustContentDiv>
                     <CustDate>
                         <p>Date</p>
                         <span>24/12/2021</span>
                     </CustDate>

                     <Header>
                     Payment Details
                </Header>
                     <PlanNameDiv>
                         <p>Transaction ID</p>
                         <span>254ATYE566481TM</span>
                     </PlanNameDiv>
                     <PrizeDiv>
                         <p>Order ID</p>
                         <span>62158135</span>
                     </PrizeDiv>
                     <ValidityDiv>
                         <p>Prize</p>
                         <span>₹ 1000</span>
                     </ValidityDiv>
                     <AddDiscountDiv>
                         <p>Payment Mode</p>
                         <span>CARD</span>
                     </AddDiscountDiv>

              </CustomerDetails>
            </VendorDetailsDiv>
             

        </MainContainer>
    )
}
export default PaymentDetails;

