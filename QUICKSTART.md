# 🚀 Launch Your BLISS Website Tonight!

## Quick Setup (15 minutes)

### 1. Install Node.js (if needed)
- Download from: https://nodejs.org/
- Choose the LTS version

### 2. Open Terminal/PowerShell
Navigate to the `bless-website` folder:
```bash
cd bless-website
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Create Neon Database (FREE)
1. Visit https://neon.tech
2. Sign up (takes 1 minute)
3. Click "Create Project"
4. Copy the connection string

### 5. Create `.env` File
In the `bless-website` folder, create a file named `.env`:
```
DATABASE_URL="paste_your_neon_connection_string_here"
```

### 6. Setup Database
```bash
npx prisma generate
npx prisma db push
```

### 7. Test Locally
```bash
npm run dev
```
Visit: http://localhost:3000

### 8. Add Your Video (Optional)
1. Put your video in the `public` folder
2. Edit `app/components/VideoSection.tsx`
3. Uncomment the video code and update the path

### 9. Deploy to Vercel (5 minutes)
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Import Project"
4. Choose your repository
5. Add environment variable: `DATABASE_URL`
6. Click "Deploy"

## 🎉 You're Live!

Your website will be live at: `https://your-project.vercel.app`

---

## Need Help?
Check the full guide in `DEPLOY.md` or `README.md`
