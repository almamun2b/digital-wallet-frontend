import Logo from "@/assets/icons/Logo";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto container px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="space-y-8 lg:space-y-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3">
                <Logo />
                <span className="text-xl font-medium text-primary">
                  Digital Wallet
                </span>
              </div>

              <p className="mt-4 text-sm text-muted-foreground sm:text-base lg:max-w-xs">
                Secure your finances, manage transactions, and access your money
                globally. Designed for Users, Agents, and Admins with powerful
                role-based dashboards.
              </p>

              {/* Social Media Links */}
              <div className="mt-6 sm:mt-8">
                <p className="text-sm font-medium text-foreground/90 mb-4">
                  Follow us
                </p>
                <ul className="flex gap-4 sm:gap-6">
                  <li>
                    <Link
                      to="https://www.facebook.com/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-foreground/80 transition hover:text-foreground hover:scale-110"
                    >
                      <span className="sr-only">Facebook</span>
                      <Facebook
                        className="size-5 sm:size-6"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="https://www.instagram.com/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-foreground/80 transition hover:text-foreground hover:scale-110"
                    >
                      <span className="sr-only">Instagram</span>
                      <Instagram
                        className="size-5 sm:size-6"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="https://www.twitter.com/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-foreground/80 transition hover:text-foreground hover:scale-110"
                    >
                      <span className="sr-only">Twitter</span>
                      <Twitter
                        className="size-5 sm:size-6"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="https://www.github.com/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-foreground/80 transition hover:text-foreground hover:scale-110"
                    >
                      <span className="sr-only">GitHub</span>
                      <Github className="size-5 sm:size-6" aria-hidden="true" />
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="https://www.linkedin.com/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-foreground/80 transition hover:text-foreground hover:scale-110"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <Linkedin
                        className="size-5 sm:size-6"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-2 lg:gap-12">
              <div>
                <p className="font-medium text-foreground/90 text-sm sm:text-base">
                  Services
                </p>
                <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm">
                  <li>
                    <Link
                      to="/features"
                      className="text-foreground/80 transition hover:text-foreground/60 hover:underline"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pricing"
                      className="text-foreground/80 transition hover:text-foreground/60 hover:underline"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-foreground/80 transition hover:text-foreground/60 hover:underline"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-foreground/90 text-sm sm:text-base">
                  Support
                </p>
                <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm">
                  <li>
                    <Link
                      to="/contact-us"
                      className="text-foreground/80 transition hover:text-foreground/60 hover:underline"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      className="text-foreground/80 transition hover:text-foreground/60 hover:underline"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-foreground/80 transition hover:text-foreground/60 hover:underline"
                    >
                      Help Center
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-foreground/90 text-sm sm:text-base">
                  Legal
                </p>
                <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm">
                  <li>
                    <Link
                      to="/"
                      className="text-foreground/80 transition hover:text-foreground/60 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-foreground/80 transition hover:text-foreground/60 hover:underline"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-foreground/80 transition hover:text-foreground/60 hover:underline"
                    >
                      Accessibility
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-foreground/80 transition hover:text-foreground/60 hover:underline"
                    >
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t pt-6 sm:pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
                &copy; {new Date().getFullYear()} Digital Wallet. All rights
                reserved.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-right">
                Made with ❤️ for secure digital transactions
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
