# Index.html Privacy Update Instructions

**IMPORTANT:** The `index.html` file cannot be updated programmatically because it's in the read-only files list. However, the structured data in that file needs to be privacy-aware.

## Manual Update Required

When privacy mode is active, the structured data in `index.html` (lines 35-75) should reflect generic information. Here's what needs to be changed:

### Current state (lines 43-54):
```json
"address": {
  "@type": "PostalAddress",
  "addressLocality": "Ahmedabad",
  "addressRegion": "Gujarat",
  "addressCountry": "IN"
},
"contactPoint": {
  "@type": "ContactPoint",
  "contactType": "Customer Service",
  "email": "info@gslubricants.com"
}
```

### When HIDE_SENSITIVE_INFO = true:
Remove specific location and use generic data:
```json
"address": {
  "@type": "PostalAddress",
  "addressRegion": "Odisha",
  "addressCountry": "IN"
},
"contactPoint": {
  "@type": "ContactPoint",
  "contactType": "Customer Service"
}
```

### LocalBusiness Schema (lines 59-74):
Should also be updated to remove specific address details when privacy mode is active.

## Alternative Solution

Since all pages use the `<SEO>` component which now includes privacy-aware structured data, the static structured data in `index.html` becomes redundant. The SEO component will inject the correct schema based on privacy settings.

You may want to remove the static structured data from index.html entirely and rely solely on the dynamic SEO component.
