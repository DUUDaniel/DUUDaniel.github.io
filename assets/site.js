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
const burningSkyline = photo(
  "1nU6rhGivt87ovXvsngheFoAZ7bKQFMOr",
  "Burning Skyline",
  "The city catching fire at the horizon.",
);
const flyingOverTheWaterIntoTheSunset = photo(
  "1VvsJYA5YDYVQVe9zxpaEMK9JIa68g0u2",
  "Flying over the water into the sunset",
  "Open water, then the last light.",
);
const running = photo("1Y8eVqY3VYiMnZGcS5NpyLsG9EVz_Rmrs", "Running", "A figure cutting the dusk.");
const runningMore = photo(
  "1CoKu4xoyHMNpdzirj7kldf7ckkVrJPo6",
  "Running more",
  "The same flight, further on.",
);
const runningMoreAndMore = photo(
  "1KbXS7Qx5-_VGw_w2WhI0o3mjrRWtGbfN",
  "Running more and more",
  "Until the light gives out.",
);
const runningWithSunset = photo(
  "1fUrqi_egOWLilILFOvBS4E3Y4KWBxDmc",
  "Running with sunset",
  "Pace held against the falling sun.",
);
const walkingBesidesTheSea = photo(
  "1Y6HJnO8Unr7sJicjtjGgq2rZixrUkU-Z",
  "Walking besides the sea",
  "The shore at the hour of amber.",
);
const driveTogether = photo(
  "1IfBWkT4U_amR4KI5ls3C0hj4X3nRmdxQ",
  "Drive Together",
  "Two tracks sharing the summer road.",
);
const enjoyTheBreeze = photo(
  "11QH2tvKyrScIiZlBGeh5M8pFE4zskzNH",
  "Enjoy the Breeze",
  "Warm air held over the field.",
);
const fieldFromAbove = photo(
  "1emEHGrrKE5Pi8YudXK_aNX3Fno2Fehdi",
  "Field from above",
  "The summer plot, whole.",
);
const rideInTheField = photo(
  "182Hoiq7LDKt6PvaLGchmnlDbA_RKRht-",
  "Ride in the field",
  "A line drawn through the crop.",
);
const aloneInTheSea = photo(
  "17SRtGyFnXj14ct91FwFz33T4ITn2VwgG",
  "Alone in the sea",
  "A single craft on open water.",
);
const climbersOnTheEdge = photo(
  "1jEm3x5hOST1ucoPLd9dRVRI5W5AAp36J",
  "Climbers on the edge",
  "Figures held against the cliff.",
);
const danceInTheSea = photo(
  "1fK7fPaq1DcwIDVz-vwIU6FIBp6Bh-l29",
  "Dance in the Sea",
  "The swell turning under the rotor.",
);
const headingTowardsTheShore = photo(
  "1dMrBQVIFO5JWZpNFMmC3YZk3V83yvED3",
  "Heading towards the Shore",
  "The coast coming into reach.",
);
const roaringOfTheSea = photo(
  "1oV_n1y-zbcaCQSKzEAkILUqFgbpTr-c2",
  "Roaring of the Sea",
  "White water breaking on stone.",
);
const strongShieldOfVolcanicRock = photo(
  "1npKPxuYKMC2BjHe9AApnKRuLYGmvpKIC",
  "Strong shield of Volcanic Rock",
  "The headland holding the tide.",
);
const theWavesStrikingTheShore = photo(
  "1j-MOZrWrJWxWntAVwo_YSe7tBQnilPBw",
  "The Waves striking the shore",
  "Each line of water finding land.",
);
const walking = photo("1BPrqMZq03nise8u-dkby38KMEruEL4Sy", "Walking", "A path along the water's edge.");
const walkingOnTheEdge = photo(
  "1aRxyhVaP6Y95GqdQUC-VSzmFV04a_-4c",
  "Walking on the edge",
  "The cliff and the drop, shared.",
);
const whenTheColdMeetsWarmth = photo(
  "10C-QOPn3t_-a9fFYHMhJ5mbdaqFv3nwP",
  "When the cold meets warmth",
  "Two waters holding a line.",
);
const acrossTheRiver = photo(
  "1bPXm3dQUWAOqkEyEpMwTwNNJE-400Dg3",
  "Across the River",
  "The city looking over the water.",
);
const aroundTheCityInAShip = photo(
  "1zeOPJDrDG8CrBp43KMG-ZXDHiOwxoJB-",
  "Around the City in a Ship",
  "A hull drawing the waterfront.",
);
const cityBesidesTheRiver = photo(
  "1hTciD9hx76T-6OFBxOBu3jWw31Lenhu3",
  "City besides the river",
  "Towers standing with the current.",
);
const intoTheHeartOfTheCity = photo(
  "1hDtMvTd4HI8zn8YcOzjRV1gOLEgyGOS3",
  "Into the heart of the City",
  "The grid closing in.",
);
const meetingAboveTheWater = photo(
  "1en9dAton-CXG7jl9Q63j3CKsTJTJFwJN",
  "Meeting above the water",
  "Two spans over the same river.",
);
const skyscrapersStandingBesidesTheWater = photo(
  "1xobi6UCnzl3BCreAfzMOhrw1Q9KGpPj8",
  "Skyscrapers Standing Besides the Water",
  "Glass and river in one frame.",
);
const throughTheCyberCity = photo(
  "1Tk_yIC2pjc3FEGTE3G6k9RDFFi4KKICo",
  "Through the CyberCity",
  "A corridor of night light.",
);
const autumnLeaves = photo(
  "1umIfB-9nWYOVJg2z6WCYjzVMOAlC4yZr",
  "Autumn leaves",
  "Copper laid across the canopy.",
);
const theSunHangingOnTheTemple = photo(
  "1MMuI-eCTEhBHr92DhW_S2SsHd_DsESfI",
  "The Sun hanging on the temple",
  "A disc caught on the roof-line.",
);
const mountainSurroundedByCloud = photo(
  "1l9tfi6PirR1g1H4VHA8C6ee22cT2vAzz",
  "Mountain surrounded by cloud",
  "The peak held in a ring of mist.",
);
const mountainWearingAHat = photo(
  "1MwDFCP9qvTId7nmpb4FUDtRNgkbNN73Y",
  "Mountain wearing a hat",
  "A cap of cloud on the summit.",
);
const mountainsCoveredByWhiteCloud = photo(
  "1AjjvBRVuMQHmCtSj33U68_G5SFqsx99w",
  "Mountains covered by white cloud",
  "Ridges dissolving into white.",
);
const sunlightThroughTheCloudOnTheCliff = photo(
  "1xB6VY-h2KYgmmZY_0rq-rAAIlBL6jIjj",
  "Sunlight through the cloud on the cliff",
  "Light finding the rock face.",
);
const sunriseOnTheCliffWithSwallows = photo(
  "1HKvH4GN2GWaxhSOgQ4IHCri5-VSDyd3W",
  "Sunrise on the cliff with swallows",
  "First light, and birds in the updraft.",
);

