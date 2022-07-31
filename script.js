const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    [...form.elements].forEach((el) => {
        const parent = el.parentElement;
        if (el.value !== "") {
            parent.classList.remove("danger");
        } else {
            // not including the submit btn
            if (el.type === "submit") return;
            parent.classList.add("danger");
            const small = parent.querySelector("small");
            small.innerText = `${el.placeholder} cannot be empty`;
            console.log();
        }
    });
});
