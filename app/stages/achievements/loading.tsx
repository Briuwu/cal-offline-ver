import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div className="p-4">
      <Skeleton className="mb-6 h-8 w-48" />
      <div className="mt-6 space-y-6">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`flex items-center justify-between rounded-md border border-black p-4 ${
              index % 2 === 0 ? "bg-blue-100" : "bg-green-100"
            }`}
          >
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-full" />
              <div className="mt-2 flex items-center gap-5">
                <div className="flex items-center gap-1">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
            </div>
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Loading;
