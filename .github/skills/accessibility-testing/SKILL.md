---
name: accessibility-testing
description: "Use when: verifying keyboard navigation works; checking ARIA labels and semantic HTML; testing screen reader compatibility; ensuring color contrast; validating form accessibility; testing focus states."
---

# Accessibility Testing

Comprehensive accessibility audit to ensure the site is navigable and understandable for all users, including those using assistive technologies.

## Keyboard Navigation

### Tab Order
- [ ] **Tab through nav**: Tab key cycles through nav links in logical order
- [ ] **Tab through buttons**: Tab cycles through all buttons (CTAs, filters, form submit)
- [ ] **Tab through form**: Tab order: First Name → Last Name → Email → Phone → Subject → Message → Submit
- [ ] **Shift+Tab reverse**: Shift+Tab navigates backwards through all interactive elements
- [ ] **Focus visible**: Every focusable element shows clear focus outline (not hidden)
- [ ] **No focus trap**: Can exit from any element with Tab (no keyboard traps)

### Keyboard-Only Navigation
- [ ] **Open mobile menu**: Tab to hamburger → Press Enter → menu opens
- [ ] **Close mobile menu**: Tab through menu → Press Escape (or Tab to close button) → menu closes
- [ ] **Activate links**: Tab to any link → Press Enter → page navigates
- [ ] **Expand accordions**: Tab to accordion button → Press Enter → content expands/collapses
- [ ] **Submit form**: Tab through form → Press Enter on submit → form submits
- [ ] **Play video**: Tab to video card → Press Enter → modal opens and video plays

## Semantic HTML

### Heading Structure
- [ ] **H1 present**: Main page heading uses `<h1>` (exactly 1 per page for screen readers)
- [ ] **H2 for sections**: Section titles use `<h2>` (not div with large font)
- [ ] **H3 for subsections**: Subsection titles use `<h3>` (not span)
- [ ] **Heading order**: Heading levels don't skip (H1 → H2 → H3, not H1 → H3)

### Semantic Elements
- [ ] **Nav element**: Navigation uses `<nav>` tag (not generic div)
- [ ] **Main content**: Main page content wrapped in `<main>` or clearly marked
- [ ] **Section tags**: Content sections use `<section>` (not all divs)
- [ ] **Article tags**: Blog posts/cards use `<article>` where appropriate
- [ ] **Form tags**: Contact form uses `<form>` (not divs pretending to be form)
- [ ] **List structure**: Navigation links use `<ul>/<li>` (not divs)
- [ ] **Buttons vs links**: Real buttons use `<button>`, navigation uses `<a>` or `<button>` with href

### Form Semantics
- [ ] **Label associated**: Each input has `<label for="input-id">` or input nested in label
- [ ] **Input types**: Email field uses `type="email"`, phone uses `type="tel"`, etc.
- [ ] **Fieldset for groups**: Related form inputs grouped with `<fieldset>`/`<legend>` if applicable
- [ ] **Required fields**: `required` attribute on mandatory fields

## ARIA Labels & Attributes

### Interactive Elements
- [ ] **Hamburger button**: `<button aria-label="Menu">` (or similar descriptive label)
- [ ] **Close buttons**: `aria-label="Close"` on close/X buttons
- [ ] **Icon buttons**: Buttons with only icons have `aria-label` (e.g., social media icons)
- [ ] **Filter buttons**: `aria-label` or `aria-pressed` for filter state
- [ ] **Modal dialog**: `role="dialog"` on modal, `aria-modal="true"`

### Page Regions
- [ ] **Nav landmark**: `<nav>` or `role="navigation"` for main navigation
- [ ] **Main content**: `<main>` or `role="main"` to identify primary content
- [ ] **Complementary**: `<aside>` or `role="complementary"` for sidebars
- [ ] **Contentinfo**: `<footer>` or `role="contentinfo"`

### Live Regions
- [ ] **Toast notifications**: Toast messages have `role="status"` or `aria-live="polite"`
- [ ] **Form errors**: Error messages associated with fields via `aria-describedby`
- [ ] **Dynamic updates**: Updated content has `aria-live="polite"` or `aria-live="assertive"`

### Images
- [ ] **Decorative images**: `alt=""` for purely decorative images
- [ ] **Content images**: Descriptive `alt` text for all meaningful images
  - [ ] Avatar images: "Teddy Lumidi" or "Profile photo"
  - [ ] Project screenshots: "Screenshots of [project name]"
  - [ ] Icon images: Describe what icon represents
- [ ] **Icon fonts**: Font Awesome icons have fallback text or `aria-hidden="true"` if decorative

## Color & Contrast

### WCAG AA Compliance (minimum)
- [ ] **Text on background**: 4.5:1 contrast ratio for normal text
- [ ] **Large text (18px+)**: 3:1 contrast ratio
- [ ] **Buttons**: Button text readable against button background
- [ ] **Focus indicators**: Focus outline visible against all backgrounds
- [ ] **Links**: Links distinguishable from surrounding text (not color alone)

### Color-Only Information
- [ ] **No info by color alone**: Red highlighting doesn't convey info without text
- [ ] **Form errors**: Errors shown with text + icon, not just red border
- [ ] **Status indicators**: Icon + text, not color alone

### Contrast Tool Usage
- [ ] **Lighthouse audit**: Run Lighthouse → Accessibility score ≥ 90
- [ ] **Color contrast checker**: Use WebAIM contrast checker on key elements
- [ ] **Zoom to 200%**: Content readable and not overlapping at 200% zoom

