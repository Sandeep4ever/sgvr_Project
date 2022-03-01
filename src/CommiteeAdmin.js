import styled from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./Components/communityAdminDashboard/dashboard";
import Committeeform from "./Components/communityAdminDashboard/Committeeform";
import EventsList from "./Components/communityAdminDashboard/CommunityEvents/EventsList";
import CommiteeMembers from "./Components/communityAdminDashboard/CommiteeMembers";
import Tabfs from "./Components/communityAdminDashboard/Tables";
import Tabfs1 from "./Components/communityAdminDashboard/table1.js";
import Commiteegalary from "./Components/communityAdminDashboard/commiteegalary";
import CreateEventForm from "./Components/communityAdminDashboard/CommunityEvents/CreateEventForm";
import Cardlistcontext from "./ContextApi/Cardlistcontext";
import SideNav from "./Utils/SideNav";
import { useContext, useRef, useEffect } from "react";

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
    title: "Committee Members",
    to: "/communityAdminDashboard/members/comittemembers",
  },
  {
    title: "Events",
    to: "/events",
  },
  {
    title: "Committee Gallery",
    to: "/committegallery",
  },
  {
    title: "Log out",
    to: "/community",
  },
];

const Admin = () => {
  const { loader, setloader } = useContext(Cardlistcontext);
  const location = useLocation();
  const count = useRef(0);

  useEffect(() => {
    count.current > 1 && setloader(false);
    count.current = count.current + 1;
  }, [setloader, location]);

  return (
    <>
      {loader && (
        <Loade>
          <div />
        </Loade>
      )}
      <WrapContainer>
        <SideNav sideNavdata={sideNavdata} />
        <Midpan>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/commiteeform/:id" element={<Committeeform />} />
            <Route path="/events" element={<EventsList />} />
            <Route
              path="/events/onboardingList/"
              element={<CreateEventForm />}
            />
            <Route
              path="/events/updateList/:id"
              element={<CreateEventForm />}
            />

            <Route path="/committegallery" element={<Commiteegalary />} />
            <Route
              path="communityAdminDashboard/members"
              element={<CommiteeMembers />}
            >
              <Route path="comittemembers" element={<Tabfs1 />} />
              <Route path="newmembers" element={<Tabfs />} />
            </Route>
          </Routes>
        </Midpan>
      </WrapContainer>
    </>
  );
};

export default Admin;
