const url = "https://api.nasa.gov/planetary/apod?api_key=1NLhkDPy2A7Hz5vfuOArTaFrH5UK5KXcHu0BPrwT&count=15"

async function listaImagenes(){
    // con try intentamos hacer la solicitud
//    si la solictud falla se ejecuta el catch
    try{
        let fetchImagenes =  await fetch(url)
        // comvertir datos de json a objeto
        let datosImagenes = await fetchImagenes.json()
        const card = document.querySelector("[data-ul]")
   
             // para cada elemento del array hacemos una card
        datosImagenes.forEach(elemento => {
          const contenido =   `
          <li class="card">
          <img class="card__image" src="${elemento.url}" alt="imagen">
          <h3 class="card__title">${elemento.title}</h3>
        </li>
            `
          
            card.innerHTML = card.innerHTML + contenido; 
        });
        
    }
    catch(error){
        console.log(error);
    }
}

listaImagenes()