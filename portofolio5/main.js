/*// AOS Initialization
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// WhatsApp Floating Button
const whatsappFloat = document.getElementById('whatsapp-float');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        whatsappFloat.classList.add('show');
    } else {
        whatsappFloat.classList.remove('show');
    }
});

// Improved Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const slideMenu = document.getElementById('slide-menu');

menuToggle.addEventListener('click', () => {
    slideMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // Close menu when clicking on a link
    const menuLinks = slideMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            slideMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !slideMenu.contains(e.target)) {
        slideMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Existing code tetap dipertahankan di bawah ini...
const headerLinks = document.querySelectorAll(".header-list a");
headerLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

const scrollBtn = document.querySelector(".scroll-btn");
if (scrollBtn) {
  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth"
    });
  });
}

const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent."); 
    contactForm.reset();
  });
}

const socialIcons = document.querySelectorAll(".social-links-contact a");
socialIcons.forEach(icon => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "translateY(-5px) scale(1.2)";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.transform = "translateY(0) scale(1)";
  });
});


document.addEventListener("DOMContentLoaded", () => {

    const fadeElements = document.querySelectorAll(".fade-in-element");
    fadeElements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("visible");
        }, i * 150); 
    });


    const links = document.querySelectorAll("a.fade-link[data-link]");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); 
            const href = link.getAttribute("href");
            document.body.classList.add("page-fade-out");
            setTimeout(() => {
                window.location.href = href;
            }, 600);
        });
    });
});"*/

const headerLinks = document.querySelectorAll(".header-list a");
headerLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

const scrollBtn = document.querySelector(".scroll-btn");
if (scrollBtn) {
  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth"
    });
  });
}

const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent."); 
    contactForm.reset();
  });
}

const socialIcons = document.querySelectorAll(".social-links-contact a");
socialIcons.forEach(icon => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "translateY(-5px) scale(1.2)";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.transform = "translateY(0) scale(1)";
  });
});


document.addEventListener("DOMContentLoaded", () => {

    const fadeElements = document.querySelectorAll(".fade-in-element");
    fadeElements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("visible");
        }, i * 150); 
    });


    const links = document.querySelectorAll("a.fade-link[data-link]");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); 
            const href = link.getAttribute("href");
            document.body.classList.add("page-fade-out");
            setTimeout(() => {
                window.location.href = href;
            }, 600);
        });
    });
});


const menuToggle = document.getElementById('menu-toggle');
const slideMenu = document.getElementById('slide-menu');

menuToggle.addEventListener('click', () => {
    slideMenu.classList.toggle('active');
});




