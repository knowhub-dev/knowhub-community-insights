import HeroSection from "@/components/HeroSection";
import CommunityStats from "@/components/CommunityStats";
import CodeRunnerShowcase from "@/components/CodeRunnerShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CommunityStats />
      <CodeRunnerShowcase />
      <FeaturesSection />
      <CTASection />
    </div>
  );
};

export default Index;
