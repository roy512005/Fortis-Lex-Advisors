// @ts-nocheck
import CommonSatcure from "../otherComponent/CommonSatcure";
import "react-multi-carousel/lib/styles.css";
import Footer from "../includeComponent/Footer";
import FooterBottom from "../includeComponent/FooterBottom";
import BlogBox from "../otherComponent/BlogBox";
import InnerBanner from "../otherComponent/InnerBanner";
// eslint-disable-next-line no-unused-vars
import React from "react";

function Blog() {

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
          },{  
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
          },{  
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

            <InnerBanner text={'BLOGS'} classn={"inner_banner our_blogs"}/>

            <CommonSatcure section="common blog_main" container="container" row="row gy-sm-5 gy-4" parentTrue={false} innerTrue={false}>
                {Blog_value.map((e)=>
                    <BlogBox img_url={e.image} content1={e.content1} content2={e.content2} urlLink={e.urlLink} catagorys={e.catagorys} postDate={e.postDate} key={e.key}/>
                )}
            </CommonSatcure>

            <CommonSatcure section="common footer" container="container" row="row gy-lg-0 gy-4" parentTrue={false} innerTrue={false}>
              <Footer/>
            </CommonSatcure>

            <CommonSatcure section="common footer-bottom" container="container" row="row"  parentTrue={false} innerTrue={false}>
              <FooterBottom/>
            </CommonSatcure>


        </>
    );
}

export default Blog;