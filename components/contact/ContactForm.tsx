"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { contactSubmissionSchema } from "@/lib/contact-validation";
import { site } from "@/content/site";

type ContactField = "name" | "email" | "budget" | "details";
type ContactStatus = "idle" | "sending" | "success" | "error";
type FieldErrors = Partial<Record<ContactField, string>>;

function getFieldErrors(issues: { message: string; path: PropertyKey[] }[]) {
  const errors: FieldErrors = {};

  for (const issue of issues) {
    const field = issue.path[0];
    if (
      (field === "name" ||
        field === "email" ||
        field === "budget" ||
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
  const { contact } = site;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const submission = contactSubmissionSchema.safeParse(
      Object.fromEntries(formData.entries()),
    );

    if (!submission.success) {
      setFieldErrors(getFieldErrors(submission.error.issues));
      setStatus("idle");
      const firstInvalidField = submission.error.issues.find(
        ({ path }) =>
          path[0] === "name" ||
          path[0] === "email" ||
          path[0] === "budget" ||
          path[0] === "details",
      )?.path[0];
      if (
        firstInvalidField === "name" ||
        firstInvalidField === "email" ||
        firstInvalidField === "budget" ||
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
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div aria-live="polite" className="border-y border-line py-8" role="status">
        <p className="text-body leading-relaxed">{contact.success}</p>
      </div>
    );
  }

  const errorClass = "mt-2 text-small leading-relaxed text-ember";
  const inputClass =
    "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-body text-text focus:border-ember";

  return (
    <form className="space-y-7" noValidate onSubmit={handleSubmit}>
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

      <div>
        <label className="mb-2 block text-small" htmlFor="name">
          {contact.fields.name}
        </label>
        <input
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
          aria-invalid={Boolean(fieldErrors.name)}
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
        <label className="mb-2 block text-small" htmlFor="email">
          {contact.fields.email}
        </label>
        <input
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
          aria-invalid={Boolean(fieldErrors.email)}
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

      <div>
        <label className="mb-2 block text-small" htmlFor="budget">
          {contact.fields.budget}
        </label>
        <select
          aria-describedby={fieldErrors.budget ? "budget-error" : undefined}
          aria-invalid={Boolean(fieldErrors.budget)}
          className={inputClass}
          defaultValue=""
          id="budget"
          name="budget"
        >
          <option className="bg-bg" disabled value="">
            {contact.budgetPlaceholder}
          </option>
          {contact.budgetOptions.map((option) => (
            <option className="bg-bg" key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {fieldErrors.budget ? (
          <p className={errorClass} id="budget-error">
            {fieldErrors.budget}
          </p>
        ) : null}
      </div>

      <div>
        <label className="mb-2 block text-small" htmlFor="details">
          {contact.fields.details}
        </label>
        <textarea
          aria-describedby={fieldErrors.details ? "details-error" : undefined}
          aria-invalid={Boolean(fieldErrors.details)}
          className={`${inputClass} min-h-32 resize-y`}
          id="details"
          name="details"
          rows={4}
        />
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
                className="underline underline-offset-4 hover:text-text"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </p>
          </div>
        ) : null}
      </div>

      <Button
        disabled={status === "sending"}
        type="submit"
        className="min-w-36 text-body"
      >
        {status === "sending"
          ? contact.submitting
          : status === "error"
            ? contact.retry
            : contact.submit}
      </Button>
    </form>
  );
}
