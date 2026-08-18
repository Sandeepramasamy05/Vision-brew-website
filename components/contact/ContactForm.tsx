"use client";

import { useState } from "react";
import { projectTypes, site } from "@/lib/content";
import { Button } from "@/components/ui/Button";

type Fields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  purpose: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  purpose: "",
};

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter an email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "That email does not look valid.";
  if (!values.projectType) errors.projectType = "Select a project type.";
  if (!values.purpose.trim())
    errors.purpose = "Tell us which business this is for and why you need it.";
  else if (values.purpose.trim().length < 20)
    errors.purpose = "A few more sentences will help us prepare.";
  return errors;
}

const fieldClass =
  "w-full min-h-11 border border-line bg-ink px-4 py-3 text-sm text-mist placeholder:text-muted/60 transition-colors focus:border-teal focus:outline-none";

export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-line bg-charcoal p-8 md:p-12">
        <p className="text-[11px] uppercase tracking-[0.2em] text-teal">Preview</p>
        <h2 className="mt-4 font-display text-3xl tracking-tight text-mist md:text-4xl">
          Thank you, {values.name.split(" ")[0]}.
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
          This form is currently a preview and does not send your message yet. To reach
          VisionBrew now, email us directly at{" "}
          <a className="text-mist underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
        <div className="mt-8">
          <Button
            variant="secondary"
            onClick={() => {
              setValues(empty);
              setSubmitted(false);
            }}
          >
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" error={errors.name} htmlFor="name">
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={fieldClass}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </Field>
        <Field label="Company" htmlFor="company">
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className={fieldClass}
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
          />
        </Field>
        <Field label="Email" error={errors.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Project type" error={errors.projectType} htmlFor="projectType">
            <select
              id="projectType"
              name="projectType"
              className={`${fieldClass} appearance-none`}
              value={values.projectType}
              onChange={(e) => update("projectType", e.target.value)}
            >
              <option value="">Select</option>
              {projectTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </div>
      <Field label="What is this for?" error={errors.purpose} htmlFor="purpose">
        <textarea
          id="purpose"
          name="purpose"
          rows={6}
          className={`${fieldClass} min-h-[160px] resize-y`}
          placeholder="Which business is this for? Why do you need it now — what problem should the project solve?"
          value={values.purpose}
          onChange={(e) => update("purpose", e.target.value)}
        />
      </Field>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" className="w-full sm:w-auto">
          Send message
        </Button>
        <p className="text-xs text-muted">
          Form preview only. Please use {site.email} for now.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted">
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-xs text-teal-bright" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
