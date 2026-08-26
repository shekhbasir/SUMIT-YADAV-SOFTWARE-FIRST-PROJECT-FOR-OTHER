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
        {/* =====================================================
            HOME
        ====================================================== */}
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        {/* =====================================================
            BISHRAMPUR DATA
        ====================================================== */}
        <section id="data" className="scroll-mt-24">
          <MunicipalityStats />
        </section>

        {/* =====================================================
            QUICK LINKS
            Not a navbar item, so it stays exactly where it was.
        ====================================================== */}
        <QuickLinks />

        {/* =====================================================
            ABOUT
        ====================================================== */}
        <section id="about" className="scroll-mt-24">
          <Journey />
        </section>

        {/* =====================================================
            SERVICES
        ====================================================== */}
        <section id="services" className="scroll-mt-24">
          <Priorities />
        </section>

        {/* =====================================================
            DEVELOPMENT
        ====================================================== */}
        <section id="development" className="scroll-mt-24">
          <DevelopmentPlans />
          <Goals />
        </section>

        {/* =====================================================
            NEWS
        ====================================================== */}
        <section id="news" className="scroll-mt-24">
          <NewsSection />
        </section>

        {/* =====================================================
            MEDIA
        ====================================================== */}
        <section id="media" className="scroll-mt-24">
          <MediaSection />
          <Gallery />
        </section>

        {/* =====================================================
            CONTACT
        ====================================================== */}
        <section id="contact" className="scroll-mt-24">
          <PublicVoice />
          <JoinMovement />
        </section>
      </main>

      <Footer />
    </div>
  );
}
