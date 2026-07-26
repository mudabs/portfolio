# Portfolio — Deployment Steps

How to ship changes to the live site. **You do not run `git pull` on the VPS** for
this project — deployment is automated by GitHub Actions on every push to `main`.

- Repo: https://github.com/mudabs/portfolio
- Live site: https://munashemudabura.com
- Stack: Vite + React 19 + Tailwind CSS 4 (static build)
- VPS serve path: `/var/www/portfolio` (served by the host Nginx)

---

## 1. Preview locally first

```bash
npm install       # first time only
npm run dev       # http://localhost:5173
```

Optional production check:

```bash
npm run build && npm run preview
```

---

## 2. Deploy (the normal path — automated)

Just commit and push to `main`. GitHub Actions builds the site and publishes it to
the VPS for you.

```bash
git add -A
git commit -m "describe your change"
git push origin main
```

What the pipeline does (`.github/workflows/deploy.yml`):
1. Builds the site (`npm ci` + `npm run build` → `dist/`).
2. Archives `dist/` and copies it to the VPS over SSH (using the `VPS_HOST`,
   `VPS_USER`, `VPS_SSH_KEY` repo secrets).
3. Replaces the contents of `/var/www/portfolio` with the new build.

Watch it run: GitHub repo → **Actions** tab → the latest "Build And Deploy Static
Files" run. When it's green, hard-refresh the live site (Ctrl+Shift+R).

---

## 3. Pull latest before you start (good habit)

If you work from more than one machine, sync your local `main` before editing so you
don't diverge from what's deployed:

```bash
git pull origin main
```

(This pulls from **GitHub**, not the VPS. The VPS has no git repo for this project —
it only receives the built files from the pipeline.)

---

## 4. Manual deploy (fallback, only if Actions is down)

Build locally and copy the static files up yourself. Use an **SSH key**, not a
password.

```bash
npm run build
scp -r dist/* <user>@<vps-ip>:/var/www/portfolio/
# then on the VPS, if needed:
#   sudo nginx -t && sudo systemctl reload nginx
```

---

## 5. Rollback

Every deploy is a git commit, so reverting is just shipping an older state:

```bash
git revert <bad-commit-sha>     # safest — makes a new commit
git push origin main            # pipeline redeploys the reverted build
```

---

## Notes

- Secrets (VPS host, user, SSH key) live in **GitHub repo Settings → Secrets and
  variables → Actions** — never in the repo.
- Do not commit passwords, IPs, or keys to this repo (it is public). Prefer SSH-key
  auth and keep the private key only in the GitHub Actions secret.
- The GitHub Pages `npm run deploy` script (gh-pages) is an alternate publish target;
  the live site at munashemudabura.com is served from the VPS via the Actions
  pipeline above.
