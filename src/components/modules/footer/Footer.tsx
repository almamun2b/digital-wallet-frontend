import Logo from "@/assets/icons/Logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "About Us", href: "/about" },
        { label: "Dashboard", href: "/user" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "/contact-us" },
        { label: "FAQs", href: "/faq" },
        { label: "Help Center", href: "/help-center" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Accessibility", href: "/accessibility" },
        { label: "Refund Policy", href: "/refund-policy" },
      ],
    },
  ];

  return (
    <footer className="relative border-t bg-background overflow-hidden">
      {/* Mesh decoration for footer */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full -mr-32 -mb-32 pointer-events-none" />

      <div className="mx-auto container px-6 lg:px-12 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Logo and Info */}
          <div className="space-y-8 lg:col-span-12 xl:col-span-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="group-hover:scale-110 transition-transform duration-300">
                <Logo />
              </div>
              <span className="text-2xl font-black text-primary tracking-tighter">
                DIGITAL WALLET.
              </span>
            </Link>

            <p className="text-base text-muted-foreground leading-relaxed max-w-xs">
              Empowering your financial journey with next-gen digital solutions.
              Secure, fast, and globally accessible.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer group">
                <Mail className="size-4 group-hover:scale-110 transition-transform" />
                <span>support@digitalwallet.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer group">
                <Phone className="size-4 group-hover:scale-110 transition-transform" />
                <span>+1 (800) FINANCE</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer group">
                <MapPin className="size-4 group-hover:scale-110 transition-transform" />
                <span>Financial District, NY 10004</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-12 xl:col-span-8">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/80">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all flex items-center group text-[0.95rem]"
                      >
                        <span className="w-0 overflow-hidden group-hover:w-2 transition-all mr-0 group-hover:mr-2">
                          ›
                        </span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-12 opacity-50" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Digital Wallet platform. Built
              for global finance.
            </p>
            <div className="flex gap-4 text-xs font-medium text-muted-foreground/60 uppercase tracking-widest">
              <Link to="/" className="hover:text-primary transition-colors">
                Security
              </Link>
              <Link to="/" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link to="/" className="hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                asChild
                className="rounded-full size-10 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all hover:-translate-y-1 active:scale-90"
              >
                <Link
                  to={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="size-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
