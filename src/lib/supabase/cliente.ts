import { createBrowserClient } from "@supabase/ssr";
import { envPublico } from "@/lib/env";

// Cliente para componentes del navegador ("use client").
// Usa solo la clave publicable: los permisos reales los imponen las políticas RLS.
export function crearClienteNavegador() {
  const env = envPublico();
  return createBrowserClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  );
}
