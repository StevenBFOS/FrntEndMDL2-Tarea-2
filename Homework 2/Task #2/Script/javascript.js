
let triangulo = parseInt(prompt("Digite la suma total de mis angulos:"))
if (triangulo === 180){ //La suma total de los angulos de un triángulo siempre dan 180 grados
    for (let i=0; i<10; i++){ //ejecuta el código 10 veces
        let angulos = parseInt(prompt("¿Cuántos ángulos iguales tengo?")) //para simplicar el código se pregunta por el número de angulos con el mismo valor en vez de cada uno de los 3 ángulos de un triángulo
        document.write(i + " ");
        if(angulos === 2){ //Un triángulo rectángulo tiene dos ángulos iguales 90 45 45
            document.write("Soy un triángulo rectángulo<br>");
        }else if (angulos === 3){ //Un triángulo acutángulo tiene 3 ángulso iguales 60 60 60
            document.write ("Soy un triángulo acutángulo<br>");
        }else if (angulos=== 0){ //En un triángulo obtusángulo todos sus angulos son diferentes
            document.write ("Soy un triángulo obtusángulo<br>");
        }}
}else{
    alert("No soy un triángulo") //Si la suma de sus angulos no es igual a 180, no es un triángulo
}