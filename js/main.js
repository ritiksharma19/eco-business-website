/* RS EcoFiber — site script
   ------------------------------------------------------------
   EDIT YOUR BUSINESS DETAILS HERE. They are used in the header,
   footer, contact blocks and WhatsApp button on every page.
   ------------------------------------------------------------ */
const SITE = {
  name: "RS EcoFiber",
  phone: "+91 98765 43210",          // TODO: your phone number
  whatsapp: "919876543210",           // TODO: WhatsApp number, digits only with country code
  email: "info@rsecofiber.com",       // TODO: your email
  address: "Plot No. __, MIDC Area, Nandurbar, Maharashtra 425412, India", // TODO: full factory address
  hours: "Mon – Sat: 9:30 AM – 6:30 PM",
  facebook: "#",                      // TODO: Facebook page URL
  instagram: "#",                     // TODO: Instagram URL
  linkedin: "#",                      // TODO: LinkedIn URL
  youtube: "#"                        // TODO: YouTube URL
};

const ICONS = {
  phone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#f2c230"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>',
  mail: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#f2c230"><path d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z"/></svg>',
  pin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#f2c230"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
  clock: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#f2c230"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.4 3.5 2.1-.8 1.3L11 13V7h2z"/></svg>',
  fb: '<svg width="17" height="17" viewBox="0 0 24 24" fill="#fff"><path d="M14 9V7c0-.9.6-1 1-1h3V2h-4c-3.3 0-4 2.4-4 4v3H7v4h3v9h4v-9h3.4l.6-4z"/></svg>',
  ig: '<svg width="17" height="17" viewBox="0 0 24 24" fill="#fff"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM21.9 7.3c-.1-1.6-.4-3-1.6-4.2S17.7 1.6 16.1 1.5C14.5 1.4 9.5 1.4 7.9 1.5 6.3 1.6 4.9 1.9 3.7 3.1S2.2 5.7 2.1 7.3C2 8.9 2 14 2.1 15.6c.1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.6.1 6.6.1 8.2 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.1-1.6.1-6.7 0-8.3zM19.8 18c-.4.9-1 1.5-1.9 1.9-1.3.5-4.4.4-5.9.4s-4.6.1-5.9-.4A3.4 3.4 0 0 1 4.2 18c-.5-1.3-.4-4.4-.4-5.9s-.1-4.6.4-5.9c.4-.9 1-1.5 1.9-1.9 1.3-.5 4.4-.4 5.9-.4s4.6-.1 5.9.4c.9.4 1.5 1 1.9 1.9.5 1.3.4 4.4.4 5.9s.1 4.6-.4 5.9z"/></svg>',
  li: '<svg width="17" height="17" viewBox="0 0 24 24" fill="#fff"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z"/></svg>',
  yt: '<svg width="17" height="17" viewBox="0 0 24 24" fill="#fff"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-4.8.5-4.8s0-3.2-.5-4.8zM9.7 15.1V8.9L15.5 12z"/></svg>',
  wa: '<svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.5 13.5 0 0 0 5.2 4.6c1.9.8 2.7.9 3.6.7a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.6-.4zM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zM20.5 3.5A11.8 11.8 0 0 0 1.9 17.7L.2 24l6.4-1.7A11.8 11.8 0 0 0 24 12a11.7 11.7 0 0 0-3.5-8.5z"/></svg>'
};

const LOGO = `
  <a href="index.html" class="logo" aria-label="${SITE.name} home">
    <span class="logo-mark">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f2c230" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20c6 0 12-4 14-12 .5-2 .5-3.5.5-4.5"/><path d="M4 20c1-6 5-10 11-12"/><path d="M8 20c4-1 8-4 10-9"/></svg>
    </span>
    <span class="logo-text">RS <span>EcoFiber</span><small>BANANA FIBER MANUFACTURER</small></span>
  </a>`;

