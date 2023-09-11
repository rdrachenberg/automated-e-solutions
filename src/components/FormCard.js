export default function FormCard({children, currentStep, prevFormStep}) {

    return (
        <div>
            {currentStep < 3 && (
                <>
                    {currentStep >= 0 && (
                        <button onClick={prevFormStep}>back</button>
                    )}

                    <span>Step {currentStep + 1}</span>
                </>
            )}
            {children}
        </div>
    )

}