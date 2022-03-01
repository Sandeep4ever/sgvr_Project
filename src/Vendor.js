import styled from "styled-components";
import { useEffect, useContext, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Cardlistcontext from "./ContextApi/Cardlistcontext";
import SideNav from "./Utils/SideNav";
import Dashboard from "./Components/Vendor/Dashboard/Dashboard";
import VendorRegistration from "./Components/Matrimony Admin/Vendor Registration";
import Dashboard3 from "./Components/Vendor/Dashboard/dashboard3";
import Dashboard2 from "./Components/Vendor/Dashboard/dashboard2";
import ProductList from "./Components/Vendor/store/productlist";
import Scheduler from "./Components/Vendor/matrimony/Scheduler";
import Donate from "./Components/Vendor/NewComponents/Donate";
import TempleEvents from "./Components/Vendor/NewComponents/TempleEvents";
import CreateTempleEventForm from "./Components/Vendor/NewComponents/CreateTempleEventForm";
import Schedules from "./Components/Vendor/NewComponents/Schedules";
import Advertisement from "./Components/Vendor/matrimony/advertisement";
import Advertisementform from "./Components/Vendor/matrimony/advertisementform";
import Advertisement1 from "./Components/Vendor/matrimony/advertisementform 1";
import Subscription from "./Components/Vendor/matrimony/Subcription";

const Midpan = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: auto;
  overflow-x: hidden;

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
  position: absolute;
  z-index: 10;
  height: 100%;
  width: 100%;
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

// const sideNavforTempleVendor = [
//   {
//     title: "Dashboard",
//     to: "/temple_dashboard",
//   },
//   {
//     title: "Donations",
//     to: "/Donations",
//   },
//   {
//     title: "Temple Gallery",
//     to: "/TempleGallery",
//   },
//   {
//     title: "Events",
//     to: "/Events",
//   },
//   {
//     title: "Schedules",
//     to: "/Schedules",
//   },
//   {
//     title: "Subscription Plan",
//     to: "/SubscriptionPlan",
//   },
//   {
//     title: "Schedule",
//     to: "/Schedule",
//   },
//   {
//     title: "Advertisement",
//     to: "/committegallery",
//   },
//   {
//     title: "Subscription",
//     to: "/community",
//   },
//   {
//     title: "Log Out",
//     to: "/community",
//   },
// ];

const sideNavforMatrimony = [
  {
    title: "Profile",
    to: "/Profile",
  },
  {
    title: "Scheduler",
    to: "/Scheduler",
  },
  {
    title: "Advertisement",
    to: "/Advertisement",
  },
  {
    title: "Subscription",
    to: "/Subscription",
  },
  {
    title: "Log Out",
    to: "/Log Out",
  },
];

// const sideNavforStore = [
//   {
//     title: "Dashboard",
//     to: "/store_dashboard",
//   },
//   {
//     title: "Product List",
//     to: "/product_list",
//   },
//   {
//     title: "Advertisement",
//     to: "/Product",
//   },
//   {
//     title: "Subscription Plan",
//     to: "/committegallery",
//   },
// ];

const Vendors = () => {
  // var t = 0;
  const { setloader, Loader } = useContext(Cardlistcontext);
  // const location = useLocation();
  const count = useRef(0);

  useEffect(() => {
    count.current > 1 && setloader(false);
    count.current = count.current + 1;
  }, [setloader]);

  return (
    <WrapContainer>
      <SideNav sideNavdata={sideNavforMatrimony} />
      <Midpan>
        {Loader && (
          <Loade>
            <div />
          </Loade>
        )}
        <Routes>
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/Profile/EditProfile" element={<VendorRegistration />} />
          <Route path="/product_list" element={<ProductList />} />
          <Route path="/temple_dashboard" element={<Dashboard2 />} />
          <Route path="/store_dashboard" element={<Dashboard3 />} />
          <Route path="/Scheduler" element={<Scheduler />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/templeEvents" element={<TempleEvents />} />
          <Route
            path="/templeEvents/createtempleeventform"
            element={<CreateTempleEventForm />}
          />
          <Route path="/Schedule" element={<Schedules />} />
          <Route path="/Advertisement" element={<Advertisement />} />
          <Route
            path="/Advertisement/Advertisement_form"
            element={<Advertisement1 />}
          />
          <Route path="/Advertisement/:id" element={<Advertisementform />} />
          <Route path="/Subscription" element={<Subscription />} />
        </Routes>
      </Midpan>
    </WrapContainer>
  );
};

export default Vendors;
