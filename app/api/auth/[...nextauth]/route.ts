import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

let clientId = process.env.GOOGLE_CLIENT_ID;
let clientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error("Google Client ID and Secret must be defined");
}

export const authOptions = {
  providers: [
    GoogleProvider({
      //   clientId: process.env.GOOGLE_CLIENT_ID,
      //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      clientId,
      clientSecret,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
