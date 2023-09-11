import { useRef } from "react";
import { Form } from '@unform/web'
import { useFormData } from "src/context";
import * as up from 'yup'

export default function Timelines({formStep, nextFormStep, increase}) {
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
        <div className={formStep === 2 ? 'p-10': 'hidden'}>
            <div className='text-3xl text-gray-50 pb-5'>If given the opportunity to work with us, when would you be ready to own this income generating Amazon business? </div>
            <div className='text-xl text-gray-50'>(WE only work with a select few partners per month, so need to allocate our resources and timeline to onboard you.)</div>
            <div className='flex' style={{padding: '20px', justifyContent: 'space-evenly', flexDirection: 'row', flexWrap: 'wrap'}}>
                <div  className='row'>
                    <div className=' border-8 rounded-xl bg-white hover:bg-green-500' style={{width: '100%', margin:'20px',padding: '20px',  alignSelf: 'flex-start'}} id='levelOne'>
                        Immediately
                    </div>
                    <div className=' border-8 rounded-xl bg-white' style={{width: '100%', margin:'20px',padding: '20px',  alignSelf: 'flex-start'}} id='levelTwo'>
                        1 week
                    </div>
                </div>
                <div  className='row'>
                    <div className=' border-8 rounded-xl bg-white' style={{width: '100%', margin:'20px',padding: '20px',  alignSelf: 'flex-start'}} id='levelThree'>
                        2 weeks
                    </div>
                    <div className=' border-8 rounded-xl bg-white' style={{width: '100%', margin:'20px',padding: '20px',  alignSelf: 'flex-start'}} id='levelFour'>
                        1 month+
                    </div>
                </div>
            </div>
        </div>
    )
}