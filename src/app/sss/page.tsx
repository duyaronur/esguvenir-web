import Hero from "@/components/ui/Hero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import { generateMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo/schemas";
import { SITE_CONFIG, PAGE_METADATA } from "@/lib/seo/constants";

export const metadata = PAGE_METADATA.faq;

export default function FAQPage() {
  const faqs = [
    {
      question: "ESGÜVENİR İnşaat - Emlak kaç yıldır faaliyet gösteriyor?",
      answer: "Tekirdağ Kapaklı'da 10+ yıldır inşaat ve emlak sektöründe hizmet vermekteyiz. 50'den fazla projeyi başarıyla tamamladık ve 500'ü aşkın aileye ev sahibi yaptık.",
    },
    {
      question: "Hangi bölgelerde hizmet veriyorsunuz?",
      answer: "Ana faaliyet bölgemiz Tekirdağ Kapaklı olmakla birlikte, Çorlu, Çerkezköy, Malkara ve Tekirdağ merkez dahil geniş bir coğrafyada projeler gerçekleştiriyoruz.",
    },
    {
      question: "İnşaat malzemelerinizin kalitesini nasıl garanti ediyorsunuz?",
      answer: "Sadece birinci sınıf, sertifikalı ve test edilmiş malzemeler kullanıyoruz. Her malzeme için kalite belgesi alınır ve dokümante edilir. Tüm malzemeler düzenli olarak denetlenir.",
    },
    {
      question: "Proje teslim süresi ne kadar?",
      answer: "Proje teslim süresi projenin büyüklüğüne ve kapsamına göre değişir. Ortalama bir konut projesi 12-18 ay, ticari projeler ise 18-24 ay sürebilir. Sözleşmede belirlenen teslim tarihlerine sadık kalmayı taahhüt ediyoruz.",
    },
    {
      question: "Proje sürecinde müşteri bilgilendirilir mi?",
      answer: "Evet, proje sürecinin her aşamasında müşterilerimizi düzenli olarak bilgilendiriyoruz. Foto-video dokümantasyonu tutulur, haftalık raporlar sunulur ve müşterilerimiz diledikleri zaman şantiyeyi ziyaret edebilirler.",
    },
    {
      question: "Ödeme planı seçenekleriniz nedir?",
      answer: "Müşterilerimize esnek ödeme planları sunuyoruz. Peşin ödemede indirim, yapım aşamalarına göre taksitli ödeme veya kredi imkanları mevcuttur. Detaylı bilgi için lütfen bizimle iletişime geçin.",
    },
    {
      question: "İnşaat sonrası garanti süresi var mı?",
      answer: "Evet, tamamladığımız her projede garanti belgesi sunuyoruz. Yapısal sorunlar garanti kapsamında ücretsiz olarak giderilir. Ayrıca teslim sonrası teknik destek ve bakım hizmeti veriyoruz.",
    },
    {
      question: "Tadilat işleri için de hizmet veriyor musunuz?",
      answer: "Evet, ev ve işyeri tadilat hizmetleri sunuyoruz. İç mekan yenileme, banyo-mutfak tadilatı, cephe yenileme ve kapsamlı renovasyon projelerinde uzmanız.",
    },
    {
      question: "Proje yönetimi hizmeti nedir?",
      answer: "Proje yönetimi hizmeti, inşaat sürecinin tüm aşamalarının profesyonel bir şekilde yönetilmesidir. Planlama, koordinasyon, kalite kontrol, bütçe yönetimi ve zamanında teslimat dahil tüm süreçleri üstleniriz.",
    },
    {
      question: "Çevre dostu inşaat yapıyor musunuz?",
      answer: "Evet, sürdürülebilir ve çevre dostu inşaat projelerine önem veriyoruz. Enerji verimliliği yüksek malzemeler kullanıyor, atık yönetimi yapıyor ve yeşil bina standartlarına uygun projeler geliştiriyoruz.",
    },
    {
      question: "Mimari tasarım hizmeti veriyor musunuz?",
      answer: "Evet, deneyimli mimar ve mühendislerimizle mimari tasarım hizmeti sunuyoruz. Müşteri ihtiyaçlarına özel tasarımlar yapıyor, 3D görseller ve projeler hazırlıyoruz.",
    },
    {
      question: "İnşaat ruhsatı ve izinler nasıl alınır?",
      answer: "İnşaat ruhsatı ve izinleri konusunda müşterilerimize tam destek veriyoruz. Gerekli tüm belgeler ve başvurular tarafımızdan hazırlanır ve takip edilir.",
    },
    {
      question: "Arsa üzerine inşaat yapıyor musunuz?",
      answer: "Evet, müşterilerimizin kendi arsaları üzerine inşaat yapıyoruz. Arsa analizi, zemin etüdü, proje tasarımı ve inşaat sürecinin tamamını yönetiyoruz.",
    },
    {
      question: "Sözleşme koşullarınız nelerdir?",
      answer: "Sözleşmelerimiz şeffaf ve açık bir dille hazırlanır. Proje kapsamı, teslim tarihi, ödeme planı, garanti koşulları ve tarafların yükümlülükleri detaylı şekilde belirtilir.",
    },
    {
      question: "Referans projelerinizi görebilir miyim?",
      answer: "Elbette! Web sitemizdeki 'Projeler' sayfasında tamamladığımız 50+ projeyi görebilir, detaylı bilgi alabilirsiniz. Ayrıca ofisimizi ziyaret ederek daha fazla referans görebilirsiniz.",
    },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Anasayfa", url: SITE_CONFIG.url },
    { name: "SSS", url: `${SITE_CONFIG.url}/sss` },
  ]);
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, faqSchema]) }} />
      <div className="bg-neutral-lightest">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "SSS" }]} />
        </div>
      </div>

      <Hero title="Sık Sorulan Sorular" subtitle="Merak Ettikleriniz" description="İnşaat, emlak ve projeler hakkında en çok sorulan sorular ve yanıtları." />

      <section className="section">
        <div className="container-custom max-w-4xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection title="Sorunuza Yanıt Bulamadınız mı?" description="Bizimle iletişime geçin, tüm sorularınızı yanıtlayalım." />
    </>
  );
}
