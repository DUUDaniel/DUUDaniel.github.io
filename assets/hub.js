CATEGORIES.forEach((category) => {
  if (!category.videos) category.videos = [];
});

function formatTime(seconds) {
  const s = Math.max(0, Math.floor(Number(seconds) || 0));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
}

function filmHasSource(item) {
  return Boolean(item && (item.youtube || item.vimeo || item.driveId || item.src));
}

function filmPoster(item, category) {
  if (item && item.poster) return item.poster.src;
  if (category.photos.length) return category.photos[0].src;
  return category.cover;
}

function filmEmbed(item, start) {
  const t = Math.max(0, Math.floor(Number(start) || 0));
  if (item.youtube) {
    return `<iframe title="${item.title}" src="https://www.youtube-nocookie.com/embed/${item.youtube}?autoplay=1&rel=0&modestbranding=1&start=${t}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  }
  if (item.vimeo) {
    return `<iframe title="${item.title}" src="https://player.vimeo.com/video/${item.vimeo}?autoplay=1#t=${t}s" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  }
  if (item.driveId) {
    return `<iframe title="${item.title}" src="https://drive.google.com/file/d/${item.driveId}/preview" allow="autoplay" allowfullscreen></iframe>`;
  }
  if (item.src) {
    return `<video controls autoplay playsinline src="${item.src}"></video>`;
  }
  return "";
}

const hubView = document.querySelector("#hub-view");
const showIntroOrig = showIntro;
const showWorkOrig = showWork;
showIntro = function () {
  showIntroOrig();
  if (hubView) hubView.classList.add("hidden");
};
showWork = function () {
  showWorkOrig();
  if (hubView) hubView.classList.add("hidden");
};

function hideMains() {
  intro.classList.add("is-away");
  intro.setAttribute("inert", "");
  intro.setAttribute("aria-hidden", "true");
  if (typeof letter !== "undefined" && letter) letter.classList.add("hidden");
  work.classList.add("hidden");
  if (hubView) hubView.classList.add("hidden");
  categoryView.classList.add("hidden");
}

function markEntered() {
  try {
    sessionStorage.setItem("dap-entered", "1");
  } catch (error) {}
}

function showHub(slug) {
  const category = CATEGORIES.find((item) => item.slug === slug);
  if (!category) {
    showWork();
    history.replaceState(null, "", location.pathname + location.search);
    return;
  }
  view = "hub";
  document.body.style.overflow = "";
  markEntered();
  hideMains();
  hubView.classList.remove("hidden");
  document.querySelector("#hub-title").textContent = category.title;
  document.querySelector("#hub-blurb").textContent = category.blurb;
  document.title = `${category.title} — ${SITE_NAME}`;

  const stillCover = category.photos[0]?.src || category.cover;
  const filmCover = filmPoster(category.videos[0], category);
  const photoCount = category.photos.length;
  const videoCount = category.videos.length;

  document.querySelector("#hub-cards").innerHTML = `
    <a class="card hub-card" href="#gallery/${category.slug}/photos">
      <span class="print-mat card-print">
        <span class="print-window card-window">
          <img src="${stillCover}" alt="" referrerpolicy="no-referrer" data-cover="${category.cover}" />
        </span>
      </span>
      <div class="card-copy">
        <p class="hub-kicker">Stills</p>
        <h2>Photographs</h2>
        <p>${photoCount ? `${photoCount} from the air` : "Ready for the next flight"}</p>
        <span class="card-view">Open</span>
      </div>
    </a>
    <a class="card hub-card" href="#gallery/${category.slug}/film">
      <span class="print-mat card-print">
        <span class="print-window card-window">
          <img src="${filmCover}" alt="" referrerpolicy="no-referrer" data-cover="${category.cover}" />
          <span class="play-mark" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </span>
        </span>
      </span>
      <div class="card-copy">
        <p class="hub-kicker">Motion</p>
        <h2>Film</h2>
        <p>${videoCount ? `${videoCount} aerial reel${videoCount === 1 ? "" : "s"}` : "Reels will hang here"}</p>
        <span class="card-view">Open</span>
      </div>
    </a>`;
  window.scrollTo({ top: 0, behavior: "auto" });
}

function emptyFrames(note) {
  return `
    <div class="frames">
      ${Array.from({ length: 4 }).map(() => `<div class="frame" aria-hidden="true"></div>`).join("")}
    </div>
    <p class="empty-note">${note}</p>`;
}

