import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import ForAssociations from '@/components/ForAssociations'
import DownloadCTA from '@/components/DownloadCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <ForAssociations />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  )
}
