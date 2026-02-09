import Hero from "@/components/ui/Hero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { generateMetadata } from "@/lib/seo/metadata";

export const metadata = generateMetadata({
  title: "Çerez Politikası",
  description: "ESGÜVENİR İnşaat - Emlak Çerez Politikası. Web sitemizde kullanılan çerezler ve amaçları hakkında bilgi.",
  noindex: true,
});

export default function CookiePolicyPage() {
  return (
    <>
      <div className="bg-neutral-lightest">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Çerez Politikası" }]} />
        </div>
      </div>

      <Hero title="Çerez Politikası" subtitle="Çerez Kullanımı Hakkında" />

      <section className="section">
        <div className="container-custom max-w-4xl prose-custom">
          <p className="lead">
            Bu web sitesi, kullanıcı deneyimini geliştirmek ve site performansını analiz etmek
            amacıyla çerezler kullanmaktadır.
          </p>

          <h2>Çerez Nedir?</h2>
          <p>
            Çerezler, web sitelerini ziyaret ettiğinizde cihazınıza (bilgisayar, telefon vb.)
            kaydedilen küçük metin dosyalarıdır. Çerezler, web sitelerinin daha verimli
            çalışmasını ve site sahiplerinin kullanıcı davranışlarını anlamasını sağlar.
          </p>

          <h2>Kullandığımız Çerez Türleri</h2>
          
          <h3>Zorunlu Çerezler</h3>
          <p>
            Web sitesinin temel işlevlerinin çalışması için gereklidir. Bu çerezler olmadan
            site düzgün çalışmaz.
          </p>

          <h3>Performans Çerezleri</h3>
          <p>
            Web sitesinin nasıl kullanıldığını anlamamıza yardımcı olur. Hangi sayfaların
            ziyaret edildiği, hata mesajları gibi bilgileri toplar.
          </p>

          <h3>Fonksiyonel Çerezler</h3>
          <p>
            Tercihlerinizi hatırlamamıza ve kişiselleştirilmiş özellikler sunmamıza olanak
            tanır.
          </p>

          <h3>Reklam/Hedefleme Çerezleri</h3>
          <p>
            İlgi alanlarınıza uygun reklamlar göstermek ve pazarlama kampanyalarının
            etkinliğini ölçmek için kullanılır.
          </p>

          <h2>Üçüncü Taraf Çerezleri</h2>
          <p>Web sitemizde aşağıdaki üçüncü taraf hizmetler çerez kullanabilir:</p>
          <ul>
            <li><strong>Google Analytics:</strong> Web sitesi trafiği ve kullanıcı davranışı analizi</li>
            <li><strong>Google Tag Manager:</strong> Pazarlama etiketlerinin yönetimi</li>
          </ul>

          <h2>Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
          <p>
            Çoğu web tarayıcısı çerezleri otomatik olarak kabul eder, ancak tarayıcı
            ayarlarınızı değiştirerek çerezleri reddedebilir veya silebilirsiniz. Çerezleri
            engellerseniz, web sitesinin bazı özellikleri düzgün çalışmayabilir.
          </p>

          <p>
            <strong>Tarayıcı Ayarları:</strong>
          </p>
          <ul>
            <li>Chrome: Ayarlar {'>'} Gizlilik ve güvenlik {'>'} Çerezler</li>
            <li>Firefox: Ayarlar {'>'} Gizlilik ve Güvenlik {'>'} Çerezler</li>
            <li>Safari: Tercihler {'>'} Gizlilik {'>'} Çerezler</li>
            <li>Edge: Ayarlar {'>'} Gizlilik, arama ve hizmetler</li>
          </ul>

          <p className="text-sm text-neutral">Son Güncelleme: {new Date().toLocaleDateString("tr-TR")}</p>
        </div>
      </section>
    </>
  );
}
