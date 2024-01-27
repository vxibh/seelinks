import {useFormStatus} from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function SubmmitButton({children, className=''}){
    const {pending} = useFormStatus();
    
    return (
        <button type="Submit" 
        disabled={pending}
        className={"w-full bg-blue-500 disabled:bg-blue-300 text-white disabled:text-gray-200 px-4 py-2 block mx-auto mt-2 flex gap-2 items-center justify-center" + className}>
            {pending && <FontAwesomeIcon icon={faSpinner} spin/> && <span>Saving...</span>}
            {!pending && children}
        </button>
    )
}