let ultElementFocado;

function gerenciarFocoModal(modalId) {
  const modal = document.querySelector(`#${modalId}`);
  const elementosModal = modal.querySelectorAll(
    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const primeiroElemento = elementosModal[0];
  const ultimoElemento = elementosModal[elementosModal.length - 1];
  primeiroElemento.focus();

  modal.addEventListener("keydown", (event) => {
    if (event.key === "Tab" && event.shiftKey) {
      if (document.activeElement === primeiroElemento) {
        event.preventDefault();
        ultimoElemento.focus();
      }
    } else {
      if (
        document.activeElement === ultimoElemento ||
        !modal.contains(document.activeElement)
      ) {
        event.preventDefault();
        primeiroElemento.focus();
      }
    }
  });
}
function alternarModal(modalId, value) {
  const modal = document.querySelector(`#${modalId}`);
  if (value) {
    ultElementFocado = document.activeElement;
    modal.style.display = "block";
    gerenciarFocoModal(modalId);
  } else {
    if (ultElementFocado) {
      ultElementFocado.focus();
    }
    modal.style.display = "none";
  }
  document.body.style.overflow = value ? "hidden" : "auto";
}

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
function alternarAcordeao(buttonClicado) {
  const valueButton = buttonClicado.getAttribute("aria-expanded") === "true";
  const contentClicado = buttonClicado.nextElementSibling;
  document.querySelectorAll(".botao-acordeao").forEach((button) => {
    const content = button.nextElementSibling;
    content.classList.remove("expandido");
    button.setAttribute("aria-expanded", false);
    content.setAttribute("aria-hidden", true);
  });
  if (!valueButton) {
    contentClicado.classList.add("expandido");
    buttonClicado.setAttribute("aria-expanded", true);
    contentClicado.setAttribute("aria-hidden", false);
  }
}
