import { InlineWidget } from "react-calendly";

const CalendlyForm = () => {
    return (
        <div id='stepper'>
            <InlineWidget url='https://calendly.com/d/2x6-dfk-s3z/30-minute-meeting' styles={{height: '1000px'}}/>
        </div>
    )
}

export default CalendlyForm;
