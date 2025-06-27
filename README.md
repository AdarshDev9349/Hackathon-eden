# Eden Hackathon - Frontend

A modern Next.js application built with TypeScript and Tailwind CSS, optimized for deployment on Cloudflare Pages.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Static Export** optimized for Cloudflare Pages
- **Modern Development Experience** with hot reload

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Build specifically for Cloudflare
npm run build:cloudflare
```

## 📦 Deployment to Cloudflare Pages

### Method 1: Git Integration (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Pages** → **Create a project**
   - Connect your GitHub repository
   - Select this repository

3. **Configure Build Settings:**
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** `frontend` (if deploying from monorepo)

4. **Deploy:**
   - Click **Save and Deploy**
   - Your site will be live at `https://your-project.pages.dev`

### Method 2: Direct Upload

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload the `out` folder:**
   - Go to Cloudflare Pages → **Create a project** → **Direct upload**
   - Upload the entire `out` folder
   - Your site will be deployed instantly

## 🌐 Custom Domain (Optional)

1. In Cloudflare Pages, go to your project
2. Navigate to **Custom domains**
3. Add your domain name
4. Cloudflare will automatically handle SSL certificates

## 🔧 Environment Variables

To add environment variables for your app:

1. In Cloudflare Pages, go to **Settings** → **Environment variables**
2. Add your variables (they should be prefixed with `NEXT_PUBLIC_` for client-side access)
3. Redeploy your application

## 📁 Project Structure

```
frontend/
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── public/
├── next.config.ts
├── tailwind.config.ts
├── package.json
└── README.md
```

## 🎯 Performance Benefits

- **Edge Deployment:** Your app runs on Cloudflare's global edge network
- **Fast Cold Starts:** Static exports load instantly
- **CDN:** Built-in content delivery network
- **DDoS Protection:** Automatic protection against attacks
- **Analytics:** Built-in web analytics (can be enabled in Cloudflare)

## 💡 Tips for Hackathon Success

1. **Use the development server:** `npm run dev` for hot reload during development
2. **Build early and often:** Test deployments frequently with `npm run build`
3. **Leverage Cloudflare Workers:** For serverless API endpoints if needed
4. **Use environment variables:** Keep API keys and secrets secure
5. **Monitor performance:** Use Cloudflare's analytics to track performance

Happy hacking! 🚀
