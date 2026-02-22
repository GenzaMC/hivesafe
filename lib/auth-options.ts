import { type NextAuthOptions } from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "identify email",
        },
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const discordProfile = profile as any

        token.discordId = discordProfile.id
        token.username = discordProfile.username
        token.globalName = discordProfile.global_name ?? null
        token.discriminator = discordProfile.discriminator ?? null

        // 🔥 FIX: Support for animated Discord avatars
        if (discordProfile.avatar) {
          const isAnimated = discordProfile.avatar.startsWith("a_")
          const extension = isAnimated ? "gif" : "png"

          token.avatar = `https://cdn.discordapp.com/avatars/${discordProfile.id}/${discordProfile.avatar}.${extension}`
        } else {
          token.avatar = null
        }
      }

      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.discordId as string
        session.user.username = token.username as string
        session.user.globalName = token.globalName as string | null
        session.user.discriminator = token.discriminator as string | null
        session.user.image = token.avatar as string | null
      }

      return session
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
}