import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    // Invoke on successful signin
    async signIn({ profile }) {
      // 1. Connect to database
      // 2. Check if the user exists
      // 3. If not, then add user to database
      // 4. Return true to allow sign in
    },

    // Midifies the session object
    async session({ session }) {
      // 1. Get user from the database
      // 2. Assign the user id to the session
      // 3. Return session
    },
  },
};
