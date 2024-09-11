function filterGallery(category) {
  var items = document.querySelectorAll(".gallery-item");

  items.forEach(function (item) {
    if (category === "all" || item.getAttribute("data-category") === category) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
