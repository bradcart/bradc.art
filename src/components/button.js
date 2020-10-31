import React from "react"

const Button = ({ link, label }) => (
  <a className="btn" href={link} target="_blank">
    {label}
  </a>
)

export default Button
