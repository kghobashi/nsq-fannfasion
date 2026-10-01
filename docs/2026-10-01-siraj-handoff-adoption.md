# Siraj handoff adoption — FANN
Date: 2026-10-01
Status: source review complete; live implementation blocked by Shopify connection targeting Siraj.

## Sources
- Siraj: https://github.com/kghobashi/nsq-siraj/blob/73debf4db34b727c223f866ccda13945aa240ee8/integrations/shopify/handoffs/2026-10-01-siraj-to-fann.md
- FANN reviewed branch: fix/fann-font-navigation, commit 136a5090c43c314ac101d6e0da887103d9c2751b.
- Shopify get_shop_info on this date returned Siraj Candles / sirajcandles.com. No Shopify writes were made.

## Bounded implementation checklist
1. Reconnect Shopify to Fann Fashion / 8gdtem-bi.myshopify.com / fann.fashion. Read current MAIN theme and duplicate it to an unpublished draft. Reconcile merchant edits against repository before applying changes.
2. Font coverage: main layout already renders fann-brand-font after theme variables. Preserve Bank Gothic headings and Montserrat body. layout/password.liquid is absent from the repository overlay; fetch the live file and check its font inclusion, ordering and logo before patching. Verify home, collections, products, support and password layouts after reload.
3. Currency: saved config/settings_data.json has currency_code_enabled_product_pages, currency_code_enabled_product_cards and currency_code_enabled_cart_items set false. Enable these in the CURRENT draft settings where supported and inspect native price rendering. Use contextual product/variant prices and money_with_currency, including compare-at, unit prices and cart totals. Do not overwrite the whole settings file from this snapshot. No fixed EUR price strings were found in the reviewed local custom-section and template files; this is not a complete live-product-content audit.
4. Concept galleries: fann-collection-stories currently renders images, titles and descriptions, without a separate price field. Retain native product grids once products are published. Do not add draft-price snapshots unless needed and sourced from FANN contextualPricing. Never relabel EUR amounts as AED/USD/GBP/CAD.
5. Backgrounds: reviewed FANN collection story media uses class-scoped image rules rather than the broad Siraj selector. No equivalent defect established. Check actual hero/backdrop bounds and footer gaps before changing CSS. Preserve the approved composition; viewport-height heroes are a review point, not an automatic redesign.
6. Support and footer: review About, Design Philosophy, Legacy, Size & Care, FAQ and Contact for font hierarchy, responsive spacing, readable contrast and links. Keep content in native editable blocks. Preserve FANN policy facts; do not copy candle claims.
7. Newsletter: existing footer references native email-signup. Fetch current block and locales; verify unique form/input IDs, newsletter tags, accessible labels, error/success feedback and consent/privacy copy. No signup, customer creation or email delivery tested in this pass. Do not send test messages or activate welcome automation without appropriate authorization.
8. QA: validate changed Liquid/schema, upload sections before dependent templates, read back files, inspect desktop/mobile. Test only enabled markets and record inactive-market limitations. Confirm EUR/GBP/USD/CAD availability against actual configuration; do not activate draft markets implicitly.
9. Release: save changed source and evidence; provide exact unpublished theme name for user publication. Never mark draft implementation as live. Recheck connected shop before each deployment session.

## Existing implementation to retain
- Editable FANN custom sections, native product/collection controls, concept galleries while products remain draft.
- Native combined region/currency selector.
- Seasonal/special editions and approved FANN pricing.
- FANN branding, fonts and assets. No Siraj Royale transformation or candle-specific content.

## Still unverified
Current live theme/files, password page, product publication status, active markets, native newsletter behaviour, checkout and payment state. Previous FANN records list draft products and international markets, pending shipping rates and unresolved legal/payment readiness; refresh these before treating them as current facts.

No theme changes were deployed or browser QA completed during this blocked connection pass.
