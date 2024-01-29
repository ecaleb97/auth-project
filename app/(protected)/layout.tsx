import { Navbar } from "@/app/(protected)/settings/_components/navbar"

interface ProtectedLayoutProps {
  children: React.ReactNode
}

export default function ProtectedLayout ({ children }: ProtectedLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sky-200">
      <Navbar />
      {children}
    </div>
  )
}