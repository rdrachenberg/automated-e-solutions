import Link from "next/link"
import Logo from "./Logo"
import { CalendarDaysIcon, PresentationChartBarIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'

export default function Header() {

    return (
        <header className='sticky top-0 bg-white z-10 shadow'> 
            <div className='container mx-auto p-6 flex justify-between'>
                <Logo />
                <Link href='/#faq' className='flex items-center space-x-1 text-gray-700 hover:text-red-500'>
                    <div className='relative'>
                        <QuestionMarkCircleIcon className='w-7 h-7 flex-shrink-0' />
                    </div>
                </Link>
                <Link href='/#qualify' className='flex items-center space-x-1 text-gray-700 hover:text-orange-300'>
                    <div className='relative'>
                        
                        <PresentationChartBarIcon className='w-7 h-7 flex-shrink-0' />
                    </div>
                </Link>
                <Link href='/#calender' className='flex items-center space-x-1 text-gray-700 hover:text-green-600'>
                    <div className='relative'>
                        <CalendarDaysIcon className='w-7 h-7 flex-shrink-0' />
                    </div>
                </Link>
            </div>
        </header>
    )
}

