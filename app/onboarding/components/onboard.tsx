"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";

const steps = [
  {
    image: "/onboarding/1.png",
  },
  {
    image: "/onboarding/2.png",
  },
  {
    image: "/onboarding/3.png",
  },
  {
    image: "/onboarding/4.png",
  },
  {
    image: "/onboarding/5.png",
  },
  {
    image: "/onboarding/6.png",
  },
  {
    image: "/onboarding/7.png",
  },
  {
    image: "/onboarding/8.png",
  },
  {
    image: "/onboarding/9.png",
  },
  {
    image: "/onboarding/10.png",
  },
  {
    image: "/onboarding/11.png",
  },
];

export default function Onboard() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Disable button

  const handleNext = () => {
    if (!isButtonDisabled) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      if (currentStep === steps.length - 1) {
        router.push("/character-selection");
      }
      // Disable button temporarily after clicking
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false); // Re-enable button after 1 second
      }, 1000);
    }
  };

  const handlePrevious = () => {
    if (!isButtonDisabled) {
      setCurrentStep((prev) => Math.max(prev - 1, 0));
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false); // Re-enable button after 3 second
      }, 3000);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="text-foreground flex min-h-screen flex-col justify-between bg-[#1e1e1e]">
      <header className="p-4">
        <Progress value={progress} className="w-full" />
      </header>
      <main className="flex flex-grow items-center justify-center p-4">
        <div className="w-full max-w-5xl space-y-8 text-center">
          <img
            src={steps[currentStep].image}
            alt={`Step ${currentStep + 1}`}
            className="mx-auto object-contain"
          />
        </div>
      </main>
      <footer className="flex justify-between p-4">
        <Button
          onClick={handlePrevious}
          disabled={currentStep === 0 || isButtonDisabled} // Disable if at start or waiting for delay
          variant="outline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button
          className="bg-green-800"
          onClick={handleNext}
          disabled={isButtonDisabled} // Disable after click for a while
        >
          {currentStep === steps.length - 1 ? "Get Started" : "Next"}{" "}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </footer>
    </div>
  );
}
