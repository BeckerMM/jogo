let contador = 1;
const array = ["Linda", "Perfeita", "Carinhosa", "Estressada", "Minha melhor amiga", "Minha Jogadora", "Um pouco ciumenta", "Importante","Companheira", "Por fim, a minha princesa!"];

const addTexto = (valor) => {


    console.log(contador);
    if (valor == contador) {
        const quadrado = document.getElementById(contador);
        quadrado.innerHTML = "<p class='texto'>"+ array[contador] + "</p>";
        quadrado.classList.add("quadrado");
        contador++;
    }

    if (contador == 9) {
        setTimeout(() => {
        window.location.replace("./pag3.html");
    }, "30000");
}

}