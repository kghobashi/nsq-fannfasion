# Live storefront review and typography refinement

## Current state

Kay launched fann.fashion and asked to correct Bank Gothic and remaining gaps. The homepage is now accessible without a storefront password. Shopify confirms FANN development (207859286385) is MAIN and the store is on Basic. This supersedes the earlier password/unpublished observations in the build status; the earlier record remains historical.

The active theme includes CSS references to Bank Gothic but contains no WOFF/WOFF2/TTF/OTF asset and no Bank Gothic webfont declaration. Shopify's generic uploaded files search was empty. Library filename searches found no matching font. Naming a font in CSS does not supply it to a visitor's browser.

All 18 products remain DRAFT. Five editorial pages are now published (About FANN, Design Philosophy, Legacy, Size & Care and FAQ). US/Canada, Europe, Asia and Middle East markets remain DRAFT; UAE is ACTIVE. The refinement now links to six published collection resources; the MAIN homepage retains the previous navigation until the refinement is published. The only visible footer policy link is Privacy Policy; this is not verification of policy completeness or legal accuracy.

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

## Continued build — catalogue browsing and editorial routes

Published the five editorial pages and corrected FAQ seasonal copy. Created the native `fann-storefront` menu with six collection children, Our Story, Special Editions and Contact. Published six collection resources and assigned their new templates. Products remain DRAFT.

The refinement includes a six-family collections overview and six native JSON collection templates. Each retains Shopify’s product grid, filter and pagination; while the collection has no published products, an editable concept gallery appears and the empty grid is hidden. Once products are published, the gallery hides and the native grid takes over. The Gold gallery contains the supplied Maroon render and the six-colour palette reference, not six invented finished product renders. Legacy contains six archetypes; Seasonal contains Halloween, Christmas, Birthday, New Year and Valentine’s.

Updated homepage and footer links to published resources. Disabled generic placeholder product recommendations on cart and 404 templates. Thirteen theme files accepted by Shopify after correcting the overview hero minimum height to 400. Native main-collection was not modified.

Browser QA: all six collection routes render in the refinement preview; supplied images load after lazy loading. Empty product-grid messaging is hidden. The collections overview links all six families, and the FAQ accordion expands with the correct collection/seasonal names. This verifies browsing, not checkout or fulfilment. Font rendering remains unverified because no Bank Gothic file is supplied.

## Operational audit — do not treat as launch approval

- VAT-inclusive pricing setting is enabled.
- Configured shipping origin is UAE, not the intended China origin.
- Existing general-profile shipping rates are denominated in AED: domestic 25 and 0, international 70. Rate conditions were not inspected; do not interpret the zero rate as unconditional free shipping. These are not approved China fulfilment rates.
- Only Privacy Policy is stored among shop policies. Returns, shipping, terms and legal business details still require approved inputs.
- Payment-provider verification was denied by the connector’s available scopes. This is not evidence that payment setup is absent.
- Draft markets remain inactive, so the visible region selector still offers UAE/EUR only.
- Bank Gothic WOFF2, confirmed product sizing/materials/care, inventory or preorder decision, dispatch/returns addresses, shipping costs/times, legal entity, support mailbox verification and a successful test order remain launch dependencies.

The updated theme remains unpublished: `FANN typography and navigation refinement` (207895134577). The connector cannot publish themes; merchant publication is required. No live theme files were overwritten. Public collection resources fall back to the MAIN theme’s existing collection template until this refinement is published. The store is publicly visible, not password protected.
