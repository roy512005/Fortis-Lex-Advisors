import CommonSatcure from "../otherComponent/CommonSatcure";
import BlogBox from "../otherComponent/BlogBox";
import Footer from "../includeComponent/Footer";
import FooterBottom from "../includeComponent/FooterBottom";
import GetInTouch from "../includeComponent/GetInTouch";
// eslint-disable-next-line no-unused-vars
import React from "react";

function BlogDetails() {
    let Blog_value=[
        {  
           image:'Photo1.jpg',
           content1:"Riding solo to the rescue of her beloved nonprofits",
           content2:"There are  of Lorem Ipsum available, but majority have su alteration in some form, by injected oir  which don't look even slightly believable.",
           urlLink:"/blog/blog_details",
           catagorys:"Legal Advice",
           postDate:" Sunday, July 24, 2022"
        },{  
            image:'Photo2.jpg',
            content1:"Case Filed on Behalf of Injured Tugboat Worker",
            content2:"There are  of Lorem Ipsum available, but majority have su alteration in some form, by injected oir  which don't look even slightly believable.",
            urlLink:"/blog/blog_details",
            catagorys:"Legal Advice",
            postDate:" Friday, August 15, 2022"
         },{  
            image:'Photo3.png',
            content1:"How Companies Choose Legal Representation",
            content2:"There are  of Lorem Ipsum available, but majority have su alteration in some form, by injected oir  which don't look even slightly believable.",
            urlLink:"/blog/blog_details",
            catagorys:"Legal Advice",
            postDate:"Sunday, July 24, 2022"
         }
    ];
    return(
        <>
           <CommonSatcure section="common main_detiels blog_details" container="container" row="row gy-5" parentTrue={false} innerTrue={false}>
                <div className="col-12 d-flex justify-content-center">
                    <div className="case_detiels">
                        <h1>MS Vodafone Mobile Services Limited vs Deputy Commissioner Of Income</h1>
                        <ul className='blogdet'>
                            <li><span>Legal Advice</span></li>
                            <li><span>Sunday, July 24, 2022</span></li>
                        </ul>
                        <div className="image">
                            <img src="../image/other/blog_detiels.jpg" alt="" />
                        </div>
                        <p>The provided text appears to be an excerpt from a legal case or judgment related to the Prevention of Money Laundering Act, 2002 in India. The case, identified as MAT No. 1253 of 2023, involves discussions about the legislative history of the Act, the distinction between laundering black money and laundering proceeds of crimes, and the constitutionality of the adjudicating authority under the Act.
                        <br></br><br></br>
                        The text emphasizes that the adjudicating authoritys role is civil in nature and does not constitute a prosecution or punishment by a court or judicial tribunal. It cites legal opinions and references relevant cases to support the argument that the adjudicating authority can function with a single member bench, challenging the contention that the absence of two members would render it non-judicious.
                        <br></br><br></br>
                        In summary, the text addresses the legal aspects of the Prevention of Money Laundering Act, 2002, specifically focusing on the constitutionality and functioning of the adjudicating authority under the Act. The court appears to affirm the validity of a single-member bench for the adjudicating authority and dismisses the appeal while directing compliance with certain orders.</p>
                        <div className="commend_box">
                            <form>
                               <textarea className="form-control" placeholder="Write your thoughts" id="floatingTextarea"></textarea>
                               <button type="submit" className="btn btn-primary">Post Comment</button>
                            </form>
                        </div>
                    
                    </div>
                </div>
            </CommonSatcure>

            <CommonSatcure section="common blog_main" container="container" row="row gy-lg-0 gy-4" hadding="Recent Blogs" parentTrue={true} innerTrue={false}>
                {Blog_value.map((e)=>
                    <BlogBox img_url={e.image} content1={e.content1} content2={e.content2} urlLink={e.urlLink} catagorys={e.catagorys} postDate={e.postDate} dot={true} key={e.key}/>
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

export default BlogDetails;