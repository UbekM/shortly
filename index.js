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
darkMode.addEventListener("click", () => {
  if (navBar.style.backgroundColor === "#25233A") {
    // #25233A in RGB format
    navBar.style.backgroundColor = "white"; // Light mode color
  } else {
    navBar.style.backgroundColor = "#25233A"; // Dark mode color
  }
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
    "More than just <strong class='text-[#247e88] font-extrabold'>Shorter links</strong>"
  )
  .pauseFor(2500)
  .deleteAll()
  .typeString(
    "We offer <strong class='text-[#247e88] font-extrabold'>Brand Identity</strong>"
  )
  .pauseFor(2500)
  .deleteChars(14)
  .typeString(
    "<strong class='text-[#247e88] font-extrabold'>E-Commerce</strong>"
  )
  .deleteAll()
  .typeString(
    "<strong class='text-[#247e88] font-extrabold'>and Analytics</strong>"
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
