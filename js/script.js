// ====== TRAVEL DATA ======
const travelData = [
  // ----- BEACHES -----
  {
    category: "beach",
    name: "Maldives Beach",
    description: "Crystal clear turquoise waters and white sand — a true paradise.",
    image: "images/beach1.jpg"
  },
  {
    category: "beach",
    name: "Bora Bora Beach",
    description: "Famous for its overwater bungalows and vibrant coral reefs.",
    image: "images/beach2.jpg"
  },
  // ----- TEMPLES -----
  {
    category: "temple",
    name: "Golden Temple",
    description: "The holiest Gurdwara of Sikhism, located in Amritsar, India.",
    image: "images/temple1.jpg"
  },
  {
    category: "temple",
    name: "Angkor Wat",
    description: "A massive Buddhist temple complex in Cambodia and a UNESCO site.",
    image: "images/temple2.jpg"
  },
  // ----- COUNTRIES -----
  {
    category: "country",
    name: "Japan",
    description: "Land of the rising sun — cherry blossoms, sushi, and technology.",
    image: "images/country1.jpg"
  },
  {
    category: "country",
    name: "Italy",
    description: "Home to Rome, Venice, the Colosseum, and world-class cuisine.",
    image: "images/country2.jpg"
  }
];

// ====== SEARCH FUNCTION ======
function searchRecommendation() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const resultsTitle = document.getElementById("resultsTitle");
  const resultsContainer = document.getElementById("resultsContainer");

  resultsContainer.innerHTML = "";

  if (query === "") {
    resultsTitle.style.display = "none";
    resultsContainer.innerHTML = "<p>Please type something to search (try: beach, temple, country).</p>";
    resultsContainer.style.display = "block";
    return;
  }

  // Filter results by category OR name
  const matches = travelData.filter(item =>
    item.category.toLowerCase().includes(query) ||
    item.name.toLowerCase().includes(query)
  );

  resultsTitle.style.display = "block";
  resultsTitle.textContent = `Search Results for "${query}" (${matches.length} found)`;

  if (matches.length === 0) {
    resultsContainer.innerHTML = "<p>No recommendations found. Try 'beach', 'temple', or 'country'.</p>";
    return;
  }

  matches.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    `;
    resultsContainer.appendChild(card);
  });
}

// ====== CLEAR BUTTON ======
function clearResults() {
  document.getElementById("searchInput").value = "";
  document.getElementById("resultsTitle").style.display = "none";
  document.getElementById("resultsContainer").innerHTML = "";
}

// ====== CONTACT FORM ======
function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const status = document.getElementById("formStatus");

  status.textContent = `✅ Thank you, ${name}! Your message from ${email} has been sent.`;
  status.style.color = "green";

  document.getElementById("contactForm").reset();
}

// ====== ENTER KEY TRIGGERS SEARCH ======
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        searchRecommendation();
      }
    });
  }
});