import dotenv from 'dotenv';
dotenv.config();

export const env = (key: string, defaultValue?: string): string => {
  return process.env[key] ?? (defaultValue as string);
};
