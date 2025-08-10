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
    if (event.key === "Tab") {
      if (event.shiftKey) {
        if (document.activeElement === primeiroElemento) {
          event.preventDefault();
          ultimoElemento.focus();
        }
      } else {
        if (document.activeElement === ultimoElemento) {
          event.preventDefault();
          primeiroElemento.focus();
        }
      }
    }
  });
}

function alternarModal(modalId, abrir) {
  debugger;
  const modal = document.querySelector(`#${modalId}`);

  if (abrir) {
    ultElementFocado = document.activeElement;
    modal.style.display = "block";
    gerenciarFocoModal(modalId);
  } else {
    modal.style.display = "none";
    if (ultElementFocado) {
      ultElementFocado.focus();
    }
  }

  document.body.style.overflow = abrir ? "hidden" : "auto";
}

export default alternarModal;
