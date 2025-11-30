import { useTypewriter } from "@/hooks/useTypewriter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const typedText = useTypewriter(
    [
      "Nimani o'rganamiz?",
      "Qanday texnologiyalarni o'rganamiz?",
      "Qayerdan boshlaymiz?",
      "Hamjamiyatga qo'shilasizmi?",
    ],
    100,
    50,
    2000
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary-glow font-medium">
            O'zbekistonning Eng Yirik Tech Hamjamiyati
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
          <span className="text-gradient">KnowHub</span>
          <br />
          <span className="text-foreground">Community</span>
        </h1>

        <div className="h-20 mb-8 flex items-center justify-center animate-fade-in">
          <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium">
            {typedText}
            <span className="animate-pulse ml-1 text-primary">|</span>
          </p>
        </div>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Dasturlash, kod ijrosi, gamifikatsiya va AI yordamida o'rganing.
          Bilimlaringizni ulashing va hamjamiyat bilan birga rivojlaning.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            size="lg"
            className="group bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg glow transition-all"
          >
            Hamjamiyatga Qo'shiling
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg rounded-xl"
          >
            Ko'proq O'rganish
          </Button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { value: "10K+", label: "Foydalanuvchilar" },
            { value: "50K+", label: "Kod Ijrolari" },
            { value: "1K+", label: "Maqolalar" },
            { value: "24/7", label: "Kod Runner" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
