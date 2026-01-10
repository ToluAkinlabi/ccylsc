"use client";

import { useState } from "react";

interface JobApplicationFormProps {
  jobTitle: string;
}

const fieldStyle: React.CSSProperties = {
  padding: 14,
  borderRadius: 8,
  border: "1px solid #e6e9ef",
  width: "100%",
  fontSize: 15,
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "grid",
  gap: 8,
  fontSize: 15,
  fontWeight: 600,
  color: "#333",
};

export default function JobApplicationForm({ jobTitle }: JobApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://formspree.io/f/mdaanevb", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 2000);
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
            marginBottom: 24,
            padding: 16,
            background: "#d4edda",
            borderRadius: 8,
            border: "1px solid #c3e6cb",
            color: "#155724",
          }}
        >
          ✓ Your application has been submitted successfully! Redirecting...
        </div>
      )}

      {showError && (
        <div
          style={{
            marginBottom: 24,
            padding: 16,
            background: "#f8d7da",
            borderRadius: 8,
            border: "1px solid #f5c6cb",
            color: "#721c24",
          }}
        >
          ✕ There was an error submitting your application. Please try again.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        style={{
          display: "grid",
          gap: 20,
          maxWidth: 800,
          background: "#fff",
          padding: 32,
          borderRadius: 12,
          border: "1px solid #e6e9ef",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Position being applied for */}
        <input type="hidden" name="position" value={jobTitle} />

        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <input name="first_name" placeholder="First name *" required style={fieldStyle} />
          <input name="last_name" placeholder="Last name *" required style={fieldStyle} />
        </div>

        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <input type="email" name="email" placeholder="Email *" required style={fieldStyle} />
          <input name="phone" placeholder="Phone *" required style={fieldStyle} />
        </div>

        <input name="address1" placeholder="Address line 1" style={fieldStyle} />
        <input name="address2" placeholder="Address line 2 (optional)" style={fieldStyle} />

        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          <input name="city" placeholder="City" style={fieldStyle} />
          <input name="state" placeholder="State" style={fieldStyle} />
          <input name="zip" placeholder="ZIP" style={fieldStyle} />
        </div>

        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <input name="linkedin" placeholder="LinkedIn URL (optional)" style={fieldStyle} />
          <input name="website" placeholder="Portfolio/Website (optional)" style={fieldStyle} />
        </div>

        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <label style={labelStyle}>
            Work authorization *
            <select name="work_authorization" required style={fieldStyle}>
              <option value="">Select</option>
              <option>Citizen</option>
              <option>Permanent Resident</option>
              <option>Visa Holder</option>
              <option>Other</option>
            </select>
          </label>
          <label style={labelStyle}>
            Background check consent *
            <select name="background_check" required style={fieldStyle}>
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>
        </div>

        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <label style={labelStyle}>
            Earliest start date *
            <input type="date" name="start_date" required style={fieldStyle} />
          </label>
          <label style={labelStyle}>
            Desired schedule *
            <select name="schedule" required style={fieldStyle}>
              <option value="">Select</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
              <option>Volunteer</option>
            </select>
          </label>
        </div>

        <label style={labelStyle}>
          Cover letter
          <textarea name="cover_letter" rows={6} placeholder="Optional but recommended" style={fieldStyle} />
        </label>

        <label style={labelStyle}>
          Resume (PDF/DOC)
          <input type="file" name="resume" accept=".pdf,.doc,.docx" style={fieldStyle} />
        </label>

        <label style={labelStyle}>
          References (names and contact info)
          <textarea name="references" rows={4} style={fieldStyle} />
        </label>

        <label style={labelStyle}>
          How did you hear about us?
          <input name="referral" placeholder="e.g., Friend, Social media, Event" style={fieldStyle} />
        </label>

        <div style={{ marginTop: 24, padding: 16, background: "#f5f7fb", borderRadius: 8 }}>
          <h4 style={{ marginTop: 0, marginBottom: 12 }}>Equal Opportunity Information (Optional)</h4>
          <p style={{ fontSize: 14, color: "#666", marginBottom: 16 }}>We are committed to diversity and inclusion. This information helps us track our efforts and is not used in hiring decisions.</p>

          <label style={labelStyle}>
            Gender
            <select name="gender" style={fieldStyle}>
              <option value="">Prefer not to say</option>
              <option>Male</option>
              <option>Female</option>
              <option>Non-binary</option>
              <option>Other</option>
            </select>
          </label>

          <label style={labelStyle}>
            Race/Ethnicity
            <select name="ethnicity" style={fieldStyle}>
              <option value="">Prefer not to say</option>
              <option>Hispanic or Latino</option>
              <option>White (Not Hispanic or Latino)</option>
              <option>Black or African American (Not Hispanic or Latino)</option>
              <option>Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)</option>
              <option>Asian (Not Hispanic or Latino)</option>
              <option>American Indian or Alaska Native (Not Hispanic or Latino)</option>
              <option>Two or More Races (Not Hispanic or Latino)</option>
            </select>
          </label>

          <label style={labelStyle}>
            Veteran Status
            <select name="veteran_status" style={fieldStyle}>
              <option value="">Prefer not to say</option>
              <option>I am a protected veteran</option>
              <option>I am not a protected veteran</option>
            </select>
          </label>

          <label style={labelStyle}>
            Disability Status
            <select name="disability_status" style={fieldStyle}>
              <option value="">Prefer not to say</option>
              <option>Yes, I have a disability</option>
              <option>No, I do not have a disability</option>
            </select>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="cta"
          style={{
            width: "fit-content",
            marginTop: 8,
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
                  width: 16,
                  height: 16,
                  border: "2px solid #fff",
                  borderTop: "2px solid transparent",
                  borderRadius: "50%",
                  animation: "spin 0.8s linear infinite",
                }}
              />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </button>
      </form>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
