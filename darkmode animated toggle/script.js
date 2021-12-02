const sunMoonContainer = document.querySelector(".sun-moon-container");
const backgroundVideo = document.querySelector("#backgroundVideo");
const body = document.body;

document.querySelector(".theme-toggle-button").addEventListener("click", () => {
  body.classList.toggle("snow");
  const currentRotation = parseInt(
    getComputedStyle(sunMoonContainer).getPropertyValue("--rotation")
  );
  sunMoonContainer.style.setProperty("--rotation", currentRotation + 180);
  if (body.classList.contains("snow")) {
    backgroundVideo.setAttribute("src", "Snowflakes.mp4");
  } else {
    backgroundVideo.setAttribute("src", "ChristmasTree.mp4");
  }
});
