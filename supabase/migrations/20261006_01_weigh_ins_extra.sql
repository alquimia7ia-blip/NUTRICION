-- Datos extra de cada análisis Fitmao (grasa en kg, músculo, grasa visceral, etc.).
alter table public.weigh_ins add column if not exists extra jsonb;
