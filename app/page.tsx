'use client'

import { Button } from "@/components/ui/button"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { LoginButton } from "@/components/auth/login-button"
import Link from "next/link"
import { BackButton } from "@/components/auth/back-button"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <div className="space-y-6 text-center">
        <h1 
          className={cn("text-6xl font-semibold drop-shadow-md",
            `${poppins.className} antialiased`)}
        >
          Auth
        </h1>
        <p>A simple authentication service</p>
        <div>
          {/* <LoginButton>
            <Button variant={"secondary"} size={"lg"}>Sign in</Button>
          </LoginButton> */}
          <Button variant={"link"} className="bg-gray-200" asChild>
            <Link href="/auth/login">Sign up</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
