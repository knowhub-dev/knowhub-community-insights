import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CommunityStats from "@/components/CommunityStats";
import CodeRunnerShowcase from "@/components/CodeRunnerShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CommunityStats />
      <CodeRunnerShowcase />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
