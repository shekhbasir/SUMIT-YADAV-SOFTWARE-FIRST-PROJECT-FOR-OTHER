import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import MunicipalityStats from "../components/home/MunicipalityStats";
import QuickLinks from "../components/home/QuickLinks";
import Journey from "../components/home/Journey";
import Priorities from "../components/home/Priorities";
import DevelopmentPlans from "../components/home/DevelopmentPlans";
import Goals from "../components/home/Goals";
import NewsSection from "../components/home/NewsSection";
import MediaSection from "../components/home/MediaSection";
import Gallery from "../components/home/Gallery";
import PublicVoice from "../components/home/PublicVoice";
import JoinMovement from "../components/home/JoinMovement";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#03120b] text-white">
      <Navbar />

      <main>
        <Hero />
        <MunicipalityStats />
        <QuickLinks />
        <Journey />
        <Priorities />
        <DevelopmentPlans />
        <Goals />
        <NewsSection />
        <MediaSection />
        <Gallery />
        <PublicVoice />
        <JoinMovement />
      </main>

      <Footer />
    </div>
  );
}
