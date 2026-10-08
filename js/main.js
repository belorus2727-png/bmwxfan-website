
const partners = [
  {
    name: "Bavaria Service",
    category: "Автосервис",
    city: "Riga, Latvia",
    discount: "Скидка BMW X FAN",
    image: "images/partner-service.svg",
    phone: "#"
  },
  {
    name: "AutoSOS Latvia",
    category: "Эвакуатор 24/7",
    city: "Riga, Latvia",
    discount: "Условия для клуба",
    image: "images/partner-tow.svg",
    phone: "#"
  },
  {
    name: "Detailing Room",
    category: "Химчистка / детейлинг",
    city: "Riga, Latvia",
    discount: "Скидка BMW X FAN",
    image: "images/partner-detail.svg",
    phone: "#"
  },
  {
    name: "GearBox Pro",
    category: "Ремонт коробок",
    city: "Riga, Latvia",
    discount: "Спеццена для клуба",
    image: "images/partner-gearbox.svg",
    phone: "#"
  },
  {
    name: "BMW Electro",
    category: "Диагностика / автоэлектрик",
    city: "Riga, Latvia",
    discount: "Приоритет BMW X FAN",
    image: "images/partner-electro.svg",
    phone: "#"
  },
  {
    name: "BMW Parts LV",
    category: "Запчасти и сервис",
    city: "Riga, Latvia",
    discount: "Скидка BMW X FAN",
    image: "images/partner-parts.svg",
    phone: "#"
  }
];

const partnersGrid = document.getElementById("partnersGrid");
partnersGrid.innerHTML = partners.map((p) => `
  <article class="partner-card">
    <img src="${p.image}" alt="${p.name}">
    <div class="partner-body">
      <div class="partner-top">
        <span class="partner-category">${p.category}</span>
        <span class="partner-discount">${p.discount}</span>
      </div>
      <h3>${p.name}</h3>
      <div class="partner-location">📍 ${p.city}</div>
      <div class="partner-actions">
        <a href="${p.phone}">Подробнее →</a>
        <a href="${p.phone}">Связаться</a>
      </div>
    </div>
  </article>
`).join("");

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
