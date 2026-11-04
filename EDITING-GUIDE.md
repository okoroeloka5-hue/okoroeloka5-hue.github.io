# Editing guide — Okoro Chukwueloka portfolio

## Publishing to your existing repository

Use the repository `okoroeloka5-hue.github.io` already created in your GitHub account. Follow `UPLOAD-TO-GITHUB.md`. The important rule is that `index.html` must be uploaded directly into the repository root, alongside `styles.css`, `script.js` and `content.js`. The public address will be `https://okoroeloka5-hue.github.io/`.

**You do not need to edit any code yourself. Your existing GitHub Pages repository is `okoroeloka5-hue.github.io`, and the live site address will be `https://okoroeloka5-hue.github.io/`.** Use this site as a visual draft and send corrections in ordinary language in ChatGPT. For example: “make the PowerScope gallery larger”, “replace this photo”, “change this sentence”, or “add my demo video”. I can update the files and give you a fresh preview and ZIP. The instructions below are only for reference or for a developer who may maintain the site later.

This is a static website. You can edit it with Visual Studio Code, Notepad++, or any text editor. It uses HTML, CSS and plain JavaScript; there is no build step, framework or paid hosting requirement.

## 1. Open and preview the website

1. Download and extract `Okoro_Chukwueloka_GitHub_Portfolio.zip`.
2. Open the extracted `okoroeloka5-hue.github.io` folder in Visual Studio Code.
3. Open `index.html` in a browser for a quick preview. For a more reliable local preview, open the VS Code terminal in the folder and run:

   ```bash
   python -m http.server 8000
   ```

4. Visit `http://localhost:8000` in your browser. Keep the terminal window running while previewing. Press `Ctrl+C` to stop the local server.

After every edit, refresh the browser. Changes to text, project details, photos and styling appear without a compilation step.

## 2. Which file should I edit?

| File | What it controls | When to edit it |
|---|---|---|
| `content.js` | Project cards, project descriptions, status, technologies, evidence, limitations, next steps, experience entries, credentials and VibeGuard video path | Most routine content updates |
| `index.html` | Hero headline, profile narrative, approach text, research interests, publications, education, skill summaries, contact details and section navigation | To change the page's main narrative or contact details |
| `styles.css` | Green colour palette, typography, spacing, background illustrations, cards, responsive behaviour and animations | To change the visual design |
| `script.js` | Project rendering, search/filter behaviour, method tabs, sticky navigation, scroll progress and video player | Only when changing interactive behaviour |
| `assets/images/` | Portrait, favicon, decorative circuit / chip / waveform illustrations and video poster | To replace images or decorative artwork |
| `assets/media/` | VibeGuard demonstration recording | To add or replace the project video |
| `docs/` | Long-form project dossier and GridPulse technical correction notes | To maintain the supporting engineering record |

**Recommended rule:** edit `content.js` for project information; edit `index.html` for the main biography and scholarship narrative; edit `styles.css` for appearance. Avoid changing `script.js` unless you need to change how an interaction works.

## 3. Change the green theme

Open `styles.css` and scroll to the final section labelled **Portfolio v3 — emerald instrumentation theme and quiet engineering artwork**. The main palette is declared there near the top of that section:

```css
:root {
  --ink: #0d1b15;
  --navy: #071b15;
  --navy-2: #0d2a20;
  --blue: #174b3a;
  --blue-2: #246b4c;
  --cream: #f2f1e7;
  --paper: #fbfbf5;
  --gold: #b9e58f;
  --cyan: #8ad6b0;
}
```

The variable called `--gold` is now used as the lime-green highlight colour. You can change these colour values using VS Code's colour preview. Some individual components also have direct green colour values in this same v3 override section; edit those only when you want a more specific component adjustment. Keep text contrast high enough to read on both dark green and cream surfaces.

## 4. Replace the portrait

1. Prepare a professional portrait crop (JPG or PNG).
2. Copy it into `assets/images/`.
3. Either replace `assets/images/portrait.jpg` with your new image (keep that exact filename), or change the image path in the hero image element in `index.html`.
4. Preview on desktop and mobile. The current CSS uses a portrait crop and may trim the top or sides of a replacement image.

Do not put a sensitive document or personal identity number into the public assets folder.

## 5. Edit a project's content

Open `content.js`. Each project is one object inside the `projects` array. The fields are intended to be self-explanatory:

- `number`, `id`, `title`, `subtitle`: project identity. The `id` must be unique and is used by internal section links.
- `category` and `categoryLabel`: filter category and visible category label. Current filter categories are `instrumentation`, `edge` and `hardware`.
- `status` and `statusClass`: visible implementation status. Existing status classes include `status-complete`, `status-progress` and `status-study`.
- `summary`, `role`, `tags`, `architecture`: the short project overview, your role, technologies and signal / data flow.
- `details`: a list of `[heading, explanation]` pairs for the expandable technical case study.
- `evidence`, `limitations`, `next`: evidence currently available, honest limitations, and recommended validation work.
- `github`, `githubLabel`: repository URL and link label. Use an empty string if the repository is not yet public.
- `localDoc`: optional relative path to an included technical note.

