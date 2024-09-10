/** @format */

// Get Controllers and Controllees
let shortenButton = document.querySelector(".shorten");
let inputValue = document.querySelector(".input");
let actualValue = null;
let productEl = document.querySelector(".product");
let hamburgerMenu = document.querySelector(".hamburger");
let modalMenu = document.querySelector(".modal");
let overlayMenu = document.querySelector(".overlay");
let navBar = document.querySelector(".nav");
let navChildren = document.querySelectorAll(".child");
let darkMode = document.querySelector(".dark");
let mainElement = document.querySelector(".main");
let products = document.querySelector(".products");
let brands = document.querySelector(".brands");
const here = document.getElementById("here");
let section = document.querySelector(".section");
let header = document.querySelector(".header");
let brandHeader = document.querySelector(".header-2");
let someProducts = document.querySelector(".some");
let card = document.querySelector(".card");
let card2 = document.querySelector(".card2");
let card3 = document.querySelector(".card3");
let swipe = document.querySelector(".swipe");
let darkModeToggle = document.querySelector('input[type="checkbox"]');

//  Navbar on mobile
hamburgerMenu.addEventListener("click", (e) => {
  modalMenu.classList.toggle("hidden");
  if (!modalMenu.classList.contains("hidden")) {
    overlayMenu.classList.remove("hidden");
  } else {
    overlayMenu.classList.add("hidden");
  }
  if (!modalMenu.classList.contains("hidden")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
});

document.addEventListener("click", (e) => {
  if (
    e.target === overlayMenu ||
    e.target === navBar ||
    e.target.classList.contains("nav-child")
  ) {
    modalMenu.classList.add("hidden");
    overlayMenu.classList.add("hidden");
    document.body.style.overflow = "visible";
  } else {
  }
});

// Darkmode
darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  navBar.classList.toggle("dark:bg-[#3F3D56]");
  mainElement.classList.toggle("dark:bg-[#25233A]");
  header.classList.toggle("dark:text-white");
  section.classList.toggle("dark:bg-[#2F3D56]");
  section.classList.toggle("dark:text-white");
  brands.classList.toggle("dark:bg-[#2F3D56]");
  brandHeader.classList.toggle("dark:text-white");
  products.classList.toggle("dark:bg-[#25233A]");
  someProducts.classList.toggle("dark:text-white");
  card.classList.toggle("dark:bg-[#232027]");
  card2.classList.toggle("dark:bg-[#232027]");
  card3.classList.toggle("dark:bg-[#232027]");
  swipe.classList.toggle("dark:bg-gray-200");
});

// Shorten Link with bit.ly API
inputValue.addEventListener("change", () => {
  actualValue = inputValue.value;
});

shortenButton.addEventListener("click", () => {
  actualValue = inputValue.value;
  shortenUrl(actualValue);
});
async function shortenUrl(urlToShorten) {
  try {
    const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        Authorization: "Bearer 79e9475dcb4ef6b4c2938a90c482cc7f85f63eb5",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        long_url: urlToShorten,
        domain: "bit.ly",
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

// Add Products from Fakestore API
async function productsAPI() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    const items = data.forEach((item) => {
      const image = item.image;

      productEl.innerHTML += `
      <div class="relative w-full lg:h-68 h-72 bg-white bg-no-repeat overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 group ">
        <!-- Overlay div -->
        <div class="absolute inset-0 bg-[#000000] opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
        <!-- Image div -->
        <div class="absolute inset-0 bg-contain bg-no-repeat bg-center transition-transform duration-300 ease-in-out" style="background-image: url(${image});"></div>
        <!-- Button -->
        <button class="absolute text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 m-1 border-2 font-semibold text-base border-[#ffffff] rounded-sm left-1 right-1 top-1 bottom-1">
          SHOP NOW
        </button>
      </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

productsAPI();

// TypewriterJs Source Code
var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString(
    "More than just <strong class='text-[#29b2b7] font-extrabold'>Shorter links</strong>"
  )
  .pauseFor(2500)
  .deleteAll()
  .typeString(
    "We offer <strong class='text-[#29b2b7] font-extrabold'>Brand Identity</strong>"
  )
  .pauseFor(2500)
  .deleteChars(14)
  .typeString(
    "<strong class='text-[#29b2b7] font-extrabold'>E-Commerce</strong>"
  )
  .deleteAll()
  .typeString(
    "<strong class='text-[#29b2b7] font-extrabold'>and Analytics</strong>"
  )
  .pauseFor(2500)
  .start();

// Swiper Source Code
var swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
      centeredSlides: true,
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },

    1280: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

// Confetti
here.addEventListener("click", () => {
  confetti({
    particleCount: 200, // Reduced particle count
    spread: 120, // Increased spread
    origin: { y: 0.5 }, // Adjusted origin
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
  });
});
