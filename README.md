# Eng-Kanto Exhibition Showcase & Pamphlet Package
**STI College Laoag • Bachelor of Science in Computer Science Thesis Presentation**
*Research Proponents: Dezyl Busmion, Marc Yzer Pascual, Cryz Bernard Gonzales*

---

## 🚀 1. Deploying the Website Showcase to GitHub Pages

You have two easy ways to deploy this showcase to GitHub Pages:

### Method A: Standalone GitHub Repository (Recommended for Exhibition)
1. In your GitHub account, create a new public repository (e.g., `engkanto-showcase` or `engkanto-ar`).
2. Copy or initialize git inside the `showcase/` folder:
   ```bash
   cd showcase
   git init
   git add .
   git commit -m "feat: Eng-Kanto exhibition website showcase"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. In your GitHub repo, go to **Settings** $\rightarrow$ **Pages**.
4. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. Within 1–2 minutes, your live site will be accessible at:
   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```

### Method B: Hosting from your existing Unity project repository
If pushing your whole project repository:
1. You can push the `showcase/` folder as a dedicated branch named `gh-pages`:
   ```bash
   git subtree push --prefix showcase origin gh-pages
   ```
2. GitHub Pages will automatically deploy from the `gh-pages` branch.

---

## 📱 2. Adding Your QR Code Image (Automated Dynamic Display)

Once your GitHub Pages link is live:
1. Generate your QR code online (using any free generator like [qr-code-generator.com](https://www.qr-code-generator.com/) or Canva).
2. Save your QR code image files into `showcase/assets/images/`:
   - Save the showcase QR code as: `showcase/assets/images/qr_code.png` (or `qr_showcase.png`)
   - Save the APK download QR code as: `showcase/assets/images/qr_apk.png`
3. **Done!** Both `index.html` and `pamphlet.html` are programmed to automatically detect and replace the placeholder boxes with your real QR codes immediately upon load.

---

## 🖨️ 3. Printing the Exhibition Pamphlet (Tri-Fold Brochure)

You have two ready-to-print formats:

### Option A: Print directly from your browser (`pamphlet.html`)
1. Double-click `showcase/pamphlet.html` to open in Chrome or Edge.
2. Press `Ctrl + P` (or click the yellow **"Print / Save as PDF"** button at the top).
3. In print settings:
   - **Destination:** Save as PDF (or select your color printer)
   - **Layout:** Landscape
   - **Paper Size:** Letter (8.5" × 11")
   - **Margins:** None (or Minimum)
   - **Options:** Check *"Background graphics"*
4. Click **Print**!

### Option B: Open and print in Microsoft Word (`Docs/EngKanto_Exhibition_Pamphlet.docx`)
* File: `Docs/EngKanto_Exhibition_Pamphlet.docx`
* Formatted in Letter Landscape with 3-column panels and STI College Laoag styling.

---

## 📦 Directory Structure

```
showcase/
├── index.html           # Main Website Showcase for GitHub Pages
├── style.css            # Responsive dark-mode folklore UI stylesheet
├── app.js               # Interactive Bestiary filter, Quiz modal, & Audio controller
├── pamphlet.html        # Print-ready tri-fold exhibition brochure
├── README.md            # Deployment & QR code instructions
└── assets/
    ├── data/
    │   └── creatures.json     # 16 Mythological creatures metadata & lore
    ├── images/
    │   ├── App_logo.png       # Eng-Kanto application emblem
    │   ├── Game_Name.png      # Folkloric title logo
    │   └── diagrams/          # 16 High-resolution publication diagrams (3300×2550)
    └── media/
        ├── menu_preview.mp4   # Animated menu loop preview
        ├── loading_preview.mp4# Fluid portal loading sequence
        └── portal_sfx.mp3     # Ambient soundscape
```
