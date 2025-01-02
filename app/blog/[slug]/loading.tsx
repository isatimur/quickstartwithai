export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="animate-pulse space-y-8">
                <div className="h-12 bg-gray-200 rounded w-3/4 mx-auto"></div>
                <div className="flex items-center justify-center space-x-4">
                    <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-24"></div>
                        <div className="h-4 bg-gray-200 rounded w-32"></div>
                    </div>
                </div>
                <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-4 bg-gray-200 rounded"></div>
                    ))}
                </div>
            </div>
        </div>
    )
}