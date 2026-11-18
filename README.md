# Pro Saini website

Responsive React and Vite website for Pro Saini, an industrial automation and engineering company. The current homepage includes a video-led introduction, capability topics, service overviews, project stories, a delivery process and contact information.

## Run locally

```sh
npm install
npm run dev
```

## Project structure

- `src/components/` contains the homepage sections and reusable cards.
- `src/components/SiteHeader.jsx` contains the shared mega-menu navigation.
- `src/components/InteriorPage.jsx` maps page URLs to their page content.
- `src/data/siteContent.js` contains the hero slides, navigation, capability topics and process steps.
- `src/data/services.js` contains the service cards and their supplied marketing visuals.
- `src/data/projects.js` contains editable project stories.
- `src/hooks/` contains shared behavior such as lazy video playback.
- `src/styles.css` contains responsive site and component styles.
- `public/assets/marketing/` contains the supplied industrial videos and marketing images.
- `src/App.jsx` assembles the page sections.

## Pages

The navigation opens dedicated URLs: `/services`, `/industries`, `/solutions`, `/projects`, `/about` and `/contact`. The app uses normal links and reads the current URL path to render each page. A production host must serve `index.html` for these paths so direct visits and refreshes work.

## Add a service

Add a service object in `src/data/services.js` with a unique `id`, `category`, `title`, `summary`, `offerings`, `image` path and descriptive `imageAlt`. The Services section renders each entry automatically. Put new images in `public/assets/marketing/` and reference them from the root with `/assets/marketing/filename.jpeg`.

## Add a project story

Add or edit entries in `src/data/projects.js`. Each entry includes a project number, category, title, summary, challenge, delivery, outcome, scope tags and an optional video path. The project cards render from this list. Replace the clearly marked starter prompts with approved project details before publishing.

## Contact details

The current website contact section uses the contact information supplied by the Pro Saini marketing material. Update the `contactDetails` list and email link in `src/components/ContactSection.jsx` if those details change.
