// TAB SWITCHING
  const tabs = document.querySelectorAll(".tab");
  const screens = document.querySelectorAll(".screen");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.screen;
      tabs.forEach(t => t.classList.remove("active"));
      screens.forEach(s => s.classList.remove("active"));
      tab.classList.add("active");
      document.querySelector(".screen-" + target).classList.add("active");
    });
  });

  // SCREEN 2 TO 3
  const transferBtn = document.querySelector(".transfer-btn");
  const closeBtn = document.querySelector(".close-btn");
  const screen2 = document.querySelector(".screen-2");
  const screen3 = document.querySelector(".screen-3");
  const screen4 = document.querySelector(".screen-4");
  const backArrow = screen4.querySelector(".back-arrow");
  const screen3Continue = document.getElementById("screen3-continue");

  transferBtn.addEventListener("click", () => {
    screen2.classList.remove("active");
    screen3.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    screen3.classList.remove("active");
    screen2.classList.add("active");
  });

  // SCREEN 3 TO 4
  screen3Continue.addEventListener("click", () => {
    screen3.classList.remove("active");
    screen4.classList.add("active");
  });

  // SCREEN 4 BACK TO 3
  backArrow.addEventListener("click", () => {
    screen4.classList.remove("active");
    screen3.classList.add("active");
  });

  // Hide "Required" on focus in screen 4
  screen4.querySelectorAll('.input-row input').forEach(input => {
    const requiredLabel = input.parentElement.querySelector('.required');
    input.addEventListener('focus', () => {
      if (requiredLabel) requiredLabel.style.display = 'none';
    });
    input.addEventListener('blur', () => {
      if (input.value.trim() === '' && requiredLabel) {
        requiredLabel.style.display = 'block';
      }
    });
  });


  // === PASSWORD CONFIG ===
const PASSWORD = "emma.com10"; // your single password

// DOM elements
const passwordScreen = document.getElementById("password-screen");
const passwordInput = document.getElementById("password-input");
const passwordSubmit = document.getElementById("password-submit");
const passwordError = document.getElementById("password-error");
const mainContent = document.getElementById("main-content");

// Handle password submission
passwordSubmit.addEventListener("click", () => {
  const entered = passwordInput.value.trim();

  if (entered === PASSWORD) {
    // Correct password
    passwordScreen.style.display = "none";
    mainContent.style.display = "block";
  } else {
    // Wrong password
    passwordError.style.display = "block";
    passwordInput.value = "";
  }
});

// Optional: allow Enter key
passwordInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") passwordSubmit.click();
});
