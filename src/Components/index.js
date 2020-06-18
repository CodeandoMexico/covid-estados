import React from 'react';
import { Link } from 'react-router-dom';
import './components.scss';

export const Box = ({ children, direction = 'row' }) => (
  <div className={`box direction-${direction}`}>
    {children}
  </div>
)
export const Counter = ({ title, number }) => (
  <div className="counter">
    <span className="couter-title">{title}</span>
    <div>
      {number}
    </div>
  </div>
)
export const Icon = ({ image, text, link = '#' }) => (
  <a className="icon" href={link} target='_blank' rel="noopener noreferrer">
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

export const LinkTo = ({ v }) => {
  let link = '';
  if (v[0] === 'whatsapp') link = `https://api.whatsapp.com/send?phone=${v[1]}&text=Hola%20BC`
  else if (v[0] === 'correo') link = `mailto:${v[1]}`
  else link = v[1];
  return (
  <div><a href={link} target="_blank" rel="noopener noreferrer">{v[0].toUpperCase()}</a></div>
)}

export const Badge = ({ children, variant }) => {
  return (<span className={`badge badge-${variant}`}>{children}</span>)
}

export const EstadosDropDown = ({ estados, callback = ()=>{} }) => {
  console.log(estados)
  if(estados.length>1) {
    return (<div className="states-options">
      {estados.map((e,i) => (
        <Link className="states-option" 
          to={"/estado/"+e.id} 
          onClick={() => callback()}
          key={i}> { e.fields.estado }</Link>
      ))}
    </div>)
    
  }
  return <></>
}