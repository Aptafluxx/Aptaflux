"use client";

import { useState, FormEvent } from "react";
import { Section, Eyebrow } from "./ui";
import { ArrowUpRight } from "lucide-react";

// Swap this for your Web3Forms or Formspree endpoint. For Web3Forms, keep
// the method as POST and add a hidden "access_key" input with your key. For
// Formspree, point this at https://formspree.io/f/{your_form_id}.
const FORM_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
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
    <Section id="contact" className="py-24 md:py-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div>
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="text-[32px] md:text-[38px] leading-[1.15] tracking-tightest font-semibold text-ink">
            Start a Project.
          </h2>
          <p className="mt-5 max-w-[380px] text-[15px] leading-[1.65] text-ink-dim">
            Tell us what you're building. We reply within one business day
            with next steps or a scoped estimate.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Full Name" name="name" required />
            <Field label="Work Email" name="email" type="email" required />
          </div>
          <Field label="Company Name" name="company" required />

          <label className="flex flex-col gap-2">
            <span className="text-[13px] text-ink-dim">Project Scope</span>
            <select
              name="scope"
              required
              defaultValue=""
              className="rounded-[4px] border border-line bg-surface px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-accent"
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="Mobile App">Mobile App</option>
              <option value="Web Platform">Web Platform</option>
              <option value="AI Integration">AI Integration</option>
              <option value="Full Stack">Full Stack</option>
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-[13px] text-ink-dim">Project Details</span>
            <textarea
              name="details"
              required
              rows={5}
              className="resize-none rounded-[4px] border border-line bg-surface px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-accent"
            />
          </label>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-[4px] bg-accent px-6 py-3.5 text-[15px] font-medium text-canvas transition-colors hover:bg-[#7AC8BF] disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Send to Aptaflux"}
            {status !== "submitting" && <ArrowUpRight size={16} />}
          </button>

          {status === "success" && (
            <p className="text-[14px] text-accent">
              Message sent. We'll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-[14px] text-red-400">
              Something went wrong. Please email aptaflux@gmail.com directly.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[13px] text-ink-dim">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-[4px] border border-line bg-surface px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-accent"
      />
    </label>
  );
}
