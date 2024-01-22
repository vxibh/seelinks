'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faChartLine, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import LogoutButton from '@/components/buttons/LogoutButton';
import { usePathname } from 'next/navigation';

export default function AppSideBar() {
    const path = usePathname();
    console.log(path);

    const commonLinkClasses = "flex gap-4 items-center font-bold p-2";
    const activeLinkClasses = "text-blue-700";
    const inactiveLinkClasses = "text-gray-500";

    return (
        <nav className="inline-flex flex-col text-center mt-12 gap-4 mx-auto text-gray-700">
            <Link href={"/dashboard"} className={`${commonLinkClasses} ${path === '/dashboard' ? activeLinkClasses : inactiveLinkClasses}`}>
                <FontAwesomeIcon fixedWidth={true} icon={faFileLines} className={"w-6 h-6"} />                    
                <span className="">Settings</span>
            </Link>
            <Link href={"/analytics"} className={`${commonLinkClasses} ${path === '/analytics' ? activeLinkClasses : inactiveLinkClasses}`}>
                <FontAwesomeIcon fixedWidth={true} icon={faChartLine} className={"w-6 h-6"} />
                <span className="">Analytics</span>
            </Link>

            <LogoutButton iconLeft={true} className={'flex gap-4 items-center p-2'} iconClasses={'w-6 h-6 text-gray-500 '}/>
            
            <Link href={"/"} className="flex gap-4 items-center border-t-2 text-xs pt-4"> 
                <FontAwesomeIcon icon={faAnglesLeft} className={"w-4 h-4 ${path === '/dashboard' ? 'text-blue-600' : 'text-gray-600'}`}"} />
                <span>Back to Website</span>
            </Link>
        </nav>
    );
}
