import Replicate from 'replicate';
import {NextResponse} from 'next/server';
import {auth} from "@clerk/nextjs/server";



const replicate = new Replicate({auth:process.env.REPLICATE_API_TOKEN});

export async function POST(request){

  if (!process.env.REPLICATE_API_TOKEN) {
      throw new Error(
        "The REPLICATE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it."
      );
    }

    try {
    const{userId}= auth();
    
    if(!userId){
      return new NextResponse("Unauthorized",{status:401});
    }







    const {prompt}  = await request.json()

    if(!prompt) return NextResponse.error("Prompt is required")
    

    const output = await replicate.run("bytedance/sdxl-lightning-4step:727e49a643e999d602a896c774a0658ffefea21465756a6ce24b7ea4165eba6a",  
    {input : {
        prompt :  prompt,
        negative_prompt: "ugly, disfigured, low quality, blurry",
        
    }} )

    

   
 
    

    
    
    return NextResponse.json(output)


} catch (error) {
    console.log(error)
    return NextResponse.json("An error occured. Please try again later.", {status:500})
}
}
