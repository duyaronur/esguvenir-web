import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/seo/constants";
import { getTelLink, getWhatsAppLink, formatPhoneNumber } from "@/lib/utils/helpers";

interface TeamMember {
  name: string;
  role: string;
  phone: string;
  phoneRaw: string;
  image?: string;
}

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="card text-center">
      <div className="mb-4 inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary text-3xl font-bold text-white">
        {member.name.charAt(0)}
      </div>
      <h3 className="mb-1 text-xl font-semibold text-primary">{member.name}</h3>
      <p className="mb-4 text-neutral">{member.role}</p>
      <div className="flex flex-col gap-2">
        <a
          href={getTelLink(member.phoneRaw)}
          className="btn btn-primary"
        >
          <Phone className="h-5 w-5" />
          {formatPhoneNumber(member.phone)}
        </a>
        <a
          href={getWhatsAppLink(
            member.phoneRaw,
            "Merhaba, ESGÜVENİR İnşaat hakkında bilgi almak istiyorum."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
        >
          WhatsApp ile İletişim
        </a>
      </div>
    </div>
  );
}
