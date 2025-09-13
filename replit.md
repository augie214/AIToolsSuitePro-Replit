# AIToolsSuite Pro - White-Label AI Platform

## Overview

AIToolsSuite Pro is a comprehensive white-label SaaS platform that integrates 20+ AI tools into a unified ecosystem. The platform allows businesses to deploy AI-powered automation tools under their own branding, featuring a premium luxury design inspired by high-end fintech platforms. Built with a modular subscription system, the platform provides enterprise-grade security with SOC 2 compliance and multi-tenant architecture supporting unlimited sub-brands.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design system
- **Styling**: Tailwind CSS with custom design tokens for luxury fintech aesthetic
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Design System**: Dark mode default with premium color palette (electric blue, luxury gold, platinum accents)

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Schema Definition**: Shared schema using Drizzle with Zod validation
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **Development**: Hot module replacement with Vite middleware integration

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon serverless database
- **Connection Pooling**: Neon serverless pool for optimal performance
- **Schema Management**: Drizzle migrations with TypeScript support
- **Session Storage**: PostgreSQL-backed session storage for scalability

### Authentication and Authorization
- **User Management**: Basic user schema with username/password authentication
- **Session Handling**: Express session middleware with secure cookie configuration
- **Multi-tenant Support**: Architecture prepared for white-label customer isolation
- **Security**: Preparation for SOC 2 compliance requirements

### Component Architecture
- **Modular Design**: Reusable wealth calculation components (ROI Calculator, Revenue Projector, Live Revenue Meter)
- **Animation System**: Custom animation components for premium user experience
- **Responsive Design**: Mobile-first approach with advanced breakpoint management
- **Accessibility**: ARIA-compliant components from Radix UI foundation

## External Dependencies

### Third-party Services
- **Neon Database**: Serverless PostgreSQL hosting for scalable data storage
- **Stripe Integration**: Payment processing with React Stripe.js components for subscription management
- **Google Fonts**: Inter and JetBrains Mono for premium typography system

### Development Tools
- **Replit Platform**: Development environment with hot reload capabilities
- **ESBuild**: Fast bundling for production builds
- **PostCSS**: CSS processing with Tailwind CSS compilation

### UI Libraries
- **Radix UI**: Headless component primitives for accessibility and customization
- **Lucide Icons**: Comprehensive icon system for consistent visual language
- **Class Variance Authority**: Type-safe component variants for design system
- **Embla Carousel**: Performant carousel components for content presentation

### Utility Libraries
- **date-fns**: Date manipulation for time-based calculations
- **clsx**: Conditional CSS class management
- **cmdk**: Command palette functionality for power user features
- **Memoizee**: Performance optimization through intelligent caching