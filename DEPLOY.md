# Quick Deployment Guide

## Step 1: Install Node.js (if not installed)
Download and install Node.js from [nodejs.org](https://nodejs.org/)

## Step 2: Install Dependencies

Open a terminal in the `bless-website` folder and run:

```bash
npm install
```

## Step 3: Create Neon Database

1. Go to [neon.tech](https://neon.tech)
2. Sign up for a free account
3. Click "Create a project"
4. Give it a name (e.g., "bless-website")
5. Copy the connection string (it will look like: `postgresql://user:password@host.neon.tech/dbname?sslmode=require`)

## Step 4: Set Up Database

1. In the `bless-website` folder, create a `.env` file
2. Add your database URL:
```
DATABASE_URL="your_neon_connection_string_here"
```

3. Run database setup:
```bash
npx prisma generate
npx prisma db push
```

## Step 5: Run Locally (Optional)

Test your website locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 6: Push to GitHub

1. Create a new repository on GitHub
2. Open terminal in `bless-website` folder
3. Run:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Step 7: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in (use GitHub account)
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Next.js
   - Root Directory: `./bless-website`
   - Environment Variables: Add `DATABASE_URL` with your Neon connection string
6. Click "Deploy"

Your website will be live in about 2 minutes!

## Step 8: Add Your Video

1. Upload your video file to the `public` folder
2. Edit `app/components/VideoSection.tsx`
3. Uncomment the video element and update the path
4. Commit and push to GitHub (Vercel will auto-deploy)

## That's it! 🎉

Your website is now live and ready to go!
