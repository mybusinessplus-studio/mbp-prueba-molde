import "server-only";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { envPublico } from "@/lib/env";

// Cliente para componentes de servidor, Server Actions y Route Handlers.
// Actúa con la sesión del usuario: las políticas RLS siguen aplicando.
export async function crearClienteServidor() {
  // Primero cookies(): marca la ruta como dinámica antes de validar variables, para que
  // `next build` no intente prerenderizar páginas con sesión (fallaría sin variables en CI).
  const almacenCookies = await cookies();
  const env = envPublico();

  return createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return almacenCookies.getAll();
        },
        setAll(cookiesAGuardar) {
          try {
            cookiesAGuardar.forEach(({ name, value, options }) =>
              almacenCookies.set(name, value, options),
            );
          } catch {
            // Llamado desde un Server Component: no puede escribir cookies.
            // La sesión se refresca en el siguiente Server Action o Route Handler.
          }
        },
      },
    },
  );
}
