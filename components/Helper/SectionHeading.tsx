import React from 'react'


type props = {
  title1: string;
  title2: string;
  description: string;
}

const SectionHeading = ({ title1, title2, description }: props) => {
  return (
    <div data-aos="zoom-out" className='text-center max-w-200 mx-auto mb-10 px-4'>
      <h2 className='text-3xl md:text-4xl font-bold pb-3'>{title1}{" "}
        <span className='text-green-500'>{title2}</span>
      </h2>
      <span className='text-gray-600 dark:text-gray-300'>{description}</span>
    </div>
  )
}

export default SectionHeading
