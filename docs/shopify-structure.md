# Editable Shopify structure

> Current status: see [30 September build status](2026-09-30-build-status.md). The older foundation snapshot below predates the approved concept, supplied seasonal batch, EUR working prices, editable theme and domain connection.

Status: content and information architecture prepared; website concept selection precedes theme implementation.

## Sitemap and content ownership

| Route | Role | Native content / structure |
|---|---|---|
| / | Promise, collection choice, design philosophy, Legacy, development note, eventual signup | JSON index template; hero, collection-list, image-with-text, rich-text and signup sections/blocks |
| /collections | Collection overview | Native list-collections JSON template |
| /collections/silver-line | Everyday collection | Native collection hero/description and product grid |
| /collections/gold-line | Expressive core collection | Shared collection template; six colours on one product |
| /collections/platinum-line | Refined collection | Shared collection template; three colours on one product |
| /collections/black-line | Four distinct concepts | Shared collection template with optional editorial blocks |
| /collections/legacy-line | Six initial archetypes | Shared collection template plus narrative blocks |
| /collections/seasonal-editions | Reserved | Unpublished, not linked until next source batch |
| /products/{handle} | Garment concept, colour choice and later verified specifications | Native product gallery, title, description, variant picker and optional collapsible blocks |
| /pages/about-fann | Brand philosophy and purpose | Native rich-text/image blocks; draft body available as a content record |
| /pages/design-philosophy | Form, comfort and development approach | Native rich-text/image blocks |
| /pages/legacy | Archetype narratives | Repeatable native story blocks linked to products when available |
| /pages/size-and-care | Accurate guidance when samples exist | Draft holding copy now; measured size table and collapsible care content later |
| /pages/faq | Development-stage questions | Native accordion blocks |
| /pages/contact | Contact | Reuse existing page; native Shopify contact form |
| /cart, /search | Utility flows | Native theme templates and behavior |
| Policy routes | Required commerce information | Shopify policy records after operational/legal facts are supplied |

Do not expose links to unpublished resources on a live theme. Prepared FANN menus remain unassigned until the development theme is built. Do not create a second Contact page or overwrite existing default menus.

## Main navigation plan

Collections: Silver / Gold / Platinum / Black / Legacy. Then Our Story, Design Philosophy and Contact. Utility controls: search and cart when shopping is enabled. Seasonal Editions joins Collections after intake. Legacy editorial storytelling is reachable from its collection and Our Story; avoid redundant top-level entries.

Footer: About FANN, Design Philosophy, The Legacy Story, Size & Care, FAQ, Contact, then real Shopify policy links when approved. No invented social URLs.

## Native editing contract

1. Use the installed Horizon architecture as the starting candidate. Build in an unpublished theme after a website concept is selected.
2. Use JSON templates for index, collection, product and editorial pages; use section groups for header/footer.
3. Text lives in text/richtext settings or the relevant Shopify content fields. Each page's content units are enumerated in commerce/pages.json. Do not flatten a page into a screenshot, canvas or monolithic Custom Liquid section.
4. Expose native image/resource pickers, focal points, mobile imagery where needed, text alignment, readable width, spacing, colour scheme and CTA controls.
5. Product gallery, title, description, price, variant selection, availability and purchase controls remain native Shopify components. Show concept status and suppress purchase/placeholder prices in any eventual concept preview.
6. Use shared templates and per-product content to avoid one custom template per colour. Do not introduce a page-builder app or a second product database.
7. Merchant changes must survive theme editor save/reload, template reuse, mobile preview and later source updates.

## Acceptance check for the skeleton phase

Kay can change headline, paragraph, image, CTA/link, section order, alignment, spacing and colour scheme without code. He can select a product/collection through a resource picker and update product details in Shopify. Changes persist after reload. Verify desktop/mobile, keyboard navigation, contrast, forms, variant media and no price/purchase leakage from concept products. Do not claim this check passed until the theme exists and is tested.

References: https://shopify.dev/docs/storefronts/themes/architecture/templates and https://shopify.dev/docs/storefronts/themes/store/requirements.
