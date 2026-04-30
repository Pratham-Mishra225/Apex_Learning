import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section-space">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div>
              <p className="section-label">
                Contact
              </p>
              <h2 className="section-heading mt-3">
                Visit Apex Learning Academy
              </h2>
              <p className="mt-5 text-body">
                Virar, Mumbai · Personalized coaching with premium support.
              </p>
            </div>
            <div className="surface-card rounded-2xl p-7 text-sm text-body">
              <p className="text-base font-semibold text-heading">
                Apex Learning Academy
              </p>
              <p className="mt-2">Virar, Mumbai</p>
              <p className="mt-2">
                Phone: <span className="font-semibold">7499817638</span>
              </p>
            </div>
            <iframe
              title="Apex Learning Academy location"
              src="https://www.google.com/maps?q=Virar%2C%20Mumbai&output=embed"
              className="surface-card h-64 w-full rounded-2xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
