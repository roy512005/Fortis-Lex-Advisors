import InnerBanner from "../otherComponent/InnerBanner";
import CommonSatcure from "../otherComponent/CommonSatcure";
import JourneyBox from "../otherComponent/JourneyBox";
import Footer from "../includeComponent/Footer";
import FooterBottom from "../includeComponent/FooterBottom";
import GetInTouch from "../includeComponent/GetInTouch";
// eslint-disable-next-line no-unused-vars
import React from "react";

function Services() {
    let Journey_value=[
        {  
           image:'journey1.jpg',
           content1:"ELDER ABUSE",
           content2:"Protect the rights of your loved ones with FortisLex Advisors. Our compassionate team specializes in elder abuse cases, providing advocacy and legal remedies for a secure future.",
           urlLink:"/Services/service_details"
        },{  
            image:'journey2.jpg',
            content1:"REAL ESTATE LAW",
            content2:"From contract negotiations to regulatory compliance and dispute resolution, we offer a spectrum of services designed to meet the unique needs of your business. Trust FortisLex Advisors to be your strategic legal partner, ensuring legal compliance and empowering your business for sustained success.",
            urlLink:"/Services/service_details"
         },{  
            image:'journey3.jpg',
            content1:"CORPORATE LAW",
            content2:"From contract negotiations to regulatory compliance and dispute resolution, we offer a spectrum of services designed to meet the unique needs of your business. Trust FortisLex Advisors to be your strategic legal partner, ensuring legal compliance and empowering your business for sustained success.",
            urlLink:"/Services/service_details"
         },{  
            image:'journey4.jpg',
            content1:"PARTNERSHIP LAW",
            content2:"From contract negotiations to regulatory compliance and dispute resolution, we offer a spectrum of services designed to meet the unique needs of your business. Trust FortisLex Advisors to be your strategic legal partner, ensuring legal compliance and empowering your business for sustained success.",
            urlLink:"/Services/service_details"
        },{  
            image:'journey5.jpg',
            content1:"BUSINESS LAW",
            content2:"Protect the rights of your loved ones with FortisLex Advisors. Our compassionate team specializes in elder abuse cases, providing advocacy and legal remedies for a secure future.",
            urlLink:"/Services/service_details"
        },{  
            image:'journey6.jpg',
            content1:"EMPLOYMENT",
            content2:"Protect the rights of your loved ones with FortisLex Advisors. Our compassionate team specializes in elder abuse cases, providing advocacy and legal remedies for a secure future.",
            urlLink:"/Services/service_details"
        },{  
            image:'journey7.jpg',
            content1:"LANDLORD DISPUTES",
            content2:"Protect the rights of your loved ones with FortisLex Advisors. Our compassionate team specializes in elder abuse cases, providing advocacy and legal remedies for a secure future.",
            urlLink:"/Services/service_details"
        },{  
            image:'journey8.jpg',
            content1:"CYBERSECURITY",
            content2:"Protect the rights of your loved ones with FortisLex Advisors. Our compassionate team specializes in elder abuse cases, providing advocacy and legal remedies for a secure future.",
            urlLink:"/Services/service_details"
        },{  
            image:'journey9.jpg',
            content1:"BANKING",
            content2:"Protect the rights of your loved ones with FortisLex Advisors. Our compassionate team specializes in elder abuse cases, providing advocacy and legal remedies for a secure future.",
            urlLink:"/Services/service_details"
        }
    ];
    return(
        <>
           <InnerBanner text={'SERVICES'} classn={"inner_banner services"}/>

           <CommonSatcure section="common journey dynamicParagraph" container="container" row="row mt-xl-5 gy-xl-5 gy-sm-3 gy-4 gy-sm-2 mt-0" hadding="Adding Real Value to Your Legal Journey" text="FortisLex Advisors commits to supporting you precisely where our partnership adds tangible value to your legal endeavors." parentTrue={true} innerTrue={true}>
                {Journey_value.map((e)=>
                    <JourneyBox img_url={e.image} content1={e.content1} content2={e.content2} urlLink={e.urlLink} key={e.key}/>
                )}
            </CommonSatcure>
            
            <CommonSatcure section="common getintouch_main" container="container" row="row" parentTrue={false} innerTrue={false}>

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
            
            <CommonSatcure section="common footer" container="container" row="row gy-lg-0 gy-4" parentTrue={false} innerTrue={false}>
              <Footer/>
            </CommonSatcure>

            <CommonSatcure section="common footer-bottom" container="container" row="row" parentTrue={false} innerTrue={false}>
              <FooterBottom/>
            </CommonSatcure>
        </>
    );
}

export default Services;