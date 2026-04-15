# 🌐 Munashe Mudabura – Portfolio Website

![Portfolio Preview](./public/screenshots/portfolio.png)

This is my personal **portfolio website** built with **React (via Vite)** and **Tailwind CSS**, showcasing my projects, skills, and experience.  
It features **light/dark mode support**, smooth animations, and a modern responsive design.

🔗 **Live Demo**: [munashemudabura.com](http://munashemudabura.com)

- [Watch Demo](./public/screenshots/demo.mp4)

---

## ✨ Features

- 🎨 **Modern UI/UX** with Tailwind CSS and custom animations
- 🌓 **Light & Dark mode** toggle
- 📂 **Projects section** with GitHub + demo links
- 🛠️ **Skills section** with progress indicators and category filters
- 📞 **Contact form** with email + social links (LinkedIn, Instagram, WhatsApp)
- 🖼️ **Hero section with profile image and intro**
- 📄 **Download CV option**
- 📱 **Fully responsive** across devices

---

## 🚀 Technologies Used

- **[React](https://react.dev/)** (bootstrapped with [Vite](https://vitejs.dev/))
- **[Tailwind CSS](https://tailwindcss.com/)** for styling
- **[Lucide Icons](https://lucide.dev/)** for icons
- **Framer Motion / CSS Animations** for transitions and effects
- **Shadcn/UI components** for polished UI elements

---

## 📸 Screenshots

### 🏠 Hero Section

![Hero](./public/screenshots/portfolio.png)

### 💼 Projects Section

![Projects](./public/screenshots/projects.png)

### 🛠️ Skills Section

![Skills](./public/screenshots/skills.png)

### 📞 Contact Section

![Contact](./public/screenshots/contact.png)

---

## ⚙️ Installation & Setup

Follow these steps to run the portfolio locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/mudabs/portfolio.git

# 2️⃣ Navigate into the project folder
cd portfolio

# 3️⃣ Install dependencies
npm install

# 4️⃣ Run the development server
npm run dev
```

## 🐳 Docker

Build and run the portfolio locally in a container:

```bash
docker build -t portfolio-site .
docker run --rm -p 8080:80 portfolio-site
```

Then open `http://localhost:8080`.

## 🚢 GitHub Actions VPS Deployment

This repository includes a workflow at `.github/workflows/deploy.yml` that runs on every push to `main`.

What it does:

- Installs dependencies with `npm ci`
- Builds the Vite app
- Archives the generated `dist/` folder
- Copies the archive to your VPS over SSH
- Replaces the contents of `/var/www/portfolio` with the latest static build

### Required GitHub Secrets

Add these repository secrets before enabling the workflow:

- `VPS_HOST`: VPS hostname or IP address
- `VPS_USER`: SSH user on the VPS
- `VPS_SSH_KEY`: private SSH key used by GitHub Actions

### VPS Prerequisites

Your VPS needs:

- Nginx configured to serve files from `/var/www/portfolio`
- The SSH user allowed to write into `/var/www/portfolio`

Example Nginx server block:

```nginx
server {
	listen 80;
	server_name munashemudabura.com www.munashemudabura.com;

	root /var/www/portfolio;
	index index.html;

	location / {
		try_files $uri $uri/ /index.html;
	}
}
```

If `munashe` does not own `/var/www/portfolio`, update permissions first so the workflow can publish files there.

Once the secrets are set, every push to `main` will build and deploy the updated static files automatically.
