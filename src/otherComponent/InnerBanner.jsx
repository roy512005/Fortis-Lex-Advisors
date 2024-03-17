import PropTypes from 'prop-types';
import CommonSatcure from './CommonSatcure';
// eslint-disable-next-line no-unused-vars
import React from 'react';

function InnerBanner({text, classn}) {
    return(
        <CommonSatcure section={classn} container="container" row="row" parentTrue={false} innerTrue={false}>
            <div className="col-lg-12">
                <div className="content">
                    <h1>{text}</h1>
                </div>
            </div>
        </CommonSatcure>
    );
}
InnerBanner.propTypes = {
   text: PropTypes.node,
   classn: PropTypes.node,
};
export default InnerBanner;