const flyingIntoTheRedwoods = {
  title: "Flying into the Redwoods",
  description:
    "A peaceful afternoon above the grove. From the air the forest has no obstruction — the stand just continues.",
  driveId: "1cFI8BQ6-hv_KvxhlBNbg9LztQaVE7SlV",
  skypixel: "https://www.skypixel.com/videos/flying-into-the-redwoods",
  poster: heartOfTheRedwoods,
  moments: [
    { time: 0, label: "Lift", thumb: heartOfTheRedwoods.src },
    { time: 12, label: "Canopy", thumb: driveThroughTheRedwoods.src },
    { time: 24, label: "Grove", thumb: underTheWoods.src },
    { time: 36, label: "Endless", thumb: autumnLeaves.src },
  ],
};

const mountainViews = {
  title: "Mountain views",
  description: "Ridges, cloud, and cliff light from the air.",
  driveId: "1ar8HHExO8qcCV413o-8IudDHFXPK7Ex7",
  skypixel: "https://www.skypixel.com/videos/834befa5-22de-42d7-b663-e634fe4023d2",
  poster: mountainSurroundedByCloud,
  moments: [
    { time: 0, label: "Cloud", thumb: mountainSurroundedByCloud.src },
    { time: 15, label: "Hat", thumb: mountainWearingAHat.src },
    { time: 30, label: "White", thumb: mountainsCoveredByWhiteCloud.src },
    { time: 45, label: "Cliff", thumb: sunlightThroughTheCloudOnTheCliff.src },
  ],
};

