# Images for your portfolio

Drop image files here. They are served at `/images/your-file-name.jpg`.

## Profile photo (About section)

1. Add your photo as **`profile.jpg`** (or `.png`) in this folder:
   ```
   public/images/profile.jpg
   ```

2. If you use a different name, update `profileImage` in `src/data/portfolio.ts`:
   ```ts
   profileImage: "/images/my-photo.png",
   ```

3. Push to GitHub — Vercel redeploys automatically:
   ```bash
   git add public/images/profile.jpg
   git commit -m "Add profile photo"
   git push
   ```

## Tips

- Use a square or portrait photo (~800×800 px or larger)
- JPG or PNG works; WebP is smaller/faster
- Keep file size under ~500 KB for fast loading
