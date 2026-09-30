# Shopify content source

> Current status: see [30 September build status](../docs/2026-09-30-build-status.md). The older foundation snapshot below predates the approved concept, supplied seasonal batch, EUR working prices, editable theme and domain connection.

This folder contains the editable content blueprint and source payload for the connected FANN development store. See shopify-sync.json for actual resource IDs and operation results; existence of a payload is not proof of upload.

| File | Purpose |
|---|---|
| catalog.json | 13 draft parent products, 22 provisional colour/design variants, product copy and source-image mappings |
| collections.json | Five populated collection families plus the reserved Seasonal Editions collection |
| pages.json | Five unpublished editorial pages with semantic copy and separate block content |
| homepage-copy.json | Homepage copy split by narrative section |
| contact-copy.json | Copy applied to the existing native contact page; form delivery verification remains open |
| shopify-sync.json | Store resource IDs, statuses, URLs and verification evidence |

Product descriptions are draft editorial copy, not final specifications. All variants use tracked inventory and zero administrative placeholder amounts because final retail prices are not approved. There are no invented size variants. Do not publish or sell this catalogue until prices, sizes, tested product details and policies are complete.

Gold colour names are provisional. Silver and Platinum renders show differing construction across colours; group them as colour variants for initial organization, then reconcile the real base patterns before release. Black Mesh is one design-development product with a montage of alternatives, not a multipack. Legacy's four additional source archetypes are roadmap ideas, not draft products in this batch.

Shopify stores the editable product and page content. GitHub stores the source intent, field mapping and decision history. After manual edits in Shopify, reconcile by resource ID and inspect current values before reapplying a payload; do not blindly replay creates or overwrite newer edits.
