import { login } from "@/services/api";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const user = await login(credentials);
        return {
          email: user.email,
          image: user.image,
          id: user.id.toString(),
          name: user.firstName + " " + user.lastName,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60,
  },
});

export { handler as GET, handler as POST };
