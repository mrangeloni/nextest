import React, { useEffect } from 'react';
import Header from '@/components/altari/Header';
import Hero from '@/components/altari/Hero';
import TrustLogos from '@/components/altari/TrustLogos';
import CustomerStories from '@/components/altari/CustomerStories';
import MetricsStrip from '@/components/altari/MetricsStrip';
import AgenticServices from '@/components/altari/AgenticServices';
import Platforms from '@/components/altari/Platforms';
import Benefits from '@/components/altari/Benefits';
import AutomationDemo from '@/components/altari/AutomationDemo';
import Integrations from '@/components/altari/Integrations';
import HowItWorks from '@/components/altari/HowItWorks';
import WhyAltari from '@/components/altari/WhyAltari';
import Team from '@/components/altari/Team';
import Booking from '@/components/altari/Booking';
import FeaturesComparison from '@/components/altari/FeaturesComparison';
import FAQ from '@/components/altari/FAQ';
import Footer from '@/components/altari/Footer';

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <TrustLogos />
        <Benefits />
        <MetricsStrip />
        <AgenticServices />
        <Platforms />
        <AutomationDemo />
        <CustomerStories />
        <Integrations />
        <HowItWorks />
        <WhyAltari />
        <Team />
        <Booking />
        <FeaturesComparison />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}