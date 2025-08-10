import alternarModal from "./modal.js";
import alternarSubmenu from "./submenu.js";
import alternarAcordeao from "./acordeao.js";

document.querySelectorAll("button[data-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    alternarModal(modalId, true);
  });
});
document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-close-modal");
    alternarModal(modalId, false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    alternarModal("ver-modal-inscrito", false);
    alternarModal("ver-modal-contato", false);
    alternarModal("ver-modal-enviado", false);
    document.querySelectorAll(".cabecalho__lista-item").forEach((item) => {
      alternarSubmenu(item, false);
    });
  }
});

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
