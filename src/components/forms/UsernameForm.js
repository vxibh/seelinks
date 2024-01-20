'use client';
import RightIcon from "@/components/icons/RightIcon";
import grabUsername from "@/actions/grabUsername";
import UsernameFormResult from "@/components/formResults/UsernameFormResult";
import { useState } from "react";
import { redirect } from "next/navigation";
import SubmmitButton from "@/components/buttons/SubmitButton";


export default function UsernameForm({desiredUsername}) {
   
    const [taken, setTaken] = useState(false);

    async function handleSubmit(formData) {
        const result = await grabUsername(formData);
        setTaken(result === false);

        if(result) {
            redirect('/dashboard?created=' + formData.get('username'));
        }
        
    }

    return (
        <form action={handleSubmit}>
            
                <h1 className="text-4xl font-bold text-center mb-2">
                    Grab your username!
                </h1>
                <p className="text-center mb-6 text-gray-800">
                    Choose a username to use on your profile link.
                </p>
                <div className="max-w-xs mx-auto">
                <input 
                    name='username'
                    className="block p-2 flex mx-auto border w-full text-center"
                    type="text" placeholder="username" 
                    defaultValue={desiredUsername}/ >
                { taken && 
                    <UsernameFormResult />
                }

                <SubmmitButton>
                    <span>Claim your username</span>
                    <RightIcon />
                </SubmmitButton>
                </div>       
            </form>
    )
}