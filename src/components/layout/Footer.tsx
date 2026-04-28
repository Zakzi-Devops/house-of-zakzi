import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import { site, nav } from "@/content/site";

const Footer = () => {
  return (
    <footer className="bg-secondary/60 border-t border-border mt-24">
      <div className="container-editorial py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <h3 className="font-serif text-2xl text-primary">{site.brand}</h3>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            {site.tagline}
          </p>
          <div className="flex gap-4 pt-2 text-primary/80">
            <a href={site.social.instagram} aria-label="Instagram" className="hover:text-accent transition-colors">
              <Instagram size={18} />
            </a>
            <a href={site.social.facebook} aria-label="Facebook" className="hover:text-accent transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-foreground/80 hover:text-accent transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>{site.address}</li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a>
            </li>
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-accent">{site.phone}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-editorial py-6 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} {site.brand}. All rights reserved.</span>
          <span>Boutique home staging · Warsaw</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
