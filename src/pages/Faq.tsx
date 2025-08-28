import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface FaqProps {
  heading?: string;
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
  heading = "Frequently Asked Questions",
  description = "Find answers to common questions about our digital wallet. Can't find what you're looking for? Contact our support team.",
  items = faqItems,
}: FaqProps) => {
  return (
    <section className="py-32 bg-background">
      <div className="mx-auto container px-4 lg:px-8 space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <section className="mt-36 text-center">
        <div className="mx-auto container px-4 lg:px-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Still have questions?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Reach out to our support team and we’ll get back to you quickly.
          </p>
          <Button asChild className="mt-8">
            <Link to="/contact-us">Contact Support</Link>
          </Button>
        </div>
      </section>
    </section>
  );
};

export default Faq;
