import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-background/95 backdrop-blur border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container-editorial flex items-center justify-between h-20">
        <Link to="/" className="font-serif text-xl md:text-2xl tracking-wide text-primary">
          {site.brand}
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm tracking-wide transition-colors",
                  isActive
                    ? "text-accent"
                    : "text-foreground/80 hover:text-accent"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="text-xs uppercase tracking-[0.2em] border border-primary/80 text-primary px-5 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Book consultation
          </Link>
        </nav>

        <button
          className="md:hidden text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-editorial flex flex-col py-6 gap-4">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-base py-2 tracking-wide",
                    isActive ? "text-accent" : "text-foreground/80"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
