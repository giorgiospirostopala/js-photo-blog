
//-     richiamo gli elementi
const galleryContainer = document.querySelector(".gallery");
const cover = document.getElementById("cover");
const immagineCover = document.getElementById("immagine-cover");
const chiudiCover = document.getElementById("chiudi-cover");

//-     (o axios.metodo(url)) chiamata Ajax al server esterno
fetch("https://lanciweb.github.io/demo/api/pictures/") //!  ovvero " fetch("url", {method: "GET"}) " che è standard

    .then(response => response.json())

    .then(data => { 
        console.log(data);

        data.forEach(oggetto => {

            const card = document.createElement("div");
            card.classList.add("col-md-4", "mb-4");

            card.innerHTML = `
                <div class="card">
                    <img src="${oggetto.url}" class="card-img-top immagine-galleria" alt="pic">
                    <div class="card-body">
                        <h5 class="card-title">${oggetto.title}</h5>
                        <p class="card-text">${oggetto.date}</p>
                    </div>
                </div>
            `;

            galleryContainer.appendChild(card);

            //- il .querySelector() non avrebbe funzionato se riferito a "document", perché siamo in un ciclo
            const img = card.querySelector(".immagine-galleria");
            img.addEventListener("click", () => {
                immagineCover.src = oggetto.url;
                cover.style.display = "flex";
            });

        });

    })

    .catch(error => console.error(error));

    chiudiCover.addEventListener("click", () => {
        cover.style.display = "none";
    });
    
    //! se lasciassi così, anche cliccando sull'immagine otterrei il d-none
    cover.addEventListener("click", () => {
        cover.style.display = "none";
    });

    //* quindi uso .target in un if perché è il “bersaglio” effettivo dell’evento
    cover.addEventListener("click", (evento) => {
        if (evento.target === cover) {         //// se il target del mio evento coincide con "cover" allora:
            cover.style.display = "none";
        }
    });

