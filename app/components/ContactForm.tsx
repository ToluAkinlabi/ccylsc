"use client";

import { useState } from "react";

const fieldStyle: React.CSSProperties = {
  padding: 12,
  borderRadius: 8,
  border: "1px solid #e6e9ef",
  fontSize: 15,
  transition: "border-color 0.2s, box-shadow 0.2s",
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://formspree.io/f/mnjjaobw", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setShowSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        setShowError(true);
        setIsSubmitting(false);
      }
    } catch (error) {
      setShowError(true);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {showSuccess && (
        <div
          style={{
            marginBottom: 16,
            padding: 12,
            background: "#d4edda",
            borderRadius: 8,
            border: "1px solid #c3e6cb",
            color: "#155724",
            fontSize: 14,
          }}
        >
          ✓ Your message has been sent successfully!
        </div>
      )}

      {showError && (
        <div
          style={{
            marginBottom: 16,
            padding: 12,
            background: "#f8d7da",
            borderRadius: 8,
            border: "1px solid #f5c6cb",
            color: "#721c24",
            fontSize: 14,
          }}
        >
          ✕ There was an error sending your message. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ maxWidth: 520 }}>
        <div style={{ display: "grid", gap: 12 }}>
          <input name="name" placeholder="Your name" required style={fieldStyle} />
          <input name="email" type="email" placeholder="Your email" required style={fieldStyle} />
          <textarea name="message" placeholder="Message" rows={5} required style={fieldStyle} />
          <button
            type="submit"
            disabled={isSubmitting}
            className="cta"
            style={{
              width: "fit-content",
              opacity: isSubmitting ? 0.6 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {isSubmitting ? (
              <>
                <span
                  style={{
                    display: "inline-block",
                    width: 14,
                    height: 14,
                    border: "2px solid #fff",
                    borderTop: "2px solid transparent",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                  }}
                />
                Sending...
              </>
            ) : (
              "Send"
            )}
          </button>
        </div>
      </form>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
