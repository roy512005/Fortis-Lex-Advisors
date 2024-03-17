import CommonSatcure from "../otherComponent/CommonSatcure";
import JourneyBox from "../otherComponent/JourneyBox";
import Footer from "../includeComponent/Footer";
import FooterBottom from "../includeComponent/FooterBottom";
import GetInTouch from "../includeComponent/GetInTouch";
// eslint-disable-next-line no-unused-vars
import React from "react";

function ServiceDetails() {
    let Journey_value=[
        {  
           image:'journey1.jpg',
           content1:"ELDER ABUSE",
           content2:"Protect the rights of your loved ones with FortisLex Advisors. Our compassionate team specializes in elder abuse cases, providing advocacy and legal remedies for a secure future.",
           urlLink:"/"
        },{  
            image:'journey2.jpg',
            content1:"REAL ESTATE LAW",
            content2:"From contract negotiations to regulatory compliance and dispute resolution, we offer a spectrum of services designed to meet the unique needs of your business. Trust FortisLex Advisors to be your strategic legal partner, ensuring legal compliance and empowering your business for sustained success.",
            urlLink:"/"
         },{  
            image:'journey3.jpg',
            content1:"CORPORATE LAW",
            content2:"From contract negotiations to regulatory compliance and dispute resolution, we offer a spectrum of services designed to meet the unique needs of your business. Trust FortisLex Advisors to be your strategic legal partner, ensuring legal compliance and empowering your business for sustained success.",
            urlLink:"/"
         }
    ];
    return(
        <>
           <CommonSatcure section="common main_detiels service_detiels" container="container" row="row gy-5" parentTrue={false} innerTrue={false}>
                <div className="col-12 d-flex justify-content-center">
                    <div className="case_detiels">
                        <div className="image">
                            <img src="../image/other/service_detiels.jpg" alt="" />
                        </div>

                        <h1>LANDLORD DISPUTES</h1>
                        
                        <p><span>Description:</span>
                           At FortisLex Advisors, we specialize in navigating the complexities of landlord-tenant relationships. Our dedicated legal team is committed to efficiently resolving disputes while safeguarding the rights and interests of both landlords and tenants.</p>
                        
                        <p><span>- Lease Agreement Review:</span>
                           Ensure clarity and fairness in lease agreements. Our experts meticulously review and assess lease terms to prevent misunderstandings and potential disputes.</p>
                        
                        <p><span>- Rent Arrears and Eviction Proceedings:</span>
                           Swiftly address rent arrears and eviction matters with FortisLex. We provide legal guidance on the proper procedures, protecting your interests while upholding the rights of tenants.</p>
                        
                        <p><span>- Property Maintenance Disputes:</span>
                           Resolve disagreements over property maintenance issues effectively. FortisLex Advisors assists in navigating disputes related to repairs, maintenance responsibilities, and property conditions.</p>
                        
                        <p><span>- Tenant Rights and Fair Housing:</span>
                           FortisLex is dedicated to upholding tenant rights and fair housing practices. We provide legal counsel to both landlords and tenants, ensuring compliance with relevant laws and regulations.</p>
                        
                        <p><span>- Mediation and Alternative Dispute Resolution (ADR):</span>
                           Explore peaceful resolutions through mediation and ADR services. FortisLex Advisors facilitates constructive dialogue, striving for amicable solutions that save time and resources.</p>
                        
                        <p><span>- Legal Representation in Court:</span>
                           When necessary, trust FortisLex to provide strong legal representation in court. Our experienced litigators advocate for your rights and interests, ensuring a fair and just resolution.</p>
                        
                        <p>FortisLex Advisors stands as your trusted ally in landlord-tenant matters, offering expert guidance and legal support to achieve swift, fair resolutions. Whether you are a landlord or tenant, our commitment is to provide efficient and effective solutions tailored to your specific situation.</p>
                         
                        </div>
                </div>
            </CommonSatcure>

            <CommonSatcure section="common journey dynamicParagraph" container="container" row="row mt-1 gy-lg-3 gy-4" hadding="Other Area Of Practices"  parentTrue={true} innerTrue={false}>
                {Journey_value.map((e)=>
                    <JourneyBox img_url={e.image} content1={e.content1} content2={e.content2} urlLink={e.urlLink} dot={true} key={e.key}/>
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

export default ServiceDetails;