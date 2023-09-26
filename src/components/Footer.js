import Link from "next/link";
import { useState, useEffect } from "react";


export default function Footer() {
    const [dateYear, setDateYear] = useState(2022)

    useEffect(() => {
        const date =  new Date().getFullYear();
        setDateYear(date);
    }, [])

    return (
        <footer className='border-t border-gray-100 py-10 text-center'>
            <p className='text-sm text-gray-500'>
                @ {dateYear} Automated Ecom Investments, LLC dba/Automated Ecom Solutions All rights reserved 
            </p>
            <Link href={'/tos'}>
                <p className='text-sm text-gray-500'>
                    Terms of Service
                </p>
            </Link>
        </footer>
    )
}