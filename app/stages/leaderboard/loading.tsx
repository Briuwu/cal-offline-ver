import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function Loading() {
  return (
    <div className="py-28">
      <div className="grid gap-5 md:grid-cols-3">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={cn(
              "relative rounded-md border p-2 text-center",
              index === 0 && "border-yellow-300 md:order-2 md:-translate-y-10",
              index === 1 && "border-green-300 md:order-1",
              index === 2 && "border-pink-300 md:order-3",
            )}
          >
            <Skeleton className="absolute left-2 h-7 w-7 rounded-full" />
            {index === 0 && (
              <Skeleton className="absolute -top-16 right-1/2 h-20 w-20 translate-x-1/2" />
            )}
            <Skeleton className="mx-auto h-12 w-12 rounded-full" />
            <div className="mt-2 border-t pt-2">
              <Skeleton className="mx-auto mb-1 h-4 w-24" />
              <Skeleton className="mx-auto h-3 w-16" />
            </div>
            <Skeleton className="mx-auto mt-2 h-24 w-16" />
          </div>
        ))}
      </div>
      <div className="mt-20 space-y-10">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="relative rounded-md border p-2 text-center"
          >
            <Skeleton className="absolute left-2 h-7 w-7 rounded-full" />
            <Skeleton className="mx-auto h-12 w-12 rounded-full" />
            <div className="mt-2 border-t pt-2">
              <Skeleton className="mx-auto mb-1 h-4 w-24" />
              <Skeleton className="mx-auto h-3 w-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
