import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, FileText, Gavel, Users } from "lucide-react";

export default function TermsOfService() {
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
              badge="Legal"
              title="Terms of"
              titleAccent="Service"
              description="By using our digital wallet service, you agree to these terms and conditions. Please read them carefully."
              align="center"
            />
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        </div>

        <div className="mx-auto container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Acceptance of Terms */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                    <FileText className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    By accessing and using our Digital Wallet service, you
                    accept and agree to be bound by the terms and provision of
                    this agreement.
                  </p>
                  <p>
                    If you do not agree to abide by the above, please do not use
                    this service.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: "200ms" }}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-500">
                    <Users className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold">User Responsibilities</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>As a user of our service, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Provide accurate and complete information during
                      registration
                    </li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Use the service for lawful purposes only</li>
                    <li>Not engage in fraudulent or suspicious activities</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>
                      Report any unauthorized use of your account immediately
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Prohibited Activities */}
            <Card
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: "400ms" }}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
                    <AlertTriangle className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold">Prohibited Activities</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>You are strictly prohibited from:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Using the service for money laundering or terrorist
                      financing
                    </li>
                    <li>Engaging in fraudulent transactions</li>
                    <li>
                      Violating any international, federal, or state regulations
                    </li>
                    <li>
                      Attempting to gain unauthorized access to our systems
                    </li>
                    <li>Interfering with or disrupting the service</li>
                    <li>
                      Using automated tools to access the service without
                      permission
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: "600ms" }}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500">
                    <Gavel className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    Limitation of Liability
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Our liability is limited as follows:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      We are not liable for any indirect, incidental, or
                      consequential damages
                    </li>
                    <li>
                      Our maximum liability is limited to the amount in your
                      wallet at the time of the incident
                    </li>
                    <li>
                      We are not responsible for losses due to unauthorized
                      access caused by user negligence
                    </li>
                    <li>
                      Service availability is not guaranteed and may be
                      interrupted for maintenance
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Service Modifications */}
            <Card
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: "800ms" }}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Service Modifications</h2>
                  <div className="text-muted-foreground leading-relaxed">
                    <p>We reserve the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                      <li>Modify or discontinue the service at any time</li>
                      <li>
                        Update these terms of service with reasonable notice
                      </li>
                      <li>Change fees and pricing structures</li>
                      <li>
                        Suspend or terminate accounts that violate these terms
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: "1000ms" }}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                  <div className="text-muted-foreground leading-relaxed">
                    <p>
                      If you have any questions about these Terms of Service,
                      please contact us:
                    </p>
                    <div className="mt-4 space-y-2">
                      <p>
                        <strong>Email:</strong> legal@digitalwallet.com
                      </p>
                      <p>
                        <strong>Phone:</strong> 1-800-LEGAL-HELP
                      </p>
                      <p>
                        <strong>Address:</strong> 123 Legal Avenue, Compliance
                        City, CC 12345
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
