import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { Link } from "react-router-dom";
import { images, projects, services, site, testimonials, valueProps } from "@/content/site";

const Home = () => {
  return (
    <PageLayout
      title="House of Zakzi — Premium Home Staging & Styling"
      description="Boutique home staging that helps properties sell faster and feel unforgettable. Elegant, warm, design-led styling for homeowners, agents and developers."
    >
      {/* Hero */}
      <section className="relative -mt-20 h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={images.hero}
          alt="Elegantly staged living room"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/80" />
        <div className="relative z-10 h-full flex items-end pb-24 md:pb-32">
          <div className="container-editorial">
            <div className="max-w-2xl animate-fade-up">
              <p className="eyebrow mb-5">Boutique Home Staging</p>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-primary">
                {site.brand}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed">
                {site.tagline}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <CTAButton to="/contact" variant="primary">Book a consultation</CTAButton>
                <CTAButton to="/portfolio" variant="outline">View portfolio</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value section */}
      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Why staging"
            title="Spaces that buyers fall for"
            body="Staging is more than decoration — it is the art of helping buyers feel at home before they own the keys. We design rooms that linger in memory and accelerate decisions."
          />
          <div className="grid md:grid-cols-3 gap-10 md:gap-14">
            {valueProps.map((v) => (
              <div key={v.title} className="text-center">
                <span className="hairline mb-6" />
                <h3 className="font-serif text-2xl mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured portfolio */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="container-editorial">
          <SectionHeading eyebrow="Selected work" title="A portfolio of considered interiors" />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {projects.map((p) => (
              <Link
                key={p.slug}
                to={`/portfolio#${p.slug}`}
                className="group block"
              >
                <div className="overflow-hidden bg-muted aspect-[4/5]">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5">
                  <p className="eyebrow mb-2">{p.category}</p>
                  <h3 className="font-serif text-xl text-primary group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-14">
            <CTAButton to="/portfolio" variant="ghost">Explore all projects →</CTAButton>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <SectionHeading eyebrow="Services" title="Crafted for every kind of home" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services#${s.slug}`}
                className="bg-background p-8 hover:bg-secondary/50 transition-colors group"
              >
                <p className="eyebrow mb-4">0{services.indexOf(s) + 1}</p>
                <h3 className="font-serif text-xl mb-3 text-primary group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="container-editorial grid md:grid-cols-2 gap-14 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={images.founder}
              alt="Founder of House of Zakzi"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-4">About</p>
            <h2 className="font-serif text-3xl md:text-5xl text-primary leading-tight">
              Designed with warmth, sold with intention.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              House of Zakzi is a boutique studio dedicated to home staging and interior styling.
              We believe every property has a story — our role is to tell it beautifully, so the
              right buyer recognises home the moment they step inside.
            </p>
            <div className="mt-8">
              <CTAButton to="/about" variant="outline">Our story</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <SectionHeading eyebrow="Kind words" title="From clients & partners" />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <figure key={t.author} className="bg-secondary/40 p-8 border border-border">
                <blockquote className="font-serif text-lg leading-relaxed text-primary">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="text-primary font-medium">{t.author}</span>
                  <span className="text-muted-foreground"> · {t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container-editorial text-center max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-5">Ready when you are</p>
          <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground leading-tight">
            Let's prepare your property for the buyer it deserves.
          </h2>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <CTAButton
              to="/contact"
              className="bg-primary-foreground text-primary border-primary-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground"
            >
              Request a consultation
            </CTAButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
