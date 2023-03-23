let total = 0
let deporte = "";
let dia = "";
let empieza;



do {
    empieza = prompt("Bienvenido a Reserva tu cancha! \n Queres reservar ahora? ingresa: s");

} while (empieza != "s");

reservarCancha();



function reservarCancha() {




    alert(
        "Bienvenido Nuevamente!\n Selecciona el Deporte\n 1- Futbol - $11000 \n 2- Padel - $4000 \n 3- Ajedrez - $1000  "
    );

    let deporte = prompt("Elegí el Deporte: Futbol, Padel o Ajedrez?").toLowerCase();


    switch (deporte) {
        case ("1"):
            deporte = "Futbol"
        case ("futbol"):
            alert("OK Messi, Empecemos");
            total += 11000
            alert("El total sería: $ " + total + "!");
            reservarDia();
            alert("Listo, reservaste para el: " + dia + " para jugar al: " + deporte);
            alert("Juntate los $ " + total + " y las ganas de correr");
            break;

        case ("2"):
            deporte = "Padel"
        case ("padel"):
            alert("Padel! Buena elección ");
            total += 4000;
            alert("El Total sería: $  " + total + "!");
            reservarDia();
            alert("Listo, reservaste para el: " + dia + " para jugar al: " + deporte);
            alert("Juntate los $ " + total + " :)  Gracias");
            break;

        case ("3"):
            deporte = "Ajedrez"
        case ("ajedrez"):
            alert("Deporte? ok.. ");
            total += 1000;
            alert("El Total sería: " + total + "!");
            reservarDia()
            alert("Listo, reservaste para el: " + dia + " para jugar al: " + deporte);
            alert("Juntate los $ " + total + " :) Y preparate para pensar");
            break;

        default:
            alert("Ese deporte aun no lo tenemos, seleccione un deporte de la lista!");
            reservarCancha();
    }

}



function reservarDia() {

    alert("Ya elegiste el deporte, ahora decinos cuando venis \n Sabado o Domingo? ");
    dia = prompt("Ingresa el dia de la reserva").toLowerCase();

    switch (dia) {
        case ("sab"):
            dia = " Sabado"
        case ("sabado"):

            alert("Gracias ! Reservaste para el Sabado");
            break;

        case ("dom"):
            dia = "Domingo"
        case ("domingo"):
            alert("Gracias Reservaste para el Domingo");
            break;

        default:
            alert("Ese dia no estamos, selecciona Sabado o Domingo")
            reservarDia();
    }

}





