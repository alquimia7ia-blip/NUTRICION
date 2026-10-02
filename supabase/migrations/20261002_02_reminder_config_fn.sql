-- Requiere los secretos vapid_private, vapid_public y cron_secret en Vault (creados aparte, nunca en el repo).
create or replace function public.reminder_config()
returns jsonb
language sql
security definer
set search_path = ''
as $$
  select jsonb_object_agg(name, decrypted_secret)
  from vault.decrypted_secrets
  where name in ('vapid_private', 'vapid_public', 'cron_secret');
$$;
revoke all on function public.reminder_config() from public, anon, authenticated;
grant execute on function public.reminder_config() to service_role;
