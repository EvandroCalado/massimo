import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthOptions, User, getServerSession } from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import prisma from './connectdb';

declare module 'next-auth' {
  interface Session {
    user: User & {
      isAdmin: boolean;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    isAdmin: boolean;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.isAdmin = token.isAdmin;
      }

      return session;
    },

    async jwt({ token }) {
      const userInDb = await prisma.user.findUnique({
        where: {
          email: token.email!,
        },
      });

      if (userInDb) {
        token.isAdmin = userInDb.isAdmin;
      }

      return token;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
