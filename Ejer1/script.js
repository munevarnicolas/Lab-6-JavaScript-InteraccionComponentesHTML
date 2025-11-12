let votosVideojuegos = 0;
let votosCiberseguridad = 0;
let votosIA = 0;
let totalVotos = 0;

function darVoto(opcion) 
{
    if (opcion === "videojuegos")
    {
        votosVideojuegos += 1;
        document.getElementById("votos-videojuegos").innerText = votosVideojuegos;
    }
    
    if (opcion === "ciberseguridad") 
    {
        votosCiberseguridad += 1;
        document.getElementById("votos-ciberseguridad").innerText = votosCiberseguridad;
    }
    
    if (opcion === "ia") 
    {
        votosIA += 1;
        document.getElementById("votos-ia").innerText = votosIA;
    }
    
    totalVotos += 1;
    document.getElementById("total-votos").innerText = totalVotos;
    
    alert("Gracias por su voto");
    
    if (totalVotos % 5 === 0) 
    {
        console.log("Total de votos: " + totalVotos);
    }
}