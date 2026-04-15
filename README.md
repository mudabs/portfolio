# Munashe Mudabura Portfolio Website

![Portfolio Preview](./public/screenshots/portfolio.png)

This repository contains my personal portfolio website, built with React through Vite and styled with Tailwind CSS. It presents my projects, technical skills, certifications, and professional background in a responsive single-page application.

Live Demo: [munashemudabura.com](http://munashemudabura.com)

- [Watch Demo](./public/screenshots/demo.mp4)

---

## Features

- Responsive layout designed for desktop and mobile devices
- Theme toggle with light and dark presentation modes
- Project showcase with links to live demos and source repositories
- Skills section with categorized capabilities and progress indicators
- Certifications section highlighting relevant credentials
- Contact section with direct communication and social links
- Hero section with introductory profile content and resume access

---

## Technologies Used

- [React](https://react.dev/) with [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- CSS animations and transition effects
- Shadcn UI components

---

## Screenshots

### Hero Section

![Hero](./public/screenshots/portfolio.png)

### Projects Section

![Projects](./public/screenshots/projects.png)

### Skills Section

![Skills](./public/screenshots/skills.png)

### Contact Section

![Contact](./public/screenshots/contact.png)

---

## Installation and Setup

To run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/mudabs/portfolio.git

# 2. Navigate to the project directory
cd portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

## Docker

To build and run the portfolio in a container:

```bash
docker build -t portfolio-site .
docker run --rm -p 8080:80 portfolio-site
```

Then open `http://localhost:8080`.

## GitHub Actions VPS Deployment

This repository includes a workflow at `.github/workflows/deploy.yml` that runs on every push to `main`.

What it does:

- Installs dependencies with `npm ci`
- Builds the Vite app
- Archives the generated `dist/` folder
- Copies the archive to your VPS over SSH
- Replaces the contents of `/var/www/portfolio` with the latest static build

### Required GitHub Secrets

Add the following repository secrets before enabling the workflow:

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

If `munashe` does not own `/var/www/portfolio`, update the directory permissions before using the workflow.

Once the secrets are set, every push to `main` will build and deploy the updated static files automatically.
