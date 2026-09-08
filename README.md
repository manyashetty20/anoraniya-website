# Anoraniya Website

A launch-ready Next.js website for **Anoraniya — the Quantum Technology Club at RV College of Engineering**.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy on Vercel

1. Create a GitHub repository and upload this project.
2. Go to Vercel and import the repository.
3. Vercel automatically detects Next.js.
4. Click **Deploy**.

No environment variables are required.

## Adding the real club logo and photographs

The current website uses a custom quantum-inspired placeholder mark and leadership placeholders so it works immediately without depending on external image permissions.

To add assets from the club's Google Drive:

- Download the selected logo and photos.
- Put them in `public/`.
- Put gallery photos in `public/gallery/`.
- Replace the placeholder leadership blocks in `app/page.js` with Next/Image or regular `<img>` elements.

Suggested assets:

```text
public/logo.png
public/gallery/lab-1.jpg
public/gallery/lab-2.jpg
public/gallery/event-1.jpg
public/gallery/visit-rri.jpg
```

## Important content note

The supplied information contained a leadership discrepancy between the uploaded document and the latest brief. This implementation follows the latest brief:
- Club Head: Suchir Dornala
- Club Co-Head: Nireeksha A
- Founding Members: Raghava Mukunda and Prajwal J

Update these details in `app/page.js` if needed.
