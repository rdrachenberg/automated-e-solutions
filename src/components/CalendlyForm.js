import { InlineWidget } from "react-calendly";

const CalendlyForm = () => {
    return (
        <div id='stepper'>
            <InlineWidget url='https://calendly.com/d/2wx-w4h-d6y' styles={{height: '1000px'}}/>
        </div>
    )
}

export default CalendlyForm;
