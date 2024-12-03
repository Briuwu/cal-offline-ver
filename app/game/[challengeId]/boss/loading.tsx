import { LoaderIcon } from "lucide-react";

function Loading() {
  return (
    <div className="grid min-h-screen place-content-center">
      <LoaderIcon size="64" className="animate-spin" />
    </div>
  );
}
export default Loading;
