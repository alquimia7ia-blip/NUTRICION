create table public.days (
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  date date not null,
  data jsonb not null,
  updated_at bigint not null,
  primary key (user_id, date)
);
create table public.weigh_ins (
  id text not null,
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  date date not null,
  kg numeric(5,1) not null,
  fat numeric(4,1),
  deleted boolean not null default false,
  updated_at bigint not null,
  primary key (user_id, id)
);
create table public.settings (
  user_id uuid primary key references auth.users(id) on delete cascade default auth.uid(),
  data jsonb not null,
  updated_at bigint not null
);
create table public.push_subscriptions (
  endpoint text primary key,
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  subscription jsonb not null,
  created_at timestamptz not null default now()
);
create table public.push_log (
  user_id uuid not null references auth.users(id) on delete cascade,
  day date not null,
  reminder text not null,
  sent_at timestamptz not null default now(),
  primary key (user_id, day, reminder)
);
create index push_subscriptions_user_idx on public.push_subscriptions(user_id);

alter table public.days enable row level security;
alter table public.weigh_ins enable row level security;
alter table public.settings enable row level security;
alter table public.push_subscriptions enable row level security;
alter table public.push_log enable row level security;

create policy "own days" on public.days for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "own weigh_ins" on public.weigh_ins for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "own settings" on public.settings for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "own push subscriptions" on public.push_subscriptions for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
-- push_log: sin políticas, solo lo usa la función del servidor (service role).
