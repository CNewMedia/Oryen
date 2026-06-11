# Readability & contrast pass (WCAG AA)

Pairs that failed before this pass and their token fixes:

| Location | Was | Now | Ratio target |
|----------|-----|-----|--------------|
| Body muted on cream (`--ink3`) | `#706A62` | `#5C564E` | ≥ 4.5:1 |
| Insights intro on cream | `var(--ink3)` | `var(--ink2)` | ≥ 4.5:1 |
| Spine labels on cream | `rgba(15,14,11,.60)` | `rgba(26,26,26,.72)` | ≥ 4.5:1 |
| Spine labels on pine | `rgba(242,239,232,.52)` | `var(--text-on-dark-subtle)` | ≥ 4.5:1 |
| Hero supporting line on pine | `rgba(242,239,232,.72)` | `var(--text-on-dark-muted)` | ≥ 4.5:1 |
| Aanpak note / step labels on pine | `.52–.65` alpha cream | `--text-on-dark-*` tokens | ≥ 4.5:1 |
| Offer body / list on pine | `.55–.62` alpha cream | `--text-on-dark` / muted | ≥ 4.5:1 |
| Secondary CTA on hero (ghost) | `rgba(242,239,232,.38)` | outline + `--cream-on-dark` | ≥ 4.5:1 |

New tokens: `--cream-on-dark`, `--text-on-dark`, `--text-on-dark-muted`, `--text-on-dark-subtle`, `--text-body`, `--text-body-lh`, `--text-label`, `--text-nav`, `--text-cta`.
