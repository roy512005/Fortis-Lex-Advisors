import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';
function Clientsays_box({img, name, designation, content}) {
    return(
        <>
            <div className="clientsays_box">
                <img src={`./image/other/${img}`} alt="" />
                <div className="content">
                    <h3>{name}</h3>
                    <h5>{designation}</h5>
                    <p>{content}</p>
                </div>
            </div>
           
        </>
    );
}

Clientsays_box.propTypes = {
    img: PropTypes.node,
    name: PropTypes.node,
    designation: PropTypes.node,
    content: PropTypes.node,
};
export default Clientsays_box;