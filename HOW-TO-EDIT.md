# How to Edit Your Portfolio — Before & After Hosting

## One file for almost all content

Open **`src/data/portfolio.ts`** — this is your content database.

| What to change | Where in `portfolio.ts` |
|----------------|-------------------------|
| Name, email, tagline | `site` object |
| LinkedIn, GitHub | `site.social` |
| About text | `about.paragraphs` |
| Skills | `skills` array |
| Projects + GitHub links | `projects` array |
| Work history | `experience` array |
| Education | `education` array |
| Research papers | `research` array |
| Blog posts | `blogPosts` array |
| Nav menu labels | `navLinks` array |

**Example — add a project:**

```ts
{
  title: "My New Project",
  year: "2026",
  description: "One sentence about what it does.",
  tags: ["Python", "ns-3"],
  github: "https://github.com/pratiksapkota007/my-repo",
  featured: true,
},
```

**Example — update tagline:**

```ts
tagline: "Your new one-liner here.",
```

Save the file → site updates.

---

## Fonts

The site uses **Space Grotesk** (headings & body) and **JetBrains Mono** (labels, tags, dates) — loaded automatically from Google Fonts in `src/app/layout.tsx`. No font files to add.

To change fonts later, edit `layout.tsx` and pick families from [fonts.google.com](https://fonts.google.com).

---

## Colors

Edit **`src/app/globals.css`**:

```css
--color-cream: #f5f0e8;   /* main text */
--color-beige: #e8dcc8;   /* accents */
--color-muted: #7a756e;   /* secondary text */
```

---

## Resume PDF

Replace the file (keep the same name):

```
public/resume/Pratik_Sapkota_CV.pdf
```

---

## How to update AFTER hosting on Vercel (free)

Once deployed, you edit locally and push to GitHub — Vercel redeploys automatically (~1 min).

### Every time you want to change something:

```bash
# 1. Edit files (portfolio.ts, etc.) in Cursor or any editor

# 2. Test locally
cd /Users/pratik/Desktop/Personal/WORK/Portfolio
npm run dev
# Open http://localhost:3000 and check

# 3. Push to GitHub
git add .
git commit -m "Update project links"
git push

# 4. Wait ~1 minute — live site updates automatically
```

You do **not** log into Vercel to edit text. You edit code → push → site updates.

### Optional: edit on GitHub.com (no local setup)

1. Go to your repo on GitHub
2. Open `src/data/portfolio.ts`
3. Click the pencil icon (Edit)
4. Make changes → Commit
5. Vercel redeploys automatically

---

## Deploy checklist (first time)

```bash
cd /Users/pratik/Desktop/Personal/WORK/Portfolio
npm run build          # must succeed
git init               # if not already a repo
git add .
git commit -m "Portfolio site"
# Create repo on github.com, then:
git remote add origin https://github.com/pratiksapkota007/portfolio.git
git push -u origin main
```

Then: [vercel.com](https://vercel.com) → Import repo → Deploy.

---

## File map (quick reference)

```
portfolio.ts     ← ALL your text/content
globals.css      ← colors + Nourd font setup
public/resume/   ← CV PDF
public/fonts/    ← Nourd .woff2 files
page.tsx         ← section order (move Hero, About, etc.)
components/      ← how sections look (rarely need to edit)
```

Ask anytime if you want help with a specific edit.
