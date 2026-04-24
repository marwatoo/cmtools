# MediaTools Studio

A unified web app combining 22 media production tools into one beautiful, responsive interface — hostable for free on **GitHub Pages**.

---

## 🚀 Live Demo

> Deploy to GitHub Pages (see setup below) and your tools are live at:  
> `https://<your-username>.github.io/<repo-name>/`

---

## 🧰 Tools Included

| # | Tool | Purpose |
|---|------|---------|
| 01 | **YT Cover Creator** | YouTube cover with AR/FR/Footix/Sport overlays (1920×1080) |
| 02 | **IG Sport Cover** | Instagram Sport cover with branding + Arabic (1080×1920) |
| 03 | **Le360 Deck** | TweetDeck-style news reader for Le360 feeds |
| 04 | **Diapo Overlay** | Batch image overlay with logo, auto-download (1080×1350) |
| 05 | **Le360 Post** | Design 360 posts with color highlights (1080×1350) |
| 06 | **Dual Flag Generator** | Side-by-side country flags export (1920×1080) |
| 07 | **IG Flag Post** | Stacked flags for Instagram (1080×1350) |
| 08 | **X Deck (BETA)** | TweetDeck-style X feed dashboard |
| 09 | **iFrame Generator** | Embed YouTube, PDFs, Twitter, Instagram posts |
| 10 | **Text Transformer** | Case convert, URL encode, find & replace |
| 11 | **Password Generator** | Secure cryptographically-strong passwords |
| 12 | **Color Palette Generator** | Extract colors from images, export CSS |
| 13 | **Image Converter** | JPG ↔ PNG ↔ WebP conversion |
| 14 | **Image Resizer** | Resize to preset social dimensions |
| 15 | **Video Thumbnail Extractor** | Grab YouTube frame timestamps as images |
| 16 | **Watermark Tool** | Add text or logo watermarks to images |
| 17 | **Markdown Viewer** | Write/paste markdown, live preview, load files |
| 18 | **OG Card Preview** | Preview link cards for X, Facebook, LinkedIn |
| 19 | **Character Counter** | Check limits for Twitter, LinkedIn, Instagram |
| 20 | **Color Converter** | Convert HEX, RGB, HSL with sliders + palettes |
| 21 | **Le360 Brandbook** | Figma-embedded brand guidelines |
| 22 | **Text Sorter** | Sort lines A-Z/Z-A, remove duplicates |

---

## 📁 Project Structure

```
mediatools/
│
├── index.html                  ← Hub / landing page
│
├── assets/
│   ├── global.css            ← Shared design system (dark/light theme)
│   └── theme.js              ← Dark/light mode toggle
│
├── fonts/                    ← Required fonts (YT Cover)
│
└── tools/
│   ├── ytcover.html          ← Tool 01
│   ├── igcover.html          ← Tool 02
│   ├── le360deck.html       ← Tool 03
│   ├── diapo.html          ← Tool 04
│   ├── instapost.html      ← Tool 05
│   ├── flags.html          ← Tool 06
│   ├── flagig.html         ← Tool 07
│   ├── xdeck.html          ← Tool 08
│   ├── iframe.html         ← Tool 09
│   ├── text.html          ← Tool 10
│   ├── password.html       ← Tool 11
│   ├── colors.html         ← Tool 12
│   ├── imgconv.html        ← Tool 13
│   ├── imgres.html         ← Tool 14
│   ├── ytthumbnail.html   ← Tool 15
│   ├── water.html         ← Tool 16
│   ├── mark.html          ← Tool 17
│   ├── ogcard.html        ← Tool 18
│   ├── charcount.html     ← Tool 19
│   ├── color.html         ← Tool 20
│   ├── brandbook.html     ← Tool 21
│   ├── sort.html          ← Tool 22
│   ├── gradient.html     ← Utility
│   ├── trimmer.html       ← Utility
│   ├── snippets.html     ← Snippets pad
│   └── zflags.html        ← Flag database
```

---

## ⚠️ Required Assets (Not Included)

Some tools require proprietary assets:

| File | Folder | Tool |
|------|--------|------|
| ar.png, fr.png, footix.png, sport.png | /overlays/ | YT Cover Creator |
| Cairo-Bold.ttf, DINCondensed-Bold.ttf | /fonts/ | YT Cover Creator |
| branding.png | /assets/ig/ | IG Sport Cover |
| logo.png | /assets/diapo/ | Diapo Overlay |

---

## 🌐 Deploy to GitHub Pages (Free Hosting)

### Step 1 — Create a GitHub repository

```bash
git init
git add .
git commit -m "Initial commit"
```

Or create a new repo at [github.com/new](https://github.com/new) and push:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

### Step 2 — Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select `Deploy from a branch`
4. Choose branch: **main**, folder: **/ (root)**
5. Click **Save**

### Step 3 — Access your site

After ~1 minute, your site will be live at:
```
https://<your-username>.github.io/<repo-name>/
```

> **Important:** If your repo name is `<username>.github.io`, the site will be at `https://<username>.github.io/` directly.

---

## 🎨 Design System

All pages share a unified design via `assets/global.css`:

- **Dark / Light mode** — toggled via the `☽` button on every page, persisted in `localStorage`
- **Typography** — `Syne` (headings, bold UI) + `DM Sans` (body, UI labels) via Google Fonts
- **Color palette** — CSS variables, fully themeable:
  - Dark: near-black backgrounds with **electric yellow** (`#e8ff47`) accent
  - Light: off-white surfaces with **electric blue** (`#3a2fff`) accent
- **Responsive** — mobile-first, works on all screen sizes
- **Consistent** — shared nav bar, upload zones, buttons, modals, canvas wrappers

---

## 🛠 Local Development

No build tool required — it's plain HTML/CSS/JS.

Open with any local server (needed for font/image loading):

```bash
# Python
python3 -m http.server 8080

# Node.js (npx)
npx serve .

# VS Code
# Install "Live Server" extension → Right-click index.html → Open with Live Server
```

Then open `http://localhost:8080`

> Opening `index.html` directly via `file://` will block font and overlay loading due to browser security restrictions. Always use a local server.

---

## 📌 Notes

- **Deck tools** (Le360 Deck, X Deck) fetch live RSS/feed data via CORS proxies. If proxies fail, the column will show an error.
- **Canvas tools** run entirely in the browser — no server needed, no data is uploaded.
- **Brandbook** embeds Figma — may require Figma login for full access.

---

## 📄 License

This project contains your proprietary assets — keep the repo **private** or ensure you have the rights to distribute files publicly.