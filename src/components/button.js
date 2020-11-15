import React from "react"
import { motion } from "framer-motion"

const Button = ({ link, label }) => (
  <motion.a
    className="btn"
    href={link}
    target="_blank"
    whileHover={{
      y: 0.25,
      outline: "rgba(240, 245, 243, 0.5) outset 0.5px",
      border: "0.5px outset #f0f5f3",
    }}
    whileTap={{ y: 1.5 }}
  >
    {label}
  </motion.a>
)

export default Button
