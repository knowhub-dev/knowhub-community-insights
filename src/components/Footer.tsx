import { Link } from "react-router-dom";
import {
  Sparkles,
  Github,
  MessageCircle,
  Twitter,
  Instagram,
  Mail,
  Heart,
} from "lucide-react";

const footerSections = [
  {
    title: "Bo'limlar",
    links: [
      { name: "Asosiy Sahifa", href: "/" },
      { name: "Xususiyatlar", href: "#features" },
      { name: "Community", href: "#community" },
      { name: "Code Runner", href: "#code-runner" },
    ],
  },
  {
    title: "Resurslar",
    links: [
      { name: "Wiki", href: "/wiki" },
      { name: "Blog", href: "/blog" },
      { name: "Hujjatlar", href: "/docs" },
      { name: "API", href: "/api" },
    ],
  },
  {
    title: "Yordam",
    links: [
      { name: "FAQ", href: "/faq" },
      { name: "Qo'llab-quvvatlash", href: "/support" },
      { name: "Aloqa", href: "/contact" },
      { name: "Hamjamiyat", href: "/community" },
    ],
  },
  {
    title: "Qonuniy",
    links: [
      { name: "Maxfiylik Siyosati", href: "/privacy" },
      { name: "Foydalanish Shartlari", href: "/terms" },
      { name: "Litsenziya", href: "/license" },
      { name: "Xavfsizlik", href: "/security" },
    ],
  },
];

const socialLinks = [
  {
    name: "Telegram",
    icon: MessageCircle,
    href: "https://t.me/knowhub_uz",
    color: "hover:text-blue-400",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/knowhub-dev/knowhub-community",
    color: "hover:text-purple-400",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/knowhub_uz",
    color: "hover:text-sky-400",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/knowhub.uz",
    color: "hover:text-pink-400",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:hello@knowhub.uz",
    color: "hover:text-orange-400",
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-gradient-primary p-2 rounded-lg">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <span className="text-2xl font-bold text-gradient">KnowHub</span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              O'zbekistonning eng katta texnologiya hamjamiyati. Dasturlash
              o'rganing, bilimingizni ulashing va professional sifatida
              rivojlaning.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>10,000+ faol foydalanuvchi</span>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-200 ${social.color}`}
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025 KnowHub Community.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> by the community
            </span>
            <span className="hidden md:inline">•</span>
            <a
              href="https://github.com/knowhub-dev/knowhub-community"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Open Source
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-4 py-2 rounded-lg bg-muted/50 hover:bg-primary/20 text-sm font-medium transition-all duration-200 hover:scale-105"
          >
            Yuqoriga ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