const zhuhaiSunset = {
  title: "Zhuhai Sunset",
  description: "A beautiful afternoon over Zhuhai — last light on water and the grid.",
  driveId: "11cGXkc_tAW-rbZSmnaoIzvXz12tktK-2",
  skypixel: "https://www.skypixel.com/videos/the-day-i-was-in-zhuhai-what-a-beautiful-afternoon",
  poster: burningSkyline,
  moments: [
    { time: 0, label: "City", thumb: cyberCity.src },
    { time: 15, label: "River", thumb: cityBesidesTheRiver.src },
    { time: 30, label: "Skyline", thumb: burningSkyline.src },
    { time: 45, label: "Dusk", thumb: flyingOverTheWaterIntoTheSunset.src },
  ],
};

const templeAboveTwoRivers = {
  title: "Temple above the two rivers",
  description: "The roof between two silver courses, seen from the air.",
  driveId: "1YS7EOgv4xzSgHjNClKVqkVsU14dNqufX",
  skypixel: "https://www.skypixel.com/videos/the-temple-above-two-rivers",
  poster: theSunHangingOnTheTemple,
  moments: [
    { time: 0, label: "Roof", thumb: theSunHangingOnTheTemple.src },
    { time: 15, label: "Spring", thumb: templeInTheSpring.src },
    { time: 30, label: "Light", thumb: sunriseWithTemple.src },
  ],
};

