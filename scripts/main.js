function alternarSubmenu(item, mostrar) {
  const subMenu = item.querySelector(".submenu");
  if (subMenu) {
    subMenu.style.display = mostrar ? "block" : "none";
  }
}

document.querySelectorAll(".cabecalho__lista-item").forEach((item) => {
  item.addEventListener("mouseover", () => alternarSubmenu(item, true));
  item.addEventListener("mouseout", () => alternarSubmenu(item, false));
  item.addEventListener("click", () => {
    const subMenu = item.querySelector(".submenu");
    const isDisplayed = subMenu.computedStyleMap.display === "block";
    alternarSubmenu(item, !isDisplayed);
  });
});
