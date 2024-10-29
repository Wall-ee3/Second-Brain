function navigateToPage(event) {
    event.preventDefault(); 
    window.location.replace('login.html'); 
}
//vai voltar nao fia da mae kkkkkkkkkkkkkkkkkk (aparentemente so funciona quando quer. !"estudar mais sobre")


document.querySelector('.theme-switch').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});


