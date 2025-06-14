# Portfolio Website Design Guide: From Figma to Code

## Overview

This guide explains how to design your portfolio website using Figma and then incorporate that design into your actual React-based website. Your current portfolio uses modern web technologies including React, Three.js, Framer Motion, and Tailwind CSS.

## Current Website Analysis

### Technology Stack
- **Frontend**: React 19.1.0 with JSX
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Routing**: React Router DOM
- **Contact Form**: EmailJS integration
- **Deployment**: Ready for static hosting

### Current Design System
- **Color Palette**: 
  - Primary: #646cff (blue gradient)
  - Secondary: #747bff 
  - Background: Dark gradient (#000000 → #1a1a2e → #16213e)
  - Text: White (#ffffff), Light gray (#cccccc), Medium gray (#999999)
- **Typography**: Inter font family, clean sans-serif
- **Layout**: Responsive grid system, mobile-first approach
- **Effects**: Glassmorphism, backdrop blur, subtle animations

## Part 1: Designing in Figma

### 1. Setting Up Your Figma File

#### Create a New Design File
1. Open Figma and create a new design file
2. Name it "Portfolio Website Design"
3. Set up frames for different device sizes:
   - Desktop: 1440px × 900px
   - Tablet: 768px × 1024px
   - Mobile: 375px × 812px

#### Establish Design System
Create a design system page with:
- Color palette swatches
- Typography styles
- Component library
- Spacing guidelines

### 2. Color System in Figma

#### Primary Colors
```
Primary Blue: #646cff
Secondary Blue: #747bff
Background Dark: #000000
Background Mid: #1a1a2e
Background Light: #16213e
```

#### Text Colors
```
Primary Text: #ffffff
Secondary Text: #cccccc
Tertiary Text: #999999
```

#### Semantic Colors
```
Success: #4caf50
Error: #f44336
Warning: #ff9800
Info: #2196f3
```

### 3. Typography System

#### Font Hierarchy
- **Headings**: Inter Bold (700)
  - H1: 64px / 4rem (clamp to 40px on mobile)
  - H2: 48px / 3rem
  - H3: 32px / 2rem
  - H4: 24px / 1.5rem
- **Body Text**: Inter Regular (400)
  - Large: 20px / 1.25rem
  - Medium: 16px / 1rem
  - Small: 14px / 0.875rem

### 4. Component Design

#### Navigation Bar
- **Height**: 80px
- **Background**: rgba(0, 0, 0, 0.1) with blur
- **Border**: 1px solid rgba(255, 255, 255, 0.1)
- **Logo**: "RS" with gradient text
- **Menu Items**: Rounded pill buttons with hover effects

#### Hero Section
- **Layout**: Centered vertical alignment
- **Avatar**: 160px circle with gradient background
- **Title**: Large gradient text
- **Subtitle**: Role description in secondary text
- **CTA Buttons**: Glassmorphism style with hover animations

#### Project Cards
- **Dimensions**: 350px minimum width, flexible height
- **Background**: Glassmorphism (rgba(255, 255, 255, 0.05))
- **Image Area**: 200px height with gradient placeholder
- **Content**: Title, description, CTA
- **Hover State**: Translate Y and add glow effect

#### Contact Form
- **Container**: Glassmorphism card with rounded corners
- **Inputs**: Semi-transparent with focus states
- **Button**: Gradient background with hover animations
- **Validation**: Color-coded feedback messages

### 5. Layout and Spacing

#### Grid System
- **Container**: Max-width 1200px, centered
- **Gutters**: 20px on mobile, 40px on desktop
- **Columns**: 12-column grid system

#### Spacing Scale
```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
```

## Part 2: Incorporating Design into Code

### 1. Setting Up Design Tokens

Create a design tokens file to maintain consistency:

```javascript
// src/design/tokens.js
export const colors = {
  primary: '#646cff',
  secondary: '#747bff',
  background: {
    dark: '#000000',
    mid: '#1a1a2e',
    light: '#16213e'
  },
  text: {
    primary: '#ffffff',
    secondary: '#cccccc',
    tertiary: '#999999'
  },
  semantic: {
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3'
  }
};

export const typography = {
  fontFamily: 'Inter, sans-serif',
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem'
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  }
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px'
};
```

### 2. Component Architecture

#### Reusable UI Components
Create a component library following your Figma designs:

```javascript
// src/components/ui/Button.jsx
import React from 'react';
import { colors } from '../../design/tokens';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  disabled = false,
  ...props 
}) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '25px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '500',
    textDecoration: 'none'
  };

  const variants = {
    primary: {
      background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
      color: colors.text.primary,
      border: 'none'
    },
    secondary: {
      background: `rgba(${colors.primary.replace('#', '')}, 0.1)`,
      color: colors.text.primary,
      border: `1px solid rgba(${colors.primary.replace('#', '')}, 0.3)`
    },
    ghost: {
      background: 'transparent',
      color: colors.text.primary,
      border: `1px solid ${colors.text.tertiary}`
    }
  };

  const sizes = {
    small: { padding: '8px 16px', fontSize: '0.875rem' },
    medium: { padding: '12px 24px', fontSize: '1rem' },
    large: { padding: '16px 32px', fontSize: '1.125rem' }
  };

  return (
    <button
      style={{
        ...baseStyles,
        ...variants[variant],
        ...sizes[size],
        opacity: disabled ? 0.6 : 1
      }}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
```

#### Card Component
```javascript
// src/components/ui/Card.jsx
import React from 'react';

const Card = ({ children, className = '', hover = false, ...props }) => {
  const baseStyles = {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '30px',
    transition: 'all 0.3s ease',
    cursor: hover ? 'pointer' : 'default'
  };

  const hoverStyles = hover ? {
    ':hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(100, 108, 255, 0.2)',
      border: '1px solid rgba(100, 108, 255, 0.3)'
    }
  } : {};

  return (
    <div
      style={{ ...baseStyles, ...hoverStyles }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
```

### 3. Responsive Design Implementation

#### Mobile-First Approach
Use CSS-in-JS with media queries or Tailwind's responsive utilities:

```javascript
// src/hooks/useResponsive.js
import { useState, useEffect } from 'react';

const useResponsive = () => {
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

export default useResponsive;
```

### 4. Animation Integration

#### Framer Motion Setup
```javascript
// src/components/animations/FadeInView.jsx
import React from 'react';
import { motion } from 'framer-motion';

const FadeInView = ({ children, delay = 0, direction = 'up' }) => {
  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;
```

### 5. Performance Optimization

#### Image Optimization
```javascript
// src/components/ui/OptimizedImage.jsx
import React, { useState } from 'react';

const OptimizedImage = ({ src, alt, placeholder, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {!loaded && placeholder && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: placeholder,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ 
            fontSize: '2rem',
            opacity: 0.5 
          }}>
            📸
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
          ...props.style
        }}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
```

## Part 3: Design to Development Workflow

### 1. Figma to Code Process

#### Step 1: Design Handoff
1. Create detailed specs in Figma
2. Export assets and icons
3. Document interactions and animations
4. Create a style guide

#### Step 2: Component Mapping
1. Identify reusable components
2. Create component library
3. Build design system
4. Implement responsive breakpoints

#### Step 3: Development
1. Start with layout structure
2. Implement components
3. Add interactions and animations
4. Test across devices

### 2. Asset Management

#### Icon System
```javascript
// src/components/icons/IconLibrary.jsx
import React from 'react';

const icons = {
  email: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  ),
  github: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  linkedin: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
};

const Icon = ({ name, size = 24, color = 'currentColor' }) => {
  const IconComponent = icons[name];
  
  if (!IconComponent) {
    return <span>?</span>;
  }

  return (
    <span style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      width: size,
      height: size,
      color 
    }}>
      {React.cloneElement(IconComponent, { 
        width: size, 
        height: size, 
        fill: color 
      })}
    </span>
  );
};

export default Icon;
```

## Part 4: Advanced Implementation

### 1. Theme System

```javascript
// src/contexts/ThemeContext.jsx
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const themes = {
    dark: {
      colors: {
        primary: '#646cff',
        secondary: '#747bff',
        background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)',
        text: {
          primary: '#ffffff',
          secondary: '#cccccc',
          tertiary: '#999999'
        }
      }
    },
    light: {
      colors: {
        primary: '#646cff',
        secondary: '#747bff',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)',
        text: {
          primary: '#000000',
          secondary: '#333333',
          tertiary: '#666666'
        }
      }
    }
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ 
      theme: themes[theme], 
      currentTheme: theme,
      toggleTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### 2. Accessibility Implementation

```javascript
// src/hooks/useAccessibility.js
import { useEffect } from 'react';

const useAccessibility = () => {
  useEffect(() => {
    // Add focus management
    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('using-keyboard');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Add ARIA labels and roles
  const getAccessibilityProps = (type, label) => {
    const props = {};
    
    switch (type) {
      case 'button':
        props['aria-label'] = label;
        props['role'] = 'button';
        break;
      case 'link':
        props['aria-label'] = label;
        break;
      case 'navigation':
        props['role'] = 'navigation';
        props['aria-label'] = label;
        break;
      default:
        break;
    }
    
    return props;
  };

  return { getAccessibilityProps };
};

export default useAccessibility;
```

### 3. Performance Monitoring

```javascript
// src/utils/performance.js
export const measurePerformance = (name, fn) => {
  return async (...args) => {
    const start = performance.now();
    const result = await fn(...args);
    const end = performance.now();
    
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
  };
};

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          console.log('FCP:', entry.startTime);
        }
        if (entry.name === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
      });
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });

    return () => observer.disconnect();
  }, []);
};
```

## Part 5: Testing and Quality Assurance

### 1. Visual Testing

#### Cross-browser Testing
- Chrome DevTools
- Firefox Developer Tools
- Safari Web Inspector
- Edge DevTools

#### Device Testing
- Desktop: 1920x1080, 1440x900, 1366x768
- Tablet: 768x1024, 1024x768
- Mobile: 375x667, 414x896, 360x640

### 2. Performance Testing

#### Core Web Vitals
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

#### Optimization Techniques
- Image lazy loading
- Code splitting
- Bundle optimization
- CSS optimization

## Conclusion

This comprehensive guide provides a complete workflow for designing your portfolio website in Figma and implementing it in code. The key is maintaining consistency between design and development through:

1. **Design System**: Establish clear tokens and components
2. **Component Architecture**: Build reusable, maintainable components
3. **Responsive Design**: Ensure excellent experience across all devices
4. **Performance**: Optimize for speed and accessibility
5. **Testing**: Validate design implementation across platforms

By following this workflow, you'll create a portfolio website that not only looks professional in Figma but also performs excellently as a real web application.

Remember to iterate based on user feedback and continuously improve both the design and implementation based on real-world usage and performance metrics. 