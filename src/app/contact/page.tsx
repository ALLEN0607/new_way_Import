"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    setStatus("idle");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setStatus(res.ok ? "ok" : "err");
    e.currentTarget.reset();
  }

  return (
    <section className="mx-auto max-w-lg px-4 py-12">
      <h1 className="mb-6 text-center text-3xl font-bold">Contact Us</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-2xl bg-white p-6 shadow"
      >
        {/* Name */}
        <input
          name="name"
          placeholder="Name"
          required
          className="w-full rounded-md border border-gray-300 p-3
                     text-gray-900 placeholder-gray-400
                     focus:border-orange-500 focus:outline-none
                     focus:ring-2 focus:ring-orange-500"
        />

        {/* Email */}
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full rounded-md border border-gray-300 p-3
                     text-gray-900 placeholder-gray-400
                     focus:border-orange-500 focus:outline-none
                     focus:ring-2 focus:ring-orange-500"
        />

        {/* Phone */}
        <input
          name="phone"
          placeholder="Phone (optional)"
          className="w-full rounded-md border border-gray-300 p-3
                     text-gray-900 placeholder-gray-400
                     focus:border-orange-500 focus:outline-none
                     focus:ring-2 focus:ring-orange-500"
        />

        {/* Message */}
        <textarea
          name="message"
          rows={4}
          placeholder="Message"
          required
          className="w-full rounded-md border border-gray-300 p-3
                     text-gray-900 placeholder-gray-400 resize-none
                     focus:border-orange-500 focus:outline-none
                     focus:ring-2 focus:ring-orange-500"
        />

        {/* Submit button */}
        <button
          className="w-full rounded-md bg-orange-600 p-3 font-medium text-white
                     hover:bg-orange-700 active:bg-orange-800
                     focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Send
        </button>

        {/* Status message */}
        {status === "ok" && (
          <p className="text-center text-green-600">✓ Message sent!</p>
        )}
        {status === "err" && (
          <p className="text-center text-red-600">
            ✗ Failed — please try again.
          </p>
        )}
      </form>
    </section>
  );
}
