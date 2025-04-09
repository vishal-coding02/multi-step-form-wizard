import Step1 from "./Step1";
import Step2 from "./Step2";
import { useState } from "react";
import Step3 from "./Step3";

function Wizard() {
    const [step, setStep] = useState(1);

    function nextPage() {
        setStep(step + 1);
    }
    function previousPage() {
        setStep(step - 1);
    }

    return (
        <div>
            {step === 1 && <Step1 nextPage={nextPage} />}
            {step === 2 && <Step2 nextPage={nextPage} previousPage={previousPage} />}
            {step === 3 && <Step3 previousPage={previousPage} />}
        </div>
    );
}

export default Wizard;