function showCollection(slug, kind) {
  const category = CATEGORIES.find((item) => item.slug === slug);
  if (!category) {
    showWork();
    history.replaceState(null, "", location.pathname + location.search);
    return;
  }
  view = kind;
  document.body.style.overflow = "";
  markEntered();
  hideMains();
  categoryView.classList.remove("hidden");
  document.querySelector("#cat-title").textContent = category.title;
  document.querySelector("#cat-kicker").textContent = kind === "film" ? "Film" : "Photographs";
  document.querySelector("#cat-blurb").textContent =
    kind === "film" ? `Aerial motion from the ${category.title.toLowerCase()} flights.` : category.blurb;
  document.querySelector("#cat-back").setAttribute("href", `#gallery/${category.slug}`);
  document.querySelector("#cat-back-label").textContent = category.title;
  document.title = `${kind === "film" ? "Film" : "Photographs"} · ${category.title} — ${SITE_NAME}`;

  const mount = document.querySelector("#cat-photos");

  if (kind === "film") {
    const videos = category.videos;
    if (!videos.length) {
      mount.innerHTML = emptyFrames(
        `The ${category.title} film reel is ready. Drop clips into Drive under ${category.slug}/film, then ask to publish them.`,
      );
      return;
    }
    mount.innerHTML = `<div class="frames">${videos
      .map((item, index) => {
        const poster = filmPoster(item, category);
        return `
        <button class="photo-btn film-btn" type="button" data-index="${index}">
          <span class="print-mat">
            <span class="print-window">
              <img src="${poster}" alt="${item.title}" referrerpolicy="no-referrer" />
              <span class="play-mark" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </span>
            </span>
          </span>
          <span class="film-label">${item.title}</span>
        </button>`;
      })
      .join("")}</div>`;
    mount.querySelectorAll(".film-btn").forEach((button) => {
      button.addEventListener("click", () => openFilmbox(videos, Number(button.dataset.index)));
    });
    return;
  }

  const photos = category.photos;
  if (!photos.length) {
    mount.innerHTML = emptyFrames(
      `The ${category.title} collection is ready. Photographs will hang here once they are added.`,
    );
    return;
  }

  mount.innerHTML = `<div class="frames">${photos
    .map(
      (item, index) => `
        <button class="photo-btn" type="button" data-index="${index}">
          <span class="print-mat"><span class="print-window">
            <img src="${item.src}" alt="${item.alt}" referrerpolicy="no-referrer" data-fallback="${item.fallbackSrc}" />
          </span></span>
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

function openFilmbox(videos, index) {
  const root = document.querySelector("#filmbox");
  const player = document.querySelector("#film-player");
  const momentsEl = document.querySelector("#film-moments");
  const titleEl = root.querySelector(".photo-title");
  const copyEl = root.querySelector(".photo-copy");

  const load = (item, start) => {
    titleEl.textContent = item.title ?? "";
    copyEl.textContent = item.description ?? "";
    let link = root.querySelector(".film-link");
    if (!link) {
      link = document.createElement("a");
      link.className = "film-link";
      link.target = "_blank";
      link.rel = "noreferrer";
      copyEl.after(link);
    }
    if (item.skypixel) {
      link.href = item.skypixel;
      link.textContent = "Watch on SkyPixel";
      link.hidden = false;
    } else {
      link.removeAttribute("href");
      link.textContent = "";
      link.hidden = true;
    }
    if (!filmHasSource(item)) {
      player.innerHTML = `<p class="empty-note">This reel is listed, but the file is not linked yet.</p>`;
      momentsEl.innerHTML = "";
      return;
    }
    player.innerHTML = filmEmbed(item, start);
    const videoEl = player.querySelector("video");
    if (videoEl && start) {
      videoEl.addEventListener("loadedmetadata", () => { videoEl.currentTime = start; }, { once: true });
    }
    momentsEl.innerHTML = (item.moments || [])
      .map((moment, i) => {
        const thumb = moment.thumb
          ? `<img class="moment-thumb" src="${moment.thumb}" alt="" referrerpolicy="no-referrer" />`
          : "";
        return `<button class="moment-btn" type="button" data-i="${i}">${thumb}${moment.label} · ${formatTime(moment.time)}</button>`;
      })
      .join("");
    momentsEl.querySelectorAll(".moment-btn").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const moment = item.moments[Number(button.dataset.i)];
        const native = player.querySelector("video");
        if (native) { native.currentTime = moment.time; native.play(); return; }
        load(item, moment.time);
      });
    });
  };

  load(videos[index], 0);
  root.classList.remove("hidden");
  const close = () => {
    player.innerHTML = "";
    root.classList.add("hidden");
    window.removeEventListener("keydown", onKeyBox);
  };
  const onKeyBox = (event) => { if (event.key === "Escape") close(); };
  root.onclick = (event) => {
    if (event.target === root || event.target.closest(".close")) close();
  };
  window.addEventListener("keydown", onKeyBox);
}

function routeHub() {
  const hash = location.hash.replace(/^#/, "");
  if (hash.startsWith("gallery/")) {
    markEntered();
    const parts = hash.slice("gallery/".length).split("/").filter(Boolean);
    const slug = parts[0];
    const pane = parts[1];
    if (pane === "photos") { showCollection(slug, "photos"); return; }
    if (pane === "film") { showCollection(slug, "film"); return; }
    showHub(slug);
    return;
  }
  document.title = SITE_NAME;
  if (hash === "work") {
    showWork();
    return;
  }
  showIntro();
}

window.removeEventListener("hashchange", route);
window.addEventListener("hashchange", routeHub);
routeHub();
