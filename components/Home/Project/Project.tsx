import SectionHeading from '@/components/Helper/SectionHeading'
import ProjectCard from './ProjectCard'
import React from 'react'
import { projects } from '@/data'

const Project = () => {
  return (
    <div className='py-16 bg-gray-50 dark:bg-gray-900'>
      <SectionHeading
        title1='Featured'
        title2='Programs'
        description='Explore our academic programs and facilities'
      />
      <div className='container grid md:grid-cols-2 lg:grid-cols-3 gap-12 w-[80%] mx-auto mt-8'>
        {projects.map((project, index) => {
          return <div key={index}>
            <ProjectCard {...project} />  
          </div>
        })}

      </div>
    </div>
  )
}

export default Project
