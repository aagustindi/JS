let total = 0
deporte= "";
dia="";


reservarCancha();

function reservarCancha(){

    alert(
        "Bienvenido a Reserva tu cancha!\n Selecciona el Deporte\n 1- Futbol - $11000 \n 2- Padel - $4000 \n 3- Ajedrez - $1000  "
    );

    let deporte = prompt("Elegí el Deporte: Futbol, Padel o Ajedrez?").toLowerCase(); 


    switch (deporte){
        case ("futbol" || "1"): 
        alert("OK Messi, Empecemos");
        total += 11000
        alert("El total sería: $ " + total + "!");  
        reservarDia();
        alert("Listo, reservaste para el: " + dia + " para jugar al: " + deporte )
        alert ("Juntate los $ " + total + " y las ganas de correr")
        break;

        case ("padel" || "2"): 
        alert("Padel! Buena elección ");
        total += 4000;
        alert("El Total sería: $  " + total + "!"); 
        reservarDia();
        alert("Listo, reservaste para el: " + dia + " para jugar al: " + deporte)
        alert ("Juntate los $ " + total + " :)  Gracias")
        break;

        case ("ajedrez" || "3"): 
        alert("Deporte? ok.. ");
        total += 1000;
        alert("El Total sería: " + total + "!");  
        reservarDia()
        alert("Listo, reservaste para el: " + dia + " para jugar al: " + deporte) 
        alert ("Juntate los $ " + total + " :) Y preparate para pensar")
        break;

        default: 
        alert("Ese deporte aun no lo tenemos, seleccione un deporte de la lista!");
        reservarCancha();  
    }

}



function reservarDia(){

    alert ("Ya elegiste el deporte, ahora decinos cuando venis \n Sabado o Domingo? ");
    dia = prompt("Ingresa el dia de la reserva").toLowerCase();

    switch (dia){
        case ("sabado"):
            alert("Gracias ! Reservaste para el Sabado");
            break;
        
        case ("domingo"):
            alert("Gracias Reservaste para el Domingo");
            break;

        default:
            alert("Ese dia no estamos, selecciona Sabado o Domingo")
            reservarDia();
    }

}





