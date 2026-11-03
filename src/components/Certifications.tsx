
import Reveal from "./Reveal";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Award, X } from "lucide-react";
type Certification = {
  title: string;
  issuer: string;
  instructor: string;
  completed: string;
  image?: string;
};

const certifications: Certification[] = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    instructor: "Airon Prince Beltran",
    completed: "29 Nov 2022",
    image: "/certs/intro-cybersecurity.png",
  },
  {
    title: "JavaScript Essentials 1 (JSE)",
    issuer: "Cisco Networking Academy",
    instructor: "Raechel Ann Capiz",
    completed: "27 Mar 2026",
    image: "/certs/javascript-essentials-1.png",
  },
];

function Certifications() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const [zoomed, setZoomed] = useState<string | null>(null); // moved up

  const activeTitle = hovered ?? pinned;
  const zoomedCert = certifications.find((c) => c.title === zoomed);

  useEffect(() => {
    if (!pinned || zoomed) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPinned(null);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (!(e.target as HTMLElement).closest("[data-cert-card]")) {
        setPinned(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [pinned, zoomed]); 


  useEffect(() => {
    if (!zoomed) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomed(null);
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [zoomed]);


return (
  <div id="certifications" className="border border-line py-8 lg:py-16 flex mx-2 lg:mx-0">
    <div className="flex-1 mx-2 mt-5 lg:mx-24 font-roboto">
      <Reveal><p className="text-body">Certifications</p></Reveal>
      <Reveal>
        <p className="text-text-body lg:text-2xl font-google-sans font-bold">
          Certifications & Training
        </p>
      </Reveal>

      <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-start">
        {/* Left: the cards (each one carries its own mobile preview) */}
        <div className="flex flex-col gap-4">
          {certifications.map(({ title, issuer, instructor, completed, image }) => {
            const isPinned = pinned === title;

            return (
              <Reveal key={title}>
                <div data-cert-card>
                  <button
                    type="button"
                    aria-pressed={isPinned}
                    onClick={() => setPinned(isPinned ? null : title)}
                    onPointerEnter={(e) => {
                      if (e.pointerType === "mouse") setHovered(title);
                    }}
                    onPointerLeave={(e) => {
                      if (e.pointerType === "mouse") setHovered(null);
                    }}
                    className={`flex w-full cursor-pointer flex-col gap-3 rounded-2xl border p-5 text-left text-text-body transition-transform duration-200 hover:-translate-y-1 ${
                      isPinned ? "border-[#56D364]" : "border-line"
                    }`}
                  >
                    <span className="flex items-start gap-3">
                      <Award size={22} className="mt-1 shrink-0 text-[#56D364]" />
                      <span>
                        <span className="block font-roboto text-lg font-bold">{title}</span>
                        <span className="block text-body">{issuer}</span>
                      </span>
                    </span>

                    <span className="block border-t border-line pt-3 text-sm text-body">
                      <span className="block">Instructor: {instructor}</span>
                      <span className="block">Completed: {completed}</span>
                      {image && (
                        <span className="mt-2 block text-xs">
                          <span className="hidden lg:inline">
                            {isPinned ? "Pinned · click to close" : "Hover to preview · click to pin"}
                          </span>
                          <span className="lg:hidden">
                            {isPinned ? "Tap to close" : "Tap to view certificate"}
                          </span>
                        </span>
                      )}
                    </span>
                  </button>

                  {/* Mobile-only preview, directly below this card */}
                  {image && (
                    <div
                      aria-hidden={!isPinned}
                      className={`grid transition-[grid-template-rows] duration-300 lg:hidden ${
                        isPinned ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                    <div className="overflow-hidden">
                    <button
                        type="button"
                        tabIndex={isPinned ? 0 : -1}
                        onClick={() => setZoomed(title)}
                        className="relative mt-3 block w-full cursor-zoom-in"
                    >
                        <img
                        src={image}
                        alt={`${title} certificate`}
                        className="w-full rounded-xl border border-line"
                        />
                        <span className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
                        Tap to enlarge
                        </span>
                    </button>
                    </div>

                    </div>

                    
                  )}
                </div>
    {zoomedCert?.image &&
        createPortal(
            <div
            data-cert-card
            role="dialog"
            aria-modal="true"
            aria-label={`${zoomedCert.title} certificate`}
            onClick={() => setZoomed(null)}
            className="fixed inset-0 z-50 bg-black/85"
            >
            <button
                type="button"
                aria-label="Close"
                onClick={() => setZoomed(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            >
                <X size={24} />
            </button>

            <div className="flex h-full w-full items-center overflow-auto p-4 sm:justify-center">
                <img
                src={zoomedCert.image}
                alt={`${zoomedCert.title} certificate`}
                onClick={(e) => e.stopPropagation()}
                className="w-[900px] max-w-none shrink-0 rounded-lg sm:max-h-full sm:w-auto sm:max-w-full sm:object-contain"
                />
            </div>
            </div>,
            document.body
        )}
              </Reveal>
            );
          })}
        </div>

        {/* Right: desktop-only preview panel */}
<button
  type="button"
  data-cert-card
  disabled={!activeTitle}
  onClick={() => activeTitle && setZoomed(activeTitle)}
  className="relative hidden aspect-[3/2] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-line bg-line/40 disabled:cursor-default lg:block"
>
  {certifications.map(({ title, image }) =>
    image ? (
      <img
        key={title}
        src={image}
        alt={`${title} certificate`}
        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-200 ${
          activeTitle === title ? "opacity-100" : "opacity-0"
        }`}
      />
    ) : null
  )}

  {activeTitle ? (
    <span className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
      Click to enlarge
    </span>
  ) : (
    <span className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-body">
      Hover or click a certificate to preview it here
    </span>
  )}
</button>
      </div>
    </div>
  </div>
);
}

export default Certifications;