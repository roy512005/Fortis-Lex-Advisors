import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';
// import FooterList from '../otherComponent/FooterList';
import {NavLink} from "react-router-dom"
function Footer() {
    let footer_value1=[
        {  
            url:"/",
            text:"Enviromental law"
        },{  
            url:"/",
            text:"Corporate & commercial"
        },{  
            url:"/",
            text:"Information & technology"
        },{  
            url:"/",
            text:"Other services"
        },
    ];
    let footer_value2=[
        {  
            url:"/About",
            text:"About"
        },{  
            url:"/Contact",
            text:"Contact"
        },{  
            url:"/",
            text:"Partners"
        },{  
            url:"/",
            text:"Pricing"
        },
    ];
    let footer_value3=[
        {  
            url:"/",
            text:"Terms of service"
        },{  
            url:"/",
            text:"Legal"
        },{  
            url:"/",
            text:"Privacy Policy"
        },{  
            url:"/",
            text:"Help Centre"
        },
    ];
    let Socil_value=[
        {  
            icon:"bx bxl-twitter",
            url:"/"
        },{  
            icon:"bx bxl-instagram",
            url:"/"
        },{  
            icon:"bx bxl-facebook",
            url:"/"
        }
    ];
    return(
        <>
            <div className="col-lg-5">
                <div className='footer_logo'>
                    <NavLink to={'/'}>
                        <img src="../image/logo1.png" alt=""/>
                    </NavLink>
                </div>
                <p>Navigating Legal Excellence, Crafting Solutions for You.</p>
                <ul className='cotact_info'>
                    {/* bx bxs-phone */}
                    <li><i className='bx bxs-map'></i><NavLink to='https://maps.app.goo.gl/t8v9GseuzxhjnNvc8' target="_blank">Bidhannagar, Kolkata, West Bengal</NavLink></li>
                    <li><i className='bx bx-phone'></i><NavLink to='tel:+918961355246' target="_blank">+91 896 135 5246</NavLink></li>
                    <li><i className='bx bxl-whatsapp'></i><NavLink to='https://web.whatsapp.com/send?phone=918961355246' target="_blank">+91 896 135 5246</NavLink></li>
                </ul>
                <ul className='sociel_list'>
                    {Socil_value.map((e)=>
                       <li key={e.key}><NavLink to={e.url}><i className={e.icon}></i></NavLink></li>
                    )}
                    
                </ul>
            </div>

            <div className="col-lg-3">
                <h3>Services</h3>
                <ul className='list'>
                    {footer_value1.map((e)=>
                       <li key={e.key}><NavLink to={e.url}>{e.text}</NavLink></li>
                    )}
                    
                </ul>
            </div>

            <div className="col-lg-2">
                <h3>Company</h3>
                <ul className='list'>
                    {footer_value2.map((e)=>
                       <li key={e.key}><NavLink to={e.url}>{e.text}</NavLink></li>
                    )}
                    
                </ul>
            </div>

            <div className="col-lg-2">
                <h3>Support</h3>
                <ul className='list'>
                    {footer_value3.map((e)=>
                       <li key={e.key}><NavLink to={e.url}>{e.text}</NavLink></li>
                    )}
                    
                </ul>
            </div>
        </>
    );
}

Footer.propTypes = {
    img_url: PropTypes.node,
    content: PropTypes.node,
};
export default Footer;