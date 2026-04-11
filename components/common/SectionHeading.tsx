import React from 'react'
import { motion } from 'framer-motion'

type props = {
  title1: string;
  title2: string;
  description: string;
}

const SectionHeading = ({ title1, title2, description }: props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      className='text-center md:max-w-150 mx-auto mb-11'
    >
      <h2 className='text-3xl md:text-4xl font-bold pb-3'>{title1}{" "}
        <span className='text-primary'>{title2}</span>
      </h2>
      <span className='text-gray-600 dark:text-gray-300'>{description}</span>
    </motion.div>
  )
}

export default SectionHeading
