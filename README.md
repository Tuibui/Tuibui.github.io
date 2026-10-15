# Portfolio (GitHub Pages template)

Static site, no build step. Plain HTML, CSS and JavaScript.
Clean white layout, flat colors.

## Folder layout

```
portfolio/
|-- index.html              page 1: photo and headline
|-- projects.html           page 2: project cards, 3 per screen
|-- project.html            one project: Overview / Images / Video / Source tabs
|-- data/
|   `-- projects.js         ALL CONTENT LIVES HERE - edit this file
|-- media/
|   |-- images/profile.svg  placeholder photo - replace with profile.jpg
|   |-- images/<project>/   screenshots, CAD renders, photos
|   `-- videos/             demo videos (mp4, webm)
|-- source/<project>/       source code files shown in the code viewer
|-- assets/
|   |-- css/style.css       theme (colors at the top)
|   `-- js/main.js          renders every page from data/projects.js
`-- .nojekyll               tells GitHub Pages to serve files as-is
```

Your photo: save it as `media/images/profile.jpg` (square works best) and set
`photo: "media/images/profile.jpg"` in `data/projects.js`.

## Navigation

Home and each project page fill one landscape screen; the Projects list scrolls.
Move between pages with the top menu. On a project page the left/right arrow
keys (or the arrow buttons and thumbnails) step through the photos and videos;
they never change page. Long source files scroll inside the code panel only.
On phones and portrait screens the site falls back to normal scrolling.

## Thai / English

The EN / TH buttons in the header switch language; the choice is remembered.
Link to a specific language with `?lang=th` or `?lang=en`.
In `data/projects.js` any text can be `"same in both"` or
`{ en: "English", th: "ภาษาไทย" }`. Interface labels are in `UI` at the top of
`assets/js/main.js`.

## Adding a project

1. Put files in the folders:
   - `media/images/my-tool/screen1.png`
   - `media/videos/my-tool-demo.mp4`
   - `source/my-tool/main.py`
2. Open `data/projects.js`, copy the example project block, and list those
   paths under `images`, `videos` and `source`.

GitHub Pages cannot list a folder's contents, so a file that is not listed in
`projects.js` will not appear on the site.

Video options:

```js
videos: [
  { src: "media/videos/my-tool-demo.mp4", caption: "Local file", poster: "media/images/my-tool/poster.png" },
  { embed: "https://www.youtube.com/embed/VIDEO_ID", caption: "YouTube" }
]
```

GitHub rejects files over 100 MB and warns above 50 MB. For long videos,
upload to YouTube and use `embed`, or compress:
`ffmpeg -i in.mov -vcodec libx264 -crf 28 -preset slow -movflags +faststart out.mp4`

## Preview locally

The source viewer loads files with `fetch`, which browsers block for
`file://` pages. Use a local server:

```
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish on GitHub Pages

1. Create a repo named `<your-username>.github.io` (site at
   `https://<your-username>.github.io`), or any name (site at
   `https://<your-username>.github.io/<repo>/`).
2. Push this folder:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
3. On GitHub: Settings > Pages > Source: "Deploy from a branch",
   Branch: `main`, folder: `/ (root)`. Save. The site is live in a minute or two.

## Changing the look

All colors are variables at the top of `assets/css/style.css`.
Fonts: Work Sans (English), Noto Sans Thai (Thai), loaded from Google Fonts.
Icons: Font Awesome 6 - set any icon class in `socials` in `data/projects.js`.
