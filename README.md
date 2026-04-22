# MediaTools Studio

A unified web app combining 4 media production tools into one beautiful, responsive interface — hostable for free on **GitHub Pages**.

---

## 🚀 Live Demo

> Deploy to GitHub Pages (see setup below) and your tools are live at:  
> `https://<your-username>.github.io/<repo-name>/`

---

## 🧰 Tools Included

| # | Tool | Format | Purpose |
|---|------|--------|---------|
| 01 | **YT Cover Creator** | 1920×1080 | YouTube cover with AR/FR/Footix/Sport overlays |
| 02 | **IG Sport Cover** | 1080×1920 | Instagram Sport cover with branding + Arabic text |
| 03 | **Le360 Deck** | Dashboard | Live TweetDeck-style news reader for Le360 feeds |
| 04 | **Diapo Overlay** | 1080×1350 | Batch image overlay with logo, auto-download |
| ⌨ | **Snippets** | Utility | Click-to-copy social media caption snippets |

---

## 📁 Project Structure

```
mediatools/
│
├── index.html                  ← Hub / landing page (project switcher)
│
├── assets/
│   ├── global.css              ← Shared design system (dark/light, all components)
│   ├── theme.js                ← Dark/light mode toggle (persisted in localStorage)
│   │
│   ├── ig/
│   │   └── branding.png        ← ⚠️ YOU MUST ADD THIS (IG Sport overlay)
│   │
│   └── diapo/
│   │  └── logo.png            ← ⚠️ YOU MUST ADD THIS (Diapo logo overlay)
├── overlays/                   ← ⚠️ YOU MUST ADD THESE (YT Cover overlays)
│   ├── ar.png
│   ├── fr.png
│   ├── footix.png
│   └── sport.png
│
│
├── fonts/                      ← ⚠️ YOU MUST ADD THESE (YT Cover fonts)
│   ├── Cairo-Bold.ttf
│   └── DINCondensed-Bold.ttf
│   └── LamaSans-ExtraBold.ttf  ← ⚠️ YOU MUST ADD THIS (Arabic font)
│
└── tools/
    ├── ytcover.html            ← Tool 01: YT Cover Creator
    ├── igcover.html            ← Tool 02: IG Sport Cover
    ├── le360deck.html          ← Tool 03: Le360 News Deck
    ├── diapo.html              ← Tool 04: Diapo Batch Overlay
    └── snippets.html           ← Bonus: Snippets Copy Pad
```

---

## ⚠️ Required Assets (Not Included)

You must copy your own proprietary assets into the correct folders before deploying:

### YT Cover Creator (`/overlays/` + `/fonts/`)
| File | Purpose |
|------|---------|
| `assets/overlays/ar.png` | Arabic overlay template |
| `assets/overlays/fr.png` | French overlay template |
| `assets/overlays/footix.png` | Footix overlay template |
| `assets/overlays/sport.png` | Sport overlay template |
| `fonts/Cairo-Bold.ttf` | Arabic text font |
| `fonts/DINCondensed-Bold.ttf` | French/Latin text font |

### IG Sport Cover (`/assets/ig/`)
| File | Purpose |
|------|---------|
| `assets/ig/branding.png` | Branding overlay (1080×1920) |
| `assets/ig/LamaSans-ExtraBold.ttf` | Arabic canvas font |

### Diapo Overlay (`/assets/diapo/`)
| File | Purpose |
|------|---------|
| `assets/diapo/logo.png` | Logo overlay (1080×1350) |

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

- **Le360 Deck** fetches live RSS feeds via CORS proxies (`corsproxy.io` + `allorigins.win` as fallback). If both fail, the column will show an error.
- **Canvas tools** (YT Cover, IG Cover, Diapo) run entirely in the browser — no server needed, no data is uploaded.
- **Snippets** are hardcoded in `tools/snippets.html` — edit the `snippets` array in the `<script>` tag to customize.

---

## 📄 License

This project contains your proprietary overlay/font assets — keep the repo **private** or ensure you have the rights to distribute those files publicly.
