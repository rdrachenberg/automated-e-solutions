import { useState } from 'react';
import Stepper from 'react-stepper-horizontal';

import { Completed, MonthlyGoals, PerfectFit, Timelines } from 'src/forms';
const QualifyStepper = () => {
    const [step, setStep] = useState(0);

    const increase = () => {
        if(step < 3) {
            let currValue = step + 1
            setStep(currValue);
        }
    }
    const decrease = () => {
        if(step > 0) {
            let currValue = step - 1;
            setStep(currValue);
        }
    }
    return (
        <div className='container h-screen h-min-full'>
            <div className='bg-slate-600 rounded-xl p-[12px] text-center' >
                <Stepper className='pt-0' style={{color: 'white'}} activeTitleColor='white' steps={ [{title: 'Goals'}, {title: 'How soon?'}, {title: 'Good fit?'}, {title: 'Completed'}] } activeStep={ step } />
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
                <MonthlyGoals formStep={step + 1} nextStep={increase} className='text-gray-50'/>
                <Timelines formStep={step + 1} nextStep={increase} className='text-gray-50'/>
                <PerfectFit formStep={step + 1} nextStep={increase} className='text-gray-50'/>
                <Completed formStep={step + 1} nextStep={increase} className='text-gray-50'/>
            </div>
        </div>
    )
}

export default QualifyStepper