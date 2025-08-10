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
export default alternarAcordeao;
