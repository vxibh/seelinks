import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutButton from "./buttons/LogoutButton";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function Header() {

    const session = await getServerSession(authOptions);
    return (
        <header className="bg-white border-b py-4">
        <div className="max-w-4xl flex justify-between mx-auto px-6">
            <div className="flex items-center gap-6 ">
                <Link href={"/"} className="flex items-center gap-2 text-blue-700 ">
                <FontAwesomeIcon icon={faLink} className="text-blue-700 font-bold"/>
                    <span className="font-bold">Seelinks</span></Link>
                <nav className="flex items-center gap-4 text-slate-500 text-sm">
                    <Link href={"/about"}>About</Link>
                    <Link href={"/pricing"}>Pricing</Link>
                    <Link href={"/contact"}>Contact</Link>
                </nav>
            </div>
            <div className="flex gap-6">
                <nav className="flex items-center gap-4 text-slate-500 text-sm">
                {!!session && (
                    <>
                        <Link href={"/dashboard"}>
                            Dashboard
                        </Link>
                        <LogoutButton />
                    </>
                )}
                {!session && (
                    <>
                        <Link href={"/login"}>Login</Link>
                        <Link href={"/signup"}>Signup</Link>
                    </>
                )}
                </nav> 
            </div>
        </div>
        </header>
    );
}