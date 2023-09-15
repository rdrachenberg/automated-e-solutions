import { Inter } from 'next/font/google';
import Footer from './Footer';
import Header from './Header';
import Meta from "./Meta"
import { NextSeo } from 'next-seo'
import { NEXT_SEO_DEFAULT } from "../../next-seo-config"

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export default function AppLayout({ children }) {  
    return (
        <div className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
            <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={false}/>
            <Meta />
            <Header />
            <main className='flex-grow bg-[#f7f7f7]'>{children}</main>
            <Footer />
        </div>
    )
}