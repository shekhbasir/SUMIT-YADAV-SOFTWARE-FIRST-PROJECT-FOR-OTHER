import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  LoaderCircle,
  Share2,
  Users,
  X,
} from "lucide-react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import movementApi from "../../api/movementApi";

import MovementCertificate from "../certificate/MovementCertificate";

export default function JoinMovementModal({ isOpen, onClose }) {
  const certificateRef = useRef(null);

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [downloading, setDownloading] = useState(false);

  const [error, setError] = useState("");

  const [member, setMember] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    mobile: "",
    address: "",
    ward: "",
  });

  useEffect(() => {
    if (!isOpen) return;

    setStep(1);

    setError("");

    setMember(null);

    setLoading(false);

    setDownloading(false);

    setFormData({
      name: "",
      age: "",
      mobile: "",
      address: "",
      ward: "",
    });
  }, [isOpen]);

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    setError("");

    if (step === 1 && !formData.name.trim()) {
      setError("Please enter your full name.");

      return;
    }

    if (step === 2 && (!formData.age || Number(formData.age) < 16)) {
      setError("Please enter a valid age.");

      return;
    }

    if (
      step === 3 &&
      (!formData.mobile.trim() || formData.mobile.trim().length < 8)
    ) {
      setError("Please enter a valid mobile number.");

      return;
    }

    if (step === 4 && (!formData.address.trim() || !formData.ward)) {
      setError("Please complete address and ward details.");

      return;
    }

    setStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setError("");

    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      setError("");

      const response = await movementApi.post("/movement/join", {
        name: formData.name.trim(),

        age: Number(formData.age),

        mobile: formData.mobile.trim(),

        address: formData.address.trim(),

        ward: String(formData.ward),
      });

      const data = response.data;

      if (!data?.success) {
        throw new Error(data?.message || "Unable to join movement.");
      }

      /*
       IMPORTANT:
       Certificate हमेशा इसी newly created
       member का data use करेगा.
      */

      const actualMember = {
        ...data.member,

        name: data.member?.name || formData.name.trim(),

        ward: data.member?.ward ?? formData.ward,

        age: data.member?.age ?? Number(formData.age),

        mobile: data.member?.mobile || formData.mobile.trim(),

        address: data.member?.address || formData.address.trim(),
      };

      setMember(actualMember);

      setStep(6);
    } catch (error) {
      console.error("JOIN MOVEMENT ERROR:", error);

      setError(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const downloadCertificate = async () => {
    if (!certificateRef.current || !member) {
      alert("Certificate is not ready yet.");
      return;
    }

    try {
      setDownloading(true);

      // Give the certificate a moment to finish rendering.
      await new Promise((resolve) => setTimeout(resolve, 500));

      const certificateElement = certificateRef.current;

      // Capture the exact visible certificate at high quality.
      const canvas = await html2canvas(certificateElement, {
        scale: Math.max(2, Math.min(3, window.devicePixelRatio || 2)),
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#fffdf5",
        logging: false,
        imageTimeout: 15000,
        removeContainer: true,
      });

      if (!canvas.width || !canvas.height) {
        throw new Error("Certificate canvas is empty.");
      }

      const imageData = canvas.toDataURL("image/png", 1.0);

      if (!imageData || imageData === "data:,") {
        throw new Error("Unable to create certificate image.");
      }

      // Use millimeters instead of browser pixels so jsPDF can
      // generate a stable PDF across Chrome, Edge and mobile browsers.
      const pdfWidth = 280;
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      const pdf = new jsPDF({
        orientation: canvas.width >= canvas.height ? "landscape" : "portrait",
        unit: "mm",
        format: [pdfWidth, pdfHeight],
        compress: true,
      });

      pdf.addImage(
        imageData,
        "PNG",
        0,
        0,
        pdfWidth,
        pdfHeight,
        undefined,
        "FAST",
      );

      const safeName =
        (member.name || "movement-member")
          .trim()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "") || "movement-member";

      pdf.save(`${safeName}-Movement-Certificate.pdf`);
    } catch (error) {
      console.error("CERTIFICATE DOWNLOAD ERROR:", error);

      alert(
        "Certificate download failed. Please refresh the page and try again.",
      );
    } finally {
      setDownloading(false);
    }
  };

  const shareMovement = async () => {
    const shareData = {
      title: "Bishrampur Movement Campaign",

      text: `I have joined the Bishrampur Movement Campaign! My Movement ID is ${member?.movementId || ""}.`,

      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(
          `${shareData.text}\n${shareData.url}`,
        );

        alert("Movement details copied to clipboard!");
      }
    } catch (error) {
      console.error("Share error:", error);
    }
  };

  const closeModal = () => {
    if (loading || downloading) return;

    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-3 backdrop-blur-md md:p-6"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 30,
            scale: 0.97,
          }}
          transition={{
            duration: 0.3,
          }}
          className="relative my-auto w-full max-w-3xl overflow-hidden rounded-[30px] border border-white/10 bg-[#07120d] text-white shadow-2xl"
        >
          {/* Close */}

          <button
            onClick={closeModal}
            className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-red-500/20 hover:text-red-300"
          >
            <X size={20} />
          </button>

          {/* HEADER */}

          {step < 6 && (
            <div className="border-b border-white/10 px-6 pb-5 pt-7 md:px-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400">
                  <Users size={23} />
                </div>

                <div>
                  <h2 className="text-xl font-black">Join the Movement</h2>

                  <p className="text-xs text-slate-400">
                    Bishrampur Gaunpalika 2084
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Step {step} of 5</span>

                  <span>{step * 20}%</span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    animate={{
                      width: `${step * 20}%`,
                    }}
                    className="h-full rounded-full bg-lime-400"
                  />
                </div>
              </div>
            </div>
          )}

          {/* FORM */}

          {step < 6 && (
            <div className="p-6 md:p-10">
              {/* STEP 1 */}

              {step === 1 && (
                <div>
                  <p className="text-sm text-lime-400">Step 1</p>

                  <h3 className="mt-2 text-2xl font-black">
                    What is your name?
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Enter your full name exactly as you want it to appear on
                    your certificate.
                  </p>

                  <input
                    autoFocus
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-7 h-14 w-full rounded-2xl border border-white/10 bg-black/20 px-5 text-sm outline-none transition focus:border-lime-400/60"
                  />
                </div>
              )}

              {/* STEP 2 */}

              {step === 2 && (
                <div>
                  <p className="text-sm text-lime-400">Step 2</p>

                  <h3 className="mt-2 text-2xl font-black">Your age</h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Please enter your current age.
                  </p>

                  <input
                    autoFocus
                    type="number"
                    min="16"
                    max="120"
                    value={formData.age}
                    onChange={(e) => updateField("age", e.target.value)}
                    placeholder="Enter your age"
                    className="mt-7 h-14 w-full rounded-2xl border border-white/10 bg-black/20 px-5 text-sm outline-none transition focus:border-lime-400/60"
                  />
                </div>
              )}

              {/* STEP 3 */}

              {step === 3 && (
                <div>
                  <p className="text-sm text-lime-400">Step 3</p>

                  <h3 className="mt-2 text-2xl font-black">Mobile number</h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Your number will be securely stored with your movement
                    registration.
                  </p>

                  <input
                    autoFocus
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => updateField("mobile", e.target.value)}
                    placeholder="Enter mobile number"
                    className="mt-7 h-14 w-full rounded-2xl border border-white/10 bg-black/20 px-5 text-sm outline-none transition focus:border-lime-400/60"
                  />
                </div>
              )}

              {/* STEP 4 */}

              {step === 4 && (
                <div className="space-y-5">
                  <div>
                    <p className="text-sm text-lime-400">Step 4</p>

                    <h3 className="mt-2 text-2xl font-black">Your location</h3>

                    <p className="mt-2 text-sm text-slate-400">
                      Enter your address and ward number.
                    </p>
                  </div>

                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => updateField("address", e.target.value)}
                    placeholder="Enter your address"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-black/20 px-5 text-sm outline-none transition focus:border-lime-400/60"
                  />

                  <select
                    value={formData.ward}
                    onChange={(e) => updateField("ward", e.target.value)}
                    className="h-14 w-full rounded-2xl border border-white/10 bg-black/20 px-5 text-sm text-white outline-none transition focus:border-lime-400/60"
                  >
                    <option value="" className="bg-[#07120d]">
                      Select Ward Number
                    </option>

                    {[1, 2, 3, 4, 5, 6, 7].map((number) => (
                      <option
                        key={number}
                        value={number}
                        className="bg-[#07120d]"
                      >
                        Ward No. {number}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* STEP 5 */}

              {step === 5 && (
                <div>
                  <p className="text-sm text-lime-400">Step 5</p>

                  <h3 className="mt-2 text-2xl font-black">
                    Confirm your details
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Please verify everything before joining.
                  </p>

                  <div className="mt-7 space-y-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-slate-500">Full Name</p>

                      <p className="mt-1 font-bold">{formData.name}</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-slate-500">Age</p>

                      <p className="mt-1 font-bold">{formData.age}</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-slate-500">Mobile</p>

                      <p className="mt-1 font-bold">{formData.mobile}</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-slate-500">Address</p>

                      <p className="mt-1 font-bold">{formData.address}</p>
                    </div>

                    <div className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-4">
                      <p className="text-xs text-slate-500">Ward</p>

                      <p className="mt-1 font-bold text-lime-400">
                        Ward No. {formData.ward}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ERROR */}

              {error && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  {error}
                </motion.div>
              )}

              {/* ACTIONS */}

              <div className="mt-8 flex items-center justify-between gap-4">
                {step > 1 ? (
                  <button
                    onClick={previousStep}
                    disabled={loading}
                    className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/5"
                  >
                    <ArrowLeft size={17} />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 5 ? (
                  <button
                    onClick={nextStep}
                    className="flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 text-sm font-black text-black transition hover:scale-105"
                  >
                    Continue
                    <ArrowRight size={17} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 text-sm font-black text-black transition hover:scale-105 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <LoaderCircle size={17} className="animate-spin" />
                        Joining...
                      </>
                    ) : (
                      <>
                        <Check size={17} />
                        Join Movement
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* SUCCESS + CERTIFICATE */}

          {step === 6 && member && (
            <div className="p-4 md:p-8">
              <div className="mb-7 text-center">
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lime-400 text-black"
                >
                  <Check size={42} />
                </motion.div>

                <h2 className="mt-5 text-3xl font-black">
                  Welcome to the Movement!
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Your registration was successful.
                </p>

                <div className="mx-auto mt-5 inline-block rounded-2xl border border-lime-400/30 bg-lime-400/10 px-5 py-3">
                  <p className="text-xs text-slate-400">Your Movement ID</p>

                  <p className="mt-1 font-black text-lime-400">
                    {member.movementId}
                  </p>
                </div>
              </div>

              {/* IMPORTANT:
                  SAME visible certificate gets downloaded
              */}

              <div className="overflow-hidden rounded-3xl">
                <MovementCertificate ref={certificateRef} member={member} />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  onClick={downloadCertificate}
                  disabled={downloading}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-lime-400 px-5 py-4 font-black text-black transition hover:scale-[1.02] disabled:opacity-60"
                >
                  {downloading ? (
                    <>
                      <LoaderCircle size={19} className="animate-spin" />
                      Preparing...
                    </>
                  ) : (
                    <>
                      <Download size={19} />
                      Download Certificate
                    </>
                  )}
                </button>

                <button
                  onClick={shareMovement}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-bold transition hover:bg-white/10"
                >
                  <Share2 size={19} />
                  Share Movement
                </button>
              </div>

              <button
                onClick={closeModal}
                className="mt-5 w-full rounded-xl py-3 text-sm text-slate-400 transition hover:text-white"
              >
                Close
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
