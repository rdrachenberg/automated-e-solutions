import { useRef } from "react";
import { Form } from '@unform/web'
import { useFormData } from "src/context";

export default function MonthlyGoals({formStep, nextFormStep, increase}) {
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
        <div className={formStep === 1 ? 'p-10': 'hidden'}>
            <div className='text-3xl text-gray-50 pb-5'>What monthly income range below would best match your goals for your store to earn?</div>
            <div className='text-xl text-gray-50'>(Knowing your monthly goal helps us determine up-front cost & helps determine how much inventory you’ll need to sell to achieve your goal!)</div>
            <div className='flex' style={{padding: '20px', justifyContent: 'space-evenly', flexDirection: 'row', flexWrap: 'wrap'}}>
                <div  className='row'>
                    <div className=' border-8 rounded-xl bg-white hover:bg-green-500' style={{width: '100%', margin:'20px',padding: '20px',  alignSelf: 'flex-start'}} id='levelOne'>
                        $2,500
                    </div>
                    <div className=' border-8 rounded-xl bg-white' style={{width: '100%', margin:'20px',padding: '20px',  alignSelf: 'flex-start'}} id='levelTwo'>
                        $7,500
                    </div>
                </div>
                <div  className='row'>
                    <div className=' border-8 rounded-xl bg-white' style={{width: '100%', margin:'20px',padding: '20px',  alignSelf: 'flex-start'}} id='levelThree'>
                        $5,000
                    </div>
                    <div className=' border-8 rounded-xl bg-white' style={{width: '100%', margin:'20px',padding: '20px',  alignSelf: 'flex-start'}} id='levelFour'>
                        $10,000
                    </div>
                </div>
            </div>
        </div>
    )
}