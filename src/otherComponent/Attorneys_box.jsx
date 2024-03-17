import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';
function Attorneys_box({img_url, content1, content2,}) {
    return(
        <>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                <div className="attorneys_box zoom_effect">
                    <img src={`./image/other/${img_url}`} alt="" />
                    <div className="content">
                        <h3>{content1}</h3>
                        <p>{content2}</p>
                    </div>
                </div>
            </div>
           
        </>
    );
}

Attorneys_box.propTypes = {
    img_url: PropTypes.node,
    content1: PropTypes.node,
    content2: PropTypes.node,
};
export default Attorneys_box;