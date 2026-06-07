import Link from 'next/link'

export const metadata = {
  title: 'DIVINE CONQUERORS | TIA STUDIO',
  description: 'An epic series about war, forgiveness, and becoming.',
}

export default function DivineConquerorsPage() {
  return (
    <main className="min-h-screen bg-deep-indigo text-white selection:bg-gold/30">
      <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col-reverse md:flex-row gap-16">

        {/* Left Column: Empty / Visuals later */}
        <div className="w-full md:w-1/2 pt-12 md:pt-32">
          {/* Visuals will go here */}
          <div className="aspect-[2/3] max-w-md mx-auto bg-blood-red/10 border border-gold/20 flex items-center justify-center text-gray-500 shadow-2xl shadow-blood-red/5">
            Key Art Placeholder
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="w-full md:w-1/2 text-right">
          <div className="flex justify-end mb-12">
            <Link href="/" className="inline-block text-gray-400 hover:text-gold transition-colors">
              Back to Studio →
            </Link>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            DIVINE CONQUERORS
          </h1>

          <p className="text-2xl font-crimson italic text-gray-300 mb-8 border-r-4 border-blood-red pr-4">
            An epic series about war, forgiveness, and becoming.
          </p>

          <div className="mb-12 space-y-4 text-right">
            <p className="text-gray-400"><strong className="text-gray-200">Type:</strong> Epic Series (5 Seasons + 2 Films)</p>
            <p className="text-gray-400"><strong className="text-gray-200">Genre:</strong> Fantasy / Drama</p>
            <p className="text-gray-400"><strong className="text-gray-200">Years in Development:</strong> 3+</p>
            <p className="text-gray-400"><strong className="text-gray-200">Created by:</strong> adi / TIA STUDIO</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-playfair mb-6 text-gold">The Story</h2>
            <p className="text-gray-300 leading-relaxed font-crimson text-lg">
              What survives the war must learn forgiveness. This epic spans continents, generations, and ideals as those caught in the tide of conflict discover that the hardest battles are the ones fought within. (Full synopsis withheld to preserve the unfolding mystery.)
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-playfair mb-6 text-gold">Characters</h2>
            <ul className="space-y-4 font-crimson text-lg text-gray-300">
              <li><strong className="text-white">The General</strong> — Haunted by victories.</li>
              <li><strong className="text-white">The Scholar</strong> — Seeking truth in ashes.</li>
              <li><strong className="text-white">The Exile</strong> — Forging a new destiny.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-playfair mb-6 text-gold">Timeline</h2>
            <div className="inline-block text-left bg-black/40 p-6 border border-gold/20 rounded-sm">
              <p className="text-gray-300 mb-2"><span className="text-gold mr-2">✓</span> Worldbuilding (Completed)</p>
              <p className="text-gray-300 mb-2"><span className="text-gold mr-2">✓</span> Scripts Locked</p>
              <p className="text-gray-300"><span className="text-blood-red mr-2">▶</span> Pre-Production (Current)</p>
            </div>
          </div>

        </div>

      </div>
    </main>
  )
}
