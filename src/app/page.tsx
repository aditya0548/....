import HeroSection from '@/components/sections/HeroSection'
import ProjectSection from '@/components/sections/ProjectSection'
import AboutSection from '@/components/sections/AboutSection'
import GoodbyeSection from '@/components/sections/GoodbyeSection'

export default function Home() {
  return (
    <main>
      <HeroSection />

      <ProjectSection
        project="the-last-tear"
        title="THE LAST TEAR"
        subtitle="A short film. Dark. Tragic. In motion."
        description="Grief does not leave. It changes shape."
        status="Storyboarding: 70% | Animation: In Progress"
        ctaLabel="DISCOVER"
        ctaLink="/projects/the-last-tear"
        colors={{
          bg: '#5a4a3a',
          text: '#f5f5f5',
          accent: '#a78bca',
        }}
        side="left"
      />

      <ProjectSection
        project="divine-conquerors"
        title="DIVINE CONQUERORS"
        subtitle="An epic. Years in the making. Still unfolding."
        description="What survives the war must learn forgiveness."
        status="Scripts Locked | Five Seasons + Two Films | 2028"
        ctaLabel="COMING SOON"
        colors={{
          bg: '#1a0033',
          text: '#f5f5f5',
          accent: '#d4af37',
        }}
        side="right"
      />

      <AboutSection />
      <GoodbyeSection />
    </main>
  )
}
