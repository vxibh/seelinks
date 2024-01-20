import clientPromise from "@/libs/mongoClient";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth"
import  GoogleProvider from "next-auth/providers/google" // Import the GoogleProvider module

export const authOptions = {
    secret: process.env.SECRET,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
};

const handler = NextAuth(authOptions); // Pass authOptions directly, not {authOptions}

export { handler as GET, handler as POST }