class NavBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            :host { 
                display: block;
                width: 100%;
                background-color: white !important;
                color: #000;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }

            h2 {
                padding: 20px 60px;
                font-size: 1.5rem;
            }
        </style>
        <h2>Mama's Cooking</h2>`;
    }
}

customElements.define("nav-bar", NavBar);