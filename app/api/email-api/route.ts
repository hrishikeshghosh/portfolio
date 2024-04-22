import { NextResponse } from "next/server"
import AWS from 'aws-sdk' 

export const POST=async(req:Request)=>{
    const {recipientEmail,name}=await req.json()
    try {
        
    const SES_CONFIG={
            accessKeyId:process.env.NEXT_AWS_EMAIL_ACCESS_KEY,
            secretAccessKey:process.env.NEXT_AWS_EMAIL_SECRET_ACCESS_KEY,
            region:process.env.NEXT_AWS_EMAIL_REGION
     }
    const AWS_SES=new AWS.SES(SES_CONFIG)

    await AWS_SES.sendEmail({
        Source:"hrishikeshghoshofficial@gmail.com",
        Destination:{
            ToAddresses:[recipientEmail]
        },
        ReplyToAddresses:[],
        Message:{
            Body:{
                Html:{
                    Charset:'UTF-8',
                    Data:`<h3>Hi traveller <b>#${name}</b></h3>
                    <p>I hope You are doing Well. I have received your message.
                    Will connect with you soon!</p>

                    <b>Thank You & Best Regards,</b>
                    <br/>
                    <b>Hrishikesh</b>
                    `
                },
                Text:{
                    Charset:'UTF-8',
                    Data:"I hope You are doing Well. I have received your message. Will connect with you soon! Thank You & Best Regards, Hrishikesh."
                },
                
            },
        Subject:{
            Charset:'UTF-8',
            Data:`Re: Thank You for messaging Hrishikesh`
        }
        }
    }).promise() 
    return NextResponse.json({message:"Email sent Successfully!"}, {status:200})

    } catch (error) {
        console.log(error)
        NextResponse.json({message:error},{status:500})
    }
}

