export default function AboutSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-background via-background to-muted py-24 sm:py-32">
      <div className="mx-auto container px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-base font-semibold text-primary">About Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Empowering Secure & Seamless Digital Payments
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our Digital Wallet platform is built to make money management{" "}
              <span className="font-semibold text-foreground">
                simple, fast, and secure
              </span>
              . Whether you’re a user sending money, an agent assisting with
              cash-in/out, or an admin overseeing the system — we provide the
              right tools for every role.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              We believe financial services should be{" "}
              <span className="text-primary">accessible to everyone</span>, no
              matter where they are. That’s why our platform focuses on{" "}
              <span className="text-primary">
                reliability, transparency, and security
              </span>
              .
            </p>
          </div>

          {/* Right Side - Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-xl bg-muted p-6 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-primary">24/7</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Access Anytime
              </p>
            </div>
            <div className="rounded-xl bg-muted p-6 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-primary">100%</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Secure Transactions
              </p>
            </div>
            <div className="rounded-xl bg-muted p-6 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-primary">0 Fees</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                for Peer Transfers
              </p>
            </div>
            <div className="rounded-xl bg-muted p-6 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-primary">Multi-Role</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                User, Agent & Admin
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
