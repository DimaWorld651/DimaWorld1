import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import ServerStatus from '@/components/ServerStatus';
import Modes from '@/components/Modes';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Roadmap from '@/components/Roadmap';
import Team from '@/components/Team';
import Rules from '@/components/Rules';
import Community from '@/components/Community';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-obsidian-950 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ServerStatus />
        <Modes />
        <Features />
        <Gallery />
        <Roadmap />
        <Team />
        <Rules />
        <Community />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
