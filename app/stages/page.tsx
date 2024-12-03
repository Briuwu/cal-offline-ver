import { AllStages } from "./components/all-stages";
import { AudioPlayer } from "@/components/audio-player";

const StagesPage = async () => {
  return (
    <main>
      <AudioPlayer audioId={2} />
      <h1 className="x`font-bold my-5 text-center uppercase text-red-500 md:text-3xl">
        All Stages are unlocked for testing purposes. Please select a stage to
        play.
      </h1>
      <AllStages />
    </main>
  );
};
export default StagesPage;
