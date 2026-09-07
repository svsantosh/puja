const satyaItems = [
  ["Turmeric", "1 pack"], ["Kumkum", "1 pack"], ["Cotton wicks", "1 pack"],
  ["Sandalwood powder", "1 pack"], ["Betel (Paan) leaves", "30"],
  ["Betel nuts (Supari), round/black", "25"], ["Incense sticks (Agarbattis)", "1 pack"],
  ["Camphor (Harathi Karpooram)", "1 pack"], ["Coconut oil or ghee for Deepam", "1 small bottle"],
  ["Mango leaves", "5", true], ["Quarters (coins)", "50"], ["Cotton towel preferred", "1"],
  ["Blouse piece (red, green or yellow)", "1"], ["Raw rice", "5 lb"], ["Rose water", "1 bottle"],
  ["Flowers", "50"], ["Flower garland", "1"], ["Fruits—whole and cut", "5 varieties, 3 each"],
  ["Coconuts", "7"], ["Panchamritam—milk, yogurt, ghee, honey and sugar, separated in bowls", "1 set"],
  ["Prasadam (wheat sooji)—dry Panjiri or wet Halwa/Rava Kesari", "As needed"],
  ["Shri Satyanarayana Swami picture", "1"], ["Shri Vishnu or Shri Krishna metal deity", "1"],
  ["Deepam/lamp", "2"], ["Kalash/Lota", "1"], ["Matchbox or lighter", "1"],
  ["Mats—1 for Panditji and 2 for Yajamani/couple", "3"], ["Paper towel roll", "1"],
  ["Peetha/Chowki", "1"], ["Uddarani and Pancha Patra (cup and spoon)", "2 sets"],
  ["Ghanta/Bell", "1"], ["Medjool or wet dates", "15"]
];

