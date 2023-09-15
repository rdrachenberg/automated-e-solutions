import { StarIcon } from "@heroicons/react/24/solid"

export default function Rating() {
    return (
        <div className='flex items-center -ml-1'>
            {Array.from({length: 5}).map((_, index) => {
                return  (
                <StarIcon key={index} className='w-6 h-6 flex-shrink-0 text-yellow-400'/>
                )
            })}   
        </div>
    )
}