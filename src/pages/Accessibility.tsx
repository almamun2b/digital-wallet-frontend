import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Keyboard, Shield, Volume2 } from "lucide-react";

export default function Accessibility() {
  return (
    <main className="bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 hero-mesh">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -mr-64 -mt-32 opacity-10 dark:opacity-5 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -ml-48 -mb-24 opacity-8 dark:opacity-3 transition-all duration-1000" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              badge="Accessibility"
              title="Digital Wallet for"
              titleAccent="Everyone"
              description="We're committed to making our digital wallet accessible to all users, regardless of ability or circumstance."
              align="center"
            />
          </div>
        </div>
      </section>

      {/* Accessibility Content */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        </div>

        <div className="mx-auto container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Our Commitment */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                    <Shield className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Commitment</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Digital Wallet is committed to ensuring digital
                    accessibility for people with disabilities. We are
                    continually improving the user experience for everyone and
                    applying the relevant accessibility standards.
                  </p>
                  <p>
                    We aim to comply with all applicable standards, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>WCAG 2.1 Level AA guidelines</li>
                    <li>Section 508 of the Rehabilitation Act</li>
                    <li>ADA (Americans with Disabilities Act) requirements</li>
                    <li>EN 301 549 accessibility requirements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Keyboard Navigation */}
            <Card
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: "200ms" }}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-500">
                    <Keyboard className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold">Keyboard Navigation</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our platform is fully navigable using keyboard controls:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Tab key moves focus between interactive elements</li>
                    <li>Enter/Space keys activate buttons and links</li>
                    <li>Arrow keys navigate within menus and lists</li>
                    <li>Escape key closes modals and dropdowns</li>
                    <li>Visible focus indicators for keyboard users</li>
                    <li>Skip links for quick navigation to main content</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Visual Accessibility */}
            <Card
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: "400ms" }}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500">
                    <Eye className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold">Visual Accessibility</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We've implemented numerous visual accessibility features:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      High contrast color combinations meeting WCAG standards
                    </li>
                    <li>Resizable text that maintains readability</li>
                    <li>Alternative text for all meaningful images</li>
                    <li>Clear, consistent navigation and layout</li>
                    <li>Sufficient spacing between interactive elements</li>
                    <li>Dark mode support for reduced eye strain</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Screen Reader Support */}
            <Card
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: "600ms" }}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                    <Volume2 className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold">Screen Reader Support</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Our platform is optimized for screen reader users:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Semantic HTML structure for proper content hierarchy
                    </li>
                    <li>ARIA labels and landmarks for navigation</li>
                    <li>Descriptive link text and button labels</li>
                    <li>Form field labels and error announcements</li>
                    <li>Table headers and data cell associations</li>
                    <li>Live regions for dynamic content updates</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Assistive Technology */}
            <Card
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: "800ms" }}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">
                    Assistive Technology Compatibility
                  </h2>
                  <div className="text-muted-foreground leading-relaxed">
                    <p>
                      Our platform works with various assistive technologies:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                      <li>Screen readers (NVDA, JAWS, VoiceOver, TalkBack)</li>
                      <li>Screen magnification software</li>
                      <li>Voice recognition software</li>
                      <li>Switch navigation devices</li>
                      <li>Braille displays</li>
                      <li>Alternative input devices</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feedback and Support */}
            <Card
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: "1000ms" }}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Feedback and Support</h2>
                  <div className="text-muted-foreground leading-relaxed">
                    <p>We welcome feedback on accessibility:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                      <li>Report accessibility barriers you encounter</li>
                      <li>Suggest improvements to enhance accessibility</li>
                      <li>Request alternative formats of content</li>
                      <li>Get assistance with accessibility features</li>
                    </ul>
                    <div className="mt-4 space-y-2">
                      <p>
                        <strong>Email:</strong> accessibility@digitalwallet.com
                      </p>
                      <p>
                        <strong>Phone:</strong> 1-800-ACCESSIBLE
                      </p>
                      <p>
                        <strong>24/7 Accessibility Support Line</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Last Updated */}
            <div className="text-center text-sm text-muted-foreground mt-8">
              <p>
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
