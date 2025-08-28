import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProfileSkeleton() {
  return (
    <div className="bg-background p-6">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-6">
          {/* Banner Skeleton */}
          <div className="relative">
            <Skeleton className="h-28 w-full rounded-t-lg" />
            <div className="absolute top-[60px] left-8">
              <Skeleton className="h-24 w-24 rounded-full border-4 border-background" />
            </div>
            <div className="rounded-b-lg bg-card pt-20 pb-6 px-8">
              <div className="space-y-3">
                <Skeleton className="h-8 w-48 rounded" />
                <Skeleton className="h-4 w-64 rounded" />
              </div>
            </div>
          </div>

          {/* Cards Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <Skeleton className="h-64 w-full rounded-md" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Skeleton className="h-64 w-full rounded-md" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
