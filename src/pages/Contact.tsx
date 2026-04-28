import { useState } from "react";
import { z } from "zod";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { site, services } from "@/content/site";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  propertyType: z.string().trim().max(80).optional().or(z.literal("")),
  service: z.string().trim().max(80).optional().or(z.literal("")),
  timeline: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10, "A short message helps us prepare").max(1500),
});

const inputCls =
  "w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      toast({ title: "Please review the form", description: "A few fields need attention." });
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <PageLayout
      title="Contact — House of Zakzi | Book a Staging Consultation"
      description="Request a home staging consultation with House of Zakzi. Share your property details and we'll be in touch with a tailored proposal."
    >
      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Contact"
            title="Request a staging consultation"
            body="Tell us about your property and timeline. We typically respond within one business day."
          />

          <div className="grid lg:grid-cols-3 gap-14">
            <aside className="lg:col-span-1 space-y-8">
              <div>
                <p className="eyebrow mb-3">Studio</p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex gap-3"><MapPin size={16} className="text-accent mt-0.5" />{site.address}</li>
                  <li className="flex gap-3"><Mail size={16} className="text-accent mt-0.5" /><a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a></li>
                  <li className="flex gap-3"><Phone size={16} className="text-accent mt-0.5" /><a href={`tel:${site.phone}`} className="hover:text-accent">{site.phone}</a></li>
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-3">Follow</p>
                <div className="flex gap-4 text-primary/80">
                  <a href={site.social.instagram} aria-label="Instagram" className="hover:text-accent"><Instagram size={18} /></a>
                  <a href={site.social.facebook} aria-label="Facebook" className="hover:text-accent"><Facebook size={18} /></a>
                </div>
              </div>
              <div className="bg-secondary/50 p-6 border border-border">
                <p className="font-serif text-xl text-primary">What happens next?</p>
                <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>1. We review your inquiry within 1 business day.</li>
                  <li>2. We schedule a short call or site visit.</li>
                  <li>3. You receive a tailored proposal and quote.</li>
                </ol>
              </div>
            </aside>

            <div className="lg:col-span-2">
              {submitted ? (
                <div className="border border-accent/40 bg-secondary/40 p-12 text-center">
                  <p className="eyebrow mb-3">Thank you</p>
                  <h3 className="font-serif text-3xl text-primary">Your inquiry is on its way.</h3>
                  <p className="mt-4 text-muted-foreground max-w-md mx-auto">
                    We'll be in touch within one business day with next steps. In the meantime,
                    feel free to browse our recent work.
                  </p>
                  <div className="mt-8">
                    <CTAButton to="/portfolio" variant="outline">View portfolio</CTAButton>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" name="name" error={errors.name} required />
                    <Field label="Email" name="email" type="email" error={errors.email} required />
                    <Field label="Phone" name="phone" error={errors.phone} />
                    <Field label="Property location" name="location" error={errors.location} />
                    <SelectField
                      label="Property type"
                      name="propertyType"
                      options={["Apartment", "House", "Penthouse", "New development", "Other"]}
                    />
                    <SelectField
                      label="Service needed"
                      name="service"
                      options={services.map((s) => s.title).concat("Not sure yet")}
                    />
                  </div>
                  <SelectField
                    label="Timeline"
                    name="timeline"
                    options={["Within 2 weeks", "1 month", "2–3 months", "Just exploring"]}
                  />
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      className={inputCls}
                      placeholder="Tell us a little about your property and goals…"
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>
                  <div className="pt-2">
                    <CTAButton variant="primary">Request a staging consultation</CTAButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

const Field = ({
  label, name, type = "text", error, required,
}: { label: string; name: string; type?: string; error?: string; required?: boolean }) => (
  <div>
    <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
      {label} {required && <span className="text-accent">*</span>}
    </label>
    <input name={name} type={type} className={inputCls} />
    {error && <p className="text-xs text-destructive mt-1">{error}</p>}
  </div>
);

const SelectField = ({
  label, name, options,
}: { label: string; name: string; options: string[] }) => (
  <div>
    <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
      {label}
    </label>
    <select name={name} className={inputCls} defaultValue="">
      <option value="" disabled>Select…</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  </div>
);

export default Contact;
