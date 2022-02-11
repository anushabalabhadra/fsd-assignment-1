import React from "react";
import ReactDOM from "react-dom";
import logo from "./images/Logo.jpeg";
import Script from "./Script";
import "./style.css";

ReactDOM.render(
    <div>
        <center>
            <img className="img" src={logo} />
            <Script />
        </center>
    </div>,
    document.getElementById("root")
);