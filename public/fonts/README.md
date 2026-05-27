# Nourd font files

Nourd is **not on Google Fonts** — you need to add the files yourself.

## 1. Download Nourd (personal use)

- Official: [MyFonts — Nourd by Hanken Design Co.](https://www.myfonts.com/collections/nourd-font-hanken-design-co)
- Personal portfolio use may qualify as personal use; commercial sites need a license.

## 2. Convert to `.woff2` (recommended)

Use [cloudconvert.com/ttf-to-woff2](https://cloudconvert.com/ttf-to-woff2) or `woff2_compress` from Google.

## 3. Place files here

```
public/fonts/
  Nourd-Regular.woff2    (weight 400)
  Nourd-Medium.woff2     (weight 500)
  Nourd-SemiBold.woff2   (weight 600)
  Nourd-Bold.woff2       (weight 700)
```

## 4. Refresh

Save → dev server reloads → Nourd is used site-wide.

Until these files exist, the site uses **Plus Jakarta Sans** (similar geometric sans) as fallback.