const services = [
  {
    id: "satyanarayana", name: "Shri Satya Narayana Vratam", symbol: "श्री",
    description: "A devotional ceremony performed for family well-being, gratitude and divine blessings.",
    image: "media/satyanarayana-supplied.jpg", alt: "Shri Satya Narayana Vratam ceremony", items: satyaItems
  },
  {
    id: "griha-pravesham", name: "Grha Pravesham", symbol: "गृह",
    description: "Traditional prayers and rituals to bless a new home and its residents.",
    image: "media/griha-pravesham-supplied.jpg", alt: "A Grha Pravesham puja ceremony",
    links: [["View Shri Satya Narayana Vratam items", "satyanarayana"], ["View Homam/Havan items", "homam"]],
    note: "Please arrange all items from both linked checklists, plus the additional items below.",
    items: [
      ["Ash pumpkin", "1"], ["Green limes", "12"], ["Nava Dhanyas", "1 pack"],
      ["Kalash/Lota", "1"], ["Coconuts", "3"],
      ["Turmeric, Kumkum and Chandan/Gandham/Sandalwood powder", "1 pack each"],
      ["Silver cow-and-calf set—for entry and donation", "1"]
    ]
  },
  {
    id: "homam", name: "Homam / Havan", symbol: "अग्नि",
    description: "A sacred fire ceremony offered for purification, peace and auspicious beginnings.",
    image: "media/homam.webp", alt: "Sacred Havan fire ceremony",
    items: [
      ["Aluminum trays", "2"], ["Rice flour", "1 cup"], ["Havan/Homa Samagri", "1 packet"],
      ["Dry coconuts", "2"], ["Camphor", "1 pack"], ["Ghee", "¼ liter"],
      ["Small metal bowls", "4"], ["Turmeric", "1 small pack"], ["Kumkum", "1 small pack"],
      ["Betel (Paan) leaves", "5"], ["Flowers", "10"],
      ["Prasadam—Sweet Pongal, Rava Kesari or Halwa", "1 cup"],
      ["Cotton blouse cloth", "1"], ["Ghanta/Bell", "1"]
    ]
  },
  {
    id: "rudrabhishekam", name: "Rudrabhishekam / Rudra Abhishekam", symbol: "ॐ",
    description: "A reverent abhishekam and worship of Lord Shiva with Vedic chanting.",
    image: "media/rudrabhishekam-generated.png", alt: "Milk being poured over a Spatika Shiva Linga during Abhishekam",
    items: [
      ["Turmeric", "1 pack"], ["Kumkum", "1 pack"], ["Cotton wicks", "1 pack"],
      ["Sandalwood powder", "1 pack"], ["Betel (Paan) leaves", "5"], ["Betel nuts (Supari), round/black", "5"],
      ["Incense sticks (Agarbattis)", "1 pack"], ["Camphor (Harathi Karpooram)", "1 pack"],
      ["Coconut oil or ghee for Deepam", "1 small bottle"], ["Mango leaves", "5", true],
      ["Quarters (coins)", "5"], ["Large white towel", "1"], ["Rose water", "1 bottle"],
      ["Flowers", "50"], ["Fruits—whole and cut", "5 varieties, 2 each"], ["Coconut", "1"],
      ["Panchamritam—milk, yogurt, ghee, honey and sugar, separated in bowls", "1 set"],
      ["Fruit juices for Abhishekam", "2 varieties"], ["Shiva Lingam", "1"], ["Deepam/lamp", "2"],
      ["Kalash/Lota", "1"], ["Matchbox or lighter", "1"],
      ["Mats—1 for Panditji and 2 for Yajamani/couple", "3"], ["Paper towel roll", "1"],
      ["Peetha/Chowki", "1"], ["Uddarani and Pancha Patra (cup and spoon)", "2 sets"],
      ["Ghanta/Bell", "1"], ["Bilva/Bel leaves", "5"], ["Large bowls for collecting Abhishekam liquids", "2"]
    ]
  },
  {
    id: "anna-prashana", name: "Anna Prashana", symbol: "अन्न",
    description: "A joyful ceremony marking a child’s first traditional meal of solid food.",
    image: "media/annaprashana-generated.png", alt: "A ceremonial bowl of sweet rice prepared for Anna Prashana", items: null
  },
  {
    id: "nama-karanam", name: "Nama Karanam", symbol: "नाम",
    description: "A traditional naming ceremony welcoming and blessing a child.",
    image: "media/nama-karanam-generated.png", alt: "An empty flower-decorated cradle prepared for Nama Karanam", items: null
  },
  {
    id: "kedareshwara", name: "Shri Kedareshwara Vratam", symbol: "शिव",
    description: "Sacred worship of Shri Kedareshwara for devotion, harmony and divine blessings.",
    image: "media/kedareshwara.webp", alt: "Traditional painting of Parvati worshipping Shiva",
    items: [
      ["Turmeric", "1 pack"], ["Kumkum", "1 pack"], ["Cotton wicks", "1 pack"],
      ["Sandalwood powder", "1 pack"], ["Betel (Paan) leaves", "50"],
      ["Betel nuts (Supari), round/black", "50"], ["Dry dates (Kharjuram)", "50"],
      ["Incense sticks (Agarbattis)", "1 pack"], ["Camphor (Harathi Karpooram)", "1 pack"],
      ["Coconut oil or ghee for Deepam", "1 small bottle"], ["Nava Dhanyam—separate packs", "1 set", true],
      ["Mango leaves", "5", true], ["Quarters (coins)", "50"], ["Large white towel", "1"],
      ["Blouse piece (red, green or yellow)", "1"], ["Raw rice", "5 lb"], ["Rose water", "1 bottle"],
      ["Flowers", "50"], ["Flower garland", "1"], ["Fruits", "5 varieties, 3 each"], ["Coconuts", "7"],
      ["Panchamritam—milk, yogurt, ghee, honey and sugar, separated in bowls", "1 set"],
      ["Prasadam (wheat sooji)—dry Panjiri or Halwa", "As needed"],
      ["Shri Uma Maheshwara Swami picture", "1"], ["Shiva Lingam", "1"], ["Deepam/lamp", "2"],
      ["Kalash/Lota", "1"], ["Matchbox or lighter", "1"],
      ["Mats—1 for Panditji and 2 for Yajamani/couple", "3"], ["Paper towel roll", "1"],
      ["Peetha/Chowki", "1"], ["Uddarani and Pancha Patra (cup and spoon)", "2 sets"], ["Ghanta/Bell", "1"]
    ]
  },
  {
    id: "dhoti-function", name: "Dhoti Function", symbol: "शुभ",
    description: "A traditional coming-of-age ceremony celebrating a young man’s transition and family blessings.",
    image: "media/dhoti-function-generated.png", alt: "A traditional white-and-gold dhoti arranged for a Hindu ceremony",
    items: null
  }
];

const COOKIE_NAME = "pujaChecklist";

function readChecklistCookie() {
  const prefix = `${COOKIE_NAME}=`;
  const entry = document.cookie.split("; ").find(cookie => cookie.startsWith(prefix));
  if (!entry) return {};
  try {
    const value = JSON.parse(decodeURIComponent(entry.slice(prefix.length)));
    return value && typeof value === "object" ? value : {};
  } catch {
    return {};
  }
}

