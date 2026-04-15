# Jimmy's Chicago Beef — Website

Static site for **Jimmy's Chicago Beef**, a Chicago-style food truck in Denver, Colorado. Plain HTML, CSS, and a few lines of JS — no build step, no framework.

Live at [jimmyschicagobeef.com](https://jimmyschicagobeef.com) (served from GitHub Pages).

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, highlights, short story, gallery, catering callout |
| `about.html` | About — the owners' story and values |
| `menu.html` | Menu — sandwiches, dogs, sides, drinks |
| `calendar.html` | "Find Us" — embedded Google Calendar of truck stops |
| `contact.html` | Contact + catering inquiry form |

## Local preview

Open any HTML file in a browser. For the calendar iframe to render cleanly, serve the folder:

```bash
python -m http.server 8000
# visit http://localhost:8000
```

## Editing content

- **Menu items and prices** live in `menu.html`.
- **Calendar embed**: in `calendar.html`, replace the iframe `src` with your Google Calendar public embed URL.
- **Contact form**: replace `https://formspree.io/f/your-form-id` in `contact.html` with your Formspree endpoint (or swap in Netlify Forms / Getform / etc.).
- **Photos** live in `images/` and are referenced by filename in the HTML.

## Design notes

- Palette pulled from the truck wrap: sky-blue body, red-and-white checker kick plate, yellow-orange script, deep navy skyline.
- Display font **Oswald**, body font **Lora**, script accent **Pacifico** — all via Google Fonts.
- Retro mid-century accents: circular seal stamp, Googie starburst, postcard-framed gallery photos.

## Hosting

Served from GitHub Pages using the `claude/jimmys-chicago-beef-website-PzXno` branch. The `CNAME` file at the repo root sets the custom domain; DNS records at the Squarespace-registered domain point at GitHub's Pages IPs.
