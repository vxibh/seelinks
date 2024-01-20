'use client';

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react"

export default function LogoutButton() {
    return (
        <button
            className= "flex items-center shadow gap-2 border p-2"
            onClick = {() => signOut()}>
            <span>Logout</span>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </button>
    ) 
} 