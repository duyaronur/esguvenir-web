import Hero from "@/components/ui/Hero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { generateMetadata } from "@/lib/seo/metadata";
import { SITE_CONFIG } from "@/lib/seo/constants";

export const metadata = generateMetadata({
  title: "Gizlilik Politikası",
  description: "ESGÜVENİR İnşaat - Emlak Gizlilik Politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi.",
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-neutral-lightest">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Gizlilik Politikası" }]} />
        </div>
      </div>

      <Hero title="Gizlilik Politikası" subtitle="Verilerinizi Koruyoruz" />

      <section className="section">
        <div className="container-custom max-w-4xl prose-custom">
          <p className="lead">
            ESGÜVENİR İnşaat - Emlak olarak, web sitemizi ziyaret eden kullanıcıların gizliliğini
            korumayı ve kişisel verilerini güvenli bir şekilde işlemeyi taahhüt ediyoruz.
          </p>

          <h2>Toplanan Bilgiler</h2>
          <p>Web sitemizi kullanırken aşağıdaki bilgiler toplanabilir:</p>
          <ul>
            <li>İsim, e-posta adresi ve telefon numarası (form doldurduğunuzda)</li>
            <li>IP adresi, tarayıcı türü ve ziyaret edilen sayfalar (otomatik olarak)</li>
            <li>Çerezler ve benzeri izleme teknolojileri</li>
          </ul>

          <h2>Bilgilerin Kullanımı</h2>
          <p>Toplanan bilgiler şu amaçlarla kullanılır:</p>
          <ul>
            <li>İletişim taleplerinin yanıtlanması</li>
            <li>Hizmet kalitesinin iyileştirilmesi</li>
            <li>Web sitesi analitiği ve performans takibi</li>
            <li>Pazarlama ve bilgilendirme (onay verdiğinizde)</li>
          </ul>

          <h2>Veri Güvenliği</h2>
          <p>
            Kişisel verilerinizi korumak için endüstri standartlarında güvenlik önlemleri
            alıyoruz. Ancak, internet üzerinden yapılan iletişimin %100 güvenli olmadığını
            unutmayın.
          </p>

          <h2>Üçüncü Taraf Bağlantıları</h2>
          <p>
            Web sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin
            gizlilik politikalarından sorumlu değiliz. Lütfen ziyaret ettiğiniz her web
            sitesinin gizlilik politikasını okuyun.
          </p>

          <h2>İletişim</h2>
          <p>
            Gizlilik politikamız hakkında sorularınız varsa, lütfen bizimle iletişime geçin:{" "}
            {SITE_CONFIG.contact.email}
          </p>

          <p className="text-sm text-neutral">Son Güncelleme: {new Date().toLocaleDateString("tr-TR")}</p>
        </div>
      </section>
    </>
  );
}
