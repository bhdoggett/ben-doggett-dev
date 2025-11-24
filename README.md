# Ben Doggett - Developer Portfolio

A modern, accessible, and responsive portfolio website built with Next.js 16, TypeScript, and CSS Modules.

## Features

### Core Functionality

- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Dark/Light Theme**: System-aware theme toggle with smooth transitions
- **Project Showcase**: Grid-based project display with GIF previews
- **Resume Integration**: Embedded PDF viewer with download functionality
- **Collapsible About Section**: Interactive about section with smooth animations

### Accessibility

- **WCAG AA Compliant**: All color combinations meet accessibility standards
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Skip to Main Content**: Quick navigation for keyboard and screen reader users
- **Touch-Friendly**: All interactive elements meet 44x44px minimum touch target size
- **Reduced Motion Support**: Respects user's motion preferences
- **Screen Reader Optimized**: Proper ARIA labels and semantic HTML

### Performance

- **Static Generation**: Pre-rendered pages for optimal performance
- **CSS Modules**: Scoped, optimized styles with no runtime overhead
- **Next.js 16**: Latest features including Turbopack for faster builds
- **Optimized Fonts**: Automatic font optimization with Geist font family

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules with CSS Variables
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx              # Main header with name and controls
│   │   ├── ThemeToggle.tsx         # Dark/light theme switcher
│   │   ├── ThemeProvider.tsx       # Theme context provider
│   │   ├── AboutSection.tsx        # Collapsible about section
│   │   ├── ProjectsSection.tsx     # Projects grid container
│   │   ├── ProjectCard.tsx         # Individual project card
│   │   └── ResumeDownloadButton.tsx # Resume download button
│   ├── globals.css                 # Global styles and CSS variables
│   ├── layout.tsx                  # Root layout with theme provider
│   └── page.tsx                    # Home page
└── public/
    └── assets/
        └── ben_doggett_resume.pdf  # Resume file
```

## Customization

### Update Personal Information

Edit `src/app/page.tsx`:

```typescript
<Header
  name="Your Name"
  title="Your Title"
  resumeUrl="/assets/your_resume.pdf"
/>
```

### Add Projects

Update the `sampleProjects` array in `src/app/page.tsx`:

```typescript
const projects: Project[] = [
  {
    id: "1",
    title: "Project Name",
    description: "Project description",
    gifUrl: "/assets/project.gif",
    gifAlt: "Project demonstration",
  },
];
```

### Customize Theme Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --color-accent: #0070f3;
  --color-background: #ffffff;
  /* ... other variables */
}
```

## Responsive Breakpoints

- **Mobile**: 0-767px (single column)
- **Tablet**: 768-1023px (two columns)
- **Desktop**: 1024-1199px (two columns)
- **Large Desktop**: 1200px+ (three columns)

## Accessibility Features

- Color contrast ratios exceed WCAG AA standards
- All interactive elements are keyboard accessible
- Focus indicators visible for keyboard navigation
- Reduced motion support for users with vestibular disorders
- Semantic HTML with proper heading hierarchy
- ARIA labels on all interactive elements
- Skip to main content link for keyboard users

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome)

## Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

## License

MIT

## Contact

Ben Doggett - [Your Contact Information]
