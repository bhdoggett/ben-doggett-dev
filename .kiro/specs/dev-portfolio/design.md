# Design Document

## Overview

The portfolio is a single-page Next.js application using the App Router architecture. It leverages React Server Components where possible, with Client Components for interactive features (theme toggle, expandable sections). The design emphasizes simplicity, modern aesthetics, and accessibility while maintaining excellent performance.

## Architecture

### Technology Stack

- **Framework**: Next.js 16.0.4 (App Router)
- **React**: 19.2.0
- **Styling**: CSS Modules (built-in Next.js support)
- **Fonts**: Geist Sans and Geist Mono (already configured)
- **TypeScript**: Type-safe component development

### Component Hierarchy

```
page.tsx (Server Component)
├── ThemeProvider (Client Component - Context)
│   └── Portfolio Layout
│       ├── Header
│       │   ├── Name & Title
│       │   ├── ResumeDownloadButton
│       │   └── ThemeToggle (Client Component)
│       ├── AboutSection (Client Component)
│       │   ├── SectionHeader with Arrow
│       │   └── Collapsible Content
│       └── ProjectsSection
│           └── ProjectCard[] (multiple)
│               ├── Project GIF/Image
│               ├── Project Title
│               └── Project Description
```

## Components and Interfaces

### 1. ThemeProvider Component

**Purpose**: Manages dark/light mode state and provides theme context to all children

**Type**: Client Component (`'use client'`)

**Interface**:

```typescript
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
```

**Implementation Details**:

- Uses React Context API for theme state management
- Stores theme preference in localStorage
- Applies theme class to document root element
- Initializes with system preference detection using `window.matchMedia('(prefers-color-scheme: dark)')`

### 2. Header Component

**Purpose**: Displays name, title, resume download, and theme toggle

**Type**: Server Component (with Client Component children)

**Structure**:

```typescript
interface HeaderProps {
  name: string;
  title: string;
  resumeUrl: string;
}
```

**Layout**:

- Flexbox layout with space-between alignment
- Left side: Name and title stacked vertically
- Right side: Resume download button and theme toggle
- Sticky positioning on scroll (optional enhancement)

### 3. ThemeToggle Component

**Purpose**: Interactive button to switch between dark and light modes

**Type**: Client Component

**Implementation Details**:

- Icon-based toggle (sun/moon icons using SVG or Unicode)
- Smooth transition animation
- Accessible with ARIA labels
- Uses theme context from ThemeProvider

### 4. ResumeDownloadButton Component

**Purpose**: Prominent link/button to download resume PDF

**Type**: Server Component

**Interface**:

```typescript
interface ResumeDownloadButtonProps {
  resumeUrl: string;
}
```

**Styling**:

- Primary button styling with high contrast
- Download icon (arrow down or document icon)
- Hover and focus states with scale/shadow effects
- Keyboard accessible

### 5. AboutSection Component

**Purpose**: Expandable section containing biographical information

**Type**: Client Component

**Interface**:

```typescript
interface AboutSectionProps {
  content: string | React.ReactNode;
}
```

**State Management**:

```typescript
const [isExpanded, setIsExpanded] = useState(true); // Default expanded
```

**Implementation Details**:

- Clickable header with arrow icon
- Arrow rotates 180° based on expanded state
- Content area with max-height transition for smooth animation
- CSS classes: `.expanded` and `.collapsed`
- Uses CSS Grid or Flexbox for layout

### 6. ProjectsSection Component

**Purpose**: Container for project cards with responsive grid

**Type**: Server Component

**Interface**:

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  gifUrl: string;
  gifAlt: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}
```

**Layout**:

- CSS Grid with responsive columns
- Desktop: 2-3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap spacing: 2rem

### 7. ProjectCard Component

**Purpose**: Displays individual project with GIF and description

**Type**: Server Component

**Interface**:

```typescript
interface ProjectCardProps {
  project: Project;
}
```

**Structure**:

- Card container with border/shadow
- GIF container with aspect ratio preservation
- Title (h3)
- Description paragraph
- Hover effect: subtle lift and shadow increase

## Data Models

### Theme Type

```typescript
type Theme = "light" | "dark";
```

### Project Type

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  gifUrl: string;
  gifAlt: string;
}
```

### Portfolio Data

```typescript
interface PortfolioData {
  name: string;
  title: string;
  resumeUrl: string;
  about: string;
  projects: Project[];
}
```

## Styling Architecture

### CSS Modules Structure

```
src/app/
├── page.module.css          # Main page layout
├── components/
│   ├── Header.module.css
│   ├── ThemeToggle.module.css
│   ├── ResumeButton.module.css
│   ├── AboutSection.module.css
│   ├── ProjectsSection.module.css
│   └── ProjectCard.module.css
└── globals.css              # Theme variables and resets
```

