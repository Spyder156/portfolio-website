# Personalizing and Developing Your Portfolio

This guide explains how to customize the content of your portfolio and how to run a local development server to see your changes in real-time before you push them to the live website.

---

## 1. Running the Website on Your Local Machine

To see changes instantly without having to wait for a new deployment on Netlify, you can run a "development server" on your computer.

1.  **Open your terminal.**
2.  **Navigate to the project's `portfolio` directory:**
    ```bash
    cd /path/to/your/Portfolio/portfolio
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  Your terminal will show you a local address, usually `http://localhost:5173/`. Open this URL in your web browser.

Now you will see your website running directly on your machine. Any changes you save to the project files (e.g., in `src/pages/Home.jsx`) will cause the website in your browser to update automatically. This is the fastest way to work.

To stop the server, go back to your terminal and press `Ctrl + C`.

---

## 2. Editing the Home Page

All the content for your home page is located in one file: `portfolio/src/pages/Home.jsx`. Open this file in your code editor to make changes.

### Changing Your Photo
1.  Get a high-quality photo of yourself. A square aspect ratio works best. Let's say you name it `my-photo.jpg`.
2.  Place this photo in the `portfolio/public/` directory. The `public` folder is for static assets like images.
3.  In `portfolio/src/pages/Home.jsx`, find the `<img>` tag and change its `src` attribute to point to your new photo:
    ```jsx
    // Before
    <img src="/default-photo.jpg" alt="Your Name" />

    // After
    <img src="/my-photo.jpg" alt="Raghav Suryan" />
    ```

### Changing Personal Info (Bio, Education, etc.)
The `Home.jsx` file uses standard HTML-like syntax (called JSX). You can directly edit the text within the tags. For example, to change your bio, find the relevant `<p>` (paragraph) tag and just type your new text inside it.

```jsx
// Find this section in Home.jsx
<div>
  <h2>About Me</h2>
  <p>This is where my current bio goes. I am a student and a developer...</p> // <-- Edit this text
</div>
```

### Updating Your Tech Stack
The process is similar. Find the section for the tech stack and edit the list. To add or remove logos, you will need to:
1.  Find monochromatic SVG logos for the technologies you use.
2.  Place them in `portfolio/public/logos/`.
3.  Add a corresponding `<img>` tag in the `Home.jsx` file within the tech stack list.

---

## 3. Adding or Removing Projects

To make managing projects easy, your project information will be stored in a dedicated file: `portfolio/src/data/projects.js`. This file will contain an array of project objects.

The structure of `projects.js` will look like this:
```javascript
export const projects = [
  {
    title: "My First Awesome Project",
    coverImage: "/project-covers/project1.jpg",
    description: "A short description of my first project.",
    link: "/projects/project-one-details" // A link to a future details page
  },
  {
    title: "Another Cool Thing I Built",
    coverImage: "/project-covers/project2.png",
    description: "This project uses AI to do amazing things.",
    link: "/projects/project-two-details"
  }
  // Add new project objects here
];
```

### To Add a New Project:
1.  Add a cover image for your project to the `portfolio/public/project-covers/` directory.
2.  Open `portfolio/src/data/projects.js` and add a new object to the `projects` array, filling in the details for your new project.

### To Remove a Project:
1.  Simply delete the corresponding object from the `projects` array in `portfolio/src/data/projects.js`.

The "Projects" page at `portfolio/src/pages/Projects.jsx` will automatically read this data and display a tile for each project. You don't need to edit the `Projects.jsx` file itself, just the data file.

---

## 4. Updating the Contact Page

The contact form is located in `portfolio/src/pages/Contact.jsx`. You can edit this file to change the fields available in the form (e.g., the dropdown options for the type of contact).

The logic for sending the email will be handled by a third-party service like [Netlify Forms](https://docs.netlify.com/forms/setup/) or a dedicated email service, which we can set up later. For now, you can customize the appearance of the form in this file. 