function saveChecklistCookie(state) {
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(state))}; Max-Age=31536000; Path=/; SameSite=Lax; Secure`;
}

let checklistState = readChecklistCookie();
const checkedItemsFor = serviceId => new Set(Array.isArray(checklistState[serviceId]) ? checklistState[serviceId] : []);

function itemTable(service) {
  if (!service.items) return `<p class="coming-soon">The required-items list will be added soon. Please call for preparation details.</p>`;
  const checked = checkedItemsFor(service.id);
  return `
    <div class="checklist-toolbar">
      <span class="checklist-progress" data-progress>${checked.size} of ${service.items.length} checked</span>
      <div class="checklist-actions">
        <button type="button" data-action="download">Download list</button>
        <button type="button" data-action="print">Print / Save PDF</button>
        <button type="button" class="clear-button" data-action="clear">Clear checks</button>
      </div>
    </div>
    <p class="checklist-note">Your checked items are saved on this device.</p>
    <div class="table-wrap"><table>
      <thead><tr><th class="check-column"><span class="sr-only">Prepared</span></th><th>Item</th><th>Quantity</th></tr></thead>
      <tbody>${service.items.map(([item, qty, optional], index) => `
        <tr class="${checked.has(index) ? "checked-row" : ""}">
          <td class="check-column"><input class="item-check" type="checkbox" data-item-index="${index}" aria-label="Mark ${item} as prepared" ${checked.has(index) ? "checked" : ""}></td>
          <td>${item}${optional ? ' <span class="optional">Optional</span>' : ""}</td><td>${qty}</td>
        </tr>`).join("")}
      </tbody>
    </table></div>`;
}

document.querySelector("#service-grid").innerHTML = services.map((service, index) => `
  <details class="service-card" id="${service.id}">
    <summary>
      <img src="${service.image}" alt="${service.alt}" loading="lazy">
      <div class="card-copy">
        <div class="service-number">${String(index + 1).padStart(2, "0")}</div>
        <div class="service-symbol" aria-hidden="true">${service.symbol}</div>
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <span class="open-label">View details <b aria-hidden="true">＋</b></span>
      </div>
    </summary>
    <div class="service-detail">
      ${service.links ? `<nav class="related-links" aria-label="Related item lists">${service.links.map(([label, id]) => `<a href="#${id}" data-open="${id}">${label} →</a>`).join("")}</nav>` : ""}
      ${service.note ? `<p class="service-note">${service.note}</p>` : ""}
      <h4 data-print-title="${service.name}">Required items</h4>
      ${itemTable(service)}
      <a class="detail-call" href="tel:+14049364387">Questions? Call (404) 936-4387</a>
    </div>
  </details>
`).join("");

const serviceGrid = document.querySelector("#service-grid");

function refreshServiceChecklist(card, service) {
  const table = card.querySelector(".table-wrap");
  const toolbar = card.querySelector(".checklist-toolbar");
  const note = card.querySelector(".checklist-note");
  const container = document.createElement("div");
  container.innerHTML = itemTable(service);
  toolbar.replaceWith(container.querySelector(".checklist-toolbar"));
  note.replaceWith(container.querySelector(".checklist-note"));
  table.replaceWith(container.querySelector(".table-wrap"));
}

serviceGrid.addEventListener("change", event => {
  const checkbox = event.target.closest(".item-check");
  if (!checkbox) return;
  const card = checkbox.closest(".service-card");
  const service = services.find(entry => entry.id === card.id);
  const selected = checkedItemsFor(service.id);
  const itemIndex = Number(checkbox.dataset.itemIndex);
  if (checkbox.checked) selected.add(itemIndex);
  else selected.delete(itemIndex);
  checklistState[service.id] = [...selected].sort((a, b) => a - b);
  saveChecklistCookie(checklistState);
  checkbox.closest("tr").classList.toggle("checked-row", checkbox.checked);
  card.querySelector("[data-progress]").textContent = `${selected.size} of ${service.items.length} checked`;
});

serviceGrid.addEventListener("click", event => {
  const action = event.target.closest("[data-action]");
  if (!action) return;
  const card = action.closest(".service-card");
  const service = services.find(entry => entry.id === card.id);
  if (action.dataset.action === "clear") {
    checklistState[service.id] = [];
    saveChecklistCookie(checklistState);
    refreshServiceChecklist(card, service);
  }
  if (action.dataset.action === "download") {
    const selected = checkedItemsFor(service.id);
    const quote = value => `"${String(value).replaceAll('"', '""')}"`;
    const rows = [["Prepared", "Item", "Quantity"], ...service.items.map(([item, qty], index) => [selected.has(index) ? "Yes" : "No", item, qty])];
    const csv = `\uFEFF${rows.map(row => row.map(quote).join(",")).join("\r\n")}`;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    link.download = `${service.id}-puja-items.csv`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  }
  if (action.dataset.action === "print") {
    document.body.classList.add("printing-checklist");
    card.classList.add("print-target");
    window.print();
  }
});

window.addEventListener("afterprint", () => {
  document.body.classList.remove("printing-checklist");
  document.querySelector(".print-target")?.classList.remove("print-target");
});

document.querySelector("#year").textContent = new Date().getFullYear();
function openFromHash() {
  const target = document.getElementById(location.hash.slice(1));
  if (target?.tagName === "DETAILS") target.open = true;
}
openFromHash();
window.addEventListener("hashchange", openFromHash);

const credits = document.createElement("section");
credits.id = "image-credits";
credits.className = "credits";
credits.innerHTML = `
  <details>
    <summary>Image credits and licenses</summary>
    <p>Wikimedia Commons images are resized or cropped from their originals.</p>
    <ul>
      <li><a href="https://commons.wikimedia.org/wiki/File:(A)_puja_fire,_Havanam.jpg">Havanam</a> — Ravigopal Kesari, CC BY-SA 2.0</li>
      <li><a href="https://commons.wikimedia.org/wiki/File:Shiva_PARVATI.jpg">Parvati worshipping Shiva</a> — LACMA, public domain</li>
    </ul>
  </details>
`;
document.querySelector("main").appendChild(credits);
