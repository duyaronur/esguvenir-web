"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
    kvkk: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Formspree veya başka bir endpoint varsa kullan
      if (process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT) {
        const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus("success");
          setFormData({ name: "", phone: "", subject: "", message: "", kvkk: false });
        } else {
          setStatus("error");
        }
      } else {
        // Fallback: mailto ile aç
        const mailtoLink = `mailto:info@esguvenir.com?subject=${encodeURIComponent(
          formData.subject
        )}&body=${encodeURIComponent(
          `Ad Soyad: ${formData.name}\nTelefon: ${formData.phone}\n\nMesaj:\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
        setStatus("success");
        setFormData({ name: "", phone: "", subject: "", message: "", kvkk: false });
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Ad Soyad */}
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-darkest">
          Ad Soyad <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-neutral-light px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="Adınız ve soyadınız"
        />
      </div>

      {/* Telefon */}
      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-neutral-darkest">
          Telefon <span className="text-red-600">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-neutral-light px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="0 (5XX) XXX XX XX"
        />
      </div>

      {/* Konu */}
      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-neutral-darkest">
          Konu <span className="text-red-600">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-neutral-light px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          <option value="">Bir konu seçin</option>
          <option value="Genel Bilgi">Genel Bilgi</option>
          <option value="Proje Bilgisi">Proje Bilgisi</option>
          <option value="Fiyat Teklifi">Fiyat Teklifi</option>
          <option value="İnşaat Hizmetleri">İnşaat Hizmetleri</option>
          <option value="Emlak Danışmanlığı">Emlak Danışmanlığı</option>
          <option value="Diğer">Diğer</option>
        </select>
      </div>

      {/* Mesaj */}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-darkest">
          Mesajınız <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full rounded-lg border border-neutral-light px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="Mesajınızı buraya yazın..."
        />
      </div>

      {/* KVKK Onayı */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="kvkk"
          name="kvkk"
          checked={formData.kvkk}
          onChange={handleChange}
          required
          className="mt-1 h-4 w-4 rounded border-neutral-light text-primary focus:ring-2 focus:ring-primary/20"
        />
        <label htmlFor="kvkk" className="text-sm text-neutral">
          <a href="/kvkk" className="text-primary underline hover:text-accent" target="_blank">
            KVKK Aydınlatma Metni
          </a>
          'ni okudum ve kabul ediyorum. <span className="text-red-600">*</span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-primary w-full disabled:opacity-50"
      >
        {status === "loading" ? (
          <>
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Gönderiliyor...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Gönder
          </>
        )}
      </button>

      {/* Success Message */}
      {status === "success" && (
        <div className="flex items-center gap-2 rounded-lg bg-green-50 p-4 text-green-800">
          <CheckCircle className="h-5 w-5" />
          <p>Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</p>
        </div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <div className="rounded-lg bg-red-50 p-4 text-red-800">
          <p>Bir hata oluştu. Lütfen daha sonra tekrar deneyin.</p>
        </div>
      )}
    </form>
  );
}
