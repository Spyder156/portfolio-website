# Cursor Development Guide for Portfolio

This guide will help you use Cursor IDE efficiently for future improvements and changes to your portfolio website.

## Getting Started with Cursor

### Opening Your Project in Cursor

1. **Open Cursor IDE** on your computer
2. Select **File > Open Folder** or use the keyboard shortcut `Ctrl+O` (Windows/Linux) or `Cmd+O` (Mac)
3. Navigate to your portfolio project directory and click "Open"

### Project Navigation in Cursor

- **File Explorer**: Use the sidebar to browse and open files
- **Search**: Use `Ctrl+Shift+F` (Windows/Linux) or `Cmd+Shift+F` (Mac) to search across files
- **Quick Open**: Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac) to quickly open files by name

## Using AI Features in Cursor

Cursor's built-in AI can assist with code development and improvements.

### Code Suggestions

1. **Get Inline Suggestions**: Type your code, and Cursor will offer AI-powered completions
2. **Accept Suggestions**: Press `Tab` to accept a suggestion

### AI Chat for Help

1. **Open AI Chat**: Click the chat icon in the sidebar or press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Shift+I` (Mac)
2. **Ask Questions**: Describe what you want to do, and the AI will suggest code or solutions
3. **Apply Suggestions**: Click the "Apply" button to insert code into your editor

### Common Questions for the AI

Here are some effective prompts to use with Cursor's AI:

- "Help me optimize the 3D background for better performance"
- "Update the styling for better mobile responsiveness in the ProjectCard component"
- "Add a dark/light theme toggle to the website"
- "Create a contact form component with validation"
- "Implement lazy loading for project images"

## Making Common Improvements

### Adding New Components

1. **Create Component File**: Add a new file in `src/components/`
2. **Ask AI for Help**: Use the AI to generate a starter template for your component
3. **Import Component**: Add the import statement in the appropriate page or parent component
4. **Implement Component**: Update the code in relevant files to use your new component

Example prompt for AI:
```
Create a Contact.jsx component that includes:
- A form with name, email, message fields
- Form validation
- Submit handling with a success message
- Styling with Tailwind CSS to match our existing design
```

### Modifying the 3D Background

1. **Open BackgroundMesh.jsx**: Navigate to `src/components/BackgroundMesh.jsx`
2. **Make Adjustments**: Modify parameters in the geometry, material, or animation
3. **Test Performance**: Check for smooth animation on different devices

Example prompt for AI:
```
Modify the BackgroundMesh component to:
- Reduce the subdivision count for better performance on mobile
- Change the color scheme to blue/purple gradient
- Add a subtle pulsing animation even without mouse movement
```

### Adding a Blog or New Page Section

1. **Create New Page**: Add a new file in `src/pages/`
2. **Update App.jsx**: Add the new route in `src/App.jsx`
3. **Update Navigation**: Modify the `Navbar.jsx` component to include a link to your new page

Example prompt for AI:
```
Create a Blog.jsx page that:
- Shows a grid of blog post previews
- Includes a featured post section at the top
- Has pagination for multiple posts
- Follows our current design aesthetic
```

## Project Structure Reminders

When making changes, keep in mind the current project structure:

- **Components**: Reusable UI elements in `src/components/`
- **Pages**: Full page views in `src/pages/`
- **Hooks**: Custom React hooks in `src/hooks/`
- **Styles**: CSS and Tailwind configurations in `src/styles/`
- **Public Assets**: Images and static files in `public/`

## Testing Changes in Cursor

1. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Run this in Cursor's integrated terminal (Ctrl+` or View > Terminal)

2. **Preview Changes**: With the dev server running, see your changes in real-time at `http://localhost:5173`

3. **Check Console**: Use browser DevTools (F12) to check for errors or performance issues

## Common Debugging Tips in Cursor

1. **Error Highlighting**: Cursor highlights errors in your code with red squiggly lines

2. **AI Debugging**: Describe errors to the AI chat to get help solving them
   Example: "I'm getting this error when running the dev server: [paste error]. How can I fix it?"

3. **Code Analysis**: Use Cursor's AI to analyze and improve existing code
   Example: "Analyze this component for potential performance issues: [paste component code]"

## Optimizing Portfolio for Different Devices

1. **Test Responsive Design**: Use browser DevTools to test different screen sizes

2. **Adjust Tailwind Classes**: Update components with additional responsive classes
   Example: `className="text-lg md:text-xl lg:text-2xl"`

3. **Ask AI for Responsive Improvements**: Provide specific components to the AI for responsive design suggestions

## Version Control in Cursor

1. **Built-in Git Controls**: Access Git features from the source control tab in the sidebar

2. **Commit Changes**: 
   - Stage files with the + button 
   - Enter a commit message
   - Click the checkmark to commit

3. **Push to GitHub**: Click the sync button to push changes to your remote repository

## Performance Optimization

1. **Analyze with Cursor AI**: Ask the AI to review your code for performance issues

2. **Check for Large Dependencies**: Review package.json for unnecessary packages

3. **Optimize 3D Elements**: The BackgroundMesh is the most performance-intensive component; adjust parameters as needed

## Next Steps and Enhancements

Here are some potential improvements you could implement with Cursor's help:

1. **Blog Section**: Add a blog to showcase your technical writing
   - Ask Cursor AI to help create a blog system with MDX

2. **Dark/Light Mode Toggle**: Add theme switching capability
   - Cursor AI can help implement this with Tailwind's dark mode

3. **Animations and Transitions**: Enhance user experience with more animations
   - Use Cursor AI to generate Framer Motion animations

4. **Contact Form with Backend**: Add a functioning contact form
   - Ask Cursor AI to help set up a serverless function

5. **SEO Improvements**: Enhance your site's search engine visibility
   - Cursor AI can suggest meta tags and structured data

## Getting Help

If you encounter any issues while working with Cursor:

1. **Ask the AI**: Describe your problem in detail to the AI chat

2. **Check Documentation**: Refer to [Cursor's official documentation](https://cursor.sh/docs)

3. **Community Help**: Visit the [Cursor Discord community](https://discord.gg/cursor) for assistance

## Regular Maintenance

1. **Update Dependencies**: Regularly update your packages for security and features
   ```bash
   npm update
   ```

2. **Audit for Issues**: Check for security vulnerabilities
   ```bash
   npm audit
   ```

3. **Clean Up Unused Code**: Ask Cursor AI to help identify and remove unused components or imports 