import { Skeleton } from "@/components/ui/skeleton"

type Props = {}

function ShadowSkeleton({ }: Props) {
    return (
        <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full bg-paper animate-shadowpulse" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-paper animate-shadowpulse" />
                <Skeleton className="h-4 w-[200px]  bg-paper animate-shadowpulse" />
            </div>
        </div>

    )
}

export default ShadowSkeleton