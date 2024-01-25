import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Navbar({ isHome }){
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Image src="/favicon.ico" width={40} height={100} className="h-8 mr-3" alt="Logo" />
                {isHome ? <a href="/new" className="text-xl font-semibold tracking-tight text-gray-800 dark:text-white">New Post</a> : <a href="/" className="text-xl font-semibold tracking-tight text-gray-800 dark:text-white">Home</a>}
                <UserButton afterSignOutUrl="/"/>
            </div>
        </nav>
    )
}