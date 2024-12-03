import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <main className="p-4">
      <div className="mb-5">
        <Skeleton className="mb-2 h-8 w-32" />
        <Skeleton className="h-4 w-full max-w-md" />
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex flex-col gap-1 border p-2 shadow">
            <div className="h-64 self-center justify-self-end">
              <Skeleton className="h-full w-44 p-4" />
            </div>
            <div className="space-y-1">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="mt-2 h-10 w-full" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
export default Loading;
