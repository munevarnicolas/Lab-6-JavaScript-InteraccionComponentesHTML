let itemsTotales = 0;
let totalPrecio = 0;
let envioGratisAplicado = false;

function agregarAlCarrito(nombreProducto, precio) 
{
    itemsTotales = itemsTotales + 1;
    let contadorItems = document.getElementById("contador-items");
    contadorItems.innerText = itemsTotales;
    
    totalPrecio = totalPrecio + precio;
    let contadorPrecio = document.getElementById("total-precio");
    contadorPrecio.innerText = totalPrecio;
    
    console.log("Producto agregado: " + nombreProducto);
    console.log("Total de items: " + itemsTotales);
    console.log("Total a pagar: $" + totalPrecio);
    
    if (totalPrecio > 50) 
    {
        if (envioGratisAplicado === false) 
        {
            alert("Envio gratis aplicado");
            envioGratisAplicado = true;
        }
    }
}

function vaciarCarrito() 
{
    itemsTotales = 0;
    totalPrecio = 0;
    envioGratisAplicado = false;
    
    let contadorItems = document.getElementById("contador-items");
    contadorItems.innerText = 0;
    
    let contadorPrecio = document.getElementById("total-precio");
    contadorPrecio.innerText = 0;
    
    alert("Carrito vacio");
}