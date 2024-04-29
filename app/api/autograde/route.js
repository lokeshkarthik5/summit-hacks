import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

export async function POST(request){

    
    try {
        
        const {message} = await request.json()

        if(!message) return NextResponse.json({error: "Message is required"}, {status: 400})

        const response = await groq.chat.completions.create({
            
        messages:[

            {
                role:"user",
                content:message + "solve these for me"
            }
        ],
            model:"mixtral-8x7b-32768"    
        })

        return NextResponse.json(response.choices[0]?.message?.content || "".text)

    } catch (error) {
        
        return NextResponse.json({error: error.message}, {status: 500}) 
    }


}