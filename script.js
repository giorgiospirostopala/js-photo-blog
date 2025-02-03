const galleryContainer = document.querySelector(".gallery");

fetch("https://lanciweb.github.io/demo/api/pictures/")

    .then(response => response.json())
    .then(data => {
        console.log("Dati ricevuti:", data);

        data.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("col-md-4", "mb-4");

            card.innerHTML = `
                <div class="card">
                    <img src="${item.url}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.date}</p>
                    </div>
                </div>
            `;

            galleryContainer.appendChild(card);

        });

    })
    
    .catch(error => console.error("Errore nella richiesta:", error));