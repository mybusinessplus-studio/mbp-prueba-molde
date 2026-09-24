import { z } from "zod";

// Variables públicas: llegan al navegador. Nunca poner secretos aquí.
const esquemaPublico = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.url(),
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string().min(1),
});

// Variables solo de servidor.
const esquemaServidor = esquemaPublico.extend({
  SUPABASE_SECRET_KEY: z.string().min(1),
});

// Se valida al usarse (no al compilar) para que el proyecto compile sin Supabase configurado.
export function envPublico() {
  return esquemaPublico.parse({
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  });
}

export function envServidor() {
  if (typeof window !== "undefined") {
    throw new Error("envServidor() no puede usarse en el navegador.");
  }
  return esquemaServidor.parse(process.env);
}
