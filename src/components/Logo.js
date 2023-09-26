import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href={'/'} className='flex items-center space-x-2'>
            <Image src='/logo.png' width={42} height={42} style={{borderRadius:'10px', border: '1px solid'}} alt="Automated Ecomm Investments logo" />
            <span className='hidden sm:inline-block font-extrabold text-3xl text-gray-700'>
                Automated Ecom Solutions
            </span>
            <span className='sm:hidden font-extrabold text-3xl text-gray-700'>
                AECS
            </span>
        </Link>
    )
}