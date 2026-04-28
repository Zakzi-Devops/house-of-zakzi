import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { images } from "@/content/site";

const values = [
  { title: "Elegance", body: "A quiet, considered aesthetic — never busy, always intentional." },
  { title: "Practical transformation", body: "Beautiful results that respect timelines, budgets and the property's character." },
  { title: "Buyer psychology", body: "Designing rooms that meet emotional needs, not just visual ones." },
  { title: "Detail", body: "The difference is in the corners, the textures and the unseen choices." },
  { title: "Warmth", body: "Spaces that feel inhabited and loved from the very first photograph." },
];

const About = () => {
  return (
    <PageLayout
      title="About — House of Zakzi"
      description="House of Zakzi is a boutique home staging and interior styling studio founded by Claudia Zakzi, dedicated to elegant, warm and result-driven property transformations."
    >
      <section className="py-24 md:py-32">
        <div className="container-editorial grid md:grid-cols-2 gap-14 items-center">
          <div className="aspect-[4/5] overflow-hidden order-2 md:order-1">
            <img
              src={images.founder}
              alt="Claudia, founder of House of Zakzi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="eyebrow mb-4">About</p>
            <h1 className="font-serif text-4xl md:text-6xl text-primary leading-[1.05]">
              A studio built on care, calm and considered detail.
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              House of Zakzi is the home staging and styling studio of Claudia Zakzi — a
              designer who believes that the way a home feels is just as important as how it
              looks. What began as a love for layering linen, light and quiet objects has grown
              into a boutique practice trusted by homeowners, agents and developers.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We work property by property, never project-by-template. Every staging is a
              short, focused collaboration — one with a clear goal: to help the right buyer
              recognise home the moment they walk in.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="container-editorial">
          <SectionHeading eyebrow="What we believe" title="Five values guide every project" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {values.map((v) => (
              <div key={v.title} className="bg-background p-8">
                <span className="hairline mb-5" />
                <h3 className="font-serif text-xl mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-5xl text-primary leading-tight">
            Curious if House of Zakzi is right for your property?
          </h2>
          <p className="mt-5 text-muted-foreground">
            Book a consultation — we'll listen first, then propose.
          </p>
          <div className="mt-10">
            <CTAButton to="/contact" variant="primary">Book a consultation</CTAButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
