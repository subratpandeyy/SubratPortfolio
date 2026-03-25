---
title: "Why My Markdown Blog Wasn’t Rendering (And How I Fixed It)"
date: "2026-03-25"
image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
slug: "blog-2"
---

# The Problem

I was building a simple blog system using React, Vite, and markdown files. Everything seemed fine at first — the title was rendering correctly, but something felt off.

- ❌ The blog content was not showing  
- ❌ The date was missing  
- ❌ Console showed: `Buffer is not defined`

At first, it was confusing. If the title was working, why wasn’t the rest?

---

# Digging Deeper

After debugging, I realized I was using `gray-matter` directly in my React frontend to parse markdown files.


