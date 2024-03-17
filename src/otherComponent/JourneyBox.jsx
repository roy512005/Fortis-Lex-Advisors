import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
function JourneyBox({img_url, content1, content2, urlLink, dot}) {
    
    return(
        <>
            <div className="col-lg-4 col-sm-6 col-12">
                <div className="journey_box zoom_effect">
                    <div className="image">
                        <img src={`${dot==true?'.':''}./image/journey/${img_url}`} alt="" />
                    </div>
                    
                    <div className="content">
                        <h5>{content1}</h5>
                        <p className='p'>{content2}</p>
                        <NavLink to={urlLink}><span>Know more</span><i className='bx bx-right-arrow-alt'></i></NavLink>
                    </div>
                </div>
            </div>
           
        </>
    );
}

JourneyBox.propTypes = {
    img_url: PropTypes.node,
    content1: PropTypes.node,
    content2: PropTypes.node,
    urlLink: PropTypes.node,
    dot: PropTypes.node,
};
export default JourneyBox;