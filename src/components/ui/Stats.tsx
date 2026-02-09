import { Building2, Home, TrendingUp } from "lucide-react";
import { SITE_CONFIG } from "@/lib/seo/constants";

export default function Stats() {
  const stats = [
    {
      icon: Building2,
      value: `${SITE_CONFIG.stats.projects}+`,
      label: "Tamamlanan Proje",
      description: "Başarıyla teslim edilmiş projeler",
    },
    {
      icon: Home,
      value: `${SITE_CONFIG.stats.homes}+`,
      label: "Mutlu Aile",
      description: "Hayalindeki eve kavuşmuş aileler",
    },
    {
      icon: TrendingUp,
      value: `${SITE_CONFIG.stats.yearsOfExperience}+`,
      label: "Yıllık Tecrübe",
      description: "Sektörde güven ve kalite",
    },
  ];

  return (
    <section className="section bg-neutral-lightest">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                  {stat.value}
                </div>
                <div className="mb-1 text-xl font-semibold text-neutral-darkest">
                  {stat.label}
                </div>
                <p className="text-neutral">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
