import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';
function ButtonGroup({previous, next}) {
  return(
    <>
        <div className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left" onClick={previous}></div>

        <div className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right" onClick={next}></div>
    </>
  );
}

ButtonGroup.propTypes = {
  previous: PropTypes.node,
  next: PropTypes.node,
};
export default ButtonGroup