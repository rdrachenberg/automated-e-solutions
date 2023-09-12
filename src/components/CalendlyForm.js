import { InlineWidget } from "react-calendly";

const CalendlyForm = () => {
    return (
        <div className='h-screen' id='stepper'>
            <InlineWidget url='https://calendly.com/d/2wx-w4h-d6y' style={{height: '900px'}}/>
        </div>
    )
}

export default CalendlyForm;
