(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  /* --------------------------------------------------------------------------
     Translations
     -------------------------------------------------------------------------- */

  var translations = {
    en: {
      navPortfolio: "Portfolio",
      navAbout: "About",
      navContact: "Inquiry",
      heroEyebrow: "Photography & Filmmaking",
      heroLocation: "Based in Switzerland.\nAvailable worldwide.",
      heroCta: "View Portfolio",
      heroScroll: "Scroll",
      portfolioEyebrow: "Selected Work",
      portfolioTitle: "Portfolio",
      aboutEyebrow: "The Artist",
      aboutTitle: "About",
      aboutText:
        "I'm Valentin Neacsu, a visual artist and photographer based in Switzerland. My work spans portrait, fashion, commercial, automotive, events, and creative storytelling — always driven by authenticity, emotion, and timeless aesthetics. I believe every project deserves its own visual identity, combining artistic vision with attention to detail to create imagery that leaves a lasting impression.",
      contactEyebrow: "Get in Touch",
      contactTitle: "Inquiry",
      contactSubtitle: "Let's create something meaningful together.",
      labelName: "Name",
      labelEmail: "Email",
      labelCompany: "Company",
      labelOptional: "(optional)",
      labelProject: "Project",
      labelMessage: "Message",
      submitBtn: "Send Inquiry",
      lightboxClose: "Close viewer",
      lightboxPrev: "Previous image",
      lightboxNext: "Next image",
      lightboxOpen: "Open image {n} of {total}",
      menuOpen: "Open menu",
      menuClose: "Close menu"
    },
    de: {
      navPortfolio: "Portfolio",
      navAbout: "Über mich",
      navContact: "Anfrage",
      heroEyebrow: "Fotografie & Filmmaking",
      heroLocation: "Mit Sitz in der Schweiz.\nWeltweit verfügbar.",
      heroCta: "Portfolio ansehen",
      heroScroll: "Scrollen",
      portfolioEyebrow: "Ausgewählte Arbeiten",
      portfolioTitle: "Portfolio",
      aboutEyebrow: "Der Künstler",
      aboutTitle: "Über mich",
      aboutText:
        "Ich bin Valentin Neacsu, Visual Artist und Fotograf mit Sitz in der Schweiz. Meine Arbeit umfasst Portrait-, Fashion-, Commercial-, Automotive- und Eventfotografie sowie kreatives Storytelling — stets getragen von Authentizität, Emotion und zeitloser Ästhetik.",
      contactEyebrow: "Kontakt",
      contactTitle: "Anfrage",
      contactSubtitle: "Lass uns gemeinsam etwas Besonderes schaffen.",
      labelName: "Name",
      labelEmail: "E-Mail",
      labelCompany: "Unternehmen",
      labelOptional: "(optional)",
      labelProject: "Projekt",
      labelMessage: "Nachricht",
      submitBtn: "Anfrage senden",
      lightboxClose: "Viewer schließen",
      lightboxPrev: "Vorheriges Bild",
      lightboxNext: "Nächstes Bild",
      lightboxOpen: "Bild {n} von {total} öffnen",
      menuOpen: "Menü öffnen",
      menuClose: "Menü schließen"
    },
    fr: {
      navPortfolio: "Portfolio",
      navAbout: "À propos",
      navContact: "Contact",
      heroEyebrow: "Photographie & Filmmaking",
      heroLocation: "Basé en Suisse.\nDisponible dans le monde entier.",
      heroCta: "Voir le Portfolio",
      heroScroll: "Défiler",
      portfolioEyebrow: "Travaux Sélectionnés",
      portfolioTitle: "Portfolio",
      aboutEyebrow: "L'Artiste",
      aboutTitle: "À propos",
      aboutText:
        "Je suis Valentin Neacsu, artiste visuel et photographe basé en Suisse. Mon travail couvre le portrait, la mode, la photographie commerciale, automobile, les événements et le storytelling visuel — toujours guidé par l'authenticité, l'émotion et une esthétique intemporelle.",
      contactEyebrow: "Contact",
      contactTitle: "Contact",
      contactSubtitle: "Créons quelque chose d'unique ensemble.",
      labelName: "Nom",
      labelEmail: "E-mail",
      labelCompany: "Entreprise",
      labelOptional: "(optionnel)",
      labelProject: "Projet",
      labelMessage: "Message",
      submitBtn: "Envoyer",
      lightboxClose: "Fermer la visionneuse",
      lightboxPrev: "Image précédente",
      lightboxNext: "Image suivante",
      lightboxOpen: "Ouvrir l'image {n} sur {total}",
      menuOpen: "Ouvrir le menu",
      menuClose: "Fermer le menu"
    },
    es: {
      navPortfolio: "Portfolio",
      navAbout: "Sobre mí",
      navContact: "Contacto",
      heroEyebrow: "Fotografía & Filmmaking",
      heroLocation: "Con base en Suiza.\nDisponible en todo el mundo.",
      heroCta: "Ver Portfolio",
      heroScroll: "Desplazar",
      portfolioEyebrow: "Trabajo Seleccionado",
      portfolioTitle: "Portfolio",
      aboutEyebrow: "El Artista",
      aboutTitle: "Sobre mí",
      aboutText:
        "Soy Valentin Neacsu, artista visual y fotógrafo con base en Suiza. Mi trabajo abarca retrato, moda, fotografía comercial, automoción, eventos y narrativa visual — siempre con un enfoque en la autenticidad, la emoción y una estética atemporal.",
      contactEyebrow: "Contacto",
      contactTitle: "Contacto",
      contactSubtitle: "Creemos algo único juntos.",
      labelName: "Nombre",
      labelEmail: "Correo electrónico",
      labelCompany: "Empresa",
      labelOptional: "(opcional)",
      labelProject: "Proyecto",
      labelMessage: "Mensaje",
      submitBtn: "Enviar",
      lightboxClose: "Cerrar visor",
      lightboxPrev: "Imagen anterior",
      lightboxNext: "Imagen siguiente",
      lightboxOpen: "Abrir imagen {n} de {total}",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú"
    },
    it: {
      navPortfolio: "Portfolio",
      navAbout: "Chi sono",
      navContact: "Contatti",
      heroEyebrow: "Fotografia & Filmmaking",
      heroLocation: "Con sede in Svizzera.\nDisponibile in tutto il mondo.",
      heroCta: "Esplora Portfolio",
      heroScroll: "Scorri",
      portfolioEyebrow: "Lavori Selezionati",
      portfolioTitle: "Portfolio",
      aboutEyebrow: "L'Artista",
      aboutTitle: "Chi sono",
      aboutText:
        "Sono Valentin Neacsu, artista visivo e fotografo con sede in Svizzera. Il mio lavoro comprende ritratto, moda, fotografia commerciale, automotive, eventi e storytelling creativo — sempre guidato da autenticità, emozione ed estetica senza tempo.",
      contactEyebrow: "Contatti",
      contactTitle: "Contatti",
      contactSubtitle: "Creiamo qualcosa di unico insieme.",
      labelName: "Nome",
      labelEmail: "Email",
      labelCompany: "Azienda",
      labelOptional: "(opzionale)",
      labelProject: "Progetto",
      labelMessage: "Messaggio",
      submitBtn: "Invia",
      lightboxClose: "Chiudi visualizzatore",
      lightboxPrev: "Immagine precedente",
      lightboxNext: "Immagine successiva",
      lightboxOpen: "Apri immagine {n} di {total}",
      menuOpen: "Apri menu",
      menuClose: "Chiudi menu"
    }
  };

  var currentLang = "en";

  function applyTranslation(lang) {
    var t = translations[lang];
    if (!t) return;

    currentLang = lang;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!t[key]) return;

      if (key === "heroLocation" || key === "aboutText") {
        el.innerHTML = t[key].replace(/\n/g, "<br>");
      } else {
        el.textContent = t[key];
      }
    });

    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      var isActive = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    updateLightboxLabels();
    updateGalleryLabels();
    localStorage.setItem("language", lang);
  }

  document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyTranslation(btn.dataset.lang);
    });
  });

  /* --------------------------------------------------------------------------
     Header scroll & mobile nav
     -------------------------------------------------------------------------- */

  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.querySelector(".site-nav");
  var navLinks = document.querySelectorAll(".site-nav__link");

  function closeMobileNav() {
    if (!navToggle || !siteNav) return;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", translations[currentLang].menuOpen);
    siteNav.classList.remove("is-open");
  }

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
      navToggle.setAttribute(
        "aria-label",
        isOpen ? translations[currentLang].menuOpen : translations[currentLang].menuClose
      );
      siteNav.classList.toggle("is-open", !isOpen);
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileNav);
  });

  /* --------------------------------------------------------------------------
     Scroll reveal
     -------------------------------------------------------------------------- */

  var revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* --------------------------------------------------------------------------
     Lightbox
     -------------------------------------------------------------------------- */

  var triggers = Array.from(document.querySelectorAll(".masonry__trigger"));
  var lightbox = document.getElementById("lightbox");
  var lightboxImage = lightbox ? lightbox.querySelector(".lightbox__image") : null;
  var lightboxClose = lightbox ? lightbox.querySelector(".lightbox__close") : null;
  var lightboxPrev = lightbox ? lightbox.querySelector(".lightbox__nav--prev") : null;
  var lightboxNext = lightbox ? lightbox.querySelector(".lightbox__nav--next") : null;
  var lightboxCurrent = lightbox ? lightbox.querySelector(".lightbox__current") : null;
  var lightboxTotal = lightbox ? lightbox.querySelector(".lightbox__total") : null;

  var galleryItems = triggers.map(function (trigger) {
    var img = trigger.querySelector("img");
    return {
      src: img.getAttribute("src"),
      alt: img.getAttribute("alt")
    };
  });

  var currentIndex = 0;
  var touchStartX = 0;
  var touchEndX = 0;
  var swipeThreshold = 50;

  function updateGalleryLabels() {
    if (!triggers.length) return;

    var t = translations[currentLang];
    var total = galleryItems.length;

    triggers.forEach(function (trigger, index) {
      trigger.setAttribute(
        "aria-label",
        t.lightboxOpen.replace("{n}", String(index + 1)).replace("{total}", String(total))
      );
    });
  }

  function updateLightboxLabels() {
    var t = translations[currentLang];
    if (lightboxClose) lightboxClose.setAttribute("aria-label", t.lightboxClose);
    if (lightboxPrev) lightboxPrev.setAttribute("aria-label", t.lightboxPrev);
    if (lightboxNext) lightboxNext.setAttribute("aria-label", t.lightboxNext);
  }

  function showImage(index) {
    if (!lightbox || !lightboxImage || !galleryItems.length) return;

    currentIndex = (index + galleryItems.length) % galleryItems.length;
    var item = galleryItems[currentIndex];

    lightboxImage.classList.remove("is-loaded");

    lightboxImage.onload = function () {
      lightboxImage.classList.add("is-loaded");
    };

    lightboxImage.src = item.src;
    lightboxImage.alt = item.alt;

    if (lightboxImage.complete) {
      lightboxImage.classList.add("is-loaded");
    }

    if (lightboxCurrent) lightboxCurrent.textContent = String(currentIndex + 1);
    if (lightboxTotal) lightboxTotal.textContent = String(galleryItems.length);
  }

  function openLightbox(index) {
    if (!lightbox) return;

    showImage(index);
    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");

    requestAnimationFrame(function () {
      lightbox.classList.add("is-open");
    });

    document.body.classList.add("is-lightbox-open");
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;

    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-lightbox-open");

    window.setTimeout(function () {
      if (!lightbox.classList.contains("is-open")) {
        lightbox.hidden = true;
        if (lightboxImage) {
          lightboxImage.src = "";
          lightboxImage.classList.remove("is-loaded");
        }
      }
    }, 400);

    if (triggers[currentIndex]) {
      triggers[currentIndex].focus();
    }
  }

  function showNext() {
    showImage(currentIndex + 1);
  }

  function showPrev() {
    showImage(currentIndex - 1);
  }

  triggers.forEach(function (trigger, index) {
    trigger.addEventListener("click", function () {
      openLightbox(index);
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener("click", function (event) {
      event.stopPropagation();
      showPrev();
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener("click", function (event) {
      event.stopPropagation();
      showNext();
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    lightbox.addEventListener("touchstart", function (event) {
      touchStartX = event.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener("touchend", function (event) {
      touchEndX = event.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          showNext();
        } else {
          showPrev();
        }
      }
    }, { passive: true });
  }

  document.addEventListener("keydown", function (event) {
    if (!lightbox || lightbox.hidden) return;

    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowRight") {
      showNext();
    } else if (event.key === "ArrowLeft") {
      showPrev();
    }
  });

  updateGalleryLabels();
  updateLightboxLabels();

  var savedLanguage = localStorage.getItem("language");
  if (savedLanguage && translations[savedLanguage]) {
    applyTranslation(savedLanguage);
  }

  /* --------------------------------------------------------------------------
     Footer year
     -------------------------------------------------------------------------- */

  var footerYear = document.getElementById("footer-year");
  if (footerYear) {
    footerYear.textContent = "\u00A9 " + new Date().getFullYear() + " Valentin Neacsu";
  }
})();
