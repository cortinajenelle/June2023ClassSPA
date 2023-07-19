export { default as Header } from "./Header";
import { Header, Nav, Main, Footer } from "./components";

function render() {
    document.querySelector("#root").innerHTML = `
        ${Header()}
        ${Nav()}
        ${Main()}
        ${Footer()}
      `;
  }
  
  render();