# Saurav Bhandary - Portfolio

A static portfolio site (HTML, CSS, JavaScript). No build step or backend.

## Files

- `index.html` - page content
- `style.css` - styles
- `script.js` - mobile menu, scroll reveal, footer year
- `images/` - put your photos here (`20261021_120105.jpg`, `saurav-portrait.jpg`, `1637986.jpg`)

## Editing

1. Change text directly in `index.html`.
2. To add a project, duplicate a full `<article class="project-item">...</article>` block in the Work section.
3. To add a gallery photo, duplicate a `<figure class="photo-card">...</figure>` block and give the image a unique, descriptive `alt` text.
4. Replace the placeholder sentence in the Approach section with your own statement.

## Preview

Double-click `index.html`, or use VS Code with the **Live Server** extension.

## Deploying on GitHub Pages

1. Push the files (including the `images` folder) to a GitHub repo.
2. In the repo, go to Settings -> Pages and publish from the `main` branch.
3. Tick **Enforce HTTPS**.
4. Turn on two-factor authentication on your GitHub account.

## Security notes

- Never commit passwords, API keys, or `.env` files (the `.gitignore` already excludes them).
- Your email and phone number are public on the page. Remove the phone number if you want fewer spam calls.
- If you add a contact form, use a hosted service (Formspree, Netlify Forms) and keep any keys off the front end.
