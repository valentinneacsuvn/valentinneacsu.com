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
      heroEyebrow: "Photography • Video",
      heroLocation: "Based in Switzerland.\nAvailable worldwide.",
      heroCta: "View Portfolio",
      heroScroll: "Scroll",
      portfolioEyebrow: "Selected Work",
      portfolioTitle: "Portfolio",
      tabPhoto: "Photography",
      tabVideo: "Video",
      videoComingSoon: "Video coming soon",
      aboutEyebrow: "Behind the Camera",
      aboutTitle: "About",
      aboutTagline: "Photography and video that reflect who you are",
      aboutP1:
        "I'm Valentin Neacsu, a photographer and video creator based in Switzerland. I create expressive imagery for people and businesses, combining an artistic eye with an interest in their character, craft and dedication.",
      aboutP2:
        "Each project starts with understanding what matters to you, then translating it into photographs and videos that represent you.",
      aboutAvailable:
        "Available for portraits, business photography and video projects.",
      contactEyebrow: "Get in Touch",
      contactTitle: "Inquiry",
      contactSubtitle: "Let's create something meaningful together.",
      labelName: "Name",
      labelEmail: "Email",
      labelCompany: "Company",
      labelOptional: "(optional)",
      labelProject: "Project",
      labelMessage: "Message",
      submitBtn: "Contact",
      floatingCta: "Get in touch",
      loadMore: "Load More",
      contactEmailLabel: "Email",
      contactPhoneLabel: "Phone",
      contactAddressLabel: "Address",
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
      heroEyebrow: "Fotografie • Video",
      heroLocation: "Mit Sitz in der Schweiz.\nWeltweit verfügbar.",
      heroCta: "Portfolio ansehen",
      heroScroll: "Scrollen",
      portfolioEyebrow: "Ausgewählte Arbeiten",
      portfolioTitle: "Portfolio",
      tabPhoto: "Fotografie",
      tabVideo: "Video",
      videoComingSoon: "Video folgt in Kürze",
      aboutEyebrow: "Hinter der Kamera",
      aboutTitle: "Über mich",
      aboutTagline: "Fotografie und Video, die zeigen, wer du bist",
      aboutP1:
        "Ich bin Valentin Neacsu, Fotograf und Videoersteller aus der Schweiz. Ich schaffe ausdrucksstarke Bilder für Menschen und Unternehmen – mit einem künstlerischen Blick und dem Interesse an Charakter, Handwerk und Leidenschaft.",
      aboutP2:
        "Jedes Projekt beginnt damit, zu verstehen, was dir wichtig ist – und das dann in Fotos und Videos zu übersetzen, die dich repräsentieren.",
      aboutAvailable:
        "Verfügbar für Porträts, Business-Fotografie und Videoprojekte.",
      contactEyebrow: "Kontakt",
      contactTitle: "Anfrage",
      contactSubtitle: "Lass uns gemeinsam etwas Besonderes schaffen.",
      labelName: "Name",
      labelEmail: "E-Mail",
      labelCompany: "Unternehmen",
      labelOptional: "(optional)",
      labelProject: "Projekt",
      labelMessage: "Nachricht",
      submitBtn: "Kontakt",
      floatingCta: "Kontakt aufnehmen",
      loadMore: "Mehr laden",
      contactEmailLabel: "E-Mail",
      contactPhoneLabel: "Telefon",
      contactAddressLabel: "Adresse",
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
      heroEyebrow: "Photographie • Vidéo",
      heroLocation: "Basé en Suisse.\nDisponible dans le monde entier.",
      heroCta: "Voir le Portfolio",
      heroScroll: "Défiler",
      portfolioEyebrow: "Travaux Sélectionnés",
      portfolioTitle: "Portfolio",
      tabPhoto: "Photographie",
      tabVideo: "Vidéo",
      videoComingSoon: "Vidéo à venir",
      aboutEyebrow: "Derrière l'objectif",
      aboutTitle: "À propos",
      aboutTagline: "Photographie et vidéo qui vous ressemblent",
      aboutP1:
        "Je suis Valentin Neacsu, photographe et créateur vidéo basé en Suisse. Je crée des images expressives pour les personnes et les entreprises, alliant un regard artistique à un intérêt pour leur caractère, leur savoir-faire et leur engagement.",
      aboutP2:
        "Chaque projet commence par comprendre ce qui compte pour vous, puis à le traduire en photographies et vidéos qui vous représentent.",
      aboutAvailable: "Disponible pour des portraits, de la photographie d'entreprise et des projets vidéo.",
      contactEyebrow: "Contact",
      contactTitle: "Contact",
      contactSubtitle: "Créons quelque chose d'unique ensemble.",
      labelName: "Nom",
      labelEmail: "E-mail",
      labelCompany: "Entreprise",
      labelOptional: "(optionnel)",
      labelProject: "Projet",
      labelMessage: "Message",
      submitBtn: "Contact",
      floatingCta: "Me contacter",
      loadMore: "Voir plus",
      contactEmailLabel: "E-mail",
      contactPhoneLabel: "Téléphone",
      contactAddressLabel: "Adresse",
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
      heroEyebrow: "Fotografía • Vídeo",
      heroLocation: "Con base en Suiza.\nDisponible en todo el mundo.",
      heroCta: "Ver Portfolio",
      heroScroll: "Desplazar",
      portfolioEyebrow: "Trabajo Seleccionado",
      portfolioTitle: "Portfolio",
      tabPhoto: "Fotografía",
      tabVideo: "Vídeo",
      videoComingSoon: "Vídeo próximamente",
      aboutEyebrow: "Detrás de la cámara",
      aboutTitle: "Sobre mí",
      aboutTagline: "Fotografía y vídeo que reflejan quién eres",
      aboutP1:
        "Soy Valentin Neacsu, fotógrafo y creador de vídeo afincado en Suiza. Creo imágenes expresivas para personas y empresas, combinando una mirada artística con un interés genuino por su carácter, oficio y dedicación.",
      aboutP2:
        "Cada proyecto comienza por entender lo que importa, y luego se traduce en fotografías y vídeos que te representan.",
      aboutAvailable: "Disponible para retratos, fotografía empresarial y proyectos de vídeo.",
      contactEyebrow: "Contacto",
      contactTitle: "Contacto",
      contactSubtitle: "Creemos algo único juntos.",
      labelName: "Nombre",
      labelEmail: "Correo electrónico",
      labelCompany: "Empresa",
      labelOptional: "(opcional)",
      labelProject: "Proyecto",
      labelMessage: "Mensaje",
      submitBtn: "Contactar",
      floatingCta: "Contactar",
      loadMore: "Ver más",
      contactEmailLabel: "Correo",
      contactPhoneLabel: "Teléfono",
      contactAddressLabel: "Dirección",
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
      heroEyebrow: "Fotografia • Video",
      heroLocation: "Con sede in Svizzera.\nDisponibile in tutto il mondo.",
      heroCta: "Esplora Portfolio",
      heroScroll: "Scorri",
      portfolioEyebrow: "Lavori Selezionati",
      portfolioTitle: "Portfolio",
      tabPhoto: "Fotografia",
      tabVideo: "Video",
      videoComingSoon: "Video in arrivo",
      aboutEyebrow: "Dietro la macchina fotografica",
      aboutTitle: "Chi sono",
      aboutTagline: "Fotografia e video che rispecchiano chi sei",
      aboutP1:
        "Sono Valentin Neacsu, fotografo e video creator con base in Svizzera. Creo immagini espressive per persone e aziende, unendo uno sguardo artistico a un interesse per il loro carattere, il loro mestiere e la loro dedizione.",
      aboutP2:
        "Ogni progetto inizia capendo ciò che conta per te, per tradurlo poi in fotografie e video che ti rappresentano.",
      aboutAvailable: "Disponibile per ritratti, fotografia aziendale e progetti video.",
      contactEyebrow: "Contatti",
      contactTitle: "Contatti",
      contactSubtitle: "Creiamo qualcosa di unico insieme.",
      labelName: "Nome",
      labelEmail: "Email",
      labelCompany: "Azienda",
      labelOptional: "(opzionale)",
      labelProject: "Progetto",
      labelMessage: "Messaggio",
      submitBtn: "Contatta",
      floatingCta: "Contattami",
      loadMore: "Carica altro",
      contactEmailLabel: "Email",
      contactPhoneLabel: "Telefono",
      contactAddressLabel: "Indirizzo",
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
      src: img.getAttribute("data-full") || img.getAttribute("src"),
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

  /* --------------------------------------------------------------------------
     Floating "Get in touch" button
     -------------------------------------------------------------------------- */

  var floatingCta = document.querySelector(".floating-cta");
  var contactSection = document.getElementById("contact");

  if (floatingCta) {
    function updateFloatingCta() {
      var scrolledEnough = window.scrollY > window.innerHeight * 0.6;

      // Hide the button once the contact section itself is on screen
      var contactVisible = false;
      if (contactSection) {
        var rect = contactSection.getBoundingClientRect();
        contactVisible = rect.top < window.innerHeight * 0.85;
      }

      floatingCta.classList.toggle("is-visible", scrolledEnough && !contactVisible);
    }

    window.addEventListener("scroll", updateFloatingCta, { passive: true });
    window.addEventListener("resize", updateFloatingCta, { passive: true });
    updateFloatingCta();
  }

  /* --------------------------------------------------------------------------
     Portfolio "Load More"
     -------------------------------------------------------------------------- */

  var galleryFigures = Array.from(document.querySelectorAll(".masonry .masonry__item"));
  var loadMoreBtn = document.getElementById("load-more");
  var loadMoreWrap = document.querySelector(".portfolio__more");
  var loadMoreBatch = 15;
  var visibleCount = 0;

  function updateGalleryVisibility() {
    galleryFigures.forEach(function (fig, i) {
      fig.style.display = i < visibleCount ? "" : "none";
    });
    if (loadMoreWrap) {
      loadMoreWrap.style.display = visibleCount >= galleryFigures.length ? "none" : "";
    }
  }

  if (galleryFigures.length && loadMoreBtn) {
    visibleCount = Math.min(loadMoreBatch, galleryFigures.length);
    updateGalleryVisibility();

    loadMoreBtn.addEventListener("click", function () {
      visibleCount = Math.min(visibleCount + loadMoreBatch, galleryFigures.length);
      updateGalleryVisibility();
    });
  }

  /* --------------------------------------------------------------------------
     Portfolio tabs (Photography / Video)
     -------------------------------------------------------------------------- */

  var portfolioTabs = Array.from(document.querySelectorAll(".portfolio__tab"));

  if (portfolioTabs.length) {
    portfolioTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var target = tab.getAttribute("data-tab");

        portfolioTabs.forEach(function (btn) {
          var isActive = btn === tab;
          btn.classList.toggle("is-active", isActive);
          btn.setAttribute("aria-selected", isActive ? "true" : "false");
        });

        var panelPhoto = document.getElementById("panel-photo");
        var panelVideo = document.getElementById("panel-video");
        if (panelPhoto) panelPhoto.classList.toggle("is-hidden", target !== "photo");
        if (panelVideo) panelVideo.classList.toggle("is-hidden", target !== "video");
      });
    });
  }
})();
