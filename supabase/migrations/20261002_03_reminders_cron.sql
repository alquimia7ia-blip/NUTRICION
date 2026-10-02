create extension if not exists pg_cron;
create extension if not exists pg_net;

select cron.schedule(
  'mi-plan-send-reminders',
  '*/10 * * * *',
  $$
  select net.http_post(
    url := 'https://vvfetmseundojflqdqov.supabase.co/functions/v1/send-reminders',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-cron-secret', (select decrypted_secret from vault.decrypted_secrets where name = 'cron_secret')
    ),
    body := '{}'::jsonb
  );
  $$
);

select cron.schedule('mi-plan-clean-push-log', '30 3 * * *', $$ delete from public.push_log where day < current_date - 7 $$);
