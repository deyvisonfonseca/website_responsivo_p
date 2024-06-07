var a = document.getElementById("p");

function clicar() {
    a.innerHTML = "Olá Mundo!!!";
    a.classList.toggle("cor");
}

// Eventos de mouseover, mouseout e click aos títulos
document.querySelectorAll('.content h2').forEach(function (element) {
    element.addEventListener('mouseover', function () {
// Muda a cor do texto ao passar o mouse
        element.style.color = 'blue';
    });

    element.addEventListener('mouseout', function () {
// Restaura a cor original do texto ao remover o mouse
        element.style.color = '';
    });

    element.addEventListener('click', function () {
// Altera o texto do parágrafo ao clicar no título
        element.nextElementSibling.innerHTML = 'Texto alterado pelo clique!';
    });
});
