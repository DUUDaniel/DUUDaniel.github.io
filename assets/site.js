const SITE_NAME = "Daniel Aerial Photography";
const HERO_FALLBACK = "hero.jpg";

function driveSrc(id, width) {
  return `https://lh3.googleusercontent.com/d/${id}=w${width || 1400}`;
}
function driveThumb(id, width) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${width || 1400}`;
}
function photo(id, title, description) {
  return {
    id,
    src: driveSrc(id, 1400),
    fallbackSrc: driveThumb(id, 1400),
    fullSrc: driveSrc(id, 2560),
    fullFallbackSrc: driveThumb(id, 2560),
    alt: title,
    title,
    description,
  };
}

const flyingIntoTheSunset = photo(
  "1XPvbbcUc2sEZF7yA7ub3d9C3fVncnZnq",
  "Flying into the sunset",
  "The flight holds the last band of light.",
);
const flyWithPassion = photo(
  "1fDMn8YPvfdNgy_s37aLa0haUuoOzYfqY",
  "Fly with passion",
  "A line drawn through dusk.",
);
const vividField = photo(
  "1mGDGpEIG8cTdA2sphGgCnZyr44OeATP6",
  "Vivid Field",
  "Color laid across open ground.",
);
const throughTheField = photo(
  "1AyNazPMjbSwj7XlvNbLS-RjTHzr1-ueu",
  "Through the Field",
  "A path through the crop, seen from above.",
);
const volcanicShore = photo(
  "1ecwBSf4xQAlAhYxprw_gFkczHyXFBhwE",
  "Volcanic Shore",
  "Dark rock meeting the water.",
);
const volcanicRockToTheSea = photo(
  "1lCemqOBHR0VjcWT0m2B86WhmGPP0PPUO",
  "Volcanic Rock to the sea",
  "Stone falling toward the swell.",
);
const seashore = photo(
  "1V8Qik0o2fUrnui5_SlJUElMRYFbT0NU7",
  "Seashore",
  "The edge of land, from the air.",
);
const aboveTheBeach = photo(
  "1-_bvqgDT5RiDmOuyOpu3eIk-8_vChxTi",
  "Above the Beach",
  "Looking down on the strand.",
);
const cyberCity = photo("1A_ce1VgFYd0aeWyaGXzegIFEf0Jt_iJu", "CyberCity", "The night grid, lit.");
const whenRedMeetsGreen = photo(
  "1CRc4ysPl68T7uBP1IKBmiDYyGkzczw9o",
  "When red meets green",
  "Two canopies sharing a line.",
);
const underTheWoods = photo(
  "1TT_2rBUM7hmISmZSkE2IrbGfq1N7tkfJ",
  "Under the woods",
  "Beneath the cover of trees.",
);
const driveThroughTheRedwoods = photo(
  "1STYx6lxXbyR-S7NlTQXNsbDbEbDQigoi",
  "Drive through the redwoods",
  "A road held by the grove.",
);
const heartOfTheRedwoods = photo(
  "1-bsuiG4yy3iLs0Zg8V3lP_puUmNjCRiK",
  "Heart of the redwoods",
  "The stand at its densest.",
);
const sunlightThroughTheGap = photo(
  "1hi-370GHzXQ0uLeyN5IAGuL3VkzAL5Gz",
  "Sunlight through the gap",
  "Light finding a break in the canopy.",
);
const sunriseWithTemple = photo(
  "1WtIS84LlPs-iHS_8D35ftHziZVnr_CpC",
  "Sunrise with temple",
  "First light on the roof.",
);
const templeInTheSpring = photo(
  "1GM3S_rXPE5-peENJOWruisZLUQ6HTEQR",
  "Temple in the Spring",
  "The temple standing in new green.",
);

const HERO = {
  ...flyingIntoTheSunset,
  src: driveSrc(flyingIntoTheSunset.id, 1920),
  fallbackSrc: driveThumb(flyingIntoTheSunset.id, 1920),
};

const CATEGORIES = [
  {
    slug: "sunset",
    title: "Sunset",
    blurb: "Last light from the air.",
    cover: "covers/sunset.jpg",
    photos: [flyingIntoTheSunset, flyWithPassion, sunriseWithTemple, sunlightThroughTheGap],
  },
  {
    slug: "sea",
    title: "Sea",
    blurb: "Open water from above.",
    cover: "covers/sea.jpg",
    photos: [aboveTheBeach, seashore, volcanicShore, volcanicRockToTheSea],
  },
  {
    slug: "rivers",
    title: "Rivers",
    blurb: "Silver courses through land.",
    cover: "covers/rivers.jpg",
    photos: [],
  },
  {
    slug: "temples",
    title: "Temples",
    blurb: "Sacred roofs in first light.",
    cover: "covers/temples.jpg",
    photos: [sunriseWithTemple, templeInTheSpring],
  },
  {
    slug: "city",
    title: "City",
    blurb: "The grid after dark.",
    cover: "covers/city.jpg",
    photos: [cyberCity],
  },
  {
    slug: "forest",
    title: "Forest",
    blurb: "Canopy, redwood, and gap light.",
    cover: "covers/forest.jpg",
    photos: [
      heartOfTheRedwoods,
      driveThroughTheRedwoods,
      underTheWoods,
      whenRedMeetsGreen,
      sunlightThroughTheGap,
    ],
  },
  {
    slug: "autumn",
    title: "Autumn",
    blurb: "Copper from the air.",
    cover: "covers/autumn.jpg",
    photos: [whenRedMeetsGreen],
  },
  {
    slug: "winter",
    title: "Winter",
    blurb: "Quiet snowfields.",
    cover: "covers/winter.jpg",
    photos: [],
  },
  {
    slug: "summer",
    title: "Summer",
    blurb: "Warm fields from above.",
    cover: "covers/summer.jpg",
    photos: [vividField, aboveTheBeach, seashore],
  },
  {
    slug: "spring",
    title: "Spring",
    blurb: "New green, first blossom.",
    cover: "covers/spring.jpg",
    photos: [templeInTheSpring, throughTheField],
  },
];

function coverOf(category) {
  if (!category.photos.length) return category.cover;
  return category.photos[Math.floor(Math.random() * category.photos.length)].src;
}

function bindDriveImage(img, primary, fallback, lastResort) {
  img.referrerPolicy = "no-referrer";
  img.src = primary;
  img.addEventListener("error", () => {
    if (img.dataset.step === "fallback") {
      if (lastResort) img.src = lastResort;
      return;
    }
    img.dataset.step = "fallback";
    img.src = fallback;
  });
}

const intro = document.querySelector("#intro");
const work = document.querySelector("#work");
const categoryView = document.querySelector("#category");
const grid = document.querySelector("#grid");
const titleEls = document.querySelectorAll("[data-site-name]");

titleEls.forEach((el) => {
  el.textContent = SITE_NAME;
});

const introPhoto = document.querySelector(".intro-photo");
if (introPhoto) {
  bindDriveImage(introPhoto, HERO.src, HERO.fallbackSrc, HERO_FALLBACK);
}

grid.innerHTML = CATEGORIES.map((category) => {
  const cover = coverOf(category);
  return `
  <a class="card" href="#gallery/${category.slug}">
    <div class="card-tone" aria-hidden="true"></div>
    <img data-cover="${category.cover}" src="${cover}" alt="" referrerpolicy="no-referrer" />
    <div class="card-veil" aria-hidden="true"></div>
    <div class="card-copy">
      <div>
        <h2>${category.title}</h2>
        <p>${category.blurb}</p>
      </div>
      <span class="card-view">View</span>
    </div>
  </a>`;
}).join("");

grid.querySelectorAll("img[data-cover]").forEach((img) => {
  img.addEventListener("error", () => {
    const original = img.getAttribute("data-cover");
    if (original && img.src !== original && !img.src.endsWith(original)) {
      img.src = original;
    }
  });
});

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
      (item, index) => `
        <button class="photo-btn" type="button" data-index="${index}">
          <img src="${item.src}" alt="${item.alt}" referrerpolicy="no-referrer" data-fallback="${item.fallbackSrc}" />
        </button>`,
    )
    .join("")}</div>`;

  mount.querySelectorAll("img[data-fallback]").forEach((img) => {
    img.addEventListener("error", () => {
      const next = img.getAttribute("data-fallback");
      if (next && img.src !== next) img.src = next;
    });
  });

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
  const titleEl = root.querySelector(".photo-title");
  const copyEl = root.querySelector(".photo-copy");
  img.referrerPolicy = "no-referrer";
  const show = (i) => {
    const item = photos[(i + photos.length) % photos.length];
    img.dataset.step = "";
    img.onerror = () => {
      if (img.dataset.step === "full") {
        img.dataset.step = "preview";
        img.src = item.src;
        return;
      }
      if (img.dataset.step !== "fallback") {
        img.dataset.step = "fallback";
        img.src = item.fullFallbackSrc || item.fallbackSrc;
      }
    };
    img.dataset.step = "full";
    img.src = item.fullSrc || item.src;
    img.alt = item.alt;
    titleEl.textContent = item.title ?? "";
    copyEl.textContent = item.description ?? "";
    root.dataset.index = String((i + photos.length) % photos.length);
  };
  show(index);
  root.classList.remove("hidden");
  root.querySelector(".prev").style.display = photos.length > 1 ? "" : "none";
  root.querySelector(".next").style.display = photos.length > 1 ? "" : "none";
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

