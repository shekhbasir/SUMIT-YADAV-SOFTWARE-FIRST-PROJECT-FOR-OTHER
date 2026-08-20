import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020b07]">
      <div className="mx-auto grid max-w-[1300px] gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Candidate */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-400">
              👤
            </div>

            <div>
              <h3 className="font-bold">SUMIT YADAV</h3>

              <p className="text-xs text-lime-400">For Chairperson 2084</p>
            </div>
          </div>

          <p className="mt-3 text-sm text-slate-500">Bishrampur Gaunpalika</p>

          {/* Social */}
          <div className="mt-5 flex gap-3">
            {["f", "◎", "▶", "♪", "◉"].map((icon, index) => (
              <div
                key={index}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm font-bold"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold">Quick Links</h3>

          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <p>गृहपृष्ठ</p>
            <p>मेरो परिचय</p>
            <p>मेरो सेवा</p>
            <p>विकास योजना</p>
            <p>समाचार</p>
            <p>सम्पर्क</p>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-bold">Explore</h3>

          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <p>Bishrampur Data</p>
            <p>वडा अनुसार जानकारी</p>
            <p>निर्वाचन सम्बन्धी जानकारी</p>
            <p>विकास योजना</p>
            <p>FAQ</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold">सम्पर्क गर्नुहोस्</h3>

          <div className="mt-4 space-y-4 text-sm text-slate-400">
            <p className="flex gap-2">
              <MapPin size={17} />
              Bishrampur Gaunpalika, Bara
            </p>

            <p className="flex gap-2">
              <Phone size={17} />
              +977 9800000000
            </p>

            <p className="flex gap-2">
              <Mail size={17} />
              info@example.com
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-600">
        © 2084 Sumit Yadav Campaign. All Rights Reserved.
      </div>
    </footer>
  );
}
