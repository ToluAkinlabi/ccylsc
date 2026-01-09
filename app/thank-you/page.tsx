export const metadata = { title: "Application Submitted - CC-YLSC" };

export default function ThankYouPage() {
  return (
    <section>
      <div className="container" style={{ paddingTop: 64, paddingBottom: 64, textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 64, marginBottom: 24 }}>✓</div>
          <h1 style={{ marginBottom: 16, fontSize: 36, fontWeight: 800 }}>Application Submitted!</h1>
          <p style={{ fontSize: 18, color: "#555", lineHeight: 1.6, marginBottom: 32 }}>
            Thank you for your interest in joining the Capital City Youth Leadership & Service Corps.
            We have received your application and will review it carefully. If your qualifications
            match our needs, we'll reach out to schedule next steps.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/jobs" className="cta">Browse More Positions</a>
            <a href="/" className="cta" style={{ background: "#333" }}>Return Home</a>
          </div>
        </div>
      </div>
    </section>
  );
}
