// Embedded fallback data ensuring 100% functionality even when viewed via file:/// protocol without local web server
const FALLBACK_CREATURES = [
  {
    "index": 0, "key": "tikbalang", "name": "Tikbalang", "rarity": "Common",
    "region": "Luzon (widespread)", "habitat": "Forests & Mountains", "heightMeters": "2.30m",
    "timeCycle": "Nocturnal (Night: 6 PM – 6 AM)", "iconEmoji": "🐴",
    "lore": "A tall, gaunt humanoid with the head and hooves of a horse, the Tikbalang lurks in deep forests and lonely mountain trails. It is a trickster that leads travelers astray, making them walk in endless circles no matter how far they go.",
    "culture": "Folk wisdom says you can break its spell by turning your shirt inside out or politely asking permission to pass. Legend holds that whoever plucks a single golden hair from its mane can tame the Tikbalang as a loyal servant.",
    "traits": ["Trickster", "Shapeshifter", "Swift", "Nocturnal"],
    "quiz": { "q": "How can a lost traveler break the disorienting illusion cast by a Tikbalang?", "opts": ["Turn their shirt inside out", "Offer a golden coin", "Throw garlic on the path"], "ans": 0 }
  },
  {
    "index": 1, "key": "kapre", "name": "Kapre", "rarity": "Common",
    "region": "Nationwide", "habitat": "Old Balete & Acacia Trees", "heightMeters": "2.90m",
    "timeCycle": "Nocturnal (Night: 6 PM – 6 AM)", "iconEmoji": "🌳",
    "lore": "A towering, dark, hairy giant that dwells in ancient trees, the Kapre is most often pictured perched on a thick branch smoking an enormous tobacco pipe. It can render itself invisible and watches passersby from the shadows.",
    "culture": "The glow of a floating ember and the heavy smell of tobacco at night are said to signal a Kapre nearby. Stories tell of Kapres who befriend, or even grow fond of, the humans living near their tree.",
    "traits": ["Giant", "Smoker", "Invisible", "Guardian"],
    "quiz": { "q": "What nocturnal scent and visual cue often reveals the hidden presence of a Kapre?", "opts": ["Heavy tobacco smoke and floating glowing embers", "A scent of rotten fish", "Sound of jingling brass bells"], "ans": 0 }
  },
  {
    "index": 2, "key": "aswang", "name": "Aswang", "rarity": "Rare",
    "region": "Visayas (esp. Capiz)", "habitat": "Villages at Night", "heightMeters": "1.60m",
    "timeCycle": "Nocturnal (Night: 6 PM – 6 AM)", "iconEmoji": "🦇",
    "lore": "More a category than a single being, the Aswang is a shapeshifting monster that appears human by day and turns predator by night, combining the witch, ghoul, and viscera-eater into one of the most feared figures in Filipino folklore.",
    "culture": "Communities defended themselves with garlic, salt, and blessed objects. The province of Capiz is so tied to Aswang lore that the stories there form a living part of local identity.",
    "traits": ["Shapeshifter", "Viscera-eater", "Fears salt & garlic"],
    "quiz": { "q": "What traditional domestic ingredients are used in Philippine folklore to repel an Aswang?", "opts": ["Rock salt, garlic, and blessed holy water", "Coconut oil and vinegar", "Red chili peppers and ashes"], "ans": 0 }
  },
  {
    "index": 3, "key": "manananggal", "name": "Manananggal", "rarity": "Rare",
    "region": "Visayas", "habitat": "Night Skies above Villages", "heightMeters": "1.75m",
    "timeCycle": "Nocturnal (Night: 6 PM – 6 AM)", "iconEmoji": "🩸",
    "lore": "A self-segmenting horror, the Manananggal detaches its upper torso from its waist, sprouts great bat-like wings, and flies through the night. It preys on sleeping victims, especially the pregnant, with a long thread-like tongue.",
    "culture": "Its abandoned lower half is its weakness: sprinkling salt, crushed garlic, or ash on it stops the two halves from rejoining, and the creature perishes when the sun rises.",
    "traits": ["Flight", "Self-segmenting", "Predator", "Nocturnal"],
    "quiz": { "q": "What prevents a Manananggal's flying upper torso from rejoining its lower half before dawn?", "opts": ["Sprinkling salt, garlic, or ash onto its abandoned lower torso", "Burning its bat wings with fire", "Throwing holy water at its shadow"], "ans": 0 }
  },
  {
    "index": 4, "key": "bakunawa", "name": "Bakunawa", "rarity": "Legendary",
    "region": "Visayas / Bicol", "habitat": "The Sea & Sky", "heightMeters": "3.20m",
    "timeCycle": "Nocturnal (Night: 6 PM – 6 AM)", "iconEmoji": "🐉",
    "lore": "A colossal sea serpent and moon-eating dragon, the Bakunawa rises from the deep to swallow the moon whole. Ancient Filipinos believed an eclipse was the moment the Bakunawa caught its silver prey.",
    "culture": "During eclipses, villagers rushed outside with pots, pans, and gongs, making deafening noise to startle the Bakunawa into spitting the moon back into the sky.",
    "traits": ["Colossal", "Serpentine", "Celestial"],
    "quiz": { "q": "What traditional ritual did ancient Filipinos perform during an eclipse to rescue the swallowed moon?", "opts": ["Banging loud metal pots, gongs, and drums to startle it", "Lighting giant ocean bonfires", "Singing sacred underwater hymns"], "ans": 0 }
  },
  {
    "index": 5, "key": "diwata", "name": "Diwata", "rarity": "Uncommon",
    "region": "Nationwide", "habitat": "Sacred Mountains, Rivers, & Forests", "heightMeters": "1.65m",
    "timeCycle": "Diurnal (Day: 6 AM – 6 PM)", "iconEmoji": "✨",
    "lore": "Benevolent nature spirits and goddesses who guard the mountains, streams, and wildlife. Maria Makiling of Mount Makiling is the most famous, radiating divine beauty and blessing those who honor the forest.",
    "culture": "Folk customs emphasize deep respect for natural springs and groves, offering small gifts or asking permission before foraging to avoid the Diwata's wrath.",
    "traits": ["Guardian", "Graceful", "Nature-bound", "Blesses or curses"],
    "quiz": { "q": "Which famous mountain is legendary for being guarded by the benevolent Diwata Maria Makiling?", "opts": ["Mount Makiling", "Mount Mayon", "Mount Apo"], "ans": 0 }
  },
  {
    "index": 6, "key": "nuno", "name": "Nuno sa Punso", "rarity": "Common",
    "region": "Nationwide", "habitat": "Earthen Termite Mounds", "heightMeters": "0.45m",
    "timeCycle": "Diurnal (Day: 6 AM – 6 PM)", "iconEmoji": "🗿",
    "lore": "An ancient, diminutive elder with a long white beard who resides in earthen anthills or termite mounds. Highly territorial and easily angered when his mound is disturbed.",
    "culture": "Filipinos respectfully murmur 'Tabi-tabi po' (excuse me) when passing mounds or cutting tall grass to avert sudden swellings, fevers, or curses.",
    "traits": ["Tiny", "Elder", "Easily angered", "Curse-giver"],
    "quiz": { "q": "What courtesy phrase is traditionally uttered when passing an earthen mound to respect the Nuno?", "opts": ["Tabi-tabi po", "Tao po", "Salamat po"], "ans": 0 }
  },
  {
    "index": 7, "key": "tiyanak", "name": "Tiyanak", "rarity": "Uncommon",
    "region": "Nationwide", "habitat": "Deep Forests & Isolated Paths", "heightMeters": "0.60m",
    "timeCycle": "Nocturnal (Night: 6 PM – 6 AM)", "iconEmoji": "👶",
    "lore": "A demonic creature that mimics the pathetic wails of an abandoned infant in the woods. When an unsuspecting traveler picks it up, it transforms into a sharp-clawed monster with needle-like fangs.",
    "culture": "Folklore warns never to follow baby cries into isolated bamboo groves. If misled, turning your clothes inside out disorients the demon.",
    "traits": ["Deceiver", "Mimic", "Predator"],
    "quiz": { "q": "How does the predatory Tiyanak lure unsuspecting travelers into deep forest thickets?", "opts": ["By mimicking the helpless crying of a human infant", "By playing golden bamboo flutes", "By rolling sparkling jewels across paths"], "ans": 0 }
  },
  {
    "index": 8, "key": "engkanto", "name": "Engkanto", "rarity": "Uncommon",
    "region": "Nationwide", "habitat": "Invisible Cities & Sacred Trees", "heightMeters": "1.75m",
    "timeCycle": "Diurnal (Day: 6 AM – 6 PM)", "iconEmoji": "🧝",
    "lore": "Fair-skinned, tall, and strikingly elegant humanoid spirits who reside in hidden golden cities overlapping ancient trees. Associated with the scent of wild flowers and sudden trances.",
    "culture": "Humans struck by 'napadpad' or bewitchment by an Engkanto are warned never to eat black rice in the spirit realm, or they can never return to the human world.",
    "traits": ["Enchanting", "Dual-natured", "Unseen", "Fateful"],
    "quiz": { "q": "According to legend, what must an abducted human avoid consuming in the spirit realm of an Engkanto?", "opts": ["Black rice or spirit food", "Cold river water", "Ripe wild mangoes"], "ans": 0 }
  },
  {
    "index": 9, "key": "sirena", "name": "Sirena", "rarity": "Uncommon",
    "region": "Coastal Philippines", "habitat": "Reefs, Deep Lagoons, & Open Seas", "heightMeters": "1.60m",
    "timeCycle": "Diurnal (Day: 6 AM – 6 PM)", "iconEmoji": "🧜‍♀️",
    "lore": "A sea maiden with a human upper body and a gleaming fish tail. Possesses a captivating, ethereal voice that enchants fishermen and draws boats toward treacherous reefs.",
    "culture": "Coastal fisherfolk regard the Sirena with a mixture of reverence and fear, dropping offerings of tobacco and rice into deep lagoons before major voyages.",
    "traits": ["Aquatic", "Alluring", "Song-singer"],
    "quiz": { "q": "What enchanting ability does the Philippine Sirena employ to lure fishermen to reefs?", "opts": ["Irresistible melodic singing", "Glowing phosphorescent scales", "Creating illusory phantom ships"], "ans": 0 }
  },
  {
    "index": 10, "key": "siyokoy", "name": "Siyokoy", "rarity": "Uncommon",
    "region": "Visayas & Coastal Philippines", "habitat": "Ocean Trenches & Murky Inlets", "heightMeters": "1.65m",
    "timeCycle": "Nocturnal (Night: 6 PM – 6 AM)", "iconEmoji": "🦎",
    "lore": "A terrifying aquatic humanoid covered in green scales, webbed clawed hands, and razor-sharp fins. The ferocious predator counterpart to the Sirena.",
    "culture": "Unlike the seductive Sirena, the Siyokoy is purely predatory, dragging unwary swimmers and small boats down into dark ocean trenches.",
    "traits": ["Aquatic", "Monstrous", "Predator", "Scaly"],
    "quiz": { "q": "How does the Siyokoy differ fundamentally in disposition from the Sirena?", "opts": ["It is a ferocious, purely predatory scaled creature with claws", "It only lives in fresh mountain springs", "It can transform into a winged bird"], "ans": 0 }
  },
  {
    "index": 11, "key": "santelmo", "name": "Santelmo", "rarity": "Rare",
    "region": "Nationwide", "habitat": "Fields, Marshes, & Shorelines", "heightMeters": "0.55m",
    "timeCycle": "Nocturnal (Night: 6 PM – 6 AM)", "iconEmoji": "🔥",
    "lore": "A floating ball of ethereal flame that drifts across fields, swamps, and shorelines after dark. Believed to be the roaming spirit of a deceased sailor or tragic soul.",
    "culture": "Witnesses are advised not to follow or challenge the flame, as it bounces away rapidly, leading travelers into quicksand, swamps, or over cliffs.",
    "traits": ["Ethereal", "Luminous", "Unpredictable", "Airborne"],
    "quiz": { "q": "What physical form does the wandering spirit Santelmo exhibit in folklore?", "opts": ["A floating, luminous orb of supernatural flame", "A blazing skeleton riding a horse", "A glowing golden serpent"], "ans": 0 }
  },
  {
    "index": 12, "key": "duwende", "name": "Duwende", "rarity": "Common",
    "region": "Nationwide", "habitat": "Gardens, Old Houses, & Earth", "heightMeters": "0.55m",
    "timeCycle": "Diurnal (Day: 6 AM – 6 PM)", "iconEmoji": "🍄",
    "lore": "Small goblin or dwarf spirits categorized into White (benevolent, wealth-bringing) and Black (mischievous, spiteful, curse-bringing).",
    "culture": "Families leave sweet rice cakes and small treats in home corners to stay in the White Duwende's favor and placate mischievous spirits.",
    "traits": ["Tiny", "Domestic", "Mischievous", "Curse-giver"],
    "quiz": { "q": "Which type of Duwende is traditionally regarded as a bringer of good luck and fortune?", "opts": ["White Duwende (Duwendeng Puti)", "Black Duwende (Duwendeng Itim)", "Red Duwende (Duwendeng Pula)"], "ans": 0 }
  },
  {
    "index": 13, "key": "batibat", "name": "Batibat", "rarity": "Rare",
    "region": "Ilocos Region (Luzon)", "habitat": "Old Hardwood & Bedposts", "heightMeters": "2.10m",
    "timeCycle": "Nocturnal (Night: 6 PM – 6 AM)", "iconEmoji": "👵",
    "lore": "A massive, obese hag from Ilocano folklore who dwells in old trees. When her tree is felled to build bedposts, she sits upon the sleeper's chest, inducing 'bangungot' (fatal sleep paralysis).",
    "culture": "To break free from a Batibat's paralyzing weight, Ilocano lore teaches the sleeper to violently wiggle their big toe or bite their thumb.",
    "traits": ["Nocturnal", "Heavy", "Vengeful", "Sleep-bringer"],
    "quiz": { "q": "In Ilocano folklore, what bodily movement can break the sleep paralysis induced by a Batibat?", "opts": ["Violently wiggling one's big toe or biting the thumb", "Shouting a sacred prayer loudly", "Holding a raw egg in the palm"], "ans": 0 }
  },
  {
    "index": 14, "key": "white_lady", "name": "White Lady", "rarity": "Uncommon",
    "region": "Nationwide", "habitat": "Quiet Intersections & Balete Roads", "heightMeters": "1.65m",
    "timeCycle": "Nocturnal (Night: 6 PM – 6 AM)", "iconEmoji": "👻",
    "lore": "A sorrowful, ethereal apparition of a woman dressed in flowing white, floating along quiet streets, foggy bends, and old balete-lined avenues like Balete Drive.",
    "culture": "Drivers are advised not to look directly into their rearview mirrors when passing lonely balete roads late at night, or to carry protective agimat amulets.",
    "traits": ["Ghostly", "Vengeful", "Appears on roads", "Silent"],
    "quiz": { "q": "Which famous Manila thoroughfare is renowned for legendary White Lady sightings?", "opts": ["Balete Drive in Quezon City", "Rizal Avenue", "Roxas Boulevard"], "ans": 0 }
  },
  {
    "index": 15, "key": "bungisngis", "name": "Bungisngis", "rarity": "Uncommon",
    "region": "Tagalog Region (Bataan & Laguna)", "habitat": "Dense Jungles & Mountain Caves", "heightMeters": "2.70m",
    "timeCycle": "Diurnal (Day: 6 AM – 6 PM)", "iconEmoji": "👁️",
    "lore": "A hulking, one-eyed cyclopean giant with two large tusks protruding from his mouth, constantly laughing and grinning with booming laughter.",
    "culture": "Despite his frightening strength, the Bungisngis is easily tricked by clever travelers using mirrors or echoing sounds.",
    "traits": ["Giant", "One-eyed", "Immensely strong", "Always laughing"],
    "quiz": { "q": "What peculiar behavioral trait gives the cyclopean giant Bungisngis his name?", "opts": ["His continuous, booming grinning laughter ('ngisi')", "His silent spectral gliding", "His habit of roaring like thunder"], "ans": 0 }
  }
];

