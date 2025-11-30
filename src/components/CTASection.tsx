import { Button } from "@/components/ui/button";
import { ArrowRight, Github, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />

      {/* Animated elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/40 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/40 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Bugun <span className="text-gradient">Boshlaymiz</span>!
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            O'zbekistonning eng katta texnologiya hamjamiyatiga qo'shiling.
            Bilimingizni oshiring, tajriba to'plang va karyerangizni
            rivojlantiring.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="group bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg glow"
            >
              Ro'yxatdan O'tish
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg rounded-xl"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Telegram Guruhimiz
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <a
              href="https://github.com/knowhub-dev/knowhub-community"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>MIT License</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
