// La Tuffière — scripts d'interaction (Menu, Diaporama Hero, Carrousel d'Avis Google, Modal, Formulaire)
document.addEventListener("DOMContentLoaded", function () {
  initHeader();
  initHeroSliders();
  initReviewsCarousel();
  initScrollAnimations();
  initLightboxes();
  initDispoModal();
  initContactForm();
});

/* ==========================================================================
   1. Header Sticky & Mobile Menu
   ========================================================================== */
function initHeader() {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (!header) return;

  const onScroll = function () {
    header.classList.toggle("is-solid", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

/* ==========================================================================
   2. Diaporama Hero (avec flèches et indicateurs en tirets)
   ========================================================================== */
function initHeroSliders() {
  document.querySelectorAll(".hero").forEach(function (hero) {
    const slider = hero.querySelector(".hero-slider");
    if (!slider) return;
    const slides = Array.from(slider.querySelectorAll(".hero-slide"));
    if (slides.length <= 1) return;

    const dotsWrap = hero.querySelector(".hero-dots");
    const prevBtn = hero.querySelector(".hero-arrow-prev");
    const nextBtn = hero.querySelector(".hero-arrow-next");

    let current = 0;
    let dots = [];

    if (dotsWrap) {
      dotsWrap.innerHTML = "";
      slides.forEach(function (_, i) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", "Diapositive " + (i + 1));
        dot.addEventListener("click", function (e) {
          e.stopPropagation();
          goTo(i);
          resetTimer();
        });
        dotsWrap.appendChild(dot);
        dots.push(dot);
      });
    }

    function goTo(index) {
      slides[current].classList.remove("is-active");
      if (dots[current]) dots[current].classList.remove("is-active");
      current = (index + slides.length) % slides.length;
      slides[current].classList.add("is-active");
      if (dots[current]) dots[current].classList.add("is-active");
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        goTo(current - 1);
        resetTimer();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        goTo(current + 1);
        resetTimer();
      });
    }

    let timer = null;
    function resetTimer() {
      if (timer) clearInterval(timer);
      timer = setInterval(function () {
        goTo(current + 1);
      }, 4800);
    }

    // Support glissement tactile (mobile / swipe)
    let touchStartX = 0;
    let touchEndX = 0;
    hero.addEventListener("touchstart", function (e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    hero.addEventListener("touchend", function (e) {
      touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          goTo(current + 1);
        } else {
          goTo(current - 1);
        }
        resetTimer();
      }
    }, { passive: true });

    // Lancer immédiatement le diaporama
    goTo(0);
    resetTimer();
  });
}

/* ==========================================================================
   3. Carrousel d'Avis Google (Témoignages)
   ========================================================================== */
