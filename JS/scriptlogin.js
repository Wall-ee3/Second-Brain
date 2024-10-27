function validarLogin(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    successMessage.style.display = "none";
    errorMessage.style.display = "none";

    if (email === "admin" && senha === "admin") {
        successMessage.style.display = "flex";
    } else {
        errorMessage.style.display = "flex";
        if (email !== "admin" && senha !== "admin") {
            errorMessage.textContent = "Erro! Login e senha incorretos";
        } else if (email !== "admin") {
            errorMessage.textContent = "Erro! Login incorreto";
        } else {
            errorMessage.textContent = "Erro! Senha incorreta";
        }
    }
}