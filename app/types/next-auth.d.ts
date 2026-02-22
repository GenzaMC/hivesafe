import NextAuth, { DefaultSession } from "next-auth"
import { DefaultJWT } from "next-auth/jwt"

/*
  🐝 HiveSafe NextAuth Type Extensions
  Fully synced with Discord OAuth system
*/

declare module "next-auth" {
  interface Session {
    user: {
      id: string                // Discord ID
      username: string          // Discord username
      globalName?: string | null
      discriminator?: string | null
      image?: string | null
      role?: string
    } & DefaultSession["user"]
  }

  interface User {
    id: string
    username: string
    globalName?: string | null
    discriminator?: string | null
    image?: string | null
    role?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    discordId?: string
    username?: string
    globalName?: string | null
    discriminator?: string | null
    avatar?: string | null
    role?: string
  }
}