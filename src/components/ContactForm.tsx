"use client";

import { useState } from "react";

type Labels = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  agree: string;
  submit: string;
  submitting: string;
  success: string;
  error: string;
  required: string;
};

export function ContactForm({ labels }: { labels: Labels }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-cla-navy/10 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-cla-navy">
            {labels.name} <span className="text-cla-red">*</span>
          </span>
          <input
            name="name"
            required
            className="w-full rounded border border-cla-navy/20 px-3 py-2 outline-none focus:border-cla-red"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-cla-navy">
            {labels.email} <span className="text-cla-red">*</span>
          </span>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded border border-cla-navy/20 px-3 py-2 outline-none focus:border-cla-red"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1 block font-medium text-cla-navy">{labels.phone}</span>
        <input
          name="phone"
          className="w-full rounded border border-cla-navy/20 px-3 py-2 outline-none focus:border-cla-red"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block font-medium text-cla-navy">
          {labels.subject} <span className="text-cla-red">*</span>
        </span>
        <input
          name="subject"
          required
          className="w-full rounded border border-cla-navy/20 px-3 py-2 outline-none focus:border-cla-red"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block font-medium text-cla-navy">
          {labels.message} <span className="text-cla-red">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded border border-cla-navy/20 px-3 py-2 outline-none focus:border-cla-red"
        />
      </label>
      <label className="flex items-start gap-2 text-sm text-cla-slate">
        <input name="agree" type="checkbox" required className="mt-1" />
        <span>{labels.agree}</span>
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded bg-cla-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-cla-red-dark disabled:opacity-60"
      >
        {status === "loading" ? labels.submitting : labels.submit}
      </button>
      {status === "ok" && <p className="text-sm text-green-700">{labels.success}</p>}
      {status === "err" && <p className="text-sm text-red-700">{labels.error}</p>}
    </form>
  );
}
