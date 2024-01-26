'use client';
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import RadioTogglers from '../formItems/radioTogglers'
import Image from 'next/image'
import SubmmitButton from '../buttons/SubmitButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-regular-svg-icons'
import { savePageSettings } from '@/actions/pageActions';
import { toast } from 'react-hot-toast';

export default function PageSettingsForm({page, user}){
    async function saveBaseSettigns(formData){
        const result = await  savePageSettings(formData);
        if(result) {
           toast.success('Saved!');
        }
    }
    
    return (
        <div className="-m-4">
            <form action={saveBaseSettigns}>
                <div className="bg-gray-300 py-16 flex justify-center items-center">
                    <RadioTogglers selectedOption="color" 
                    options={[
                        {value: 'color', icon: faDroplet, label: 'Color'},
                        {value: 'image', icon: faImages, label: 'Image'}
                    ]} onChange={() =>{}}/>
                 </div>   
                <div className='flex justify-center -mb-12'>
                    <Image
                    className='rounded-full relative -top-8 border-4 border-white shadow shadow-black/50'
                    src={user?.image} alt={'avatar'} height={128}width={128} />
                </div>
                <div className='p-4'>
                    <label className='input-label' htmlFor='nameIn'>Display Name</label>
                    <input
                        className='userButton' 
                        id='nameIn' 
                        type='text' 
                        name='displayName' 
                        defaultValue={page.displayName} 
                        placeholder="John Doe" />
                    <label className='input-label'  htmlFor='locationIn'>Location Name</label>
                    <input 
                        className='userButton' 
                        id='locationIn' type="text" 
                        name='location'
                        defaultValue={page.location}
                        placeholder="Somewhere in the world" />
                    <label className='input-label'  htmlFor='bioIn'>Bio</label>
                    <textarea
                        className='userButton' 
                        id='bioIn'
                        name='bio'
                        defaultValue={page.bio}
                        placeholder="Your bio..." />
                        <div className='max-w-[100px] mx-auto'>
                            <SubmmitButton>
                                <FontAwesomeIcon icon={faSave} />
                                Save
                            </SubmmitButton>
                        </div>
                    </div>
            </form>
        </div>
    )
}