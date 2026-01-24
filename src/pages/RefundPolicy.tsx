import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Clock, CreditCard, RefreshCw } from "lucide-react";

export default function RefundPolicy() {
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
              badge="Refunds"
              title="Refund"
              titleAccent="Policy"
              description="Our refund policy ensures fair treatment for all users while maintaining the security and integrity of our digital wallet service."
              align="center"
            />
          </div>
        </div>
      </section>

      {/* Refund Content */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        </div>

        <div className="mx-auto container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* General Policy */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                    <RefreshCw className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold">General Refund Policy</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At Digital Wallet, we strive to provide the best service
                    experience. Our refund policy is designed to be fair and
                    transparent while protecting all users.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Refunds are evaluated on a case-by-case basis</li>
                    <li>
                      All refund requests must be submitted within 30 days of
                      the transaction
                    </li>
                    <li>
                      Processing time for approved refunds is 5-7 business days
                    </li>
                    <li>
                      Refunds will be credited to your original payment method
                      or wallet balance
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Eligible Refunds */}
            <Card
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: "200ms" }}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-500">
                    <CreditCard className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold">Eligible Refunds</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Refunds may be issued in the following circumstances:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Technical Errors:</strong> Transactions that
                      failed due to system errors or technical issues
                    </li>
                    <li>
                      <strong>Unauthorized Transactions:</strong> Charges that
                      you did not authorize or make
                    </li>
                    <li>
                      <strong>Service Disruption:</strong> If our service was
                      unavailable during your transaction attempt
                    </li>
                    <li>
                      <strong>Duplicate Charges:</strong> Multiple charges for
                      the same transaction
                    </li>
                    <li>
                      <strong>Incorrect Amount:</strong> Transactions processed
                      for the wrong amount
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Non-Refundable Items */}
            <Card
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: "400ms" }}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
                    <AlertCircle className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold">Non-Refundable Items</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>The following are generally not eligible for refunds:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Transaction Fees:</strong> Processing fees and
                      service charges
                    </li>
                    <li>
                      <strong>Currency Conversion:</strong> Losses due to
                      currency exchange rate fluctuations
                    </li>
                    <li>
                      <strong>User Error:</strong> Transactions sent to wrong
                      addresses due to user mistake
                    </li>
                    <li>
                      <strong>Market Losses:</strong> Investment or trading
                      losses
                    </li>
                    <li>
                      <strong>Expired Requests:</strong> Refund requests made
                      after 30 days
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Refund Process */}
            <Card
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: "600ms" }}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500">
                    <Clock className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold">Refund Process</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>To request a refund, follow these steps:</p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Log into your Digital Wallet account</li>
                    <li>Navigate to the transaction history</li>
                    <li>Select the transaction you want to dispute</li>
                    <li>Click "Request Refund" and provide details</li>
                    <li>Submit supporting documentation (if applicable)</li>
                    <li>Wait for our review (typically 2-3 business days)</li>
                    <li>Receive decision via email and in-app notification</li>
                  </ol>
                  <p className="mt-4">
                    <strong>Required Information:</strong> Transaction ID, date,
                    amount, and detailed explanation of the issue.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: "800ms" }}
            >
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Dispute Resolution</h2>
                  <div className="text-muted-foreground leading-relaxed">
                    <p>If your refund request is denied, you have options:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                      <li>Request a review within 7 days of the decision</li>
                      <li>Provide additional evidence or documentation</li>
                      <li>Escalate to our dispute resolution team</li>
                      <li>
                        Contact your bank or payment provider for chargeback
                        options
                      </li>
                      <li>
                        Seek mediation through appropriate consumer protection
                        agencies
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
                    <p>For refund-related inquiries:</p>
                    <div className="mt-4 space-y-2">
                      <p>
                        <strong>Email:</strong> refunds@digitalwallet.com
                      </p>
                      <p>
                        <strong>Phone:</strong> 1-800-REFUND-HELP
                      </p>
                      <p>
                        <strong>Hours:</strong> Monday-Friday, 9AM-6PM EST
                      </p>
                      <p>
                        <strong>Emergency:</strong> 24/7 support for urgent
                        refund requests
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
