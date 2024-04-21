import { NextResponse } from "next/server"


export const POST = async(req:Request,res:Response)=>{

   const body=await req.body
   
   return NextResponse.json({name:"Hrishikesh", body:body},{status:200})
}