const LETTER = {
  kicker: "A note",
  name: "Daniel",
  lede: "Above the ground, into the sky, let the creativity shines.",
  paragraphs: [
    "I am Daniel, an aerial photographer, trying to show you my views from the sky.",
    "Those beautiful moments construct each journey, which is beautiful, and I am trying to tell you the stories behind them.",
  ],
};

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
    photos: [
      flyingIntoTheSunset,
      flyWithPassion,
      burningSkyline,
      flyingOverTheWaterIntoTheSunset,
      runningWithSunset,
      running,
      runningMore,
      runningMoreAndMore,
      walkingBesidesTheSea,
      sunriseWithTemple,
      sunlightThroughTheGap,
    ],
    videos: [],
  },
  {
    slug: "sea",
    title: "Sea",
    blurb: "Open water from above.",
    cover: "covers/sea.jpg",
    photos: [
      aboveTheBeach,
      seashore,
      volcanicShore,
      volcanicRockToTheSea,
      aloneInTheSea,
      danceInTheSea,
      headingTowardsTheShore,
      roaringOfTheSea,
      theWavesStrikingTheShore,
      strongShieldOfVolcanicRock,
      climbersOnTheEdge,
      walkingOnTheEdge,
      walking,
      whenTheColdMeetsWarmth,
    ],
    videos: [],
  },
  {
    slug: "rivers",
    title: "Rivers",
    blurb: "Silver courses through land.",
    cover: "covers/rivers.jpg",
    photos: [],
    videos: [],
  },
  {
    slug: "temples",
    title: "Temples",
    blurb: "Sacred roofs in first light.",
    cover: "covers/temples.jpg",
    photos: [theSunHangingOnTheTemple, sunriseWithTemple, templeInTheSpring],
    videos: [templeAboveTwoRivers],
  },
  {
    slug: "city",
    title: "City",
    blurb: "The grid after dark.",
    cover: "covers/city.jpg",
    photos: [
      cyberCity,
      throughTheCyberCity,
      intoTheHeartOfTheCity,
      cityBesidesTheRiver,
      skyscrapersStandingBesidesTheWater,
      aroundTheCityInAShip,
      meetingAboveTheWater,
      acrossTheRiver,
    ],
    videos: [zhuhaiSunset],
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
    videos: [],
  },
  {
    slug: "mountain",
    title: "Mountain",
    blurb: "Ridges held in cloud.",
    cover: driveSrc("1l9tfi6PirR1g1H4VHA8C6ee22cT2vAzz", 1600),
    photos: [
      mountainSurroundedByCloud,
      mountainWearingAHat,
      mountainsCoveredByWhiteCloud,
      sunlightThroughTheCloudOnTheCliff,
      sunriseOnTheCliffWithSwallows,
    ],
    videos: [mountainViews],
  },
  {
    slug: "autumn",
    title: "Autumn",
    blurb: "Copper from the air.",
    cover: "covers/autumn.jpg",
    photos: [
      autumnLeaves,
      whenRedMeetsGreen,
      heartOfTheRedwoods,
      driveThroughTheRedwoods,
      underTheWoods,
    ],
    videos: [flyingIntoTheRedwoods],
  },
  {
    slug: "winter",
    title: "Winter",
    blurb: "Quiet snowfields.",
    cover: "covers/winter.jpg",
    photos: [],
    videos: [],
  },
  {
    slug: "summer",
    title: "Summer",
    blurb: "Warm fields from above.",
    cover: "covers/summer.jpg",
    photos: [
      vividField,
      fieldFromAbove,
      rideInTheField,
      driveTogether,
      enjoyTheBreeze,
      throughTheField,
      aboveTheBeach,
      seashore,
    ],
    videos: [],
  },
  {
    slug: "spring",
    title: "Spring",
    blurb: "New green, first blossom.",
    cover: "covers/spring.jpg",
    photos: [templeInTheSpring, throughTheField],
    videos: [],
  },
];

function shuffle(items) {
  const next = items.slice();
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = next[i];
    next[i] = next[j];
    next[j] = tmp;
  }
  return next;
}

function uniqueCoverMap(categories) {
  const used = new Set();
  const appearances = new Map();
  categories.forEach((category) => {
    category.photos.forEach((item) => {
      appearances.set(item.id, (appearances.get(item.id) || 0) + 1);
    });
  });
  const map = {};
  shuffle(categories).forEach((category) => {
    const unused = category.photos.filter((item) => !used.has(item.id));
    const exclusive = unused.filter((item) => (appearances.get(item.id) || 0) === 1);
    const pool = exclusive.length ? exclusive : unused;
    if (pool.length) {
      const pick = pool[Math.floor(Math.random() * pool.length)];
      used.add(pick.id);
      map[category.slug] = pick.src;
    } else {
      map[category.slug] = category.cover;
    }
  });
  return map;
}

function coverOf(category) {
  if (!category.photos.length) return category.cover;
  return category.photos[Math.floor(Math.random() * category.photos.length)].src;
}

