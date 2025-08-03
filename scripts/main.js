function alternarModal(modalId, value) {
  const modal = document.querySelector(`#${modalId}`);
  if (value) {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
  document.body.style.overflow = value ? "hidden" : "auto";
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    alternarModal("ver-modal-inscrito", false);
    document.querySelectorAll(".cabecalho__lista-item").forEach((item) => {
      alternarSubmenu(item, false);
    });
  }
});

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

document.querySelectorAll(".botao-acordeao").forEach((button) => {
  button.addEventListener("click", () => alternarAcordeao(button));
});
function alternarAcordeao(button) {
  const valueButton = button.getAttribute("aria-expanded") === true;
  if (!valueButton) {
    const content = button.nextElementSibling;
    content.classList.add("expandido");
    button.setAttribute("aria-expanded", true);
    content.setAttribute("aria-hidden", false);
  }
}
