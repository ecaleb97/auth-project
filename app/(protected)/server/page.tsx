import { currentUser } from "@/lib/auth"
import { UserInfo } from "@/app/(protected)/settings/_components/user-info"

export default async function ServerPage () {
  const user = await currentUser()

  return (
    <UserInfo user={user} label="💻 Server component" />
  )
}