import Link from 'next/link'

export const metadata = {
  title: 'THE LAST TEAR | TIA STUDIO',
  description: 'A film about the things grief leaves behind.',
}

export default function TheLastTearPage() {
  return (
    <main className="min-h-screen bg-dust-brown text-white selection:bg-purple-fade/30">
      <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row gap-16">

        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2">
          <Link href="/" className="inline-block mb-12 text-gray-400 hover:text-white transition-colors">
            ← Back to Studio
          </Link>

          <h1 className="text-6xl md:text-8xl font-bold font-playfair mb-6 text-white drop-shadow-md">
            THE LAST TEAR
          </h1>

          <p className="text-2xl font-lora italic text-gray-300 mb-8 border-l-4 border-purple-fade pl-4">
            A film about the things grief leaves behind.
          </p>

          <div className="mb-12 space-y-4">
            <p className="text-gray-400"><strong className="text-gray-200">Format:</strong> Animated Short Film</p>
            <p className="text-gray-400"><strong className="text-gray-200">Genre:</strong> Tragedy / Drama</p>
            <p className="text-gray-400"><strong className="text-gray-200">Duration:</strong> 13-15 minutes</p>
            <p className="text-gray-400"><strong className="text-gray-200">Created by:</strong> adi / TIA STUDIO</p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-playfair mb-6 text-white">Production Pulse</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2 text-gray-300">
                  <span>Storyboarding</span>
                  <span>70%</span>
                </div>
                <div className="w-full bg-rust-red/30 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-fade h-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 text-gray-300">
                  <span>Animation</span>
                  <span className="italic text-purple-fade">In Progress</span>
                </div>
                <div className="w-full bg-rust-red/30 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-fade h-full w-1/4 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visuals / Galleries */}
        <div className="w-full md:w-1/2 pt-12 md:pt-32">
          <h2 className="text-2xl font-playfair mb-6 text-white text-right">Storyboards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Placeholders for gallery */}
            <div className="aspect-video bg-rust-red/20 border border-rust-red/50 flex items-center justify-center text-gray-500">Frame 1</div>
            <div className="aspect-video bg-rust-red/20 border border-rust-red/50 flex items-center justify-center text-gray-500">Frame 2</div>
            <div className="aspect-video bg-rust-red/20 border border-rust-red/50 flex items-center justify-center text-gray-500">Frame 3</div>
            <div className="aspect-video bg-rust-red/20 border border-rust-red/50 flex items-center justify-center text-gray-500">Frame 4</div>
          </div>
        </div>

      </div>
    </main>
  )
}
