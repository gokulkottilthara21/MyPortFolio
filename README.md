# 🚀 Premium .NET Backend Developer Portfolio

> Modern, high-end professional portfolio website for .NET Core backend developers featuring glassmorphism design, smooth animations, and enterprise-grade presentation.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Deployment](#deployment)
- [CDN References](#cdn-references)
- [Browser Support](#browser-support)
- [License](#license)

---

## 🎯 About

This is a **premium, modern static portfolio website** designed specifically for .NET Core backend developers. Built with pure HTML, CSS, and vanilla JavaScript, it features:

- **Glassmorphism UI** with blur effects and transparency
- **Dark theme** with cyan/blue gradient accents
- **Smooth scroll animations** powered by AOS library
- **Fully responsive** mobile-first design
- **Technology icons** using Devicon
- **Font Awesome icons** for visual enhancement
- **Inter font** from Google Fonts for premium typography
- **Zero dependencies** for core functionality

### Design Philosophy

✅ **Recruiter-friendly** — Clear sections and scannable content  
✅ **Backend-focused** — Emphasizes APIs, databases, security, DevOps  
✅ **Enterprise aesthetic** — Professional dark theme with premium feel  
✅ **Performance-optimized** — Static files with CDN resources  
✅ **Accessible** — Semantic HTML and ARIA labels

---

## ✨ Features

### 🎨 Design Features

- **Hero Section** with animated entrance and gradient text effects
- **Glassmorphism Cards** with backdrop blur and transparency
- **Hover Animations** on all interactive elements
- **Sticky Header** with shadow effect on scroll
- **Smooth Scrolling** navigation
- **Gradient Backgrounds** with abstract tech patterns
- **Timeline Layout** for professional experience
- **Responsive Grid** layouts for skills and projects

### 🛠️ Technical Features

- **Semantic HTML5** markup
- **CSS Custom Properties** for easy theming
- **CSS Grid & Flexbox** for layouts
- **AOS (Animate On Scroll)** library integration
- **Font Awesome 6.5.1** icon library
- **Devicon** for technology logos
- **Google Fonts (Inter)** for typography
- **Vanilla JavaScript** for interactions
- **Mobile-First** responsive design

### 📊 Content Sections

1. **Hero** — Name, title, tagline, CTA buttons
2. **About** — Professional summary and expertise
3. **Skills** — 11 technical skills with icons and descriptions
4. **Projects** — 3 featured projects with tags and features
5. **Experience** — Professional timeline with achievements
6. **Contact** — Email, GitHub, LinkedIn cards
7. **Footer** — Copyright and credits

---

## 🔧 Tech Stack

### Core Technologies

| Technology | Purpose | Version |
|------------|---------|--------|
| **HTML5** | Structure & Markup | Latest |
| **CSS3** | Styling & Animations | Latest |
| **JavaScript** | Interactivity | ES6+ |

### CDN Libraries

| Library | Purpose | Version |
|---------|---------|--------|
| **Google Fonts (Inter)** | Typography | Latest |
| **Font Awesome** | Icons | 6.5.1 |
| **Devicon** | Technology Logos | Latest |
| **AOS** | Scroll Animations | 2.3.4 |

### Highlighted Technologies (Portfolio Content)

- ASP.NET Core Web API
- C# 12+
- Entity Framework Core
- LINQ
- PostgreSQL
- SQL Server
- JWT Authentication
- Docker
- Swagger / OpenAPI
- Git
- Azure (Basics)

---

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling with animations
└── README.md           # Documentation (this file)
```

### File Descriptions

- **index.html** (Main Page)
  - Semantic HTML5 structure
  - CDN links for fonts, icons, and animations
  - Hero, About, Skills, Projects, Experience, Contact, Footer sections
  - Vanilla JavaScript for scroll effects and AOS initialization

- **styles.css** (Stylesheet)
  - CSS custom properties for theming
  - Glassmorphism card designs
  - Responsive breakpoints (1024px, 768px, 480px)
  - Keyframe animations
  - Gradient backgrounds
  - Hover effects and transitions

- **README.md** (Documentation)
  - Setup instructions
  - Customization guide
  - Deployment steps
  - CDN references

---

## 🚀 Getting Started

### Prerequisites

No build tools or dependencies required! Just a modern web browser.

### Installation

1. **Clone or Download** the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Open in Browser**:

Simply double-click `index.html` or right-click → Open with → Your Browser

### Run with Local Server (Optional)

For a better development experience, use a local HTTP server:

**Option 1 - Python:**
```bash
python -m http.server 8000
# Open http://localhost:8000
```

**Option 2 - Node.js (http-server):**
```bash
npx http-server -p 8000 -c-1
# Open http://localhost:8000
```

**Option 3 - VS Code Live Server:**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

---

## 🎨 Customization

### Personal Information

Edit [index.html](index.html) and replace placeholder content:

1. **Update Name & Title:**
```html
<!-- Line ~58 -->
<h1 class="hero-title">Your Name</h1>
<h2 class="hero-subtitle">.NET Backend Developer</h2>

<!-- Line ~37 -->
<span class="logo-text">YourName<span class="accent-dot">.</span></span>
```

2. **Update Contact Links:**
```html
<!-- Line ~69 - Download Resume -->
<a href="path/to/your-resume.pdf" class="btn btn-primary" download>

<!-- Line ~72 - GitHub -->
<a href="https://github.com/yourprofile" ...>

<!-- Line ~343 - Email -->
<a href="mailto:youremail@example.com" ...>

<!-- Line ~351 - GitHub Contact -->
<a href="https://github.com/yourprofile" ...>

<!-- Line ~359 - LinkedIn -->
<a href="https://linkedin.com/in/yourprofile" ...>
```

3. **Update About Section:**
```html
<!-- Line ~84-97 - Customize your bio -->
<div class="about-content" data-aos="fade-up" data-aos-delay="100">
  <p class="lead">Your professional summary...</p>
  ...
</div>
```

4. **Update Projects:**
```html
<!-- Line ~230-333 - Edit project details, tags, and links -->
<article class="project-card" ...>
  <h3>Your Project Name</h3>
  <p class="project-desc">Your project description</p>
  ...
</article>
```

5. **Update Experience:**
```html
<!-- Line ~269-327 - Edit job titles, companies, dates, descriptions -->
<div class="timeline-item" ...>
  <h3>Your Job Title</h3>
  <h4>Company Name</h4>
  ...
</div>
```

### Theme Colors

Edit [styles.css](styles.css) CSS variables (lines 4-30):

```css
:root {
  /* Change primary background */
  --bg-primary: #0a0e27;
  
  /* Change accent colors */
  --accent-cyan: #00d4ff;
  --accent-blue: #0066ff;
  
  /* Change gradient */
  --accent-gradient: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
  
  /* Change text colors */
  --text-primary: #e6f1ff;
  --text-secondary: #a8b2d1;
}
```

### Typography

Change font in [index.html](index.html) (line 13):

```html
<!-- Replace Inter with another Google Font -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
```

Then update in [styles.css](styles.css) (line 32):

```css
--font-primary: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Add/Remove Skills

In [index.html](index.html), duplicate or remove skill cards (lines ~105-210):

```html
<article class="skill-card" data-aos="zoom-in" data-aos-delay="0">
  <div class="skill-icon">
    <i class="devicon-yourtech-plain colored"></i>
  </div>
  <h3>Your Technology</h3>
  <p>Your description</p>
</article>
```

Find Devicon class names: https://devicon.dev/

---

## 🌐 Deployment

### GitHub Pages

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. **Enable GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Under **Source**, select **main** branch and **/ (root)** folder
   - Click **Save**
   - Your site will be live at: `https://yourusername.github.io/portfolio/`

3. **Custom Domain (Optional):**
   - Add `CNAME` file with your domain: `www.yourname.com`
   - Configure DNS with your domain provider

### Netlify

1. **Deploy via Drag & Drop:**
   - Go to https://app.netlify.com/drop
   - Drag the `portfolio` folder
   - Instant deployment!

2. **Deploy via Git:**
   - Connect your GitHub repository
   - Build settings: None needed (static site)
   - Deploy!

### Vercel

```bash
npm install -g vercel
vercel
# Follow prompts
```

### Other Options

- **Cloudflare Pages** - Free hosting with CDN
- **Azure Static Web Apps** - Free tier available
- **Firebase Hosting** - Free tier with custom domain support

---

## 📚 CDN References

All external resources used in this portfolio:

### Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
```

### Font Awesome 6.5.1
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
```

### Devicon (Latest)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
```

### AOS (Animate On Scroll) 2.3.4
```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" />

<!-- JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
```

---

## 🌍 Browser Support

| Browser | Supported Versions |
|---------|-------------------|
| Chrome | Last 2 versions ✅ |
| Firefox | Last 2 versions ✅ |
| Safari | Last 2 versions ✅ |
| Edge | Last 2 versions ✅ |
| Opera | Last 2 versions ✅ |

**Note:** Internet Explorer is not supported due to modern CSS features (CSS Grid, CSS Variables, backdrop-filter).

---

## 📄 License

MIT License - Feel free to use this template for your portfolio!

---

## 🙏 Acknowledgments

- **Inter Font** by Rasmus Andersson
- **Font Awesome** for icon library
- **Devicon** for technology logos
- **AOS** by Michał Sajnóg for scroll animations

---

## 💡 Tips

- Update the `<title>` tag in `index.html` with your name
- Add a `favicon.ico` for browser tab icon
- Optimize images if you add profile photos or project screenshots
- Test on multiple devices and browsers
- Use Google Lighthouse to check performance, accessibility, SEO
- Consider adding Google Analytics for visitor tracking

---

## 🤝 Contributing

If you have suggestions or find issues, feel free to open an issue or submit a pull request!

---

## 📧 Support

For questions or support, reach out via:
- GitHub Issues: https://github.com/yourusername/portfolio/issues
- Email: youremail@example.com

---

<div align="center">

**Built with ❤️ for .NET Backend Developers**

⭐ Star this repo if you found it helpful!

</div>