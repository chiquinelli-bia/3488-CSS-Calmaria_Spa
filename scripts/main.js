function alternarSubmenu(item, mostrar) {
  const subMenu = item.querySelector(".submenu");
  if (subMenu) {
    subMenu.style.display = mostrar ? "block" : "none";
    const menuItem = item.querySelector(".cabecalho__lista-item a");
    menuItem.setAttribute("aria-expanded", mostrar ? true : false);
    const SubMenuIcon = item.querySelector(".material-symbols-outlined");
    SubMenuIcon.classList.toggle("active", mostrar);
  }
}

document.querySelectorAll(".cabecalho__lista-item").forEach((item) => {
  item.addEventListener("mouseover", () => alternarSubmenu(item, true));
  item.addEventListener("mouseout", () => alternarSubmenu(item, false));
  item.addEventListener("click", () => {
    const subMenu = item.querySelector(".submenu");
    const isDisplayed = subMenu.style.display === "block";
    alternarSubmenu(item, !isDisplayed);
  });
});
