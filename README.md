# Z'Leerk — Tailored Menswear & Footwear

Static marketing website for the Z'Leerk menswear store. Built with Next.js (App Router), TypeScript and Tailwind CSS, and exported as plain HTML/CSS/JS — no backend, database or CMS.

## Setup

You need Node.js 20.9 or newer.

```bash
npm install     # install dependencies
npm run dev     # start the dev server at http://localhost:3000
npm run build   # build the static site into the out/ folder
npm run lint    # check the code with ESLint
```

After `npm run build`, the `out/` folder contains the complete site. To preview it locally:

```bash
npx serve out
```

## Project structure

```
app/
  layout.tsx            Shared layout: fonts, header, footer, default SEO metadata
  page.tsx              Home
  collection/page.tsx   Collection with category filter
  collection/[sku]/     Product detail page (one per SKU)
  about/page.tsx        About
  contact/page.tsx      Contact, with Google Maps embed
  globals.css           Tailwind import, brand colors, fonts, animations
  sitemap.ts, robots.ts Generated sitemap.xml and robots.txt
  icon.svg              Favicon ("Z" monogram)
components/             Header, Footer, MobileMenu, CategoryCard, ProductCard,
                        ProductImage, CategoryFilter, ColorChip, SectionHeading
data/store.ts           ALL site content: store info, categories, products
lib/format.ts           formatPrice helper ("$189.00")
public/images/          Product photos (empty to start)
```

## Editing content and products

Everything on the site is rendered from **`data/store.ts`**. Save the file and the dev server updates immediately.

- **Store details** (tagline, season, intro, address, phones, hours, social links) are in the `store` constant. Replace the `"#"` social links with your real Facebook, Instagram and Telegram URLs.
- **Products** are listed inside each category in the `categories` constant.

To add a product, add a line to the right category's `products` list:

```ts
{ sku: "ZL-SU-005", name: "Double-Breasted Suit", material: "Wool blend", colors: ["Navy", "Grey"], sizes: "46-56", price: 229 },
```

- `sku` must be unique. It is also the page address: `/collection/ZL-SU-005`.
- `price` is a number in USD, without the `$` sign.
- To change or remove a product, edit or delete its line. To add a category, add another `{ name, slug, desc, products }` block; it appears on the home page, in the filter tabs and in the sitemap automatically.

**New color names:** the small color dots are defined in `components/ColorChip.tsx`. If you use a color name that is not in that list, add it with a hex value, otherwise the dot is shown in neutral grey.

## Adding product photos

1. Save the photo as a JPG named after the SKU, for example `ZL-SU-001.jpg`. A portrait photo with a 4:5 ratio (for example 1200 × 1500 px) fits best.
2. Put it in `public/images/`, so the path is `public/images/ZL-SU-001.jpg`.
3. Restart `npm run dev`, or run `npm run build` again.

The photo replaces the cream placeholder on the product card and the product page. Products without a photo keep the placeholder. Images are served as-is (`images.unoptimized` is on because a static site has no image server), so compress photos before adding them.

## Deploying

### Set the site address first

The sitemap, `robots.txt` and social sharing tags need the public address of the site. Set the `NEXT_PUBLIC_SITE_URL` environment variable to it, without a trailing slash, for example `https://www.your-domain.com`. If it is not set, `https://example.com` is used.

### Vercel

1. Push this project to a GitHub, GitLab or Bitbucket repository.
2. In [Vercel](https://vercel.com/new), choose **Add New → Project** and import the repository. Vercel detects Next.js; keep the default settings.
3. Under **Environment Variables**, add `NEXT_PUBLIC_SITE_URL` with your site address.
4. Click **Deploy**. Every later push to the main branch redeploys the site.

Or from the command line:

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

### Netlify

Build command `npm run build`, publish directory `out`. Add `NEXT_PUBLIC_SITE_URL` under **Site configuration → Environment variables**.

### GitHub Pages or any static host

Run `npm run build` and upload the contents of `out/`. If the site is served from a subfolder (for example `https://user.github.io/zleerk/`), add `basePath: "/zleerk"` to `next.config.ts` before building.
