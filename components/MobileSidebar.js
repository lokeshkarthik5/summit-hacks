"use client"

import {Sheet,SheetContent,SheetTrigger}  from "@/components/ui/Sheet"
import {Button} from "@/components/ui/Button"
import Sidebar from "@/components/Sidebar"
import { Menu } from "lucide-react"
import React, { useEffect, useState } from "react";

const MobileSidebar = () => {
  const [isMounted,setIsMounted]= useState(false);

  useEffect(()=>{
      setIsMounted(true);
  },[])

  if (!isMounted){
      return null;
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button className='md:hidden' variant="ghost" size="icon">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
);
}
      



    

export default MobileSidebar