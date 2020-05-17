import React from 'react';
import './SocialLink.scss';

function SocialLink({ to, title }) {
  return(
    <a className="social-link" href={ to } target="_blank" rel="noopener noreferrer">{ title }</a>
  )
}

export default SocialLink;
