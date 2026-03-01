const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main-content");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hide");
    mainContent.classList.toggle("full");
});