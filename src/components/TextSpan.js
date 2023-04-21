import React from 'react'
import { motion } from 'framer-motion'

function TextSpan({ children }) {
  return <motion.span whileHover={{ scale: 1.3 }}>{children}</motion.span>
}

export default TextSpan
