"use client";
import { sendEmail } from "@/app/actions";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) return; // If honeypot is filled, silently reject the submission

    setIsSubmitting(true);
    try {
      const result = await sendEmail({ name, email, message });

      if (result.success) {
        setSubmitStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact">
      <h2 className="font-inter-tight text-lg font-semibold text-primary-light dark:text-primary-dark mb-6">
        Let's Connect
      </h2>
      <div className="p-5 rounded-xl bg-card-light dark:bg-card-dark">
        <form onSubmit={handleSubmit}>
          {/* Name input */}
          <div className="mb-4">
            <input
              className="w-full p-2 text-sm bg-cardAlt-light dark:bg-cardAlt-dark text-text-light dark:text-text-dark placeholder:text-textSecondary-light dark:placeholder:text-textSecondary-dark rounded-lg focus:ring-2 ring-primary-light dark:ring-primary-dark"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email input */}
          <div className="mb-4">
            <input
              className="w-full p-2 text-sm bg-cardAlt-light dark:bg-cardAlt-dark text-text-light dark:text-text-dark placeholder:text-textSecondary-light dark:placeholder:text-textSecondary-dark rounded-lg focus:ring-2 ring-primary-light dark:ring-primary-dark"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
            />
          </div>

          {/* Message input */}
          <div className="mb-4">
            <textarea
              className="w-full p-2 text-sm bg-cardAlt-light dark:bg-cardAlt-dark text-text-light dark:text-text-dark placeholder:text-textSecondary-light dark:placeholder:text-textSecondary-dark rounded-lg focus:ring-2 ring-primary-light dark:ring-primary-dark"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              rows={4}
              required
            ></textarea>
          </div>

          {/* Honeypot field */}
          <div className="hidden">
            <input
              type="text"
              name="honeypot"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-sm text-white bg-primary-light hover:bg-primary-light/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90 shadow relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.2)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
          >
            Get In Touch
          </button>
        </form>
      </div>
    </section>
  );
}
