"use client"

import {React,useState} from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const ImagePage = () =>{

    const [inputValue, setInputValue] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setInputValue(e.target.value);
      };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true);
        const response = await fetch("/api/image", {
          method: "POST",
          body: JSON.stringify({
            prompt: inputValue,
          }),
        });
        const data = await response.json();
        setImage(data?.[0]);
        setLoading(false);
    }


    return(

    <main>
      
      <div className="w-1/2 space-y-2 p-10 flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-2 block text-gray-600">
            Enter your prompt
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="rounded-md border border-black px-2 py-1"
          />
          <Button
            disabled={loading}
            type="submit"
            className="mt-4 w-max rounded-md border border-black px-4 py-1"
          >
            Submit
          </Button>
        </form>
        {image}
        {image && (
          <img src={image} height={400} width={400} alt="" />
        )
        }
      </div>

  </main>
       
    )
}

export default ImagePage;