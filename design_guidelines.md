# Design Guidelines for AIToolsSuite Pro - White-Label AI SaaS Platform

## Design Approach
**Selected Approach**: Reference-Based Design inspired by modern enterprise SaaS platforms like Notion, Linear, and Stripe, combined with AI-focused platforms like OpenAI and Anthropic. This approach balances professional enterprise aesthetics with the innovation and accessibility expected in AI tools.

## Core Design Elements

### Color Palette
**Primary Colors (Dark Mode Default)**:
- Background: 16 20% 8% (Deep charcoal)
- Surface: 16 15% 12% (Elevated dark surface)
- Primary Brand: 210 100% 60% (Vibrant blue for AI/tech feel)
- Text Primary: 0 0% 95% (Near white)
- Text Secondary: 0 0% 70% (Muted white)

**Light Mode**:
- Background: 0 0% 98% (Clean white)
- Surface: 0 0% 100% (Pure white)
- Primary Brand: 210 100% 50% (Deeper blue)
- Text Primary: 0 0% 10% (Near black)

**Accent Colors**:
- Success: 120 60% 50% (AI success green)
- Warning: 35 85% 55% (Attention orange)
- Error: 0 70% 55% (Clear red)

### Typography
**Font Stack**: Inter from Google Fonts for its excellent readability and modern tech aesthetic
- **Headings**: Inter Bold (24px-48px for hero, 18px-32px for sections)
- **Body**: Inter Regular (14px-16px)
- **UI Elements**: Inter Medium (12px-14px)
- **Code/API**: JetBrains Mono for technical content

### Layout System
**Spacing**: Use Tailwind units of 2, 4, 6, 8, 12, 16 for consistent rhythm
- **Container**: Max-width of 1280px with responsive breakpoints
- **Grid**: 12-column responsive grid system
- **Sections**: Generous vertical spacing (py-16 to py-24)

### Component Library

**Navigation**:
- Clean horizontal navbar with subtle glass morphism effect
- Prominent CTA button for "Get Started" or "Request Demo"
- Mobile-first hamburger menu with smooth animations

**Hero Section**:
- Large, impactful headline emphasizing "White-Label AI Platform"
- Subheading focusing on rapid deployment and customization
- Dual CTAs: "Start Free Trial" (primary) and "View Demo" (outline)
- Large hero image showing dashboard preview or AI workflow visualization

**Dashboard Previews**:
- Clean card-based layouts showcasing different AI tools
- Subtle shadows and hover effects
- Color-coded categories for different AI capabilities

**Forms**:
- Minimal border design with focus states
- Inline validation with helpful microcopy
- Multi-step forms with clear progress indicators

**Pricing Tables**:
- Three-tier structure with middle tier highlighted
- Clear feature comparison with checkmarks
- Enterprise "Contact Sales" option

## Page-Specific Guidelines

### Landing Page Structure (5 sections max):
1. **Hero**: Bold value proposition with dashboard preview
2. **Features**: Grid of AI capabilities with icons
3. **White-Label Benefits**: Customization showcase
4. **Social Proof**: Customer logos and testimonials
5. **CTA Section**: Final conversion push with pricing preview

### Admin Dashboard:
- Sidebar navigation with collapsible sections
- Data visualization using subtle gradients
- Real-time status indicators
- Clean table designs for user/tool management

### AI Tool Interfaces:
- Chat-style interfaces with message bubbles
- Loading states with pulsing animations
- Result cards with copy-to-clipboard functionality
- Input areas with placeholder examples

## Visual Treatments

**Gradients**: Subtle blue-to-purple gradients (210 100% 60% to 250 80% 65%) for hero backgrounds and CTA buttons

**Glassmorphism**: Subtle blur effects on navigation and modal overlays

**Animations**: Minimal and purposeful - fade-in on scroll, hover states on interactive elements, loading spinners for AI processing

## Images
**Hero Image**: Large dashboard screenshot or abstract AI visualization showing multiple tools in action. Should occupy 40-50% of hero section width.

**Feature Icons**: Use Heroicons for consistency - brain, cog, users, chart-bar, etc.

**Customer Logos**: Grayscale treatment in light mode, slightly brightened in dark mode

**Dashboard Previews**: High-quality screenshots of actual interface mockups showing AI tools in action

This design system emphasizes trust, innovation, and enterprise-grade quality while maintaining the approachability needed for a wide range of potential white-label customers.