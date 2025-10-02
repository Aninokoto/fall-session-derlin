// ===== Toggle Navbar =====
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// ===== Secret Code: WWSSADAD =====
const secretCode = ["w","w","s","s","a","d","a","d"];
let userInput = [];

document.addEventListener("keydown", function(event) {
  userInput.push(event.key.toLowerCase());

  // Keep only the last 8 inputs
  if (userInput.length > secretCode.length) {
    userInput.shift();
  }

  // Check if input matches secret code
  if (userInput.join("") === secretCode.join("")) {
    // Already on Secret.html?
    if (!window.location.pathname.toLowerCase().includes("secret.html")) {

      // Determine relative path dynamically
      let path;
      const currentPath = window.location.pathname;

      // If on index.html or root, Secret.html is in folder/
      if (currentPath.endsWith("index.html") || currentPath === "/" || !currentPath.includes("/folder/")) {
        path = "folder/Secret.html";
      } else {
        // If already in folder (like store.html or contact.html), Secret.html is same folder
        path = "Secret.html";
      }

      window.location.href = path;
    } else {
      console.log("Secret code activated on Secret page!");
      // Optional: add extra actions if needed on Secret.html
    }
  }
});
