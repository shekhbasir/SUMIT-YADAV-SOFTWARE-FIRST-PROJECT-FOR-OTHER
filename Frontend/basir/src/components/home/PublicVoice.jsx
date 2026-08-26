import { ArrowRight, CheckCircle2, Quote, Sparkles, Users } from "lucide-react";

import opphoto1 from "../../assets/opphoto1.jpg";
import opphoto2 from "../../assets/opphoto2.jpg";
import opphoto3 from "../../assets/opphoto3.jpg";
import opphoto4 from "../../assets/opphoto4.jpg";
import opphoto5 from "../../assets/opphoto5.jpg";
import opphoto6 from "../../assets/opphoto6.jpg";
import opphoto7 from "../../assets/opphoto7.jpg";
import opphoto8 from "../../assets/opphoto8.jpg";
import opphoto9 from "../../assets/opphoto9.jpg";
import opphoto10 from "../../assets/opphoto10.jpg";

/*
|--------------------------------------------------------------------------
| PUBLIC OPINIONS
|--------------------------------------------------------------------------
| Replace these sample civic statements with real, consented citizen
| feedback before publishing them as actual public testimonials.
|--------------------------------------------------------------------------
*/

const opinions = [
  {
    id: 1,
    name: "Shekh Basir",
    ward: 3,
    photo: opphoto1,
    opinion:
      "समित यादवलाई स्थानीय विकास, जनताको आवश्यकता र युवाका अवसरका विषयमा सक्रिय चासो राख्ने उम्मेदवारका रूपमा प्रस्तुत गरिएको छ। उहाँले विश्रामपुर गाउँपालिकाको समग्र विकासका लागि निरन्तर पहल गर्ने प्रतिबद्धता व्यक्त गर्नुभएको छ।",
  },

  {
    id: 2,
    name: "Amit Chaurasiya",
    ward: 3,
    photo: opphoto2,
    opinion:
      "समित यादवको मुख्य प्राथमिकतामध्ये जनताको आवाज सुन्ने, स्थानीय समस्यालाई बुझ्ने र समाधानका लागि निरन्तर पहल गर्ने सोच देखिन्छ। यस्तो सक्रिय र जवाफदेही नेतृत्व स्थानीय विकासका लागि महत्वपूर्ण हुन सक्छ।",
  },

  {
    id: 3,
    name: "Santosh Pandit",
    ward: 1,
    photo: opphoto3,
    opinion:
      "विश्रामपुरको भविष्यलाई अझ राम्रो बनाउन शिक्षा, स्वास्थ्य, रोजगारी र युवाका अवसरमा विशेष ध्यान आवश्यक छ। समित यादवले यस्ता विषयलाई प्राथमिकतामा राखेर काम गर्ने प्रतिबद्धता अघि सारेका छन्।",
  },

  {
    id: 4,
    name: "Rajeshwar Yadav ",
    ward: 2,
    photo: opphoto4,
    opinion:
      "स्थानीय जनताको समस्या नजिकबाट बुझ्ने र विकासका विषयमा निरन्तर सक्रिय रहने नेतृत्वको आवश्यकता छ। समित यादव आफूलाई यही जिम्मेवारीका लागि तयार उम्मेदवारका रूपमा प्रस्तुत गर्छन्।",
  },

  {
    id: 5,
    name: "Dilip Pandit",
    ward: 5,
    photo: opphoto5,
    opinion:
      "सडक, खानेपानी, सरसफाइ, कृषि र आधारभूत पूर्वाधारजस्ता विषयमा दीर्घकालीन सुधार आवश्यक छ। समित यादवले गाउँपालिकाको विकासलाई योजनाबद्ध र परिणाममुखी बनाउने आफ्नो सोच अघि सारेका छन्।",
  },

  {
    id: 6,
    name: "Aashis Kumar",
    ward: 4,
    photo: opphoto6,
    opinion:
      "युवाको ऊर्जा र क्षमतालाई गाउँपालिकाको विकाससँग जोड्न सकियो भने नयाँ अवसर सिर्जना गर्न सकिन्छ। समित यादवले युवा सहभागिता र अवसर विस्तारलाई महत्वपूर्ण विषयका रूपमा अघि सारेका छन्।",
  },

  {
    id: 7,
    name: "Mukesh Yadav",
    ward: 1,
    photo: opphoto7,
    opinion:
      "जनताको कुरा सुन्ने, सुझावलाई सम्मान गर्ने र सार्वजनिक काममा पारदर्शिता कायम गर्ने संस्कार स्थानीय नेतृत्वमा आवश्यक हुन्छ। समित यादवले यिनै मूल्यलाई आफ्नो कार्यशैलीको आधार बनाउने प्रतिबद्धता व्यक्त गरेका छन्।",
  },

  {
    id: 8,
    name: "Arbind lal Kumar",
    ward: 2,
    photo: opphoto8,
    opinion:
      "विश्रामपुर गाउँपालिकाको विकास केवल पूर्वाधार निर्माणमा सीमित नभई शिक्षा, स्वास्थ्य, कृषि, रोजगारी र सामाजिक अवसरसँग जोडिनुपर्छ। समित यादवले समग्र विकासको यस्तो दृष्टिकोण प्रस्तुत गरेका छन्।",
  },

  {
    id: 9,
    name: "Mohit Prasad",
    ward: 5,
    photo: opphoto9,
    opinion:
      "स्थानीय सरकार जनताको नजिक हुने भएकाले नागरिकसँग निरन्तर संवाद र जवाफदेहिता अत्यन्त आवश्यक छ। समित यादवले नागरिक सहभागितालाई महत्व दिँदै विकासका काममा जनताको आवाज समेट्ने प्रतिबद्धता जनाएका छन्।",
  },

  {
    id: 10,
    name: "Chandan Pal",
    ward: 4,
    photo: opphoto10,
    opinion:
      "विश्रामपुरको समृद्ध भविष्यका लागि स्पष्ट सोच, निरन्तर मेहनत, पारदर्शिता र विकासप्रतिको प्रतिबद्धता आवश्यक छ। समित यादवले गाउँपालिकाको विकासका लागि सक्रिय रूपमा काम गर्ने आफ्नो प्रतिबद्धता प्रस्तुत गरेका छन्।",
  },
];
const duplicatedOpinions = [...opinions, ...opinions];

