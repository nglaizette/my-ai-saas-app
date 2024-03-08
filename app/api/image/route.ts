import { auth } from "@clerk/nextjs";
import { Console } from "console";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";

const openai = new OpenAI(
	{
		apiKey: process.env.OPEN_API_KEY,
	}
);

export async function POST(
	req:Request
){
	try{
		 const {userId} =  auth();
		 const body = await req.json();
		 const { prompt, amount = 1, resolution = "512x512" } = body

		 if (!userId){
			return new NextResponse("Unauthorized", {status: 401})
		 }

		 if(!openai.apiKey){
			return new NextResponse("OpenAI API Key not configured", {status: 500})
		 }

		 if(!prompt){
			return new NextResponse("Prompt is required", {status: 400})
		 }

		 if(!amount){
			return new NextResponse("Amount is required", {status: 400})
		 }

		 if(!resolution){
			return new NextResponse("Resolution is required", {status: 400})
		 }

		 const freeTrial = await checkApiLimit();

		 if(!freeTrial) {
			return new NextResponse("Free trial has expired.", { status: 403 })
		 }

		 const response = await openai.images.generate({
			model: "dall-e-2",
			prompt: prompt,
			n: parseInt(amount, 10),
			size: resolution,
		 });

		 await increaseApiLimit();

		 // Log the entire response for debugging
		 console.log("OpenAI API Response:", response);
		
		 // Extract URLs safely
		 let urls = response.data?.map((item)=> item.url);

		 if(!urls || urls.length === 0){
			return new NextResponse("No images generated", {status: 404});
		 }
		 console.log('urls', urls);

		 return NextResponse.json(urls)

	} catch (error){
		console.log("[IMAGE_ERROR", error);
		return new NextResponse("Internal error", {status: 500});
	}
}