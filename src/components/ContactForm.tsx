'use client';

import { useState, useRef } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      setStatus({ type: "error", message: "Please complete the CAPTCHA." });
      return;
    }

    setStatus({ type: "loading", message: "Sending..." });

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "mustafa@softalya.com",
          subject: `New Contact Form Message from ${formData.name}`,
          message: formData.message,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          captchaToken: captchaToken,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", phone: "", email: "", message: "" });
        setCaptchaToken(null);
        turnstileRef.current?.reset();
      } else {
        setStatus({ type: "error", message: result.error || "Failed to send message." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An error occurred. Please try again." });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-300" htmlFor="name">
            Full Name
          </label>
          <input
            className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
            type="text"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-300" htmlFor="phone">
            Phone
          </label>
          <input
            className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="(555) 123-4567"
            type="tel"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-300" htmlFor="email">
          Email
        </label>
        <input
          className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="you@example.com"
          type="email"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-300" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="How can we help you?"
          rows={4}
          required
        />
      </div>

      <div className="flex justify-center py-2">
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
          onSuccess={(token) => setCaptchaToken(token)}
          onExpire={() => setCaptchaToken(null)}
          onError={() => setCaptchaToken(null)}
          options={{
            theme: "dark",
          }}
        />
      </div>

      {status.type !== 'idle' && (
        <div className={`p-4 rounded-lg text-sm font-medium ${
          status.type === 'success' ? 'bg-green-500/10 text-green-500' :
          status.type === 'error' ? 'bg-red-500/10 text-red-500' :
          'bg-blue-500/10 text-blue-500'
        }`}>
          {status.message}
        </div>
      )}

      <button
        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        disabled={status.type === 'loading' || !captchaToken}
      >
        {status.type === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