// Diagram definitions
const DIAGRAMS = {
  "arch": {
    "title": "Figure 1. 3-Tier System Architecture of Eng-Kanto",
    "desc": "Presents the decoupled architecture consisting of the Presentation Layer (Unity uGUI/URP Canvas), Application Logic (Procedural Spawns, Haversine GPS, AR Surface Placement), and Data Layer (Local JSON Profile Store and Supabase PostgREST sync).",
    "img": "assets/images/diagrams/arch_fig01_system_architecture.png"
  },
  "workflow": {
    "title": "Figure 5. End-to-End Master Gameplay Workflow",
    "desc": "Illustrates the complete user journey: splash bootstrap, offline guest/cloud authentication, geospatial radar scanning, proximity encounter alert (<6.0m), markerless AR plane hit testing, agimat capture, and cultural codex quiz.",
    "img": "assets/images/diagrams/flowchart_fig07_master_gameplay.png"
  },
  "nav": {
    "title": "Figure 5B. Dual-Mode Geospatial Navigation & Radar Spawning Flowchart",
    "desc": "Details the algorithmic switching between outdoor GPS satellite coordinates and indoor dead-reckoning pedometer step detection with real-time magnetometer compass heading.",
    "img": "assets/images/diagrams/flowchart_fig07b_dual_nav.png"
  },
  "ar": {
    "title": "Figure 5C. AR Surface Plane Anchoring & Agimat Capture Flowchart",
    "desc": "Demonstrates ARCore feature point plane estimation, raycast ground placement, folklore height scaling (0.45m to 3.20m), camera forward alignment, and parabolic agimat physics collision.",
    "img": "assets/images/diagrams/flowchart_fig07c_ar_encounter.png"
  },
  "quiz": {
    "title": "Figure 5D. Cultural Bestiary Codex & Knowledge Assessment Flowchart",
    "desc": "Maps the 64-bit integer bitmask persistence, unlocking rich indigenous narratives and launching the 5-question Babaylan lore assessment quiz awarding Ginto currency and XP.",
    "img": "assets/images/diagrams/flowchart_fig07d_folklore_quiz.png"
  },
  "erd": {
    "title": "Figure 4. Database Schema & Entity Relationship Model",
    "desc": "Shows the relational database schema in Supabase PostgREST: profiles, inventory, unlocked_creatures, quests, and assessment_scores with offline-first client replication.",
    "img": "assets/images/diagrams/erd_fig04_database_schema.png"
  }
};

