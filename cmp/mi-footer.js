class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Eder Germán Márquez Sánchez IC - 52M.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
