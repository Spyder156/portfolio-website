# Deployment and Maintenance Guide

This guide explains how to run, deploy, and maintain your portfolio website.

## Local Development

### Prerequisites

- **Node.js**: Version 14.0 or newer
- **npm**: Usually comes with Node.js
- **Git**: For version control

### Running Locally

1. **Clone the repository** (if you're working from a new machine):
   ```bash
   git clone <your-repository-url>
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Access the site**: Open your browser and go to [http://localhost:5173](http://localhost:5173)

The development server provides:
- Hot reloading (changes appear instantly)
- Error messages in the browser
- Development-specific optimizations

### Making Changes

#### Content Updates

1. **Personal information**: Edit `src/components/HomeCard.jsx`
   - Update your name, tagline, and bio
   - Change contact links (email, GitHub, LinkedIn)
   - Replace the profile image (`public/profile.jpg`)

2. **Projects**: Edit `src/pages/Projects.jsx`
   - The `projectsData` array contains all project information
   - Add, remove, or modify projects in this array
   - Project images should be added to `public/projects/`

3. **Tech stack**: Edit `src/components/TechStackBar.jsx`
   - Update the `technologies` array
   - Add corresponding icons to `public/tech/`

#### Visual/Design Changes

1. **Colors**: Edit `tailwind.config.js`
   - Change the primary, secondary, and accent colors
   - Add new color variables as needed

2. **Layout**: Edit individual components in `src/components/`
   - Modify spacing, sizing, and positioning using Tailwind classes
   - Update responsive breakpoints for different devices

3. **Animations**: Edit components that use Framer Motion
   - Adjust animation parameters like duration, delay, and easing
   - Add or remove animations on components

#### Adding New Features

1. **New pages**:
   - Create a new file in `src/pages/`
   - Add the route in `src/App.jsx`
   - Update the navigation in `src/components/Navbar.jsx`

2. **New components**:
   - Add files to `src/components/`
   - Import and use them in your pages

## Deployment Process

### Step 1: Prepare Your Project for Deployment

1. **Build your project**:
   ```bash
   npm run build
   ```
   This creates a `dist` directory with optimized files ready for production.

2. **Test your production build locally** (optional but recommended):
   ```bash
   npm run preview
   ```
   This serves your built project locally to make sure everything works as expected.

3. **Initialize a Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

4. **Create a GitHub repository**:
   - Go to [github.com](https://github.com) and sign in
   - Click the "+" icon in the top right corner and select "New repository"
   - Name your repository (e.g., "portfolio")
   - Keep it public if you want others to see your source code
   - Click "Create repository"

5. **Link your local repository to GitHub**:
   ```bash
   git remote add origin https://github.com/your-username/portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel (Recommended)

1. **Sign up for Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up using your GitHub account (this allows Vercel to access your repositories)

2. **Import your GitHub repository**:
   - From the Vercel dashboard, click "Add New..."
   - Select "Project"
   - Find and select your portfolio repository from the list
   - Vercel will automatically detect that it's a Vite.js project

3. **Configure project settings**:
   - Vercel usually detects the correct settings automatically for Vite projects
   - Framework preset: Vite
   - Build command: `npm run build` (should be pre-filled)
   - Output directory: `dist` (should be pre-filled)
   - Install command: `npm install` (should be pre-filled)

4. **Deploy your project**:
   - Click "Deploy"
   - Vercel will build and deploy your site
   - Once deployment is complete, you'll get a URL like `your-portfolio.vercel.app`

5. **Set up your custom domain**:
   - In your Vercel project dashboard, go to "Settings" → "Domains"
   - Click "Add" and enter your domain (e.g., raghavsuryan.com)
   - Follow Vercel's specific instructions for your domain registrar
   - Typically, you'll need to add:
     - An A record pointing to Vercel's IP (76.76.21.21)
     - A CNAME record for www subdomain

6. **Verify your domain setup**:
   - Wait for DNS changes to propagate (can take up to 48 hours, but usually much faster)
   - Vercel will automatically issue an SSL certificate for your domain

### Step 3: Alternative - Deploy to Netlify

1. **Sign up for Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up using your GitHub account

2. **Import your GitHub repository**:
   - From the Netlify dashboard, click "New site from Git"
   - Select GitHub as your Git provider
   - Find and select your portfolio repository

3. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Set up your custom domain**:
   - Go to "Site settings" → "Domain management" → "Add custom domain"
   - Enter your domain name (e.g., raghavsuryan.com)
   - Follow Netlify's specific DNS instructions for your domain registrar

### Step 4: Alternative - Deploy to GitHub Pages

1. **Install the gh-pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deployment scripts** to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Configure Vite for GitHub Pages**: 
   Create a vite.config.js file (or edit existing):
   ```javascript
   export default {
     base: '/portfolio/', // Use the name of your repository
   }
   ```

4. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

5. **Configure GitHub repository**:
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "gh-pages" branch
   - Your site will be available at https://your-username.github.io/portfolio/

## Automating Deployments

### Setting Up Continuous Deployment with Vercel

1. **Push changes to GitHub**:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```

2. **Vercel automatically deploys**:
   - Vercel detects the push to your repository
   - It automatically builds and deploys your updates
   - No additional steps required

3. **Check deployment status**:
   - Go to your Vercel dashboard
   - Click on your project
   - View the "Deployments" tab to see the status

### Monitoring Deployments

1. **View build logs**:
   - In your Vercel/Netlify dashboard, click on any deployment
   - View detailed build logs to troubleshoot any issues

2. **Preview deployments**:
   - Both Vercel and Netlify create unique preview URLs for each deployment
   - Use these to verify changes before they affect your main domain

## Post-Deployment Tasks

1. **Verify your site works correctly**:
   - Test all pages and links
   - Check different device sizes (mobile, tablet, desktop)
   - Test the 3D background functionality

2. **Set up analytics** (optional):
   - Sign up for Google Analytics, Plausible, or Fathom
   - Add the tracking script to your index.html
   - Deploy the changes

3. **Submit your site to search engines** (optional):
   - Google Search Console: https://search.google.com/search-console
   - Bing Webmaster Tools: https://www.bing.com/webmasters

## Maintenance Tips

### Regular Updates

1. **Keep dependencies updated**:
   ```bash
   npm update
   ```
   or for major updates:
   ```bash
   npx npm-check-updates -u
   npm install
   ```

2. **Check for security vulnerabilities**:
   ```bash
   npm audit
   ```

### Performance Optimization

1. **Optimize images** before adding them to the project:
   - Use modern formats like WebP
   - Compress images using tools like [TinyPNG](https://tinypng.com)
   - Consider appropriate dimensions for their display size

2. **Monitor performance** using browser tools:
   - Chrome DevTools Lighthouse
   - Firefox Performance tab
   - Check for memory leaks, especially with 3D components

### SEO and Accessibility

1. **Update meta tags** in `index.html` for better SEO:
   - Title
   - Description
   - Open Graph tags (for social sharing)

2. **Ensure accessibility**:
   - Add alt text to all images
   - Maintain proper heading hierarchy
   - Ensure sufficient color contrast
   - Test with screen readers

## Backup Strategy

1. **Regular commits** to GitHub serve as version control and backup

2. **Export or backup content** separately if you have a lot of media/content:
   - Project images
   - Resume PDF
   - Tech stack icons

## Troubleshooting Common Issues

1. **3D background not working**:
   - Check WebGL compatibility in the browser
   - Simplify the mesh by reducing subdivision count
   - Add fallback for devices without WebGL support

2. **Build failures**:
   - Check for syntax errors
   - Ensure all imports are properly resolved
   - Check compatibility of dependencies

3. **Deployment issues**:
   - Verify that build settings match the platform requirements
   - Check environment variables if needed
   - Examine build logs for specific errors
   
4. **Custom domain not working**:
   - Verify DNS settings with your domain registrar
   - Ensure SSL certificates are properly issued
   - Check for domain propagation (can take up to 48 hours) 