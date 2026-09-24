-- Ejemplo de tabla con seguridad por filas (RLS). Borrar al crear el proyecto real.
-- Regla de la metodología: toda tabla nueva activa RLS y define sus políticas en la misma migración.

create table public.notas (
  id uuid primary key default gen_random_uuid(),
  usuario_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  contenido text not null check (char_length(contenido) between 1 and 5000),
  creado_en timestamptz not null default now()
);

alter table public.notas enable row level security;

-- Cada usuario solo ve, crea, edita y borra sus propias notas.
create policy "notas: leer las propias" on public.notas
  for select to authenticated using ((select auth.uid()) = usuario_id);

create policy "notas: crear propias" on public.notas
  for insert to authenticated with check ((select auth.uid()) = usuario_id);

create policy "notas: editar propias" on public.notas
  for update to authenticated
  using ((select auth.uid()) = usuario_id)
  with check ((select auth.uid()) = usuario_id);

create policy "notas: borrar propias" on public.notas
  for delete to authenticated using ((select auth.uid()) = usuario_id);

create index notas_usuario_id_idx on public.notas (usuario_id);
