import React, {useState} from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'


export default function BlogCard({post, index}) {
    const [open, setOpen] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setOpen(!open);
        console.log('Clicked')
    }
    return (
        <div className='p-6 bg-[#314860] rounded-xl max-w-[90%] min-w-[90%] mx-auto border-4 border-[#314860] m-1 shadow-2xl text-slate-200' onClick={handleClick}>
            <div className='flex flex-row justify-between' >
                <div className='font-semibold text-2xl min-w-[50%]'>{post.title}</div>
                {open ? <ChevronUpIcon className='max-h-8 text-green-400' /> : <ChevronDownIcon className='max-h-8' />}
            </div>
            {!open ? 
                <></>
                : 
                <div className='mt-4 flex items-center justify-between space-x-2'>
                    <div>
                        <p className='font-semibold text-md'>{post.content}</p>
                    </div>
                </div>
            }
            
        </div>
    )
}