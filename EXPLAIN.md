# Project Structure and Technology Explanation

This document provides an overview of the technologies used in this project and explains the purpose of each file and folder.

---

## 1. Core Technologies

Your portfolio website is built with a modern tech stack designed for performance and developer experience:

-   **React:** A JavaScript library for building user interfaces. It allows us to create reusable "components" (like a navigation bar or a project card) and manage the state of the application efficiently.
-   **Vite:** A lightning-fast build tool and development server. It compiles and bundles all our code (React, CSS, etc.) into optimized files that can be deployed to the web. It also provides the hot-reloading development server you use with `npm run dev`.
-   **Tailwind CSS:** A utility-first CSS framework that allows for rapid styling directly within the HTML/JSX files. (We will integrate this soon).
-   **Three.js & React Three Fiber:** Libraries for creating and displaying animated 3D computer graphics in a web browser. We use these for the dynamic particle background.

---

## 2. Folder and File Structure

Here is a breakdown of what each part of the project does. All of these are located inside the main `portfolio/` directory.

### `/` (Root Directory)
This is the main project folder.

-   **`package.json`**: The most important file. It lists project details, dependencies (the libraries we use, like React), and defines scripts like `npm run dev` and `npm run build`.
-   **`vite.config.js`**: The configuration file for Vite. This is where we tell Vite how to build our project, for example, by adding the React plugin.
-   **`tailwind.config.js`**: The configuration file for Tailwind CSS.
-   **`postcss.config.cjs`**: A configuration file for PostCSS, a tool that transforms CSS with JavaScript plugins. Tailwind uses it under the hood.
-   **`index.html`**: The single HTML page of the application. The entire React application is injected into the `<div id="root"></div>` element in this file.
-   **`README.md`**: The main README file for the project on GitHub.
-   **`HOST.md`**, **`PERSONALIZE.md`**, **`EXPLAIN.md`**: The documentation files I've created for you.

### `/dist/`
This directory is generated automatically when you run the `npm run build` command. It contains the final, optimized, and static version of your website that is ready for hosting. **You should never edit the contents of this folder directly.** Netlify uses this folder to host your site.

### `/node_modules/`
This directory is also automatically generated when you run `npm install`. It contains all the third-party libraries (dependencies) that the project needs to function. **You should never edit this folder.**

### `/public/`
This folder is for static assets that don't need to be processed by the build tool.
-   **Use this for:** Your photo, project images, logos, and the `favicon.svg`.
-   Files in here can be referenced directly in the code with a leading slash (e.g., `<img src="/my-photo.jpg" />`).

### `/src/`
This is the heart of your application, containing all the source code you will write and edit.

-   **`/components/`**: This folder contains reusable React components that can be used across multiple pages.
    -   `DynamicBackground.jsx`: The component for the interactive particle background. A future `Navbar.jsx` or `Footer.jsx` would also go here.
-   **`/pages/`**: This folder contains the components for each main page of your website.
    -   `Home.jsx`, `Projects.jsx`, `Contact.jsx`.
-   **`/data/`**: (Coming soon) This folder will hold JavaScript files that export data, like the list of your projects. This separates your data from your presentation logic, making it easier to update.
-   **`App.jsx`**: The main application component. It sets up the overall layout, includes the `DynamicBackground`, and handles the routing that decides which page to show based on the URL.
-   **`main.jsx`**: The entry point of the application. It takes the main `App` component and renders it into the `root` div of the `index.html` file.
-   **`style.css`**: The global CSS file for any styles that are not handled by Tailwind CSS. It sets the base styles for the site, like the background color and default font. 