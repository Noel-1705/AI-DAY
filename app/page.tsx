import Hero from "@/components/Hero"
import About from "@/components/About"
import Events from "@/components/Events"
import GamesAndActivities from "@/components/GamesAndActivities"
import Speakers from "@/components/Speakers"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Hero />
      <About />
      <Events />
      <GamesAndActivities />
      <Speakers />
      <Contact />
      <Footer />
    </main>
  )
}

