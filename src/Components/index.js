import React from 'react';
import './components.scss';

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

export const DetailHeader = ({item}) => {
  return (
    <Container
      direction={"column"}
      className={"title"}
      alignItems={"center"}
    >
    <h1>{item.estado}</h1>
    <div style={{margin: 10}}>
      <div>
        <p>¿Te interesa información de otro estado?</p>
      </div>
      <div 
        className="button-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <button className="states-action" type="button" style={{backgroundColor: '#fff', flex: 1, height: 30, minHeight: '42px'}}>
            <span style={{color: '#5176FF'}}>[SELECCIONA]</span>
          </button>
      </div>
      <div style={{marginTop: 80}}>
        <p>Quédate en casa y lávate las manos.</p>
      </div>
    </div>
    </Container>
  );
}
