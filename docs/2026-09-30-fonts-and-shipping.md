# FANN font installation and shipping preparation — 2026-09-30

## Store and theme
Verified Fann Fashion / fann.fashion before writes. The merchant had published theme 207895134577. Duplicated that exact theme into unpublished theme 207898050929, **FANN Bank Gothic final**. The connector cannot publish themes. No live theme files were overwritten.

## Typography and icon
Installed supplied bgothm(1).woff2 and bgothl(1).woff2 as private Shopify theme assets `fann-bank-gothic-medium.woff2` and `fann-bank-gothic-light.woff2`. Medium is the display default; Montserrat remains body/UI. WOFF companions were inspected: family names BankGothic Md BT / Medium and BankGothic Lt BT / Light, both declaring OS/2 weight 400. CSS maps the Light face to 300 for deliberate selection, Medium to 400. Optional native URL override remains editable. Supplied font binaries are intentionally excluded from this public repository; deployments must copy them from the authorized source into the two asset filenames before publishing.

Native favicon setting now explicitly matches the current header logo. Browser favicon request points to fann-fann_logo-2.png at 48px; the existing 180px Apple touch icon remains. No redesigned mark or replacement artwork was generated.

Verified actual Bank Gothic appearance on desktop and mobile homepage; desktop computed headings use FANN Bank Gothic at 400 and have no horizontal document overflow. Shopify accepted all uploaded files. Liquid snippet, settings data and layout validated; full upstream settings-schema validation has the previously documented Horizon color_palette compatibility limitation.

## Shipping
Created in General profile 146962809201 / existing location group 152257429873:
- Europe — rates pending: 48 country/territory codes from the existing Europe market, excluding GB.
- United Kingdom — rates pending: GB.
- US & Canada — rates pending: US and CA.

No rate definitions were added to these zones and no markets activated. Countries moved out of inherited International zone; other International destinations and their existing rates preserved, including existing province selections. UAE domestic setup unchanged. UK remains within the draft Europe market, with a separate shipping zone; independent UK market customization can be added when needed.

The existing origin remains UAE. China is the intended future dispatch origin, but the actual supplier address is still required. Business/legal address is independent from fulfilment origin. No fictitious warehouse or location was created.

## Test order plan
No test order performed or payment settings changed. Shopify's Test payment gateway can simulate approved/declined/error transactions on a paid plan independently of completing Shopify Payments onboarding. Shopify Payments' own test mode requires its setup to be completed.

When ready, protect the storefront during testing; enable the Test gateway; make a controlled product available with test inventory; temporarily configure eligible market/shipping conditions; exercise checkout, order creation, totals, inventory, notification delivery and fulfilment/tracking. Test representative Europe, UK, US and Canada addresses. Restore intended market/payment/product state afterwards. This does not validate real gateway settlement/payouts; do a controlled live transaction after provider onboarding and verification.

Sources:
https://help.shopify.com/en/manual/checkout-settings/test-orders/payments-test-mode
https://help.shopify.com/en/manual/international/shipping/shipping-zones
