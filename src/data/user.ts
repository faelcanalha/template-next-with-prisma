import db from '@/services/db';
import { User } from '@prisma/client';

async function getUserById(id: string): Promise<User | null> {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch {
    return null;
  }
}

async function getUserByUsername(username: string): Promise<User | null> {
  try {
    const user = await db.user.findUnique({ where: { username } });
    return user;
  } catch {
    return null;
  }
}

async function getAllUsers(): Promise<User[] | null> {
  try {
    const users = await db.user.findMany();
    return users;
  } catch {
    return null;
  }
}
