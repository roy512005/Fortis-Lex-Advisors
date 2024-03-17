// eslint-disable-next-line no-unused-vars
import React from "react";
import FooterBottom from "../includeComponent/FooterBottom";
import Footer from "../includeComponent/Footer";
import CommonSatcure from "../otherComponent/CommonSatcure";
import {NavLink} from "react-router-dom"

function page404() {
    return(
        <>
            <CommonSatcure section="common page404" container="container" row="row" parentTrue={false} innerTrue={false}>
              <div className="col-12">
                <div className="image">
                    <img src="./image/404.png" alt="" />
                </div>
                <NavLink to='/' className='back_hove'>Back to home</NavLink>
              </div>
            </CommonSatcure>

            <CommonSatcure section="common footer" container="container" row="row gy-lg-0 gy-4" parentTrue={false} innerTrue={false}>
              <Footer/>
            </CommonSatcure>

            <CommonSatcure section="common footer-bottom" container="container" row="row" parentTrue={false} innerTrue={false}>
              <FooterBottom/>
            </CommonSatcure>
           
        </>
    );
}

export default page404;