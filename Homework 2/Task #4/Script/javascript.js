const input = prompt("Ingrese los números unicamente separados por comas");
        let array = input.split(","); //separa los strings de acuerdo a la posición de la coma y crea un arreglo
        array = array.map(Number); //Convierte el arreglo de string a numbers
        console.log(array);

        array.sort(function(a, b){return a-b}); //Orden Ascendente  https://www.w3schools.com/jsref/jsref_sort.asp
        document.write(array + '<br>');

        array.sort(function(a, b){return b-a}); //Orden Descendente https://www.w3schools.com/jsref/jsref_sort.asp
        document.write(array);