/* eslint-disable no-unused-vars */
import {NavLink} from "react-router-dom"
import Button1 from "../otherComponent/Button1";
import StickyNavbar from "react-sticky-navbar";
import React from "react";



function Navbar() {
  return (
    <>
        <StickyNavbar>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <NavLink to={'/'} className="nav_logo">
                                <img src="../image/logo.png" alt=""/>
                            </NavLink>
                            <div className="nav_button">
                                <i className="bx bx-menu"></i>
                                <i className="bx bx-x"></i>
                            </div>
                        </div>
                        <div className="col-lg-8 offset-lg-1">
                            <div className="main-nav">
                                <ul className="nav-bar">
                                    <li><NavLink className='nav-bar-link' to={'/'}>Home</NavLink></li>
                                    <li><NavLink className='nav-bar-link' to={'/Services'}>Services</NavLink></li>
                                    <li><NavLink className='nav-bar-link' to={'/CaseStudy'}>Case Study</NavLink></li>
                                    <li><NavLink className='nav-bar-link' to={'/Blog'}>Blogs</NavLink></li>
                                    <li><NavLink className='nav-bar-link' to={'/About'}>About</NavLink></li>
                                </ul>
                                <Button1 url="/Contact" text="Contact Now" classn="com_btn"/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </StickyNavbar>
    
    </>
  );
}

export default Navbar;
