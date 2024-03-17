// @ts-nocheck
import Footer from "../includeComponent/Footer";
import FooterBottom from "../includeComponent/FooterBottom";
import CommonSatcure from "../otherComponent/CommonSatcure";
import InnerBanner from "../otherComponent/InnerBanner";
import GetInTouch from "../includeComponent/GetInTouch";
// eslint-disable-next-line no-unused-vars
import React from "react";

function Contact() {

    return(
        <>
           <InnerBanner text={'CONTACT US'} classn={"inner_banner contact_us"}/>

            <CommonSatcure section="common getintouch_main conte" container="container" row="row" hadding="Your Success, Our Pledge" text="At FortisLex Advisors, we understand the importance of your legal matters. We promise open communication, responding to your questions or concerns within 24 hours. Count on us for a stress-free, trustworthy experience in every step of your journey." parentTrue={true} innerTrue={true}>

                <div className="col-lg-12">
                    <div className="gt-container">
                        <GetInTouch/>
                        <div className="image">
                            <img src="./image/gt.png" alt="" />
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    
                </div>
              
            </CommonSatcure>

            <CommonSatcure section="common mape" container="container" row="row" parentTrue={false} innerTrue={false}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabIndex="0"
            />
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


export default Contact;