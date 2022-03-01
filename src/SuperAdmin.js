import styled from "styled-components";
import { useEffect, useContext, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Cardlistcontext from "./ContextApi/Cardlistcontext";
import Onbordinglist from "./Components/Jewellery/Onbordinglist/Onbordinglist";
import PostList from "./Components/AddPost/PostList";
import LastNameList from "./Components/LastNameList/LastNameList";
import PaymentStatus from "./Components/Payment/PaymentStatus";
import Messages from "./Pages/Messages/Messages";
import ForgetPassword from "./Pages/LoginPage/ForgetPassword";
import Matrimony from "./Components/Matrimony/Matrimony";
import Subscriptionplan from "./Components/SubscriptionPlan/Subscriptionplan";
import Subscribed from "./Components/Subscribed/Subscribed";
import SubscriptionForm from "./Components/SubscriptionPlan/SubscriptionForm";
import CommunityDashboard from "./Components/community/CommunityDashboard";
import Committeeform from "./Components/community/Committeeform";
import EventsList from "./Components/Events/EventsList";
import Committemembers from "./Components/community/Committeemembers";
import Tabfs from "./Components/community/Tables";
import Tabfs1 from "./Components/community/table1.js";
import SideNav from "./Utils/SideNav";
import CreateEventForm from "./Components/Events/CreateEventForm";
import PostForm from "./Components/AddPost/PostForm";
import GroomonboardingData from "./Components/Matrimony/Groom/GroomonboardingData";
import BrideonboardingData from "./Components/Matrimony/Bride/BrideonboardingData";
import Status from "./Components/SocialMedia/Status";
import Groom from "./Components/Matrimony/Groom/Groom";
import Bride from "./Components/Matrimony/Bride/Bride";
import Vendor from "./Components/Matrimony/Vendor";
import EditEventForm from "./Components/Events/EditForm";
import Dashboard from "./Components/SuperAdmindashboard/Dashboard";

const Midpan = styled.div`
  width: 100%;
  position: relative;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d8ae25;
    border-radius: 5px;
  }
`;

const WrapContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 89.58vh;
  width: 100vw;
`;

const Loade = styled.section`
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    border: 5px solid #d8ae25; /* Light grey */
    border-top: 5px solid #f3f3f3; /* Blue */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 0.75s linear infinite;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

const sideNavdata = [
  {
    title: "Dashboard",
    to: "/",
  },
  {
    title: "Matrimony",
    to: "/matrimonylist/vendor",
  },
  // {
  //   title: "Jewellery",
  //   to: "/onbordinglist",
  // },
  {
    title: "Social Media",
    to: "/status",
  },
  {
    title: "Community",
    to: "/community",
  },
  {
    title: "My Events",
    to: "/onboardingeventslist",
  },
  {
    title: "Last Name List",
    to: "/lastnamelist",
  },
  {
    title: "Advertisement",
    to: "/postlist",
  },
  {
    title: "Subscription Plan",
    to: "/subscriptionplane",
  },
  {
    title: "Subscribed Users",
    to: "/subscribed",
  },
  {
    title: "Subscription Payment",
    to: "/paymentstatus",
  },
];

const Admin = () => {
  const { setloader, Loader } = useContext(Cardlistcontext);
  const count = useRef(0);

  useEffect(() => {
    count.current > 1 && setloader(false);
    count.current = count.current + 1;
  }, [setloader]);

  return (
    <WrapContainer>
      <SideNav sideNavdata={sideNavdata} />
      <Midpan>
        {Loader && (
          <Loade>
            <div />
          </Loade>
        )}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/matrimonylist" element={<Matrimony />}>
            <Route path="vendor" element={<Vendor />} />
            <Route path="groom" element={<Groom />} />
            <Route path="bride" element={<Bride />} />
          </Route>
          <Route path="/status" element={<Status />} />
          <Route path="/onbordinglist" element={<Onbordinglist />} />
          <Route path="/postlist" element={<PostList />} />
          <Route path="/community/createvender" element={<Committeeform />} />
          <Route path="/community" element={<CommunityDashboard />} />
          <Route path="/community/members" element={<Committemembers />}>
            <Route path="comittemembers/:id" element={<Tabfs1 />} />
            <Route path="newmembers" element={<Tabfs />} />
          </Route>
          <Route path="/lastnamelist" element={<LastNameList />} />
          <Route path="/paymentstatus" element={<PaymentStatus />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/subscriptionplane" element={<Subscriptionplan />} />
          <Route path="/subscribed" element={<Subscribed />} />
          <Route
            path="/editsubscriptionForm/:id"
            element={<SubscriptionForm />}
          />
          <Route path="/onboardingeventslist" element={<EventsList />} />
          <Route
            path="/onboardingeventslist/createeventform"
            element={<CreateEventForm />}
          />
          <Route path="/postlist/postform" element={<PostForm />} />
          <Route
            path="/matrimonylist/groom/:id"
            element={<GroomonboardingData />}
          />
          <Route
            path="/onboardingeventslist/editform/:id"
            element={<EditEventForm />}
          />
          <Route
            path="/matrimonylist/bride/:id"
            element={<BrideonboardingData />}
          />
          <Route
            path="/community/updatecommitteeform/:id"
            element={<Committeeform />}
          />
        </Routes>
      </Midpan>
    </WrapContainer>
  );
};

export default Admin;
