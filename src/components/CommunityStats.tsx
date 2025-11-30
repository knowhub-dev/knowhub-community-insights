import { TrendingUp, MessageSquare, Code, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "10,000+",
    label: "Faol Foydalanuvchilar",
    description: "Har kuni platformada faol ishtirok etuvchi dasturchilar",
    color: "text-blue-500",
  },
  {
    icon: MessageSquare,
    value: "50,000+",
    label: "Postlar va Maqolalar",
    description: "Hamjamiyat tomonidan yaratilgan kontent",
    color: "text-purple-500",
  },
  {
    icon: Code,
    value: "100,000+",
    label: "Kod Ijrolari",
    description: "Piston orqali bajarilgan kod parcha soni",
    color: "text-green-500",
  },
  {
    icon: Award,
    value: "5,000+",
    label: "Badge'lar Berildi",
    description: "Gamifikatsiya tizimi orqali mukofotlar",
    color: "text-orange-500",
  },
];

const CommunityStats = () => {
  return (
    <section id="community" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hamjamiyat <span className="text-gradient">Hisobotlari</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real vaqt statistikasi - platformamiz har kuni o'sib bormoqda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-10 h-10 ${stat.color}`} />
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  </div>

                  <div className="text-4xl md:text-5xl font-bold mb-2 text-gradient">
                    {stat.value}
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {stat.label}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium">
            <TrendingUp className="w-5 h-5" />
            <span>Har kuni 500+ yangi foydalanuvchi qo'shilmoqda!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
