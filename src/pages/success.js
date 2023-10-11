import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import { useRouter } from 'next/router';

export default function SuccessPage() {
    const router = useRouter();
    const email = 'placeholder@gmail.com'
    const error = ''
    const data = ''

    return (
        <div className='container xl:max-w-screen-xl mx-auto py-12 px-6 text-center'>
            <Link href={'/blog-post'}>
                <div className='py-4 px-8 space-y-4 rounded-md max-w-lg mx-auto'>
                    <CheckCircleIcon className='w-24 h-24 mx-auto flex-shrink-0 text-lime-500' />
                    <h3 className='text-4xl font-semibold flex flex-col items-center space-x-1'>Successfully saved blog post!</h3>
                    <p className='text-3xl'>Post another one here</p>
                </div>
            </Link>
        </div>
    )
}