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

export default alternarSubmenu;
