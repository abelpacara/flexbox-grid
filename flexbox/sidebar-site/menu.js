document.addEventListener("DOMContentLoaded", () => {
  console.log('load events');
  const btn = document.getElementById("btn");
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");

  btn.addEventListener("click", () => {
    console.log('click toggle');
    sidebar.classList.toggle("collapsed");
    content.classList.toggle("expanded");
  });
});