function renderChrome() {
  const page = document.body.dataset.page || "";
  const links = [
    ["index.html", "Home", "home"],
    ["about.html", "About", "about"],
    ["products.html", "Products", "products"],
    ["gallery.html", "Gallery", "gallery"],
    ["blog.html", "Blogs", "blog"],
    ["contact.html", "Contact", "contact"]
  ];
  const tel = SITE.phone.replace(/\s/g, "");

  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <div class="topbar">
        <div class="container">
          <div class="info">
            <a href="tel:${tel}">📞 ${SITE.phone}</a>
            <a href="mailto:${SITE.email}">✉ ${SITE.email}</a>
            <span class="hide-sm">📍 Nandurbar, Maharashtra</span>
          </div>
          <span class="hide-sm">${SITE.hours}</span>
        </div>
      </div>
      <header class="header">
        <div class="container">
          ${LOGO}
          <button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
          <nav class="nav" aria-label="Main">
            <ul>
              ${links.map(([href, label, key]) => `<li><a href="${href}" class="${page === key ? "active" : ""}">${label}</a></li>`).join("")}
              <li><a href="contact.html#enquiry" class="btn btn-primary">Get a Quote</a></li>
            </ul>
          </nav>
        </div>
      </header>`;
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <footer class="footer">
        <div class="container footer-grid">
          <div>
            ${LOGO}
            <p>Manufacturer and supplier of natural banana fiber, yarn, rope and eco-friendly banana fiber products from the banana belt of Khandesh, Maharashtra.</p>
            <div class="socials">
              <a href="${SITE.facebook}" aria-label="Facebook" target="_blank" rel="noopener">${ICONS.fb}</a>
              <a href="${SITE.instagram}" aria-label="Instagram" target="_blank" rel="noopener">${ICONS.ig}</a>
              <a href="${SITE.linkedin}" aria-label="LinkedIn" target="_blank" rel="noopener">${ICONS.li}</a>
              <a href="${SITE.youtube}" aria-label="YouTube" target="_blank" rel="noopener">${ICONS.yt}</a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>${links.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h4>Our Products</h4>
            <ul>
              <li><a href="products.html#raw-fiber">Raw Banana Fiber</a></li>
              <li><a href="products.html#yarn">Banana Fiber Yarn</a></li>
              <li><a href="products.html#rope">Banana Fiber Rope</a></li>
              <li><a href="products.html#handicrafts">Handicrafts &amp; Mats</a></li>
              <li><a href="products.html#fabric">Banana Fabric</a></li>
              <li><a href="products.html#pulp">Fiber for Paper Pulp</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>📍 ${SITE.address}</li>
              <li>📞 <a href="tel:${tel}">${SITE.phone}</a></li>
              <li>✉ <a href="mailto:${SITE.email}">${SITE.email}</a></li>
              <li>🕘 ${SITE.hours}</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <span>© ${new Date().getFullYear()} ${SITE.name}. All Rights Reserved.</span>
            <span>Nandurbar, Maharashtra, India</span>
          </div>
        </div>
      </footer>
      <a class="wa-float" href="https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello RS EcoFiber, I would like to know more about your banana fiber products.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${ICONS.wa}</a>`;
  }

  // Contact info blocks on any page
  document.querySelectorAll("[data-contact-info]").forEach(el => {
    el.innerHTML = `
      <div class="info-row"><div class="icon">${ICONS.pin}</div><div><h4>Factory &amp; Office</h4><p>${SITE.address}</p></div></div>
      <div class="info-row"><div class="icon">${ICONS.phone}</div><div><h4>Call Us</h4><a href="tel:${tel}">${SITE.phone}</a></div></div>
      <div class="info-row"><div class="icon">${ICONS.mail}</div><div><h4>Email</h4><a href="mailto:${SITE.email}">${SITE.email}</a></div></div>
      <div class="info-row"><div class="icon">${ICONS.clock}</div><div><h4>Working Hours</h4><p>${SITE.hours}</p></div></div>
      <div class="socials">
        <a href="${SITE.facebook}" aria-label="Facebook" target="_blank" rel="noopener">${ICONS.fb}</a>
        <a href="${SITE.instagram}" aria-label="Instagram" target="_blank" rel="noopener">${ICONS.ig}</a>
        <a href="${SITE.linkedin}" aria-label="LinkedIn" target="_blank" rel="noopener">${ICONS.li}</a>
        <a href="${SITE.youtube}" aria-label="YouTube" target="_blank" rel="noopener">${ICONS.yt}</a>
      </div>`;
  });
}

function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach(i => i.classList.add("visible")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach(i => io.observe(i));
}

function initGallery() {
  const box = document.querySelector(".lightbox");
  if (!box) return;
  const inner = box.querySelector(".lightbox-inner");
  document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      inner.style.backgroundImage = getComputedStyle(item).backgroundImage;
      box.classList.add("open");
    });
  });
  box.addEventListener("click", e => { if (e.target !== inner) box.classList.remove("open"); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") box.classList.remove("open"); });
}

/* ---------- Enquiry form ---------- */
function initEnquiryForms() {
  document.querySelectorAll("form.enquiry-form").forEach(form => {
    const status = form.querySelector(".form-status");
    const btn = form.querySelector("button[type=submit]");

    // Pre-select product from ?product= in URL
    const prod = new URLSearchParams(location.search).get("product");
    if (prod && form.product) form.product.value = prod;

    const rules = {
      name: v => v.trim().length >= 2 || "Please enter your full name.",
      email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Please enter a valid email address.",
      phone: v => /^[+\d][\d\s-]{7,16}$/.test(v.trim()) || "Please enter a valid phone number.",
      product: v => v !== "" || "Please select a product.",
      message: v => v.trim().length >= 10 || "Please tell us a little more (min 10 characters).",
      consent: (v, el) => el.checked || "Please accept to be contacted."
    };

    function validateField(el) {
      const rule = rules[el.name];
      if (!rule) return true;
      const res = rule(el.value, el);
      const group = el.closest(".form-group") || el.closest(".checkbox-row");
      const err = group && group.querySelector(".error-text");
      if (res !== true) {
        group && group.classList.add("invalid");
        if (err) err.textContent = res;
        return false;
      }
      group && group.classList.remove("invalid");
      return true;
    }

    form.querySelectorAll("input, select, textarea").forEach(el => {
      el.addEventListener("blur", () => validateField(el));
      el.addEventListener("change", () => validateField(el));
    });

    form.addEventListener("submit", async e => {
      e.preventDefault();
      status.className = "form-status";
      let ok = true;
      Object.keys(rules).forEach(name => { if (form[name] && !validateField(form[name])) ok = false; });
      if (!ok) {
        const first = form.querySelector(".invalid input, .invalid select, .invalid textarea");
        first && first.focus();
        return;
      }

      btn.disabled = true;
      const label = btn.textContent;
      btn.textContent = "Sending…";
      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { "Accept": "application/json" }
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.ok) {
          status.className = "form-status success";
          status.textContent = "Thank you! Your enquiry has been received. Our team will contact you within 24 hours.";
          form.reset();
        } else {
          throw new Error(data.error || "Server error");
        }
      } catch (err) {
        status.className = "form-status error";
        status.innerHTML = `Sorry, we could not send your enquiry right now. Please call us at <a href="tel:${SITE.phone.replace(/\s/g, "")}"><b>${SITE.phone}</b></a> or email <a href="mailto:${SITE.email}"><b>${SITE.email}</b></a>.`;
      } finally {
        btn.disabled = false;
        btn.textContent = label;
      }
    });
  });
}

renderChrome();
initMenu();
initReveal();
initGallery();
initEnquiryForms();
