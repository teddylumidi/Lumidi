---
name: navigation-menu-testing
description: "Use when: verifying the navigation menu works correctly across devices; testing responsive behavior at mobile/desktop breakpoints; validating nav links route to correct pages."
---

# Navigation Menu Testing

Quick verification that the navigation menu functions properly across all breakpoints and interactions.

## Prerequisites
- Browser DevTools open (press F12)
- Site running locally or deployed
- Resize capability (or browser mobile simulator)

## Desktop Navigation (≥768px)

- [ ] **Nav links visible**: `.nav-links` displays as flex row on desktop
- [ ] **Home link active**: Click "Home" → active class applied, page displays
- [ ] **About link routes**: Click "About Me" → routes to about page
- [ ] **Portfolio link routes**: Click "Portfolio" → routes to portfolio page
- [ ] **Hobbies link routes**: Click "Hobbies" → routes to hobbies page
- [ ] **Vlog link routes**: Click "Vlog" → routes to vlog page
- [ ] **Blog link routes**: Click "Blog" → routes to blog page
- [ ] **Contact link routes**: Click "Contact" → routes to contact page
- [ ] **Hamburger hidden**: `.hamburger` not visible on desktop

## Mobile Navigation (<768px)

- [ ] **Hamburger visible**: `.hamburger` button displays below 768px
- [ ] **Nav links hidden**: `.nav-links` not visible on mobile
- [ ] **Hamburger toggle**: Click hamburger → `.mobile-menu.open` class applied
- [ ] **Menu slides open**: Mobile menu appears with all 7 links
- [ ] **Menu closes on click**: Click a nav link → menu auto-closes (verify `closeMobile()` called)
- [ ] **Menu links route correctly**: 
  - [ ] Home
  - [ ] About Me
  - [ ] Portfolio
  - [ ] Hobbies
  - [ ] Vlog
  - [ ] Blog
  - [ ] Contact
- [ ] **Hamburger animation**: Burger lines animate to X when open, back to burger when closed

## Responsive Breakpoint (768px)

- [ ] **Resize from mobile → desktop**: Hamburger disappears, nav links appear
- [ ] **Resize from desktop → mobile**: Nav links hide, hamburger appears
- [ ] **No layout shift**: Navbar remains stable, no jumping elements

## Navbar Scroll Behavior

- [ ] **Scroll down**: `.navbar.scrolled` class applied, background turns opaque
- [ ] **Scroll up (top)**: `.scrolled` class removed, background returns transparent
- [ ] **Active state persists**: Current page link remains highlighted while scrolling

## Common Issues Checklist

| Issue | Check |
|-------|-------|
| Links don't route | Verify `onclick="showPage('page-name')"` exists in HTML |
| Active class stuck | Check `.active` class removal in JavaScript |
| Mobile menu doesn't close | Verify `closeMobile()` called after link click |
| Responsive jump at 768px | Check for `display: none` → `display: flex` transitions |
| Hamburger lines misaligned | Verify `.hamburger span` width/height consistent |

## DevTools Verification

1. **Device Emulation**: Toggle device toolbar (Ctrl+Shift+M)
2. **Element inspection**: 
   - `.navbar` → check `position: fixed`, `z-index: 1000`
   - `.nav-links` → verify `display: none` on mobile, `display: flex` on desktop
   - `.hamburger` → verify `display: none` on desktop, `display: flex` on mobile
3. **Console**: Check for JS errors with `showPage()` or `closeMobile()`
4. **Performance**: Lighthouse audit for CLS (Cumulative Layout Shift)
