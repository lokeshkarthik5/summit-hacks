"use client"
import Link from 'next/link';
import {React,useState} from 'react'
import {Button} from '@/components/ui/Button'



const DashboardPage = ()=>{



    return (
        <div className='flex flex-col items-center gap-y-10'>
            <h1>Dashboard</h1>
            <h1 className='w-[350px] ml-10'>Discover various tools which can help you </h1>
            <span className='font-bold mt-[-30px]'>Boost your Academics</span>
            <div>
                <h1>Check out our wide range of solutions for students</h1>
            </div>
        </div>
    )
}

export default DashboardPage;