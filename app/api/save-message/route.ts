import { NextResponse } from "next/server"
import AWS from 'aws-sdk'
import { v4 as uuidv4 } from 'uuid';

export const POST=async(req:Request)=>{

    const {name, email, message}=await req.json()

    try {
           const DB_CONFIG={
            accessKeyId:process.env.NEXT_AWS_EMAIL_ACCESS_KEY,
            secretAccessKey:process.env.NEXT_AWS_EMAIL_SECRET_ACCESS_KEY,
            region:process.env.NEXT_AWS_EMAIL_REGION
     }

     const dynamodb=new AWS.DynamoDB.DocumentClient(DB_CONFIG)
 
    const response= await dynamodb.put({
        TableName:"portfolio_messages",
        Item:{
            "id":uuidv4(),
            "email":email,
            "name":name,
            "message":message
        }
     }, function(err:any,data:any){
        if(err){
            console.log(err)
           return NextResponse.json({message:JSON.stringify(err)})
           
        }else{
           return JSON.stringify(data)
        }
     })

     return NextResponse.json({message:"Transaction Successfull"}, {status:200})

    } catch (error) {
        console.log(error)
        NextResponse.json({message:error},{status:500})
    }
}