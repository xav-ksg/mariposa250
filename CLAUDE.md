# mariposa250 — Project CLAUDE.md

> ## 🔒 READ FIRST — KSG operating rules live upstream, not in this file
>
> 1. **Notion is the source of truth.** Canonical rule page: **"🔒 CANONICAL: KSG System of Record — Storage & Source of Truth Rule"** → Notion `3bfa27745fa981f3bf12da8fd487377f`
> 2. **🗺️ THE MAP — "KSG Source-of-Truth Index"** → Notion database `60d8cbd5e1cc4b1999cca90667f7bffe`. Every platform's repo, host, local path, prod, Supabase ref, Notion workspace, and applicable standards. *(Replaces the old `Xav Master Control/KSG Source-of-Truth Index (2026-07-13).md`, which never existed on disk.)*
> 3. **Ecosystem root:** `github.com/xav-ksg/ksg-control` → `CLAUDE.md` (local: `~/Developer/ksg-control/CLAUDE.md`). Authorization posture, DEPLOY MODE, concurrency, cross-platform rules.
>
> **Standards are required, not advisory.** Load 🧭 CANONICAL: KSG Standards Register — The One Door (Notion `3c0a27745fa98181ae66e3ce4b363c3c`). Reference that page only, not individual standards.
>
> Everything below this block is repo-specific. Where it conflicts with the above, **the above wins.**

## Non-negotiables (summary — full text in the ecosystem root)

- **Secrets:** 1Password Kenwood vault only. Never in this repo, Drive, Notion, chat, or a downloaded JSON. `.env*` stays gitignored.
- **Concurrency — one WRITER per working tree.** Unlimited parallel readers/reviewers/testers. Parallel writers each get their own `git worktree`. Never two writers in the same tree. Worktrees isolate code, *not* data — a shared Supabase project still collides.
- **DEPLOY MODE:** production deploys are gated *unless* Xav has said "DEPLOY MODE ON" this session. When ON, announce-then-execute — never ask. Always gated regardless: destructive migrations, data deletion, DNS, secret rotation, money movement, external comms.
- **Never deploy an edge function without diffing deployed-vs-repo first.** This has already caught two uncommitted production features.
- **Cross-platform:** MacBook Pro M5 (primary) + Dell XPS 15 / Win 11. No hardcoded absolute paths. lowercase-kebab filenames. `.gitattributes` with `eol=lf` is mandatory — never remove it.
- **Canonical names:** FilmComOS (not "FilmOS") · CivicHub360 (CH360) · YourEventsHub (YEH) · Frost Shop Marketplace (FSM) · GrantsOS.
- **Lovable is PROHIBITED.** No account exists. Never connect, reference, or reintroduce it.

---

# Mariposa 250 — Repo Guide

**Domain tag:** [M250]  ·  **Status:** live (public civic site)  ·  **Owner:** Xav

## What this is
Official site for the Mariposa 250 / America 250 celebration (July 4, 2026).

## Governing standards (read first; canonical index is the Notion Standards Register — 3c0a27745fa98181ae66e3ce4b363c3c)
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
Default to acting on internal/reversible work. PAUSE AND CONFIRM before: external comms, financial/payment changes, production deploys, destructive ops (deletes, schema drops, force-push), anything >$100 impact, DNS/domain/1Password changes. Direct pushes to the default branch are treated as gated.

*CLAUDE.md parity pass 2026-08-26 — Community Pulse tag retired in favour of [M250]; $100 gate; Standards Register added.*
