import InnerBanner from "../otherComponent/InnerBanner";
import CommonSatcure from "../otherComponent/CommonSatcure";
import Attorneys_box from "../otherComponent/Attorneys_box";
import Footer from "../includeComponent/Footer";
import FooterBottom from "../includeComponent/FooterBottom";
import GetInTouch from "../includeComponent/GetInTouch";
import Carousel from "react-multi-carousel";
import Clientsays_box from "../otherComponent/Clientsays";
import ButtonGroup from "../otherComponent/ButtonGroup";
// eslint-disable-next-line no-unused-vars
import React from "react";

function About() {
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
         },{  
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
          },{  
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
    return(
        <>
           <InnerBanner text={'ABOUT US'} classn={"inner_banner about_us"}/>

           <CommonSatcure section="common getintouch_main" container="container" row="row" parentTrue={false} innerTrue={false}>

            <div className="misvis_main row">
                <div className="col-lg-6">
                    <div className="image">
                        <img src="./image/other/mis.jpg" className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="content">
                        <h3>Our Mission</h3>
                        <p>FortisLex Advisors aspires to empower through expert legal counsel. Navigating with integrity and innovation, our dedicated team is committed to achieving fair resolutions. Beyond challenges, our mission encompasses providing comprehensive, accessible justice tailored to the unique needs of every client.</p>
                    </div>
                </div>
            </div>

            <div className="misvis_main row">    
                <div className="col-lg-6 order-lg-1 order-2">
                    <div className="content">
                        <h3>Our Vision</h3>
                        <p>FortisLex Advisors envisions a legal landscape where innovation and accessibility redefine the client experience. Our vision is to lead with pioneering solutions, making justice tangible, and empowering individuals, businesses, and communities for a more equitable future.</p>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-1">
                    <div className="image">
                        <img src="./image/other/vis.jpg" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
                
              
            </CommonSatcure>

           <CommonSatcure section="common our_ttorneys" container="container" row="row gy-xl-5 gy-sm-4 gy-4" hadding="Our Best Attorneys" parentTrue={true} innerTrue={false}>
                {Attorneys_value.map((f)=>
                    <Attorneys_box img_url={f.image} content1={f.content1} content2={f.content2} key={f.key}/>
                )}
            </CommonSatcure>
            
            <CommonSatcure section="common clients_says" container="container" row="row" hadding="What Our Happy Clients says" parentTrue={true} innerTrue={false}>
                <Carousel responsive={responsive} swipeable={false} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}
  draggable={false}
  showDots={true}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  renderDotsOutside={true}
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
            
            <CommonSatcure section="common footer" container="container" row="row gy-lg-0 gy-4" parentTrue={false} innerTrue={false}>
              <Footer/>
            </CommonSatcure>

            <CommonSatcure section="common footer-bottom" container="container" row="row" parentTrue={false} innerTrue={false}>
              <FooterBottom/>
            </CommonSatcure>
        </>
    );
}

export default About;