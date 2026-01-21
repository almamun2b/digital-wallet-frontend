import { SectionHeader } from "@/components/shared/SectionHeader";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is my money safe with Digital Wallet?",
    answer: "Absolutely. We use bank-level AES-256 encryption, multi-factor authentication (MFA), and real-time fraud monitoring to ensure your funds and data are always protected."
  },
  {
    question: "How can I deposit money into my wallet?",
    answer: "You can deposit money through any of our 10,000+ trusted agents worldwide, or link your bank account for direct transfers. Cashing in via agents is instant and secure."
  },
  {
    question: "What are the transaction fees?",
    answer: "Person-to-person transfers within the platform are completely free. Small service fees apply for Agent cash-outs and international bank transfers, clearly displayed before you confirm."
  },
  {
    question: "How do I become a registered Agent?",
    answer: "You can apply to be an Agent through our platform. Once our team reviews your documentation and business location, you'll receive specialized dashboard access to start earning commissions."
  }
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-muted/40 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <SectionHeader
          badge="Support & Guidance"
          title="Frequently Asked"
          titleAccent="Questions"
          description="Everything you need to know about managing your digital wallet efficiently."
          align="center"
        />

        <div className="mt-16 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`} 
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-6 transition-all hover:border-primary/30"
              >
                <AccordionTrigger className="text-lg font-bold hover:no-underline text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
