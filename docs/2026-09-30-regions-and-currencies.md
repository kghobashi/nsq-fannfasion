# FANN regional shipping and currencies — 2026-09-30

Verified store Fann Fashion / fann.fashion. FANN Bank Gothic final (207898050929) is now MAIN.

## Additional shipping coverage
Created Asia — rates pending (29 countries) and Middle East — rates pending (12 countries) from the existing approved draft market membership. These zones have no shipping rates. Moved matching countries out of the inherited International zone; Australia and New Zealand remain in that existing zone with its previous rate and province selections. Existing Europe, UK, US/Canada and UAE zones retained. China dispatch location remains pending the supplier’s actual address.

## Local currency configuration
Successfully set localCurrencies=true for Asia, Europe, Middle East, North America — US & Canada and UAE. UAE base currency is AED. International market fallback/base is EUR; each supported country uses its local currency. Catalogue base prices remain EUR.

The existing native header localization form already pairs country and currency, so no theme copy or code change was required. Browser verified United Arab Emirates / AED and an expanded selector showing United Arab Emirates — AED. International markets remain DRAFT as previously requested; their countries will appear in the selector once activated. UK is part of the Europe market but has its own shipping zone. This is a combined country/currency selector, not an arbitrary independent currency conversion widget.

Local-currency checkout is not yet verified. Shopify documentation requires Shopify Payments or Adyen as primary gateway for local-currency processing; other providers can revert checkout to the store currency. Market configuration success is not proof of payment-provider readiness.

Sources:
https://help.shopify.com/en/manual/international/payments
https://help.shopify.com/en/manual/international/pricing/limitations