### CSS Custom Properties (globals.css)

```css
:root {
  /* Light theme */
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #666666;
  --color-accent: #0070f3;
  --color-border: #e0e0e0;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.15);

  /* Spacing scale */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;

  /* Typography */
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 350ms ease;
}

[data-theme="dark"] {
  --color-background: #0a0a0a;
  --color-surface: #1a1a1a;
  --color-text-primary: #ffffff;
  --color-text-secondary: #a0a0a0;
  --color-accent: #3291ff;
  --color-border: #333333;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.5);
}
```

### Responsive Breakpoints

```css
/* Mobile first approach */
/* Base styles: 0-767px (mobile) */

@media (min-width: 768px) {
  /* Tablet styles */
}

@media (min-width: 1024px) {
  /* Desktop styles */
}

@media (min-width: 1440px) {
  /* Large desktop styles */
}
```

## Layout Design

### Page Structure

```
┌─────────────────────────────────────────┐
│  Header                                 │
│  Ben Doggett - Fullstack Software Eng   │
│  [Download Resume] [Theme Toggle]       │
├─────────────────────────────────────────┤
│                                         │
│  ▼ About                                │
│  ┌───────────────────────────────────┐ │
│  │ About content goes here...        │ │
│  │ Multiple paragraphs supported     │ │
│  └───────────────────────────────────┘ │
│                                         │
│  Projects                               │
│  ┌──────────┐  ┌──────────┐           │
│  │ [GIF]    │  │ [GIF]    │           │
│  │ Title    │  │ Title    │           │
│  │ Desc...  │  │ Desc...  │           │
│  └──────────┘  └──────────┘           │
│  ┌──────────┐  ┌──────────┐           │
│  │ [GIF]    │  │ [GIF]    │           │
│  │ Title    │  │ Title    │           │
│  │ Desc...  │  │ Desc...  │           │
│  └──────────┘  └──────────┘           │
│                                         │
└─────────────────────────────────────────┘
```

### Spacing and Sizing

- **Max content width**: 1200px (centered)
- **Page padding**: 2rem (mobile), 3rem (desktop)
- **Section spacing**: 4rem vertical gap
- **Card aspect ratio**: 16:9 for GIF containers
- **Header height**: Auto, with padding top/bottom

## Error Handling

### Missing Resume File

- Display download button but show error message on click
- Log warning to console during development
- Provide fallback message: "Resume currently unavailable"

### Missing Project GIFs

- Use Next.js Image component with placeholder
- Fallback to gray placeholder with project initials
- Alt text always provided for accessibility

### Theme Persistence Failure

- Gracefully fallback to system preference
- Continue functioning without localStorage
- No error shown to user

### Invalid Project Data

- Filter out projects with missing required fields
- Log validation errors in development
- Display only valid projects

## Testing Strategy

### Component Testing

- Test theme toggle switches between light/dark
- Test AboutSection expand/collapse functionality
- Test ProjectCard renders all content correctly
- Test responsive layout at different breakpoints

### Accessibility Testing

- Keyboard navigation for all interactive elements
- Screen reader compatibility (ARIA labels)
- Color contrast ratios meet WCAG AA standards
- Focus indicators visible on all interactive elements

### Visual Testing

- Verify theme transitions are smooth
- Check responsive layouts on multiple devices
- Validate GIF loading and display
- Ensure consistent spacing and alignment

### Integration Testing

- Test theme persistence across page reloads
- Verify resume download initiates correctly
- Test all interactive elements work together
- Validate data flow from page to components

## Performance Considerations

### Image Optimization

- Use Next.js Image component for all images/GIFs
- Implement lazy loading for project GIFs
- Provide appropriate sizes for responsive images
- Use WebP format with fallbacks

### Code Splitting

- Client Components automatically code-split
- Theme provider loaded only when needed
- Minimize client-side JavaScript

### CSS Optimization

- CSS Modules automatically scoped and optimized
- Critical CSS inlined by Next.js
- Unused styles eliminated in production build

### Loading Strategy

- Server-render initial page content
- Hydrate interactive components progressively
- Preload resume PDF on hover (optional)

## Accessibility Features

1. **Semantic HTML**: Proper heading hierarchy (h1 → h2 → h3)
2. **ARIA Labels**: All interactive elements labeled
3. **Keyboard Navigation**: Tab order logical, all actions accessible
4. **Focus Management**: Visible focus indicators, no focus traps
5. **Color Contrast**: Meets WCAG AA standards in both themes
6. **Alt Text**: All images have descriptive alt text
7. **Reduced Motion**: Respect `prefers-reduced-motion` for animations

## Future Enhancements

- Add contact form or email link
- Implement project filtering/categories
- Add smooth scroll to sections
- Include social media links
- Add animation on scroll effects
- Implement project detail modal/page
- Add analytics tracking
