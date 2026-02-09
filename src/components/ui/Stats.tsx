import { Building2, Home, TrendingUp } from "lucide-react";
import { SITE_CONFIG } from "@/lib/seo/constants";

export default function Stats() {
  const stats = [
    {
      icon: Building2,
      value: `${SITE_CONFIG.stats.projects}+`,
      label: "Tamamlanan Proje",
      description: "Başarıyla teslim edilmiş projeler",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Home,
      value: `${SITE_CONFIG.stats.homes}+`,
      label: "Mutlu Aile",
      description: "Hayalindeki eve kavuşmuş aileler",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: TrendingUp,
      value: `${SITE_CONFIG.stats.yearsOfExperience}+`,
      label: "Yıllık Tecrübe",
      description: "Sektörde güven ve kalite",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-neutral-lightest to-white">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="card text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full ${stat.color} transition-transform group-hover:scale-110`}>
                  <Icon className="h-10 w-10" />
                </div>
                <div className="mb-2 text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent md:text-6xl">
                  {stat.value}
                </div>
                <div className="mb-2 text-xl font-bold text-neutral-darkest">
                  {stat.label}
                </div>
                <p className="text-neutral-dark leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
