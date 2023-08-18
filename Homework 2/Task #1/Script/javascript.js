function iniciar(){
    let numero=parseInt(prompt("Por favor digite un número")); //Leer un número

    if (numero < 10 && numero % 2 === 0){ //Se ejecuta si el número es menor a 10 y par
        document.getElementById("resultado").textContent = `(${numero}) Soy un número par menor a 10`;
    } else if (numero < 10 && numero % 2 !== 0){ //Se ejecuta si el número es menor a 10 e impar
        document.getElementById("resultado").textContent = `(${numero}) Soy un número impar menor a 10`;
    } else if (numero === 10){ //Se ejecuta si el número es igual a 10
        document.getElementById("resultado").textContent = "¡Soy el número 10!";
    } else if (numero > 10){ //Si el usuario ingresa un número mayor a se le pregunta si desea realizar un promedio
        let seguir=prompt("Desea sacar un promedio de número mayores a 10 Sí/No?")
        if (seguir === "SI" || seguir === "si" || seguir === "SÍ" || seguir === "Sí" || seguir === "sí" ){
            let input = prompt("Ingrese los números unicamente separados por comas");
            let array = input.split(","); //recibe el string, los separa según la posición de la coma y crea un arreglo
            array = array.map(Number); // convierte el arreglo de string a número
            console.log(array);
            let suma = array.reduce((a, n) => (a += n, a), 0); //calcula el promedio de varios número utilizando la función [reduce()]. Referencia: https://www.youtube.com/watch?v=ryig1Kg9RP0
            console.log(suma)
            let promedio = suma / array.length; //Divide el resultado de la suma por el número de elementos en el array
            document.getElementById("resultado").textContent = "El promedio de los números ingresados es: "+promedio
        }
        else{
            alert("Precione el botón para intentarlo de nuevo")
        }
    }else {
        alert("Por favor ingrese números unicamente")
    }
}


