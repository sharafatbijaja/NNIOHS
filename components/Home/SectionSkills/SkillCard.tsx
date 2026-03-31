import React from 'react'
import { LucideIcon } from 'lucide-react'

type Props = {
    name: string
    icon: LucideIcon
}

const SkillCard = ({ name, icon: Icon }: Props) => {
  return (
    <div className='group relative bg-white dark:bg-gray-900 shadow-md rounded-xl p-4 flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-all duration-300'>
      <div className='w-12 h-12 rounded-full bg-linear-to-br from-gray-950 to-green-500 flex items-center justify-center group-hover:from-green-400 group-hover:to-green-800 transition-all duration-300'>     
        <Icon className='w-6 h-6 text-white' />
      </div>
      <span className='text-sm md:text-md font-semibold text-foreground'>{name}</span>
    </div>
  )
}

export default SkillCard
