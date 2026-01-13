export const metadata = { title: "Oasis Experience Bootcamp Registration - CC-YLSC" };

export default function BootcampRegistrationPage() {
  return (
    <section>
      <div className="container" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ marginBottom: 8, fontSize: 36, fontWeight: 800 }}>Oasis Experience Bootcamp</h1>
          <p style={{ fontSize: 18, color: "#0A66C2", fontWeight: 600, marginBottom: 24 }}>
            January 29 - February 1, 2026 • Baltimore, MD
          </p>

          <div className="card" style={{ marginBottom: 32, padding: 24, background: "#f5f7fb" }}>
            <h3 style={{ marginTop: 0, marginBottom: 12 }}>About the Bootcamp</h3>
            <p style={{ lineHeight: 1.7, color: "#555", margin: 0 }}>
              The Oasis Experience Bootcamp is an intensive 3-day leadership immersion designed to accelerate 
              your personal and professional growth. Through interactive workshops, mentorship, networking, and 
              hands-on projects, you'll develop essential leadership competencies and build meaningful connections 
              with fellow emerging leaders.
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 32 }}>
            <div className="card">
              <h4 style={{ marginTop: 0, marginBottom: 8 }}>What You'll Learn</h4>
              <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, lineHeight: 1.8, color: "#555" }}>
                <li>Advanced leadership skills</li>
                <li>Ethical decision-making</li>
                <li>Team dynamics</li>
                <li>Strategic thinking</li>
              </ul>
            </div>
            <div className="card">
              <h4 style={{ marginTop: 0, marginBottom: 8 }}>Who Should Apply</h4>
              <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, lineHeight: 1.8, color: "#555" }}>
                <li>Ages 13-35</li>
                <li>All backgrounds welcome</li>
                <li>No prior experience required</li>
                <li>DC metro area residents</li>
              </ul>
            </div>
          </div>

          <h2 style={{ marginBottom: 16 }}>Registration Form</h2>
          <p style={{ marginBottom: 24, color: "#555" }}>
            Complete the form below to register for the bootcamp. All fields marked with an asterisk (*) are required.
          </p>

          <form
            action="https://formspree.io/f/xykkyprz"
            method="POST"
            encType="multipart/form-data"
            style={{ 
              display: "grid", 
              gap: 20, 
              background: "#fff", 
              padding: 32, 
              borderRadius: 12, 
              border: "1px solid #e6e9ef", 
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" 
            }}
          >
            <input type="hidden" name="form_type" value="bootcamp_registration" />

            <h3 style={{ marginTop: 0, marginBottom: 8 }}>Personal Information</h3>

            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <input name="first_name" placeholder="First name *" required style={fieldStyle} />
              <input name="last_name" placeholder="Last name *" required style={fieldStyle} />
            </div>

            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <input type="email" name="email" placeholder="Email *" required style={fieldStyle} />
              <input name="phone" placeholder="Phone *" required style={fieldStyle} />
            </div>

            <input name="address" placeholder="Address *" required style={fieldStyle} />

            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
              <input name="city" placeholder="City *" required style={fieldStyle} />
              <input name="state" placeholder="State *" required style={fieldStyle} />
              <input name="zip" placeholder="ZIP *" required style={fieldStyle} />
            </div>

            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <label style={labelStyle}>
                Date of Birth *
                <input type="date" name="date_of_birth" required style={fieldStyle} />
              </label>
              <label style={labelStyle}>
                Age *
                <input type="number" name="age" min="13" max="35" placeholder="13-35" required style={fieldStyle} />
              </label>
            </div>

            <h3 style={{ marginTop: 24, marginBottom: 8 }}>Background</h3>

            <label style={labelStyle}>
              Current Status *
              <select name="current_status" required style={fieldStyle}>
                <option value="">Select</option>
                <option>High School Student</option>
                <option>Undergraduate Student</option>
                <option>Graduate Student</option>
                <option>Young Professional</option>
                <option>Other</option>
              </select>
            </label>

            <label style={labelStyle}>
              School/Organization
              <input name="school_organization" placeholder="Name of institution or employer" style={fieldStyle} />
            </label>

            <h3 style={{ marginTop: 24, marginBottom: 8 }}>Bootcamp Questions</h3>

            <label style={labelStyle}>
              What are your goals for attending the Oasis Experience Bootcamp? *
              <textarea 
                name="goals" 
                rows={5} 
                placeholder="Share what you hope to achieve and gain from this intensive experience..." 
                required 
                style={fieldStyle} 
              />
            </label>

            <label style={labelStyle}>
              What leadership challenges or areas would you like to work on?
              <textarea 
                name="challenges" 
                rows={4} 
                placeholder="e.g., Public speaking, decision-making, team leadership..." 
                style={fieldStyle} 
              />
            </label>

            <label style={labelStyle}>
              Have you participated in any leadership programs or workshops before?
              <textarea 
                name="prior_experience" 
                rows={3} 
                placeholder="Tell us about relevant experience..." 
                style={fieldStyle} 
              />
            </label>

            <h3 style={{ marginTop: 24, marginBottom: 8 }}>Commitment & Attendance</h3>

            <label style={labelStyle}>
              Can you commit to all 4 days (January 29 - February 1)? *
              <select name="full_attendance" required style={fieldStyle}>
                <option value="">Select</option>
                <option>Yes, I can attend all 4 days</option>
                <option>Yes, but I have some conflicts</option>
                <option>Uncertain, need more details</option>
              </select>
            </label>

            <label style={labelStyle}>
              Please describe any schedule constraints or conflicts
              <textarea 
                name="schedule_notes" 
                rows={3} 
                placeholder="Any dates/times you cannot attend..." 
                style={fieldStyle} 
              />
            </label>

            <h3 style={{ marginTop: 24, marginBottom: 8 }}>Additional Information</h3>

            <label style={labelStyle}>
              How did you hear about the Oasis Experience Bootcamp?
              <input name="referral_source" placeholder="e.g., School, Friend, Social media, Email" style={fieldStyle} />
            </label>

            <label style={labelStyle}>
              Emergency Contact Name *
              <input name="emergency_contact_name" required style={fieldStyle} />
            </label>

            <label style={labelStyle}>
              Emergency Contact Phone *
              <input name="emergency_contact_phone" required style={fieldStyle} />
            </label>

            <label style={labelStyle}>
              Any dietary restrictions or accessibility needs?
              <textarea name="accommodations" rows={3} style={fieldStyle} />
            </label>

            {/* Formspree redirect */}
            <input type="hidden" name="_next" value="https://ccylsc.vercel.app/thank-you" />
            <input type="hidden" name="_subject" value="Oasis Experience Bootcamp Registration" />
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <button type="submit" className="cta" style={{ width: "fit-content", marginTop: 8 }}>
              Complete Registration
            </button>
          </form>
        </div>
      </div>
    </section>
  );
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
