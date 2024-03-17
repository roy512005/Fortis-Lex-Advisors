import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {NavLink} from "react-router-dom"

function Button2({text, url, classn}) {
    return(
        <div className="">
            <NavLink to={url} className={classn}><span>{text}</span><i className='bx bx-right-arrow-alt'></i></NavLink>
        </div>
    );
}
Button2.propTypes = {
    url: PropTypes.node,
    text: PropTypes.node,
    classn: PropTypes.node,
};
export default Button2;