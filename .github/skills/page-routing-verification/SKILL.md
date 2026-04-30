---
name: page-routing-verification
description: "Use when: testing all page transitions work correctly; verifying showPage() routes to correct pages; checking page content displays; validating active nav state updates; ensuring smooth page switching."
---

# Page Routing Verification

Complete verification of all page transitions via `showPage()` function to ensure correct navigation flow and page content display.

## Page List

The site has 7 main pages:
1. **Home** (id: `page-home`) - Default/landing page
2. **About** (id: `page-about`) - About Me page
3. **Portfolio** (id: `page-portfolio`) - Portfolio / Projects page
4. **Hobbies** (id: `page-hobbies`) - Hobbies page
5. **Vlog** (id: `page-vlog`) - Video channel page
6. **Blog** (id: `page-blog`) - Blog articles page
7. **Contact** (id: `page-contact`) - Contact page

## Initial Load

- [ ] **Home page active on load**: `#page-home` has `.active` class
- [ ] **Other pages hidden**: All other `#page-*` elements have no `.active` class
- [ ] **Nav Home link active**: `.nav-links a[data-page="home"]` has `.active` class
- [ ] **No console errors**: F12 console shows no JS errors

## Desktop Navigation Links

- [ ] **Home link**: Click "Home" → `#page-home.active` displays
- [ ] **About link**: Click "About Me" → `#page-about.active` displays
- [ ] **Portfolio link**: Click "Portfolio" → `#page-portfolio.active` displays
- [ ] **Hobbies link**: Click "Hobbies" → `#page-hobbies.active` displays
- [ ] **Vlog link**: Click "Vlog" → `#page-vlog.active` displays
- [ ] **Blog link**: Click "Blog" → `#page-blog.active` displays
- [ ] **Contact link**: Click "Contact" → `#page-contact.active` displays

## Mobile Menu Links

- [ ] **Open mobile menu**: Click hamburger → `.mobile-menu.open` class applied
- [ ] **Home link**: Click "Home" → page switches, menu closes
- [ ] **About link**: Click "About Me" → page switches, menu closes
- [ ] **Portfolio link**: Click "Portfolio" → page switches, menu closes
- [ ] **Hobbies link**: Click "Hobbies" → page switches, menu closes
- [ ] **Vlog link**: Click "Vlog" → page switches, menu closes
- [ ] **Blog link**: Click "Blog" → page switches, menu closes
- [ ] **Contact link**: Click "Contact" → page switches, menu closes

## Page Content Verification

### Home Page
- [ ] **Hero section**: Displays with background, title "Teddy Lumidi", tagline
- [ ] **CTA buttons**: "View Portfolio", "Read Blog", "Watch Vlog", "Contact Me" visible
- [ ] **About preview**: About section with avatar and bio visible
- [ ] **Skills grid**: 8 skill badges displayed
- [ ] **Featured projects**: Portfolio grid visible
- [ ] **Blog posts**: Latest blog grid visible
- [ ] **Vlog section**: Latest vlogs grid visible
- [ ] **Footer**: Footer content loaded

### About Page
- [ ] **Page hero**: "About Me" header visible
- [ ] **Avatar**: Profile image displays
- [ ] **Bio section**: Wikipedia-style profile text visible
- [ ] **Skills tabs**: "General", "Web Development", "Digital Marketing", "Creative Tools" tabs
- [ ] **Experience timeline**: Career journey section visible
- [ ] **Education timeline**: Academic background visible
- [ ] **Accordion items**: Role details expandable
- [ ] **Footer**: Footer loaded

### Portfolio Page
- [ ] **Page hero**: "Portfolio" header visible
- [ ] **Add project form**: URL + title input fields visible
- [ ] **Filter buttons**: "All", "Web Development", "Design", "Digital Marketing", "I.T Support", "Analytics"
- [ ] **Project grid**: Portfolio items display
- [ ] **CTA band**: "Interested in working together?" call-to-action
- [ ] **Footer**: Footer loaded

### Hobbies Page
- [ ] **Page hero**: "My Hobbies" header visible
- [ ] **Hobby cards**: 8 hobby cards with icons and descriptions (Technology Exploration, Vlogging, Design, Research, Entrepreneurship, Learning, Video Editing, Digital Exploration)
- [ ] **Photo gallery**: 4 gallery images visible
- [ ] **Footer**: Footer loaded

### Vlog Page
- [ ] **Page hero**: "My Vlog" header visible
- [ ] **Subscribe buttons**: YouTube subscribe buttons for Tech and Music channels
- [ ] **Vlog grid**: Video cards display with thumbnails
- [ ] **Video modal**: Click video → iframe opens with video player
- [ ] **Close button**: Click close/X → modal closes
- [ ] **Footer**: Footer loaded

