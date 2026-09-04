const SITE_NAME = "Daniel Aerial Photography";

const CATEGORIES = [
  { slug: "sunset", title: "Sunset", blurb: "Last light on water.", cover: "covers/sunset.jpg", photos: [] },
  { slug: "sea", title: "Sea", blurb: "Open water from above.", cover: "covers/sea.jpg", photos: [] },
  { slug: "rivers", title: "Rivers", blurb: "Silver courses through land.", cover: "covers/rivers.jpg", photos: [] },
  { slug: "temples", title: "Temples", blurb: "Rooftops at dusk.", cover: "covers/temples.jpg", photos: [] },
  { slug: "city", title: "City", blurb: "The grid after dark.", cover: "covers/city.jpg", photos: [] },
  { slug: "forest", title: "Forest", blurb: "Canopy and mist.", cover: "covers/forest.jpg", photos: [] },
  { slug: "autumn", title: "Autumn", blurb: "Copper from the air.", cover: "covers/autumn.jpg", photos: [] },
  { slug: "winter", title: "Winter", blurb: "Quiet snowfields.", cover: "covers/winter.jpg", photos: [] },
  { slug: "summer", title: "Summer", blurb: "Warm fields and shore.", cover: "covers/summer.jpg", photos: [] },
  { slug: "spring", title: "Spring", blurb: "New green, first blossom.", cover: "covers/spring.jpg", photos: [] },
];

const intro = document.querySelector("#intro");
const work = document.querySelector("#work");
const categoryView = document.querySelector("#category");
const grid = document.querySelector("#grid");
const titleEls = document.querySelectorAll("[data-site-name]");

titleEls.forEach((el) => {
  el.textContent = SITE_NAME;
});

grid.innerHTML = CATEGORIES.map(
  (category) => `
  <a class="card" href="#gallery/${category.slug}">
    <div class="card-tone" aria-hidden="true"></div>
    <img src="${category.cover}" alt="" />
    <div class="card-veil" aria-hidden="true"></div>
    <div class="card-copy">
      <div>
        <h2>${category.title}</h2>
        <p>${category.blurb}</p>
      </div>
      <span class="card-view">View</span>
    </div>
  </a>`,
).join("");

function showIntro() {
  document.body.style.overflow = "hidden";
  intro.classList.remove("is-away");
  intro.setAttribute("aria-hidden", "false");
  work.classList.add("hidden");
  categoryView.classList.add("hidden");
}

function showWork() {
  document.body.style.overflow = "";
  intro.classList.add("is-away");
  intro.setAttribute("aria-hidden", "true");
  work.classList.remove("hidden");
  categoryView.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "auto" });
}

function showCategory(slug) {
  const category = CATEGORIES.find((item) => item.slug === slug);
  if (!category) {
    location.hash = "work";
    return;
  }
  document.body.style.overflow = "";
  intro.classList.add("is-away");
  intro.setAttribute("aria-hidden", "true");
  work.classList.add("hidden");
  categoryView.classList.remove("hidden");
  document.querySelector("#cat-title").textContent = category.title;
  document.querySelector("#cat-blurb").textContent = category.blurb;
  document.title = `${category.title} — ${SITE_NAME}`;

  const photos = category.photos;
  const mount = document.querySelector("#cat-photos");
  if (!photos.length) {
    mount.innerHTML = `
      <div class="frames">
        ${Array.from({ length: 6 })
          .map(() => `<div class="frame" aria-hidden="true"></div>`)
          .join("")}
      </div>
      <p class="empty-note">The ${category.title} collection is ready. Photographs will hang here once they are added.</p>`;
    return;
  }

  mount.innerHTML = `<div class="frames">${photos
    .map(
      (photo, index) => `
        <button class="photo-btn" type="button" data-index="${index}">
          <img src="${photo.src}" alt="${photo.alt}" />
        </button>`,
    )
    .join("")}</div>`;

  mount.querySelectorAll(".photo-btn").forEach((button) => {
    button.addEventListener("click", () => openLightbox(photos, Number(button.dataset.index)));
  });
}

function route() {
  const hash = location.hash.replace(/^#/, "");
  if (hash.startsWith("gallery/")) {
    showCategory(hash.slice("gallery/".length));
    return;
  }
  if (hash === "work") {
    document.title = SITE_NAME;
    showWork();
    return;
  }
  document.title = SITE_NAME;
  showIntro();
}

function enter() {
  if (location.hash === "work") {
    showWork();
    return;
  }
  location.hash = "work";
}

let locked = false;
function onWheel(event) {
  if (location.hash && location.hash !== "") return;
  if (event.deltaY > 10) {
    event.preventDefault();
    if (locked) return;
    locked = true;
    enter();
  }
}

let startY = 0;
function onTouchStart(event) {
  startY = event.touches[0]?.clientY ?? 0;
}
function onTouchMove(event) {
  if (location.hash && location.hash !== "") return;
  const y = event.touches[0]?.clientY ?? startY;
  if (startY - y > 36) {
    event.preventDefault();
    if (locked) return;
    locked = true;
    enter();
  }
}
function onKey(event) {
  if (location.hash && location.hash !== "") return;
  if (["ArrowDown", "PageDown", " ", "Enter"].includes(event.key)) {
    event.preventDefault();
    if (locked) return;
    locked = true;
    enter();
  }
}

window.addEventListener("hashchange", () => {
  locked = Boolean(location.hash);
  route();
});
window.addEventListener("wheel", onWheel, { passive: false });
window.addEventListener("touchstart", onTouchStart, { passive: true });
window.addEventListener("touchmove", onTouchMove, { passive: false });
window.addEventListener("keydown", onKey);

document.querySelector("#scroll-enter").addEventListener("click", enter);
document.querySelector("#brand-home").addEventListener("click", () => {
  locked = false;
  location.hash = "";
});
document.querySelector("#skip").addEventListener("click", (event) => {
  event.preventDefault();
  enter();
});

function openLightbox(photos, index) {
  const root = document.querySelector("#lightbox");
  const img = root.querySelector("img");
  const caption = root.querySelector("figcaption");
  const show = (i) => {
    const photo = photos[(i + photos.length) % photos.length];
    img.src = photo.src;
    img.alt = photo.alt;
    caption.textContent = photo.title ?? "";
    root.dataset.index = String((i + photos.length) % photos.length);
  };
  show(index);
  root.classList.remove("hidden");
  const onKeyBox = (event) => {
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") show(Number(root.dataset.index) - 1);
    if (event.key === "ArrowRight") show(Number(root.dataset.index) + 1);
  };
  const close = () => {
    root.classList.add("hidden");
    window.removeEventListener("keydown", onKeyBox);
  };
  root.onclick = (event) => {
    if (event.target === root || event.target.closest(".close")) close();
  };
  root.querySelector(".prev").onclick = (event) => {
    event.stopPropagation();
    show(Number(root.dataset.index) - 1);
  };
  root.querySelector(".next").onclick = (event) => {
    event.stopPropagation();
    show(Number(root.dataset.index) + 1);
  };
  window.addEventListener("keydown", onKeyBox);
}

route();