To add a new project, copy one complete project object, paste it as a new item in the `projects` array, update every field, and ensure the comma between objects is correct. The project count display is currently designed around five featured projects; update the fixed count in `script.js` if you add or remove projects.

**Do not promote a design-only or simulated subsystem to “completed” unless there is evidence supporting that change.** In particular, keep GridPulse's A1/A2, B1 and B2/C1/C2 build states separate until you have updated build evidence and a closed-loop test record.

## 6. Add the VibeGuard demonstration video

The demo slot is rendered directly inside the VibeGuard project card.

### Option A — MP4 file in the repository

1. Copy the final edited video to `assets/media/vibeguard-demo.mp4`.
2. In `content.js`, change the first setting to:

   ```js
   vibeGuardVideo: "assets/media/vibeguard-demo.mp4",
   ```

3. In `script.js`, find the function `renderVibeGuardVideo` and update the captions to describe what the video truly demonstrates.
4. Refresh the page. The video player should appear beneath VibeGuard's project overview.

Keep the video reasonably compressed so the GitHub repository does not become unnecessarily large. If the recording is large, use Option B.

### Option B — YouTube link

Set `vibeGuardVideo` to the ordinary YouTube watch URL or `youtu.be` share URL, for example:

```js
vibeGuardVideo: "https://youtu.be/VIDEO_ID",
```

The page embeds it using YouTube's privacy-enhanced host. Replace the example with your real video URL.

## 7. Update your research, CV details and certificates

- Main biography and scholarship purpose: find the `id="about"` section in `index.html`.
- Research directions and preprints: find `id="research"` in `index.html`.
- Education and skills: update their respective sections in `index.html`.
- Work history and leadership: update the `experience` array in `content.js`.
- Certifications: update the `credentials` array in `content.js`. Add the certificate file under `assets/certificates/` and use a relative link such as `assets/certificates/new-certificate.pdf`.
- Contact: update the links and displayed labels inside `id="contact"` in `index.html`.

Only add a publication as a publication when a stable public record exists. Label a preprint, working paper or manuscript according to its actual status.

## 8. Change the faint engineering background illustrations

The decorative vector artworks are in `assets/images/`:

- `engineering-circuit.svg` — PCB routing and microcontroller motif, used on the hero / projects surfaces.
- `engineering-chip.svg` — microcontroller / IC motif, used on light profile and credential surfaces.
- `engineering-waveform.svg` — oscilloscope trace and graticule motif, used around the engineering-method and research areas.
- `engineering-grid.svg` — circuit / network connection motif, used on experience and contact surfaces.

These are intentionally low contrast so they create atmosphere without competing with text. In `styles.css`, search for the asset filename to change its position and size. The `background-size`, `background-position` and `background-repeat` properties control how it appears. Keep decorative patterns subtle and do not place them over text at high opacity.

## 9. Change section navigation

The top navigation links in `index.html` point to section IDs such as `#about`, `#approach`, `#projects`, `#research`, `#experience`, `#credentials`, `#skills` and `#contact`. The section itself must have the matching ID. When adding a new section:

1. Add a new `<section id="new-section">...</section>` in `index.html`.
2. Add a corresponding `<a href="#new-section">...</a>` to `.primary-nav`.
3. Add the same section link in `.chapter-rail` if you want it to appear in the right-side page index.
4. Add any desired spacing or background treatment in `styles.css`.

The active navigation state is updated by `script.js` as the reader scrolls. The right-side chapter rail collapses on smaller screens; the top navigation turns into a mobile menu.

## 10. Publish updates to GitHub Pages

1. Save all edited files.
2. Preview locally and check both desktop and mobile widths.
3. Open your GitHub portfolio repository.
4. Upload or commit the changed files while preserving the folder structure.
5. Wait for the GitHub Pages deployment action to complete, then refresh the published site.

A custom domain is optional. A public GitHub Pages URL is sufficient for scholarship applications.

## Final review checklist

- [ ] Name, classification, academic dates and contact information are accurate.
- [ ] Each project accurately distinguishes personal contribution, team contribution, simulation and physical implementation.
- [ ] GitHub repository links work and point to the correct project.
- [ ] The VibeGuard video plays and its caption accurately describes the recording.
- [ ] GridPulse's latest corrected schematic and implementation status are reflected.
- [ ] Certificate links open the correct documents.
- [ ] No private phone number, home address, student ID or other unnecessary personal data is exposed.
- [ ] All navigation links work on desktop and mobile.
