interface EnvConfig {
  baseUrl: string;
  brevoApiKey?: string;
  brevoSenderEmail?: string;
}

const env: EnvConfig = {
  baseUrl: import.meta.env.VITE_BASE_API_URL,
  brevoApiKey: import.meta.env.VITE_BREVO_API_KEY,
  brevoSenderEmail: import.meta.env.VITE_BREVO_SENDER_EMAIL,
};

export { env };
