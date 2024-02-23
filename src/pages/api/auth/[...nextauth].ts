import NextAuth from 'next-auth';
import type {NextAuthOptions} from 'next-auth/core/types';
import DiscordProvider from 'next-auth/providers/discord';

export const authOptions: NextAuthOptions = {
    providers: [
        // TODO: Add support for an email provider
        // https://next-auth.js.org/v3/configuration/providers#email-provider
        // Providers.Email({
        //   server: process.env.EMAIL_SERVER,
        //   from: process.env.EMAIL_FROM,
        //   // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
        // }),
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET
        })
    ]
}

export default NextAuth(authOptions)