"use client"

import { Button } from "@/components/ui/button"
import { React,useState } from "react"



const TutorPage = () =>{

    const [messages,setMessages] = useState('')
    const [answer,setAnswer] = useState('')
    const [loading,setLoading] = useState(false)

    const handleChange = (e) =>{
        setMessages(e.target.value)
    }

    const handleSubmit = async (e) =>{
    
        e.preventDefault();

        try {
    
          setLoading(true);
          const response = await fetch('/api/tutor', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages }),
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
      
    
    }


    return (
        <div className="flex flex-col items-center">
            <h1>Tutor</h1>
            <form onSubmit={handleSubmit} className="flex flex-col mt-10 gap-y-5">
                <input type="text" placeholder="Enter your message" onChange={handleChange}></input>
                <Button type="submit">Submit</Button>
            </form> 
            <div>{answer}</div>
        </div>
    )
}

export default TutorPage;