import CommonSatcure from "../otherComponent/CommonSatcure";
import CaseStudy_box from "../otherComponent/CaseStudy_box";
import Footer from "../includeComponent/Footer";
import FooterBottom from "../includeComponent/FooterBottom";
import GetInTouch from "../includeComponent/GetInTouch";
// eslint-disable-next-line no-unused-vars
import React from "react";

function CaseStudyDetalis() {
    let CaseStudy_values=[
        {  
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
           <CommonSatcure section="common main_detiels" container="container" row="row gy-5" parentTrue={false} innerTrue={false}>
                <div className="col-12 d-flex justify-content-center">
                    <div className="case_detiels">
                        <h1>MS Vodafone Mobile Services Limited vs Deputy Commissioner Of Income</h1>
                        <div className="image">
                            <img src="../image/other/case_detiels1.jpg" alt="" />
                        </div>
                        <p>The provided text appears to be an excerpt from a legal case or judgment related to the Prevention of Money Laundering Act, 2002 in India. The case, identified as MAT No. 1253 of 2023, involves discussions about the legislative history of the Act, the distinction between laundering black money and laundering proceeds of crimes, and the constitutionality of the adjudicating authority under the Act.
                        <br></br><br></br>
                        The text emphasizes that the adjudicating authoritys role is civil in nature and does not constitute a prosecution or punishment by a court or judicial tribunal. It cites legal opinions and references relevant cases to support the argument that the adjudicating authority can function with a single member bench, challenging the contention that the absence of two members would render it non-judicious.
                        <br></br><br></br>
                        In summary, the text addresses the legal aspects of the Prevention of Money Laundering Act, 2002, specifically focusing on the constitutionality and functioning of the adjudicating authority under the Act. The court appears to affirm the validity of a single-member bench for the adjudicating authority and dismisses the appeal while directing compliance with certain orders.</p>
                    </div>
                </div>
            </CommonSatcure>

           <CommonSatcure section="common case_study case_studydev" container="container" row="row gy-lg-0 gy-4" parentTrue={false} innerTrue={false}>
                {CaseStudy_values.map((g)=>
                    <CaseStudy_box img_url={g.image} content1={g.content1} dot={true} key={g.key}/>
                )}
            </CommonSatcure>
            
            <CommonSatcure section="common getintouch_main" container="container" row="row" parentTrue={false} innerTrue={false}>

                <div className="col-lg-12">
                    <div className="gt-container">
                        <GetInTouch/>
                        <div className="image">
                            <img src="../image/gt.png" alt="" />
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

export default CaseStudyDetalis;