// eslint-disable-next-line no-unused-vars
import React from "react";
import {NavLink} from "react-router-dom"
import ScrollToTop from "react-scroll-to-top";
function FooterBottom() {
    return(
        <>
            <div className="col-sm-6">
                <p className='copy-lt text-start'><i className="bx bx-copyright"></i>2024 <NavLink to={'/'}>FortisLex Advisors</NavLink>. All rights reserved</p>
            </div>

            <div className="col-sm-6">
                <p className='copy-rt text-end'> Designed by CoDesigner❤️</p>
            </div>
            <ScrollToTop smooth />
        </>
    );
}

export default FooterBottom;