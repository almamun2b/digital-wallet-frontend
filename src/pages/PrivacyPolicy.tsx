import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Eye, Lock, Shield } from "lucide-react";

export default function PrivacyPolicy() {
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
              badge="Privacy"
              title="Privacy"
              titleAccent="Policy"
              description="Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information."
              align="center"
            />
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        </div>

        <div className="mx-auto container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Information We Collect */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                    <Database className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We collect information you provide directly to us, such as
                    when you create an account, use our services, or contact us
                    for support.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Personal identification information (name, email, phone
                      number)
                    </li>
                    <li>
                      Financial information (wallet balance, transaction
                      history)
                    </li>
                    <li>
                      Device and usage information (IP address, browser type,
                      access times)
                    </li>
                    <li>Location data (with your consent)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: "200ms" }}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-500">
                    <Eye className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    How We Use Your Information
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We use the information we collect to provide, maintain, and
                    improve our services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Process transactions and manage your wallet</li>
                    <li>Provide customer support</li>
                    <li>Send you important notifications about your account</li>
                    <li>Analyze usage patterns to improve our services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: "400ms" }}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500">
                    <Lock className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold">Data Security</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We implement industry-standard security measures to protect
                    your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>End-to-end encryption for all transactions</li>
                    <li>Secure socket layer (SSL) technology</li>
                    <li>
                      Regular security audits and vulnerability assessments
                    </li>
                    <li>Role-based access controls for our employees</li>
                    <li>Secure data storage with backup systems</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: "600ms" }}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                    <Shield className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold">Your Rights</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    You have the following rights regarding your personal
                    information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your account and associated data</li>
                    <li>Restriction of processing under certain conditions</li>
                    <li>
                      Data portability to transfer your information to another
                      service
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: "800ms" }}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                  <div className="text-muted-foreground leading-relaxed">
                    <p>
                      If you have any questions about this Privacy Policy or how
                      we handle your data, please contact us:
                    </p>
                    <div className="mt-4 space-y-2">
                      <p>
                        <strong>Email:</strong> privacy@digitalwallet.com
                      </p>
                      <p>
                        <strong>Phone:</strong> 1-800-PRIVACY
                      </p>
                      <p>
                        <strong>Address:</strong> 123 Privacy Street, Security
                        City, SC 12345
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
