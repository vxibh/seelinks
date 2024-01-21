import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Page } from "@/models/Page";
import UsernameForm from "@/components/forms/UsernameForm";
import mongoose from "mongoose";

export default async function Dashboard({searchParams}) {
    
    const session = await getServerSession(authOptions);
    const desiredUsername = searchParams?.desiredUsername;

    if(!session) {
        return redirect('/');
    }
    
    mongoose.connect(process.env.MONGODB_URI);
    const page = await Page.findOne({ owner: session?.user?.email });

    if(page) {
        return (
            <div>Your Page is : /{page.uri}</div>
        )
    }
    return (
        <div>
            <UsernameForm desiredUsername={desiredUsername}/>
        </div>
    );
}