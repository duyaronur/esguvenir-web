import Hero from "@/components/ui/Hero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { generateMetadata } from "@/lib/seo/metadata";
import { SITE_CONFIG } from "@/lib/seo/constants";

export const metadata = generateMetadata({
  title: "KVKK Aydınlatma Metni",
  description: "ESGÜVENİR İnşaat - Emlak KVKK Aydınlatma Metni ve Kişisel Verilerin Korunması Politikası.",
  noindex: true,
});

export default function KVKKPage() {
  return (
    <>
      <div className="bg-neutral-lightest">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "KVKK" }]} />
        </div>
      </div>

      <Hero title="KVKK Aydınlatma Metni" subtitle="Kişisel Verilerin Korunması" />

      <section className="section">
        <div className="container-custom max-w-4xl prose-custom">
          <p className="lead">
            6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz
            ESGÜVENİR İnşaat - Emlak ("Şirket") tarafından aşağıda açıklanan kapsamda işlenmektedir.
          </p>

          <h2>Veri Sorumlusu</h2>
          <p>
            Kişisel verilerinizin veri sorumlusu ESGÜVENİR İnşaat - Emlak'tır. İletişim:{" "}
            {SITE_CONFIG.contact.email}
          </p>

          <h2>İşlenen Kişisel Veriler</h2>
          <ul>
            <li>Kimlik bilgileri (ad, soyad)</li>
            <li>İletişim bilgileri (telefon, e-posta)</li>
            <li>Müşteri işlem bilgileri</li>
            <li>Çerez ve benzeri teknolojiler ile toplanan veriler</li>
          </ul>

          <h2>Kişisel Verilerin İşlenme Amacı</h2>
          <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
          <ul>
            <li>Hizmet sunumu ve müşteri ilişkileri yönetimi</li>
            <li>İletişim ve bilgilendirme</li>
            <li>Pazarlama ve reklam faaliyetleri</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            <li>Web sitesi performansının iyileştirilmesi</li>
          </ul>

          <h2>Kişisel Verilerin Aktarımı</h2>
          <p>
            Kişisel verileriniz, KVKK'da öngörülen temel ilkelere uygun olarak ve yasal
            yükümlülüklerimiz çerçevesinde iş ortaklarımıza, tedarikçilerimize ve yetkili kamu
            kurum ve kuruluşlarına aktarılabilir.
          </p>

          <h2>Kişisel Veri Sahibinin Hakları</h2>
          <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
            <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Kişisel verilerin yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
            <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
            <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde verilerin silinmesini isteme</li>
            <li>
              Yapılan işlemlerin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini
              isteme
            </li>
            <li>
              İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi
              suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme
            </li>
            <li>
              Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız
              halinde zararın giderilmesini talep etme
            </li>
          </ul>

          <p>
            Haklarınızı kullanmak için {SITE_CONFIG.contact.email} adresine e-posta gönderebilir
            veya şirket adresimize yazılı olarak başvurabilirsiniz.
          </p>

          <p className="text-sm text-neutral">Son Güncelleme: {new Date().toLocaleDateString("tr-TR")}</p>
        </div>
      </section>
    </>
  );
}