let allCreatures = [];
let currentFilter = "all";
let currentSearch = "";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initCreatures();
  initDiagramTabs();
  initAudio();
  initModal();
});

// Mobile Navbar Toggle
function initNavbar() {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => menu.classList.remove("open"));
    });
  }
}

// Load and render creatures
async function initCreatures() {
  try {
    const res = await fetch("assets/data/creatures.json");
    if (res.ok) {
      allCreatures = await res.json();
    } else {
      allCreatures = FALLBACK_CREATURES;
    }
  } catch (e) {
    allCreatures = FALLBACK_CREATURES;
  }

  // Ensure quiz data exists
  allCreatures = allCreatures.map((c, i) => {
    const fb = FALLBACK_CREATURES.find(f => f.key === c.key) || FALLBACK_CREATURES[i % FALLBACK_CREATURES.length];
    return { ...fb, ...c, quiz: fb.quiz };
  });

  renderCreatures();

  // Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderCreatures();
    });
  });

  // Search Input
  const searchInput = document.getElementById("creatureSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      renderCreatures();
    });
  }
}

function renderCreatures() {
  const grid = document.getElementById("creaturesGrid");
  if (!grid) return;

  const filtered = allCreatures.filter(c => {
    // Filter by category
    if (currentFilter === "Nocturnal" && !c.timeCycle.includes("Nocturnal")) return false;
    if (currentFilter === "Diurnal" && !c.timeCycle.includes("Diurnal")) return false;
    if (["Common", "Uncommon", "Rare", "Legendary"].includes(currentFilter) && c.rarity !== currentFilter) return false;

    // Filter by search
    if (currentSearch) {
      const match = c.name.toLowerCase().includes(currentSearch) ||
                    c.region.toLowerCase().includes(currentSearch) ||
                    c.lore.toLowerCase().includes(currentSearch) ||
                    (c.traits && c.traits.some(t => t.toLowerCase().includes(currentSearch)));
      if (!match) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #94a3b8;">
        <p style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔍 No spirits match your filter.</p>
        <p>Try clearing your search query or selecting "All Spirits".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(c => `
    <div class="creature-card" onclick="openCreatureModal('${c.key}')">
      <div class="c-card-top">
        <span class="c-icon">${c.iconEmoji || '👹'}</span>
        <span class="c-rarity rarity-${c.rarity}">${c.rarity}</span>
      </div>
      <h3 class="c-name">${c.name}</h3>
      <span class="c-region">📍 ${c.region}</span>
      <p class="c-lore-snip">${c.lore.length > 115 ? c.lore.substring(0, 115) + '...' : c.lore}</p>
      <div class="c-footer">
        <span class="c-height">Height: ${c.heightMeters || '1.65m'}</span>
        <span>${c.timeCycle.includes("Nocturnal") ? "🌙 Night" : "☀️ Day"}</span>
      </div>
    </div>
  `).join("");
}

// Diagram Tabs Lightbox
function initDiagramTabs() {
  const tabs = document.querySelectorAll(".d-tab");
  const img = document.getElementById("activeDiagramImg");
  const caption = document.getElementById("diagramCaption");
  const link = document.getElementById("viewFullDiagramBtn");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const key = tab.getAttribute("data-diagram");
      const data = DIAGRAMS[key];
      if (data && img && caption) {
        img.src = data.img;
        img.alt = data.title;
        caption.querySelector("h3").innerText = data.title;
        caption.querySelector("p").innerText = data.desc;
        if (link) link.href = data.img;
      }
    });
  });

  if (link && DIAGRAMS["arch"]) {
    link.href = DIAGRAMS["arch"].img;
  }
}

