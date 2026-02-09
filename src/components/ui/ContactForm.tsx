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
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
      {/* Ad Soyad */}
      <div className="form-control">
        <label htmlFor="name" className="label">
          <span className="label-text font-medium">Ad Soyad <span className="text-error">*</span></span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input input-bordered input-lg w-full focus:input-primary"
          placeholder="Adınız ve soyadınız"
        />
      </div>

      {/* Telefon */}
      <div className="form-control">
        <label htmlFor="phone" className="label">
          <span className="label-text font-medium">Telefon <span className="text-error">*</span></span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="input input-bordered input-lg w-full focus:input-primary"
          placeholder="0 (5XX) XXX XX XX"
        />
      </div>

      {/* Konu */}
      <div className="form-control">
        <label htmlFor="subject" className="label">
          <span className="label-text font-medium">Konu <span className="text-error">*</span></span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="select select-bordered select-lg w-full focus:select-primary"
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
      <div className="form-control">
        <label htmlFor="message" className="label">
          <span className="label-text font-medium">Mesajınız <span className="text-error">*</span></span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="textarea textarea-bordered textarea-lg w-full focus:textarea-primary"
          placeholder="Mesajınızı buraya yazın..."
        />
      </div>

      {/* KVKK Onayı */}
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-3">
          <input
            type="checkbox"
            id="kvkk"
            name="kvkk"
            checked={formData.kvkk}
            onChange={handleChange}
            required
            className="checkbox checkbox-primary"
          />
          <span className="label-text">
            <a href="/kvkk" className="link link-primary font-medium" target="_blank">
              KVKK Aydınlatma Metni
            </a>
            'ni okudum ve kabul ediyorum. <span className="text-error">*</span>
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-accent btn-lg w-full gap-2 hover:scale-105 transition-transform"
      >
        {status === "loading" ? (
          <>
            <span className="loading loading-spinner loading-md"></span>
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
        <div className="alert alert-success animate-fade-in">
          <CheckCircle className="h-6 w-6" />
          <span>Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</span>
        </div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <div className="alert alert-error animate-fade-in">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Bir hata oluştu. Lütfen daha sonra tekrar deneyin.</span>
        </div>
      )}
    </form>
  );
}
