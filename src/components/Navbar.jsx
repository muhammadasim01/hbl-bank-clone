import React, { useState, useEffect } from "react";
import hbl from "./hbl.png";
import { Link } from "react-router-dom";
import { MdOutlineCall } from "../../node_modules/react-icons/md";
import { BiSearch } from "../../node_modules/react-icons/bi";
import { BsMic } from "../../node_modules/react-icons/bs";
import { FaBars } from "../../node_modules/react-icons/fa";
import { FaTimes } from "../../node_modules/react-icons/fa";
export const Navbar = () => {
  const [state, setstate] = useState(true);
  //   const [variable, setvariable] = useState("");

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={hbl} alt="photo" id="logo" />
          </Link>
        </div>
        <div className={state ? "nav" : "nav active"}>
          <Link className="link" to="/Digital">
            DigitalBanking
          </Link>
          <Link className="link" to="/Accounts">
            Accounts
          </Link>
          <Link className="link" to="/Cards">
            Cards
          </Link>
          <Link className="link" to="/Loans">
            Loans
          </Link>
          <Link className="link" to="/Wealth">
            Wealth
          </Link>
        </div>
        <div className="rightnav">
          <i className="icon">
            <BsMic />
          </i>
          |
          <i className="icon">
            <BiSearch />
          </i>
          |
          <i className="icon">
            <MdOutlineCall />
          </i>
          <button className="login {variable}">LOGIN</button>
          <i className="menu icon">
            {state ? (
              <FaBars onClick={() => setstate(false)} />
            ) : (
              <FaTimes
                className={state ? " " : " active"}
                onClick={() => setstate(true)}
              />
            )}
          </i>
        </div>
      </div>
    </>
  );
};
{
  /* <FaTimes />
  
  */
}