// ---- Watchlist logic ----
const hearts = document.querySelectorAll(".heart");

// Load existing watchlist from localStorage
let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

hearts.forEach(heart => {
  // Get movie title from data-title attribute
  const movieTitle = heart.parentElement.getAttribute("data-title");

  // Mark already saved movies as active
  if (watchlist.includes(movieTitle)) {
    heart.classList.add("active");
    heart.textContent = "❤️";
  }

  heart.addEventListener("click", () => {
    heart.classList.toggle("active");

    if (heart.classList.contains("active")) {
      heart.textContent = "❤️";
      if (!watchlist.includes(movieTitle)) {
        watchlist.push(movieTitle);
      }
    } else {
      heart.textContent = "❤️";
      watchlist = watchlist.filter(title => title !== movieTitle);
    }

    // Save updated list
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    console.log("Watchlist:", watchlist);
  });
});
