import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "./NavLinkCust";

const MasteryContainer = () => {
    return (
        <React.Fragment>
            <h4 className="title mb-8">Technology</h4>
            <div className="MasteryContainer">
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    <span className="MasteryBodySpan">Android</span>
                </NavLink>
                {/* <NavLinkCust url="viantech" clsName="MasteryBodySpan"/> */}{" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    <span className="MasteryBodySpan">Backend</span>
                </NavLink>{" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    <span className="MasteryBodySpan">Web</span>
                </NavLink>{" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    <span className="MasteryBodySpan">iOS</span>
                </NavLink>{" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    <span className="MasteryBodySpan">DevSecOps</span>
                </NavLink>{" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    <span className="MasteryBodySpan">Data Engineering</span>
                </NavLink>{" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    <span className="MasteryBodySpan">PoS/IoT</span>
                </NavLink>{" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    <span className="MasteryBodySpan">
                        QA &#40;automation&#41;
                    </span>
                </NavLink>
            </div>
            <h4 className="title mb-8">Business</h4>

            <div className="MasteryContainer">
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    <span className="MasteryBodySpan">Business</span>
                </NavLink>
                {/* <NavLinkCust url="viantech" clsName="MasteryBodySpan"/> */}{" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    <span className="MasteryBodySpan">Pay</span>
                </NavLink>{" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    <span className="MasteryBodySpan">Cash</span>
                </NavLink>{" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    <span className="MasteryBodySpan">Money Flow</span>
                </NavLink>{" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    <span className="MasteryBodySpan">DevSecOps</span>
                </NavLink>{" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    <span className="MasteryBodySpan">Data Engineering</span>
                </NavLink>{" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    <span className="MasteryBodySpan">PoS/IoT</span>
                </NavLink>{" "}
                <NavLink
                    className="hover-color"
                    to={process.env.PUBLIC_URL + "/viantech"}
                >
                    <span className="MasteryBodySpan">
                        QA &#40;automation&#41;
                    </span>
                </NavLink>
            </div>
        </React.Fragment>
    );
};

export default MasteryContainer;
