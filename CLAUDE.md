# mariposa250 — Project CLAUDE.md

> ## 🔒 READ FIRST — KSG operating rules live upstream, not in this file
>
> 1. **Notion is the source of truth.** Canonical rule page: **"🔒 CANONICAL: KSG System of Record — Storage & Source of Truth Rule"** → Notion `3bfa27745fa981f3bf12da8fd487377f`
> 2. **🗺️ THE MAP — "KSG Source-of-Truth Index"** → Notion database `60d8cbd5e1cc4b1999cca90667f7bffe`. Every platform's repo, host, local path, prod, Supabase ref, Notion workspace, and applicable standards. *(Replaces the old ~~`Xav Master Control/KSG Source-of-Truth Index (2026-07-13).md`~~ **(never existed on disk — superseded by the Notion Index above)**, which never existed on disk.)*
> 3. **Ecosystem root:** `github.com/xav-ksg/ksg-control` → `CLAUDE.md` (local: `~/Developer/ksg-control/CLAUDE.md`). Authorization posture, DEPLOY MODE, concurrency, cross-platform rules.
>
> Everything below this block is repo-specific. Where it conflicts with the above, **the above wins.**

## Non-negotiables (summary — full text in the ecosystem root)

- **Secrets:** 1Password Kenwood vault only. Never in this repo, Drive, Notion, chat, or a downloaded JSON. `.env*` stays gitignored.
- **Concurrency — one WRITER per working tree.** Unlimited parallel readers/reviewers/testers. Parallel writers each get their own `git worktree`. Never two writers in the same tree. Worktrees isolate code, *not* data — a shared Supabase project still collides.
- **DEPLOY MODE:** production deploys are gated *unless* Xav has said "DEPLOY MODE ON" this session. When ON, announce-then-execute — never ask. Always gated regardless: destructive migrations, data deletion, DNS, secret rotation, money movement, external comms.
- **Never deploy an edge function without diffing deployed-vs-repo first.** This has already caught two uncommitted production features.
- **Cross-platform:** MacBook Pro M5 (primary) + Dell XPS 15 / Win 11. No hardcoded absolute paths. lowercase-kebab filenames. `.gitattributes` with `eol=lf` is mandatory — never remove it.
- **Canonical names:** FilmComOS (not "FilmOS") · CivicHub360 (CH360) · YourEventsHub (YEH) · Frost Shop Marketplace (FSM) · Grants Platform.
- **Lovable is PROHIBITED.** No account exists. Never connect, reference, or reintroduce it.
