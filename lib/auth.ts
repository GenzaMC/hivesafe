import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null

        const users = [
          { id: "1", username: "ejer", password: "1234", name: "Server Ejer", role: "ejer" },
          { id: "2", username: "admin", password: "1234", name: "Admin User", role: "admin" },
          { id: "3", username: "mod", password: "1234", name: "Moderator", role: "moderator" },
          { id: "4", username: "helper", password: "1234", name: "Helper", role: "helper" },
        ]

        const user = users.find(
          (u) =>
            u.username === credentials.username &&
            u.password === credentials.password
        )

        if (!user) return null

        return {
          id: user.id,
          name: user.name,
          role: user.role,
        }
      },
    }),
  ],

  session: { strategy: "jwt" },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as any).role
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string
      }
      return session
    },
  },
}