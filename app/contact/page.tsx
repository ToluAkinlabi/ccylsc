export const metadata = { title: "Contact CC-YLSC" };

export default function ContactPage() {
  return (
    <section>
      <div className="container" style={{ paddingTop: 32 }}>
        <h2>Contact</h2>
        <p>We'd love to hear from you.</p>
        <p>
          Email: <a href="mailto:info@ccylsc.org">info@ccylsc.org</a>
        </p>
        <form action="mailto:info@ccylsc.org" method="post" encType="text/plain" style={{ maxWidth: 520 }}>
          <div style={{ display: "grid", gap: 12 }}>
            <input name="name" placeholder="Your name" required style={{ padding: 12, borderRadius: 8, border: "1px solid #e6e9ef" }} />
            <input name="email" type="email" placeholder="Your email" required style={{ padding: 12, borderRadius: 8, border: "1px solid #e6e9ef" }} />
            <textarea name="message" placeholder="Message" rows={5} required style={{ padding: 12, borderRadius: 8, border: "1px solid #e6e9ef" }} />
            <button type="submit" className="cta" style={{ width: "fit-content" }}>Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}
