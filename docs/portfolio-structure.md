# Portfolio Structure and Components

This document explains the architecture and components of the portfolio website built with React, Three.js, and Tailwind CSS.

## Project Structure

```
portfolio/
├── public/              # Static files
│   ├── tech/            # Technology icons
│   ├── projects/        # Project images
│   └── favicon.svg      # Site favicon
├── src/                 # Source code
│   ├── components/      # React components
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   └── styles/          # CSS styles
├── index.html           # HTML entry point
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Key Components

### Core UI Components

#### 1. BackgroundMesh

The `BackgroundMesh` component creates the dynamic 3D background that responds to mouse movements. It uses Three.js through React Three Fiber.

**Key features:**
- Uses a Gaussian function to create a smooth bump effect that follows the mouse
- Implements a wireframe mesh with subtle coloring
- Responds to mouse movement in real-time

**Implementation:**
- Located at: `src/components/BackgroundMesh.jsx`
- Relies on the `useMousePosition` custom hook
- Uses `useFrame` from React Three Fiber to update the mesh on each frame
- Math-based vertex manipulation for smooth animations

#### 2. Navbar

The navigation bar provides site-wide navigation with responsive design.

**Key features:**
- Fixed positioning at the top of the screen
- Mobile-responsive with a dropdown menu for small screens
- Active link highlighting

**Implementation:**
- Located at: `src/components/Navbar.jsx`
- Uses `react-router-dom` for navigation
- Implements a hamburger menu for mobile views

#### 3. TechStackBar

Displays a collection of technology icons at the bottom of the screen.

**Key features:**
- Fixed positioning at the bottom of the screen
- Animated technology icons with hover effects
- Responsive layout with horizontal scrolling on small screens

**Implementation:**
- Located at: `src/components/TechStackBar.jsx`
- Uses Framer Motion for animations
- Dynamically renders from a technology array

### Page-Specific Components

#### 1. HomeCard

The main content card on the homepage displaying personal information.

**Key features:**
- Profile photo with fallback
- Contact links to email, GitHub, and LinkedIn
- Brief personal bio
- Link to resume

**Implementation:**
- Located at: `src/components/HomeCard.jsx`
- Uses Framer Motion for entrance animations
- SVG icons for social media links

#### 2. ProjectCard

Individual project cards displaying on the Projects page.

**Key features:**
- Image preview with hover overlay
- Project title and description
- Technology tags
- Links to live demo and GitHub repository
- Smooth hover animations

**Implementation:**
- Located at: `src/components/ProjectCard.jsx`
- Uses Framer Motion for animations
- Implements responsive design for different screen sizes

### Pages

#### 1. Home

The landing page of the portfolio.

**Key features:**
- Full-screen layout with 3D background
- Centered HomeCard component
- Responsive design

**Implementation:**
- Located at: `src/pages/Home.jsx`
- Combines the 3D background with the HomeCard component

#### 2. Projects

The projects showcase page.

**Key features:**
- Grid layout of project cards
- Same 3D background as the home page
- Responsive grid (1 column on mobile, 2 on tablet, 3 on desktop)

**Implementation:**
- Located at: `src/pages/Projects.jsx`
- Contains sample project data
- Uses CSS Grid for layout

### Custom Hooks

#### useMousePosition

A custom React hook that tracks the mouse position across the page.

**Implementation:**
- Located at: `src/hooks/useMousePosition.js`
- Uses React's useState and useEffect hooks
- Adds and removes event listeners for mouse movement

## Styling

The project uses Tailwind CSS for styling with some custom configurations:

- Custom colors defined in `tailwind.config.js`:
  - primary: Black (#000000)
  - secondary: Dark gray (#131313) 
  - accent: Indigo (#6366f1)

- Custom animations:
  - Floating animation for cards
  - Hover effects on interactive elements

- Custom components using Tailwind's @layer directive:
  - `.card` for consistent card styling 
  - `.floating` for animated elements

## Routing

The application uses React Router for navigation:
- Routes are defined in `src/App.jsx`
- Two main routes: home ("/") and projects ("/projects")
- BrowserRouter is used for clean URLs

## 3D Graphics Implementation

The 3D background is implemented using:
- Three.js core libraries
- React Three Fiber for React integration
- A plane geometry with 50x50 subdivisions (2500 vertices)
- Custom shaders and mathematical functions for the interactive effect

## Performance Considerations

The application is optimized for performance:
- Suspense and lazy loading for 3D components
- Tailwind for CSS optimization (only includes used styles)
- Responsive images with fallbacks
- Throttled mouse event listeners 