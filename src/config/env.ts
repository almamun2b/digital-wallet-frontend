interface EnvConfig {
  baseUrl: string;
}

const env: EnvConfig = {
  baseUrl: import.meta.env.VITE_BASE_API_URL,
};

export { env };