function reelPhotos(count, categories) {
  const n = count || 7;
  const list = categories || CATEGORIES;
  const picked = [];
  const used = new Set();
  shuffle(list).forEach((category) => {
    if (picked.length >= n) return;
    const unused = category.photos.filter((item) => !used.has(item.id));
    if (!unused.length) return;
    const pick = unused[Math.floor(Math.random() * unused.length)];
    used.add(pick.id);
    picked.push(pick);
  });
  if (picked.length < n) {
    const rest = [];
    list.forEach((category) => {
      category.photos.forEach((item) => {
        if (!used.has(item.id)) {
          used.add(item.id);
          rest.push(item);
        }
      });
    });
    picked.push(...shuffle(rest).slice(0, n - picked.length));
  }
  return shuffle(picked).slice(0, n);
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
const letter = document.querySelector("#letter");
const work = document.querySelector("#work-view");
const categoryView = document.querySelector("#category");
const grid = document.querySelector("#grid");
const titleEls = document.querySelectorAll("[data-site-name]");
let view = "home";

titleEls.forEach((el) => {
  el.textContent = SITE_NAME;
});

const introPhoto = document.querySelector(".intro-photo");
if (introPhoto) {
  bindDriveImage(introPhoto, HERO.src, HERO.fallbackSrc, HERO_FALLBACK);
}

const uniqueCovers = uniqueCoverMap(CATEGORIES);
grid.innerHTML = CATEGORIES.map((category) => {
  const cover = uniqueCovers[category.slug] || category.cover;
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

const letterStrip = document.querySelector("#letter-strip");
if (letterStrip) {
  const stills = reelPhotos(7);
  const loop = stills.concat(stills);
  letterStrip.innerHTML = loop
    .map(
      (item) => `
      <figure class="letter-frame">
        <img src="${item.src}" alt="${item.alt}" referrerpolicy="no-referrer" data-fallback="${item.fallbackSrc}" />
      </figure>`,
    )
    .join("");
  if (stills.length) letterStrip.classList.add("is-on");
  letterStrip.querySelectorAll("img[data-fallback]").forEach((img) => {
    img.addEventListener("error", () => {
      const next = img.getAttribute("data-fallback");
      if (next && img.src !== next) img.src = next;
    });
  });
}

if (letter) {
  const nameEl = letter.querySelector(".letter-name");
  const ledeEl = letter.querySelector(".letter-lede");
  const kickerEl = letter.querySelector(".kicker");
  if (nameEl) nameEl.textContent = LETTER.name;
  if (ledeEl) ledeEl.textContent = LETTER.lede;
  if (kickerEl) kickerEl.textContent = LETTER.kicker;
  const bodies = letter.querySelectorAll(".letter-body");
  LETTER.paragraphs.forEach((paragraph, index) => {
    if (bodies[index]) bodies[index].textContent = paragraph;
  });
}

function showHome(target) {
  view = "home";
  document.body.style.overflow = "";
  intro.classList.remove("is-away", "hidden");
  intro.removeAttribute("inert");
  intro.setAttribute("aria-hidden", "false");
  if (letter) letter.classList.remove("hidden");
  work.classList.remove("hidden");
  categoryView.classList.add("hidden");
  const jump = () => {
    if (target === "work") document.getElementById("work-view")?.scrollIntoView({ behavior: "auto" });
    else if (target === "letter") document.getElementById("letter")?.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "auto" });
  };
  requestAnimationFrame(jump);
}

function showIntro() {
  showHome();
}

function showWork() {
  showHome("work");
}

function showCategory(slug) {
  const category = CATEGORIES.find((item) => item.slug === slug);
  if (!category) {
    showWork();
    history.replaceState(null, "", location.pathname + location.search);
    return;
  }
  view = "gallery";
  document.body.style.overflow = "";
  intro.classList.add("is-away");
  intro.setAttribute("inert", "");
  intro.setAttribute("aria-hidden", "true");
  if (letter) letter.classList.add("hidden");
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
    try {
      sessionStorage.setItem("dap-entered", "1");
    } catch (error) {
      /* ignore */
    }
    showCategory(hash.slice("gallery/".length));
    return;
  }
  document.title = SITE_NAME;
  if (hash === "work") {
    showHome("work");
    return;
  }
  showHome();
}

function enter() {
  showHome("letter");
}

window.addEventListener("hashchange", route);

document.querySelector("#scroll-enter").addEventListener("click", enter);
document.querySelector("#brand-home").addEventListener("click", () => {
  if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  showHome();
});
document.querySelector("#skip").addEventListener("click", (event) => {
  event.preventDefault();
  showHome("work");
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
