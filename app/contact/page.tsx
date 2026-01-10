export const metadata = { title: "Contact CC-YLSC" };

import ContactForm from "@/app/components/ContactForm";

export default function ContactPage() {
  return (
    <section>
      <div className="container" style={{ paddingTop: 32 }}>
        <h2>Contact</h2>
        <p>We'd love to hear from you.</p>
        <p>
          Email: <a href="mailto:info@ccylsc.org">info@ccylsc.org</a>
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
