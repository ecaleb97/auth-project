'use client'

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export function Social () {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button 
        variant="outline" 
        size="lg"
        className="w-full"
        onClick={() => console.log("Google")}
      >
        <FcGoogle className="size-5" />
      </Button>
      <Button 
        variant="outline" 
        size="lg"
        className="w-full"
        onClick={() => console.log("Github")}
      >
        <FaGithub className="size-5" />
      </Button>
    </div>
  )
}