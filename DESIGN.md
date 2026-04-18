# HealthVault Design Brief

## Aesthetic & Tone
**Medical Confidence + Digital Simplicity** — Blueprint-inspired professional identity. Deep blue conveys medical authority, healthcare green affirms healthy states, Swiss typography ensures clarity and trust. Minimalist structure with intentional depth through card elevation and subtle shadows.

## Color Palette

| Token | OKLCH | Purpose |
|-------|-------|---------|
| Primary Blue | 0.45 0.23 254 | Medical authority, primary actions, headers |
| Success Green | 0.60 0.18 155 | Health approval, active status, affirmation |
| Destructive Red | 0.55 0.22 25 | Alerts, warnings, deletions |
| Neutral Light | 0.98 0 0 | Backgrounds, card surfaces |
| Neutral Dark | 0.15 0 0 | Text, foreground content |
| Muted Grey | 0.90 0 0 | Borders, dividers, disabled states |

## Typography
- **Display**: General Sans (bold, geometric, professional headers)
- **Body**: General Sans (clean, legible, trusted)
- **Mono**: Geist Mono (technical data, timestamps, IDs)

## Structural Zones
- **Header**: Primary blue background, white text, dark mode toggle top-right
- **Sidebar**: Light grey, blue active indicators, clean navigation
- **Cards**: White surface with subtle border, 2px elevation shadow
- **Footer**: Minimal grey text, border-top divider

## Spacing & Rhythm
- **Radius**: 8px (md), 6px (sm) — soft but professional
- **Gap**: 16px baseline, compress for density, expand for breathing
- **Padding**: 20px cards, 24px sections

## Component Patterns
- Buttons: Primary blue with white text, hover darkens to 0.40 chroma
- Inputs: Border-only, focus ring uses primary blue with 30% opacity
- Cards: White background, subtle border (1px muted grey), shadow-card utility
- Badge: Success green for active, red for alerts

## Motion
- Transition default: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- No bouncing, no overshoot — medical apps demand precision

## Dark Mode
- Background: 0.12 L (very dark blue-black)
- Cards: 0.16 L (subtle elevation)
- Primary: 0.60 L (brighter blue for contrast)
- All semantic tokens maintained for AA+ contrast
