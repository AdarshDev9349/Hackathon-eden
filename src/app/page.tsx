export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md mx-auto text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Eden Hackathon
        </h1>
        <p className="text-gray-600 mb-6">
          This is your awesome Next.js app deployed on Cloudflare Pages!
        </p>
        <div className="space-y-2">
          <a 
            href="/about" 
            className="block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
          >
            Go to About Page
          </a>
          <a 
            href="/contact" 
            className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
          >
            Go to Contact Page
          </a>
          <a 
            href="/blog" 
            className="block bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition-colors"
          >
            Go to Blog Page
          </a>
        </div>
      </div>
    </div>
  )
}