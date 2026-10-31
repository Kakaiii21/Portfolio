import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-line bg-transparent px-4 py-3 text-text-body placeholder:text-body/60 transition-colors focus:border-[#26A641] focus:outline-none";

const iconLinkClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-full border border-text-body text-text-body hover:bg-body hover:cursor-pointer";

function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("botcheck")) return;

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: "New message from your portfolio",
          from_name: "Portfolio Contact Form",
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div id="contact" className="border border-line py-8  lg:py-16 flex flex-col mx-2 lg:mx-0">
      <div className="mx-2 mt-5 lg:mx-24 font-roboto">
        <p className="text-body">Contact</p>
        <p className="text-text-body lg:text-2xl font-google-sans font-bold">
          Let's build something.
        </p>
      </div>

      <div className="mx-2 mt-8 flex flex-col gap-8 lg:mx-24 lg:flex-row lg:gap-12">
        {/* Left: info */}
        <div className="flex flex-col gap-6 font-roboto lg:w-2/5">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-text-body">
            <span className="h-2 w-2 rounded-full bg-[#26A641]" />
            Open to opportunities
          </p>

          <p className="text-body">
            Open to full-time roles, contract work, and ambitious side projects. Tell me what
            you're shipping.
          </p>

          <ul className="space-y-3 text-text-body">
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=caseypdellamas@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 hover:underline"
              >
                <Mail size={18} />
                caseypdellamas@gmail.com
              </a>
            </li>
            <li className="inline-flex items-center gap-3">
              <MapPin size={18} />
              Manila, Philippines
            </li>
          </ul>

          <div className="flex gap-3">
            <a href="https://github.com/Kakaiii21" target="_blank" rel="noreferrer" aria-label="GitHub" className={iconLinkClass}>
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/casey-undefined-396b62446/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconLinkClass}>
              <FaLinkedin size={18} />
            </a>
          </div>
          
        </div>
        {/* Right: form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 space-y-5 rounded-2xl border border-line p-5 font-roboto sm:p-6"
        >
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-body">Name</label>
            <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-body">Email</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-body">Message</label>
            <textarea id="message" name="message" required rows={5} placeholder="Tell me about your project..." className={`${inputClass} resize-none`} />
          </div>

          <div className="flex items-center justify-between gap-4">
            <p role="status" className={`text-sm ${status === "error" ? "text-red-400" : "text-[#26A641]"}`}>
              {status === "success" && "Thanks! Your message is on its way."}
              {status === "error" && "Something went wrong. Please try again, or email me directly."}
            </p>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex hover:text-green-500 items-center gap-2 rounded-full border border-heading bg-heading px-5 py-2 font-google-sans text-page hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
              <Send size={16} />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default Contact;