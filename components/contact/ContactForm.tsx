"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactSubmissionSchema } from "@/lib/contact-validation";
import { site } from "@/content/site";

type ContactField = "name" | "email" | "projectSize" | "details";
type ContactStatus = "idle" | "sending" | "success" | "error";
type FieldErrors = Partial<Record<ContactField, string>>;

function getFieldErrors(issues: { message: string; path: PropertyKey[] }[]) {
  const errors: FieldErrors = {};

  for (const issue of issues) {
    const field = issue.path[0];
    if (
      (field === "name" ||
        field === "email" ||
        field === "projectSize" ||
        field === "details") &&
      !errors[field]
    ) {
      errors[field] = issue.message;
    }
  }

  return errors;
}

export function ContactForm() {
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [detailsLength, setDetailsLength] = useState(0);
  const { contact } = site;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const submission = contactSubmissionSchema.safeParse({
      ...Object.fromEntries(formData.entries()),
      services: selectedServices,
    });

    if (!submission.success) {
      setFieldErrors(getFieldErrors(submission.error.issues));
      setStatus("idle");
      const firstInvalidField = submission.error.issues.find(
        ({ path }) =>
          path[0] === "name" ||
          path[0] === "email" ||
          path[0] === "projectSize" ||
          path[0] === "details",
      )?.path[0];
      if (
        firstInvalidField === "name" ||
        firstInvalidField === "email" ||
        firstInvalidField === "projectSize" ||
        firstInvalidField === "details"
      ) {
        document.getElementById(firstInvalidField)?.focus();
      }
      return;
    }

    setFieldErrors({});
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission.data),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setSelectedServices([]);
      setDetailsLength(0);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        aria-live="polite"
        className="flex flex-col items-center py-10 text-center"
        role="status"
      >
        <span className="flex size-16 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CircleCheck aria-hidden="true" size={34} strokeWidth={1.8} />
        </span>
        <h3 className="mt-5 font-body text-h3 font-extrabold">
          {contact.successTitle}
        </h3>
        <p className="mt-2 text-body text-muted">{contact.successText}</p>
        <Button
          className="mt-6 !min-h-11 !rounded-full"
          onClick={() => setStatus("idle")}
          variant="ghost"
        >
          {contact.sendAnother}
        </Button>
      </div>
    );
  }

  const errorClass = "mt-2 text-small leading-relaxed text-error";
  const inputClass = "contact-field w-full";

  return (
    <form
      aria-label={contact.formLabel}
      className="mt-6 space-y-5"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">{contact.fields.honeypot}</label>
        <input
          autoComplete="off"
          id="website"
          name="website"
          tabIndex={-1}
          type="text"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            className="mb-2 block text-[14px] font-semibold"
            htmlFor="name"
          >
            {contact.fields.name}{" "}
            <span aria-hidden="true" className="text-accent">
              {contact.requiredMark}
            </span>
          </label>
          <input
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-required="true"
            autoComplete="name"
            className={inputClass}
            id="name"
            name="name"
            type="text"
          />
          {fieldErrors.name ? (
            <p className={errorClass} id="name-error">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            className="mb-2 block text-[14px] font-semibold"
            htmlFor="email"
          >
            {contact.fields.email}{" "}
            <span aria-hidden="true" className="text-accent">
              {contact.requiredMark}
            </span>
          </label>
          <input
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-required="true"
            autoComplete="email"
            className={inputClass}
            id="email"
            name="email"
            type="email"
          />
          {fieldErrors.email ? (
            <p className={errorClass} id="email-error">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
      </div>

      <fieldset
        aria-labelledby="services-legend"
        className="min-w-0"
        role="group"
      >
        <legend
          className="mb-3 text-[14px] font-semibold"
          id="services-legend"
        >
          {contact.fields.services}
        </legend>
        <div className="flex flex-wrap gap-2">
          {contact.servicesOptions.map((option) => {
            const isSelected = selectedServices.includes(option);
            return (
              <button
                aria-pressed={isSelected}
                className={`inline-flex h-11 items-center gap-2 rounded-full border px-4 text-small transition-colors ${
                  isSelected
                    ? "border-accent bg-accent text-brand-fg"
                    : "border-fg/[0.32] text-fg/90 hover:border-accent"
                }`}
                key={option}
                onClick={() =>
                  setSelectedServices((current) =>
                    isSelected
                      ? current.filter((value) => value !== option)
                      : [...current, option],
                  )
                }
                type="button"
              >
                {isSelected ? (
                  <Check aria-hidden="true" size={16} strokeWidth={2.5} />
                ) : null}
                {option}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label
          className="mb-2 block text-[14px] font-semibold"
          htmlFor="projectSize"
        >
          {contact.fields.projectSize}
        </label>
        <div className="relative">
          <select
            aria-describedby={
              fieldErrors.projectSize ? "projectSize-error" : undefined
            }
            aria-invalid={Boolean(fieldErrors.projectSize)}
            className={`${inputClass} appearance-none pr-11`}
            defaultValue=""
            id="projectSize"
            name="projectSize"
          >
            <option className="bg-input" value="">
              {contact.projectSizePlaceholder}
            </option>
            {contact.projectSizeOptions.map((option) => (
              <option className="bg-input" key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
            size={18}
          />
        </div>
        {fieldErrors.projectSize ? (
          <p className={errorClass} id="projectSize-error">
            {fieldErrors.projectSize}
          </p>
        ) : null}
      </div>

      <div>
        <label className="mb-2 block text-[14px] font-semibold" htmlFor="details">
          {contact.fields.details}{" "}
          <span aria-hidden="true" className="text-accent">
            {contact.requiredMark}
          </span>
        </label>
        <div className="relative">
          <textarea
            aria-describedby={`details-count${fieldErrors.details ? " details-error" : ""}`}
            aria-invalid={Boolean(fieldErrors.details)}
            aria-required="true"
            className="contact-field contact-textarea w-full"
            id="details"
            name="details"
            onChange={(event) =>
              setDetailsLength(event.currentTarget.value.length)
            }
            rows={4}
          />
          <p
            aria-label={contact.detailsCounterLabel}
            aria-live="polite"
            className="absolute bottom-3 right-4 text-small text-muted"
            id="details-count"
            role="status"
          >
            {detailsLength} / {contact.detailsMaxLength}
          </p>
        </div>
        {fieldErrors.details ? (
          <p className={errorClass} id="details-error">
            {fieldErrors.details}
          </p>
        ) : null}
      </div>

      <div aria-live="polite" className="min-h-6" role="status">
        {status === "error" ? (
          <div className={errorClass} role="alert">
            <p>{contact.error}</p>
            <p className="mt-1">
              {contact.errorContact}{" "}
              <a
                className="underline underline-offset-4 hover:text-fg"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </p>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
        <Button
          className="!h-[52px] !min-h-[52px] w-full !rounded-full text-body md:w-auto"
          disabled={status === "sending"}
          type="submit"
        >
          {status === "sending"
            ? contact.submitting
            : status === "error"
              ? contact.retry
              : contact.submit}
          <ArrowRight aria-hidden="true" size={18} />
        </Button>
        <p className="flex items-center justify-center gap-2 text-small text-muted md:justify-start">
          <Mail aria-hidden="true" size={17} />
          {contact.trustText}
        </p>
      </div>
    </form>
  );
}
