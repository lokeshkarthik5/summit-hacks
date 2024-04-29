"use client"
import React from 'react'
import { Montserrat } from "next/font/google"
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logo from '@/public/epic-logo.png'
import { LayoutDashboard, Settings, ImageIcon, GraduationCap, Notebook, School, BookOpen } from 'lucide-react'


const monstserrat = Montserrat({
  weight: "600",
  subsets:["latin"]
})

const routes=[
  {
    label:"Dashboard",
    icon:LayoutDashboard,
    href:"/dashboard",
    color:"text-blue-500"
  },
  {
    label:"Image Generator",
    icon:ImageIcon,
    href:"/image",
    color:"text-violet-500"
  },

  {
    label:"AutoGrade",
    icon:GraduationCap,
    href:"/autograde",
    color:"text-blue-500"
  },
  {
    label:"Summarize",
    icon:Notebook,
    href:"/summarize",
    color:"text-purple-500"
  },
  {
    label:"Tutor",
    icon:School,
    href:"/tutor",
    color:"text-red-500"
  },
  {
    label:"Research",
    icon:BookOpen,
    href:"/research",
    color:"text-black-500"
  }
]



const Sidebar = () => {
  const pathname = usePathname()
  return (
    <div className='flex flex-col h-full space-y-4 text-white bg-[#111827] md:bg-transparent'>
    <div className='px-3 py-2 flex-1'>
      <Link href='/dashboard' className='flex items-center pl-3 mb-14'>
        <div className='relative w-[80px] h-[80px] mr-1 mt-1'>
        <Image
          src={logo}
          width={90}
          height={90}
          alt='logo'
        />
        </div>
        <h1 className={cn("text-3xl font-bold",monstserrat.className)}>Summit</h1>
      </Link>
      <div className='h-full space-y-5'>
        {routes.map((route)=>(
          <Link
          href={route.href}
          key={route.href}
          className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                    pathname === route.href? "text-white bg-white/10" :
                    "text-zinc-400"
          )}
          >
              <div className='flex items-center flex-1'>
                <route.icon className={cn("mr-4",route.color)} size={20}/>
                <span>{route.label}</span>  
              </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Sidebar



    
    