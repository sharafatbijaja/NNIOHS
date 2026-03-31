"use client";
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const ThemeToggler = () => {
  
  const [mounted, setMounted] = React.useState(false);

  const { theme, setTheme, systemTheme } = useTheme();
  
    useEffect(() => {

        const mounteCheck = () => {
            setMounted(true);
        };
        mounteCheck();
    }, []);

    if (!mounted) { return null; }
  
    const currentTheme = theme === "system" ? systemTheme : theme;

    return <button
    
    onClick={()=> setTheme(currentTheme === "dark" ? "light" : "dark")}
    
    className=' cursor-pointer transition bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md flex items-center justify-center'>
        
        {currentTheme === "dark" ? (

            <Sun className='w-4 h-4 text-yellow-500' />
        ):(
            <Moon className='w-4 h-4 text-gray-700' />
        )}
       
        </button>
}

export default ThemeToggler
