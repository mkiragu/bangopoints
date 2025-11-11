# Bangopoints - Design Style Guide

## Design Philosophy

### Visual Language
- **Modern Business Intelligence**: Clean, data-driven interface design that conveys professionalism and efficiency
- **Dark Theme Sophistication**: Deep charcoal backgrounds with strategic silver and grey accents for premium feel
- **Information Hierarchy**: Clear visual hierarchy supporting complex data visualization and decision-making
- **Mobile-First Approach**: Touch-optimized interactions with thumb-friendly navigation patterns

### Color Palette
- **Primary Background**: Deep charcoal (#1a1a1a) and rich black (#0d0d0d)
- **Secondary Background**: Dark grey (#2d2d2d) and medium grey (#404040)
- **Accent Colors**: 
  - Silver (#c0c0c0) for primary actions and highlights
  - Light grey (#e5e5e5) for secondary text and borders
  - Steel blue (#4a90a4) for data visualization and progress indicators
- **Status Colors**: 
  - Success: Emerald green (#10b981)
  - Warning: Amber (#f59e0b)
  - Error: Red (#ef4444)
  - Info: Blue (#3b82f6)

### Typography
- **Display Font**: "Inter" - Modern, highly legible sans-serif for headings and data
- **Body Font**: "Inter" - Consistent typography system for optimal readability
- **Monospace**: "JetBrains Mono" - For code, numbers, and data tables
- **Font Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

## Visual Effects & Animation

### Core Libraries Integration
1. **Anime.js**: Smooth micro-interactions and state transitions
2. **ECharts.js**: Interactive data visualizations with dark theme
3. **Splide**: Image carousels for brand logos and receipts
4. **p5.js**: Dynamic background effects and data particle systems
5. **Pixi.js**: High-performance visual effects for dashboard elements

### Animation Principles
- **Subtle Motion**: Gentle easing curves (cubic-bezier) for professional feel
- **Performance First**: Hardware-accelerated transforms for smooth mobile experience
- **Purposeful Animation**: Each animation serves a functional purpose (feedback, guidance, delight)
- **Reduced Motion**: Respect user preferences for reduced motion accessibility

### Background Effects
- **Liquid Metal Displacement**: Subtle animated background using Pixi.js for premium feel
- **Particle Data Flow**: p5.js particles representing data flow between system components
- **Gradient Overlays**: Subtle radial gradients for depth without overwhelming content

### Interactive Elements
- **Hover States**: Silver glow effects on interactive elements
- **Loading States**: Skeleton screens with shimmer effects
- **Success Animations**: Checkmark animations with scale and fade
- **Error States**: Gentle shake animations with color transitions

## Layout & Grid System

### Mobile-First Grid
- **Container**: Max-width with centered alignment
- **Columns**: Flexible grid system (1-4 columns based on screen size)
- **Spacing**: 8px base unit system (8, 16, 24, 32, 48, 64px)
- **Breakpoints**: 
  - Mobile: 320px-768px
  - Tablet: 768px-1024px
  - Desktop: 1024px+

### Component Hierarchy
1. **Navigation**: Bottom-fixed tab bar for mobile accessibility
2. **Header**: App title, user profile, notifications
3. **Content Area**: Main dashboard with data visualization
4. **Action Bar**: Primary actions and quick filters
5. **Footer**: Minimal copyright and version info

### Card Design
- **Elevation**: Subtle shadows with silver tints
- **Borders**: 1px solid borders in medium grey
- **Padding**: 16px internal spacing
- **Radius**: 8px border radius for modern feel

## Data Visualization Style

### Chart Aesthetics
- **Background**: Transparent with dark theme integration
- **Grid Lines**: Subtle grey (#404040) for minimal visual noise
- **Data Colors**: Monochromatic silver variations with strategic accent colors
- **Typography**: Consistent with app typography system
- **Interactions**: Smooth hover states and tooltip animations

### Dashboard Components
- **Performance Meters**: Circular progress indicators with silver gradients
- **Trend Charts**: Line charts with smooth curves and subtle fills
- **Data Tables**: Zebra striping with hover states
- **Status Indicators**: Color-coded badges with iconography

## Iconography

### Icon Style
- **Style**: Outlined icons for consistency and clarity
- **Weight**: 1.5px stroke weight for optimal visibility
- **Size**: 16px, 20px, 24px, 32px standard sizes
- **Color**: Silver (#c0c0c0) with hover states

### Icon Categories
- **Navigation**: Home, Analytics, Reports, Settings
- **Actions**: Add, Edit, Delete, Export, Filter
- **Status**: Success, Warning, Error, Info, Pending
- **Data**: Chart, Table, Calendar, Location, User

## Responsive Behavior

### Mobile Optimizations
- **Touch Targets**: Minimum 44px for all interactive elements
- **Gesture Support**: Swipe navigation, pull-to-refresh
- **Thumb Zones**: Primary actions within comfortable reach
- **Content Density**: Optimized information hierarchy for small screens

### Progressive Enhancement
- **Core Functionality**: Works without JavaScript
- **Enhanced Experience**: Rich interactions with JavaScript enabled
- **Offline Support**: Cached data and sync indicators
- **Performance**: Lazy loading and code splitting

## Accessibility Considerations

### Color Contrast
- **Text on Dark**: Minimum 4.5:1 contrast ratio
- **Interactive Elements**: Clear focus indicators
- **Color Independence**: Information not conveyed by color alone

### Navigation
- **Keyboard Support**: Full keyboard navigation capability
- **Screen Readers**: Proper ARIA labels and descriptions
- **Focus Management**: Logical tab order and focus trapping