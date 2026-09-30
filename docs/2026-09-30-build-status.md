# FANN development build — 30 September 2026

## Verified operations

- Both apex domains and www hosts point to Shopify using A 23.227.38.65, AAAA 2620:127:f00f:5:: and www CNAME shops.myshopify.com, DNS-only. Existing Microsoft mail records were preserved.
- fann.fashion is Shopify's primary domain. Visiting https://fannfashion.com redirected over HTTPS to https://fann.fashion/password. Password protection remains in place.
- FANN development, theme 207859286385, remains unpublished. MAIN was not changed or published.
- Added editable homepage hero, three core collection cards, Black and Legacy features, philosophy/story content and all five seasonal editions.
- Added native localization form in the header group, plus editable footer brand treatment.
- Created five editorial JSON templates and assigned them to the matching draft pages. FAQ uses accessible native details/summary blocks.
- Retained native product/collection architecture; refined image gallery and spacing and added a concept-development notice.
- Applied EUR working prices to 18 draft products / 27 variants in the earlier pricing operation. Silver 25; Gold 45; Platinum 65; Black 85; Legacy 95; Seasonal 35.
- Created draft markets: North America (US and Canada), Europe, Asia and Middle East. Local currencies requested and tax-inclusive price strategy set. UAE remains the pre-existing active market. Country coverage is an initial configuration requiring fulfilment review, not a worldwide delivery promise.
- Shopify Liquid validator passed all changed sections and templates, using the bundled documentation fallback when upstream documentation refresh timed out. GraphQL writes returned no user errors.

## Browser verification

- Desktop homepage and five seasonal cards rendered in the saved development theme.
- Mobile hero, top localization bar, two-column seasonal grid and menu were visually checked.
- Fixed Horizon header drawer staying open after same-page anchor navigation; retested mobile Special Editions link and confirmed drawer closes and destination appears. The patch preserves the native close/focus lifecycle and normal link behavior.
- Native empty-cart drawer opens and displays its empty state. Homepage CTA and localization form submission were exercised. Only the existing UAE/EUR context was available.
- Product purchase flows, page templates on published resources, checkout, payments and email delivery are not yet end-to-end verified.

## Publication boundary

Automatic approval review rejected publishing the editorial pages. The safer operation assigned their templates while explicitly retaining isPublished=false. No publication workaround was used. Editorial page and theme publication require a concrete approval before they become visible. Products remain DRAFT.

## Not market ready

Checkout/payment tests, shipping rates and transit times, final size ranges and garment specifications, inventory/preorder decisions, actual support mailbox delivery, approved policies, business onboarding, font rights and production imagery remain open. A selected subscription alone does not complete payment or tax setup. The connector still reports trial.

The localization bar lists Shopify's available countries and currencies; inactive markets are intentionally absent. Multi-currency checkout is not yet verified. Seasonal inventory tracking also needs review before activation. No test order or external email was sent.

## Recovery

Old apex targets: fannfashion.com had 15.197.148.33 and 3.33.130.190; fann.fashion had 92.205.3.60. Both www CNAMEs pointed to their apex and were proxied. Restore those only if explicitly rolling back the authorized domain migration. No mail record was changed.

Theme source in shopify-theme is an overlay for Horizon. Reapply only to the unpublished development theme after reading current Shopify values; preserve later merchant edits.
