/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendFeedbackEmail } from "@/actions/email";
import { DynamicFormField } from "@/components/DynamicFormField";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertTriangle,
  Bug,
  Heart,
  Lightbulb,
  MessageCircle,
  MessageSquare,
  Send,
  Star,
  ThumbsUp,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const feedbackSchema = z.object({
  type: z.string().min(1, "Please select feedback type"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  email: z
    .string()
    .email("Please enter a valid email")
    .optional()
    .or(z.literal("")),
  rating: z.number().min(1).max(5).optional(),
});

type FeedbackFormData = z.infer<typeof feedbackSchema>;

const feedbackTypes = [
  {
    value: "general",
    label: "General Feedback",
    icon: MessageSquare,
    color: "bg-blue-500/10 text-blue-500",
    description: "Share your overall experience",
  },
  {
    value: "bug",
    label: "Bug Report",
    icon: Bug,
    color: "bg-red-500/10 text-red-500",
    description: "Report technical issues",
  },
  {
    value: "feature",
    label: "Feature Request",
    icon: Lightbulb,
    color: "bg-green-500/10 text-green-500",
    description: "Suggest new features",
  },
  {
    value: "complaint",
    label: "Complaint",
    icon: AlertTriangle,
    color: "bg-orange-500/10 text-orange-500",
    description: "Report service issues",
  },
  {
    value: "compliment",
    label: "Compliment",
    icon: Heart,
    color: "bg-pink-500/10 text-pink-500",
    description: "Share positive experiences",
  },
  {
    value: "other",
    label: "Other",
    icon: MessageCircle,
    color: "bg-purple-500/10 text-purple-500",
    description: "Any other feedback",
  },
];

const recentFeedback = [
  {
    type: "feature",
    title: "Add dark mode toggle",
    status: "under-review",
    date: "2 days ago",
    votes: 24,
  },
  {
    type: "bug",
    title: "Transaction history loading issue",
    status: "in-progress",
    date: "1 week ago",
    votes: 15,
  },
  {
    type: "compliment",
    title: "Excellent customer support",
    status: "resolved",
    date: "2 weeks ago",
    votes: 42,
  },
];

export default function FeedbackPage() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      type: "",
      subject: "",
      message: "",
      email: "",
      rating: 0,
    },
  });

  const selectedType = feedbackTypes.find(
    (type) => type.value === form.watch("type"),
  );

  const onSubmit = async (values: FeedbackFormData) => {
    setIsLoading(true);
    try {
      const result = await sendFeedbackEmail(values);

      if (result.success) {
        toast.success(result.message);
        form.reset();
      } else {
        toast.error(result.message);
      }
    } catch (error: any) {
      console.error("Failed to submit feedback:", error);
      toast.error(
        error?.message || "Failed to submit feedback. Please try again later.",
      );
    } finally {
      setIsLoading(false);
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
              badge="Feedback"
              title="Share Your"
              titleAccent="Experience"
              description="Your feedback helps us improve our digital wallet. Let us know what you think about our service."
              align="center"
            />
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        </div>

        <div className="mx-auto container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  {selectedType && (
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${selectedType.color}`}
                    >
                      <selectedType.icon className="h-6 w-6" />
                    </div>
                  )}
                  <div>
                    <CardTitle className="text-2xl font-bold">
                      Share Your Feedback
                    </CardTitle>
                    <p className="text-muted-foreground mt-1">
                      {selectedType
                        ? selectedType.description
                        : "Select a feedback type to continue"}
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
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                      <DynamicFormField
                        name="type"
                        label="Feedback Type *"
                        children={(field) => (
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select feedback type" />
                            </SelectTrigger>
                            <SelectContent>
                              {feedbackTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  <div className="flex items-center gap-2">
                                    <type.icon className="h-4 w-4" />
                                    {type.label}
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />

                      {selectedType?.value === "general" && (
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            Overall Rating
                          </label>
                          <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <Button
                                key={rating}
                                type="button"
                                variant="outline"
                                size="sm"
                                className={`p-2 ${
                                  (form.watch("rating") || 0) >= rating
                                    ? "text-yellow-500 border-yellow-500"
                                    : "text-muted-foreground"
                                }`}
                                onClick={() => form.setValue("rating", rating)}
                              >
                                <Star
                                  className={`h-4 w-4 ${(form.watch("rating") || 0) >= rating ? "fill-current" : ""}`}
                                />
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <DynamicFormField
                      name="subject"
                      label="Subject *"
                      children={(field) => (
                        <Input
                          {...field}
                          placeholder="Brief description of your feedback"
                          className="h-12"
                        />
                      )}
                    />

                    <DynamicFormField
                      name="email"
                      label="Email Address (Optional)"
                      children={(field) => (
                        <Input
                          {...field}
                          placeholder="your.email@example.com"
                          type="email"
                          className="h-12"
                        />
                      )}
                    />

                    <DynamicFormField
                      name="message"
                      label="Detailed Feedback *"
                      children={(field) => (
                        <Textarea
                          {...field}
                          placeholder="Please provide detailed information about your feedback..."
                          className="min-h-[140px] resize-none"
                        />
                      )}
                    />

                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="flex-1 h-14 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 button-glow"
                        disabled={
                          !form.watch("type") ||
                          isLoading ||
                          form.formState.isSubmitting
                        }
                      >
                        {isLoading || form.formState.isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                            Submitting...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="h-5 w-5" />
                            Submit Feedback
                          </div>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        className="h-14 rounded-xl text-base font-semibold"
                        onClick={() => form.reset()}
                      >
                        Clear
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Feedback */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background border-t border-muted/40">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        </div>

        <div className="mx-auto container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              badge="Community"
              title="Recent"
              titleAccent="Feedback"
              description="See what others are saying about our service."
              align="center"
            />

            <div className="mt-16 space-y-4">
              {recentFeedback.map((feedback, idx) => (
                <Card
                  key={idx}
                  className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 animate-in fade-in slide-in-from-bottom-12"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                              feedback.type === "feature"
                                ? "bg-green-500/10 text-green-500"
                                : feedback.type === "bug"
                                  ? "bg-red-500/10 text-red-500"
                                  : feedback.type === "compliment"
                                    ? "bg-pink-500/10 text-pink-500"
                                    : "bg-blue-500/10 text-blue-500"
                            }`}
                          >
                            {feedback.type === "feature" ? (
                              <Lightbulb className="h-4 w-4" />
                            ) : feedback.type === "bug" ? (
                              <Bug className="h-4 w-4" />
                            ) : feedback.type === "compliment" ? (
                              <Heart className="h-4 w-4" />
                            ) : (
                              <MessageSquare className="h-4 w-4" />
                            )}
                          </div>
                          <h4 className="font-semibold">{feedback.title}</h4>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{feedback.date}</span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              feedback.status === "resolved"
                                ? "bg-green-500/10 text-green-500"
                                : feedback.status === "in-progress"
                                  ? "bg-blue-500/10 text-blue-500"
                                  : "bg-orange-500/10 text-orange-500"
                            }`}
                          >
                            {feedback.status.replace("-", " ")}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{feedback.votes}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        </div>

        <div className="mx-auto container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              badge="Impact"
              title="Your Feedback"
              titleAccent="Matters"
              description="See how community feedback is shaping our digital wallet."
              align="center"
            />

            <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 mx-auto mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2">95%</h3>
                <p className="text-muted-foreground">
                  Of feedback addressed within 48 hours
                </p>
              </div>
              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-green-500 mx-auto mb-4">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2">47</h3>
                <p className="text-muted-foreground">
                  Features implemented from user suggestions
                </p>
              </div>
              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500 mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2">10K+</h3>
                <p className="text-muted-foreground">
                  Active community members
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
