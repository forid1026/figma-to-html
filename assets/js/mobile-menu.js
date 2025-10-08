const sidebar = document.getElementById("mobileSidebar");
const openBtn = document.getElementById("menuIcon");
const closeBtn = document.getElementById("closeSidebar");

// create overlay dynamically
const overlay = document.createElement("div");
overlay.classList.add("sidebar-overlay");
document.body.appendChild(overlay);

// Open sidebar
openBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// Close when clicking overlay
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// Close when clicking any sidebar link
document.querySelectorAll(".sidebar-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });
});


$(".filter-btn").on("click", function () {
  var filter = $(this).attr("data-filter");

  $(".filter-btn").removeClass("active");
  $(this).addClass("active");

  if (filter === "*" || filter === "all") {
    $(".portfolio-item").show(300);
  } else {
    $(".portfolio-item").hide(300);
    $(filter).show(300);
  }
});