// Modal handling
function initModal() {
  const modal = document.getElementById("creatureModal");
  const overlay = document.getElementById("modalOverlay");
  const close = document.getElementById("modalClose");

  if (overlay) overlay.addEventListener("click", closeModal);
  if (close) close.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function openCreatureModal(key) {
  const c = allCreatures.find(item => item.key === key);
  if (!c) return;

  const modal = document.getElementById("creatureModal");
  document.getElementById("modalEmoji").innerText = c.iconEmoji || "👹";
  document.getElementById("modalName").innerText = c.name;
  document.getElementById("modalRarity").innerText = c.rarity;
  document.getElementById("modalRarity").className = `modal-rarity rarity-${c.rarity}`;
  document.getElementById("modalRegion").innerText = `Region: ${c.region}`;
  document.getElementById("modalHeight").innerText = `AR Height: ${c.heightMeters || '1.65m'}`;
  document.getElementById("modalTime").innerText = c.timeCycle.includes("Nocturnal") ? "🌙 Nocturnal (Night)" : "☀️ Diurnal (Day)";
  document.getElementById("modalHabitat").innerText = `Habitat: ${c.habitat || 'Nature'}`;
  document.getElementById("modalLore").innerText = c.lore;
  document.getElementById("modalCulture").innerText = c.culture || "Traditional Philippine folklore advises caution and respect when traversing their domain.";

  // Traits
  const traitsBox = document.getElementById("modalTraits");
  if (traitsBox) {
    traitsBox.innerHTML = (c.traits || ["Mythological Spirit"]).map(t => `<span class="trait-tag">${t}</span>`).join("");
  }

  // Quiz Setup
  const qBox = document.getElementById("quizQuestion");
  const optBox = document.getElementById("quizOptions");
  const feedback = document.getElementById("quizFeedback");
  feedback.style.display = "none";

  if (c.quiz && qBox && optBox) {
    qBox.innerText = c.quiz.q;
    optBox.innerHTML = c.quiz.opts.map((opt, idx) => `
      <button class="quiz-opt" onclick="checkQuizAnswer(this, ${idx === c.quiz.ans})">${String.fromCharCode(65 + idx)}. ${opt}</button>
    `).join("");
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("creatureModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
}

window.openCreatureModal = openCreatureModal;
window.closeModal = closeModal;

window.checkQuizAnswer = function(btn, isCorrect) {
  const parent = btn.parentElement;
  parent.querySelectorAll(".quiz-opt").forEach(b => {
    b.disabled = true;
  });

  const feedback = document.getElementById("quizFeedback");
  feedback.style.display = "block";

  if (isCorrect) {
    btn.classList.add("correct");
    feedback.style.color = "#34d399";
    feedback.innerText = "✓ Correct! Babaylan knowledge verified. +50 EXP and +10 Ginto awarded in the codex!";
  } else {
    btn.classList.add("incorrect");
    feedback.style.color = "#f87171";
    feedback.innerText = "✗ Incorrect. Review the indigenous folklore text above and re-test!";
  }
};

// Ambient Audio Controller
function initAudio() {
  const audio = document.getElementById("portalAudio");
  const btn = document.getElementById("sfxToggleBtn");
  const icon = document.getElementById("sfxIcon");
  if (!audio || !btn) return;

  let isPlaying = false;
  btn.addEventListener("click", () => {
    if (!isPlaying) {
      audio.volume = 0.35;
      audio.play().then(() => {
        isPlaying = true;
        if (icon) icon.innerText = "🔈";
        btn.classList.add("btn-primary");
        btn.classList.remove("btn-ghost");
      }).catch(e => {
        console.log("Audio play blocked by browser policy:", e);
      });
    } else {
      audio.pause();
      isPlaying = false;
      if (icon) icon.innerText = "🔇";
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-ghost");
    }
  });
}
