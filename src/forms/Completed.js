

import { useRef } from "react";
import { Form } from '@unform/web'
import { useFormData } from "src/context";
import * as up from 'yup'
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Completed({formStep, nextFormStep, increase}) {
    const {setFormValues} = useFormData();
    const formRef = useRef();

    const scores = [1,2,3,4]

    async function handleSubmit(data) {
        try {
            formRef.current.setErrors({});

            setFormValues(data);
            nextFormStep();
            
        } catch (error) {
            const errors = {};

            if(error) {
                formRef.current.setErrors(error)
            }
        }
    }

    return (
        <div className={formStep === 4 ? 'p-10 min-h-screen': 'hidden'}>
            <Link href='#calender'>
            <div className='text-3xl text-gray-50 pb-5'>Thanks for completing the partnership questionaire</div>
                <div className='py-4 px-8 space-y-4 rounded-md max-w-xl mx-auto'>
                    <CheckCircleIcon className='w-24 h-24 mx-auto flex-shrink-0 text-lime-500' />
                    <h2 className='text-white text-1xl font-semibold flex flex-col items-center space-x-1 w-[100%]'>
                        Please schedule a free consoltation here 
                    </h2>
                    
                </div>
            </Link>
        </div>
    )
}


