// La Tuffière — comportements partagés (menu mobile, diaporamas, lightbox, formulaire)
document.addEventListener("DOMContentLoaded", function () {
  initHeader();
  initHeroSliders();
  initScrollAnimations();
  initLightboxes();
  initDispoModal();
  initContactForm();
});

function initHeader() {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (!header) return;

  const onScroll = function () {
    header.classList.toggle("is-solid", window.scrollY > 50);
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

function initHeroSliders() {
  document.querySelectorAll(".hero-slider").forEach(function (slider) {
    const slides = Array.from(slider.querySelectorAll(".hero-slide"));
    const dotsWrap = slider.parentElement.querySelector(".hero-dots");
    if (slides.length <= 1) return;

    let current = 0;
    let dots = [];

    if (dotsWrap) {
      dotsWrap.innerHTML = "";
      slides.forEach(function (_, i) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", "Aller à l'image " + (i + 1));
        dot.addEventListener("click", function () {
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

    let timer;
    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(function () { goTo(current + 1); }, 5500);
    }

    goTo(0);
    resetTimer();
  });
}

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
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

  items.forEach(function (el) { observer.observe(el); });
}

function initLightboxes() {
  const lightbox = document.querySelector(".lightbox");
  if (!lightbox) return;
  const lightboxImg = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  function open(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.classList.add("is-open");
  }
  function close() {
    lightbox.classList.remove("is-open");
    lightboxImg.src = "";
  }

  document.querySelectorAll("[data-lightbox]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      open(trigger.getAttribute("data-lightbox"), trigger.getAttribute("data-alt"));
    });
  });

  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
}

function initDispoModal() {
  const modal = document.querySelector(".dispo-modal");
  if (!modal) return;
  const iframe = modal.querySelector("iframe");
  const src = iframe.getAttribute("data-src");
  const closeBtn = modal.querySelector(".modal-close");
  const loader = modal.querySelector(".dispo-loader");

  iframe.addEventListener("load", function () {
    if (loader) loader.classList.add("is-hidden");
  });

  function open(e) {
    if (e) e.preventDefault();
    if (!iframe.getAttribute("src")) iframe.setAttribute("src", src);
    modal.classList.add("is-open");
  }
  function close() {
    modal.classList.remove("is-open");
  }

  document.querySelectorAll("[data-open-dispo]").forEach(function (trigger) {
    trigger.addEventListener("click", open);
  });
  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
}

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
