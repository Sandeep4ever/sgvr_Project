import React from "react";
import "./App.css";
import Navbar from "./Utils/Navbar";
import GlobalStyle from "./Utils/GlobalStyle";
import CardlistState from "./ContextApi/CardlistState";
import { BrowserRouter } from "react-router-dom";
import SuperAdmin from "./SuperAdmin";
import CommiteeAdmin from "./CommiteeAdmin";
import Vendors from "./Vendor";
import axios from "axios";
import Loginroutes from "./Loginroutes";

axios.defaults.baseURL = "http://192.168.1.119:2311";
axios.defaults.headers = {
  "x-access-token":
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjFmMjlhYThhYmM4ZWU4Njk4OTVkOWU4IiwidXNlclR5cGUiOiJTQSIsImlhdCI6MTY0NTc3OTQzOCwiZXhwIjoxNjQ1ODY1ODM4fQ.zT-27QDO1VVB_8npB5ockw13bKfvR_Bo58AmBl007d8",
};

const App = () => {
  // let vie = "commiteeAdmin";
  let vie = "superAdmin";
  // let vie = "superAdmin";

  return (
    <BrowserRouter>
      <Loginroutes />
      <CardlistState>
        <GlobalStyle />

        <Navbar />
        {vie === "superAdmin" ? (
          <SuperAdmin />
        ) : vie === "commiteeAdmin" ? (
          <CommiteeAdmin />
        ) : (
          <Vendors />
        )}
      </CardlistState>

    </BrowserRouter>
  );
};

export default App;
