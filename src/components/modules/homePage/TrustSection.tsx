
const partners = [
  { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  { name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" },
  { name: "Mastercard", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" },
  { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
  { name: "Bank of America", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Bank_of_America_logo.svg" },
];

export default function TrustSection() {
  return (
    <section className="py-12 bg-background/50 border-y border-border/40 overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-bold text-muted-foreground uppercase tracking-[0.2em] mb-10">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((partner) => (
            <div key={partner.name} className="h-8 md:h-10 transition-transform hover:scale-110">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-full w-auto object-contain dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
