import { getDomElement, displayMedia } from "./helper.js";

function tri() {
  let mediasTries;

  // Selecting elements
  const toggle = document.querySelector("#toggle");
  const date = document.querySelector(".date");
  const name = document.querySelector(".name");
  const popularity = document.querySelector(".popularity");
  const options = document.querySelectorAll(".option");

  // Event listener for toggle button
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");

    options.forEach(function (option) {
      option.classList.toggle("visible", toggle.classList.contains("active"));
    });
  });
  // Helper function to set filter state
  function setFilterState(activeFilter, inactiveFilters) {
    toggle.classList.remove("active");
    options.forEach(function (option) {
      option.classList.remove("visible");
    });

    activeFilter.classList.add("active-filter");
    inactiveFilters.forEach((filter) =>
      filter.classList.remove("active-filter")
    );
  }
  // Helper functions to sort media objects
  function sortMediaByDate() {
    const container = document.querySelector(".photograph-media");
    const tableauObjets = getDomElement();
    container.innerHTML = "";
    return [...tableauObjets].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  }
  function sortMediaByName() {
    const container = document.querySelector(".photograph-media");
    const tableauObjets = getDomElement();
    container.innerHTML = "";
    return [...tableauObjets].sort((a, b) => a.title.localeCompare(b.title));
  }
  function sortMediaByPopularity() {
    const container = document.querySelector(".photograph-media");
    const tableauObjets = getDomElement();
    container.innerHTML = "";
    return [...tableauObjets].sort((a, b) => b.likes - a.likes);
  }
  // Event listener for date filter
  function sortByDate() {
    setFilterState(date, [name, popularity]);
    mediasTries = sortMediaByDate();
    displayMedia(mediasTries);
  }
  date.addEventListener("click", sortByDate);
  date.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      sortByName();
    }
  });

  // Event listener for name filter
  function sortByName() {
    setFilterState(name, [date, popularity]);
    mediasTries = sortMediaByName();
    displayMedia(mediasTries);
  }
  name.addEventListener("click", sortByName);
  name.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      sortByName();
    }
  });

  // Event listener for popularity filter
  function sortByPopularity() {
    setFilterState(popularity, [date, name]);
    mediasTries = sortMediaByPopularity();
    displayMedia(mediasTries);
  }
  popularity.addEventListener("click", sortByPopularity);
  popularity.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      sortByName();
    }
  });
  sortByPopularity();
}

export default tri