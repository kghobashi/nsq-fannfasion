# FANN Horizon theme overlay

This directory contains changed files for the existing Horizon theme, not a complete standalone installable theme. Apply to an unpublished copy of Horizon. The remaining native product, collection, cart, account and search dependencies stay in the Shopify theme.

Target store: 8gdtem-bi.myshopify.com. Target theme: FANN development (207859286385), unpublished.

Homepage sections and all page templates expose native Shopify settings and blocks. Collection cards use image and collection pickers. Links to draft collection/product resources remain off. The preview menu uses homepage anchors until publication is approved.

The region/currency bar uses Shopify localization and available countries, with progressive enhancement through a native form. Draft markets do not appear until activated. Bank Gothic uses a fallback until a licensed webfont is supplied.

Theme settings include the supplied mark and favicon. Product images are concept renders. No orders or preorders are enabled by this overlay.

The native assets/header-drawer.js has a small same-page anchor listener that calls the existing close method. Preserve or reapply this change when upgrading Horizon; it prevents mobile navigation from leaving the drawer over the destination.
