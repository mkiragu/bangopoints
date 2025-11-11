# Bangopoints - Project Outline

## File Structure

```
/mnt/okcomputer/output/
├── index.html                 # Main Dashboard - Employee Management & Performance Overview
├── performance.html           # PPG Performance Tracking & Real-time Calculations
├── receipts.html              # Receipt Processing & Item Tracking
├── brand-portal.html          # Brand Manager Portal & Reporting
├── main.js                    # Core JavaScript functionality
├── resources/                 # Assets and media files
│   ├── bg-pattern.jpg         # Background pattern for dark theme
│   ├── brand-logos/           # Carousel of participating brand logos
│   ├── receipt-samples/       # Sample receipt images for demo
│   └── user-avatars/          # Employee and user profile images
├── interaction.md             # Interaction design documentation
├── design.md                  # Design style guide
└── outline.md                 # This project outline
```

## Page Breakdown

### 1. index.html - Main Dashboard
**Purpose**: Central hub for employee management and system overview
**Key Sections**:
- Hero area with animated background and app introduction
- Employee management interface (PPG list, clock-in/out tracking)
- Real-time performance metrics dashboard
- Quick action buttons for common tasks
- Notification center for alerts and flags
- Navigation to other system modules

**Interactive Components**:
- Employee search and filter system
- Clock-in/out status tracker with GPS simulation
- Performance metric cards with live updates
- Alert notification system for underperforming PPGs

### 2. performance.html - PPG Performance Tracking
**Purpose**: Detailed performance monitoring and wage calculations
**Key Sections**:
- PPG performance calculator with real-time updates
- Daily target achievement visualization
- Wage calculation engine with percentage-based payouts
- Performance trend analysis charts
- Alert system for consecutive low performance

**Interactive Components**:
- Performance calculator with dynamic inputs
- Interactive charts showing daily/weekly/monthly trends
- Alert configuration panel
- Performance comparison tools

### 3. receipts.html - Receipt Processing
**Purpose**: Receipt upload, processing, and item categorization
**Key Sections**:
- Receipt upload interface with camera simulation
- OCR text extraction and processing
- Item categorization (participating vs non-participating)
- Non-participating items flagging system
- Business development lead generation

**Interactive Components**:
- Receipt image upload and preview
- Item categorization interface
- Flagging system for non-participating items
- Lead generation workflow

### 4. brand-portal.html - Brand Manager Portal
**Purpose**: Comprehensive reporting and invoicing system for brand managers
**Key Sections**:
- Brand-specific performance dashboards
- Custom report builder with filtering options
- Proforma invoice generation system
- Regional data partitioning (East Africa, West Africa, etc.)
- On-demand reporting with auto-invoicing

**Interactive Components**:
- Custom report builder with drag-drop interface
- Invoice preview and generation system
- Regional filtering and data segmentation
- Real-time analytics dashboard

## Technical Implementation

### JavaScript Architecture (main.js)
**Core Modules**:
1. **Employee Management System**
   - PPG registration and profile management
   - Clock-in/out tracking with location simulation
   - Shift assignment and transfer management

2. **Performance Calculator**
   - Real-time wage calculation engine
   - Target achievement percentage calculations
   - Alert system for performance monitoring

3. **Receipt Processor**
   - Image upload and preview functionality
   - OCR simulation for text extraction
   - Item categorization logic
   - Lead generation for business development

4. **Reporting Engine**
   - Dynamic chart generation using ECharts.js
   - Custom report builder interface
   - Data filtering and segmentation
   - Export functionality simulation

5. **Notification System**
   - Alert management for various user types
   - Performance flagging system
   - Real-time updates and notifications

### Visual Effects Integration
**Anime.js Implementations**:
- Smooth page transitions and micro-interactions
- Loading states and success animations
- Hover effects on interactive elements

**ECharts.js Visualizations**:
- Performance trend charts
- Regional sales data
- Brand-specific analytics
- Revenue attribution charts

**p5.js Background Effects**:
- Particle system representing data flow
- Dynamic background patterns
- Interactive data visualization elements

**Pixi.js Advanced Effects**:
- Liquid metal background displacement
- High-performance visual elements
- Smooth animation loops

**Splide Carousels**:
- Brand logo carousel in hero section
- Receipt image gallery
- User avatar rotation

## Data Structure & Mock Content

### Employee Data
- PPG profiles with performance history
- BEO assignments and regional data
- Clock-in/out timestamps with location
- Performance metrics and wage calculations

### Receipt Data
- Sample receipt images and OCR text
- Participating and non-participating items
- Regional purchase data
- Shopper demographics and purchase history

### Brand Data
- Participating brand information
- Regional brand managers
- Product catalogs with pricing
- Campaign performance metrics

### Shopper Data
- Consumer and shopkeeper profiles
- Points earning and redemption history
- Award tier progression
- Gift and referral tracking

## Navigation & User Flow

### Bottom Navigation Bar
1. **Dashboard** (index.html) - Home icon
2. **Performance** (performance.html) - Chart icon
3. **Receipts** (receipts.html) - Camera icon
4. **Brand Portal** (brand-portal.html) - Briefcase icon

### User Type Switching
- Role-based interface adaptation
- Context-aware navigation options
- Permission-based feature access

## Responsive Design Strategy

### Mobile-First Approach
- Touch-optimized interface elements
- Swipe gestures for navigation
- Thumb-friendly button placement
- Optimized content density

### Progressive Enhancement
- Core functionality without JavaScript
- Enhanced interactions with JavaScript
- Offline capability simulation
- Performance optimization

## Accessibility Features

### WCAG Compliance
- High contrast color ratios (4.5:1 minimum)
- Keyboard navigation support
- Screen reader compatibility
- Focus management and indicators

### Inclusive Design
- Multiple input methods support
- Clear visual hierarchy
- Consistent interaction patterns
- Error prevention and recovery