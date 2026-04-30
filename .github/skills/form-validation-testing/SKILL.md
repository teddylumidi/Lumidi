---
name: form-validation-testing
description: "Use when: testing the contact form validation; verifying form inputs accept/reject data correctly; checking error messages display; validating form submission; ensuring accessibility of form fields."
---

# Contact Form Validation Testing

Comprehensive validation testing for the contact form to ensure data integrity, error handling, and user experience.

## Form Field Presence

- [ ] **First Name field**: Input visible with label "First Name"
- [ ] **Last Name field**: Input visible with label "Last Name"
- [ ] **Email field**: Input visible with label "Email Address"
- [ ] **Phone field**: Input visible with label "Phone (optional)"
- [ ] **Subject dropdown**: Select visible with label "Subject / Service Needed"
- [ ] **Message textarea**: Textarea visible with label "Message"
- [ ] **Submit button**: "Send via Email" button visible and clickable
- [ ] **WhatsApp button**: "Message on WhatsApp" button visible below form

## Input Validation

### Text Inputs (First Name, Last Name)

- [ ] **Accept alphanumeric**: Type "John123" → input accepts
- [ ] **Accept special chars**: Type "O'Brien" → input accepts apostrophe
- [ ] **Trim whitespace**: Type "  John  " → whitespace handled correctly
- [ ] **Max length**: Verify reasonable max-length attribute or JS limit (typically 50-100 chars)

### Email Field

- [ ] **Valid email format**: Type "john@example.com" → accepts
- [ ] **Reject no @**: Type "johnemail.com" → rejects or highlights
- [ ] **Reject no domain**: Type "john@" → rejects or highlights
- [ ] **Case insensitive**: Type "JOHN@EXAMPLE.COM" → accepts
- [ ] **Plus addressing**: Type "john+tag@example.com" → accepts

### Phone Field

- [ ] **Accept international format**: Type "+254 716 358 703" → accepts
- [ ] **Accept dashes**: Type "254-716-358-703" → accepts
- [ ] **Accept parentheses**: Type "(254) 716-358-703" → accepts
- [ ] **Optional**: Leave blank → form still submits (verify `optional` in label)

### Subject Dropdown

- [ ] **Default option**: "Select a topic..." displays on load
- [ ] **All 8 options visible**:
  - [ ] Freelance Web Development
  - [ ] Web Design
  - [ ] I.T Support / Consulting
  - [ ] Digital Marketing
  - [ ] Business / Data Analysis
  - [ ] Video Production / Editing
  - [ ] Collaboration / Partnership
  - [ ] Other
- [ ] **Option selection**: Select each option → displays in field

### Message Textarea

- [ ] **Accept multiline**: Press Enter → newlines preserved
- [ ] **Accept long text**: Paste 500+ chars → accepts
- [ ] **Min height**: Textarea shows ~120px default (verify `min-height` in CSS)
- [ ] **Resizable**: Handle at bottom-right allows resize (verify `resize: vertical`)

## Form Styling & Accessibility

- [ ] **Focus states**: Tab through inputs → all show focus outline (`:focus` with `border-color: var(--red)`)
- [ ] **Label association**: Click label → input receives focus (verify `for` attribute on `<label>`)
- [ ] **Error styling**: All inputs have `background: var(--dark3)` and `border: 1px solid var(--border)`
- [ ] **Contrast**: Text readable on dark background (WCAG AA minimum)

## Form Interaction

### Submission Flow

- [ ] **Click "Send via Email"**: Opens default email client with:
  - `mailto:` link prefilled with form data (if implemented)
  - Or shows success message (verify implementation)
- [ ] **WhatsApp button**: Redirects to `https://wa.me/254716358703`
- [ ] **Toast notification**: "Opening your email client... 📧" appears (verify `#toast` element)

### Error Handling

- [ ] **Empty first name**: Submit → show error or prevent submit
- [ ] **Empty last name**: Submit → show error or prevent submit
- [ ] **Invalid email**: Submit → show error or prevent submit
- [ ] **Empty message**: Submit → show error or prevent submit
- [ ] **Subject required**: Dropdown still on "Select a topic..." → prevent or warn

## Responsive Form Layout

- [ ] **Mobile (<480px)**:
  - [ ] All form groups stack vertically
  - [ ] Inputs full width
  - [ ] Labels visible
- [ ] **Tablet (480px–768px)**:
  - [ ] First Name + Last Name side-by-side (2 columns)
  - [ ] Other fields full width
- [ ] **Desktop (≥768px)**:
  - [ ] 2-column layout for row items
  - [ ] Message spans full width
  - [ ] Buttons side-by-side or stacked nicely

## Edge Cases

| Scenario | Expected Behavior |
|----------|-------------------|
| Copy/paste entire email | Input accepts, no errors |
| Fast double-submit | Only 1 submission (debounce or disable after click) |
| Browser autofill | Form fields populate, no validation errors |
| Mobile keyboard open | Form doesn't jump, inputs still accessible |
| Long name (50+ chars) | Input doesn't break layout |
| Special Unicode chars | Accepted or filtered gracefully |

## DevTools Verification

1. **HTML structure**:
   ```
   .contact-form > .form-row > .form-group > label + input
   .contact-form > .form-group > textarea
   .contact-form > button.btn-primary
   ```

2. **CSS checks**:
   - `.form-group input:focus` → `border-color: var(--red)`
   - `.form-group textarea:resize` → `resize: vertical`
   - `.form-row` → `grid-template-columns: 1fr 1fr` on desktop

3. **JavaScript checks**:
   - `sendMessage()` function defined
   - Event listeners attached to submit button
   - No console errors on form interaction

4. **Accessibility (Lighthouse)**:
   - All form inputs have associated labels
   - Color contrast ≥ 4.5:1 (WCAG AA)
   - Tab order follows visual order
