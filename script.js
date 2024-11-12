function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const caixasDeEstrelas = document.querySelectorAll(".estrelas");

    caixasDeEstrelas.forEach((caixa) => {
        const estrelas = caixa.querySelectorAll("span");
        const ratingId = caixa.getAttribute("data-rating");
        const ratingValueElement = document.getElementById(`rating-${ratingId}`);

        estrelas.forEach((estrela, index) => {
            estrela.addEventListener("click", () => {
                // Atualiza a cor das estrelas até a estrela clicada
                estrelas.forEach((s, i) => {
                    if (i <= index) {
                        s.classList.add("active");
                    } else {
                        s.classList.remove("active");
                    }
                });

                // Define o valor da avaliação
                const valor = index + 1;
                ratingValueElement.textContent = valor;
            });

            estrela.addEventListener("mouseover", () => {
                // Mostra a cor temporária para todas as estrelas até a estrela hover
                estrelas.forEach((s, i) => {
                    if (i <= index) {
                        s.classList.add("active");
                    } else {
                        s.classList.remove("active");
                    }
                });
            });

            estrela.addEventListener("mouseout", () => {
                // Restaura a cor das estrelas até o valor real da avaliação
                const valorAtual = parseInt(ratingValueElement.textContent);
                estrelas.forEach((s, i) => {
                    if (i < valorAtual) {
                        s.classList.add("active");
                    } else {
                        s.classList.remove("active");
                    }
                });
            });
        });
    });
});
 