# Website Hosting and Deployment Guide

This guide will walk you through the entire process of deploying your portfolio website and making it live on your custom domain, `raghavsuryan.com`. We'll use modern, beginner-friendly tools that make this process straightforward.

## The Overall Plan

1.  **Version Control**: Put your code on GitHub. This is like a cloud backup for your code and is necessary for our deployment method.
2.  **Hosting**: Use a service called Netlify to "host" your website. This means putting your website files on a computer that's always connected to the internet.
3.  **Deployment**: Connect Netlify to your GitHub repository. Netlify will automatically build and deploy your site whenever you push changes to your code.
4.  **Custom Domain**: Point your domain `raghavsuryan.com` to the website hosted on Netlify.

---

## Step 1: Push Your Code to GitHub

GitHub is a website for storing and sharing code. It uses a version control system called Git.

### 1a. Create a GitHub Repository

1.  Go to [GitHub](https://github.com) and create a free account if you don't have one.
2.  On the GitHub website, click the "+" icon in the top-right corner and select "New repository".
3.  Give your repository a name (e.g., `portfolio-website`). You can add a description if you want.
4.  Choose "Public" so you can use the free tiers of hosting services.
5.  **Do not** initialize the repository with a `README`, `.gitignore`, or license, as you already have these files.
6.  Click "Create repository".

### 1b. Push Your Local Code to GitHub

GitHub will now show you a page with some commands. You'll want the "push an existing repository from the command line" section. Open your terminal in the root of your `Portfolio` project directory and run the following commands one by one.

*Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and the repository name you just created.*

```bash
# Initialize a new Git repository in your project folder
git init -b main

# Add all the files in your project to be tracked by Git
git add .

# "Save" your files with a message
git commit -m "Initial commit"

# Link your local repository to the one you created on GitHub
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push your code to GitHub
git push -u origin main
```

Now, if you refresh your GitHub repository page, you will see all your project files there.

---

## Step 2: Deploy Your Site with Netlify

Netlify is a hosting platform that is perfect for modern static websites like yours.

### 2a. Sign Up for Netlify

1.  Go to [Netlify](https://www.netlify.com/) and click "Sign up".
2.  Sign up using your GitHub account. This makes connecting your repository very easy.

### 2b. Deploy Your Site

1.  After signing up and logging in, you'll be on your Netlify dashboard.
2.  Click on "Add new site" and then "Import an existing project".
3.  Choose "GitHub" as your Git provider. You may need to authorize Netlify to access your GitHub repositories.
4.  Select the repository you just created (e.g., `portfolio-website`).
5.  Now, you need to configure your build settings. Netlify might auto-detect these, but it's good to verify them.
    *   **Base directory:** `portfolio` (This is important because your main `package.json` is inside the `portfolio` folder).
    *   **Build command:** `npm run build`
    *   **Publish directory:** `portfolio/dist`
6.  Click "Deploy site".

Netlify will now pull your code from GitHub, run the build command, and deploy the resulting files from the `portfolio/dist` directory. This might take a minute or two. Once it's done, your site will be live on a random Netlify URL (e.g., `random-name-12345.netlify.app`). You can visit this URL to see your live site!

---

## Step 3: Configure Your Custom Domain

The final step is to make your site accessible via `raghavsuryan.com`.

### 3a. Add Your Domain to Netlify

1.  In your Netlify site's dashboard, go to "Domain settings".
2.  Click "Add a domain" or "Add custom domain".
3.  Enter `raghavsuryan.com` and click "Verify".
4.  It will ask if you are the owner. Click "Yes, add domain".
5.  Your domain will be added. Now you need to point your domain's DNS records to Netlify.

### 3b. Configure DNS Records

This part is done on the website of your domain registrar (the company where you bought `raghavsuryan.com`, e.g., GoDaddy, Namecheap, Google Domains).

1.  Log in to your domain registrar's website.
2.  Find the DNS management settings for `raghavsuryan.com`.
3.  Netlify recommends using their own DNS servers for simplicity. To do this, you need to change your **nameservers**.
4.  In Netlify's "Domain settings" page, it will show you a set of nameservers (usually 4 of them) like:
    *   `dns1.p01.nsone.net`
    *   `dns2.p01.nsone.net`
    *   `dns3.p01.nsone.net`
    *   `dns4.p01.nsone.net`
5.  In your domain registrar's DNS settings, find the option to change or use custom nameservers.
6.  Delete any existing nameservers and add the ones provided by Netlify.
7.  Save your changes.

**Note:** DNS changes can take anywhere from a few minutes to 48 hours to propagate across the internet. Be patient.

---

## Step 4: HTTPS/SSL

Netlify automatically provides a free SSL certificate for your custom domain via Let's Encrypt. This will make your site secure and accessible via `https://`. This process starts automatically once your DNS changes have propagated.

---

And that's it! Once the DNS changes are live, you will be able to visit `https://raghavsuryan.com` and see your portfolio. From now on, whenever you push changes to the `main` branch of your GitHub repository, Netlify will automatically rebuild and deploy the new version of your site. 