function initReviewsCarousel() {
  const container = document.querySelector(".reviews-carousel-container");
  if (!container) return;

  const track = container.querySelector(".reviews-track");
  const cards = Array.from(track.querySelectorAll(".review-card-wrapper"));
  const prevBtn = document.querySelector(".reviews-arrow-prev");
  const nextBtn = document.querySelector(".reviews-arrow-next");
  const dotsWrap = document.querySelector(".reviews-dots");

  if (!cards.length) return;

  let currentIndex = 0;

  function getVisibleCount() {
    const w = window.innerWidth;
    if (w <= 640) return 1;
    if (w <= 980) return 2;
    return 3;
  }

  function getMaxIndex() {
    return Math.max(0, cards.length - getVisibleCount());
  }

  function update() {
    const maxIdx = getMaxIndex();
    if (currentIndex > maxIdx) currentIndex = maxIdx;
    if (currentIndex < 0) currentIndex = 0;

    const percentPerCard = 100 / getVisibleCount();
    track.style.transform = `translateX(-${currentIndex * percentPerCard}%)`;

    // Mettre à jour les dots
    if (dotsWrap) {
      const dots = dotsWrap.querySelectorAll("button");
      dots.forEach((d, i) => {
        d.classList.toggle("is-active", i === currentIndex);
      });
    }
  }

  function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = "";
    const count = getMaxIndex() + 1;
    for (let i = 0; i < count; i++) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", "Avis groupe " + (i + 1));
      dot.addEventListener("click", () => {
        currentIndex = i;
        update();
        resetAuto();
      });
      dotsWrap.appendChild(dot);
    }
  }

  buildDots();
  update();

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : getMaxIndex();
      update();
      resetAuto();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = currentIndex < getMaxIndex() ? currentIndex + 1 : 0;
      update();
      resetAuto();
    });
  }

  window.addEventListener("resize", () => {
    buildDots();
    update();
  });

  // Défilement automatique doux
  let autoTimer;
  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      currentIndex = currentIndex < getMaxIndex() ? currentIndex + 1 : 0;
      update();
    }, 6000);
  }
  container.addEventListener("mouseenter", () => clearInterval(autoTimer));
  container.addEventListener("mouseleave", resetAuto);
  resetAuto();

  // Support glissement tactile (Touch / Swipe)
  let startX = 0;
  let currentX = 0;
  let isSwiping = false;

  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
    clearInterval(autoTimer);
  }, { passive: true });

  track.addEventListener("touchmove", (e) => {
    if (!isSwiping) return;
    currentX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener("touchend", () => {
    if (!isSwiping) return;
    isSwiping = false;
    const diff = startX - currentX;
    if (Math.abs(diff) > 40 && currentX !== 0) {
      if (diff > 0) {
        currentIndex = Math.min(getMaxIndex(), currentIndex + 1);
      } else {
        currentIndex = Math.max(0, currentIndex - 1);
      }
      update();
    }
    startX = 0;
    currentX = 0;
    resetAuto();
  });

  // Boutons "Lire la suite" dans les avis
  document.querySelectorAll(".review-read-more").forEach((btn) => {
    btn.addEventListener("click", function () {
      const fullText = this.getAttribute("data-full");
      const p = this.previousElementSibling;
      if (p && fullText) {
        p.textContent = fullText;
        this.style.display = "none";
      }
    });
  });
}

/* ==========================================================================
   4. Animations fluides au scroll
   ========================================================================== */
function initScrollAnimations() {
  const items = document.querySelectorAll("[data-animate]");
  if (!items.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  items.forEach(function (el) { observer.observe(el); });
}

/* ==========================================================================
   5. Lightbox pour la galerie d'images
   ========================================================================== */
function initLightboxes() {
  const lightbox = document.querySelector(".lightbox");
  if (!lightbox) return;
  const lightboxImg = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  function open(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    lightbox.classList.remove("is-open");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-lightbox]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      open(trigger.getAttribute("data-lightbox"), trigger.getAttribute("data-alt"));
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
}

/* ==========================================================================
   6. Modale de disponibilités officielles (Widget Tourinsoft)
   ========================================================================== */
function initDispoModal() {
  const modal = document.querySelector(".dispo-modal");
  if (!modal) return;
  const iframe = modal.querySelector("iframe");
  const src = iframe ? iframe.getAttribute("data-src") : null;
  const closeBtn = modal.querySelector(".modal-close");
  const loader = modal.querySelector(".dispo-loader");

  if (iframe) {
    iframe.addEventListener("load", function () {
      if (loader) loader.classList.add("is-hidden");
    });
  }

  function open(e) {
    if (e) e.preventDefault();
    if (iframe && !iframe.getAttribute("src")) iframe.setAttribute("src", src);
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-open-dispo]").forEach(function (trigger) {
    trigger.addEventListener("click", open);
  });
  if (closeBtn) closeBtn.addEventListener("click", close);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
}

/* ==========================================================================
   7. Formulaire de contact
   ========================================================================== */
function initContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const nom = (data.get("nom") || "").toString();
    const email = (data.get("email") || "").toString();
    const tel = (data.get("telephone") || "").toString();
    const sujet = (data.get("sujet") || "").toString();
    const message = (data.get("message") || "").toString();

    const subject = "Contact site La Tuffière" + (sujet ? " — " + sujet : "");
    const bodyLines = [
      "Nom : " + nom,
      "E-mail : " + email,
      tel ? "Téléphone : " + tel : null,
      "",
      message
    ].filter(function (line) { return line !== null; });

    const mailto = "mailto:latuffiere2@wanadoo.fr" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(bodyLines.join("\n"));

    window.location.href = mailto;
  });
}
