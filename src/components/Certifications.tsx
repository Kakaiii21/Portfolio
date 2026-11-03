import { useEffect, useState } from "react";
import { Award } from "lucide-react";
import Reveal from "./Reveal";

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

  useEffect(() => {
    if (!pinned) return;

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
  }, [pinned]);
    const activeTitle = hovered ?? pinned;
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
                        <img
                          src={image}
                          alt={`${title} certificate`}
                          className="mt-3 w-full rounded-xl border border-line"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Right: desktop-only preview panel */}
        <div
          data-cert-card
          className="relative hidden aspect-[3/2] w-full overflow-hidden rounded-2xl border border-line bg-line/40 lg:block"
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

          {!activeTitle && (
            <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-body">
              Hover or click a certificate to preview it here
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
);
}

export default Certifications;