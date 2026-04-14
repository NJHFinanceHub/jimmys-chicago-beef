# Jimmy's Chicago Beef — Website

A simple, fast, mobile-friendly website for **Jimmy's Chicago Beef**, a Chicago-style food truck based in Denver, Colorado.

Built as plain HTML / CSS / JS — no build tools, no frameworks. You can open any page in a browser, or host it on GitHub Pages, Netlify, Vercel, or any static host.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, highlights, short story, catering callout |
| `about.html` | About — Jimmy's story, standards, values |
| `menu.html` | Menu — sandwiches, dogs, sides, drinks |
| `calendar.html` | "Find Us" — embedded Google Calendar of truck stops |
| `contact.html` | Contact + catering inquiry form |

## Quick start (local preview)

Just open `index.html` in your browser. That's it.

If you want a local server (recommended so the calendar iframe loads cleanly):

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000
```

## Customizing the content

### 1. Add real photos

Create an `images/` folder and drop in your photos from
`C:\Users\nicho\OneDrive\Desktop\Jimmy's`. The site currently uses styled
placeholders. To replace them with real photos, find each `<div class="photo-placeholder">`
block in the HTML and swap it for a real `<img>` tag, for example:

```html
<img src="images/jimmy-portrait.jpg" alt="Jimmy outside the truck" />
```

Good shots to include:
- Jimmy at the window (`images/jimmy.jpg`)
- The truck exterior (`images/truck.jpg`)
- Hero shot of a dipped Italian beef (`images/hero-beef.jpg`)
- A classic Chicago dog top-down (`images/chicago-dog.jpg`)

### 2. Wire up the Google Calendar

Open `calendar.html` and find the `<iframe>` on the calendar page. Replace its
`src` with **your** Google Calendar embed URL:

1. Go to [calendar.google.com](https://calendar.google.com) → create a new calendar (e.g. "Jimmy's Schedule").
2. Make it **public**: Settings → your calendar → "Access permissions for events" → *Make available to public*.
3. Still in settings, scroll to **"Integrate calendar"** and copy the "Public URL to this calendar" or the embed code.
4. Paste the `src` from the embed code into the iframe in `calendar.html`.

From then on, whenever you (or anyone with edit access) adds an event in
Google Calendar, it will show up live on the site — no code changes needed.

### 3. Hook up the contact form

The contact form uses [Formspree](https://formspree.io) as the default handler:

1. Sign up at Formspree (free tier is enough to start).
2. Create a new form; copy the endpoint (e.g. `https://formspree.io/f/abcd1234`).
3. In `contact.html`, replace `https://formspree.io/f/your-form-id` with your endpoint.

Alternatives that work as drop-in replacements:
- **Netlify Forms** — if hosting on Netlify, add `netlify` to the `<form>` tag.
- **Getform**, **Basin**, **FormKeep** — same idea, swap the `action` URL.

### 4. Update contact details

Search the codebase for these placeholders and replace:
- `hello@jimmyschicagobeef.com` — your real email
- `(720) 555-0123` — your real phone number

### 5. Update menu / prices

All menu items and prices live in `menu.html`. Edit in place — they're just
plain HTML blocks.

## Hosting it (free options)

- **GitHub Pages**: push this repo and enable Pages in repo settings.
- **Netlify**: drag the folder onto app.netlify.com, or connect the repo.
- **Vercel**: `vercel deploy` from the folder.
- **Cloudflare Pages**: connect the repo, framework "None".

All of these give you a free HTTPS URL, and you can point your real domain
(e.g. `jimmyschicagobeef.com`) at it once you're ready.

## Design notes

- Colors inspired by the Chicago flag: red, sky blue, cream/white.
- Display font: **Oswald** (bold, diner-marquee feel).
- Body font: **Lora** (readable serif).
- Accessibility: semantic HTML, focus states, keyboard-navigable menu, good contrast.
- Fully responsive — tested layout down to ~360px wide.

## File layout

```
.
├── index.html
├── about.html
├── menu.html
├── calendar.html
├── contact.html
├── styles.css
├── script.js
└── images/          (add your photos here)
```

Enjoy, and go Bears. 🏈 (If emojis offend, see styles.css.)
