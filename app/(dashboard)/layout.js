
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function DashboardLayout ({ children })  {
    return (
        <div className='h-full relative'>
            <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-800 text-white p-4'>
                
                <Sidebar />
            </div>
            <main className='md:pl-72'>
                
                <Navbar /> 
                {children}
            </main>
        </div>
    )
}
            

    
            