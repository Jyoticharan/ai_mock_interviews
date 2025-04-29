import {google} from "@ai-sdk/google"

export async function GET(){
      return Response.json({success : true,data: 'THANK YOU!'},{status : 200});
}


