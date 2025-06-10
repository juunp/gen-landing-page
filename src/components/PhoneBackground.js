const template = `
  <style>
  </style>
  <container>
    <slot></slot>
  </container>
`
class CustomizerPhoneBackground extends HTMLElement {
    static observedAttributes = ["color", "background-color", "font-family"];
    constructor() {
        super();
        const elem = document.createElement('template')
        elem.innerHTML = template

        this.attachShadow({ mode: 'open' }).appendChild(
            elem.content.cloneNode(true)
        )
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
        const color = this.getAttribute("color")
        const backgroundColor = this.getAttribute("background-color");
        const fontFamily = this.getAttribute("font-family");
        var style = this.shadowRoot?.querySelector("style");
        if (style != null && style != undefined) {
            console.log("style will change " +color)
            style.textContent = `
                container {
                    background-color: ${backgroundColor};
                    color: ${color};
                    font-family: ${fontFamily};
                }
            `;
        }
    }
}

customElements.define("phone-background", CustomizerPhoneBackground);
