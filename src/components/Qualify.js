/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from 'next/image';

const Qualify = () => {
    return (
        <div className='container bg-slate-200 min-h-screen'>
            
            <div className='text-blue-600 text-2xl pt-8 text-bold mx-auto text-decoration-line: underline'>Let's see if you qualify to be our Automated FBA Wholesale Store Partner</div>
            <div className="grid grid-cols-1 gap-1 pt-20">
                <div className='grid-cols-1'>
                    <Link href='#calender'>
                        <button className='bg-green-600 rounded-lg shadow-xl p-3 border-solid-8 border-red-500 text-white'>Start here</button>
                    </Link>
                </div>
            </div>
            <div className='mt-20'>
                <Image width={500} height={500} src='/misc/point-up.jpg' alt="e-commerce girl pointing up" className='rounded-lg mx-auto shadow-xl'/>
            </div>
        </div>
    )
}

export default Qualify;