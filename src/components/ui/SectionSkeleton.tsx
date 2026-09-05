export function SectionSkeleton({ title }: { title?: string }) {
  return (
    <div className="w-full py-8 space-y-6 animate-pulse">
      {/* Section Title Skeleton */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-6 w-36 bg-white/10 rounded-md" />
          <div className="h-3 w-48 bg-white/5 rounded-md" />
        </div>
        <div className="h-7 w-20 bg-white/8 rounded-full" />
      </div>

      {/* Grid Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-40 w-full bg-[#0a0a0d] border border-white/8 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-white/10 rounded-xl shrink-0" />
            <div className="space-y-1.5 flex-1">
              <div className="h-4 w-3/4 bg-white/10 rounded-md" />
              <div className="h-3 w-1/2 bg-white/5 rounded-md" />
            </div>
          </div>
          <div className="h-3 w-full bg-white/5 rounded-md mt-4" />
          <div className="h-3 w-5/6 bg-white/5 rounded-md" />
          <div className="flex gap-2 pt-2">
            <div className="h-5 w-14 bg-white/8 rounded-md" />
            <div className="h-5 w-14 bg-white/8 rounded-md" />
          </div>
        </div>

        <div className="h-40 w-full bg-[#0a0a0d] border border-white/8 rounded-2xl p-5 space-y-3 hidden md:block">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-white/10 rounded-xl shrink-0" />
            <div className="space-y-1.5 flex-1">
              <div className="h-4 w-3/4 bg-white/10 rounded-md" />
              <div className="h-3 w-1/2 bg-white/5 rounded-md" />
            </div>
          </div>
          <div className="h-3 w-full bg-white/5 rounded-md mt-4" />
          <div className="h-3 w-5/6 bg-white/5 rounded-md" />
          <div className="flex gap-2 pt-2">
            <div className="h-5 w-14 bg-white/8 rounded-md" />
            <div className="h-5 w-14 bg-white/8 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
