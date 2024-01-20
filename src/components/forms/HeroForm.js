'use client';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HeroForm({user}) {
    const router = useRouter();
    console.log(user);  
    useEffect(() => {
        if('localStorage' in window && window.localStorage.getItem('desiredUsername')) {
            const username = window.localStorage.getItem('desiredUsername');
            window.localStorage.removeItem('desiredUsername');
            redirect('/dashboard?desiredUsername=' + username);
        }
    }, []);

    //const [username, setUsername] = useState('');
    async function handleSubmit(e) {
        e.preventDefault();
        //console.log({username});
        const form = e.target;
        const input = form.querySelector('input');
        const username = input.value;
        if(username.length > 0) {
            
            if(user){
                router.push('/dashboard?desiredUsername=' + username);
            }
            else{
                window.localStorage.setItem('desiredUsername', username);
                await signIn('google')
            };
        }
    }
    
    return (
        
        <form
        onSubmit={handleSubmit} className="inline-flex items-center shadow-lg shadow-gray-700/30">
          <span className="bg-white py-4 pl-4 rounded">seelinks.com/</span>
          <input type="text" placeholder="username" className="py-4 rounded" />
          <button 

          type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded py-4 px-6">Join Now</button>
        </form>
    )
}