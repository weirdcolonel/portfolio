# Raghav Kumar Jha — Portfolio Site

Hand-coded HTML/CSS/JS portfolio. No build step, no framework — open `index.html` and it works.

## Run it locally
```bash
cd portfolio
python3 -m http.server 8000
# visit http://localhost:8000
```

## Push to GitHub
```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploy on Vercel
1. Go to vercel.com → sign in with GitHub.
2. "Add New Project" → import the repo you just pushed.
3. Framework Preset: choose **"Other"** (this is plain static HTML, no framework to detect).
4. Build command: leave blank. Output directory: leave as root (`.`).
5. Click **Deploy**. You'll get a live URL like `your-repo-name.vercel.app` in under a minute.
6. Every future `git push` to `main` auto-redeploys — no manual re-upload, ever.

## Custom domain (optional)
1. Buy a domain (Namecheap, GoDaddy, etc.) — e.g. `raghavkumarjha.com`.
2. In Vercel: Project → Settings → Domains → add your domain.
3. Vercel shows you 1-2 DNS records to add at your registrar (usually an A record or CNAME).
4. Propagation takes ~10 min to 24 hrs.

## Before you go live — checklist
- [ ] Update the `id="repoLink"` and `id="repoLinkFooter"` href in `index.html` to your actual GitHub repo URL once it's pushed.
- [ ] Swap in real screenshots/diagrams for each case study if you have them (currently text-only entries).
- [ ] Double check `assets/Raghav_Kumar_Jha_CV.pdf` is your latest resume version before each application cycle.
- [ ] Test the "Resume ↓" download button and all external links (LinkedIn, mailto, tel) after deploying.

## File structure
```
portfolio/
├── index.html
├── css/style.css
├── js/main.js
├── assets/Raghav_Kumar_Jha_CV.pdf
└── README.md
```
