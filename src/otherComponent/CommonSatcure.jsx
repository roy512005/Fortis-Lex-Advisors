import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';
function CommonSatcure({children, section, container, row, hadding, parentTrue, innerTrue, text}) {
    return(
        <>
            <section className={section}>
                <div className={container}>
                    {parentTrue==true?<div className="section-title">
                        <h2 className="contey-hadd">{hadding}</h2>
                        {innerTrue==true?<p>{text}</p>:''}
                    </div>:''}
                    <div className={row}>
                        {children}
                    </div>
                </div>
            </section>
       </>
    );
    
}
CommonSatcure.propTypes = {
    children: PropTypes.node,
    section: PropTypes.node,
    container: PropTypes.node,
    row: PropTypes.node,
    hadding:PropTypes.node,
    parentTrue:PropTypes.node,
    innerTrue:PropTypes.node,
    text:PropTypes.node,
};
export default CommonSatcure;