export default function PublicVoice() {
  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-20 h-64 w-64 rounded-full bg-lime-400/10 blur-[100px]" />
        <div className="absolute right-[5%] top-1/2 h-72 w-72 rounded-full bg-emerald-400/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-green-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-xs font-semibold tracking-wide text-lime-300 backdrop-blur-xl">
            <Sparkles size={14} />
            PUBLIC OPINION
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            जनताको{" "}
            <span className="bg-gradient-to-r from-lime-300 via-emerald-300 to-green-400 bg-clip-text text-transparent">
              आवाज
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            विश्रामपुर गाउँपालिकाको विकास, पारदर्शिता, रोजगारी, शिक्षा,
            स्वास्थ्य र नागरिक सहभागिताबारे स्थानीय नागरिकका विचारहरू।
          </p>

          {/* Stats */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-300 backdrop-blur-xl">
              <Users size={15} className="text-lime-400" />
              नागरिक प्रतिक्रिया
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-300 backdrop-blur-xl">
              <CheckCircle2 size={15} className="text-emerald-400" />
              सार्वजनिक प्रतिक्रिया
            </div>
          </div>
        </div>

        {/* =========================================================
            MARQUEE
        ========================================================== */}
        <div className="relative mt-12">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#06150d] to-transparent sm:w-28" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#06150d] to-transparent sm:w-28" />

          <div className="public-opinion-marquee overflow-hidden py-4">
            <div className="public-opinion-track flex w-max gap-5">
              {duplicatedOpinions.map((item, index) => (
                <article
                  key={`${item.id}-${index}`}
                  className="
                    group relative w-[310px] shrink-0
                    overflow-hidden rounded-[26px]
                    border border-white/10
                    bg-white/[0.045]
                    p-5
                    shadow-2xl shadow-black/20
                    backdrop-blur-2xl
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:border-lime-400/30
                    hover:bg-white/[0.075]
                    hover:shadow-lime-950/30
                    sm:w-[350px]
                    lg:w-[380px]
                  "
                >
                  {/* Animated glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-lime-400/10 blur-3xl transition-all duration-500 group-hover:bg-lime-400/20" />

                  {/* Top row */}
                  <div className="relative flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={item.photo}
                          alt={item.name}
                          className="
                            h-12 w-12 rounded-full
                            border border-white/15
                            object-cover
                            ring-2 ring-lime-400/10
                            transition-transform duration-500
                            group-hover:scale-110
                          "
                        />

                        <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#08150e] bg-emerald-500">
                          <CheckCircle2 size={11} className="text-white" />
                        </span>
                      </div>

                      <div>
                        <h3 className="font-bold text-white">{item.name}</h3>

                        <div className="mt-1 flex items-center gap-2">
                          <span className="rounded-full bg-lime-400/10 px-2.5 py-1 text-[10px] font-semibold text-lime-300">
                            वडा {item.ward}
                          </span>

                          <span className="text-[10px] text-slate-500">
                            नागरिक प्रतिक्रिया
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-lime-400/10 bg-lime-400/5">
                      <Quote size={18} className="text-lime-300" />
                    </div>
                  </div>

                  {/* Opinion */}
                  <div className="relative mt-5">
                    <p className="text-[14px] leading-7 text-slate-300">
                      “{item.opinion}”
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />

                      <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                        Public Feedback
                      </span>
                    </div>

                    <ArrowRight
                      size={15}
                      className="
                        text-slate-600
                        transition-all duration-300
                        group-hover:translate-x-1
                        group-hover:text-lime-300
                      "
                    />
                  </div>

                  {/* Bottom shine */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-lime-400 to-transparent transition-all duration-700 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================
            FOOTNOTE
        ========================================================== */}
        <div className="mt-8 flex justify-center">
          <div className="rounded-full border border-white/8 bg-white/[0.03] px-5 py-2.5 text-center text-[11px] leading-5 text-slate-500 backdrop-blur-xl">
            नागरिकका वास्तविक प्रतिक्रिया प्रकाशित गर्दा सम्बन्धित व्यक्तिको
            अनुमति र सत्यापन सुनिश्चित गर्नुहोस्।
          </div>
        </div>
      </div>

      {/* =========================================================
          ANIMATION
      ========================================================== */}
      <style>{`
        .public-opinion-track {
          animation: publicOpinionScroll 55s linear infinite;
        }

        .public-opinion-marquee:hover .public-opinion-track {
          animation-play-state: paused;
        }

        @keyframes publicOpinionScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .public-opinion-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
