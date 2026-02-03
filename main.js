class ThemeSwitcher {
  constructor() {
    this.themes = ['light', 'dark', 'system'];
    this.currentThemeIndex = 0;
    this.storageKey = 'portfolio-theme';
    this.themeToggle = document.getElementById('theme-toggle');
    this.themeIcon = document.getElementById('theme-icon');
    
    this.init();
  }

  init() {
    const savedTheme = this.getSavedTheme();
    this.applyTheme(savedTheme);
    
    this.themeToggle.addEventListener('click', () => this.cycleTheme());
    this.themeToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.cycleTheme();
      }
    });
    
    this.watchSystemTheme();
  }

  getSavedTheme() {
    const saved = localStorage.getItem(this.storageKey);
    return saved && this.themes.includes(saved) ? saved : 'system';
  }

  saveTheme(theme) {
    localStorage.setItem(this.storageKey, theme);
  }

  applyTheme(theme) {
    const html = document.documentElement;
    
    if (theme === 'system') {
      const systemTheme = this.getSystemTheme();
      html.setAttribute('data-theme', systemTheme);
      this.updateIcon('monitor');
    } else {
      html.setAttribute('data-theme', theme);
      this.updateIcon(theme === 'light' ? 'sun' : 'moon');
    }
    
    this.currentTheme = theme;
    this.saveTheme(theme);
  }

  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  cycleTheme() {
    const themeOrder = ['system', 'light', 'dark'];
    const currentIndex = themeOrder.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    const nextTheme = themeOrder[nextIndex];
    
    this.themeIcon.style.transform = 'rotate(360deg)';
    setTimeout(() => {
      this.themeIcon.style.transform = 'rotate(0deg)';
    }, 400);
    
    this.applyTheme(nextTheme);
  }

  updateIcon(iconType) {
    const icons = {
      sun: 'fa-sun',
      moon: 'fa-moon',
      monitor: 'fa-desktop'
    };
    
    Object.values(icons).forEach(iconClass => {
      this.themeIcon.classList.remove(iconClass);
    });
    
    this.themeIcon.classList.add(icons[iconType]);
  }

  watchSystemTheme() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    mediaQuery.addEventListener('change', (e) => {
      if (this.currentTheme === 'system') {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
      }
    });
  }
}

class NeonCursor {
  constructor() {
    this.dot = document.getElementById('cursor-dot');
    this.trailContainer = document.getElementById('cursor-trail-container');
    this.trails = [];
    this.maxTrails = 15;
    this.lastTrailTime = 0;
    this.trailInterval = 30;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!this.reducedMotion && !this.isTouchDevice) {
      this.init();
    } else {
      this.dot.classList.add('hidden');
    }
  }

  init() {
    document.addEventListener('mousemove', (e) => this.updateCursor(e));
    document.addEventListener('mouseleave', () => this.hideCursor());
    document.addEventListener('mouseenter', () => this.showCursor());
  }

  updateCursor(e) {
    const x = e.clientX;
    const y = e.clientY;
    
    requestAnimationFrame(() => {
      this.dot.style.left = `${x}px`;
      this.dot.style.top = `${y}px`;
    });
    
    const now = Date.now();
    if (now - this.lastTrailTime > this.trailInterval) {
      this.createTrail(x, y);
      this.lastTrailTime = now;
    }
  }

  createTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    
    this.trailContainer.appendChild(trail);
    this.trails.push(trail);
    
    setTimeout(() => {
      trail.remove();
      this.trails.shift();
    }, 600);
    
    if (this.trails.length > this.maxTrails) {
      const oldTrail = this.trails.shift();
      if (oldTrail && oldTrail.parentNode) {
        oldTrail.remove();
      }
    }
  }

  hideCursor() {
    this.dot.style.opacity = '0';
  }

  showCursor() {
    this.dot.style.opacity = '1';
  }
}

class FloatingIconsParallax {
  constructor() {
    this.icons = document.querySelectorAll('.float-icon');
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    this.targetMouseX = 0;
    this.targetMouseY = 0;
    this.smoothness = 0.05;
    
    if (!this.reducedMotion && this.icons.length > 0) {
      this.init();
    }
  }

  init() {
    document.addEventListener('mousemove', (e) => {
      this.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      this.targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });
    
    this.animate();
  }

  animate() {
    this.lastMouseX += (this.targetMouseX - this.lastMouseX) * this.smoothness;
    this.lastMouseY += (this.targetMouseY - this.lastMouseY) * this.smoothness;
    
    this.icons.forEach((icon, index) => {
      const depth = (index % 3 + 1) * 10;
      const moveX = this.lastMouseX * depth;
      const moveY = this.lastMouseY * depth;
      
      icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    requestAnimationFrame(() => this.animate());
  }
}

class WaveReveal {
  constructor() {
    this.elements = document.querySelectorAll('[data-reveal]');
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!this.reducedMotion) {
      this.init();
    } else {
      this.elements.forEach(el => el.classList.add('revealed'));
    }
  }

  init() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('revealed')) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    this.elements.forEach(el => observer.observe(el));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ThemeSwitcher();
  new NeonCursor();
  new FloatingIconsParallax();
  new WaveReveal();
  
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });
  
  document.getElementById('year').textContent = new Date().getFullYear();
  
  const header = document.getElementById('header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
});