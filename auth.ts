import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";
import { prisma } from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.includes("/sign-in") ? `${baseUrl}/home` : url;
    },
    async signIn({ user }) {
      try {
        console.log(user)
        const existingUser = await prisma.users.findUnique({
          where: {
            email: user.email!,
          },
        });

        if (!existingUser) {
          await prisma.users.create({
            data: {
              email: user.email!,
              avatar: user.image!,
              username: user.name!
            },
          });
        }
        return true;
      } catch (error: any) {
        console.log("Signing In Error" + error.message);
        return false;
      }
    },
  },
  pages: {
    signOut: '/sign-in'
  }
});
