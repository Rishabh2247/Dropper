import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggler } from "./ThemeToggler"

function Header() {
  return (
   <header className="flex items-center justify-between " >
     <Link href="/" className="flex items-center p-2">
       <h1 className="font-bold text-xl">Dropper</h1>
     </Link>

     <div className="px-5 flex space-x-2 items-center">

      <ThemeToggler />

      <UserButton afterSignOutUrl="/" />

      <SignedOut>
        <SignInButton afterSignInUrl="/dashboard" mode="modal" />
      </SignedOut>
     </div>
   </header>
  )
}

export default Header
