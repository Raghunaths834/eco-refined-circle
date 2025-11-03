# Privacy Mode Instructions

This document explains how to temporarily hide sensitive company information across your website.

## Quick Start

### To Hide Sensitive Information

1. Open `src/config/privacy.ts`
2. Change line 15 from:
   ```typescript
   export const HIDE_SENSITIVE_INFO = false;
   ```
   to:
   ```typescript
   export const HIDE_SENSITIVE_INFO = true;
   ```
3. Save the file
4. Redeploy your website

### To Restore Information

1. Open `src/config/privacy.ts`
2. Change line 15 from:
   ```typescript
   export const HIDE_SENSITIVE_INFO = true;
   ```
   to:
   ```typescript
   export const HIDE_SENSITIVE_INFO = false;
   ```
3. Save the file
4. Redeploy your website

## What Information Gets Hidden?

When `HIDE_SENSITIVE_INFO = true`, the following information is replaced with generic placeholders:

| **Information Type** | **Original** | **Hidden Version** |
|---------------------|--------------|-------------------|
| Company Full Name | M/S Gouri Shankar Lubricants | GS Lubricants |
| Address | Plot No. 3936, Gurujang Village, Talcher Sadar, Anugul, Odisha, India, 759100 | Odisha, India |
| Phone | +918908094205 | Contact form available |
| Email | gslubricantsodisha@gmail.com | Use contact form |
| GSTIN | 21AAJFG6323M1ZE | (Hidden) |

## Where Changes Apply

The privacy system affects **all pages and components**:

- ✅ Header (company name)
- ✅ Footer (company name, address, phone, email, GSTIN)
- ✅ Contact Page (phone, email, address, map, SEO description)
- ✅ Privacy Policy (company name, contact information)
- ✅ Terms & Conditions (company name, contact information)
- ✅ SEO Structured Data (address, email, phone in JSON-LD schema)

## Visual Indicator

When privacy mode is active, a small badge appears in the footer:
```
Privacy Mode Active
```

This helps you verify at a glance that information is hidden.

## Customizing Hidden Text

You can customize what text appears when information is hidden by editing `src/config/privacy.ts`:

```typescript
export const PRIVACY_CONFIG = {
  companyFullName: "GS Lubricants",      // Change this
  addressLine1: "Odisha, India",          // Change this
  addressLine2: "",                        // Change this
  phone: "Contact form available",         // Change this
  email: "Use contact form",               // Change this
  gstin: "",                               // Change this
  mapUrl: "..."                            // Change this
};
```

## Technical Details

The privacy system works by:
1. Reading the `HIDE_SENSITIVE_INFO` flag from `src/config/privacy.ts`
2. Using the `getSensitiveInfo()` function from `src/lib/privacy.ts` throughout all components
3. Returning either real information or placeholder text based on the flag
4. No actual data is deleted - everything is preserved and can be restored instantly

## Benefits

✅ **Single point of control** - One flag controls the entire site  
✅ **Instant toggle** - No code deletion or manual editing across multiple files  
✅ **Reversible** - Original information is preserved and can be restored immediately  
✅ **Consistent** - Same placeholder text used everywhere  
✅ **Safe** - No risk of accidentally leaving sensitive info in some places  
✅ **SEO-friendly** - Brand name (GS Lubricants) remains visible

## Support

If you need assistance with privacy mode, refer to:
- `src/config/privacy.ts` - Configuration file
- `src/lib/privacy.ts` - Helper function implementation
- This documentation file

## Note on index.html

The `index.html` file contains static structured data that cannot be automatically updated. However, since all pages use the dynamic `<SEO>` component, the static schema in index.html is redundant. The SEO component will inject privacy-aware structured data based on your settings.
