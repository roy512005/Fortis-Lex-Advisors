import InnerBanner from "../otherComponent/InnerBanner";
import CommonSatcure from "../otherComponent/CommonSatcure";
import CaseStudy_box from "../otherComponent/CaseStudy_box";
import Footer from "../includeComponent/Footer";
import FooterBottom from "../includeComponent/FooterBottom";
import GetInTouch from "../includeComponent/GetInTouch";
// eslint-disable-next-line no-unused-vars
import React from "react";

function CaseStudy() {
    let CaseStudy_value=[
        {  
           image:'study.jpg',
           content1:"MS Vodafone Mobile Services Limited vs Deputy Commissioner Of Income",
        },{
            image:'study2.jpg',
            content1:"RP Infosystems Limited vs The Adjudication Authority",
        },{
            image:'study3.jpg',
            content1:"Unnikrishnan Rajeevkumar Bhaskaran vs State Of Maharashtra",
        },{  
            image:'study.jpg',
            content1:"MS Vodafone Mobile Services Limited vs Deputy Commissioner Of Income",
         },{
             image:'study2.jpg',
             content1:"RP Infosystems Limited vs The Adjudication Authority",
         },{
             image:'study3.jpg',
             content1:"Unnikrishnan Rajeevkumar Bhaskaran vs State Of Maharashtra",
         },{  
            image:'study.jpg',
            content1:"MS Vodafone Mobile Services Limited vs Deputy Commissioner Of Income",
         },{
             image:'study2.jpg',
             content1:"RP Infosystems Limited vs The Adjudication Authority",
         },{
             image:'study3.jpg',
             content1:"Unnikrishnan Rajeevkumar Bhaskaran vs State Of Maharashtra",
         }
    ];
    return(
        <>
           <InnerBanner text={'CASE STUDY'} classn={"inner_banner casestudy_main"}/>

           <CommonSatcure section="common case_study case_studydev" container="container" row="row gy-sm-5 gy-4" parentTrue={false} innerTrue={false}>
                {CaseStudy_value.map((f)=>
                    <CaseStudy_box img_url={f.image} content1={f.content1} key={f.key}/>
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

export default CaseStudy;