# Live storefront review and typography refinement

## Current state

Kay launched fann.fashion and asked to correct Bank Gothic and remaining gaps. The homepage is now accessible without a storefront password. Shopify confirms FANN development (207859286385) is MAIN and the store is on Basic. This supersedes the earlier password/unpublished observations in the build status; the earlier record remains historical.

The active theme includes CSS references to Bank Gothic but contains no WOFF/WOFF2/TTF/OTF asset and no Bank Gothic webfont declaration. Shopify's generic uploaded files search was empty. Library filename searches found no matching font. Naming a font in CSS does not supply it to a visitor's browser.

All 18 products remain DRAFT. Five editorial pages remain unpublished. US/Canada, Europe, Asia and Middle East markets remain DRAFT; UAE is ACTIVE. Public homepage collection cards intentionally have no unavailable product links. The only visible footer policy link is Privacy Policy; this is not verification of policy completeness or legal accuracy.

## Saved refinement

Created unpublished copy 207895134577, FANN typography and navigation refinement. The Shopify connector supports theme file writes on unpublished themes only. No live theme was overwritten or published during this refinement.

- Added native FANN brand settings for a licensed Bank Gothic WOFF2 URL, actual file weight, homepage description and social sharing image.
- Added conditional font-face loading, preload and display swap. Applied shared display typography to native heading/subheading variables and FANN headings. Kept body/UI Montserrat. No font binary is included in this public repository.
- Added editable footer link blocks: homepage story/collection anchors, Contact and publication-aware page resource links. Unpublished page resources remain hidden.
- Added missing homepage description fallback, default social share image fallback, charcoal theme colour and Apple touch icon.
- Retained draft catalogue, existing markets and actual business settings. No invented sizes, shipping rates, stock or payment details.

## Validation

Changed Liquid, JSON templates and new brand settings passed Shopify validation. The bundled full settings schema validator flags the unchanged Horizon color_palette setting because its schema is older than the installed theme. Current Shopify documentation confirms color_palette is supported. The new settings group passed standalone validation, and Shopify accepted all ten updated theme files without user errors. Missing local native dependencies were fetched for layout validation without modifying them.

## Required input and release gaps

Bank Gothic cannot be rendered and verified until Kay supplies a web-licensed WOFF2 file or hosting URL. Its URL and weight must be set in Theme settings > FANN brand, then checked in browser network/font rendering and desktop/mobile line wrapping. A desktop font file alone is not proof of web embedding permission.

The refined copy still needs final font QA and merchant publication. Product availability, sizes and tested specifications, inventory/preorders, payment onboarding, delivery from China, returns/shipping/terms, support mailbox delivery and a test order remain unresolved. Public visibility does not establish a functioning shop. Do not activate the draft markets or sell the concept catalogue as part of a typography fix.
