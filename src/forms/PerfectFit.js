import { useRef } from "react";
import { Form } from '@unform/web'
import { useFormData } from "src/context";
import * as up from 'yup'

export default function PerfectFit({formStep, nextFormStep, increase}) {
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
        <div className={formStep === 3 ? 'p-10': 'hidden'}>
            <div className='text-3xl text-gray-50 pb-5'>You may be a good fit for our wholesale store partnership. It takes at least $35,000 in upfront cost and ongoing funding for inventory purchases.</div>
            <div className='text-2xl text-gray-50'> These funds are deployed to build your store, get it approved by Amazon to sell premium household named brands (Phillips, Vizio, Keurig, etc), and fund your first round of inventory.</div>
            <div className='text-3xl text-gray-50 pb-5'>Do you have the required $35,000 upfront cost?</div>
            <div className='flex' style={{padding: '20px', justifyContent: 'space-evenly', flexDirection: 'row', flexWrap: 'wrap'}}>
                <div  className='row'>
                    <div className=' border-8 rounded-xl bg-white hover:bg-green-500' style={{width: '100%', margin:'20px',padding: '20px',  alignSelf: 'flex-start'}} id='levelOne'>
                        Yes
                    </div>
                    
                </div>
                <div  className='row'>
                    <div className=' border-8 rounded-xl bg-white' style={{width: '100%', margin:'20px',padding: '20px',  alignSelf: 'flex-start'}} id='levelThreeNo'>
                        No
                    </div>
                    
                </div>
            </div>
        </div>
    )
}