const TONES = [
  { id: "night", label: "Night", swatch: "#0b0b0c", color: "#0b0b0c" },
  { id: "paper", label: "Paper", swatch: "#f2ebe0", color: "#f2ebe0" },
  { id: "fog", label: "Fog", swatch: "#101318", color: "#101318" },
  { id: "dusk", label: "Dusk", swatch: "#120e0c", color: "#120e0c" },
  { id: "pine", label: "Pine", swatch: "#0c110f", color: "#0c110f" },
];

function applyTone(id) {
  const tone = TONES.find((item) => item.id === id) || TONES[0];
  document.documentElement.dataset.theme = tone.id;
  document.documentElement.style.colorScheme = tone.id === "paper" ? "light" : "dark";
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    meta.setAttribute("content", tone.color);
  });
  try {
    localStorage.setItem("dap-theme", tone.id);
  } catch (error) {
    /* ignore */
  }
  document.querySelectorAll(".theme-swatch").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.theme === tone.id ? "true" : "false");
  });
}

(function initTone() {
  const mount = document.querySelector("#theme-picker");
  if (!mount) return;
  let current = "night";
  try {
    const stored = localStorage.getItem("dap-theme");
    if (TONES.some((item) => item.id === stored)) current = stored;
  } catch (error) {
    /* ignore */
  }
  TONES.forEach((tone) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-swatch";
    button.dataset.theme = tone.id;
    button.setAttribute("aria-label", tone.label);
    button.title = tone.label;
    button.innerHTML = `<span style="background:${tone.swatch}"></span>`;
    button.addEventListener("click", () => applyTone(tone.id));
    mount.appendChild(button);
  });
  applyTone(current);
})();

route();
