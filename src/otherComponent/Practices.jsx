// @ts-nocheck
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';
function Practices({img_url, content}) {
    return(
        <>
           <div className="practices-box zoom_effect">
                <img src={`./image/other/${img_url}`} alt="" />
                <div className="content">
                    <h3>{content}</h3>
                </div>
           </div>
        </>
    );
}

Practices.propTypes = {
    img_url: PropTypes.node,
    content: PropTypes.node,
};
export default Practices;