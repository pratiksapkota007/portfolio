# How to write blog posts

Each post is one **Markdown file** in this folder.

## Add a new post

1. Create a file: `my-new-post.md` (use lowercase and hyphens)
2. Copy this template:

```md
---
title: "Your Post Title"
date: "2026-05-27"
excerpt: "One sentence shown on the homepage."
---

## Your heading

Write your article here using normal Markdown.

- Bullet points work
- **Bold** and *italic* work
- [Links](https://example.com) work

## Another section

More content...
```

3. Save, then push to GitHub:

```bash
git add content/blog/my-new-post.md
git commit -m "Add blog post"
git push
```

4. Vercel redeploys — your post appears at:

`https://your-site.vercel.app/blog/my-new-post`

## Edit an existing post

Open the `.md` file, edit, save, commit, push. Same as above.

## Delete a post

Remove the `.md` file, commit, push.

## No coding required

You only edit these Markdown files — not React components.
