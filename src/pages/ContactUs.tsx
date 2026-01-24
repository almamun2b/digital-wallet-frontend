import { DynamicFormField } from "@/components/DynamicFormField";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactUs() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormData) => {
    try {
      console.log("Form Values:", values);

      toast.success("Message sent successfully! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

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
              badge="Get In Touch"
              title="Contact"
              titleAccent="Our Team"
              description="Have questions or feedback? Fill out the form below and our team will respond as quickly as possible."
              align="center"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        </div>

        <div className="mx-auto container px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <Card className="relative border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-12">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full" />

              <CardHeader className="space-y-4 pb-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <MessageSquare className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">
                      Send us a message
                    </CardTitle>
                    <p className="text-muted-foreground mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <DynamicFormField
                        name="name"
                        label="Full Name *"
                        children={(field) => (
                          <Input
                            {...field}
                            placeholder="Your name"
                            className="h-12"
                          />
                        )}
                      />

                      <DynamicFormField
                        name="email"
                        label="Email Address *"
                        children={(field) => (
                          <Input
                            {...field}
                            placeholder="you@example.com"
                            type="email"
                            className="h-12"
                          />
                        )}
                      />
                    </div>

                    <DynamicFormField
                      name="subject"
                      label="Subject *"
                      children={(field) => (
                        <Input
                          {...field}
                          placeholder="What's this about?"
                          className="h-12"
                        />
                      )}
                    />

                    <DynamicFormField
                      name="message"
                      label="Message *"
                      children={(field) => (
                        <Textarea
                          {...field}
                          placeholder="Write your message..."
                          className="min-h-[140px] resize-none"
                        />
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 button-glow"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Info Cards */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card
                className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg animate-in fade-in slide-in-from-bottom-12"
                style={{ animationDelay: "200ms" }}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    support@digitalwallet.com
                  </p>
                </CardContent>
              </Card>

              <Card
                className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg animate-in fade-in slide-in-from-bottom-12"
                style={{ animationDelay: "400ms" }}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-sm text-muted-foreground">
                    Available 9AM - 6PM EST
                  </p>
                </CardContent>
              </Card>

              <Card
                className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg animate-in fade-in slide-in-from-bottom-12"
                style={{ animationDelay: "600ms" }}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Send className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-sm text-muted-foreground">
                    Within 24 hours
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
