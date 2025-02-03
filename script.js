const galleryContainer = document.querySelector(".gallery");

const cover = document.getElementById("cover");
const immagineCover = document.getElementById("immagine-cover");
const chiudiCover = document.getElementById("chiudi-cover");

fetch("https://lanciweb.github.io/demo/api/pictures/")

    .then(response => response.json())
    .then(data => {
        console.log(data);

        data.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("col-md-4", "mb-4");

            card.innerHTML = `
                <div class="card">
                    <img src="${item.url}" class="card-img-top immagine-galleria" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.date}</p>
                    </div>
                </div>
            `;

            galleryContainer.appendChild(card);

            const img = card.querySelector(".immagine-galleria");
            img.addEventListener("click", () => {
                immagineCover.src = item.url;
                cover.style.display = "flex";
            });

        });

    })

    .catch(error => console.error(error));

    chiudiCover.addEventListener("click", () => {
        cover.style.display = "none";
    });
    
    cover.addEventListener("click", (e) => {
        if (e.target === cover) {
            cover.style.display = "none";
        }
    });