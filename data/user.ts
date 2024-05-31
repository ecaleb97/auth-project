import { db } from '@/lib/db';

export async function getUserByEmail (email: string) {
  return db.user.findFirst({
    where: {
      email
    }
  })
}

export async function getUserById(id: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        id
      }
    })
    return user;
  } catch {
    return null
  }
}