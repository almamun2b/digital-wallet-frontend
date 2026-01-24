"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

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

export async function sendContactEmail(values: ContactFormData) {
  const validatedFields = contactSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
  const BREVO_SENDER_EMAIL = import.meta.env.VITE_BREVO_SENDER_EMAIL;

  if (!BREVO_API_KEY || !BREVO_SENDER_EMAIL) {
    console.error(
      "Brevo API key or sender email is missing in environment variables.",
    );
    return {
      success: false,
      message: "Server configuration error. Please try again later.",
    };
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: name,
          email: BREVO_SENDER_EMAIL,
        },
        to: [
          {
            email: BREVO_SENDER_EMAIL,
            name: "Digital Wallet Support",
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `Contact Form: ${subject}`,
        htmlContent: `
          <html>
            <head></head>
            <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
                <h1 style="margin: 0; font-size: 24px;">New Contact Message</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Digital Wallet Platform</p>
              </div>
              
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="margin: 0 0 15px 0; color: #333;">Contact Information</h3>
                <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
              </div>
              
              <div style="background: #ffffff; border: 1px solid #e9ecef; padding: 20px; border-radius: 8px;">
                <h3 style="margin: 0 0 15px 0; color: #333;">Message</h3>
                <p style="margin: 0; line-height: 1.6; color: #555;">${message.replace(/\n/g, "<br>")}</p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; text-align: center; color: #6c757d; font-size: 14px;">
                <p>This message was sent from the Digital Wallet Platform contact form.</p>
              </div>
            </body>
          </html>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo API error:", errorData);
      return {
        success: false,
        message: "Failed to send email via Brevo.",
      };
    }

    return {
      success: true,
      message: "Message sent successfully! We'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}

export async function sendFeedbackEmail(values: FeedbackFormData) {
  const validatedFields = feedbackSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { type, subject, message, email, rating } = validatedFields.data;

  const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
  const BREVO_SENDER_EMAIL = import.meta.env.VITE_BREVO_SENDER_EMAIL;

  if (!BREVO_API_KEY || !BREVO_SENDER_EMAIL) {
    console.error(
      "Brevo API key or sender email is missing in environment variables.",
    );
    return {
      success: false,
      message: "Server configuration error. Please try again later.",
    };
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: email || "Anonymous User",
          email: BREVO_SENDER_EMAIL,
        },
        to: [
          {
            email: BREVO_SENDER_EMAIL,
            name: "Digital Wallet Support",
          },
        ],
        replyTo: email
          ? {
              email: email,
              name: email,
            }
          : undefined,
        subject: `Feedback: ${type} - ${subject}`,
        htmlContent: `
          <html>
            <head></head>
            <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
                <h1 style="margin: 0; font-size: 24px;">New User Feedback</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Digital Wallet Platform</p>
              </div>
              
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="margin: 0 0 15px 0; color: #333;">Feedback Details</h3>
                <p style="margin: 5px 0;"><strong>Type:</strong> ${type.charAt(0).toUpperCase() + type.slice(1)}</p>
                <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
                ${email ? `<p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>` : ""}
                ${
                  rating
                    ? `
                  <p style="margin: 5px 0;"><strong>Rating:</strong> ${"★".repeat(rating)}${"☆".repeat(5 - rating)}</p>
                `
                    : ""
                }
              </div>
              
              <div style="background: #ffffff; border: 1px solid #e9ecef; padding: 20px; border-radius: 8px;">
                <h3 style="margin: 0 0 15px 0; color: #333;">Feedback Message</h3>
                <p style="margin: 0; line-height: 1.6; color: #555;">${message.replace(/\n/g, "<br>")}</p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; text-align: center; color: #6c757d; font-size: 14px;">
                <p>This feedback was submitted through the Digital Wallet Platform feedback form.</p>
              </div>
            </body>
          </html>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo API error:", errorData);
      return {
        success: false,
        message: "Failed to send feedback via Brevo.",
      };
    }

    return {
      success: true,
      message:
        "Feedback submitted successfully! Thank you for helping us improve.",
    };
  } catch (error) {
    console.error("Error sending feedback:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
