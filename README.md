# FANN Fashion

**Designed for Confidence. Engineered for Comfort.**  
**Support in Style.**

Canonical brand foundation and website preparation for FANN Fashion, a men's fashion brand entering through premium underwear within the NSQ.global portfolio.

## Current foundation

| Area | Governing decision |
|---|---|
| Display typography | Bank Gothic |
| Body and UI typography | Montserrat |
| Brand promise | Designed for Confidence. Engineered for Comfort. |
| Tagline | Support in Style. |
| Current development range | Silver, Gold, Platinum, Black and Legacy; Seasonal Editions reserved |
| Current scope | No erotic-themed underwear; X Edition is excluded from the current launch and website |
| Commerce | Shopify development store connected; native editable theme follows website concept review |
| Intended public domain | fann.fashion; domain configuration has not been verified here |

The identity and scope decisions above were confirmed through Kay’s 28–29 September 2026 instructions. This is a brand foundation, not a completed product specification or deployed website.

## Start here

1. [Brand loading order and authority](brand/README.md)
2. [Approved decisions](brand/decisions.md)
3. [Website brief and open decisions](brand/website.md)
4. [Remaining source and product gaps](docs/gap-register.md)
5. [Skill assignments](docs/skill-routing.md)
6. [Working role prompt](docs/role-prompt.md)

The substantive Strategic Updates bible and 19 images supplied on 29 September have now been reviewed. The [intake record](docs/sources/2026-09-29-strategic-bible-intake.md) reconciles collection names, proposed claims and concept imagery. The original empty-file receipt is retained as history.

Start the commerce phase with [catalogue content](commerce/README.md), the [native Shopify structure](docs/shopify-structure.md) and [copy/experience contract](docs/experience-contract.md). See commerce/shopify-sync.json for the actual store resources and verified state.

## Repository structure

| Location | Purpose |
|---|---|
| `brand/` | Canonical identity, voice, visual system, scope and decision history |
| `docs/` | Preparation, sources, gaps, role and skill routing |
| `design/` | Approved primitive tokens and asset inventory |
| `schemas/` | Validation contracts for the brand package and context packet |
| `scripts/` | Brand validation and deterministic context generation |

The repository is currently public. Store public-safe brand and implementation material here. Private economics, sourcing negotiations, personal information, credentials and unlicensed binaries belong outside this repository.

## Validation

Requires Node.js and no npm dependencies:

```bash
node scripts/validate-brand-package.mjs .
node scripts/build-context-packet.mjs . website philosophy decisions
```

The second command prints the derived context packet. Its checked-in counterpart is `brand/context-packet.json`. Open questions are part of the contract and must not be inferred away.

Current phase: draft catalogue, consolidated copy and website structure. Website concept selection comes next, followed by the native Shopify skeleton and individual garment-image refinement. No finished product or public storefront launch is implied.
