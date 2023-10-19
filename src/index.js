// should be minimal. Creates instances of your project.

import Example from "./scripts/example";

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    new Example(main);
})