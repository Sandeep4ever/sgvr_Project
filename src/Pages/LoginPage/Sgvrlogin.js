import axios from "axios";
import React, { useState } from "react";
import "../LoginPage/login.css";

const Sgvrlogin = () => {
    const [errormsg, setErrormsg] = useState("")
    const [formdata, setFormdata] = useState({
        email: "",
        password: "",
        userType: "",
    });

    const onHandlechange = (e) => {
        const value = e.target.value;

        setFormdata({
            ...formdata,
            [e.target.name]: value,
        });
    };

    const onHandlesubmit = () => {
        console.log(formdata, "values");
        if (formdata.email === "" || formdata.password === "" || formdata.userType === " ") {
            setErrormsg("Please fill all the details")
        } else {
            axios.post(`/api/auth/login`, formdata).then((res) => {
                console.log(res, "Prateek respose");
                if (res.data.status === 1) {
                    setErrormsg("Invalid Details")
                } else if (res.data.status === false) {
                    setErrormsg("User Not Found!!!")
                } else {
                    alert("its successful")
                }
            }).catch((err) => {
                setErrormsg("Internal Server error...Please Try Again!!")
            })
        }

    };

    return (
        <div className="main-div">
            <div className="inner-div">
                <p className="errormsg">{errormsg}</p>
                <h1>Login</h1>
                <h2>Please sign in to continue</h2>
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email ID"
                    className="input"
                    value={formdata.email}
                    onChange={onHandlechange}
                />
                <input
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    className="input"
                    value={formdata.password}
                    onChange={onHandlechange}
                />
                <select className="input" name="userType" value={formdata.userType} onChange={onHandlechange}>
                    <option value="">You are a?</option>
                    <option value="V">Vendor</option>
                    <option value="SA">Super Admin</option>
                    <option value="CA">Samaj Admin</option>
                </select>
                <p className="forgot-redirect">Forgot Password ?</p>

                <button className="submit" onClick={onHandlesubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Sgvrlogin;
