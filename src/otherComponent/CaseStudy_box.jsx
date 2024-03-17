import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import React from 'react';
function CaseStudy_box({img_url, content1, dot}) {
    return(
        <>
            <div className="col-lg-4 col-sm-6 col-12">
                <NavLink to='/CaseStudy/CaseStudyDetails' className="casestudy_box zoom_effect">
                    <img src={`${dot==true?'.':''}./image/other/${img_url}`} alt="" />
                    <div className="content">
                        <h5>{content1}</h5>
                    </div>
                </NavLink>
            </div>
           
        </>
    );
}

CaseStudy_box.propTypes = {
    img_url: PropTypes.node,
    content1: PropTypes.node,
    dot: PropTypes.node,
};
export default CaseStudy_box;