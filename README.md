# MediaTools Studio

A unified web app combining 49 media production tools into one beautiful, responsive interface — hostable for free on **GitHub Pages**.

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
| 06 | **ZFlags** | Country flag database with search |
| 07 | **IG Flag Post** | Stacked flags for Instagram (1080×1350) |
| 08 | **X Deck** | TweetDeck-style X feed dashboard |
| 09 | **IG Deck** | Instagram feed dashboard |
| 10 | **iFrame Generator** | Embed YouTube, PDFs, Twitter, Instagram posts |
| 11 | **Text Transformer** | Case convert, URL encode, find & replace |
| 12 | **Password Generator** | Secure cryptographically-strong passwords |
| 13 | **Color Palette Generator** | Extract colors from images, export CSS |
| 14 | **Image Converter** | JPG ↔ PNG ↔ WebP conversion |
| 15 | **Image Resizer** | Resize with fit modes (fill/contain/cover), logo overlay, position sliders |
| 16 | **Video Thumbnail Extractor** | Grab YouTube frame timestamps as images |
| 17 | **Watermark Tool** | Add text or logo watermarks to images |
| 18 | **Image Editor** | Lightroom-style photo editing with presets and adjustments |
| 19 | **Image Filters** | Apply filters and adjustments to images |
| 20 | **Markdown Viewer** | Write/paste markdown, live preview, load files |
| 21 | **OG Card Preview** | Preview link cards for X, Facebook, LinkedIn |
| 22 | **Character Counter** | Check limits for Twitter, LinkedIn, Instagram |
| 23 | **Color Converter** | Convert HEX, RGB, HSL with sliders + palettes |
| 24 | **Le360 Brandbook** | Figma-embedded brand guidelines |
| 25 | **Text Sorter** | Sort lines A-Z/Z-A, remove duplicates |
| 26 | **TweetDown** | Download tweets as images |
| 27 | **X Post Image** | Generate X/Twitter post images |
| 28 | **Sticky Notes** | Quick notes board |
| 29 | **MD Notes** | Markdown notes editor |
| 30 | **WiFi Card** | Generate WiFi QR code cards |
| 31 | **Quote Card** | Create shareable quote images |
| 32 | **Collage** | Create image collages |
| 33 | **YT Deck** | YouTube channel feed dashboard — multi-column live RSS feeds with avatars |
| 34 | **Aspect Ratio** | Visual aspect ratio calculator |
| 35 | **WikiFlag** | Search Wikipedia for country flags in HD |
| 36 | **YT Channel ID Finder** | Get channel ID, RSS feed, and info from @username |
| 37 | **Tube Subscription Viewer** | Browse YouTube subscriptions in a multi-column feed |
| 38 | **Mockup Frames** | Frame screenshots in phone, laptop, browser mockups |
| 39 | **Screenshot Showcase** | Arrange screenshots in beautiful layouts |
| 40 | **Screenshot Annotator** | Add arrows, shapes, blur, and labels to screenshots |
| 41 | **Image Compressor** | Reduce image file size with quality control |
| 42 | **Notes Editor** | Write and save notes with Arabic RTL support |
| 43 | **Sport Post** | Generate 1080×1350 Instagram sport posts in three modes |
| 44 | **VCF Viewer** | Parse and view vCard (.vcf) contacts with Arabic RTL support |
| 45 | **Tier List Maker** | Create tier lists with drag-and-drop |
| 46 | **QR Code Generator** | Generate QR codes for URLs, text, WiFi, vCard, and more |
| 47 | **URL Shortener** | Shorten URLs with history tracking |
| 48 | **Arabic Notes** | RTL notes editor with editable titles, headings, and tags |
| — | **Snippets Pad** | Quick snippets & copy pad — always accessible from the hub |

---

## 📁 Project Structure

