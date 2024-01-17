import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button"

export default async function SettingsPage() {
  const session = await auth()

  return (
    <div>
      <h1>{JSON.stringify(session)}</h1>
      <form action={
        async () => {
          'use server'
          await signOut()
        }
      }>
        <Button variant={"secondary"} type="submit">
        Sign out
        </Button>
      </form>
      
    </div>
  )
}