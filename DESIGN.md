---
name: The 12 by Naji Resort
description: Minimal architectural luxury shaped by real resort photography, precise grids, and restrained brass.
colors:
  chalk: "#f2f1ed"
  paper-white: "#ffffff"
  carbon: "#121212"
  muted-stone: "#68655f"
  hairline: "#d6d2ca"
  brass: "#b78b3e"
  deep-brass: "#76531e"
  night-surface: "#1a1a19"
  night-muted: "#aaa69d"
  night-hairline: "#35332f"
  night-brass: "#c59a4b"
  night-brass-light: "#ddba74"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(3.25rem, 6.5vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 5.5rem)"
    fontWeight: 500
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 450
    lineHeight: 1.75
  label:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  square: "0px"
spacing:
  hairline: "1px"
  compact: "8px"
  control: "16px"
  section-mobile: "80px"
  section-desktop: "128px"
components:
  button-primary:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.square}"
    padding: "0 20px"
    height: "48px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.carbon}"
    rounded: "{rounded.square}"
    padding: "0 20px"
    height: "48px"
  field:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.square}"
    padding: "16px 20px"
---

# Design System: The 12 by Naji Resort

## Overview

**Creative North Star: "The Measured Resort"**

The visual system treats the property as the identity. Large, truthful photographs sit inside a measured field of chalk, carbon, hairline rules, and restrained brass. The atmosphere is calm and exact rather than ornamental: architectural scale and whitespace communicate luxury while the content remains direct and hospitable.

The system is editorial but not magazine-like for its own sake. Display type establishes place and proposition; compact mono text is reserved for factual metadata, rates, locations, and state. Interfaces stay square, low-shadow, and visibly structured. Dark mode preserves the same hierarchy instead of becoming a separate visual language.

**Key Characteristics:**

- Real property photography at architectural scale
- Twelve-column desktop composition with disciplined mobile reduction
- Warm neutral grounds, carbon type, and one restrained brass accent
- Square controls, one-pixel rules, generous whitespace, and minimal depth
- Factual hospitality language with explicit booking states

## Colors

The palette is warm, quiet, and high-contrast. Brass is a controlled action and wayfinding color, never ambient decoration.

### Primary

- **Resort Brass:** The primary action color for booking controls and rare focal accents.
- **Deep Brass:** The accessible light-mode color for links, metadata, and primary hover states.

### Neutral

- **Chalk Ground:** The default page ground and principal expression of warmth.
- **Paper White:** Raised form and content surfaces in light mode.
- **Carbon:** Primary type, high-contrast surfaces, and dark-mode ground.
- **Muted Stone:** Secondary light-mode copy.
- **Hairline Concrete:** Dividers, field boundaries, and structural edges.
- **Night Surface:** Raised surfaces in dark mode.
- **Night Muted:** Secondary copy in dark mode.
- **Night Hairline:** Structural dividers in dark mode.
- **Night Brass / Night Brass Light:** Dark-mode action and metadata equivalents.

**The Brass Economy Rule.** Brass identifies the primary action or a small factual accent; it does not spread across backgrounds, decoration, and body copy at once.

**The Theme Equivalence Rule.** Light and dark modes preserve semantic hierarchy, contrast, and photographic prominence rather than swapping to a new aesthetic.

## Typography

**Display Font:** Manrope (with sans-serif fallback)

**Body Font:** Manrope (with sans-serif fallback)

**Label/Mono Font:** Azeret Mono (with monospace fallback)

**Character:** Manrope provides clean architectural mass without becoming severe. Azeret Mono introduces measured, technical precision for small facts and state, not decoration.

### Hierarchy

- **Display** (500, fluid oversized scale, 0.88 line-height): Hero propositions only; short, concrete, and allowed to interlock with photography.
- **Headline** (500, fluid section scale, 0.94 line-height): Major page and section statements.
- **Title** (500, 2.25–3rem): Apartment and content titles.
- **Body** (400, 0.875–1rem, 1.5–1.75 line-height): Descriptions and service information, generally kept to readable editorial measures.
- **Label** (500, 0.6875rem, 0.12em tracking, uppercase): Locations, property facts, rates, field labels, and interface state.

