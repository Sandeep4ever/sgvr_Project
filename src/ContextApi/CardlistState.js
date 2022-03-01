import { useState } from "react/cjs/react.development";
import Cardlistcontext from "./Cardlistcontext";
import images from "../Assets/Images/Images";
import "react-toastify/dist/ReactToastify.css";
const CardlistState = (props) => {
  
    

  const [OnbordingData] = useState([
    {
      Jevellery: "Chetmani jewellers",
      name: "Siddharth Patel",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      phone: 91 + 9847656588,
      email: "Sidharthpatel@gmail.com",
      image: `${images.avatar}`,
    },
    {
      Jevellery: "Chetmani jewellers",
      name: "Siddharth Patel",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      phone: 91 + 9847656588,
      email: "Sidharthpatel@gmail.com",
      image: `${images.avatar}`,
    },
    {
      Jevellery: "Chetmani jewellers",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      phone: 91 + 9847656588,
      email: "Sidharthpatel@gmail.com",
      name: "Siddharth Patel",
      image: `${images.avatar}`,
    },
    {
      Jevellery: "Chetmani jewellers",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      phone: 91 + 9847656588,
      email: "Sidharthpatel@gmail.com",
      name: "Siddharth Patel",
      image: `${images.avatar}`,
    },
    {
      Jevellery: "Chetmani jewellers",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      phone: 91 + 9847656588,
      email: "Sidharthpatel@gmail.com",
      name: "Siddharth Patel",
      image: `${images.avatar}`,
    },
    {
      Jevellery: "Chetmani jewellers",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      phone: 91 + 9847656588,
      email: "Sidharthpatel@gmail.com",
      name: "Siddharth Patel",
      image: `${images.avatar}`,
    },
  ]);

  const [PostData] = useState([
    {
      Jevellery: "Chetmani jewellers",
      name: "Siddharth Patel",
      date: "24/01/2021",
      image: `${images.jewelrs}`,
    },
    {
      Jevellery: "Chetmani jewellers",
      name: "Siddharth Patel",
      date: "24/01/2021",
      image: `${images.jewelrs}`,
    },
    {
      Jevellery: "Chetmani jewellers",
      name: "Siddharth Patel",
      date: "24/01/2021",
      image: `${images.jewelrs}`,
    },
    {
      Jevellery: "Chetmani jewellers",
      name: "Siddharth Patel",
      date: "24/01/2021",
      image: `${images.jewelrs}`,
    },
    {
      Jevellery: "Chetmani jewellers",
      name: "Siddharth Patel",
      date: "24/01/2021",
      image: `${images.jewelrs}`,
    },
    {
      Jevellery: "Chetmani jewellers",
      name: "Siddharth Patel",
      date: "24/01/2021",
      image: `${images.jewelrs}`,
    },
  ]);
  const [onboardingEventsList] = useState([
    {
      name: "Ganesh Chathurthi",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      image: `${images.ganesh}`,
    },
    {
      name: "Dhurga Puja",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      image: `${images.jaydurga}`,
    },
    {
      name: "Dhurga Puja",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      image: `${images.football}`,
    },
    {
      name: "Ganesh Chathurthi",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      image: `${images.ganesh}`,
    },
    {
      name: "Dhurga Puja",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      image: `${images.jaydurga}`,
    },
    {
      name: "Dhurga Puja",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      image: `${images.football}`,
    },
  ]);
  const [lastnameData, setlastnameData] = useState([
    {
      id: 0,
      lastname: "Shinde",
      date: "24/01/2021",
    },
    {
      id: 1,
      lastname: "Sign",
      date: "24/01/2021",
    },
    {
      id: 2,
      lastname: "Agarwal",
      date: "24/01/2021",
    },
    {
      id: 3,
      lastname: "Prathek",
      date: "24/01/2021",
    },
    {
      id: 4,
      lastname: "Amit Guptha",
      date: "24/01/2021",
    },
  ]);

  const [paymentlistData] = useState([
    {
      id: 0,
      date: "24/01/2021",
      shopname: "Shinde",
      shopcategory: "vendor",
      productname: "Shoes nike jordan",
      paymentamount: "₹ 1000/-",
      paymentmode: "UPI",
    },
    {
      id: 1,
      date: "24/01/2021",
      shopname: "Shinde",
      shopcategory: "vendor",
      productname: "Shoes nike jordan",
      paymentamount: "₹ 1000/-",
      paymentmode: "UPI",
    },
    {
      id: 2,
      date: "24/01/2021",
      shopname: "Shinde",
      shopcategory: "vendor",
      productname: "Shoes nike jordan",
      paymentamount: "₹ 1000/-",
      paymentmode: "UPI",
    },
    {
      id: 3,
      date: "24/01/2021",
      shopname: "Shinde",
      shopcategory: "vendor",
      productname: "Shoes nike jordan",
      paymentamount: "₹ 1000/-",
      paymentmode: "UPI",
    },
    {
      id: 4,
      date: "24/01/2021",
      shopname: "Shinde",
      shopcategory: "vendor",
      productname: "Shoes nike jordan",
      paymentamount: "₹ 1000/-",
      paymentmode: "UPI",
    },
    {
      id: 5,
      date: "24/01/2021",
      shopname: "Shinde",
      shopcategory: "vendor",
      productname: "Shoes nike jordan",
      paymentamount: "₹ 1000/-",
      paymentmode: "UPI",
    },
    {
      id: 6,
      date: "24/01/2021",
      shopname: "Shinde",
      shopcategory: "vendor",
      productname: "Shoes nike jordan",
      paymentamount: "₹ 1000/-",
      paymentmode: "UPI",
    },
    {
      id: 7,
      date: "24/01/2021",
      shopname: "Shinde",
      shopcategory: "vendor",
      productname: "Shoes nike jordan",
      paymentamount: "₹ 1000/-",
      paymentmode: "UPI",
    },
    {
      id: 8,
      date: "24/01/2021",
      shopname: "Shinde",
      shopcategory: "vendor",
      productname: "Shoes nike jordan",
      paymentamount: "₹ 1000/-",
      paymentmode: "UPI",
    },
  ]);

  const [messagesData] = useState([
    {
      id: 0,
      name: "Saumya",
      content: "Lorem Ipsum is simply dummy",
      date: "Today",
      image: `${images.people}`,
    },
    {
      id: 1,
      name: "Saumya",
      content: "Lorem Ipsum is simply dummy",
      date: "Today",
      image: `${images.people}`,
    },
    {
      id: 2,
      name: "Saumya",
      content: "Lorem Ipsum is simply dummy",
      date: "Today",
      image: `${images.people}`,
    },
    {
      id: 3,
      name: "Saumya",
      content: "Lorem Ipsum is simply dummy",
      date: "Today",
      image: `${images.people}`,
    },
    {
      id: 4,
      name: "Saumya",
      content: "Lorem Ipsum is simply dummy",
      date: "Today",
      image: `${images.people}`,
    },
    {
      id: 5,
      name: "Saumya",
      content: "Lorem Ipsum is simply dummy",
      date: "Today",
      image: `${images.people}`,
    },
  ]);

  const [groomDataList] = useState([
    {
      id: 0,
      date: "24/01/2021",
      groomname: "Mahesh Shinde",
      age: "28",
      profession: "UI/UX Designer",
      fathername: "Sudhakar Verma",
      status: "Active",
    },
    {
      id: 1,
      date: "24/01/2021",
      groomname: " Mahesh Shinde",
      age: "28",
      profession: "UI/UX Designer",
      fathername: "Sudhakar Verma",
      status: "Active",
    },
    {
      id: 2,
      date: "24/01/2021",
      groomname: "Mahesh Shinde",
      age: "28",
      profession: "UI/UX Designer",
      fathername: "Sudhakar Verma",
      status: "Active",
    },
    {
      id: 3,
      date: "24/01/2021",
      groomname: "Mahesh Shinde",
      age: "28",
      profession: "UI/UX Designer",
      fathername: "Sudhakar Verma",
      status: "Active",
    },
    {
      id: 4,
      date: "24/01/2021",
      groomname: "Mahesh Shinde",
      age: "28",
      profession: "UI/UX Designer",
      fathername: "Sudhakar Verma",
      status: "Active",
    },
    {
      id: 5,
      date: "24/01/2021",
      groomname: "Mahesh Shinde",
      age: "28",
      profession: "UI/UX Designer",
      fathername: "Sudhakar Verma",
      status: "Active",
    },
    {
      id: 6,
      date: "24/01/2021",
      groomname: "Mahesh Shinde",
      age: "28",
      profession: "UI/UX Designer",
      fathername: "Sudhakar Verma",
      status: "Active",
    },
    {
      id: 7,
      date: "24/01/2021",
      groomname: "Mahesh Shinde",
      age: "28",
      profession: "UI/UX Designer",
      fathername: "Sudhakar Verma",
      status: "Active",
    },
    {
      id: 8,
      date: "24/01/2021",
      groomname: "Mahesh Shinde",
      age: "28",
      profession: "UI/UX Designer",
      fathername: "Sudhakar Verma",
      status: "Active",
    },
  ]);

  const [vendorDataList, setVendorDataList] = useState([
    {
      name: "Sandeep kumar",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      phone: 91 + 9847656588,
      email: "Sidharthpatel@gmail.com",
      Jevellery: "Function Hall",
    },
    {
      name: "Amogh",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      phone: 91 + 9847656588,
      email: "Sidharthpatel@gmail.com",
      Jevellery: "Function Hall",
    },
    {
      name: "Deepam",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      phone: 91 + 9847656588,
      email: "Sidharthpatel@gmail.com",
      Jevellery: "Function Hall",
    },
    {
      name: "Sandeep kumar",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      phone: 91 + 9847656588,
      email: "Sidharthpatel@gmail.com",
      Jevellery: "Function Hall",
    },
    {
      name: "Amogh",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      phone: 91 + 9847656588,
      email: "Sidharthpatel@gmail.com",
      Jevellery: "Function Hall",
    },
    {
      name: "Deepam",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      phone: 91 + 9847656588,
      email: "Sidharthpatel@gmail.com",
      Jevellery: "Function Hall",
    },
    {
      name: "Sandeep kumar",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      phone: 91 + 9847656588,
      email: "Sidharthpatel@gmail.com",
      Jevellery: "Function Hall",
    },
    {
      name: "Amogh",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      phone: 91 + 9847656588,
      email: "Sidharthpatel@gmail.com",
      Jevellery: "Function Hall",
    },
    {
      name: "Deepam",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      phone: 91 + 9847656588,
      email: "Sidharthpatel@gmail.com",
      Jevellery: "Function Hall",
    },
    {
      name: "Sandeep kumar",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      phone: 91 + 9847656588,
      email: "Sidharthpatel@gmail.com",
      Jevellery: "Function Hall",
    },
    {
      name: "Amogh",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      phone: 91 + 9847656588,
      email: "Sidharthpatel@gmail.com",
      Jevellery: "Function Hall",
    },
    {
      name: "Deepam",
      city: "Bangalore",
      address: "HSR Layout sector 7",
      phone: 91 + 9847656588,
      email: "Sidharthpatel@gmail.com",
      Jevellery: "Function Hall",
    },
  ]);

  const [subscriptionPlaneDataList] = useState([
    {
      id: 0,
      planename: "Mahesh Shinde",
      planeprize: "₹ 250",
      validity: "2 Month",
      currentdiscount: "20%",
      status: "Active",
    },
    {
      id: 1,
      planename: "Mahesh Shinde",
      planeprize: "₹ 250",
      validity: "2 Month",
      currentdiscount: "20%",
      status: "Active",
    },
    {
      id: 2,
      planename: "Mahesh Shinde",
      planeprize: "₹ 250",
      validity: "2 Month",
      currentdiscount: "20%",
      status: "Active",
    },
    {
      id: 3,
      planename: "Mahesh Shinde",
      planeprize: "₹ 250",
      validity: "2 Month",
      currentdiscount: "20%",
      status: "Active",
    },
    {
      id: 4,
      planename: "Mahesh Shinde",
      planeprize: "₹ 250",
      validity: "2 Month",
      currentdiscount: "20%",
      status: "Active",
    },
    {
      id: 5,
      planename: "Mahesh Shinde",
      planeprize: "₹ 250",
      validity: "2 Month",
      currentdiscount: "20%",
      status: "Active",
    },
    {
      id: 6,
      planename: "Mahesh Shinde",
      planeprize: "₹ 250",
      validity: "2 Month",
      currentdiscount: "20%",
      status: "Active",
    },
  ]);
  const [profileData] = useState([
    {
      id: 0,
      name: "Mahesh Shinde",
      email: "Mahesh.Shinde@gmail.com",
      image: `${images.people}`,
    },
    {
      id: 1,
      name: "Mahesh Shinde",
      email: "Mahesh.Shinde@gmail.com",
      image: `${images.people}`,
    },
    {
      id: 2,
      name: "Mahesh Shinde",
      email: "Mahesh.Shinde@gmail.com",
      image: `${images.people}`,
    },
    {
      id: 3,
      name: "Mahesh Shinde",
      email: "Mahesh.Shinde@gmail.com",
      image: `${images.people}`,
    },
    {
      id: 4,
      name: "Mahesh Shinde",
      email: "Mahesh.Shinde@gmail.com",
      image: `${images.people}`,
    },
    {
      id: 5,
      name: "Mahesh Shinde",
      email: "Mahesh.Shinde@gmail.com",
      image: `${images.people}`,
    },
    {
      id: 6,
      name: "Mahesh Shinde",
      email: "Mahesh.Shinde@gmail.com",
      image: `${images.people}`,
    },
    {
      id: 7,
      name: "Mahesh Shinde",
      email: "Mahesh.Shinde@gmail.com",
      image: `${images.people}`,
    },
    {
      id: 8,
      name: "Mahesh Shinde",
      email: "Mahesh.Shinde@gmail.com",
      image: `${images.people}`,
    },
    {
      id: 9,
      name: "Mahesh Shinde",
      email: "Mahesh.Shinde@gmail.com",
      image: `${images.people}`,
    },
    {
      id: 10,
      name: "Mahesh Shinde",
      email: "Mahesh.Shinde@gmail.com",
      image: `${images.people}`,
    },
    {
      id: 11,
      name: "Mahesh Shinde",
      email: "Mahesh.Shinde@gmail.com",
      image: `${images.people}`,
    },
    {
      id: 12,
      name: "Mahesh Shinde",
      email: "Mahesh.Shinde@gmail.com",
      image: `${images.people}`,
    },
    {
      id: 13,
      name: "Mahesh Shinde",
      email: "Mahesh.Shinde@gmail.com",
      image: `${images.people}`,
    },
    {
      id: 14,
      name: "Mahesh Shinde",
      email: "Mahesh.Shinde@gmail.com",
      image: `${images.people}`,
    },
    {
      id: 15,
      name: "Mahesh Shinde",
      email: "Mahesh.Shinde@gmail.com",
      image: `${images.people}`,
    },
  ]);
  const [cardlistClose, setCardlistClose] = useState(true);

  const [uploadFile, setUploadFile] = useState(true);
  const [vendorDetailshandle, setVendorDetailshandle] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [changeScreeing, setChangeScreeing] = useState("firstScreen");
  const [showGroomDetails, setshowGroomDetails] = useState(false);
  const [showSubscriptionForm, setShowSubscriptionForm] = useState(false);
  const [subscribedDataList, setsubscribedDataList] = useState([]);
  const [openCommiteeDetails, setOpenCommiteeDetails] = useState(false);
  const [openpaymentDetails, setopenpaymentDetails] = useState(false);
  const [openCreateEventForm, setopenCreateEventForm] = useState(false);
  // vendorData is a api data
  const [vendorData, setVendorData] = useState([]);
  // index of vendordata
  const [currentVendorIndex, setCurrentVendorIndex] = useState(null);
  // this state for groom api data
  const [groomData, setGroomData] = useState([]);
  const [currentGroomIndex, setcurrentGroomIndex] = useState(null);
  //for community pass the function
  let passgetFunc;
  //use in onlysearchbar and communitydashborad api data
  const [getCommunityData, setGetCommunityData] = useState([]);
  // this state for commiteeform submit type when update and save
  const [communityType, setCommunityType] = useState();
  // this state for countmember in table1 and show in communitydashbord
  const [countMember, setCountMember] = useState();
  //state for  committememberData
  const [committememberData, setCommittememberData] = useState([]);
  // this state for commiteemember search
  const [commiteemembersSearch, setCommiteemembersSearch] = useState([]);
  // this state for Community Admin Dashboard for edit take current Id.
  const [dashboradCurrentId, setdashboradCurrentId] = useState();
  // for community Admin dashboard commitee Profile api data
  const [commtteProfile, setCommtteProfile] = useState([{}]);
  // for CommiteeMember api data in community Admin dashboard
  const [committeMemberData, setcommitteMemberData] = useState([{}]);
  //used for loader
  const [loader, setloader] = useState(false);
  //for eventType in create event form
  const [EventType, setEventType] = useState();

  return (
    <>
      <Cardlistcontext.Provider
        value={{
          cardlistClose,
          setCardlistClose,
          OnbordingData,
          PostData,
          lastnameData,
          setlastnameData,
          uploadFile,
          setUploadFile,
          paymentlistData,
          messagesData,
          vendorDetailshandle,
          setVendorDetailshandle,
          groomDataList,
          searchInput,
          setSearchInput,
          vendorDataList,
          setVendorDataList,
          changeScreeing,
          setChangeScreeing,
          showGroomDetails,
          setshowGroomDetails,
          subscriptionPlaneDataList,
          showSubscriptionForm,
          setShowSubscriptionForm,
          subscribedDataList,
          setsubscribedDataList,
          onboardingEventsList,
          openCommiteeDetails,
          setOpenCommiteeDetails,
          openpaymentDetails,
          setopenpaymentDetails,
          openCreateEventForm,
          setopenCreateEventForm,
          vendorData,
          setVendorData,
          currentVendorIndex,
          setCurrentVendorIndex,
          groomData,
          setGroomData,
          currentGroomIndex,
          setcurrentGroomIndex,
          profileData,
          passgetFunc,
          getCommunityData,
          setGetCommunityData,
          communityType,
          setCommunityType,
          countMember,
          setCountMember,
          committememberData,
          setCommittememberData,
          commiteemembersSearch,
          setCommiteemembersSearch,
          dashboradCurrentId,
          setdashboradCurrentId,
          commtteProfile,
          setCommtteProfile,
          committeMemberData,
          setcommitteMemberData,
          loader,
          setloader,
          EventType,
          setEventType,
        }}
      >
        {props.children}
      </Cardlistcontext.Provider>
    </>
  );
};

export default CardlistState;
