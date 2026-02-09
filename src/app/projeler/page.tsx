import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Building2, Clock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Projeler - Yakında | ESGÜVENİR İnşaat",
  description: "ESGÜVENİR İnşaat'ın konut ve ticari projeleri yakında burada olacak. Tekirdağ Kapaklı bölgesinde kaliteli inşaat projeleri için bizi takip edin.",
  openGraph: {
    title: "Projeler - Yakında | ESGÜVENİR İnşaat",
    description: "ESGÜVENİR İnşaat'ın konut ve ticari projeleri yakında burada olacak.",
    images: ["/images/banner.png"],
  },
};

export default function ProjectsComingSoonPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner.png"
            alt="ESGÜVENİR İnşaat Projeler"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 backdrop-blur-sm px-6 py-2 mb-8 border border-accent/30">
            <Sparkles className="h-5 w-5 text-accent animate-pulse" />
            <span className="text-accent font-medium">Çok Yakında</span>
          </div>

          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Projelerimiz Yakında Burada
          </h1>
          
          <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
            ESGÜVENİR İnşaat olarak hayata geçirdiğimiz konut ve ticari projelerimizi
            yakında bu sayfada görebileceksiniz.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/iletisim" className="btn btn-accent btn-lg gap-2">
              <Building2 className="h-5 w-5" />
              Bizimle İletişime Geçin
            </Link>
            <Link href="/" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>

        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
      </section>

      {/* Info Section */}
      <section className="section bg-neutral-lightest">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card text-center hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kaliteli Projeler</h3>
              <p className="text-neutral-dark leading-relaxed">
                Yılların deneyimiyle oluşturduğumuz konut ve ticari projelerimiz,
                modern yaşam standartlarına uygun olarak tasarlanmaktadır.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card text-center hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zamanında Teslimat</h3>
              <p className="text-neutral-dark leading-relaxed">
                Projelerimizi planlanan süre içerisinde, titiz bir çalışmayla
                tamamlıyor ve müşterilerimize zamanında teslim ediyoruz.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card text-center hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Tasarımlar</h3>
              <p className="text-neutral-dark leading-relaxed">
                Çağdaş mimarı anlayışıyla tasarlanan projelerimiz, estetik ve
                fonksiyonelliği bir araya getiriyor.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center card bg-gradient-primary text-white animate-scale-in">
            <h2 className="text-3xl font-bold mb-4">Projelerimiz Hakkında Bilgi Almak İster misiniz?</h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Devam eden ve tamamlanan projelerimiz hakkında detaylı bilgi almak için
              bizimle iletişime geçebilirsiniz.
            </p>
            <Link href="/iletisim" className="btn btn-accent btn-lg">
              İletişim Formu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
