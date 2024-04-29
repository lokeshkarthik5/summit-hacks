

'use client'

import { Button } from '@/components/ui/button';
import pdfToText from "react-pdftotext";
import { useState } from 'react';
import { Montserrat } from "next/font/google"
import { cn } from '@/lib/utils';
import Link from 'next/link';

const monstserrat = Montserrat({
  weight: "600",
  subsets:["cyrillic"]
})

const extra = Montserrat({
  weight: "900",
  style:['normal'],
  subsets:["cyrillic"]
})


export default function AutoGrade() {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');
 
  const [loading, setLoading] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);
      const response = await fetch('/api/autograde', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (response.ok) {
        setAnswer(data);
      } else {
        setAnswer(`Error: ${data.error}`);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setAnswer('An error occurred');
    }
  };





  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    pdfToText(file)
        .then((text) => {
            setMessage(text);
        })
        .catch((err) => {
            console.error(err);
        });
  };

  return (
    <div className='flex flex-col items-center'>
      
      
      <form onSubmit={handleSubmit} className='gap-y-10 flex flex-col '>
        <input type="file" accept="application/pdf" onChange={handleFileUpload} />
        <Button type="submit" disabled={loading} >Submit</Button>
      </form>
      {answer && <div className={cn('text-black mt-10 w-[80%] font-bold',monstserrat.className)}>
      
      <div className='bg-zinc-200' dangerouslySetInnerHTML={{ __html: answer }} />
      </div>}
    </div>
  );
}
      
          