## Focus Management

### Focus States
- [ ] **Focus outline visible**: All focusable elements show outline on focus
- [ ] **Focus not hidden**: `outline: none` not used without visible replacement
- [ ] **Focus color**: Focus outline uses `var(--red)` or high-contrast color
- [ ] **Focus on click**: Clicking interactive elements sets focus (not just visual state)

### Focus Movement
- [ ] **Logical order**: Tab order matches visual reading order (left-to-right, top-to-bottom)
- [ ] **Skip links**: Skip to main content link available (optional but recommended)
- [ ] **Modal focus trap**: When modal opens, focus moves inside modal
- [ ] **Focus return**: When modal closes, focus returns to trigger element

## Form Accessibility

### Labels & Instructions
- [ ] **All inputs labeled**: Every form input has associated `<label>`
- [ ] **Label proximity**: Label visually near input
- [ ] **Help text**: Placeholder text doesn't replace labels
- [ ] **Required indicator**: Required fields marked with `*` or `(required)` in label

### Error Handling
- [ ] **Error messages**: Validation errors appear above form (not just console)
- [ ] **Error text**: Error message associated with field via `aria-describedby`
- [ ] **Field highlighting**: Invalid fields have visual indicator (border color change)
- [ ] **Error recovery**: User can correct errors and resubmit easily

### Input Types
- [ ] **Email input**: `type="email"` for email fields
- [ ] **Phone input**: `type="tel"` for phone fields
- [ ] **Text input**: `type="text"` for general text
- [ ] **Textarea**: `<textarea>` for multiline input (not div with contenteditable)

## Mobile & Responsive Accessibility

### Touch Targets
- [ ] **Button size**: Buttons ≥ 44x44px (recommended minimum touch target)
- [ ] **Link size**: Links ≥ 44x44px or have padding
- [ ] **Spacing**: Interactive elements spaced to avoid accidental clicks

### Mobile Navigation
- [ ] **Hamburger accessible**: Hamburger button keyboard accessible on mobile
- [ ] **Menu keyboard nav**: Mobile menu navigable with keyboard
- [ ] **No hover-only content**: Content not hidden behind hover (fails on mobile)

### Zoom & Scale
- [ ] **Zoom to 200%**: Page remains usable at 200% zoom
- [ ] **No horizontal scroll**: Content doesn't require horizontal scrolling at 200% zoom
- [ ] **Touch target scaling**: Buttons remain tappable when zoomed
- [ ] **Viewport meta tag**: `<meta name="viewport">` set (not preventing zoom with `user-scalable=no`)

## Screen Reader Testing

### Navigation
- [ ] **Nav links announced**: Screen reader announces "Navigation", then lists all links
- [ ] **Link purpose clear**: Links announced with descriptive text (e.g., "About Me" not "Link")
- [ ] **Active page indicator**: Screen reader announces current page (e.g., "Home, current page")

### Content Regions
- [ ] **Landmark structure**: Screen reader can navigate by landmark (nav, main, footer)
- [ ] **Section headings**: All sections have descriptive headings
- [ ] **List structure**: Lists announced as lists with item count

### Forms (Screen Reader)
- [ ] **Form announced**: "Form, 6 form fields"
- [ ] **Labels announced**: Focus input → screen reader announces label (e.g., "First Name, required, edit text")
- [ ] **Errors announced**: Validation error announced when field loses focus
- [ ] **Submit announced**: Submit button announced as "Send via Email, button"

### Images & Icons
- [ ] **Images announced**: Images announced with alt text (not "image unknown")
- [ ] **Decorative images skipped**: Decorative images skipped (alt="")
- [ ] **Icon buttons**: Icon buttons announced by label (e.g., "LinkedIn, link")

## Lighthouse Accessibility Audit

- [ ] **Run Lighthouse**: DevTools → Lighthouse → Accessibility
- [ ] **Score ≥ 90**: Accessibility score is 90 or higher
- [ ] **Review issues**: Check for:
  - [ ] Missing labels
  - [ ] Low contrast text
  - [ ] Missing alt text
  - [ ] Missing ARIA attributes
  - [ ] Improper heading structure
- [ ] **Fix critical issues**: Resolve red/orange issues before deployment

## Common Issues Checklist

| Issue | How to Fix |
|-------|-----------|
| Focus outline hidden | Remove `outline: none`, use `outline: 2px solid var(--red)` |
| Images missing alt text | Add descriptive `alt=""` to all `<img>` tags |
| Low contrast text | Increase color contrast using color picker tool |
| Buttons too small | Set `min-height: 44px`, `min-width: 44px` |
| Headings out of order | Use H1 → H2 → H3 hierarchy |
| Form labels missing | Add `<label for="input-id">` to every input |
| No focus visible | Add `:focus { outline: 2px solid var(--red) }` |
| Modal not trappable | Add `role="dialog"` and manage focus |
| Color-only errors | Add icon + text, not just red border |
| Links look like text | Underline links or use `text-decoration: underline` |

## Testing Tools

- **WAVE**: Browser extension for accessibility issues
- **Axe DevTools**: Automated accessibility audit
- **Lighthouse**: Built into Chrome DevTools
- **WebAIM Contrast Checker**: Check text contrast ratios
- **NVDA** (Windows) or **VoiceOver** (Mac): Free screen readers for testing
- **Keyboard Navigator**: Test with keyboard alone (disable mouse)
