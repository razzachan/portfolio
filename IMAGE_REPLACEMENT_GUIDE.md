# 🖼️ Image System — Documentation

## 📁 Structure

All project images are organized in subdirectories under `public/projects/`:

```
public/
├── projects/
│   ├── eletrofix-hub-pro-fix-fogoes/
│   │   └── 01.svg (mockup)
│   ├── immoflow-saas-imobiliarias/
│   │   └── 01.svg (mockup)
│   ├── pulse-digital-presence-trafego-pago/
│   │   └── 01.svg (mockup)
│   ├── pulse-digital-presence-clinicas/
│   │   └── 01.svg (mockup)
│   ├── feirao-do-ar-condicionado/
│   │   └── 01.svg (mockup)
│   ├── doce-aroma-branding-e-site/
│   │   └── 01.svg (mockup)
│   └── miracle-bot-tibia-74/
│       └── 01.svg (mockup)
├── about-hero.svg (mockup)
└── contact-hero.svg (mockup)
```

## 🔄 How to Replace Mockups with Real Images

### Project Images

Each project has its own directory. The `images` array in `src/lib/projects.ts` points to these files:

```typescript
{
  slug: "eletrofix-hub-pro-fix-fogoes",
  images: ["/projects/eletrofix-hub-pro-fix-fogoes/01.svg"]
}
```

**To replace with real images:**

1. **Keep same filename**: Replace `01.svg` with `01.jpg`, `01.png`, or `01.webp` in the same directory
2. **Update array in projects.ts**: Change the extension:
   ```typescript
   images: ["/projects/eletrofix-hub-pro-fix-fogoes/01.jpg"]
   ```

### Multiple Images per Project

To add more screenshots/images to a project:

1. Add images to the project directory with sequential names:
   ```
   /projects/eletrofix-hub-pro-fix-fogoes/
   ├── 01.jpg (hero image)
   ├── 02.jpg (dashboard)
   ├── 03.jpg (mobile view)
   └── 04.jpg (detail)
   ```

2. Update the `images` array in `src/lib/projects.ts`:
   ```typescript
   images: [
     "/projects/eletrofix-hub-pro-fix-fogoes/01.jpg",
     "/projects/eletrofix-hub-pro-fix-fogoes/02.jpg",
     "/projects/eletrofix-hub-pro-fix-fogoes/03.jpg",
     "/projects/eletrofix-hub-pro-fix-fogoes/04.jpg"
   ]
   ```

The first image (`01.jpg`) will be used as the card thumbnail and hero image on the project detail page. Additional images will appear in the gallery section.

### Hero Images (About & Contact Pages)

Replace these directly in `public/`:

- `about-hero.svg` → `about-hero.jpg` (or .png, .webp)
- `contact-hero.svg` → `contact-hero.jpg` (or .png, .webp)

Update the import in the respective page components to match the new extension.

## 🎨 Recommended Image Specs

### Project Cards (Featured & List)
- **Aspect Ratio**: 16:9
- **Recommended Size**: 1200×675px
- **Format**: JPG (photos), PNG (screenshots), WebP (optimized)

### Project Detail Hero
- **Aspect Ratio**: 16:9
- **Recommended Size**: 1920×1080px
- **Format**: JPG/PNG/WebP

### Gallery Images
- **Aspect Ratio**: 4:3 or 16:9
- **Recommended Size**: 1600×1200px or 1920×1080px
- **Format**: JPG/PNG/WebP

### About & Contact Hero
- **Aspect Ratio**: 4:3
- **Recommended Size**: 1200×900px
- **Format**: JPG/PNG/WebP

## ⚡ Next.js Automatic Optimization

Next.js will automatically:
- Resize images for different screen sizes
- Convert to modern formats (WebP, AVIF)
- Lazy load images below the fold
- Serve optimized versions

No additional configuration needed!

## 📝 Project Image Mapping

| Project | Directory | Current Mockup |
|---------|-----------|----------------|
| EletroFix Hub Pro | `/projects/eletrofix-hub-pro-fix-fogoes/` | `01.svg` |
| ImmoFlow | `/projects/immoflow-saas-imobiliarias/` | `01.svg` |
| Pulse Landing | `/projects/pulse-digital-presence-trafego-pago/` | `01.svg` |
| Pulse Clínicas | `/projects/pulse-digital-presence-clinicas/` | `01.svg` |
| Feirão AC | `/projects/feirao-do-ar-condicionado/` | `01.svg` |
| Doce Aroma | `/projects/doce-aroma-branding-e-site/` | `01.svg` |
| Miracle Bot | `/projects/miracle-bot-tibia-74/` | `01.svg` |

---

**Ready to deploy!** Once you replace the SVG mockups with real images, the site will automatically use them.
