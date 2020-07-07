import React from "react";
import "./components.scss";
import Container from "./Container";
import LinkSelect from "./LinkSelect";
import Counter from "./Counter";

const Badge = ({ children, variant }) => (
  <span className={`badge badge-${variant}`}>{children}</span>
)

const Box = ({ children, direction = "row", color = "base" }) => (
  <div className={`box direction-${direction} color-${color}`}>{children}</div>
);

const Icon = ({ image, text, link = "#" }) => (
  <a className="icon" href={link} target="_blank" rel="noopener noreferrer">
    <div>
      <img src={image} alt={text} />
    </div>
    <span>{text}</span>
  </a>
);

const LinkTo = ({ v }) => {
  let link = "";
  if (v[0] === "whatsapp")
    link = `https://api.whatsapp.com/send?phone=${v[1]}`;
  else if (v[0] === "correo") link = `mailto:${v[1]}`;
  else link = v[1];
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {v[0].toUpperCase()}
      </a>
    </div>
  );
};

export { Badge, Box, Counter, Icon, LinkTo, Container, LinkSelect };
