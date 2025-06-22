# Personalizing and Designing Your Portfolio

This comprehensive guide explains how to transform your basic portfolio into a stunning, professional website that showcases your skills and personality.

---

## 1. Running the Development Server

Always run the development server to see changes instantly:

```bash
cd /path/to/your/Portfolio/portfolio
npm run dev
```

Visit `http://localhost:5173/` to see your changes in real-time.

---

## 2. Homepage Design & Personalization

### 2.1 Adding Your Photo

Create a professional hero section with your photo:

```jsx
// In src/pages/Home.jsx
<div className="hero-section">
  <div className="profile-image-container">
    <img 
      src="/profile.jpg" 
      alt="Your Name" 
      className="profile-image"
      style={{
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '4px solid #646cff',
        boxShadow: '0 0 30px rgba(100, 108, 255, 0.3)'
      }}
    />
  </div>
  <h1>Your Name</h1>
  <p className="tagline">AI Researcher • Graphics Hacker • Systems Thinker</p>
</div>
```

**Tips:**
- Use a high-quality square photo (at least 400x400px)
- Place the image in the `public/` folder
- Consider a professional headshot with good lighting

### 2.2 Adding Contact Links to Homepage

```jsx
// Add to your homepage
<div className="social-links">
  <a href="mailto:your@email.com" className="contact-link">
    <span className="icon">📧</span>
    <span>Email</span>
  </a>
  <a href="https://linkedin.com/in/yourprofile" className="contact-link">
    <span className="icon">💼</span>
    <span>LinkedIn</span>
  </a>
  <a href="https://github.com/yourusername" className="contact-link">
    <span className="icon">💻</span>
    <span>GitHub</span>
  </a>
</div>
```

**Styling for Cool Links:**
```css
.contact-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: rgba(100, 108, 255, 0.1);
  border: 1px solid rgba(100, 108, 255, 0.3);
  border-radius: 25px;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.3s ease;
}

.contact-link:hover {
  background: rgba(100, 108, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(100, 108, 255, 0.4);
}
```

### 2.3 Horizontal Tech Stack Bar

Create a scrolling tech stack display:

```jsx
// Create src/components/TechStack.jsx
const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Python', icon: '🐍' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'Three.js', icon: '🎮' },
  // Add more...
];

function TechStack() {
  return (
    <div className="tech-stack-container">
      <h3>Tech Stack</h3>
      <div className="tech-stack-scroll">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-item">
            <span className="tech-icon">{tech.icon}</span>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

**CSS for Horizontal Scrolling:**
```css
.tech-stack-scroll {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 20px 0;
  scrollbar-width: none; /* Firefox */
}

.tech-stack-scroll::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.tech-item:hover {
  transform: scale(1.1);
}
```

---

## 3. Scroll & Mouse Hover Animations

### 3.1 Installing Framer Motion

```bash
npm install framer-motion
```

### 3.2 Scroll Animations

```jsx
import { motion, useScroll, useTransform } from 'framer-motion';

function HomePage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div style={{ y }}>
        {/* Content that moves on scroll */}
      </motion.div>
    </motion.div>
  );
}
```

### 3.3 Hover Effects

```jsx
<motion.div
  whileHover={{ 
    scale: 1.05,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  {/* Your content */}
</motion.div>
```

---

## 4. Typography & Fonts

### 4.1 Using Google Fonts

Add to your `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### 4.2 Font Hierarchy

```css
/* Primary heading */
h1 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  background: linear-gradient(135deg, #646cff, #747bff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Secondary headings */
h2 {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
}

/* Body text */
p {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

/* Code/tech text */
.code-text {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
}
```

---

## 5. Projects Section Design

### 5.1 Project Data Structure

Create `src/data/projects.js`:
```js
export const projects = [
  {
    id: 1,
    title: "AI-Powered Code Generator",
    description: "A machine learning model that generates code from natural language descriptions using transformer architecture.",
    image: "/projects/ai-code-gen.jpg",
    technologies: ["Python", "PyTorch", "Transformers", "FastAPI"],
    githubUrl: "https://github.com/yourusername/ai-code-gen",
    liveUrl: "https://ai-code-gen.netlify.app",
    featured: true
  },
  // Add more projects...
];
```

### 5.2 Project Card Component

```jsx
import { motion } from 'framer-motion';

function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            {project.liveUrl && (
              <a href={project.liveUrl} className="project-link">
                Live Demo
              </a>
            )}
            <a href={project.githubUrl} className="project-link">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
```

### 5.3 Project Images

**Tips for project images:**
- Use 16:9 aspect ratio (e.g., 800x450px)
- Create mockups using tools like Figma or Canva
- Show actual screenshots of your projects
- Use consistent styling across all project images

---

## 6. Advanced Styling Techniques

### 6.1 Glassmorphism Cards

```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

### 6.2 Gradient Backgrounds

```css
.gradient-bg {
  background: linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%);
}

.accent-gradient {
  background: linear-gradient(45deg, #646cff, #747bff, #8b5cf6);
}
```

### 6.3 Custom Animations

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 5px rgba(100, 108, 255, 0.5); }
  50% { box-shadow: 0 0 20px rgba(100, 108, 255, 0.8); }
}

.floating { animation: float 6s ease-in-out infinite; }
.glowing { animation: glow 2s ease-in-out infinite; }
```

---

## 7. Responsive Design

### 7.1 Mobile-First Approach

```css
/* Mobile styles (default) */
.container {
  padding: 20px;
  max-width: 100%;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    padding: 60px;
  }
}
```

### 7.2 Responsive Typography

```css
h1 { font-size: clamp(2rem, 5vw, 4rem); }
h2 { font-size: clamp(1.5rem, 4vw, 2.5rem); }
p { font-size: clamp(1rem, 2vw, 1.2rem); }
```

---

## 8. Performance Optimization

### 8.1 Image Optimization

- Use WebP format when possible
- Compress images (aim for <100KB each)
- Use `loading="lazy"` for images below the fold
- Consider using a CDN like Cloudinary

### 8.2 Code Splitting

```jsx
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./pages/Projects'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Projects />
    </Suspense>
  );
}
```

---

## 9. Final Polish

### 9.1 Loading States

```jsx
function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
    </div>
  );
}
```

### 9.2 Error Boundaries

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

---

## 10. Deployment Checklist

Before deploying:
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Optimize images
- [ ] Update meta tags for SEO
- [ ] Test loading speed
- [ ] Verify contact form works
- [ ] Check browser compatibility

---

This guide provides the foundation for creating a professional, modern portfolio. Experiment with these techniques and make them your own! 