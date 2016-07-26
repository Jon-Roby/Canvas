'use strict';

import classNames from 'classnames';
import React, { PropTypes } from 'react';

const Bullet = (props) => {

  const style = {
    display: 'block',
    height: '20px',
    width: '20px'
  }

  const handleClick = () => {
    props.onClick(props.index, true);
  };

  
  const classes = classNames(
    { 'fa fa-circle-o': !props.active },
    { 'fa fa-circle': props.active }
  )

  // <i className="fa fa-circle"></i>
  return (

      <a href={`#viewport-slide-${props.index}`}
        onClick={handleClick}
        className={classes} />

  );

};

Bullet.propTypes = {
  active: PropTypes.bool,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default Bullet;
