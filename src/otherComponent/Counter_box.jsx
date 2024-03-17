import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import CountUp from "react-countup";
function Counter_box({counter, startNumber, endNumber, durationTime, classn, text, trui, icon}) {
    return(
        <div className={classn}>
            <div className="count-box">
                <h3>{counter && <CountUp start={startNumber} end={endNumber} duration={durationTime} />} {trui==true?<i className={icon}></i>:''} </h3>
                <p>{text}</p>
            </div>
            
        </div>
    );
}
Counter_box.propTypes = {
    counter: PropTypes.node,
    startNumber: PropTypes.node,
    endNumber: PropTypes.node,
    durationTime: PropTypes.node,
    classn: PropTypes.node,
    text: PropTypes.node,
    trui: PropTypes.node,
    icon: PropTypes.node,
};
export default Counter_box;