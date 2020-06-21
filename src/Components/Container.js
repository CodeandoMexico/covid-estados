import React from 'react';
import PropTypes from 'prop-types';
import './ContainerStyles.scss';

const Container = ({
  children,
  direction = 'row',
  alignItems = '',
  className = '',
}) => (
  <div className={`container direction-${direction} ${alignItems} ${className}`}>
    {children}
  </div>
)

Container.prototype ={
  children: PropTypes.element.isRequired,
  direction: PropTypes.oneOf(['column', 'row']),
  alignItems:PropTypes.oneOf(['center', 'end']),
  className : PropTypes.string,
}

export default Container