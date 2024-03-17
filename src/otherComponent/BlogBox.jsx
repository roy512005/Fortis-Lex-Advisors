import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
function BlogBox({img_url, content1, content2, urlLink, catagorys, postDate, dot}) {
    
    return(
        <>
            <div className="col-lg-4 col-sm-6 col-12">
                <div className="blog_box">
                    <div className="image">
                        <img src={`${dot==true?'.':''}./image/other/${img_url}`} alt="" />
                    </div>
                    
                    <div className="content">
                        <ul className='blogdet'>
                            <li><span>{catagorys}</span></li>
                            <li><span>{postDate}</span></li>
                        </ul>
                        <h5>{content1}</h5>
                        <p className='p'>{content2}</p>
                        <NavLink to={urlLink}><span>Read more</span><i className='bx bx-right-arrow-alt'></i></NavLink>
                    </div>
                </div>
            </div>
           
        </>
    );
}

BlogBox.propTypes = {
    img_url: PropTypes.node,
    catagorys: PropTypes.node,
    postDate: PropTypes.node,
    content1: PropTypes.node,
    content2: PropTypes.node,
    urlLink: PropTypes.node,
    dot: PropTypes.node,
};
export default BlogBox;