### Blog Page
- [ ] **Page hero**: "The Blog" header visible
- [ ] **Category filters**: "All", "Personal", "Career", "Web Dev", "Technology", "Marketing"
- [ ] **Blog grid**: Blog post cards visible
- [ ] **Blog modal**: Click post → modal opens with full article
- [ ] **Back button**: Click "Back to Blog" → modal closes
- [ ] **Footer**: Footer loaded

### Contact Page
- [ ] **Page hero**: "Contact Me" header visible
- [ ] **Quick actions**: WhatsApp and Email buttons in hero
- [ ] **Contact info card**: Address, email, phone, location details
- [ ] **Social links**: LinkedIn, GitHub, Twitter, YouTube, Instagram icons
- [ ] **Contact form**: All 7 form fields visible
- [ ] **Submit buttons**: "Send via Email" + "Message on WhatsApp" buttons
- [ ] **Services grid**: 8 service badges visible
- [ ] **Footer**: Footer loaded

## Active Navigation State

- [ ] **Home active**: Navigate to Home → `data-page="home"` link has `.active`
- [ ] **About active**: Navigate to About → `data-page="about"` link has `.active`
- [ ] **Portfolio active**: Navigate to Portfolio → `data-page="portfolio"` link has `.active`
- [ ] **Hobbies active**: Navigate to Hobbies → `data-page="hobbies"` link has `.active`
- [ ] **Vlog active**: Navigate to Vlog → `data-page="vlog"` link has `.active`
- [ ] **Blog active**: Navigate to Blog → `data-page="blog"` link has `.active`
- [ ] **Contact active**: Navigate to Contact → `data-page="contact"` link has `.active`
- [ ] **Previous link inactive**: Previous page's nav link loses `.active` class

## Page Transitions

- [ ] **Fade animation**: Pages fade in smoothly (verify `.page { animation: fadeIn .4s ease }`)
- [ ] **No layout shift**: Page switch doesn't cause scrollbar flicker or content jump
- [ ] **Scroll position reset**: New page scrolls to top (or verify scroll behavior)
- [ ] **All images load**: No broken images on page content

## Internal CTA Buttons

- [ ] **Home hero "View Portfolio"**: Routes to Portfolio page
- [ ] **Home hero "Read Blog"**: Routes to Blog page
- [ ] **Home hero "Watch Vlog"**: Routes to Vlog page
- [ ] **Home hero "Contact Me"**: Routes to Contact page
- [ ] **About "More About Me"**: Routes to About page (if on home)
- [ ] **About "Get In Touch"**: Routes to Contact page
- [ ] **Portfolio "View All Projects"**: Routes to Portfolio page
- [ ] **Portfolio "Hire Me"**: Routes to Contact page
- [ ] **All "CTA band" buttons**: Route to correct pages

## Browser History & Back Button

- [ ] **Back button works**: After navigating, browser back button functions (if using history API)
- [ ] **Forward button works**: After back, forward button returns to previous page
- [ ] **URL consistency**: URLs update with page changes (if using hash routing #page-name)

## Performance Checks

- [ ] **No console errors**: F12 → Console shows no red errors during navigation
- [ ] **showPage() function**: Check console for function calls:
  ```
  showPage('about') 
  showPage('portfolio')
  showPage('contact')
  ```
- [ ] **Page switches instantly**: No loading delay > 500ms between clicks
- [ ] **All event listeners active**: Click events fire immediately after page switch

## Edge Cases

| Scenario | Expected Behavior |
|----------|-------------------|
| Click same page twice | Page remains active, no flicker |
| Rapid page switching | Handle gracefully, show latest page |
| Mobile → Desktop → Mobile | Navigation works after resize |
| Page refresh on any page | Current page reloads correctly |
| Direct URL (if hash routing) | Correct page displays on load |
| Right-click → Open in new tab | Page opens with correct content |

## DevTools Verification

1. **HTML structure**:
   ```
   <div id="page-home" class="page active">
   <div id="page-about" class="page">
   <div id="page-portfolio" class="page">
   ...
   ```

2. **CSS checks**:
   - `.page { display: none }`
   - `.page.active { display: block }`
   - `.page { animation: fadeIn .4s ease }`

3. **JavaScript checks**:
   - `showPage(pageName)` function defined and working
   - `.active` class toggled correctly
   - Nav links updated with active state
   - No console errors on page switches

4. **Network tab**:
   - No unnecessary reloads
   - Assets cached properly
   - No 404 errors on images/resources
