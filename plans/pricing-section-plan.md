# Pricing Section Implementation Plan

## Overview
Add a new **Pricing Section** to the portfolio website with 3 pricing plans (Starter, Business, Enterprise) featuring "Contact for Quote" instead of fixed prices.

---

## Pricing Plans Design

### 1. Starter Plan
- **Tagline**: Perfect for small businesses
- **Description**: Get your business online with a professional website and basic SEO setup.
- **Features**:
  - Custom WordPress or Next.js website
  - Responsive design (mobile-friendly)
  - Basic SEO optimization
  - Contact form integration
  - Social media links
  - 1 month support
  - Google Analytics setup
  - Fast loading optimization
- **Highlighted**: No

### 2. Business Plan (Most Popular)
- **Tagline**: Most popular choice
- **Description**: Complete digital solution with advanced SEO and marketing features.
- **Features**:
  - Everything in Starter
  - E-commerce integration (Shopify/WooCommerce)
  - Advanced SEO & content strategy
  - Google Ads & Facebook Ads setup
  - Email marketing integration
  - 3 months support
  - Performance monitoring
  - Monthly analytics report
  - Backup & security setup
- **Highlighted**: Yes (with badge and special styling)

### 3. Enterprise Plan
- **Tagline**: For large-scale projects
- **Description**: Full-stack custom development with AI automation and priority support.
- **Features**:
  - Everything in Business
  - Custom Next.js 16+ full-stack app
  - AI-powered content automation
  - API integrations & automation
  - Advanced analytics dashboard
  - 6 months priority support
  - Dedicated project manager
  - Custom CRM integration
  - Multi-language support
  - Scalable cloud infrastructure
- **Highlighted**: No

---

## Implementation Steps

### Step 1: Add Pricing Data to `data.ts`
Add a new export `pricingPlans` array at the end of the file with the plan data structure:

```typescript
export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for small businesses",
    description: "Get your business online with a professional website and basic SEO setup.",
    features: [
      "Custom WordPress or Next.js website",
      "Responsive design (mobile-friendly)",
      "Basic SEO optimization",
      "Contact form integration",
      "Social media links",
      "1 month support",
      "Google Analytics setup",
      "Fast loading optimization",
    ],
    highlighted: false,
  },
  {
    id: "business",
    name: "Business",
    tagline: "Most popular choice",
    description: "Complete digital solution with advanced SEO and marketing features.",
    features: [
      "Everything in Starter",
      "E-commerce integration (Shopify/WooCommerce)",
      "Advanced SEO & content strategy",
      "Google Ads & Facebook Ads setup",
      "Email marketing integration",
      "3 months support",
      "Performance monitoring",
      "Monthly analytics report",
      "Backup & security setup",
    ],
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For large-scale projects",
    description: "Full-stack custom development with AI automation and priority support.",
    features: [
      "Everything in Business",
      "Custom Next.js 16+ full-stack app",
      "AI-powered content automation",
      "API integrations & automation",
      "Advanced analytics dashboard",
      "6 months priority support",
      "Dedicated project manager",
      "Custom CRM integration",
      "Multi-language support",
      "Scalable cloud infrastructure",
    ],
    highlighted: false,
  },
];
```

---

### Step 2: Create New Component `SectionPricing`
Create file: `components/Home/SectionPricing/SectionPricing.tsx`

**Component Structure:**
- Use `"use client"` directive for animations
- Import `SectionHeading`, `pricingPlans`, `motion` from framer-motion
- Import icons: `Check`, `ArrowRight`, `Mail`
- Use existing design patterns from other sections

**Layout:**
- Section with ID `pricing`
- Background: `bg-gray-50 dark:bg-gray-950`
- Container: `w-[80%] mx-auto`
- Grid: `grid-cols-1 md:grid-cols-3 gap-8`

**Pricing Card Design:**
- Card container with border and shadow
- Highlighted card (Business) gets:
  - Special border color (primary)
  - "Most Popular" badge
  - Slightly larger size or elevated position
- Card content:
  - Plan name (h3)
  - Tagline (small text)
  - Description (paragraph)
  - Features list with checkmark icons
  - "Contact for Quote" button (links to contact section)

**Animations:**
- Use `motion.div` for staggered entrance
- `initial={{ opacity: 0, y: 20 }}`
- `whileInView={{ opacity: 1, y: 0 }}`
- `transition={{ duration: 0.6, delay: index * 0.1 }}`

---

### Step 3: Add SectionPricing to Home.tsx
Import and add the new section in the appropriate position:

**Recommended Position:** After `SectionOfferings` and before `SectionWorkHistory`

```typescript
import SectionPricing from "./SectionPricing/SectionPricing";

// In the return JSX:
<SectionOfferings />
<SectionPricing />  {/* Add this line */}
<SectionWorkHistory />
```

---

### Step 4: Update Navigation (Optional)
Add "Pricing" link to the navigation menu in `components/Home/Navbar/ResponsiveNav.tsx`:
- Add link to `#pricing` section
- Keep consistent with existing nav items

---

## Design Specifications

### Color Scheme (matching existing theme)
- **Light Mode**:
  - Background: `bg-gray-50`
  - Card: `bg-white`
  - Border: `border-slate-200/60`
  - Text: `text-slate-900`
  - Primary: Blue brand color

- **Dark Mode**:
  - Background: `bg-gray-950`
  - Card: `bg-white/5`
  - Border: `border-white/10`
  - Text: `text-white`

### Typography
- Plan Name: `text-2xl font-bold`
- Tagline: `text-sm text-muted-foreground`
- Description: `text-gray-600 dark:text-gray-300`
- Features: `text-sm`

### Button Style
- Use existing `Button` component from `@/components/ui/button`
- Style: Primary variant with arrow icon
- Text: "Contact for Quote"
- Action: Scroll to contact section (`#contact`)

---

## Responsive Design

### Mobile (< 768px)
- Stack cards vertically (1 column)
- Full width cards
- Reduced padding

### Tablet (768px - 1024px)
- 2 columns (Starter + Business on top, Enterprise below)
- Or 3 columns with smaller cards

### Desktop (> 1024px)
- 3 columns side by side
- Business plan highlighted card slightly elevated

---

## Accessibility Features
- Semantic HTML (`section`, `article`, `h3`, `ul`, `li`)
- ARIA labels for buttons
- Keyboard navigation support
- Screen reader friendly feature lists

---

## Testing Checklist
- [ ] Verify pricing data displays correctly
- [ ] Check responsive layout on mobile, tablet, desktop
- [ ] Test dark/light mode switching
- [ ] Verify animations trigger on scroll
- [ ] Test "Contact for Quote" button navigation
- [ ] Check highlighted plan styling
- [ ] Verify accessibility (keyboard, screen reader)
- [ ] Test cross-browser compatibility

---

## File Structure
```
components/Home/SectionPricing/
└── SectionPricing.tsx  (new file)

data.ts  (modify - add pricingPlans export)

components/Home/Home.tsx  (modify - import and add SectionPricing)
```

---

## Notes
- The pricing section will use "Contact for Quote" instead of fixed prices
- Business plan is highlighted as "Most Popular"
- All cards link to the contact section for inquiries
- Design follows existing website patterns for consistency
