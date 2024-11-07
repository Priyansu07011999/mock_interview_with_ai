"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

function Header() {

  const path = usePathname()
  return (
    <div className='flex p-4 justify-between items-center bg-secondary shadow-lg rounded-md'>
      <Image src={'/logo.svg'} width={40} height={40} alt='logo'/>
      <ul className='hidden md:flex gap-24'>
        <li className={`hover:font-bold hover:text-blue-500 transition-all cursor-pointer ${path == '/dashboard' && 'text-blue-500 font-bold'}`}>Dashboard</li>
        <li className={`hover:font-bold hover:text-blue-500 transition-all cursor-pointer ${path == '/upgrade' && 'text-blue-500 font-bold'}`}>Upgrade</li>
        <li className={`hover:font-bold hover:text-blue-500 transition-all cursor-pointer ${path == '/questions' && 'text-blue-500 font-bold'}`}>Questions</li>
        <li className={`hover:font-bold hover:text-blue-500 transition-all cursor-pointer ${path == '/query' && 'text-blue-500 font-bold'}`}>Query</li>
      </ul>
      <UserButton/>
    </div>
  )
}

export default Header