export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
      <div className="text-center">
        {/* Loading Animation */}
        <div className="relative mb-8">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Loading Quickstart GenAI
        </h2>
        <p className="text-gray-600 mb-8">
          Preparing your AI development journey...
        </p>

        {/* Progress Indicators */}
        <div className="space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          
          <div className="text-sm text-gray-500">
            Loading components and optimizing performance...
          </div>
        </div>
      </div>
    </div>
  )
}