**The Factual Mono Rule.** Mono labels must communicate a location, state, category, field, or measurable fact; they are not generic pre-heading eyebrows.

**The Display Restraint Rule.** Use one display-scale statement per view and keep tracking no tighter than the established display setting.

## Layout

The desktop system uses a twelve-column grid inside a centered shell capped at 96rem, with 2rem outer gutters from tablet sizes and 1rem on small screens. Sections use generous vertical rhythm, typically 5rem on mobile and 8rem on desktop. Hairline dividers and aligned edges make related elements read as one composition without enclosing everything in cards.

At desktop sizes, photography, copy, and metadata may overlap or occupy asymmetric column spans when their edges remain deliberate. Mobile collapses to a single reading order: proposition, image, factual metadata, controls, then supporting content. Controls retain comfortable 44px or larger touch targets, and horizontal scrolling is never part of the layout.

**The Aligned Edge Rule.** Prefer shared baselines, hairlines, and grid edges over extra containers or decorative separators.

## Elevation & Depth

The system is flat by default and does not use ambient shadows for ordinary content. Depth comes from tonal surface changes, full-bleed photography within square plates, dark/light inversion, and one-pixel borders. The mobile navigation dialog is the only elevated layer and may use a restrained overlay and shadow because it must separate from the page beneath it.

**The Flat-By-Default Rule.** If a border, tonal shift, or image plane communicates hierarchy, do not add a shadow.

## Shapes

Geometry is rectilinear. Buttons, fields, image plates, room rows, and status treatments use square corners. One-pixel rules articulate structure; rounded cards, pills, ornamental frames, and soft container stacks do not belong in the system. Circularity is reserved for native icon geometry, not enclosing UI surfaces.

## Components

### Buttons

- **Shape:** Square with a one-pixel border and a minimum 44px target.
- **Primary:** Brass ground, carbon text, compact uppercase mono-like tracking, and decisive horizontal padding.
- **Hover / Focus:** The primary deepens in light mode; every control has a visible two-pixel focus outline with a four-pixel offset.
- **Outline / Quiet:** Outline inverts foreground and background on hover; quiet controls keep transparent grounds and use the accent only for state.

### Cards / Containers

- **Corner Style:** Square.
- **Background:** Page or surface token according to hierarchy.
- **Shadow Strategy:** None at rest.
- **Border:** One-pixel hairlines or shared grid gaps.
- **Internal Padding:** Usually 1.5rem for compact content plates; room presentations favor open column layouts over boxed cards.

### Inputs / Fields

- **Style:** Square white or dark-surface fields separated by one-pixel rules; visible labels sit above native inputs.
- **Focus:** A high-contrast accent outline remains visible without changing layout.
- **Error / Disabled:** Errors pair text with a bordered status region; disabled controls reduce opacity but retain legibility.

### Navigation

The masthead is quiet, sticky, and divided from the page by one hairline. Desktop links use compact uppercase labels and a minimal active underline; booking is the only filled action. Mobile uses a right-side dialog with focus management, body-scroll containment, clear numbering, and a persistent booking action.

### Stay Planner

The planner is a connected row of date, apartment, and action cells. It must remain visually part of the hero or booking context, expose honest native controls, and pass only chosen criteria into the request flow. It never displays fabricated availability.

### Room Row

Room inventory uses large photography paired with open factual copy, a published-rate qualifier, and one square detail action. Rows are separated by hairlines rather than individual card shells.

## Do's and Don'ts

### Do:

- **Do** let verified property photography and generous whitespace carry the premium character.
- **Do** use brass sparingly for a primary action or factual emphasis.
- **Do** keep metadata concise, uppercase, and genuinely informative.
- **Do** preserve square geometry, one-pixel rules, and strong alignment across themes and breakpoints.
- **Do** qualify rates, availability, and booking state exactly as the underlying workflow supports.

### Don't:

- **Don't** introduce gradients, glassmorphism, pill-heavy controls, or routine card shadows.
- **Don't** use mono labels as decorative eyebrow copy above every heading.
- **Don't** invent hotel facts, availability, reviews, awards, or event schedules.
- **Don't** animate every element or hide essential content before JavaScript or scroll triggers run.
- **Don't** substitute generic stock imagery for verified resort photography.
