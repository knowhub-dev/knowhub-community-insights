import { Code2, Zap, Trophy, Brain, Users, Server } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Code2,
    title: "Code Runner",
    description:
      "30+ dasturlash tilida kod yozing va real vaqtda natijani ko'ring. Docker izolyatsiyasida xavfsiz ijro.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Server,
    title: "Mini Services",
    description:
      "Microservices arxitekturasi: Piston, Image Optimization, AI Recommendation va Notification xizmatlari.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "AI Yordamchi",
    description:
      "AI asosida maqola yozish, kod sharhlash va shaxsiy tavsiyalar. OpenAI integratsiyasi.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Trophy,
    title: "Gamifikatsiya",
    description:
      "XP to'plang, badge'lar qo'lga kiriting, darajangizni oshiring va leaderboard'da o'zingizni namoyish eting.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Hamjamiyat",
    description:
      "Postlar, maqolalar, Wiki va real vaqt muhokamalar. O'zbek dasturchilar uchun maxsus platforma.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Yuqori Tezlik",
    description:
      "Redis cache, queue'lar, va optimallashtirilgan API. Next.js 14 va Laravel 11 quvvatida.",
    gradient: "from-yellow-500 to-orange-500",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient">Platformaning</span> Imkoniyatlari
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Zamonaviy texnologiyalar va innovatsion yondashuvlar bilan
            ta'minlangan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity rounded-lg from-primary to-secondary" />
                
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
