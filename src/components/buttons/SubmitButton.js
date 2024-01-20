import {useFormStatus} from 'react-dom';

export default function SubmmitButton({children}){
    const {pending} = useFormStatus();
    
    return (
        <button type="Submit" 
        disabled={pending}
        className="w-full bg-blue-500 disabled:bg-blue-300 text-white disabled:text-gray-200 px-4 py-2 block mx-auto mt-2 flex gap-2 items-center justify-center">
            {children}
        </button>
    )
}