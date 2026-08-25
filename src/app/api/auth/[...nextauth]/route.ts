import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { handlers } from "@/lib/auth";

export const { GET, POST } = handlers;

// export const authOptions = {
//   providers: [
//     GithubProvider({
//       clientId: process.env.AUTH_GITHUB_ID,
//       clientSecret: process.env.AUTH_GITHUB_SECRET,
//     }),
//     GoogleProvider({
//       clientId: process.env.AUTH_GOOGLE_ID,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET,
//     }),
//   ],
// };

// export default NextAuth(authOptions);
