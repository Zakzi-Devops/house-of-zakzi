import { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { projects, type Project } from "@/content/site";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Portfolio = () => {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const found = projects.find((p) => p.slug === hash);
      if (found) setActive(found);
    }
  }, []);

  return (
    <PageLayout
      title="Portfolio — House of Zakzi"
      description="Explore selected home staging and interior styling projects by House of Zakzi — apartments, family homes and premium properties prepared for sale."
    >
      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Portfolio"
            title="Interiors styled to be remembered"
            body="A selection of recent projects across apartments, family homes and premium properties — each prepared with care for the buyer it was designed to attract."
          />

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((p, i) => (
              <button
                key={p.slug}
                id={p.slug}
                onClick={() => setActive(p)}
                className="group text-left"
              >
                <div className="overflow-hidden bg-muted aspect-[4/3]">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex justify-between items-end gap-4">
                  <div>
                    <p className="eyebrow mb-2">{p.category}</p>
                    <h3 className="font-serif text-2xl text-primary group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.propertyType}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-accent">View →</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background border-border max-h-[90vh] overflow-y-auto">
          {active && (
            <div>
              <DialogTitle className="sr-only">{active.title}</DialogTitle>
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 bg-background/90 backdrop-blur p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={active.cover} alt={active.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12">
                <p className="eyebrow mb-3">{active.category}</p>
                <h3 className="font-serif text-3xl md:text-4xl text-primary">{active.title}</h3>
                <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
                  {active.description}
                </p>

                <dl className="mt-8 grid sm:grid-cols-3 gap-6 border-t border-border pt-8">
                  <div>
                    <dt className="eyebrow mb-2">Property</dt>
                    <dd className="text-sm text-foreground/80">{active.propertyType}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-2">Scope</dt>
                    <dd className="text-sm text-foreground/80">{active.scope}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-2">Results</dt>
                    <dd className="text-sm text-foreground/80">{active.results}</dd>
                  </div>
                </dl>

                {active.beforeImage && (
                  <div className="mt-10">
                    <p className="eyebrow mb-4">Before & After</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <figure>
                        <div className="aspect-[4/3] overflow-hidden bg-muted">
                          <img src={active.beforeImage} alt="Before" className="w-full h-full object-cover" />
                        </div>
                        <figcaption className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Before</figcaption>
                      </figure>
                      <figure>
                        <div className="aspect-[4/3] overflow-hidden bg-muted">
                          <img src={active.cover} alt="After" className="w-full h-full object-cover" />
                        </div>
                        <figcaption className="text-xs uppercase tracking-[0.2em] text-accent mt-2">After</figcaption>
                      </figure>
                    </div>
                  </div>
                )}

                <div className="mt-10">
                  <p className="eyebrow mb-4">Gallery</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {active.gallery.map((g, i) => (
                      <div key={i} className="aspect-square overflow-hidden bg-muted">
                        <img src={g} alt={`${active.title} ${i + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 flex justify-center">
                  <CTAButton to="/contact" variant="primary">Discuss your project</CTAButton>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Portfolio;
