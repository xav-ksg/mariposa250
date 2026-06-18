# Mariposa 250 — Repo Guide

**Domain tag:** [CP]  ·  **Status:** live (public civic site)  ·  **Owner:** Xav

## What this is
Official site for the Mariposa 250 / America 250 celebration (July 4, 2026).

## Governing standards (read first; canonical copies in the Master Control Drive folder)
- KSG Platform Harmony Standard (stack, data model, components, deploy)
- KSG Repo Compliance Standard (repo hygiene: CLAUDE.md, secrets, branch = KSG)
- KSG Scale-Trigger & Stack Migration Standard (when to scale / leave Vercel+Supabase)
- Search Everywhere Standard (public SEO surface)

## Stack
- Framework: Next.js
- Backend: none
- Components: Tailwind
- Deploy: Vercel. Repo PUBLIC by intent (civic site). Default branch standardizing from `main` to `KSG`.

## Secrets (R2)
Real secrets live in 1Password (Kenwood vault) — never committed. Only publishable/anon keys + public URLs may appear in source. Local dev uses gitignored `.env.local`; commit only `.env.example`.

## Authorization posture
Default to acting on internal/reversible work. PAUSE AND CONFIRM before: external comms, financial/payment changes, production deploys, destructive ops (deletes, schema drops, force-push), anything >$500 impact, DNS/domain/1Password changes. Direct pushes to the default branch are treated as gated.