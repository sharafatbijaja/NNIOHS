/**
 * SkillCard Component
 * 
 * Individual skill/technology badge
 * Displayed in responsive grid in Skills section
 * 
 * Features:
 * - Icon with gradient background
 * - Skill name
 * - Hover scale animation
 * - Dark mode support
 * 
 * Props:
 * - name: Skill/technology name
 * - icon: Lucide icon component for the skill
 */

import React from 'react';
import { LucideIcon } from 'lucide-react'; // Icon type from lucide-react

// Type definition for skill card props
type Props = {
  name: string; // Skill name (React, Next.js, etc.)
  icon: LucideIcon; // Icon component from lucide-react
};

const SkillCard = ({ name, icon: Icon }: Props) => {
  return (
    // Card container with hover effects
    <div className='group relative bg-white dark:bg-gray-900 shadow-md rounded-xl p-4 flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-all duration-300'>
      {/* Icon Container with gradient background */}
      <div className='w-12 h-12 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center group-hover:from-primary group-hover:to-primary/80 transition-all duration-300'>
        {/* Icon - Changes color on hover */}
        <Icon className='w-6 h-6 text-primary' />
      </div>

      {/* Skill Name */}
      <span className='text-sm md:text-md font-semibold text-foreground'>{name}</span>
    </div>
  );
};

export default SkillCard;