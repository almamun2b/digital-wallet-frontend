import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router";

interface FaqProps {
  description?: string;
  items?: {
    id: string;
    question: string;
    answer: string;
  }[];
}

const faqItems = [
  {
    id: "faq-1",
    question: "How do I create a wallet account?",
    answer:
      "Register on our platform with your name, phone, and email. Once verified, you can start using your wallet immediately.",
  },
  {
    id: "faq-2",
    question: "How can I deposit money into my wallet?",
    answer:
      "Deposit money via our network of agents. Provide your account details and the agent will credit your wallet instantly.",
  },
  {
    id: "faq-3",
    question: "How do I send money to another user?",
    answer:
      "From your dashboard, select 'Send Money,' enter the recipient’s phone/email, specify the amount, and confirm. Transactions are instant and secure.",
  },
  {
    id: "faq-4",
    question: "What security measures are in place?",
    answer:
      "We use bank-level encryption, role-based authentication, and persistent session management. Every transaction is monitored for maximum safety.",
  },
  {
    id: "faq-5",
    question: "Can I access my wallet on mobile?",
    answer:
      "Yes! Our platform is fully responsive and works on all devices. Native apps for iOS and Android are in development for an enhanced experience.",
  },
  {
    id: "faq-6",
    question: "What fees are associated with transactions?",
    answer:
      "Fees vary depending on the plan and transaction type. Basic transactions have minimal fees, while premium plans enjoy reduced or zero fees.",
  },
];

const Faq = ({
  description = "Find answers to common questions about our digital wallet. Can't find what you're looking for? Contact our support team.",
  items = faqItems,
}: FaqProps) => {
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
              badge="FAQ"
              title="Frequently"
              titleAccent="Asked Questions"
              description={description}
              align="center"
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        </div>

        <div className="mx-auto container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <Card className="relative border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full" />

              <CardContent className="p-8 lg:p-12">
                <Accordion type="single" collapsible className="space-y-4">
                  {items.map((item, idx) => (
                    <AccordionItem
                      key={item.id}
                      value={item.id}
                      className="border-border/50 bg-card/30 rounded-xl p-1 animate-in fade-in slide-in-from-bottom-8"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <AccordionTrigger className="transition-all duration-200 hover:no-underline hover:bg-primary/5 rounded-lg px-6 py-4 group">
                        <div className="flex items-center gap-4 text-left">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                            <HelpCircle className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-semibold text-lg">
                            {item.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="pl-14 text-muted-foreground leading-relaxed">
                          {item.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background border-t border-muted/40">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        </div>

        <div className="mx-auto container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              badge="Need More Help?"
              title="Still Have"
              titleAccent="Questions?"
              description="Reach out to our support team and we'll get back to you quickly."
              align="center"
            />

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto px-8 py-6 rounded-2xl text-base font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95 button-glow"
              >
                <Link to="/contact-us" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faq;
