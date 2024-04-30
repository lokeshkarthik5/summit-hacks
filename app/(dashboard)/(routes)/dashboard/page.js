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
            <h1>Check out our wide range of solutions for students:</h1>
            <div className='flex flex-col items-center font-bold gap-y-5'>
                <h1>1.You can summarize your essays with summarize feature</h1>
                <h1 className='w-[500px] ml-[50px]'>2.You can generate images for your assisgnments with Image Generator feature</h1>
                <h1 className='mr-[60px]'>3.You can ask any questions with our Tutor feature</h1>
                <h1 className='ml-[25px]'>4.You can get your answers graded by our autograde function</h1>
            </div>
        </div>
    )
}

export default DashboardPage;