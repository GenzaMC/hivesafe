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

      async authorize(credentials, _req) {
        if (!credentials) return null

        const users = [
          { id: "1", username: "ejer", password: "1234", role: "ejer" },
          { id: "2", username: "admin", password: "1234", role: "admin" },
          { id: "3", username: "mod", password: "1234", role: "moderator" },
          { id: "4", username: "helper", password: "1234", role: "helper" },
        ]

        const user = users.find(
          (u) =>
            u.username === credentials.username &&
            u.password === credentials.password
        )

        if (!user) return null

        return {
          id: user.id,
          username: user.username,
          role: user.role,
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role
        token.username = (user as any).username
      }
      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string
        session.user.username = token.username as string
        session.user.role = token.role as string
      }
      return session
    },
  },
}