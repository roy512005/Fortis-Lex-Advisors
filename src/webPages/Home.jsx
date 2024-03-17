// @ts-nocheck
import Practices from "../otherComponent/Practices";
import CommonSatcure from "../otherComponent/CommonSatcure";
import Button2 from "../otherComponent/Button2";
import Attorneys_box from "../otherComponent/Attorneys_box";
import CaseStudy_box from "../otherComponent/CaseStudy_box";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Clientsays_box from "../otherComponent/Clientsays";
import Footer from "../includeComponent/Footer";
import FooterBottom from "../includeComponent/FooterBottom";
import GetInTouch from "../includeComponent/GetInTouch";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import Counter_box from "../otherComponent/Counter_box";
import ButtonGroup from "../otherComponent/ButtonGroup";
import Button1 from "../otherComponent/Button1";
import BlogBox from "../otherComponent/BlogBox";
// eslint-disable-next-line no-unused-vars
import React from "react";

function Home() {
    let Practices_value=[
        {  
           image:'Practices1.jpg',
           content:"ELDER ABUSE"
        },{
            image:'Practices2.jpg',
            content:"REAL ESTATE LAW"
         },{
            image:'Practices3.jpg',
            content:"CORPORATE LAW"
         },{
            image:'Practices4.jpg',
            content:"BUSINESS LAW"
         }
    ];

    let Attorneys_value=[
        {  
           image:'Vector.png',
           content1:"Jack Collins",
           content2:"Corporate Lawyer"
        },{
            image:'Vector1.png',
            content1:"Robert Hugos",
            content2:"Real Estate Lawyer"
         },{
            image:'Vector2.png',
            content1:"Luke Belmar",
            content2:"Personal Injury Lawyer"
         },{
            image:'Vector3.png',
            content1:"Kevin Hammer",
            content2:"Business Lawyer"
         }
    ];

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
        }
    ];

    let Clientsays_value=[
        {  
           image:'client1.png',
           name:'Justin Cooper',
           designation:'Corporate Client',
           content:'FortisLex Advisors surpassed expectations! Expertise in corporate law, personalized approach, prompt responses—our trusted legal partner for success.',
        },{  
            image:'client2.png',
            name:'Melissa Jane',
            designation:'Personal Injury Client',
            content:"FortisLex, a game-changer in personal injury. Clear communication, dedication to justice, and successful results. Grateful for outstanding representation!",
        },{  
            image:'client3.png',
            name:'Robert Fox',
            designation:'Real Estate Client',
            content:"FortisLex made real estate transactions stress-free. Attention to detail, legal acumen, and proactive communication ensure a smooth closing. Highly recommend!",
        }
    ];

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

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 480, min: 0 },
          items: 1
        }
    };

    const [counter, setCounter]=useState(false);
    return(
        <>
            <CommonSatcure section="common main_banner" container="container" row="row" parentTrue={false} innerTrue={false}>
                <div className="col-lg-7">
                    <div className="main_content">
                        <div>
                            <h1>Crafting Precision, Defending Your Rights with Distinction</h1>
                            <p>Ease your legal worries with us – personalized service, just for you.</p>
                            <Button1 url="/contact" text="Consult Now" classn="com_btn"/>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="main_image">
                        <div className="imge">
                            <img src="./image/hero2.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>Mr. Cooper</h3>
                            <p>Corporate Lawyer</p>
                        </div>
                    </div>
                </div>
            </CommonSatcure>

            <CommonSatcure section="common practices" container="container" row="row" hadding="Area of Practices" parentTrue={true} innerTrue={false}>
                <div className="col-lg-12">
                    <div className="main_Practices">
                        {Practices_value.map((e)=>
                            <Practices img_url={e.image} content={e.content} key={e.key}/>
                        )}
                    </div>
                </div>
                <Button2 url="/Services" text="See More" classn="button2 mt-5 ms-auto me-auto"/>
            </CommonSatcure>

            <CommonSatcure section="common our_guarantee" container="container" row="row" parentTrue={false} innerTrue={false}>
                <div className="col-lg-6">
                    <div className="content">
                        <div>
                            <h2>Your Victory, Our Guarantee</h2>
                            <p>Embark on your legal journey with confidence. FortisLex Advisors guarantees your success, prioritizing your interests with unwavering commitment and expertise.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="image">
                        <img src="./image/other/book.jpg" className="img-fluid" alt="" />
                        <div className="h-client">
                            <h4>40+</h4>
                            <h6>Happy Clients</h6>
                        </div>
                    </div>
                </div>
            </CommonSatcure>

            <CommonSatcure section="common our_ttorneys" container="container" row="row gy-lg-0 gy-4" hadding="Our Best Attorneys" parentTrue={true} innerTrue={false}>
                {Attorneys_value.map((f)=>
                    <Attorneys_box img_url={f.image} content1={f.content1} content2={f.content2} key={f.key}/>
                )}
                <Button2 url="/About" text="View All" classn="button2 mt-5 ms-auto me-auto"/>
                
            </CommonSatcure>

            <CommonSatcure section="common case_study" container="container" row="row gy-lg-0 gy-4" hadding="Case Study" parentTrue={true} innerTrue={false}>
                {CaseStudy_value.map((f)=>
                    <CaseStudy_box img_url={f.image} content1={f.content1} key={f.key}/>
                )}
                <Button2 url="/CaseStudy" text="See More" classn="button2 mt-5 ms-auto me-auto"/>
                
            </CommonSatcure>

            <CommonSatcure section="common numericals" container="container" row="row d-flex justify-content-center" hadding="Some Numericals That Matters" text="Numbers that Tell Our Success Story" parentTrue={true} innerTrue={true}>
                <div className="funfacts-list">
					<ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)} className={'row'}>
                        <Counter_box counter={counter} startNumber={0} endNumber={96} durationTime={10} classn={'col-sm-3'} text={'Completed Projects'} trui={false}/>
                        <Counter_box counter={counter} startNumber={0} endNumber={232} durationTime={10} classn={'col-sm-6'} text={'Taken Business Legalities'} trui={true} icon={'bx bx-plus'}/>
                        <Counter_box counter={counter} startNumber={0} endNumber={6} durationTime={10} classn={'col-sm-3'} text={'Years of Journey'} trui={false}/>
                    </ScrollTrigger>
                </div>
                
            </CommonSatcure>

            <CommonSatcure section="common clients_says" container="container" row="row" hadding="What Our Happy Clients says" parentTrue={true} innerTrue={false}>
                <Carousel responsive={responsive} swipeable={false} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}
  draggable={false}
  showDots={true}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  renderBtnOutside={true}
  containerClass="carousel-container"
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px">
                {Clientsays_value.map((f)=>
                    <Clientsays_box img={f.image} name={f.name} designation={f.designation} content={f.content} key={f.key}/>
                )}
                </Carousel>
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

            <CommonSatcure section="common blog_main" container="container" row="row gy-lg-0 gy-4" hadding="Recent Blogs" parentTrue={true} innerTrue={false}>
                {Blog_value.map((e)=>
                    <BlogBox img_url={e.image} content1={e.content1} content2={e.content2} urlLink={e.urlLink} catagorys={e.catagorys} postDate={e.postDate} key={e.key}/>
                )}
                <Button2 url="/blog" text="See More" classn="button2 mt-5 ms-auto me-auto"/>
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

export default Home;