(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open_fr]"),
    closeModalBtn: document.querySelector("[data-modal-close_fr]"),
    modal: document.querySelector("[data-modal_fr]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();