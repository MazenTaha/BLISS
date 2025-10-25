# BLISS Website

A modern, responsive website for BLISS featuring multilingual support (English/Arabic), a sleek design with creamy white background, and a full-width video section.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS for styling
- ✅ Prisma for database
- ✅ Neon PostgreSQL ready
- ✅ English/Arabic language toggle
- ✅ Full-width 16:9 video section
- ✅ Sticky header with logo place
- ✅ Modern, responsive design
- ✅ Vercel deployment ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Neon PostgreSQL database (or any PostgreSQL database)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up your environment variables:

Create a `.env` file in the root directory:
```
DATABASE_URL="your_neon_postgresql_connection_string"
```

3. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Adding Your Video

1. Place your video file in the `public` folder (e.g., `public/video.mp4`)
2. Open `app/components/VideoSection.tsx`
3. Uncomment the video element and update the source path:
```tsx
<video
  className="w-full h-full object-cover"
  controls
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

4. Remove or hide the placeholder div

## Adding Your Logo

1. Place your logo file in the `public` folder (e.g., `public/logo.png`)
2. Open `app/page.tsx`
3. Replace the logo placeholder with:
```tsx
<div className="w-12 h-12">
  <Image src="/logo.png" alt="BLISS Logo" width={48} height={48} />
</div>
```

Don't forget to import Image: `import Image from 'next/image';`

## Deployment to Vercel

1. Push your code to GitHub

2. Go to [vercel.com](https://vercel.com) and import your repository

3. Add your environment variables in Vercel:
   - `DATABASE_URL`: Your Neon PostgreSQL connection string

4. Deploy!

## Deployment to Neon

If you don't have a Neon database yet:

1. Go to [neon.tech](https://neon.tech)
2. Sign up for a free account
3. Create a new project
4. Copy your connection string
5. Use it as your `DATABASE_URL` in Vercel

## Customization

- Colors: Edit `app/globals.css` to change the background color (#FAF8F3)
- Text: Edit translations in `app/page.tsx`
- Fonts: Add custom fonts to `app/layout.tsx`

## Project Structure

```
bless-website/
├── app/
│   ├── components/
│   │   ├── LanguageToggle.tsx
│   │   └── VideoSection.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── prisma/
│   └── schema.prisma
├── public/
├── .env
└── package.json
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma + Neon PostgreSQL
- **Deployment**: Vercel

## License

Private - All rights reserved © 2025 BLISS
