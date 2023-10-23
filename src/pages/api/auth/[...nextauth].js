import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../../lib/mongodb';
import EmailProvider  from 'next-auth/providers/email';
import { sendVerificationRequest } from './signInEmail';

export const authOptions = {
    providers: [
       EmailProvider({
        server: {
            host: process.env.EMAIL_SERVER_HOST,
            port: process.env.EMAIL_SERVER_PORT,
            auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD
            },
        },
        from: process.env.EMAIL_FROM,
        sendVerificationRequest({identifier, url, provider}){
            CustomVerificationRequest({identifier, url, provider})
        }
       }),
    ],
    adapter: MongoDBAdapter(clientPromise),
    theme: {
        colorScheme: 'dark',
    },
    callbacks: {
        async jwt({ token }) {
            token.userRole = admin
            console.log(token)
            return token;
        }
    }
}
export default NextAuth(authOptions)