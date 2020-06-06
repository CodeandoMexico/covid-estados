import React from 'react';
export const Box = ({ children, direction = 'row' }) => (
  <div className={`box direction-${direction}`}>
    {children}
  </div>
)
export const Counter = ({ title, number }) => (
  <div className="counter">
    <span>{title}</span>
    <div>
      {number}
    </div>
  </div>
)
export const Icon = ({ image, text, link = '#' }) => (
  <a className="icon" href={link} target='_blank'>
    <div>
      <img src={image} alt={text} />
    </div>
    <span>{text}</span>
  </a>
)

export const Container = ({
  children,
  direction = 'row',
  alignItems = '',
  className = '',
}) => (
  <div className={`container direction-${direction} ${alignItems} ${className}`}>
    {children}
  </div>
)
