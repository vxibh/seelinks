'use server';

import { Page } from "@/models/Page";
import mongoose from 'mongoose';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function grabUsername(formData){
    
    const username = formData.get('username');
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    const existingPageDoc = await Page.findOne({ uri: username });

    if(existingPageDoc) {
        //return redirect('/dashboard?usernameTaken=true')
        return false;
    }

    else{
        const session = await getServerSession(authOptions);
        return await Page.create({ 
            uri:username,
            owner: session?.user?.email, });
        //return redirect('/dashboard/' + username)
    }
}
