export const metadata = { title: "Cohort Application - CC-YLSC" };

export default function CohortApplicationPage() {
  return (
    <section>
      <div className="container" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ marginBottom: 16, fontSize: 36, fontWeight: 800 }}>Join Our Leadership Cohort</h1>
          <p style={{ fontSize: 18, color: "#555", lineHeight: 1.6, marginBottom: 32 }}>
            Apply for our 12-week leadership training cohort. We run 2-3 cohorts per year with 
            hybrid sessions (in-person and virtual) on evenings and weekends. Each cohort concludes 
            with a Capstone Leadership & Service Project.
          </p>

          <div className="card" style={{ marginBottom: 32, padding: 24, background: "#f5f7fb" }}>
            <h3 style={{ marginTop: 0, marginBottom: 12 }}>Who Can Apply</h3>
            <ul style={{ margin: 0, paddingLeft: 24, lineHeight: 1.8, color: "#555" }}>
              <li>High school students, undergraduates, and graduate students</li>
              <li>Young professionals (early–mid career)</li>
              <li>Ages 16–35</li>
              <li>Residents of the Washington, DC metropolitan area</li>
              <li>All faith, cultural, and socioeconomic backgrounds welcome</li>
            </ul>
          </div>

          <h2 style={{ marginBottom: 16 }}>Application Form</h2>
          <p style={{ marginBottom: 24, color: "#555" }}>
            Complete the form below to apply. All fields marked with an asterisk (*) are required.
          </p>

          <form
            action="https://formspree.io/f/mzddbrez"
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
            <input type="hidden" name="form_type" value="cohort_application" />

            <h3 style={{ marginTop: 0, marginBottom: 8 }}>Personal Information</h3>

            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <input name="first_name" placeholder="First name *" required style={fieldStyle} />
              <input name="last_name" placeholder="Last name *" required style={fieldStyle} />
            </div>

            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <input type="email" name="email" placeholder="Email *" required style={fieldStyle} />
              <input name="phone" placeholder="Phone *" required style={fieldStyle} />
            </div>

            <input name="address1" placeholder="Address line 1 *" required style={fieldStyle} />
            <input name="address2" placeholder="Address line 2 (optional)" style={fieldStyle} />

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
                <input type="number" name="age" min="16" max="35" placeholder="16-35" required style={fieldStyle} />
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
              School/Organization (if applicable)
              <input name="school_organization" placeholder="Name of institution or employer" style={fieldStyle} />
            </label>

            <label style={labelStyle}>
              Year/Grade Level (if student)
              <input name="year_level" placeholder="e.g., 11th grade, Junior, 2nd year" style={fieldStyle} />
            </label>

            <label style={labelStyle}>
              Field of Study/Career Area
              <input name="field_of_study" placeholder="e.g., Political Science, Education, Tech" style={fieldStyle} />
            </label>

            <h3 style={{ marginTop: 24, marginBottom: 8 }}>Application Questions</h3>

            <label style={labelStyle}>
              Why do you want to join the CC-YLSC Leadership Cohort? *
              <textarea 
                name="motivation" 
                rows={5} 
                placeholder="Share your goals and what you hope to gain from this experience..." 
                required 
                style={fieldStyle} 
              />
            </label>

            <label style={labelStyle}>
              What experience do you have with leadership, community service, or civic engagement?
              <textarea 
                name="experience" 
                rows={5} 
                placeholder="List relevant activities, volunteer work, clubs, or leadership roles..." 
                style={fieldStyle} 
              />
            </label>

            <label style={labelStyle}>
              What specific skills or areas would you like to develop during the cohort? *
              <textarea 
                name="development_goals" 
                rows={4} 
                placeholder="e.g., Public speaking, project management, civic literacy, networking..." 
                required 
                style={fieldStyle} 
              />
            </label>

            <label style={labelStyle}>
              Describe a community issue you care about and how you would like to address it.
              <textarea 
                name="community_issue" 
                rows={5} 
                placeholder="This will help us understand your interests for the Capstone Project..." 
                style={fieldStyle} 
              />
            </label>

            <h3 style={{ marginTop: 24, marginBottom: 8 }}>Availability & Commitment</h3>

            <label style={labelStyle}>
              Which cohort session are you applying for? *
              <select name="cohort_preference" required style={fieldStyle}>
                <option value="">Select</option>
                <option>Spring 2026 (March-May)</option>
                <option>Summer 2026 (June-August)</option>
                <option>Fall 2026 (September-November)</option>
                <option>Any Available</option>
              </select>
            </label>

            <label style={labelStyle}>
              Can you commit to the full 12-week program (evenings/weekends)? *
              <select name="commitment" required style={fieldStyle}>
                <option value="">Select</option>
                <option>Yes, I can commit fully</option>
                <option>Yes, with some limitations</option>
                <option>Uncertain - need more details</option>
              </select>
            </label>

            <label style={labelStyle}>
              Please list any schedule conflicts or limitations
              <textarea 
                name="schedule_notes" 
                rows={3} 
                placeholder="e.g., Work schedule, classes, family commitments..." 
                style={fieldStyle} 
              />
            </label>

            <h3 style={{ marginTop: 24, marginBottom: 8 }}>Additional Information</h3>

            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <label style={labelStyle}>
                Emergency Contact Name *
                <input name="emergency_contact_name" required style={fieldStyle} />
              </label>
              <label style={labelStyle}>
                Emergency Contact Phone *
                <input name="emergency_contact_phone" required style={fieldStyle} />
              </label>
            </div>

            <label style={labelStyle}>
              How did you hear about CC-YLSC?
              <input name="referral_source" placeholder="e.g., School, Friend, Social media, Event" style={fieldStyle} />
            </label>

            <label style={labelStyle}>
              Resume/CV (PDF or DOC)
              <input type="file" name="resume" accept=".pdf,.doc,.docx" style={fieldStyle} />
            </label>

            <label style={labelStyle}>
              Additional comments or questions
              <textarea name="additional_comments" rows={4} style={fieldStyle} />
            </label>

            {/* Formspree redirect */}
            <input type="hidden" name="_next" value="https://ccylsc.vercel.app/thank-you" />
            <input type="hidden" name="_subject" value="New Cohort Application" />
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <button type="submit" className="cta" style={{ width: "fit-content", marginTop: 8 }}>
              Submit Application
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
