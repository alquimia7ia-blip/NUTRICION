-- Ideas y problemas que Salomón reporta desde la app durante las pruebas.
create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  kind text not null check (kind in ('idea', 'problema')),
  text text not null check (char_length(text) between 1 and 2000),
  screen text,
  created_at timestamptz not null default now()
);
alter table public.feedback enable row level security;
create policy "own feedback" on public.feedback for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
