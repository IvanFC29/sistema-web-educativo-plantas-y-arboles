import { useState } from "react";
import { Step1TipoPlanta } from "./pasos/Step1TipoPlanta";
import { Step2Especie } from "./pasos/Step2Especie";
import { Step3Cantidad } from "./pasos/Step3Cantidad";
import { Step4EdadAltura } from "./pasos/Step4EdadAltura";
import { Step5Resultado } from "./pasos/Step5Resultado";

export function Wizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const updateFormData = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      {step === 1 && <Step1TipoPlanta siguiente={nextStep} datos={updateFormData} />}
      {step === 2 && <Step2Especie siguiente={nextStep} atras={prevStep} datos={updateFormData} />}
      {step === 3 && <Step3Cantidad siguiente={nextStep} atras={prevStep} datos={updateFormData} />}
      {step === 4 && <Step4EdadAltura siguiente={nextStep} atras={prevStep} datos={updateFormData} />}
      {step === 5 && <Step5Resultado atras={prevStep} datos={updateFormData}/>}
    </div>
  );
}