```
cmtools-dev/
│
├── index.html                  ← Hub / landing page
├── favicon.svg                 ← Site favicon
│
├── assets/
│   ├── global.css              ← Shared design system (dark/light theme)
│   ├── theme.js                ← Dark/light mode toggle
│   ├── diapo/
│   │   └── logo.png           ← Logo for Diapo Overlay & Image Resizer
│   ├── ig/
│   │   └── branding.png       ← Instagram branding overlay
│   └── overlays/              ← Overlay images (ar.png, fr.png, etc.)
│
├── fonts/                      ← Required fonts (Cairo-Bold.ttf, DINCondensed-Bold.ttf, LamaSans-ExtraBold.ttf, MADEOkineSans-Black.otf, Somar-Bold.otf)
│
└── tools/                      ← 49 tool pages (all standalone HTML files)
    ├── annotator.html          ← Screenshot Annotator
    ├── arabic.html             ← Arabic Notes
    ├── aspectratio.html        ← Aspect Ratio Calculator
    ├── brandbook.html          ← Le360 Brandbook
    ├── charcount.html          ← Character Counter
    ├── collage.html            ← Collage Maker
    ├── color.html              ← Color Converter
    ├── colors.html             ← Color Palette Generator
    ├── diapo.html              ← Diapo Overlay
    ├── flagig.html             ← IG Flag Post
    ├── iframe.html             ← iFrame Generator
    ├── igcover.html            ← IG Sport Cover
    ├── igdeck.html             ← IG Deck
    ├── imageeditor.html        ← Image Editor
    ├── imgcompress.html        ← Image Compressor
    ├── imgconv.html            ← Image Converter
    ├── imgfilter.html          ← Image Filters
    ├── imgres.html             ← Image Resizer
    ├── instapost.html          ← Le360 Post
    ├── le360deck.html          ← Le360 Deck
    ├── mark.html               ← Markdown Viewer
    ├── mdnotes.html            ← Markdown Notes
    ├── mockup.html             ← Mockup Frames
    ├── notes.html              ← Notes Editor
    ├── ogcard.html             ← OG Card Preview
    ├── password.html           ← Password Generator
    ├── qrcodegen.html          ← QR Code Generator
    ├── quotecard.html          ← Quote Card
    ├── shortlink.html          ← URL Shortener
    ├── showcase.html           ← Screenshot Showcase
    ├── snippets.html           ← Snippets Pad
    ├── sort.html               ← Text Sorter
    ├── sportp.html             ← Sport Post
    ├── stickynotes.html        ← Sticky Notes
    ├── text.html               ← Text Transformer
    ├── tierlist.html           ← Tier List Maker
    ├── tube.html               ← Tube Subscription Viewer
    ├── tweetdown.html          ← TweetDown
    ├── vcfviewer.html          ← VCF Viewer
    ├── water.html              ← Watermark Tool
    ├── wificard.html           ← WiFi Card
    ├── wikiflag.html           ← WikiFlag
    ├── xdeck.html              ← X Deck
    ├── xpostimage.html         ← X Post Image Generator
    ├── ytchannelid.html        ← YT Channel ID Finder
    ├── ytcover.html            ← YT Cover Creator
    ├── ytdeck.html             ← YT Deck
    ├── ytthumbnail.html        ← Video Thumbnail Extractor
    └── zflags.html             ← Dual Flag Generator
```

---

## ⚠️ Required Assets (Not Included)

Some tools require proprietary assets:

| File | Folder | Tool |
|------|--------|------|
| ar.png, fr.png, footix.png, sport.png | /overlays/ | YT Cover Creator |
| Cairo-Bold.ttf, DINCondensed-Bold.ttf | /fonts/ | YT Cover Creator |
| branding.png | /assets/ig/ | IG Sport Cover |
| logo.png | /assets/diapo/ | Diapo Overlay, Image Resizer |

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

- **Deck tools** (Le360 Deck, X Deck, IG Deck, YT Deck) fetch live RSS/feed data via CORS proxies. If proxies fail, the column will show an error.
- **Canvas tools** run entirely in the browser — no server needed, no data is uploaded.
- **Brandbook** embeds Figma — may require Figma login for full access.
- **YT Deck** and **YT Channel ID Finder** use YouTube page scraping to extract channel avatars and metadata.

---

## 📄 License

This project contains your proprietary assets — keep the repo **private** or ensure you have the rights to distribute files publicly.
