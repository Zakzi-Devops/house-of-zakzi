import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { services, faqs } from "@/content/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  return (
    <PageLayout
      title="Services — House of Zakzi"
      description="Home staging for sale, interior styling, photo shoot preparation and consultations. Boutique services for homeowners, agents and developers."
    >
      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Services"
            title="Boutique services, end to end"
            body="Each engagement is shaped around your property, timeline and goals. Below is a guide to how we typically work — every quote is bespoke."
          />

          <div className="space-y-24">
            {services.map((s, i) => (
              <article
                key={s.slug}
                id={s.slug}
                className="grid md:grid-cols-12 gap-8 md:gap-14 scroll-mt-24"
              >
                <div className="md:col-span-4">
                  <p className="eyebrow mb-3">0{i + 1} · Service</p>
                  <h3 className="font-serif text-3xl md:text-4xl text-primary leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{s.short}</p>
                  <div className="mt-8 inline-block border border-border bg-secondary/40 px-6 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Investment</p>
                    <p className="mt-1 font-serif text-xl text-primary">{s.priceFrom}</p>
                    <p className="text-xs text-muted-foreground mt-1">or custom quote</p>
                  </div>
                </div>

                <div className="md:col-span-8 grid sm:grid-cols-3 gap-8 border-t md:border-t-0 md:border-l border-border md:pl-14 pt-8 md:pt-0">
                  <div>
                    <p className="eyebrow mb-3">Who it's for</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{s.forWho}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">What's included</p>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      {s.includes.map((it) => (
                        <li key={it} className="flex gap-2">
                          <span className="text-accent">—</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">Process</p>
                    <ol className="space-y-2 text-sm text-foreground/80">
                      {s.process.map((it, idx) => (
                        <li key={it} className="flex gap-2">
                          <span className="text-accent">{idx + 1}.</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="container-editorial max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Good to know" />
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-serif text-lg text-primary hover:text-accent hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-16">
            <CTAButton to="/contact" variant="primary">Request a consultation</CTAButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
